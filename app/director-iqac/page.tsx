import Link from "next/link";

export const metadata = {
  title: "Director – IQAC — RGU",
};

export default function DirectorIqacPage() {
  return (
    <main>
      <Link href="/" className="back-link">
        ← Back to organisation structure
      </Link>

      <h1>Director – IQAC</h1>
      <p>
        Drafted content — no source job description was supplied for this
        role, so this is a reasonable starting draft based on standard IQAC
        (Internal Quality Assurance Cell) practice at Indian higher-ed
        institutions. Edit freely.
      </p>

      <section>
        <h2>Roles &amp; Responsibilities</h2>
        <ul>
          <li>Drive continuous quality-improvement processes across the university.</li>
          <li>Coordinate NAAC accreditation cycles, including SSR preparation and AQAR submission.</li>
          <li>Compile and submit NIRF ranking data.</li>
          <li>Conduct internal academic and administrative quality audits.</li>
          <li>Run feedback mechanisms — student, faculty, employer, and alumni feedback — and analyse results.</li>
          <li>Document best practices and maintain quality benchmarking across departments.</li>
          <li>Sensitize faculty and staff on quality parameters and accreditation requirements.</li>
          <li>Liaise with UGC, AICTE, NBA, and other regulatory and ranking bodies.</li>
          <li>Maintain the institutional quality manual and related SOPs.</li>
        </ul>
      </section>

      <section>
        <h2>Expected Outcome</h2>
        <ul>
          <li>Successful NAAC accreditation cycles with an improving grade/CGPA over time.</li>
          <li>Improved NIRF ranking position year-on-year.</li>
          <li>A robust feedback loop that translates into visible, actionable improvements.</li>
          <li>An institution-wide culture of quality consciousness.</li>
          <li>Timely, accurate compliance submissions (AQAR, NIRF data, and similar).</li>
        </ul>
      </section>

      <section>
        <h2>Things to be Addressed in Management Review Meeting</h2>
        <ul>
          <li>NAAC/NBA accreditation cycle status and pending action items.</li>
          <li>NIRF ranking data status and performance on key metrics.</li>
          <li>AQAR submission status.</li>
          <li>Summary of feedback analysis (student/faculty/employer) and action taken.</li>
          <li>Internal audit findings and their closure status.</li>
          <li>Departments lagging on quality parameters that need intervention.</li>
        </ul>
      </section>
    </main>
  );
}
