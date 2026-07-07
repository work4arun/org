import { CatTabSection } from "@/components/CategoryTabs";

// Drafted content for the Controller of Examinations — examination
// administration, evaluation, and results processing. No source job
// description was supplied.
const coeSections: CatTabSection[] = [
  {
    id: "purpose",
    label: "Role Purpose",
    content: (
      <p>
        The Controller of Examinations owns the integrity, accuracy, and
        timeliness of every examination process — from question paper
        setting through results and certification — reporting directly to
        the Vice-Chancellor.
      </p>
    ),
  },
  {
    id: "responsibilities",
    label: "Roles & Responsibilities",
    content: (
      <ul className="jd-list">
        <li>Plan and conduct all university examinations — internal, semester-end, and supplementary/backlog — across every School.</li>
        <li>Prepare the examination calendar in coordination with Academics and department exam coordinators.</li>
        <li>Oversee question paper setting, moderation, confidentiality, secure printing, and distribution.</li>
        <li>Manage invigilation, examination-centre logistics, and malpractice prevention.</li>
        <li>Coordinate evaluation (valuation camps), scrutiny, and results processing.</li>
        <li>Issue mark sheets, transcripts, and provisional/degree certificates.</li>
        <li>Handle revaluation, retotaling, and grievance redressal for examination-related disputes.</li>
        <li>Maintain examination records and digital repositories, ensuring data integrity.</li>
        <li>Ensure compliance with UGC and other regulatory examination norms.</li>
        <li>Coordinate the examination cell and department-level examination coordinators.</li>
      </ul>
    ),
  },
  {
    id: "outcome",
    label: "Expected Outcome",
    content: (
      <ul className="jd-list">
        <li>Timely, error-free conduct of examinations and results declaration.</li>
        <li>Minimal to zero malpractice incidents.</li>
        <li>Fast, accurate results processing and certificate issuance turnaround.</li>
        <li>High student and faculty confidence in examination integrity and transparency.</li>
        <li>Full regulatory compliance across all examination processes.</li>
      </ul>
    ),
  },
  {
    id: "mrm",
    label: "Things to be Addressed in Management Review Meeting",
    content: (
      <ul className="jd-list">
        <li>Examination calendar adherence and any delays.</li>
        <li>Results processing turnaround time against target.</li>
        <li>Malpractice incidents reported and their resolution status.</li>
        <li>Revaluation and retotaling requests, and resolution status.</li>
        <li>Certificate and transcript issuance backlog.</li>
        <li>Technology or infrastructure needs for examination systems (e.g. online exams).</li>
        <li>Escalations requiring a Vice-Chancellor-level decision.</li>
      </ul>
    ),
  },
];

export default coeSections;
