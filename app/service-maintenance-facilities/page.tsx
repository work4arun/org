import Link from "next/link";
import CategoryTabs from "@/components/CategoryTabs";
import maintenanceFacilitiesSections from "@/components/jd/ServiceMaintenanceFacilitiesContent";

export const metadata = {
  title: "Maintenance & Facilities — RGU",
};

export default function ServiceMaintenanceFacilitiesPage() {
  return (
    <main className="jd-page">
      <Link href="/" className="back-link">
        ← Back to organisation structure
      </Link>

      <span className="jd-badge jd-badge-service">Shared Service — Reports to Registrar</span>

      <h1 className="jd-title">Maintenance &amp; Facilities</h1>
      <p className="jd-intro">
        Drafted content — no source job description was supplied for this
        service, so this is a reasonable starting draft based on its
        portfolio. Edit freely.
      </p>

      <CategoryTabs sections={maintenanceFacilitiesSections} accent="service" />
    </main>
  );
}
