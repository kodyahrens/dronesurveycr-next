import { redirect } from "next/navigation";

export default function HomePage() {
  // Keep the existing static export as the homepage while migrating incrementally.
  redirect("/index.html");
}
