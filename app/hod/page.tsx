import Link from "next/link";
import CategoryTabs from "@/components/CategoryTabs";
import hodSections from "@/components/jd/HodContent";

export const metadata = {
  title: "Head of Department (HOD) — RGU",
};

export default function HodPage() {
  return (
    <main className="jd-page">
      <Link href="/" className="back-link">
        ← Back to organisation structure
      </Link>

      <span className="jd-badge" style={{ background: "var(--c-school-soft)", color: "var(--c-school)" }}>
        Academic Structure — Common HOD Charter
      </span>

      <h1 className="jd-title">Head of Department (HOD)</h1>
      <p className="jd-intro">
        This is the common role charter shared by every department&rsquo;s
        HOD. Drafted content — no source job description was supplied, so
        treat this as a starting draft and edit freely.
      </p>

      <CategoryTabs sections={hodSections} accent="school" />
    </main>
  );
}
