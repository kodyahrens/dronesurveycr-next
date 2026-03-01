import ButtonLink from "../components/ButtonLink";
import { services } from "../lib/site-data";

export default function HomePage() {
  return (
    <div className="container">
      <section className="hero">
        <h1>Aerial Surveying in Costa Rica</h1>
        <p>
          DroneSurveyCR provides high-accuracy lidar, photogrammetry, and geopositioning workflows for
          construction, engineering, and land analysis projects.
        </p>
        <div className="actions">
          <ButtonLink href="/quote">Request a Quote</ButtonLink>
          <ButtonLink href="/services" variant="secondary">
            Explore Services
          </ButtonLink>
        </div>
      </section>

      <section>
        <h2 className="section-title">Core Services</h2>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.slug} className="card">
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ButtonLink href={`/services/${service.slug}`} variant="secondary">
                Learn More
              </ButtonLink>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
