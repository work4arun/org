import { CatTabSection } from "@/components/CategoryTabs";

// Shared JD content for Director – IQAC, shown as tabbed categories on the
// standalone /director-iqac page.
const iqacSections: CatTabSection[] = [
  {
    id: "purpose",
    label: "Role Purpose",
    content: (
      <p>
        The Director – IQAC drives the university&rsquo;s quality-assurance
        culture — accreditation, rankings, audits, and feedback loops — so
        that quality improvement is continuous and evidenced, not a
        once-a-cycle scramble.
      </p>
    ),
  },
  {
    id: "responsibilities",
    label: "Roles & Responsibilities",
    content: (
      <ul className="jd-list">
        <li>Drive continuous quality-improvement processes across the university.</li>
        <li>Coordinate NAAC accreditation cycles, including SSR preparation and AQAR submission.</li>
        <li>Compile and submit NIRF ranking data.</li>
        <li>Conduct internal academic and administrative quality audits.</li>
        <li>Run feedback mechanisms — student, faculty, employer, and alumni feedback — and analyse results.</li>
        <li>Document best practices and maintain quality benchmarking across departments.</li>
        <li>Sensitize faculty and staff on quality parameters and accreditation requirements.</li>
        <li>Liaise with UGC, AICTE, NBA, and other regulatory and ranking bodies.</li>
        <li>Maintain the institutional quality manual and related SOPs.</li>
      </ul>
    ),
  },
  {
    id: "outcome",
    label: "Expected Outcome",
    content: (
      <ul className="jd-list">
        <li>Successful NAAC accreditation cycles with an improving grade/CGPA over time.</li>
        <li>Improved NIRF ranking position year-on-year.</li>
        <li>A robust feedback loop that translates into visible, actionable improvements.</li>
        <li>An institution-wide culture of quality consciousness.</li>
        <li>Timely, accurate compliance submissions (AQAR, NIRF data, and similar).</li>
      </ul>
    ),
  },
  {
    id: "mrm",
    label: "Things to be Addressed in Management Review Meeting",
    content: (
      <ul className="jd-list">
        <li>NAAC/NBA accreditation cycle status and pending action items.</li>
        <li>NIRF ranking data status and performance on key metrics.</li>
        <li>AQAR submission status.</li>
        <li>Summary of feedback analysis (student/faculty/employer) and action taken.</li>
        <li>Internal audit findings and their closure status.</li>
        <li>Departments lagging on quality parameters that need intervention.</li>
      </ul>
    ),
  },
];

export default iqacSections;
