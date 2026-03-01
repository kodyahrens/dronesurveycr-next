import ButtonLink from "../../components/ButtonLink";
import { services } from "../../lib/site-data";

export const metadata = {
  title: "Services",
  description: "Explore lidar mapping, photogrammetry, and geopositioning services."
};

export default function ServicesPage() {
  return (
    <div className="container">
      <section className="hero">
        <h1>Services</h1>
        <p>
          We help teams gather dependable terrain, elevation, and mapping data with modern drone-based
          survey workflows.
        </p>
      </section>

      <section>
        <div className="service-grid">
          {services.map((service) => (
            <article key={service.slug} className="card">
              <h3>{service.title}</h3>
              <p>{service.summary}</p>
              <ul>
                {service.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ButtonLink href={`/services/${service.slug}`}>View Service</ButtonLink>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
