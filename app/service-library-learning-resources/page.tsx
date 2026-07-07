import Link from "next/link";
import CategoryTabs from "@/components/CategoryTabs";
import libraryLearningResourcesSections from "@/components/jd/ServiceLibraryLearningResourcesContent";

export const metadata = {
  title: "Library & Learning Resources — RGU",
};

export default function ServiceLibraryLearningResourcesPage() {
  return (
    <main className="jd-page">
      <Link href="/" className="back-link">
        ← Back to organisation structure
      </Link>

      <span className="jd-badge jd-badge-service">Shared Service — Reports to Registrar</span>

      <h1 className="jd-title">Library &amp; Learning Resources</h1>
      <p className="jd-intro">
        Drafted content — no source job description was supplied for this
        service, so this is a reasonable starting draft based on its
        portfolio. Edit freely.
      </p>

      <CategoryTabs sections={libraryLearningResourcesSections} accent="service" />
    </main>
  );
}
