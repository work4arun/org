import { CatTabSection } from "@/components/CategoryTabs";

const hrSections: CatTabSection[] = [
  {
    id: "purpose",
    label: "Role Purpose",
    content: (
      <p>
        Human Resources runs the full employee lifecycle for faculty and
        staff — recruitment through exit — and builds the policies,
        systems, and culture that keep the university well-staffed and
        engaged. Reports to the Registrar.
      </p>
    ),
  },
  {
    id: "responsibilities",
    label: "Roles & Responsibilities",
    content: (
      <ul className="jd-list">
        <li>Run end-to-end recruitment — sourcing, screening, interviews, offers, and onboarding — for faculty and staff.</li>
        <li>Maintain employee records, the HRMS, attendance, and leave management.</li>
        <li>Coordinate payroll processing with Finance.</li>
        <li>Manage the performance appraisal cycle — goal setting, reviews, and ratings.</li>
        <li>Run training and development programs for non-teaching staff, and coordinate faculty development logistics.</li>
        <li>Handle employee grievance redressal and disciplinary processes.</li>
        <li>Formulate HR policy and ensure compliance with labour law.</li>
        <li>Run employee engagement and wellness initiatives.</li>
        <li>Manage the exit process — resignations and full-and-final settlements.</li>
      </ul>
    ),
  },
  {
    id: "outcome",
    label: "Expected Outcome",
    content: (
      <ul className="jd-list">
        <li>Timely recruitment closure with quality hires.</li>
        <li>Low attrition and high employee satisfaction.</li>
        <li>Accurate, compliant payroll and HR records.</li>
        <li>Effective performance management that drives productivity.</li>
        <li>A positive workplace culture with strong engagement.</li>
      </ul>
    ),
  },
  {
    id: "mrm",
    label: "Things to be Addressed in Management Review Meeting",
    content: (
      <ul className="jd-list">
        <li>Recruitment pipeline status — open positions and time-to-hire.</li>
        <li>Attrition rate and exit-interview insights.</li>
        <li>Pending grievances and their resolution status.</li>
        <li>Performance appraisal cycle completion status.</li>
        <li>Compliance/statutory HR filing status.</li>
        <li>Training programs conducted versus planned.</li>
      </ul>
    ),
  },
];

export default hrSections;
