import Link from "next/link";
import { siteLinks } from "../lib/site-data";

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand">
          DroneSurveyCR
        </Link>
        <nav aria-label="Main navigation" className="main-nav">
          {siteLinks.map((link) =>
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="nav-link"
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
