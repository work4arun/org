import Link from "next/link";
import CategoryTabs from "@/components/CategoryTabs";
import registrarSections from "@/components/jd/RegistrarContent";

export const metadata = {
  title: "Registrar — RGU",
};

export default function RegistrarPage() {
  return (
    <main className="jd-page">
      <Link href="/" className="back-link">
        ← Back to organisation structure
      </Link>

      <span className="jd-badge jd-badge-leadership">Leadership</span>

      <h1 className="jd-title">Registrar</h1>
      <p className="jd-intro">
        Drafted content, based on the role&rsquo;s portfolio (administration
        head, with all Shared Services reporting in) — no source job
        description was supplied, so treat this as a starting draft and edit
        freely.
      </p>

      <CategoryTabs sections={registrarSections} accent="leadership" />
    </main>
  );
}
