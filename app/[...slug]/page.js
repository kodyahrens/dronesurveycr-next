import fs from "node:fs";
import path from "node:path";
import { notFound, redirect } from "next/navigation";

function findPublicHtmlTarget(slugParts) {
  const cleanParts = slugParts.filter(Boolean);
  const publicDir = path.join(process.cwd(), "public");
  const directCandidate = path.join(publicDir, ...cleanParts);
  const htmlCandidate = `${directCandidate}.html`;

  if (fs.existsSync(htmlCandidate)) {
    return `/${cleanParts.join("/")}.html`;
  }

  const indexCandidate = path.join(directCandidate, "index.html");
  if (fs.existsSync(indexCandidate)) {
    return `/${cleanParts.join("/")}/index.html`;
  }

  return null;
}

export default function SlugRedirectPage({ params }) {
  const target = findPublicHtmlTarget(params.slug || []);
  if (!target) {
    notFound();
  }

  redirect(target);
}
