import { notFound } from "next/navigation";
import ButtonLink from "../../../components/ButtonLink";
import { services } from "../../../lib/site-data";

function getService(slug) {
  return services.find((service) => service.slug === slug) ?? null;
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = getService(params.slug);
  if (!service) {
    return { title: "Service" };
  }

  return {
    title: service.title,
    description: service.summary
  };
}

export default function ServiceDetailPage({ params }) {
  const service = getService(params.slug);
  if (!service) {
    notFound();
  }

  return (
    <div className="container">
      <section className="hero">
        <h1>{service.title}</h1>
        <p>{service.summary}</p>
      </section>

      <section className="card">
        <h2 className="section-title">What You Get</h2>
        <ul>
          {service.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="actions">
          <ButtonLink href="/quote">Request a Quote</ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            Back to Services
          </ButtonLink>
        </div>
      </section>
    </div>
  );
}
