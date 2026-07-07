import Link from "next/link";

export const metadata = {
  title: "Controller of Examinations — RGU",
};

export default function ControllerOfExaminationsPage() {
  return (
    <main className="jd-page">
      <Link href="/" className="back-link">
        ← Back to organisation structure
      </Link>

      <span className="jd-badge jd-badge-leadership">Leadership</span>

      <h1 className="jd-title">Controller of Examinations</h1>
      <p className="jd-intro">
        Drafted content, based on the role&rsquo;s portfolio (examination
        administration, evaluation, and results processing) — no source job
        description was supplied, so treat this as a starting draft and edit
        freely.
      </p>

      <section className="jd-section">
        <h2>Roles &amp; Responsibilities</h2>
        <ul className="jd-list">
          <li>Plan and conduct all university examinations — internal, semester-end, and supplementary/backlog — across every School.</li>
          <li>Prepare the examination calendar in coordination with Academics and department exam coordinators.</li>
          <li>Oversee question paper setting, moderation, confidentiality, secure printing, and distribution.</li>
          <li>Manage invigilation, examination-centre logistics, and malpractice prevention.</li>
          <li>Coordinate evaluation (valuation camps), scrutiny, and results processing.</li>
          <li>Issue mark sheets, transcripts, and provisional/degree certificates.</li>
          <li>Handle revaluation, retotaling, and grievance redressal for examination-related disputes.</li>
          <li>Maintain examination records and digital repositories, ensuring data integrity.</li>
          <li>Ensure compliance with UGC and other regulatory examination norms.</li>
          <li>Coordinate the examination cell and department-level examination coordinators.</li>
        </ul>
      </section>

      <section className="jd-section">
        <h2>Expected Outcome</h2>
        <ul className="jd-list">
          <li>Timely, error-free conduct of examinations and results declaration.</li>
          <li>Minimal to zero malpractice incidents.</li>
          <li>Fast, accurate results processing and certificate issuance turnaround.</li>
          <li>High student and faculty confidence in examination integrity and transparency.</li>
          <li>Full regulatory compliance across all examination processes.</li>
        </ul>
      </section>

      <section className="jd-section">
        <h2>Things to be Addressed in Management Review Meeting</h2>
        <ul className="jd-list">
          <li>Examination calendar adherence and any delays.</li>
          <li>Results processing turnaround time against target.</li>
          <li>Malpractice incidents reported and their resolution status.</li>
          <li>Revaluation and retotaling requests, and resolution status.</li>
          <li>Certificate and transcript issuance backlog.</li>
          <li>Technology or infrastructure needs for examination systems (e.g. online exams).</li>
          <li>Escalations requiring a Vice-Chancellor-level decision.</li>
        </ul>
      </section>
    </main>
  );
}
