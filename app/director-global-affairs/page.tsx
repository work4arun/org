import Link from "next/link";

export const metadata = {
  title: "Director – Global Affairs — RGU",
};

export default function DirectorGlobalAffairsPage() {
  return (
    <main>
      <Link href="/" className="back-link">
        ← Back to organisation structure
      </Link>

      <h1>Director – Global Affairs</h1>
      <p>
        Drafted content — no source job description was supplied for this
        role, so this is a reasonable starting draft based on the role title.
        Edit freely.
      </p>

      <section>
        <h2>Roles &amp; Responsibilities</h2>
        <ul>
          <li>Develop and maintain international MoUs and institutional partnerships.</li>
          <li>Run student and faculty exchange programs, and study-abroad facilitation.</li>
          <li>Build global research collaborations, joint-degree and dual-degree programs.</li>
          <li>Lead international student recruitment and support services.</li>
          <li>Coordinate submissions and documentation for global rankings (QS, THE, and similar).</li>
          <li>Represent the university at international conferences, seminars, and delegations.</li>
          <li>Manage international office operations, including visa and travel support for students/faculty.</li>
          <li>Engage and maintain relationships with international alumni.</li>
        </ul>
      </section>

      <section>
        <h2>Expected Outcome</h2>
        <ul>
          <li>Growth in international student enrollment year-on-year.</li>
          <li>An expanding, active portfolio of international MoUs and partnerships.</li>
          <li>Improved visibility in global rankings.</li>
          <li>Healthy participation numbers in exchange programs, both inbound and outbound.</li>
          <li>Stronger international collaborations reflected in joint research and publications.</li>
        </ul>
      </section>

      <section>
        <h2>Things to be Addressed in Management Review Meeting</h2>
        <ul>
          <li>Status of ongoing international MoUs and new partnership prospects.</li>
          <li>International student enrollment numbers and trends.</li>
          <li>Status of outbound and inbound exchange programs.</li>
          <li>Progress on global ranking submissions (QS, THE, etc.).</li>
          <li>Budget utilization for international initiatives.</li>
          <li>Issues in visa processing, compliance, or international student support.</li>
        </ul>
      </section>
    </main>
  );
}
