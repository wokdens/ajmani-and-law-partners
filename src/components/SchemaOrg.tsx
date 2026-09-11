import React from "react";
import { firmData } from "@/data/firm";

interface SchemaOrgProps {
  type?: "LegalService" | "Article" | "BreadcrumbList";
  articleData?: {
    headline: string;
    description: string;
    datePublished: string;
    url: string;
  };
  breadcrumbs?: {
    name: string;
    item: string;
  }[];
}

export function SchemaOrg({ type = "LegalService", articleData, breadcrumbs }: SchemaOrgProps) {
  const firmSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": "https://ajmaniandlawpartners.com/#organization",
    name: firmData.name,
    legalName: firmData.name,
    alternateName: "Law Offices of Adv. Lalit Ajmani",
    url: "https://ajmaniandlawpartners.com",
    logo: "https://ajmaniandlawpartners.com/logo.png",
    image: "https://ajmaniandlawpartners.com/og-image.jpg",
    description:
      "Ajmani & Law Partners is a New Delhi-based dispute resolution and litigation practice founded and led by Advocate Lalit Ajmani, practicing before the High Court of Delhi and District Courts.",
    telephone: firmData.contact.phoneFormatted,
    email: firmData.contact.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: firmData.contact.primaryAddress.line1,
      addressLocality: firmData.contact.primaryAddress.area,
      addressRegion: firmData.contact.primaryAddress.state,
      postalCode: firmData.contact.primaryAddress.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "28.6219",
      longitude: "77.0878",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:30",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Tuesday",
        opens: "09:00",
        closes: "20:00",
      },
    ],
    sameAs: [firmData.social.linkedin],
    founder: {
      "@type": "Person",
      name: firmData.principal.name,
      jobTitle: firmData.principal.designation,
      honorificPrefix: "Advocate",
      sameAs: firmData.social.linkedin,
      worksFor: {
        "@id": "https://ajmaniandlawpartners.com/#organization",
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "National Law Institute University (NLIU), Bhopal",
        },
        {
          "@type": "EducationalOrganization",
          name: "Rajiv Gandhi National University of Law (RGNUL), Punjab",
        },
      ],
      memberOf: [
        {
          "@type": "Organization",
          name: firmData.principal.barCouncil,
        },
      ],
    },
    areaServed: [
      {
        "@type": "AdministrativeArea",
        name: "Delhi",
      },
      {
        "@type": "AdministrativeArea",
        name: "New Delhi",
      },
      {
        "@type": "AdministrativeArea",
        name: "Delhi National Capital Region (NCR)",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Legal Practice Areas",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Civil Litigation" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Disputes" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cheque Bounce (NI Act 138)" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Matrimonial & Family Law" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Arbitration & ADR" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Insolvency & Bankruptcy (NCLT)" } },
      ],
    },
  };

  const breadcrumbSchema = breadcrumbs
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          position: idx + 1,
          name: crumb.name,
          item: crumb.item,
        })),
      }
    : null;

  const articleSchema = articleData
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: articleData.headline,
        description: articleData.description,
        datePublished: articleData.datePublished,
        url: articleData.url,
        author: {
          "@type": "Person",
          name: firmData.principal.name,
          jobTitle: "Advocate & Managing Partner",
        },
        publisher: {
          "@id": "https://ajmaniandlawpartners.com/#organization",
        },
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(firmSchema) }}
      />
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
    </>
  );
}
