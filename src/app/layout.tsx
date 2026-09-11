import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BciDisclaimerModal } from "@/components/BciDisclaimerModal";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { FloatingContactButtons } from "@/components/FloatingContactButtons";
import { FontSizeClientSync } from "@/components/FontSizeClientSync";
import { AmbientMeshBackground } from "@/components/AmbientMeshBackground";
import { SchemaOrg } from "@/components/SchemaOrg";
import { firmData } from "@/data/firm";
import { getSiteSettings } from "@/data/settings";

export const viewport: Viewport = {
  themeColor: "#0A1128",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ajmaniandlawpartners.com"),
  title: {
    default: "Ajmani & Law Partners | Advocates & Legal Consultants, New Delhi",
    template: "%s | Ajmani & Law Partners, Advocates",
  },
  description:
    "Ajmani & Law Partners is a New Delhi-based litigation and dispute resolution law firm founded and led by Advocate Lalit Ajmani (D/5332/2017). Practicing before the High Court of Delhi and District Courts in Civil, Commercial, NI Act, and Arbitration matters.",
  keywords: [
    "Advocate Lalit Ajmani",
    "Ajmani and Law Partners",
    "Law firm Janakpuri New Delhi",
    "Delhi High Court Advocate",
    "Commercial litigation lawyer Delhi",
    "Civil lawyer Delhi",
    "Section 138 NI Act lawyer Delhi",
    "Cheque bounce lawyer Delhi",
    "Arbitration lawyer Delhi",
    "NCLT advocate Delhi",
    "Matrimonial lawyer West Delhi",
  ],
  authors: [{ name: "Advocate Lalit Ajmani", url: "https://ajmaniandlawpartners.com" }],
  creator: "Ajmani & Law Partners",
  publisher: "Ajmani & Law Partners",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ajmaniandlawpartners.com",
    title: "Ajmani & Law Partners | Advocates & Legal Consultants, New Delhi",
    description:
      "Strategic litigation practice led by Advocate Lalit Ajmani. Civil suits, commercial disputes, Section 138 NI Act, arbitration, and matrimonial disputes before Delhi High Court and District Courts.",
    siteName: "Ajmani & Law Partners",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajmani & Law Partners | Advocates, New Delhi",
    description:
      "Strategic litigation practice led by Advocate Lalit Ajmani before the High Court of Delhi and District Courts.",
  },
  alternates: {
    canonical: "https://ajmaniandlawpartners.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteSettings = getSiteSettings();
  const fontScale = siteSettings?.fontSizeScale || 100;
  const ambientBgEnabled = siteSettings?.ambientBackgroundEnabled ?? true;

  return (
    <html
      lang="en-IN"
      className="scroll-smooth"
      style={{ fontSize: `${fontScale}%` }}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF9F6] text-slate-900 font-sans selection:bg-brass-200 selection:text-navy-950 relative">
        {/* Dynamic Living Ambient Mesh Gradient Background (WokChords inspired, Law Firm calibrated) */}
        <AmbientMeshBackground initialEnabled={ambientBgEnabled} />

        {/* Dynamic Global Font Size Synchronizer */}
        <FontSizeClientSync initialScale={fontScale} />

        {/* Global Structured Data Schema */}
        <SchemaOrg type="LegalService" />

        {/* Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main id="main-content" className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />

        {/* Bar Council of India Regulatory Modal */}
        <BciDisclaimerModal />

        {/* Quick Contact Action Buttons (Bottom Left: Mail & Phone) */}
        <FloatingContactButtons />

        {/* WhatsApp Persistent Floating Action Button */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
