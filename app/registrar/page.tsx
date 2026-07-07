import Link from "next/link";

export const metadata = {
  title: "Registrar — RGU",
};

export default function RegistrarPage() {
  return (
    <main className="jd-page">
      <Link href="/" className="back-link">
        ← Back to organisation structure
      </Link>

      <span className="jd-badge jd-badge-leadership">Leadership</span>

      <h1 className="jd-title">Registrar</h1>
      <p className="jd-intro">
        Drafted content, based on the role&rsquo;s portfolio (administration
        head, with all Shared Services reporting in) — no source job
        description was supplied, so treat this as a starting draft and edit
        freely.
      </p>

      <section className="jd-section">
        <h2>Roles &amp; Responsibilities</h2>
        <ul className="jd-list">
          <li>Serve as the overall administrative head of the university, overseeing every Shared Service — HR, Budget &amp; Finance, Maintenance &amp; Facilities, Library &amp; Learning Resources, Legal &amp; Compliance, and Procurement &amp; Stores.</li>
          <li>Ensure statutory compliance, legal matters, and institutional governance are properly handled.</li>
          <li>Oversee HR policy implementation, recruitment coordination, and employee lifecycle management.</li>
          <li>Lead budget planning and financial oversight in coordination with Finance.</li>
          <li>Direct infrastructure planning, campus maintenance, and facilities management.</li>
          <li>Oversee procurement policy and vendor management.</li>
          <li>Maintain records management, official correspondence, and administrative documentation.</li>
          <li>Act as Secretary to governing bodies (Board of Management, Academic Council, and similar), where applicable.</li>
          <li>Liaise with regulatory and government bodies on administrative compliance matters.</li>
          <li>Coordinate closely with the Vice-Chancellor on all institutional administration matters.</li>
        </ul>
      </section>

      <section className="jd-section">
        <h2>Expected Outcome</h2>
        <ul className="jd-list">
          <li>Smooth, efficient administrative operations across every Shared Service.</li>
          <li>A strong regulatory and statutory compliance record.</li>
          <li>Timely HR processes — recruitment, appraisals, and grievance redressal.</li>
          <li>Well-maintained infrastructure and facilities.</li>
          <li>Transparent, well-documented governance and institutional records.</li>
        </ul>
      </section>

      <section className="jd-section">
        <h2>Things to be Addressed in Management Review Meeting</h2>
        <ul className="jd-list">
          <li>Status update from each Shared Service head (HR, Finance, Maintenance, Library, Legal, Procurement).</li>
          <li>Statutory/compliance filings status and upcoming deadlines.</li>
          <li>HR metrics: recruitment pipeline, attrition, and open grievances.</li>
          <li>Budget utilization against plan.</li>
          <li>Infrastructure or maintenance issues needing attention or capital approval.</li>
          <li>Status of any legal matters or disputes.</li>
          <li>Governance body meeting outcomes and pending action items.</li>
        </ul>
      </section>
    </main>
  );
}
