import Link from "next/link";
import CategoryTabs from "@/components/CategoryTabs";
import raaleSections from "@/components/jd/RaaleContent";

export const metadata = {
  title: "Director – RAALE — RGU",
};

export default function DirectorRaalePage() {
  return (
    <main className="jd-page">
      <Link href="/" className="back-link">
        ← Back to organisation structure
      </Link>

      <span className="jd-badge">Strategic Director</span>

      <h1 className="jd-title">Director – RAALE</h1>
      <p className="jd-intro">
        RAALE = Rathinam&rsquo;s Advanced Active Learning Ecosystem, responsible
        for student competency growth.
      </p>

      <CategoryTabs sections={raaleSections} accent="director" />
    </main>
  );
}
