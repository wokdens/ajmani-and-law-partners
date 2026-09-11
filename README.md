# Ajmani & Law Partners — Official Website

Production-grade, bespoke, multi-page legal practice website for **Ajmani & Law Partners**, New Delhi, led by **Advocate Lalit Ajmani** (Enrolment No. D/5332/2017, Bar Council of Delhi).

---

## 🏛️ Practice & Firm Overview

- **Firm Name:** Ajmani & Law Partners
- **Principal Advocate:** Advocate Lalit Ajmani (Founding & Managing Partner)
- **Bar Enrolment:** D/5332/2017 (Bar Council of Delhi)
- **Academic Pedigree:**
  - B.A. LL.B. (Hons.), National Law Institute University (NLIU), Bhopal (2015)
  - LL.M. in Criminal Law, Rajiv Gandhi National University of Law (RGNUL), Patiala, Punjab (2017)
- **Public Service:** Registered Pro Bono Advocate with **Nyaya Bandhu**, Department of Justice, Ministry of Law and Justice, Government of India
- **Head Chambers:** C4G-17A, Janakpuri, New Delhi – 110058 (Near Mata Chanan Devi Hospital)
- **Registered Filing Office:** C2C/12/165, Janakpuri, New Delhi – 110058
- **Primary Telephone:** +91 96544 31469
- **Official Email:** `lalit@ajmaniandlawpartners.com`
- **Primary Jurisdictions:** High Court of Delhi, District Courts across Delhi-NCR (Tis Hazari, Saket, Patiala House, Rohini, Dwarka, Karkardooma, Rouse Avenue), NCLT & NCLAT New Delhi, regional courts across Haryana, Rajasthan, and Madhya Pradesh.

---

## ⚖️ Bar Council of India (BCI) Rule 36 Compliance

Under Rule 36 of the Bar Council of India Rules pursuant to the Advocates Act, 1961, advocates are strictly prohibited from advertising or soliciting work.

This website strictly implements:
1. **Mandatory BCI Disclaimer Modal:** First-time visitors are presented with an accessible regulatory disclosure confirming voluntary information seeking and absence of solicitation. User acceptance is saved locally via `localStorage`.
2. **Re-verification Link:** The BCI disclosure can be re-opened at any time from the website footer.
3. **No Exaggerated Marketing Claims:** Zero manufactured testimonials, zero fake victory statistics ("500+ wins", "99% success rate"), zero fake corporate stock models, and zero superlatives ("Best lawyer in Delhi").
4. **Substantive Educational Content:** Real published legal commentary authored by Advocate Lalit Ajmani on *LiveLaw*, *Mondaq*, and *TaxGuru*.

---

## 🧭 Multi-Page Architecture & Routes

```
/ (Home)                                  -> Hero, Ethos, Core Practices Grid, Selected Matters, Consultation Form
/about/                                   -> Firm founding, litigation discipline, 4 pillars, jurisdictional scope
/advocate-lalit-ajmani/                   -> Full factual profile: NLIU/RGNUL, Bar Council, Nyaya Bandhu, publications
/practice-areas/                          -> Complete directory of dispute disciplines
/practice-areas/civil-litigation/         -> Recovery of money, injunctions, specific performance, partition
/practice-areas/commercial-litigation/    -> Commercial suits, pre-institution mediation (12A), contract breach
/practice-areas/cheque-bounce-ni-act/     -> Section 138 NI Act, demand notices, 143A interim compensation
/practice-areas/matrimonial-family-disputes/ -> Mutual consent & contested divorce, maintenance, custody, DV Act
/practice-areas/arbitration-dispute-resolution/ -> Section 9/11/34 petitions, domestic tribunal advocacy, DIAC
/practice-areas/insolvency-bankruptcy/    -> Section 7 & 9 IBC petitions before NCLT New Delhi benches, CIRP
/insights/                                -> Legal scholarship & commentary hub
/insights/ni-act-interim-compensation/    -> Analysis of Section 143A NI Act and onus of proof (LiveLaw/TaxGuru)
/insights/arbitration-stamp-duty-enforceability/ -> Unstamped contracts & arbitration agreements (LiveLaw/Mondaq)
/insights/probate-executors-partition-suits/ -> Probate proceedings vs. civil partition suits (LiveLaw)
/insights/bnss-criminal-procedural-reforms/ -> BNSS 2023 procedural timelines & electronic summons (TaxGuru)
/insights/ibc-section-7-debt-default/     -> Section 7 IBC financial debt & default analysis (Mondaq)
/representative-matters/                  -> Publicly documented Delhi High Court litigation records
/contact/                                 -> Contact coordinates, Janakpuri directions, interactive consultation form
/disclaimer/                              -> Comprehensive BCI Rule 36 terms and liability limitations
/privacy-policy/                          -> Client inquiry data protection and no-tracking disclosure
/sitemap.xml                              -> Dynamic XML sitemap
/robots.txt                               -> Search engine crawler directives
```

---

## 🛠️ Technology Stack & Performance

- **Framework:** Next.js 14+ (App Router, Server Components & Static Site Generation)
- **Language:** TypeScript 5+ (Strict mode)
- **Styling:** Tailwind CSS with custom legal design tokens (`navy`, `brass`, `parchment`)
- **Typography:** Next Font Google with `Playfair Display` (Serif) and `Plus Jakarta Sans` (Sans)
- **Icons:** Lucide React
- **SEO & Structured Data:** JSON-LD schemas (`LegalService`, `Person`, `BreadcrumbList`, `Article`)
- **Spam Protection:** Honeypot field trap + client-side & server-side validation
- **API Endpoint:** `/api/contact` route handler with rate limiting and secure logging

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

---

## 🔐 Environment Variables (Optional)

To configure direct transactional email forwarding for contact form submissions, add to `.env.local`:

```env
# Optional SMTP configuration for direct email forwarding to lalit@ajmaniandlawpartners.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=notifications@ajmaniandlawpartners.com
SMTP_PASS=your-smtp-password
```

*(If SMTP variables are omitted, form submissions are logged securely to the server console and acknowledged to the client without error).*
