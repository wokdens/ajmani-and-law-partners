import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import { firmData } from "@/data/firm";

// In-memory rate limiting map for basic IP throttling
const rateLimitMap = new Map<string, { count: number; lastTime: number }>();

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();

    // Rate limiting: max 5 requests per IP in a 10-minute window
    const clientLimit = rateLimitMap.get(ip) || { count: 0, lastTime: now };
    if (now - clientLimit.lastTime < 10 * 60 * 1000) {
      if (clientLimit.count >= 5) {
        return NextResponse.json(
          {
            success: false,
            message: "Too many requests submitted. Please contact the office directly at +91 96544 31469.",
          },
          { status: 429 }
        );
      }
      clientLimit.count += 1;
    } else {
      clientLimit.count = 1;
      clientLimit.lastTime = now;
    }
    rateLimitMap.set(ip, clientLimit);

    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      matterType,
      preferredMethod,
      description,
      consent,
      website_honeypot,
    } = body;

    // Honeypot spam trap: if bot filled this hidden field, silently reject or fake success
    if (website_honeypot) {
      return NextResponse.json({ success: true, message: "Inquiry received." });
    }

    // Server-side validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid full legal name." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || phone.trim().length < 8) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid contact telephone number." },
        { status: 400 }
      );
    }

    if (!description || typeof description !== "string" || description.trim().length < 10) {
      return NextResponse.json(
        { success: false, message: "Please provide a brief outline of the matter (at least 10 characters)." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        {
          success: false,
          message: "You must acknowledge that submitting this form does not establish an advocate-client relationship.",
        },
        { status: 400 }
      );
    }

    // Sanitize values
    const sanitizedSubmission = {
      fullName: fullName.trim().slice(0, 100),
      email: email.trim().slice(0, 100),
      phone: phone.trim().slice(0, 25),
      matterType: String(matterType || "General Legal Matter").slice(0, 80),
      preferredMethod: String(preferredMethod || "Phone Call").slice(0, 30),
      description: description.trim().slice(0, 2000),
      submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      recipient: firmData.contact.email,
    };

    // Logging transmission in production server log securely without exposing to frontend
    console.log("[INQUIRY_RECEIVED_ALP]", {
      sender: sanitizedSubmission.fullName,
      email: sanitizedSubmission.email,
      phone: sanitizedSubmission.phone,
      matter: sanitizedSubmission.matterType,
      method: sanitizedSubmission.preferredMethod,
      timestamp: sanitizedSubmission.submittedAt,
    });

    // Save to local inquiries.json store for Client Admin Portal review
    try {
      const inquiriesFilePath = path.join(process.cwd(), "src", "data", "inquiries.json");
      let existingInquiries = [];
      if (fs.existsSync(inquiriesFilePath)) {
        existingInquiries = JSON.parse(fs.readFileSync(inquiriesFilePath, "utf8"));
      }
      const newInquiry = {
        id: `inq-${Date.now()}`,
        fullName: sanitizedSubmission.fullName,
        email: sanitizedSubmission.email,
        phone: sanitizedSubmission.phone,
        matterType: sanitizedSubmission.matterType,
        preferredMethod: sanitizedSubmission.preferredMethod,
        description: sanitizedSubmission.description,
        createdAt: new Date().toISOString(),
        status: "New Inquiry",
      };
      existingInquiries.unshift(newInquiry);
      fs.writeFileSync(inquiriesFilePath, JSON.stringify(existingInquiries, null, 2), "utf8");
    } catch (saveErr) {
      console.error("Error saving inquiry to store:", saveErr);
    }

    // Check if SMTP environment variables are configured
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT) || 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || smtpUser || "inquiries@ajmaniandlawpartners.com";

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      // 1. Email notification to Advocate Lalit Ajmani's chambers
      const chambersMailOptions = {
        from: `"Ajmani & Law Partners Web Desk" <${smtpFrom}>`,
        to: firmData.contact.email,
        replyTo: sanitizedSubmission.email,
        subject: `[New Legal Inquiry] ${sanitizedSubmission.matterType} — ${sanitizedSubmission.fullName}`,
        html: `
          <div style="font-family: 'Georgia', serif; color: #0a1128; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #0a1128; color: #ffffff; padding: 20px 24px;">
              <h2 style="margin: 0; font-size: 20px; letter-spacing: 1px;">AJMANI &amp; LAW PARTNERS</h2>
              <p style="margin: 4px 0 0 0; font-size: 11px; color: #c5a880; font-family: sans-serif; text-transform: uppercase;">
                Advocates &bull; New Delhi &bull; Online Inquiry Dispatch
              </p>
            </div>
            
            <div style="padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; line-height: 1.6; color: #334155;">
              <p style="margin-top: 0;">A prospective client has submitted an inquiry through the official website:</p>
              
              <table style="width: 100%; border-collapse: collapse; margin: 16px 0;">
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #0f172a;">Full Name:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${sanitizedSubmission.fullName}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px 0; font-weight: bold; color: #0f172a;">Contact Telephone:</td>
                  <td style="padding: 8px 0; color: #1e293b;"><a href="tel:${sanitizedSubmission.phone}" style="color: #9e7d47; font-weight: 600;">${sanitizedSubmission.phone}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px 0; font-weight: bold; color: #0f172a;">Email Address:</td>
                  <td style="padding: 8px 0; color: #1e293b;"><a href="mailto:${sanitizedSubmission.email}" style="color: #9e7d47;">${sanitizedSubmission.email}</a></td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px 0; font-weight: bold; color: #0f172a;">Nature of Matter:</td>
                  <td style="padding: 8px 0; color: #1e293b; font-weight: 600;">${sanitizedSubmission.matterType}</td>
                </tr>
                <tr style="border-bottom: 1px solid #e2e8f0;">
                  <td style="padding: 8px 0; font-weight: bold; color: #0f172a;">Preferred Response:</td>
                  <td style="padding: 8px 0; color: #1e293b;">${sanitizedSubmission.preferredMethod}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #0f172a;">Submission Time:</td>
                  <td style="padding: 8px 0; color: #64748b; font-size: 12px;">${sanitizedSubmission.submittedAt} (IST)</td>
                </tr>
              </table>

              <div style="background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 6px; padding: 16px; margin: 16px 0;">
                <h4 style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; color: #475569; letter-spacing: 0.5px;">Summary of Dispute / Legal Issue:</h4>
                <p style="margin: 0; white-space: pre-line; color: #0f172a;">${sanitizedSubmission.description}</p>
              </div>

              <p style="font-size: 11px; color: #94a3b8; margin-bottom: 0;">
                Notice: The sender acknowledged that transmitting this inquiry does not create an advocate-client relationship.
              </p>
            </div>
          </div>
        `,
      };

      // 2. Courtesy acknowledgement email to client
      const clientMailOptions = {
        from: `"Ajmani & Law Partners" <${smtpFrom}>`,
        to: sanitizedSubmission.email,
        subject: `Inquiry Received — Ajmani & Law Partners, New Delhi`,
        html: `
          <div style="font-family: 'Georgia', serif; color: #0a1128; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #0a1128; color: #ffffff; padding: 20px 24px;">
              <h2 style="margin: 0; font-size: 18px; letter-spacing: 1px;">AJMANI &amp; LAW PARTNERS</h2>
              <p style="margin: 4px 0 0 0; font-size: 11px; color: #c5a880; font-family: sans-serif; text-transform: uppercase;">
                Advocates &bull; High Court of Delhi &bull; Chambers Acknowledgement
              </p>
            </div>
            
            <div style="padding: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; line-height: 1.6; color: #334155;">
              <p style="margin-top: 0;">Dear ${sanitizedSubmission.fullName},</p>
              
              <p>
                Thank you for contacting <strong>Ajmani &amp; Law Partners</strong>. We confirm receipt of your inquiry regarding <strong>${sanitizedSubmission.matterType}</strong>.
              </p>
              
              <p>
                Advocate Lalit Ajmani or our litigation desk will review the particulars and contact you via <strong>${sanitizedSubmission.preferredMethod}</strong> during standard chambers hours (Monday – Saturday: 9:30 AM – 8:00 PM).
              </p>

              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 14px; margin: 16px 0; font-size: 12px; color: #475569;">
                <strong>Urgent Mention Notice:</strong> For matters with urgent court listings tomorrow or immediate bail applications, please contact our chambers directly via phone at <a href="tel:+919654431469" style="color: #9e7d47; font-weight: 600;">+91 96544 31469</a>.
              </div>

              <p style="margin-bottom: 0; font-size: 13px;">
                Sincerely,<br>
                <strong>Ajmani &amp; Law Partners</strong><br>
                <span style="font-size: 11px; color: #64748b;">Janakpuri, New Delhi – 110058</span>
              </p>
            </div>
          </div>
        `,
      };

      await transporter.sendMail(chambersMailOptions);
      await transporter.sendMail(clientMailOptions).catch((err) => {
        console.warn("[CLIENT_AUTO_REPLY_WARN]", err);
      });
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been transmitted to Advocate Lalit Ajmani's litigation desk.",
    });
  } catch (error) {
    console.error("[CONTACT_API_ERROR]", error);
    return NextResponse.json(
      {
        success: false,
        message: "An internal server error occurred while processing your request. Please call +91 96544 31469.",
      },
      { status: 500 }
    );
  }
}
