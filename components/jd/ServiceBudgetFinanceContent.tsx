import { CatTabSection } from "@/components/CategoryTabs";

const budgetFinanceSections: CatTabSection[] = [
  {
    id: "purpose",
    label: "Role Purpose",
    content: (
      <p>
        Budget &amp; Finance manages the university&rsquo;s money end to
        end — budgeting, accounting, statutory compliance, and fee
        collection — keeping the institution financially healthy and
        audit-clean. Reports to the Registrar.
      </p>
    ),
  },
  {
    id: "responsibilities",
    label: "Roles & Responsibilities",
    content: (
      <ul className="jd-list">
        <li>Prepare and manage the annual budget across all departments.</li>
        <li>Oversee accounting, bookkeeping, and financial statement preparation.</li>
        <li>Ensure statutory compliance — GST, income tax, and statutory audits.</li>
        <li>Manage fee collection, scholarships, and financial-aid processing.</li>
        <li>Process vendor payments and reconciliation.</li>
        <li>Prepare financial reporting for management and regulatory bodies.</li>
        <li>Run cost control and financial planning for new initiatives.</li>
        <li>Coordinate internal and external audits.</li>
      </ul>
    ),
  },
  {
    id: "outcome",
    label: "Expected Outcome",
    content: (
      <ul className="jd-list">
        <li>Accurate, timely financial statements and reporting.</li>
        <li>Healthy budget utilization within approved limits.</li>
        <li>Full statutory and tax compliance with no penalties.</li>
        <li>Efficient fee collection and reduced outstanding dues.</li>
        <li>Clean audit reports.</li>
      </ul>
    ),
  },
  {
    id: "mrm",
    label: "Things to be Addressed in Management Review Meeting",
    content: (
      <ul className="jd-list">
        <li>Budget versus actual spend, by department.</li>
        <li>Fee collection status and outstanding dues.</li>
        <li>Statutory compliance filings and upcoming deadlines.</li>
        <li>Audit findings and closure status.</li>
        <li>Cash flow and overall financial health summary.</li>
        <li>Pending vendor payments or reconciliation issues.</li>
      </ul>
    ),
  },
];

export default budgetFinanceSections;
