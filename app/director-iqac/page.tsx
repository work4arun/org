import Link from "next/link";
import CategoryTabs from "@/components/CategoryTabs";
import iqacSections from "@/components/jd/IqacContent";

export const metadata = {
  title: "Director – IQAC — RGU",
};

export default function DirectorIqacPage() {
  return (
    <main className="jd-page">
      <Link href="/" className="back-link">
        ← Back to organisation structure
      </Link>

      <span className="jd-badge">Strategic Director</span>

      <h1 className="jd-title">Director – IQAC</h1>
      <p className="jd-intro">
        Drafted content — no source job description was supplied for this
        role, so this is a reasonable starting draft based on standard IQAC
        (Internal Quality Assurance Cell) practice at Indian higher-ed
        institutions. Edit freely.
      </p>

      <CategoryTabs sections={iqacSections} accent="director" />
    </main>
  );
}
