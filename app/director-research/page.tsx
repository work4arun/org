import Link from "next/link";
import CategoryTabs from "@/components/CategoryTabs";
import researchSections from "@/components/jd/ResearchContent";

// A dedicated, static page for /director-research — this overrides the
// generic [slug] stub route with the full Job Description for this role,
// instead of the placeholder every other node currently uses.

export const metadata = {
  title: "Director – Research — RGU",
};

export default function DirectorResearchPage() {
  return (
    <main className="jd-page">
      <Link href="/" className="back-link">
        ← Back to organisation structure
      </Link>

      <span className="jd-badge">Strategic Director</span>

      <h1 className="jd-title">Deputy Director – Publications, Patents &amp; Research Ecosystem</h1>
      <p className="jd-intro">
        This is the working Job Description on file for the{" "}
        <strong>Director – Research</strong> node. Note the title here reads
        &ldquo;Deputy Director&rdquo; — see the flag at the bottom of this page.
      </p>

      <div className="jd-meta">
        <div>
          <span className="jd-meta-label">Institution</span>
          Rathinam Global Deemed to be University
        </div>
        <div>
          <span className="jd-meta-label">Reporting To</span>
          Director / Dean Research / Vice Chancellor / Chief Business Officer
        </div>
        <div>
          <span className="jd-meta-label">Role Type</span>
          Academic Leadership &amp; Research Development
        </div>
      </div>

      <CategoryTabs sections={researchSections} accent="director" />

      <div className="jd-flag">
        <strong>Flag:</strong> this document is titled &ldquo;Deputy Director –
        Publications, Patents &amp; Research Ecosystem,&rdquo; reporting to
        Director / Dean Research / VC / CBO — it reads as a role one level
        below &ldquo;Director – Research,&rdquo; not the Director role itself.
        I&rsquo;ve attached it here since Research/Publications/Patents is
        clearly its home, but you may want to either (a) rename this node to
        &ldquo;Deputy Director – Publications, Patents &amp; Research
        Ecosystem&rdquo; and keep it distinct from a broader Director –
        Research role, or (b) confirm this is meant to be the full charter for
        Director – Research as-is.
      </div>
    </main>
  );
}
