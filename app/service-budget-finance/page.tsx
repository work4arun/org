import Link from "next/link";
import CategoryTabs from "@/components/CategoryTabs";
import budgetFinanceSections from "@/components/jd/ServiceBudgetFinanceContent";

export const metadata = {
  title: "Budget & Finance — RGU",
};

export default function ServiceBudgetFinancePage() {
  return (
    <main className="jd-page">
      <Link href="/" className="back-link">
        ← Back to organisation structure
      </Link>

      <span className="jd-badge jd-badge-service">Shared Service — Reports to Registrar</span>

      <h1 className="jd-title">Budget &amp; Finance</h1>
      <p className="jd-intro">
        Drafted content — no source job description was supplied for this
        service, so this is a reasonable starting draft based on its
        portfolio. Edit freely.
      </p>

      <CategoryTabs sections={budgetFinanceSections} accent="service" />
    </main>
  );
}
