import { CatTabSection } from "@/components/CategoryTabs";

// Common role charter for the HOD hub — applies to every department's HOD.
// Drafted content; no source job description was supplied.
const hodSections: CatTabSection[] = [
  {
    id: "purpose",
    label: "Role Purpose",
    content: (
      <p>
        Each HOD runs their department&rsquo;s day-to-day academic and
        administrative operation, with dual reporting: administratively to
        the Dean for overall department development, and functionally to
        Strategic Directors for specific focus areas (research, RAALE,
        quality, and similar).
      </p>
    ),
  },
  {
    id: "responsibilities",
    label: "Roles & Responsibilities",
    content: (
      <ul className="jd-list">
        <li>Manage day-to-day academic delivery, timetabling, and faculty allocation within the department.</li>
        <li>Ensure curriculum coverage, internal assessments, and academic calendar adherence.</li>
        <li>Mentor and supervise faculty members; support faculty development and appraisal input.</li>
        <li>Monitor student performance, attendance, and discipline within the department.</li>
        <li>Execute functional priorities set by Strategic Directors — research targets, RAALE competency initiatives, IQAC/accreditation documentation, and similar.</li>
        <li>Maintain department records, results analysis, and academic documentation.</li>
        <li>Coordinate department-level industry visits, guest lectures, and student activities.</li>
        <li>Escalate resource, infrastructure, or faculty needs to the Dean.</li>
      </ul>
    ),
  },
  {
    id: "outcome",
    label: "Expected Outcome",
    content: (
      <ul className="jd-list">
        <li>Smooth academic operations with strong student outcomes at the department level.</li>
        <li>Active faculty participation in research, RAALE, and quality initiatives.</li>
        <li>Department readiness for accreditation and audit requirements.</li>
        <li>Clear, timely escalation of department needs to the Dean and relevant Directors.</li>
        <li>A well-documented, well-run department with minimal compliance gaps.</li>
      </ul>
    ),
  },
  {
    id: "mrm",
    label: "Things to be Addressed in Management Review Meeting",
    content: (
      <ul className="jd-list">
        <li>Department academic performance — results, attendance, and any concerns.</li>
        <li>Progress against functional targets set by Strategic Directors.</li>
        <li>Faculty vacancies, workload, or development needs.</li>
        <li>Student grievances or disciplinary matters requiring attention.</li>
        <li>Department-level accreditation/documentation status.</li>
      </ul>
    ),
  },
];

export default hodSections;
