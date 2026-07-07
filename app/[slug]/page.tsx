import Link from "next/link";
import { notFound } from "next/navigation";
import { nodeRegistry, allSlugs, groupTheme, NodeKind } from "@/lib/orgData";

// Pre-render a static stub page for every node in the registry.
export function generateStaticParams() {
  return allSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const node = nodeRegistry[params.slug];
  return { title: node ? `${node.title} — RGU` : "Not found — RGU" };
}

const badgeStyle: Record<NodeKind, { bg: string; fg: string; label: string }> = {
  leadership: { bg: "var(--c-leadership-soft)", fg: "var(--c-leadership)", label: "Leadership" },
  school: { bg: "var(--c-school-soft)", fg: "var(--c-school)", label: "School" },
  dean: { bg: "var(--c-school-soft)", fg: "var(--c-school)", label: "Dean" },
  department: { bg: "var(--c-school-soft)", fg: "var(--c-school)", label: "Department" },
  director: { bg: "var(--c-director-soft)", fg: "var(--c-director)", label: "Strategic Director" },
  service: { bg: "var(--c-service-soft)", fg: "var(--c-service)", label: "Shared Service" },
};

export default function NodePage({ params }: { params: { slug: string } }) {
  const node = nodeRegistry[params.slug];
  if (!node) notFound();

  const badge = badgeStyle[node.kind];

  return (
    <main className="stub">
      <Link href="/" className="back-link">
        ← Back to organisation structure
      </Link>

      <span
        className="stub-badge"
        style={{ background: badge.bg, color: badge.fg }}
      >
        {badge.label}
      </span>

      <h1>{node.title}</h1>
      <p className="lead">{node.summary}</p>

      <div className="stub-placeholder">
        This page is a placeholder for <strong>{node.title}</strong>.
        <br />
        Add its content — overview, faculty, programmes, contacts — here.
      </div>
    </main>
  );
}
