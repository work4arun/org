import { CatTabSection } from "@/components/CategoryTabs";

// Drafted content for IT & Infrastructure — reports directly to the
// Vice-Chancellor. No source job description was supplied.
const itInfrastructureSections: CatTabSection[] = [
  {
    id: "purpose",
    label: "Role Purpose",
    content: (
      <p>
        IT &amp; Infrastructure runs the university&rsquo;s technology
        backbone — networks, systems, digital platforms, and campus IT
        infrastructure — enabling every academic and administrative function.
        Reports directly to the Vice-Chancellor.
      </p>
    ),
  },
  {
    id: "responsibilities",
    label: "Roles & Responsibilities",
    content: (
      <ul className="jd-list">
        <li>Plan and maintain campus-wide network, server, and data-centre infrastructure.</li>
        <li>Administer core systems — ERP, LMS, HRMS, website, and email/collaboration platforms.</li>
        <li>Ensure cybersecurity, data backup, and disaster-recovery readiness.</li>
        <li>Support digital classrooms, labs, and examination-technology infrastructure.</li>
        <li>Manage IT helpdesk and resolve faculty/staff/student technical issues promptly.</li>
        <li>Plan IT procurement, licensing, and asset lifecycle management.</li>
        <li>Drive digital-transformation initiatives across academic and administrative functions.</li>
        <li>Ensure data-privacy compliance and secure handling of institutional data.</li>
      </ul>
    ),
  },
  {
    id: "outcome",
    label: "Expected Outcome",
    content: (
      <ul className="jd-list">
        <li>Reliable, secure, low-downtime IT infrastructure campus-wide.</li>
        <li>Well-functioning core systems (ERP, LMS, HRMS) supporting daily operations.</li>
        <li>Fast IT helpdesk turnaround and high user satisfaction.</li>
        <li>Strong cybersecurity posture with no major data incidents.</li>
        <li>Steady progress on digital-transformation initiatives.</li>
      </ul>
    ),
  },
  {
    id: "mrm",
    label: "Things to be Addressed in Management Review Meeting",
    content: (
      <ul className="jd-list">
        <li>System uptime, outages, and incident summary.</li>
        <li>Helpdesk ticket volume and resolution turnaround.</li>
        <li>Cybersecurity posture, audits, and any incidents.</li>
        <li>Digital-transformation project status.</li>
        <li>IT procurement, licensing renewals, and budget utilization.</li>
        <li>Infrastructure or capacity needs for upcoming academic terms.</li>
      </ul>
    ),
  },
];

export default itInfrastructureSections;
