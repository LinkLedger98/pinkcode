import React from "react";
import "./BusinessWebsites.css";

const pricingFactors = [
  {
    number: "01",
    title: "Pages",
    text: "The number of pages and the amount of content your website needs."
  },
  {
    number: "02",
    title: "Functionality",
    text: "Features such as forms, booking, calculators, galleries and interactive elements."
  },
  {
    number: "03",
    title: "Design",
    text: "The level of visual customisation, layout and interaction required."
  },
  {
    number: "04",
    title: "Content",
    text: "The amount of content that needs to be structured, prepared and added to the website."
  },
  {
    number: "05",
    title: "Integrations",
    text: "Connections to external platforms, services or business tools."
  },
  {
    number: "06",
    title: "Advanced features",
    text: "Ecommerce, customer areas, memberships, portals and other advanced functionality."
  }
];

const process = [
  {
    number: "01",
    title: "Tell us what you need",
    text: "Tell PinkCode about your business, your goals and what you want your website to do."
  },
  {
    number: "02",
    title: "We define the scope",
    text: "We determine the pages, features and functionality required for your project."
  },
  {
    number: "03",
    title: "You receive a clear quote",
    text: "Your price is based on the actual requirements of the website."
  },
  {
    number: "04",
    title: "We build",
    text: "Once approved, we design and develop your website."
  },
  {
    number: "05",
    title: "We launch",
    text: "Your finished website is prepared for launch and handed over."
  }
];

export default function BusinessWebsites() {
  return (
    <main className="business-page">

      {/* HERO */}
    <section className="business-hero">
  <div className="eyebrow">BUSINESS WEBSITES</div>

  <h1>
    <span className="hero-line hero-line-one">
      A website that makes
    </span>

    <span className="hero-line hero-line-two">
      your business <em>look the part.</em>
    </span>
  </h1>

  <p className="hero-copy">
    Professional, responsive websites designed around your business,
    your customers and what you actually need online.
  </p>

  <a href="#pricing" className="hero-button">
    Explore pricing <span>→</span>
  </a>

</section>


      {/* INTRO */}
      <section className="business-intro">
        <div className="section-label">WHAT WE BUILD</div>

        <div className="intro-grid">
          <h2>
            Not every business
            <br />
            needs the <em>same website.</em>
          </h2>

          <div className="intro-text">
            <p>
              PinkCode builds everything from focused business websites
              to more customised digital experiences.
            </p>

            <p>
              The starting price gives you a clear idea of where your
              project begins. Your final price is determined by what
              you actually need built.
            </p>
          </div>
        </div>
      </section>


      {/* PRICING */}
      <section className="pricing-section" id="pricing">

        <div className="section-label">PRICING GUIDE</div>

        <h2>
          Start with what
          <br />
          <em>you need.</em>
        </h2>

        <p className="section-description">
          Our website prices are based on scope. The more pages,
          functionality and custom development your project requires,
          the more the project costs.
        </p>


        {/* $250 */}
        <article className="price-card light-card">
          <div className="price-top">
            <div>
              <span className="price-label">STARTER</span>
              <h3>Essential Business Website</h3>
            </div>

            <div className="price">
              <small>FROM</small>
              <strong>$250</strong>
            </div>
          </div>

          <p className="price-description">
            For businesses that need a polished, professional presence
            online without unnecessary complexity.
          </p>

          <div className="included-title">CAN INCLUDE</div>

          <div className="feature-grid">
            <span>✓ Responsive design</span>
            <span>✓ Mobile optimisation</span>
            <span>✓ Business information</span>
            <span>✓ Services / products</span>
            <span>✓ About section</span>
            <span>✓ Contact section</span>
            <span>✓ WhatsApp integration</span>
            <span>✓ Contact forms</span>
            <span>✓ Social media links</span>
            <span>✓ Basic SEO setup</span>
            <span>✓ Launch assistance</span>
          </div>

          <div className="price-note">
            <strong>Starting at $250.</strong>
            <br />
            Final pricing depends on the agreed project scope.
          </div>
        </article>


        {/* $500 */}
        <article className="price-card dark-card">
          <div className="price-top">
            <div>
              <span className="price-label">CUSTOM</span>
              <h3>Custom Business Website</h3>
            </div>

            <div className="price">
              <small>FROM</small>
              <strong>$500</strong>
            </div>
          </div>

          <p className="price-description">
            For businesses that need more pages, stronger customisation
            and additional functionality.
          </p>

          <div className="included-title">CAN INCLUDE</div>

          <div className="feature-grid">
            <span>✓ Custom multi-page design</span>
            <span>✓ Custom sections</span>
            <span>✓ Forms & interactions</span>
            <span>✓ Advanced visual elements</span>
            <span>✓ Stronger SEO setup</span>
            <span>✓ Conversion-focused structure</span>
            <span>✓ Mobile optimisation</span>
            <span>✓ Launch support</span>
          </div>

          <div className="price-note">
            <strong>Starting at $500.</strong>
            <br />
            Additional functionality is priced according to scope.
          </div>
        </article>


        {/* $800-$1200 */}
        <article className="price-card advanced-card">
          <div className="price-top">
            <div>
              <span className="price-label">ADVANCED</span>
              <h3>Advanced Website</h3>
            </div>

            <div className="price">
              <small>FROM</small>
              <strong>$800–$1,200+</strong>
            </div>
          </div>

          <p className="price-description">
            For projects requiring significantly more functionality,
            custom development or technical complexity.
          </p>

          <div className="included-title">EXAMPLES</div>

          <div className="feature-grid">
            <span>✓ Advanced booking</span>
            <span>✓ Ecommerce</span>
            <span>✓ Customer areas</span>
            <span>✓ Interactive tools</span>
            <span>✓ Calculators</span>
            <span>✓ Advanced forms</span>
            <span>✓ Membership features</span>
            <span>✓ Custom integrations</span>
            <span>✓ Complex functionality</span>
          </div>

          <div className="advanced-note">
            <strong>Quoted individually.</strong>
            <br />
            Projects in this range are priced according to their
            specific features and requirements.
          </div>
        </article>

      </section>

      {/* CTA */}
<section className="business-cta">

  <div className="section-label">READY TO BUILD?</div>

  <h2>
    Have a website
    <br />
    <em>in mind?</em>
  </h2>

  <p>
    You don't need to know exactly what you need.
    Tell us about your business and we'll help determine
    the right scope for the project.
  </p>

  <a href="/contact" className="cta-button">
    Start a project <span>→</span>
  </a>

</section>
    </main>
  );
}