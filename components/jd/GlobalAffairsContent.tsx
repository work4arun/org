import { CatTabSection } from "@/components/CategoryTabs";

// Shared JD content for Director – Global Affairs, shown as tabbed
// categories on the standalone /director-global-affairs page.
const globalAffairsSections: CatTabSection[] = [
  {
    id: "purpose",
    label: "Role Purpose",
    content: (
      <p>
        The Director – Global Affairs leads the university&rsquo;s
        international footprint — partnerships, exchange programs, global
        rankings, and international student recruitment — building the
        institution&rsquo;s presence and reputation beyond national borders.
      </p>
    ),
  },
  {
    id: "responsibilities",
    label: "Roles & Responsibilities",
    content: (
      <ul className="jd-list">
        <li>Develop and maintain international MoUs and institutional partnerships.</li>
        <li>Run student and faculty exchange programs, and study-abroad facilitation.</li>
        <li>Build global research collaborations, joint-degree and dual-degree programs.</li>
        <li>Lead international student recruitment and support services.</li>
        <li>Coordinate submissions and documentation for global rankings (QS, THE, and similar).</li>
        <li>Represent the university at international conferences, seminars, and delegations.</li>
        <li>Manage international office operations, including visa and travel support for students/faculty.</li>
        <li>Engage and maintain relationships with international alumni.</li>
      </ul>
    ),
  },
  {
    id: "outcome",
    label: "Expected Outcome",
    content: (
      <ul className="jd-list">
        <li>Growth in international student enrollment year-on-year.</li>
        <li>An expanding, active portfolio of international MoUs and partnerships.</li>
        <li>Improved visibility in global rankings.</li>
        <li>Healthy participation numbers in exchange programs, both inbound and outbound.</li>
        <li>Stronger international collaborations reflected in joint research and publications.</li>
      </ul>
    ),
  },
  {
    id: "mrm",
    label: "Things to be Addressed in Management Review Meeting",
    content: (
      <ul className="jd-list">
        <li>Status of ongoing international MoUs and new partnership prospects.</li>
        <li>International student enrollment numbers and trends.</li>
        <li>Status of outbound and inbound exchange programs.</li>
        <li>Progress on global ranking submissions (QS, THE, etc.).</li>
        <li>Budget utilization for international initiatives.</li>
        <li>Issues in visa processing, compliance, or international student support.</li>
      </ul>
    ),
  },
];

export default globalAffairsSections;
