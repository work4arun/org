import Link from "next/link";
import CategoryTabs from "@/components/CategoryTabs";
import deanSections from "@/components/jd/DeanContent";

export const metadata = {
  title: "Dean — RGU",
};

export default function DeanPage() {
  return (
    <main className="jd-page">
      <Link href="/" className="back-link">
        ← Back to organisation structure
      </Link>

      <span className="jd-badge" style={{ background: "var(--c-school-soft)", color: "var(--c-school)" }}>
        Academic Structure — Common Dean Charter
      </span>

      <h1 className="jd-title">Dean</h1>
      <p className="jd-intro">
        This is the common role charter shared by every School&rsquo;s Dean.
        Drafted content — no source job description was supplied, so treat
        this as a starting draft and edit freely.
      </p>

      <CategoryTabs sections={deanSections} accent="school" />
    </main>
  );
}
