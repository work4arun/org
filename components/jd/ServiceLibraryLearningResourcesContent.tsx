import { CatTabSection } from "@/components/CategoryTabs";

const libraryLearningResourcesSections: CatTabSection[] = [
  {
    id: "purpose",
    label: "Role Purpose",
    content: (
      <p>
        Library &amp; Learning Resources runs the university&rsquo;s
        physical and digital knowledge infrastructure — books, journals,
        e-resources, and study spaces — supporting teaching, learning, and
        research. Reports to the Registrar.
      </p>
    ),
  },
  {
    id: "responsibilities",
    label: "Roles & Responsibilities",
    content: (
      <ul className="jd-list">
        <li>Build and maintain the library collection — books, journals, and reference material — aligned to curriculum needs.</li>
        <li>Manage subscriptions to e-resources, databases, and digital libraries (e.g. Scopus, Web of Science, IEEE, and similar).</li>
        <li>Run circulation services, cataloguing, and library management systems.</li>
        <li>Support faculty and students with literature search, referencing, and plagiarism-check tools.</li>
        <li>Maintain reading rooms, digital labs, and study spaces to a good standard.</li>
        <li>Coordinate with departments and IQAC on accreditation-related library documentation.</li>
        <li>Track usage statistics and plan acquisitions based on demand.</li>
        <li>Run information-literacy and library orientation programs for new students.</li>
      </ul>
    ),
  },
  {
    id: "outcome",
    label: "Expected Outcome",
    content: (
      <ul className="jd-list">
        <li>A well-stocked, curriculum-aligned, up-to-date collection.</li>
        <li>High utilization of e-resources and digital library subscriptions.</li>
        <li>Smooth circulation services with minimal delays or losses.</li>
        <li>Strong support for faculty/student research and referencing needs.</li>
        <li>Library infrastructure that meets accreditation and ranking benchmarks.</li>
      </ul>
    ),
  },
  {
    id: "mrm",
    label: "Things to be Addressed in Management Review Meeting",
    content: (
      <ul className="jd-list">
        <li>Collection growth and acquisition status against plan.</li>
        <li>E-resource/database subscription renewals and usage statistics.</li>
        <li>Library infrastructure or system issues needing attention.</li>
        <li>Accreditation/ranking documentation status (library-related).</li>
        <li>Student/faculty feedback on library services.</li>
        <li>Budget utilization for acquisitions and subscriptions.</li>
      </ul>
    ),
  },
];

export default libraryLearningResourcesSections;
