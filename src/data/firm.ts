export interface FirmDetails {
  name: string;
  tagline: string;
  foundingYear: number;
  principal: {
    name: string;
    title: string;
    designation: string;
    enrolmentNumber: string;
    barCouncil: string;
    proBonoAffiliation: string;
    education: {
      degree: string;
      institution: string;
      year: number;
      honors?: string;
    }[];
    editorialAndAcademic: string[];
    bioSummary: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsappNumber: string;
    whatsappMessage: string;
    email: string;
    primaryAddress: {
      line1: string;
      area: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
      landmark?: string;
    };
    registeredFilingAddress?: {
      line1: string;
      area: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
    };
    operatingHours: {
      regular: string;
      tuesday: string;
      sunday: string;
      note: string;
    };
  };
  social: {
    linkedin: string;
    facebook?: string;
    instagram?: string;
  };
  jurisdictions: {
    highCourts: string[];
    districtCourts: string[];
    tribunals: string[];
    regionalPresence: string[];
  };
}

export const firmData: FirmDetails = {
  name: "Ajmani & Law Partners",
  tagline: "Strategic Dispute Resolution & Litigation Practice",
  foundingYear: 2017,
  principal: {
    name: "Lalit Ajmani",
    title: "Advocate",
    designation: "Founding & Managing Partner",
    enrolmentNumber: "D/5332/2017",
    barCouncil: "Bar Council of Delhi",
    proBonoAffiliation: "Registered Pro Bono Advocate, Nyaya Bandhu (Department of Justice, Ministry of Law and Justice, Govt. of India)",
    education: [
      {
        degree: "Master of Laws (LL.M.)",
        institution: "Rajiv Gandhi National University of Law (RGNUL), Punjab",
        year: 2017,
        honors: "Specialization in Criminal Law",
      },
      {
        degree: "Bachelor of Arts & Bachelor of Laws (B.A. LL.B. Hons.)",
        institution: "National Law Institute University (NLIU), Bhopal",
        year: 2015,
        honors: "Five-Year Integrated Professional Degree",
      },
    ],
    editorialAndAcademic: [
      "Member, Student Editorial Board, RGNUL Student Law Review",
      "Researcher, Centre for Advanced Studies in Criminal Law (CASCL)",
      "Member, Centre for Advanced Studies in International Humanitarian Law (CASH)",
      "Former Academic Faculty, Jagran Lakecity University, Bhopal (Law of Evidence & Sports Law)",
      "Author of critical legal analyses on LiveLaw, Mondaq, and TaxGuru",
    ],
    bioSummary:
      "Advocate Lalit Ajmani is the Founding and Managing Partner of Ajmani & Law Partners. A graduate of National Law Institute University (NLIU), Bhopal and Rajiv Gandhi National University of Law (RGNUL), Punjab, Mr. Ajmani practices primarily before the High Court of Delhi and District Courts across Delhi-NCR. His practice encompasses civil and commercial litigation, Negotiable Instruments Act matters (cheque bounce), matrimonial disputes, arbitration enforcement, and corporate advisory. He is committed to precision legal drafting, strategic courtroom advocacy, and public legal service through the Nyaya Bandhu Pro Bono initiative.",
  },
  contact: {
    phone: "+919654431469",
    phoneFormatted: "+91 96544 31469",
    whatsappNumber: "919654431469",
    whatsappMessage: "Hello Ajmani & Law Partners, I would like to inquire about a legal matter.",
    email: "lalit@ajmaniandlawpartners.com",
    primaryAddress: {
      line1: "C4G-17A",
      area: "Janakpuri",
      city: "New Delhi",
      state: "Delhi",
      pincode: "110058",
      country: "India",
      landmark: "Near Mata Chanan Devi Hospital, Janakpuri West",
    },
    operatingHours: {
      regular: "Monday, Wednesday – Saturday: 9:30 AM – 8:00 PM",
      tuesday: "Tuesday: 9:00 AM – 8:00 PM",
      sunday: "Sunday: Closed",
      note: "Urgent court filing or bail consultations by prior scheduled appointment.",
    },
  },
  social: {
    linkedin: "https://www.linkedin.com/in/lalitajmani/",
  },
  jurisdictions: {
    highCourts: ["High Court of Delhi"],
    districtCourts: [
      "Tis Hazari Courts (Central / West)",
      "Patiala House Courts (New Delhi)",
      "Saket Courts (South / South-East)",
      "Rohini Courts (North / North-West)",
      "Dwarka Courts (South-West)",
      "Karkardooma Courts (East / North-East / Shahdara)",
      "Rouse Avenue Courts (Special MP/MLA, CBI, ED)",
    ],
    tribunals: [
      "National Company Law Tribunal (NCLT) & NCLAT",
      "Debt Recovery Tribunal (DRT & DRAT)",
      "National Consumer Disputes Redressal Commission (NCDRC)",
      "State Consumer Commission (SCDRC Delhi)",
    ],
    regionalPresence: ["Delhi / New Delhi", "Gurugram & Faridabad (Haryana)", "Noida & Ghaziabad (UP)", "Rajasthan & Madhya Pradesh"],
  },
};
