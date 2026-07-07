// Central data model for the RGU organisation structure.
// Every clickable node in the chart has a matching entry here, keyed by slug,
// which drives both the homepage links and the dynamic stub pages.
/** Accent tokens used by the UI, one per structural group. */
export const groupTheme = {
    leadership: { label: "Leadership", color: "var(--c-leadership)" },
    school: { label: "Academic Structure", color: "var(--c-school)" },
    director: { label: "Strategic Functional Heads", color: "var(--c-director)" },
    service: { label: "Shared Services", color: "var(--c-service)" },
};
export const schools = [
    {
        slug: "school-engineering-technology",
        title: "School of Engineering & Technology",
        icon: "gear",
        departments: [
            { slug: "dept-computer-science-engineering", title: "Computer Science & Engineering" },
            { slug: "dept-electrical-electronics-engineering", title: "Electrical & Electronics Engg." },
            { slug: "dept-mechanical-engineering", title: "Mechanical Engineering" },
        ],
    },
    {
        slug: "school-management-studies",
        title: "School of Management Studies",
        icon: "people",
        departments: [
            { slug: "dept-business-administration", title: "Business Administration" },
            { slug: "dept-commerce", title: "Commerce" },
        ],
    },
    {
        slug: "school-sciences-liberal-arts",
        title: "School of Sciences & Liberal Arts",
        icon: "book",
        departments: [
            { slug: "dept-mathematics", title: "Mathematics" },
            { slug: "dept-physics", title: "Physics" },
            { slug: "dept-english", title: "English" },
        ],
    },
    {
        slug: "school-design-creative-arts",
        title: "School of Design & Creative Arts",
        icon: "palette",
        departments: [
            { slug: "dept-visual-communication", title: "Visual Communication" },
            { slug: "dept-interior-design", title: "Interior Design" },
        ],
    },
    {
        slug: "school-health-sciences",
        title: "School of Health Sciences",
        icon: "health",
        departments: [
            { slug: "dept-allied-health-sciences", title: "Allied Health Sciences" },
        ],
    },
];
export const directors = [
    {
        slug: "director-innovation-entrepreneurship",
        title: "Director – Innovation & Entrepreneurship",
        icon: "bulb",
        summary: "Drives innovation ecosystem, incubation, start-up support across all Schools.",
    },
    {
        slug: "director-research-development",
        title: "Director – Research & Development",
        icon: "microscope",
        summary: "Promotes research culture, grants, publications, collaborations.",
    },
    {
        slug: "director-quality-assurance-iqac",
        title: "Director – Quality Assurance (IQAC)",
        icon: "medal",
        summary: "Leads quality initiatives, accreditation, academic audits, NIRF, rankings.",
    },
    {
        slug: "director-international-relations",
        title: "Director – International Relations",
        icon: "globe",
        summary: "Global partnerships, student & faculty exchange, international programs.",
    },
    {
        slug: "director-placements-industry-connect",
        title: "Director – Placements & Industry Connect",
        icon: "chart",
        summary: "Industry relations, placements, internships, career development.",
    },
    {
        slug: "director-branding-communications",
        title: "Director – Branding & Communications",
        icon: "megaphone",
        summary: "Brand strategy, outreach, PR, digital communications.",
    },
];
export const sharedServices = [
    {
        slug: "service-human-resources",
        title: "Human Resources (HR)",
        icon: "people",
        summary: "Recruitment, employee lifecycle, training, performance management.",
    },
    {
        slug: "service-budget-finance",
        title: "Budget & Finance",
        icon: "rupee",
        summary: "Budgeting, accounting, statutory compliance, financial reporting.",
    },
    {
        slug: "service-maintenance-facilities",
        title: "Maintenance & Facilities",
        icon: "wrench",
        summary: "Infrastructure, campus maintenance, safety, utilities, housekeeping.",
    },
    {
        slug: "service-student-services",
        title: "Student Services",
        icon: "graduate",
        summary: "Admissions support, scholarships, records, examinations, grievance redressal.",
    },
    {
        slug: "service-library-learning-resources",
        title: "Library & Learning Resources",
        icon: "book",
        summary: "Library services, e-resources, knowledge management.",
    },
    {
        slug: "service-it-digital-infrastructure",
        title: "IT Services & Digital Infrastructure",
        icon: "monitor",
        summary: "ERP, IT support, digital platforms, cybersecurity.",
    },
    {
        slug: "service-legal-compliance",
        title: "Legal & Compliance",
        icon: "shield",
        summary: "Legal advisory, regulatory compliance, policies & documentation.",
    },
    {
        slug: "service-procurement-stores",
        title: "Procurement & Stores",
        icon: "cart",
        summary: "Vendor management, procurement, inventory control.",
    },
];
/** Flat registry of every node, used by the dynamic route to build stub pages. */
export function buildNodeRegistry() {
    const registry = {};
    registry["vice-chancellor"] = {
        slug: "vice-chancellor",
        title: "Vice-Chancellor",
        kind: "leadership",
        summary: "Academic & Strategic Leadership of the University.",
    };
    registry["registrar"] = {
        slug: "registrar",
        title: "Registrar",
        kind: "leadership",
        summary: "Administration Head; Shared Services report to the Registrar.",
    };
    for (const school of schools) {
        registry[school.slug] = {
            slug: school.slug,
            title: school.title,
            kind: "school",
            summary: "Led by a Dean, reporting directly to the Vice-Chancellor.",
        };
        registry[`${school.slug}-dean`] = {
            slug: `${school.slug}-dean`,
            title: `Dean – ${school.title}`,
            kind: "dean",
            summary: "Responsible for academic and administrative leadership of the School.",
            parent: school.slug,
        };
        for (const dept of school.departments) {
            registry[dept.slug] = {
                slug: dept.slug,
                title: `Department of ${dept.title}`,
                kind: "department",
                summary: "Led by an HOD with dual reporting: administratively to the Dean and functionally to Strategic Directors.",
                parent: school.slug,
            };
        }
    }
    for (const d of directors) {
        registry[d.slug] = {
            slug: d.slug,
            title: d.title,
            kind: "director",
            summary: d.summary,
        };
    }
    for (const s of sharedServices) {
        registry[s.slug] = {
            slug: s.slug,
            title: s.title,
            kind: "service",
            summary: s.summary,
        };
    }
    return registry;
}
export const nodeRegistry = buildNodeRegistry();
export const allSlugs = Object.keys(nodeRegistry);
