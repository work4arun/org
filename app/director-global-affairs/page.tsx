import Link from "next/link";
import CategoryTabs from "@/components/CategoryTabs";
import globalAffairsSections from "@/components/jd/GlobalAffairsContent";

export const metadata = {
  title: "Director – Global Affairs — RGU",
};

export default function DirectorGlobalAffairsPage() {
  return (
    <main className="jd-page">
      <Link href="/" className="back-link">
        ← Back to organisation structure
      </Link>

      <span className="jd-badge">Strategic Director</span>

      <h1 className="jd-title">Director – Global Affairs</h1>
      <p className="jd-intro">
        Drafted content — no source job description was supplied for this
        role, so this is a reasonable starting draft based on the role title.
        Edit freely.
      </p>

      <CategoryTabs sections={globalAffairsSections} accent="director" />
    </main>
  );
}
