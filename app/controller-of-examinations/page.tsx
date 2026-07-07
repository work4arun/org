import Link from "next/link";
import CategoryTabs from "@/components/CategoryTabs";
import coeSections from "@/components/jd/ControllerOfExaminationsContent";

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

      <CategoryTabs sections={coeSections} accent="leadership" />
    </main>
  );
}
