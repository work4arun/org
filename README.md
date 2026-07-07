# RGU Organisation Structure

Interactive organisation chart for **Rathinam Global Deemed to be University (RGU)**, built with Next.js (App Router) + TypeScript. Pure white background, mild muted colours, and every box on the homepage is clickable and opens its own page.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

To create a production build: `npm run build` then `npm start`.

## Adding your logo

The homepage has a dashed **"University logo here"** placeholder in the masthead. Drop your logo file into a `public/` folder (e.g. `public/logo.png`) and replace the placeholder in `app/page.tsx`:

```tsx
import Image from "next/image";
// ...
<Image src="/logo.png" alt="RGU logo" width={132} height={132} />
```

## How the clickable pages work

- Every node in the chart links to `/<slug>` (e.g. `/school-engineering-technology`, `/director-research-development`, `/service-human-resources`).
- All 37 pages are generated from a single data file, `lib/orgData.ts`, via the dynamic route `app/[slug]/page.tsx` (`generateStaticParams`). Each currently renders a styled **placeholder** you can fill in.
- To add or rename an item, edit `lib/orgData.ts` — the homepage links and the matching page appear automatically.

## Project layout

```
app/
  page.tsx          # homepage org chart
  [slug]/page.tsx   # placeholder page for every node
  layout.tsx        # root layout
  globals.css       # theme (white bg + mild colours)
  not-found.tsx
components/Icon.tsx  # inline SVG icon set
lib/orgData.ts       # single source of truth for all nodes
```

## Structure covered

Vice-Chancellor and Registrar; 5 Schools (each with a Dean and its departments/HODs); 6 Strategic Directors; 8 Shared Services. All match the reference organisation chart.
# org
