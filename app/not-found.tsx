import Link from "next/link";

export default function NotFound() {
  return (
    <main className="stub">
      <span className="stub-badge" style={{ background: "var(--c-leadership-soft)", color: "var(--c-leadership)" }}>
        404
      </span>
      <h1>Page not found</h1>
      <p className="lead">This section of the organisation structure does not exist yet.</p>
      <Link href="/" className="back-link">
        ← Back to organisation structure
      </Link>
    </main>
  );
}
