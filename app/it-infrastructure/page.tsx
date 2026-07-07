import Link from "next/link";
import CategoryTabs from "@/components/CategoryTabs";
import itInfrastructureSections from "@/components/jd/ItInfrastructureContent";

export const metadata = {
  title: "IT & Infrastructure — RGU",
};

export default function ItInfrastructurePage() {
  return (
    <main className="jd-page">
      <Link href="/" className="back-link">
        ← Back to organisation structure
      </Link>

      <span className="jd-badge" style={{ background: "var(--c-it-soft)", color: "var(--c-it)" }}>
        Leadership — Reports to Vice-Chancellor
      </span>

      <h1 className="jd-title">IT &amp; Infrastructure</h1>
      <p className="jd-intro">
        Drafted content, based on the role&rsquo;s portfolio (campus
        technology and infrastructure) — no source job description was
        supplied, so treat this as a starting draft and edit freely.
      </p>

      <CategoryTabs sections={itInfrastructureSections} accent="it" />
    </main>
  );
}
