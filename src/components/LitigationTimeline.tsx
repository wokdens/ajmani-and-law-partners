import React from "react";
import { FileText, Shield, Scale, Gavel, Award, ArrowRight } from "lucide-react";

interface TimelineStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  keyActs: string;
}

const defaultSteps: TimelineStep[] = [
  {
    stepNumber: "01",
    title: "Pre-Litigation Audit & Legal Notice",
    subtitle: "Limitation & Statutory Compliance",
    description:
      "Forensic scrutiny of agreements, dishonour memos, transaction invoices, and dates of default. Serving formal statutory demand notices (e.g. 30-day notice under Section 138 NI Act or Section 8 IBC demand) to establish cause of action.",
    keyActs: "Limitation Act 1963 & Relevant Substantive Code",
  },
  {
    stepNumber: "02",
    title: "Drafting & Judicial Institution",
    subtitle: "Plaint, Statement of Truth & Verification",
    description:
      "Drafting robust plaints, petitions, or written statements accompanied by verified statement of truth, electronic evidence certificates, and court fee computation. Filing before appropriate commercial or civil registry.",
    keyActs: "CPC 1908 & Commercial Courts Act 2015",
  },
  {
    stepNumber: "03",
    title: "Urgent Ad-Interim Reliefs",
    subtitle: "Restraint Orders & Asset Protection",
    description:
      "Arguing urgent motion applications for ad-interim ex-parte injunctions (Order 39 Rules 1 & 2 CPC), Section 9 arbitration interim measures, or Section 143A interim compensation to preserve status quo.",
    keyActs: "Specific Relief Act & High Court Rules",
  },
  {
    stepNumber: "04",
    title: "Trial, Evidence & Cross-Examination",
    subtitle: "Evidentiary Testing of Claims",
    description:
      "Framing of legal issues, tender of evidence by way of examination-in-chief affidavits, discovery/inspection of commercial records, and rigorous cross-examination of adverse party witnesses.",
    keyActs: "Indian Evidence Act 1872 / BSA 2023",
  },
  {
    stepNumber: "05",
    title: "Final Arguments & Decree Execution",
    subtitle: "Realisation under Order 21 CPC",
    description:
      "Submitting comprehensive written submissions and oral legal arguments supported by binding precedent. Following judgment, instituting execution proceedings to attach assets and realize decreed dues.",
    keyActs: "Order 21 CPC & High Court Original Rules",
  },
];

export function LitigationTimeline() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <span className="text-xs font-semibold uppercase tracking-widest text-brass-700 font-sans">
          Procedural Transparency
        </span>
        <h3 className="text-xl sm:text-2xl font-serif font-bold text-navy-900">
          The Five Stages of Courtroom Litigation
        </h3>
        <p className="text-xs text-slate-600 font-sans leading-relaxed">
          Understanding the lifecycle of a legal dispute in Delhi courts helps clients prepare documentation strategically and anticipate statutory timelines.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {defaultSteps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white border border-slate-200 rounded-xl p-5 shadow-subtle flex flex-col justify-between space-y-3 relative group hover:border-brass-400 transition-colors"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-brass-700 bg-brass-50 px-2 py-0.5 rounded">
                  STAGE {step.stepNumber}
                </span>
                {idx < 4 && (
                  <ArrowRight className="hidden md:block w-3.5 h-3.5 text-slate-300 absolute -right-2 top-6 z-10" />
                )}
              </div>

              <h4 className="text-sm font-serif font-bold text-navy-900 leading-snug">
                {step.title}
              </h4>

              <div className="text-[11px] font-semibold text-brass-700 uppercase tracking-wider">
                {step.subtitle}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed font-sans">
                {step.description}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-100 text-[10px] text-slate-400 font-mono">
              {step.keyActs}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
