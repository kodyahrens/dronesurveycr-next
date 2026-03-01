import Link from "next/link";

export default function ButtonLink({ href, children, variant = "primary" }) {
  const className = variant === "secondary" ? "btn btn-secondary" : "btn btn-primary";

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
