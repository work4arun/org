import Link from "next/link";
import CategoryTabs from "@/components/CategoryTabs";
import procurementStoresSections from "@/components/jd/ServiceProcurementStoresContent";

export const metadata = {
  title: "Procurement & Stores — RGU",
};

export default function ServiceProcurementStoresPage() {
  return (
    <main className="jd-page">
      <Link href="/" className="back-link">
        ← Back to organisation structure
      </Link>

      <span className="jd-badge jd-badge-service">Shared Service — Reports to Registrar</span>

      <h1 className="jd-title">Procurement &amp; Stores</h1>
      <p className="jd-intro">
        Drafted content — no source job description was supplied for this
        service, so this is a reasonable starting draft based on its
        portfolio. Edit freely.
      </p>

      <CategoryTabs sections={procurementStoresSections} accent="service" />
    </main>
  );
}
