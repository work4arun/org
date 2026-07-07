import Link from "next/link";
import CategoryTabs from "@/components/CategoryTabs";
import industriesSections from "@/components/jd/IndustriesContent";

export const metadata = {
  title: "Director – Industries & Corporate Relations — RGU",
};

export default function DirectorIndustriesCorporateRelationsPage() {
  return (
    <main className="jd-page">
      <Link href="/" className="back-link">
        ← Back to organisation structure
      </Link>

      <span className="jd-badge">Strategic Director</span>

      <h1 className="jd-title">Director – Industries &amp; Corporate Relations</h1>
      <p className="jd-intro">
        Drafted content — no source job description was supplied for this
        role, so this is a reasonable starting draft based on the role title.
        Edit freely.
      </p>

      <CategoryTabs sections={industriesSections} accent="director" />
    </main>
  );
}
