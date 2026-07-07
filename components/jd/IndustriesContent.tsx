import { CatTabSection } from "@/components/CategoryTabs";

// Shared JD content for Director – Industries & Corporate Relations, shown
// as tabbed categories on the standalone /director-industries... page.
const industriesSections: CatTabSection[] = [
  {
    id: "purpose",
    label: "Role Purpose",
    content: (
      <p>
        The Director – Industries &amp; Corporate Relations builds and
        drives the university&rsquo;s industry-facing ecosystem — placements,
        internships, corporate partnerships, and employability — so that
        every department has an active pipeline connecting students to
        industry opportunities.
      </p>
    ),
  },
  {
    id: "responsibilities",
    label: "Roles & Responsibilities",
    content: (
      <ul className="jd-list">
        <li>Build and maintain relationships with industry, corporates, and MoU partners.</li>
        <li>Plan and drive placement activity in coordination with the Training &amp; Placement cell and HODs.</li>
        <li>Develop internship pipelines, industry-academia projects, guest lectures, and industrial visits.</li>
        <li>Align skill-development initiatives with current industry and employability requirements.</li>
        <li>Identify and manage CSR partnerships and corporate sponsorships.</li>
        <li>Run career counselling and employability-enhancement programs for students.</li>
        <li>Track placement statistics, package trends, and employer feedback across departments.</li>
        <li>Coordinate industry-facing advisory boards and represent the university at industry forums.</li>
      </ul>
    ),
  },
  {
    id: "outcome",
    label: "Expected Outcome",
    content: (
      <ul className="jd-list">
        <li>Higher placement percentage and improved average/median package.</li>
        <li>A growing, active count of industry MoUs and corporate partnerships.</li>
        <li>Stronger student employability and readiness for industry roles.</li>
        <li>Positive, documented employer satisfaction feedback.</li>
        <li>Visible university presence in industry and corporate circles.</li>
      </ul>
    ),
  },
  {
    id: "mrm",
    label: "Things to be Addressed in Management Review Meeting",
    content: (
      <ul className="jd-list">
        <li>Placement statistics against targets, department-wise.</li>
        <li>Number of new MoUs signed or renewed since the last review.</li>
        <li>Internship placements secured and pipeline for the next cycle.</li>
        <li>Employer feedback and satisfaction scores.</li>
        <li>Status of skill-gap analysis and related training initiatives.</li>
        <li>Upcoming recruitment drives and hiring pipeline.</li>
        <li>Roadblocks needing leadership decisions or support.</li>
      </ul>
    ),
  },
];

export default industriesSections;
