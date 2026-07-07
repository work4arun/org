import { CatTabSection } from "@/components/CategoryTabs";

const maintenanceFacilitiesSections: CatTabSection[] = [
  {
    id: "purpose",
    label: "Role Purpose",
    content: (
      <p>
        Maintenance &amp; Facilities keeps the campus safe, functional, and
        well-run — infrastructure, utilities, housekeeping, and
        preventive maintenance across every building. Reports to the
        Registrar.
      </p>
    ),
  },
  {
    id: "responsibilities",
    label: "Roles & Responsibilities",
    content: (
      <ul className="jd-list">
        <li>Plan and oversee campus infrastructure development and upkeep.</li>
        <li>Run preventive and breakdown maintenance for buildings, electrical, plumbing, and HVAC systems.</li>
        <li>Manage housekeeping, sanitation, and campus cleanliness contracts.</li>
        <li>Ensure fire safety, electrical safety, and building-compliance certifications are current.</li>
        <li>Oversee utilities — power, water, and backup systems — and manage consumption efficiently.</li>
        <li>Coordinate with Procurement for facility-related vendor contracts and AMC renewals.</li>
        <li>Maintain hostel, canteen, and common-area facilities to expected standards.</li>
        <li>Respond to and resolve facility complaints and emergency repairs promptly.</li>
      </ul>
    ),
  },
  {
    id: "outcome",
    label: "Expected Outcome",
    content: (
      <ul className="jd-list">
        <li>Safe, well-maintained campus infrastructure with minimal downtime.</li>
        <li>All statutory safety certifications current and compliant.</li>
        <li>Efficient utility usage and controlled operating costs.</li>
        <li>Fast turnaround on maintenance complaints and repairs.</li>
        <li>Clean, well-kept common areas, hostels, and facilities.</li>
      </ul>
    ),
  },
  {
    id: "mrm",
    label: "Things to be Addressed in Management Review Meeting",
    content: (
      <ul className="jd-list">
        <li>Open maintenance requests and average resolution time.</li>
        <li>Safety certification and compliance renewal status.</li>
        <li>Utility consumption trends and cost-control initiatives.</li>
        <li>Major infrastructure projects — status and budget.</li>
        <li>Vendor/AMC contract renewals due.</li>
        <li>Any safety incidents and corrective actions taken.</li>
      </ul>
    ),
  },
];

export default maintenanceFacilitiesSections;
