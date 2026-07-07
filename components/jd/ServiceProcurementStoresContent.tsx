import { CatTabSection } from "@/components/CategoryTabs";

const procurementStoresSections: CatTabSection[] = [
  {
    id: "purpose",
    label: "Role Purpose",
    content: (
      <p>
        Procurement &amp; Stores manages vendor sourcing, purchasing, and
        inventory across the university — ensuring departments get what
        they need, on time, at fair cost. Reports to the Registrar.
      </p>
    ),
  },
  {
    id: "responsibilities",
    label: "Roles & Responsibilities",
    content: (
      <ul className="jd-list">
        <li>Run vendor sourcing, quotation comparison, and purchase-order processing.</li>
        <li>Maintain approved vendor lists and manage vendor performance.</li>
        <li>Oversee inventory control, stock levels, and stores management across departments.</li>
        <li>Negotiate pricing, contracts, and annual maintenance contracts (AMCs).</li>
        <li>Ensure procurement policy compliance and proper documentation/approvals.</li>
        <li>Coordinate with Finance on payment processing and budget adherence.</li>
        <li>Manage asset tagging, stock audits, and disposal of obsolete inventory.</li>
        <li>Support departments with timely procurement of lab, IT, and general equipment.</li>
      </ul>
    ),
  },
  {
    id: "outcome",
    label: "Expected Outcome",
    content: (
      <ul className="jd-list">
        <li>Timely procurement with minimal delays to departments.</li>
        <li>Cost savings through competitive vendor sourcing.</li>
        <li>Accurate, audit-ready inventory and stores records.</li>
        <li>Reliable, well-managed vendor relationships.</li>
        <li>Full procurement-policy compliance with clean audit trails.</li>
      </ul>
    ),
  },
  {
    id: "mrm",
    label: "Things to be Addressed in Management Review Meeting",
    content: (
      <ul className="jd-list">
        <li>Pending purchase requests and turnaround time.</li>
        <li>Vendor performance issues or escalations.</li>
        <li>Inventory/stock audit findings.</li>
        <li>Budget utilization against procurement plan.</li>
        <li>AMC/contract renewals due.</li>
        <li>Cost-saving initiatives and their impact.</li>
      </ul>
    ),
  },
];

export default procurementStoresSections;
