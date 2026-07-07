import { redirect } from "next/navigation";

// Deprecated route: each director now has their own dedicated page (linked
// from the homepage) with its own tabs, instead of one shared page listing
// all directors. Kept only because the sandbox this project runs in cannot
// delete files from the mounted project folder — safe to delete manually.
export default function DirectorsPageRedirect() {
  redirect("/");
}
