import { CatTabSection } from "@/components/CategoryTabs";

const legalComplianceSections: CatTabSection[] = [
  {
    id: "purpose",
    label: "Role Purpose",
    content: (
      <p>
        Legal &amp; Compliance protects the university from legal and
        regulatory risk — advisory, documentation, statutory compliance,
        and dispute handling — across every function. Reports to the
        Registrar.
      </p>
    ),
  },
  {
    id: "responsibilities",
    label: "Roles & Responsibilities",
    content: (
      <ul className="jd-list">
        <li>Provide legal advisory support on institutional matters, contracts, and agreements.</li>
        <li>Ensure compliance with UGC, AICTE, state, and central regulatory requirements.</li>
        <li>Draft, review, and maintain MoUs, vendor contracts, and legal documentation.</li>
        <li>Handle litigation, disputes, and liaison with external legal counsel where required.</li>
        <li>Maintain statutory registers, licenses, and regulatory filings.</li>
        <li>Advise on policy formulation to ensure legal soundness across departments.</li>
        <li>Support HR and administration on employment-law and disciplinary matters.</li>
        <li>Monitor changes in applicable law/regulation and update institutional policy accordingly.</li>
      </ul>
    ),
  },
  {
    id: "outcome",
    label: "Expected Outcome",
    content: (
      <ul className="jd-list">
        <li>No unresolved regulatory non-compliance issues.</li>
        <li>Legally sound contracts, MoUs, and institutional documentation.</li>
        <li>Timely resolution or management of disputes and litigation.</li>
        <li>Up-to-date statutory registrations and licenses.</li>
        <li>Reduced legal risk exposure across the institution.</li>
      </ul>
    ),
  },
  {
    id: "mrm",
    label: "Things to be Addressed in Management Review Meeting",
    content: (
      <ul className="jd-list">
        <li>Status of ongoing litigation or disputes.</li>
        <li>Regulatory compliance status and upcoming filing deadlines.</li>
        <li>Contracts/MoUs pending review or renewal.</li>
        <li>Policy changes required due to new regulations.</li>
        <li>Legal risk areas flagged for leadership attention.</li>
      </ul>
    ),
  },
];

export default legalComplianceSections;
