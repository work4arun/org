import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { schools, directors, sharedServices } from "@/lib/orgData";

export default function Home() {
  return (
    <main className="page">
      <header className="masthead">
        <Image
          src="/logo.png"
          alt="RGU logo"
          width={440}
          height={97}
          className="logo-img"
          priority
        />
        <h1>RATHINAM GLOBAL DEEMED TO BE UNIVERSITY (RGU)</h1>
        <p>Organisation Structure</p>
      </header>

      {/* Vice-Chancellor sits alone at the top. Academic Structure, Strategic
          Directors, the Registrar, the Controller of Examinations, and IT &
          Infrastructure are all one step below (direct reports). Shared
          Services is a further step below — it reports to the Registrar,
          not directly to the VC. */}
      <Link href="/vice-chancellor" className="vc-card">
        <span className="vc-avatar">
          <Icon name="user" size={26} />
        </span>
        <span className="vc-eyebrow">Office of the</span>
        <span className="vc-title">Vice-Chancellor</span>
        <span className="vc-sub">Academic &amp; Strategic Leadership</span>
      </Link>

      <div className="branch branch-fork-vc">
        <span className="branch-stem" />
        <span className="branch-bar vc5" />
        <span className="branch-drop drop-vc-0" />
        <span className="branch-drop drop-vc-1" />
        <span className="branch-drop drop-vc-2" />
        <span className="branch-drop drop-vc-3" />
        <span className="branch-drop drop-vc-4" />
      </div>

      <section className="org-grid5">
        {/* Academic structure */}
        <div className="panel academic-panel">
          <div className="panel-title">
            Academic Structure — Schools, Departments &amp; Faculty Leadership
          </div>

          {/* Schools at the top, converging into one shared Dean, which then
              fans back out to each school's HODs below. */}
          <div className="academic-row">
            {schools.map((school, si) => (
              <div
                className="school-col"
                key={school.slug}
                style={{ animationDelay: `${0.5 + si * 0.09}s` }}
              >
                <Link href={`/${school.slug}`} className="school-col-head">
                  <span
                    className="school-col-icon"
                    style={{ background: school.color }}
                  >
                    <Icon name={school.icon} size={16} />
                  </span>
                  <span className="school-col-title">{school.title}</span>
                </Link>
              </div>
            ))}
          </div>

          <div className="branch branch-fork5">
            <span className="branch-stem" />
            <span className="branch-bar five" />
            <span className="branch-drop drop5-0" />
            <span className="branch-drop drop5-1" />
            <span className="branch-drop drop5-2" />
            <span className="branch-drop drop5-3" />
            <span className="branch-drop drop5-4" />
          </div>

          <div className="dean-hub-wrap">
            <Link href="/dean" className="dean-hub">DEANS</Link>
          </div>

          <div className="branch branch-single hub-link">
            <span className="branch-stem" />
          </div>

          <div className="dean-hub-wrap hod-hub-wrap">
            <Link href="/hod" className="dean-hub hod-hub">HODS</Link>
            <span className="hod-director-arrow" aria-hidden="true" />
          </div>
        </div>

        {/* Strategic directors */}
        <div className="panel">
          <div className="panel-title">
            Strategic Cross-Departmental Functional Heads (Directors)
          </div>
          <div className="list">
            {directors.map((d, i) => (
              <Link
                href={`/${d.slug}`}
                className="list-row director"
                key={d.slug}
                style={{ animationDelay: `${0.5 + i * 0.07}s` }}
              >
                <span className="row-icon">
                  <Icon name={d.icon} size={18} />
                </span>
                <span>
                  <span className="row-title">{d.title}</span>
                  <span className="row-sub">{d.summary}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Registrar, and — one step further below — Shared Services */}
        <div className="registrar-branch">
          <Link href="/registrar" className="registrar-card">
            <span className="lead-avatar">
              <Icon name="user" />
            </span>
            <span>
              <span className="lead-title">Registrar</span>
              <br />
              <span className="lead-sub">Administration Head</span>
            </span>
          </Link>

          <div className="branch branch-single">
            <span className="branch-stem" />
          </div>

          <div className="panel services-panel">
            <div className="panel-title">Shared Services (Report to Registrar)</div>
            <div className="list">
              {sharedServices.map((s, i) => (
                <Link
                  href={`/${s.slug}`}
                  className="list-row service"
                  key={s.slug}
                  style={{ animationDelay: `${0.58 + i * 0.06}s` }}
                >
                  <span className="row-icon">
                    <Icon name={s.icon} size={18} />
                  </span>
                  <span>
                    <span className="row-title">{s.title}</span>
                    <span className="row-sub">{s.summary}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Controller of Examinations — a direct report to the VC, standing
            alone (no further subordinates shown yet). */}
        <div className="coe-branch">
          <Link href="/controller-of-examinations" className="registrar-card coe-card">
            <span className="lead-avatar coe-avatar">
              <Icon name="medal" />
            </span>
            <span>
              <span className="lead-title">Controller of Examinations</span>
              <br />
              <span className="lead-sub">Examinations &amp; Evaluation</span>
            </span>
          </Link>
        </div>

        {/* IT & Infrastructure — also a direct report to the VC, standing
            alone (no further subordinates shown yet). */}
        <div className="it-branch">
          <Link href="/it-infrastructure" className="registrar-card it-card">
            <span className="lead-avatar it-avatar">
              <Icon name="monitor" />
            </span>
            <span>
              <span className="lead-title">IT &amp; Infrastructure</span>
              <br />
              <span className="lead-sub">Technology &amp; Campus Systems</span>
            </span>
          </Link>
        </div>
      </section>

      {/* Plain reference copy: just the Dean → Department structure, no
          colors/icons/hover polish — kept deliberately dull since the fancy
          card above this is the one that's still being tweaked. */}
      <section className="panel dull-panel">
        <div className="panel-title">
          Academic Structure — Schools, Departments &amp; Faculty Leadership
        </div>

        <div className="dull-grid">
          {schools.map((school) => (
            <div className="dull-school" key={school.slug}>
              <div className="dull-dean">{school.title} — Dean</div>
              <ul className="dull-list">
                {school.departments.map((dept) => (
                  <li key={dept.slug}>
                    {dept.title} <span className="dull-tag">HOD</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Key principles + legend */}
      <section className="footnotes">
        <div className="note-card">
          <h3>Key Principles</h3>
          <ul>
            <li>
              Deans (Schools) and Strategic Directors (Functional Heads) both report
              directly to the Vice-Chancellor.
            </li>
            <li>
              HODs have dual reporting: administratively to the Dean for overall
              department development, and functionally to Directors for specific focus
              areas.
            </li>
            <li>
              Strategic Directors drive university-wide priorities by working through
              HODs across all departments.
            </li>
            <li>
              Shared Services report to the Registrar, who reports to the
              Vice-Chancellor.
            </li>
          </ul>
        </div>

        <div className="note-card">
          <h3>Legend</h3>
          <div className="legend-item">
            <span className="swatch" /> Reporting Line
          </div>
          <div className="legend-item">
            <span className="swatch dashed" /> Administrative Reporting (Overall)
          </div>
          <div className="legend-item">
            <span className="swatch dotted" /> Functional Reporting (Specific Focus Areas)
          </div>
        </div>
      </section>
    </main>
  );
}
