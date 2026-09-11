import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  BookOpen,
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Share2,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";
import { insightArticles } from "@/data/insights";
import { SchemaOrg } from "@/components/SchemaOrg";
import { ArticleReadingBar } from "@/components/ArticleReadingBar";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return insightArticles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: ArticlePageProps): Metadata {
  const article = insightArticles.find((art) => art.slug === params.slug);
  if (!article) {
    return {
      title: "Article Not Found | Ajmani & Law Partners",
    };
  }

  return {
    title: `${article.title} | Ajmani & Law Partners`,
    description: article.excerpt,
    authors: [{ name: article.author }],
    alternates: {
      canonical: `https://ajmaniandlawpartners.com/insights/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default function SingleInsightArticlePage({ params }: ArticlePageProps) {
  const article = insightArticles.find((art) => art.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="space-y-12 md:space-y-16 pb-16">
      {/* JSON-LD Article Schema */}
      <SchemaOrg
        type="Article"
        articleData={{
          headline: article.title,
          description: article.excerpt,
          datePublished: article.date,
          url: `https://ajmaniandlawpartners.com/insights/${article.slug}`,
        }}
        breadcrumbs={[
          { name: "Home", item: "https://ajmaniandlawpartners.com" },
          { name: "Insights", item: "https://ajmaniandlawpartners.com/insights" },
          { name: article.title, item: `https://ajmaniandlawpartners.com/insights/${article.slug}` },
        ]}
      />

      {/* Article Header Banner */}
      <header className="bg-navy-950 text-white py-16 md:py-20 border-b border-navy-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex items-center gap-2 text-xs font-sans text-slate-400">
            <Link href="/" className="hover:text-brass-300">
              Home
            </Link>
            <span>/</span>
            <Link href="/insights" className="hover:text-brass-300">
              Insights
            </Link>
            <span>/</span>
            <span className="text-brass-400 truncate max-w-[200px]">{article.category}</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-brass-500/30 text-brass-300 text-xs font-sans">
            <span>{article.category}</span>
          </div>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight leading-snug">
            {article.title}
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-sans font-light leading-relaxed">
            {article.excerpt}
          </p>

          {/* Author & Meta Bar */}
          <div className="pt-4 border-t border-navy-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400 font-sans">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-brass-400/20 border border-brass-400/40 flex items-center justify-center text-brass-300 font-serif font-bold text-sm">
                LA
              </div>
              <div>
                <div className="font-semibold text-white">{article.author}</div>
                <div className="text-[11px] text-slate-400">{article.authorDesignation}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-[11px]">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                {article.date}
              </span>
              <span>&bull;</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content Layout */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Body (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Reading Bar & Citation Copier */}
            <ArticleReadingBar
              title={article.title}
              author={article.author}
              publicationPlatform={article.publicationPlatform}
              date={article.date}
            />

            {/* Key Takeaways Box */}
            <div className="bg-brass-50/70 border border-brass-200/80 rounded-xl p-6 space-y-3">
              <h2 className="font-serif font-bold text-navy-900 text-base">
                Key Legal Findings &amp; Takeaways
              </h2>
              <ul className="space-y-2 text-xs text-slate-700 font-sans">
                {article.keyTakeaways.map((takeaway, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brass-700 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Sections */}
            <div className="space-y-8 text-sm text-slate-700 leading-relaxed font-sans">
              {article.content.map((sec, sIdx) => (
                <section key={sIdx} className="space-y-3">
                  <h2 className="text-xl font-serif font-bold text-navy-900 pt-2">
                    {sec.sectionHeading}
                  </h2>
                  {sec.paragraphs.map((para, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {para}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            {/* Publication Source Disclosure */}
            <div className="pt-6 border-t border-slate-200 text-xs text-slate-500 space-y-2">
              <p>
                <strong>Attribution Notice:</strong> Originally researched and published under editorial series on <em>{article.publicationPlatform}</em> by Advocate Lalit Ajmani.
              </p>
              <p className="italic text-[11px]">
                Disclaimer: The views and legal interpretations contained in this paper are intended strictly for academic reference and educational dissemination. They do not constitute formal legal opinions or advice for any specific ongoing dispute.
              </p>
            </div>
          </div>

          {/* Right Sidebar (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Statutes Referenced */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card space-y-3">
              <h3 className="font-serif font-bold text-navy-900 text-sm border-b border-slate-100 pb-2">
                Statutory References
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-700 font-sans">
                {article.statutoryReferences.map((ref, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-brass-600">&bull;</span>
                    <span>{ref}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-card space-y-3">
              <h3 className="font-serif font-bold text-navy-900 text-sm border-b border-slate-100 pb-2">
                Subject Tags
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-sans"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Author Card */}
            <div className="bg-navy-950 text-white rounded-2xl p-6 space-y-3 border border-navy-800">
              <h4 className="font-serif font-bold text-base text-white">About the Author</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">
                <strong>Advocate Lalit Ajmani</strong> is the Managing Partner of Ajmani &amp; Law Partners, practicing before the High Court of Delhi and subordinate courts in Delhi-NCR.
              </p>
              <div className="pt-2">
                <Link
                  href="/advocate-lalit-ajmani"
                  className="text-xs font-semibold text-brass-400 hover:text-brass-300 inline-flex items-center gap-1"
                >
                  <span>View Complete Advocate Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-slate-200 flex items-center justify-between">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600 hover:text-navy-900 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Publications</span>
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-xs font-semibold text-brass-700 hover:text-brass-800 transition-colors"
        >
          <span>Discuss a Legal Matter</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </article>
  );
}
