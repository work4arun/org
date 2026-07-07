import { CatTabSection } from "@/components/CategoryTabs";

// Shared JD content for Director – Academics, shown as tabbed categories on
// the standalone /director-academics page.
const academicsSections: CatTabSection[] = [
  {
    id: "purpose",
    label: "Role Purpose",
    content: (
      <p>
        The Director – Academics owns academic policy, curriculum quality,
        and academic governance across every School — ensuring consistent,
        regulation-compliant, industry-relevant academic delivery
        university-wide.
      </p>
    ),
  },
  {
    id: "responsibilities",
    label: "Roles & Responsibilities",
    content: (
      <ul className="jd-list">
        <li>Lead curriculum design and review, including outcome-based education (OBE) implementation.</li>
        <li>Plan and monitor adherence to the academic calendar across all Schools.</li>
        <li>Provide input on faculty recruitment needs and drive faculty development programs (FDPs).</li>
        <li>Conduct academic audits and monitor teaching-learning quality.</li>
        <li>Coordinate academic matters with Deans and HODs across Schools and Departments.</li>
        <li>Coordinate examination policy with the examination cell.</li>
        <li>Drive new program approvals and ensure regulatory compliance (UGC/AICTE).</li>
        <li>Monitor student academic performance and oversee remedial/support programs.</li>
      </ul>
    ),
  },
  {
    id: "outcome",
    label: "Expected Outcome",
    content: (
      <ul className="jd-list">
        <li>Improved academic outcomes — pass percentage, result quality, and progression rates.</li>
        <li>Updated, industry-relevant curriculum across all programs.</li>
        <li>Increased faculty participation in development programs.</li>
        <li>Strong academic governance with minimal regulatory compliance gaps.</li>
        <li>Consistent academic quality across all Schools and Departments.</li>
      </ul>
    ),
  },
  {
    id: "mrm",
    label: "Things to be Addressed in Management Review Meeting",
    content: (
      <ul className="jd-list">
        <li>Curriculum revision status and OBE implementation progress.</li>
        <li>Academic calendar adherence and any deviations.</li>
        <li>Faculty development programs conducted versus planned.</li>
        <li>Student academic performance trends (pass percentage, dropout rates).</li>
        <li>Regulatory compliance status, including new program approvals.</li>
        <li>Escalations from Deans/HODs requiring leadership decisions.</li>
      </ul>
    ),
  },
];

export default academicsSections;
