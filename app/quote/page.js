import ButtonLink from "../../components/ButtonLink";

export const metadata = {
  title: "Get a Quote",
  description: "Submit a quote request for your drone surveying project."
};

export default function QuotePage() {
  return (
    <div className="container">
      <section className="hero">
        <h1>Get a Quote</h1>
        <p>
          Share your project details and we will follow up with scope, timeline, and pricing details for
          the right survey workflow.
        </p>
        <div className="actions">
          <ButtonLink href="/services" variant="secondary">
            Review Services
          </ButtonLink>
        </div>
      </section>

      <section className="quote-frame-wrap">
        <iframe
          id="JotFormIFrame-220321563321845"
          title="Drone Survey Quote Request"
          src="https://form.jotform.com/220321563321845"
          allow="geolocation; microphone; camera"
          className="quote-frame"
        />
      </section>
    </div>
  );
}
