import Link from "next/link";

export const metadata = {
  title: "Director – Industries & Corporate Relations — RGU",
};

export default function DirectorIndustriesCorporateRelationsPage() {
  return (
    <main>
      <Link href="/" className="back-link">
        ← Back to organisation structure
      </Link>

      <h1>Director – Industries &amp; Corporate Relations</h1>
      <p>
        Drafted content — no source job description was supplied for this
        role, so this is a reasonable starting draft based on the role title.
        Edit freely.
      </p>

      <section>
        <h2>Roles &amp; Responsibilities</h2>
        <ul>
          <li>Build and maintain relationships with industry, corporates, and MoU partners.</li>
          <li>Plan and drive placement activity in coordination with the Training &amp; Placement cell and HODs.</li>
          <li>Develop internship pipelines, industry-academia projects, guest lectures, and industrial visits.</li>
          <li>Align skill-development initiatives with current industry and employability requirements.</li>
          <li>Identify and manage CSR partnerships and corporate sponsorships.</li>
          <li>Run career counselling and employability-enhancement programs for students.</li>
          <li>Track placement statistics, package trends, and employer feedback across departments.</li>
          <li>Coordinate industry-facing advisory boards and represent the university at industry forums.</li>
        </ul>
      </section>

      <section>
        <h2>Expected Outcome</h2>
        <ul>
          <li>Higher placement percentage and improved average/median package.</li>
          <li>A growing, active count of industry MoUs and corporate partnerships.</li>
          <li>Stronger student employability and readiness for industry roles.</li>
          <li>Positive, documented employer satisfaction feedback.</li>
          <li>Visible university presence in industry and corporate circles.</li>
        </ul>
      </section>

      <section>
        <h2>Things to be Addressed in Management Review Meeting</h2>
        <ul>
          <li>Placement statistics against targets, department-wise.</li>
          <li>Number of new MoUs signed or renewed since the last review.</li>
          <li>Internship placements secured and pipeline for the next cycle.</li>
          <li>Employer feedback and satisfaction scores.</li>
          <li>Status of skill-gap analysis and related training initiatives.</li>
          <li>Upcoming recruitment drives and hiring pipeline.</li>
          <li>Roadblocks needing leadership decisions or support.</li>
        </ul>
      </section>
    </main>
  );
}
