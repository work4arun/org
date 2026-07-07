import { CatTabSection } from "@/components/CategoryTabs";

// Common role charter for the Dean hub — applies to every School's Dean.
// Drafted content; no source job description was supplied.
const deanSections: CatTabSection[] = [
  {
    id: "purpose",
    label: "Role Purpose",
    content: (
      <p>
        Each Dean provides academic and administrative leadership for their
        School, converting university-wide academic policy into day-to-day
        execution across departments, and connecting HODs upward to the
        Vice-Chancellor.
      </p>
    ),
  },
  {
    id: "responsibilities",
    label: "Roles & Responsibilities",
    content: (
      <ul className="jd-list">
        <li>Provide overall academic and administrative leadership for the School.</li>
        <li>Ensure curriculum delivery, academic calendar adherence, and teaching quality across all departments in the School.</li>
        <li>Guide and mentor HODs on departmental academic and administrative matters.</li>
        <li>Coordinate faculty recruitment planning and faculty development within the School.</li>
        <li>Monitor student academic performance and oversee remedial actions at the School level.</li>
        <li>Represent the School in university academic bodies and accreditation processes.</li>
        <li>Coordinate with Strategic Directors (Research, IQAC, RAALE, and similar) on School-wide initiatives.</li>
        <li>Approve and escalate departmental budget, infrastructure, and resource needs.</li>
      </ul>
    ),
  },
  {
    id: "outcome",
    label: "Expected Outcome",
    content: (
      <ul className="jd-list">
        <li>Consistent academic quality and governance across every department in the School.</li>
        <li>Strong, well-supported HODs executing university priorities effectively.</li>
        <li>Healthy student academic performance and satisfaction within the School.</li>
        <li>Smooth coordination between the School and university-level Strategic Directors.</li>
        <li>School readiness for accreditation, audits, and ranking exercises.</li>
      </ul>
    ),
  },
  {
    id: "mrm",
    label: "Things to be Addressed in Management Review Meeting",
    content: (
      <ul className="jd-list">
        <li>Department-wise academic performance and any concerns.</li>
        <li>HOD escalations requiring Dean or VC-level decisions.</li>
        <li>Faculty strength, vacancies, and development-program status.</li>
        <li>School-level infrastructure or resource needs.</li>
        <li>Progress on accreditation/ranking action items relevant to the School.</li>
      </ul>
    ),
  },
];

export default deanSections;
