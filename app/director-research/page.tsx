import Link from "next/link";

// A dedicated, static page for /director-research — this overrides the
// generic [slug] stub route with the full Job Description for this role,
// instead of the placeholder every other node currently uses.

export const metadata = {
  title: "Director – Research — RGU",
};

export default function DirectorResearchPage() {
  return (
    <main className="jd-page">
      <Link href="/" className="back-link">
        ← Back to organisation structure
      </Link>

      <span className="jd-badge">Strategic Director</span>

      <h1 className="jd-title">Deputy Director – Publications, Patents &amp; Research Ecosystem</h1>
      <p className="jd-intro">
        This is the working Job Description on file for the{" "}
        <strong>Director – Research</strong> node. Note the title here reads
        &ldquo;Deputy Director&rdquo; — see the flag at the bottom of this page.
      </p>

      <div className="jd-meta">
        <div>
          <span className="jd-meta-label">Institution</span>
          Rathinam Global Deemed to be University
        </div>
        <div>
          <span className="jd-meta-label">Reporting To</span>
          Director / Dean Research / Vice Chancellor / Chief Business Officer
        </div>
        <div>
          <span className="jd-meta-label">Role Type</span>
          Academic Leadership &amp; Research Development
        </div>
      </div>

      <section className="jd-section">
        <h2>1. Role Purpose</h2>
        <p>
          The Deputy Director – Publications, Patents &amp; Research Ecosystem will be
          responsible for creating, monitoring, and scaling a structured research
          publication and intellectual property ecosystem across the university. The
          role will focus on increasing quality research papers, patents, sponsored
          conferences, faculty research engagement, student research participation,
          and institutional research visibility.
        </p>
        <p>
          The primary objective is to move the institution from individual
          faculty-based research activity to a system-driven, target-based,
          quality-focused research culture.
        </p>
      </section>

      <section className="jd-section">
        <h2>2. Key Objectives</h2>
        <ol className="jd-list">
          <li>
            Increase the number of quality research publications in Scopus, Web of
            Science, UGC CARE, ABDC, PubMed, IEEE, Springer, Elsevier, Taylor &amp;
            Francis, and other reputed indexed platforms.
          </li>
          <li>Improve the number of patents filed, published, granted, commercialized, or transferred.</li>
          <li>Build a department-wise research pipeline with monthly monitoring.</li>
          <li>
            Organize national and international conferences, workshops, FDPs,
            paper-writing clinics, and patent awareness programs.
          </li>
          <li>
            Attract sponsored conferences, funded seminars, industry-supported
            research events, and collaborative publication opportunities.
          </li>
          <li>Create a strong internal research support system for faculty and students.</li>
          <li>
            Improve the university&rsquo;s academic ranking, NAAC/NIRF visibility,
            accreditation strength, and research reputation.
          </li>
        </ol>
      </section>

      <section className="jd-section">
        <h2>3. Day-to-Day Responsibilities</h2>

        <h3>A. Daily Research Monitoring</h3>
        <ol className="jd-list">
          <li>
            Meet department research coordinators and collect updates on ongoing
            papers, patents, book chapters, conferences, and research proposals.
          </li>
          <li>Maintain a live publication and patent tracker for every department.</li>
          <li>
            Track faculty-wise research progress, including:
            <ul className="jd-list">
              <li>Paper title</li>
              <li>Journal/conference target</li>
              <li>Indexing status</li>
              <li>Current writing stage</li>
              <li>Submission date</li>
              <li>Review status</li>
              <li>Acceptance/rejection status</li>
              <li>Publication date</li>
              <li>Patent filing stage</li>
            </ul>
          </li>
          <li>Identify faculty members who are inactive in research and create intervention plans.</li>
          <li>Coordinate with HoDs to ensure monthly research targets are followed.</li>
          <li>Review pending manuscripts and guide faculty on next steps.</li>
          <li>Track rejected papers and ensure they are revised and resubmitted to suitable journals.</li>
        </ol>

        <h3>B. Faculty Publication Support</h3>
        <ol className="jd-list">
          <li>Create a structured paper-writing support system for faculty.</li>
          <li>Help faculty identify suitable journals and conferences based on subject area.</li>
          <li>
            Guide faculty on:
            <ul className="jd-list">
              <li>Research problem identification</li>
              <li>Literature review</li>
              <li>Research methodology</li>
              <li>Data analysis</li>
              <li>Plagiarism control</li>
              <li>Journal formatting</li>
              <li>Citation improvement</li>
              <li>Reviewer response preparation</li>
            </ul>
          </li>
          <li>Organize weekly or fortnightly paper-writing clinics.</li>
          <li>Create internal peer-review panels for manuscript improvement.</li>
          <li>Ensure every department has a minimum publication pipeline.</li>
          <li>Support young faculty members and research scholars in converting projects into papers.</li>
          <li>Encourage interdisciplinary publications between departments.</li>
        </ol>

        <h3>C. Patent Development and IP Management</h3>
        <ol className="jd-list">
          <li>
            Identify patentable ideas from faculty projects, student projects, funded
            projects, incubation activities, and industry problems.
          </li>
          <li>Conduct regular patent idea mining sessions with departments.</li>
          <li>Coordinate with patent attorneys, IP consultants, and legal teams for patent filing.</li>
          <li>
            Maintain a patent tracker covering:
            <ul className="jd-list">
              <li>Idea submitted</li>
              <li>Prior art search completed</li>
              <li>Drafting stage</li>
              <li>Filing completed</li>
              <li>Publication status</li>
              <li>Examination status</li>
              <li>Grant status</li>
              <li>Commercialization status</li>
            </ul>
          </li>
          <li>Conduct patent awareness sessions for faculty and students.</li>
          <li>Encourage design patents, utility patents, copyrights, trademarks, and technology-transfer opportunities.</li>
          <li>Work with incubation and industry-connect teams to convert patents into products or commercial opportunities.</li>
        </ol>

        <h3>D. Conference and Academic Event Ecosystem</h3>
        <ol className="jd-list">
          <li>Plan and execute department-wise national and international conferences.</li>
          <li>Create an annual research conference calendar for the university.</li>
          <li>Ensure each department organizes at least one major academic/research event every year.</li>
          <li>
            Identify opportunities for sponsored conferences through:
            <ul className="jd-list">
              <li>Government bodies</li>
              <li>Industry partners</li>
              <li>Professional associations</li>
              <li>Research councils</li>
              <li>CSR partners</li>
              <li>Alumni</li>
            </ul>
          </li>
          <li>Coordinate with publishers and indexing partners for conference proceedings.</li>
          <li>Ensure conference papers are published in reputed indexed proceedings wherever possible.</li>
          <li>
            Build partnerships with IEEE, Springer, Elsevier, Scopus-indexed
            proceedings, professional bodies, and reputed academic societies.
          </li>
          <li>
            Organize research conclaves, innovation summits, patent expos, paper
            presentation contests, and student research festivals.
          </li>
        </ol>

        <h3>E. Sponsored Research and Funding Support</h3>
        <ol className="jd-list">
          <li>Identify funding opportunities from government, industry, CSR, and research agencies.</li>
          <li>
            Guide faculty in preparing proposals for:
            <ul className="jd-list">
              <li>Sponsored research</li>
              <li>Consultancy</li>
              <li>Seminars</li>
              <li>Conferences</li>
              <li>FDPs</li>
              <li>Innovation grants</li>
              <li>Seed funding</li>
            </ul>
          </li>
          <li>Maintain a funding opportunity calendar.</li>
          <li>Coordinate with faculty teams to submit proposals before deadlines.</li>
          <li>Track submitted, approved, rejected, and resubmitted proposals.</li>
          <li>Work with industry partners for problem-based research and consultancy publications.</li>
        </ol>

        <h3>F. Research Policy and Process Development</h3>
        <ol className="jd-list">
          <li>Develop and implement a university-level research publication policy.</li>
          <li>Frame department-wise research targets and incentive structures.</li>
          <li>
            Create SOPs for:
            <ul className="jd-list">
              <li>Journal selection</li>
              <li>Manuscript submission</li>
              <li>Patent filing</li>
              <li>Conference organization</li>
              <li>Research ethics</li>
              <li>Plagiarism checking</li>
              <li>Authorship declaration</li>
              <li>Research incentive approval</li>
            </ul>
          </li>
          <li>Ensure ethical research practices and avoid predatory journals or fake conferences.</li>
          <li>Coordinate with the research ethics committee, institutional review board, and plagiarism-checking team.</li>
          <li>
            Create templates for paper submission, patent idea disclosure, conference
            proposal, and monthly research reporting.
          </li>
        </ol>

        <h3>G. Research Data and Reporting</h3>
        <ol className="jd-list">
          <li>Prepare monthly research performance reports for management.</li>
          <li>
            Submit department-wise dashboards covering:
            <ul className="jd-list">
              <li>Papers submitted</li>
              <li>Papers accepted</li>
              <li>Papers published</li>
              <li>Patents filed</li>
              <li>Patents published/granted</li>
              <li>Conferences conducted</li>
              <li>Sponsored events received</li>
              <li>Research grants applied</li>
              <li>Research grants sanctioned</li>
            </ul>
          </li>
          <li>Present monthly research review updates to the leadership team.</li>
          <li>
            Maintain evidence files for NAAC, NBA, NIRF, QS Ranking, UGC, AICTE, and
            other accreditation/ranking requirements.
          </li>
          <li>
            Track faculty citation count, h-index, i10-index, Google Scholar
            profiles, Scopus ID, Web of Science ID, ORCID ID, and Vidwan profile.
          </li>
        </ol>
      </section>

      <section className="jd-section">
        <h2>4. Weekly Responsibilities</h2>
        <ol className="jd-list">
          <li>Conduct one weekly review meeting with department research coordinators.</li>
          <li>Review manuscript pipelines department-wise.</li>
          <li>Conduct one faculty support session or paper-writing clinic.</li>
          <li>Identify at least 5–10 patentable ideas from ongoing academic or student projects.</li>
          <li>Review upcoming conference and funding opportunities.</li>
          <li>Submit a weekly progress note to the reporting authority.</li>
          <li>Follow up on delayed submissions, pending patent drafts, and conference planning activities.</li>
        </ol>
      </section>

      <section className="jd-section">
        <h2>5. Monthly Responsibilities</h2>
        <ol className="jd-list">
          <li>Conduct a university-level research review meeting.</li>
          <li>Submit a monthly research dashboard to management.</li>
          <li>Ensure each department meets its minimum research activity target.</li>
          <li>Organize at least one research capacity-building program.</li>
          <li>Track publication and patent conversions.</li>
          <li>Review faculty-wise research contribution.</li>
          <li>Identify high-performing and low-performing departments.</li>
          <li>Plan corrective actions for departments with weak research output.</li>
          <li>Publish a monthly research bulletin/newsletter highlighting achievements.</li>
          <li>Review opportunities for sponsored conferences, grants, and industry research collaborations.</li>
        </ol>
      </section>

      <section className="jd-section">
        <h2>6. Quarterly Responsibilities</h2>
        <ol className="jd-list">
          <li>Organize one major research event, conference, conclave, or patent awareness program.</li>
          <li>Review the university research policy and incentive outcomes.</li>
          <li>Conduct department-wise research audits.</li>
          <li>Identify research themes for interdisciplinary work.</li>
          <li>Submit a quarterly research impact report.</li>
          <li>Build partnerships with journals, publishers, industry bodies, and research organizations.</li>
          <li>Review patent commercialization possibilities with incubation and industry teams.</li>
        </ol>
      </section>

      <section className="jd-section">
        <h2>7. Annual Responsibilities</h2>
        <ol className="jd-list">
          <li>Prepare the annual research publication and patent plan.</li>
          <li>Create the annual conference and sponsored event calendar.</li>
          <li>Set department-wise publication, patent, grant, and conference targets.</li>
          <li>Prepare annual research performance reports for accreditation and ranking.</li>
          <li>Organize an annual research awards ceremony.</li>
          <li>Publish an annual university research compendium.</li>
          <li>Support the institution&rsquo;s NAAC, NBA, NIRF, UGC, AICTE, and ranking documentation.</li>
          <li>Improve the university&rsquo;s visibility through quality publications, patents, citations, conferences, and collaborations.</li>
        </ol>
      </section>

      <section className="jd-section">
        <h2>8. Key Performance Indicators</h2>

        <h3>Publication KPIs</h3>
        <ol className="jd-list">
          <li>Number of papers submitted monthly.</li>
          <li>Number of papers accepted monthly.</li>
          <li>Number of papers published in Scopus/Web of Science/UGC CARE/other indexed journals.</li>
          <li>Number of conference papers published in indexed proceedings.</li>
          <li>Department-wise publication growth.</li>
          <li>Faculty-wise publication contribution.</li>
          <li>Citation growth and h-index improvement.</li>
          <li>Reduction in predatory or low-quality publications.</li>
        </ol>

        <h3>Patent KPIs</h3>
        <ol className="jd-list">
          <li>Number of patent ideas identified.</li>
          <li>Number of patentability searches completed.</li>
          <li>Number of patents filed.</li>
          <li>Number of patents published.</li>
          <li>Number of patents granted.</li>
          <li>Number of patents commercialized or transferred.</li>
          <li>Number of student/faculty innovation ideas converted into IP.</li>
        </ol>

        <h3>Conference and Event KPIs</h3>
        <ol className="jd-list">
          <li>Number of national conferences organized.</li>
          <li>Number of international conferences organized.</li>
          <li>Number of sponsored conferences organized.</li>
          <li>Sponsorship amount generated.</li>
          <li>Number of conference papers published.</li>
          <li>Number of industry/research partners involved.</li>
          <li>Number of external participants attracted.</li>
        </ol>

        <h3>Funding and Research Ecosystem KPIs</h3>
        <ol className="jd-list">
          <li>Number of research proposals submitted.</li>
          <li>Number of grants sanctioned.</li>
          <li>Value of sponsored research received.</li>
          <li>Number of consultancy projects generated.</li>
          <li>Number of FDPs/workshops conducted.</li>
          <li>Number of faculty trained in research writing and patent filing.</li>
        </ol>
      </section>

      <section className="jd-section">
        <h2>9. Suggested Minimum Targets</h2>
        <p>
          The final target may be fixed based on the number of departments and
          faculty strength. As a starting benchmark:
        </p>
        <ol className="jd-list">
          <li>Every department should maintain a minimum of 10–15 active paper pipelines at any point of time.</li>
          <li>Every department should file at least 3–5 patents per year.</li>
          <li>Every department should conduct at least one research event or conference per year.</li>
          <li>The university should organize at least 2–3 major sponsored conferences annually.</li>
          <li>At least 50% of faculty should be actively involved in publication, patent, or funded research activity.</li>
          <li>Every final-year student project should be screened for paper or patent potential.</li>
          <li>Every department should create at least one interdisciplinary research group.</li>
        </ol>
      </section>

      <section className="jd-section">
        <h2>10. Coordination Required With</h2>
        <ol className="jd-list">
          <li>Vice Chancellor / Pro Vice Chancellor</li>
          <li>Dean Research</li>
          <li>HoDs</li>
          <li>Department research coordinators</li>
          <li>Faculty members</li>
          <li>Research scholars</li>
          <li>Incubation center</li>
          <li>Industry relations team</li>
          <li>Placement and corporate relations team</li>
          <li>IQAC</li>
          <li>NAAC/NBA/NIRF documentation team</li>
          <li>Finance department</li>
          <li>Legal/IP consultants</li>
          <li>External publishers and conference partners</li>
          <li>Government and funding agencies</li>
        </ol>
      </section>

      <section className="jd-section">
        <h2>11. Required Skills and Competencies</h2>
        <ol className="jd-list">
          <li>Strong understanding of research publications and indexing systems.</li>
          <li>Knowledge of Scopus, Web of Science, UGC CARE, Google Scholar, ORCID, Vidwan, and patent databases.</li>
          <li>Ability to guide faculty in paper writing and journal selection.</li>
          <li>Understanding of patent filing and IP processes.</li>
          <li>Ability to organize conferences and academic events.</li>
          <li>Strong coordination and follow-up skills.</li>
          <li>Good documentation and reporting ability.</li>
          <li>Ability to identify predatory journals and low-quality conferences.</li>
          <li>Ability to work with multiple departments and academic leaders.</li>
          <li>Strong target-driven execution mindset.</li>
        </ol>
      </section>

      <section className="jd-section">
        <h2>12. Daily Work Allocation Model</h2>
        <p>The Deputy Director&rsquo;s daily work can be divided as follows:</p>

        <h3>Morning – Review and Follow-up</h3>
        <ul className="jd-list">
          <li>Check paper, patent, and conference trackers.</li>
          <li>Follow up with department research coordinators.</li>
          <li>Review pending manuscripts and patent ideas.</li>
          <li>Identify delays and escalation points.</li>
        </ul>

        <h3>Midday – Faculty and Department Support</h3>
        <ul className="jd-list">
          <li>Meet faculty members or research groups.</li>
          <li>Conduct paper-writing or patent support discussions.</li>
          <li>Guide departments on journal selection, manuscript improvement, and research planning.</li>
        </ul>

        <h3>Afternoon – Ecosystem Development</h3>
        <ul className="jd-list">
          <li>
            Work on conference planning, sponsored event proposals, publisher
            tie-ups, industry partnerships, and funding opportunities.
          </li>
          <li>Coordinate with IP consultants and external academic bodies.</li>
        </ul>

        <h3>Evening – Documentation and Reporting</h3>
        <ul className="jd-list">
          <li>Update dashboards.</li>
          <li>Prepare daily/weekly progress notes.</li>
          <li>Track submissions, approvals, publications, patents, and conference progress.</li>
          <li>Share action points with HoDs and leadership.</li>
        </ul>
      </section>

      <section className="jd-section">
        <h2>13. Expected Outcome of the Role</h2>
        <p>
          The Deputy Director should create a visible research movement inside the
          university where every department has active publications, patentable
          ideas, research events, sponsored conferences, and faculty participation.
          The role should directly contribute to improved academic reputation,
          ranking performance, accreditation strength, industry collaboration, and
          institutional brand value.
        </p>
      </section>

      <section className="jd-section">
        <h2>14. Things to be Addressed in Management Review Meeting</h2>
        <ul className="jd-list">
          <li>Department-wise publication pipeline status against the 10–15 active-paper benchmark.</li>
          <li>Papers submitted, accepted, published, and rejected-then-resubmitted this period.</li>
          <li>Patent pipeline: ideas identified, filed, published, granted, and commercialized.</li>
          <li>Conferences, FDPs, and paper-writing clinics conducted versus planned.</li>
          <li>Sponsored conferences, grants, and funding proposals — submitted, sanctioned, rejected.</li>
          <li>Departments falling short of minimum research activity, and corrective action plans.</li>
          <li>Faculty citation, h-index, and profile-completeness (Scopus/ORCID/Vidwan) progress.</li>
          <li>Evidence-file readiness for NAAC, NBA, NIRF, and other accreditation/ranking needs.</li>
        </ul>
      </section>

      <div className="jd-flag">
        <strong>Flag:</strong> this document is titled &ldquo;Deputy Director –
        Publications, Patents &amp; Research Ecosystem,&rdquo; reporting to
        Director / Dean Research / VC / CBO — it reads as a role one level
        below &ldquo;Director – Research,&rdquo; not the Director role itself.
        I&rsquo;ve attached it here since Research/Publications/Patents is
        clearly its home, but you may want to either (a) rename this node to
        &ldquo;Deputy Director – Publications, Patents &amp; Research
        Ecosystem&rdquo; and keep it distinct from a broader Director –
        Research role, or (b) confirm this is meant to be the full charter for
        Director – Research as-is.
      </div>
    </main>
  );
}
