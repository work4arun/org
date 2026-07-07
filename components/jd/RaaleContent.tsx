import { CatTabSection } from "@/components/CategoryTabs";

// Shared JD content for Director – RAALE (Rathinam's Advanced Active
// Learning Ecosystem) — responsible for student competency growth. Shown as
// tabbed categories on the standalone /director-raale page.
const raaleSections: CatTabSection[] = [
  {
    id: "purpose",
    label: "Role Purpose",
    content: (
      <p>
        RAALE — Rathinam&rsquo;s Advanced Active Learning Ecosystem — is the
        university&rsquo;s structured approach to student competency growth.
        The Director – RAALE is responsible for embedding active-learning
        methodologies across departments and building a measurable
        competency-growth pipeline for every student.
      </p>
    ),
  },
  {
    id: "responsibilities",
    label: "Roles & Responsibilities",
    content: (
      <ul className="jd-list">
        <li>Design and implement active-learning methodologies across departments — project-based learning, experiential learning, flipped classrooms, and similar formats.</li>
        <li>Build a structured student competency framework covering technical, soft, and life skills.</li>
        <li>Work with HODs and faculty to embed active-learning practices into day-to-day curriculum delivery.</li>
        <li>Track student competency growth through assessments and dedicated tools.</li>
        <li>Organize skill-building workshops, bootcamps, hackathons, and competency certification programs.</li>
        <li>Train and sensitize faculty on active-learning pedagogy.</li>
        <li>Partner with industry and external experts for competency-building content.</li>
        <li>Monitor student competency outcomes and report them to leadership.</li>
        <li>Benchmark competency growth against industry and employability requirements.</li>
      </ul>
    ),
  },
  {
    id: "outcome",
    label: "Expected Outcome",
    content: (
      <ul className="jd-list">
        <li>Measurable improvement in student competency levels — both technical and soft skills.</li>
        <li>Increased adoption of active-learning methods across every department.</li>
        <li>Higher student engagement and learning outcomes.</li>
        <li>Improved employability readiness tied directly to competency growth.</li>
        <li>Strong faculty capability in delivering active-learning formats.</li>
      </ul>
    ),
  },
  {
    id: "mrm",
    label: "Things to be Addressed in Management Review Meeting",
    content: (
      <ul className="jd-list">
        <li>Department-wise adoption status of active-learning methods.</li>
        <li>Student competency assessment results and trends.</li>
        <li>Workshops, bootcamps, and certification programs conducted versus planned.</li>
        <li>Faculty training completion status.</li>
        <li>Employability/competency benchmark performance.</li>
        <li>Escalations or resource needs for RAALE initiatives.</li>
      </ul>
    ),
  },
];

export default raaleSections;
