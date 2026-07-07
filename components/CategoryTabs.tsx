"use client";

import { useState } from "react";
import type { ReactNode } from "react";

export interface CatTabSection {
  id: string;
  label: string;
  content: ReactNode;
}

// Click a tab — Role Purpose, Roles & Responsibilities, Expected Outcome,
// Things to be Addressed in the Management Review Meeting — to see that
// category's content below. Same content as before, just one category
// shown at a time instead of everything stacked at once.
export default function CategoryTabs({
  sections,
  accent = "director",
}: {
  sections: CatTabSection[];
  accent?: "director" | "leadership" | "service" | "school" | "it";
}) {
  const [active, setActive] = useState(0);
  const current = sections[active];

  return (
    <div className={`cat-tabs accent-${accent}`}>
      <div className="cat-tab-bar">
        {sections.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={`cat-tab${i === active ? " active" : ""}`}
            onClick={() => setActive(i)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="cat-block" key={current.id}>
        <div className="jd-section">{current.content}</div>
      </div>
    </div>
  );
}
