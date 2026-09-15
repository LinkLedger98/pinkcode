import { useEffect, useState } from "react";
import Contact from "./Contact";
import BusinessWebsites from "./BusinessWebsites";
import WebsiteCare from "./WebsiteCare";
import OurStory from "./OurStory";

function App() {
  const path = window.location.pathname;

  const [activeOperation, setActiveOperation] = useState(0);

  if (path === "/contact") {
    return <Contact />;
  }

  if (path === "/business-websites") {
    return <BusinessWebsites />;
  }

  if (path === "/website-care") {
    return <WebsiteCare />;
  }

  if (path === "/our-story") {
    return <OurStory />;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveOperation((current) => (current + 1) % 3);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="site">
      {/* NAVIGATION */}
      <header className="navbar">
       <a href="#top" className="custom-logo" aria-label="PinkCode home">
  <img src="/pinkcode-logo.png" alt="PinkCode" />
</a>

        <nav className="nav-links">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">DIGITAL STUDIO · BOTSWANA</p>

            <h1>
              Beautifully
              <br />
              built.
              <br />
              <span>Brilliantly simple.</span>
            </h1>

            <div className="gold-line" />

            <p className="hero-description">
              We create modern websites and practical digital solutions that
              help businesses look credible, work smarter and grow.
            </p>

            <div className="hero-actions">
              <a href="/our-story" className="button button-dark">
                   About us
               <span>→</span>
              </a>

              <a href="#work" className="button button-light">
                View our work <span>→</span>
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>50+</strong>
                <span>Projects delivered</span>
              </div>

              <div>
                <strong>100%</strong>
                <span>Built with care</span>
              </div>

              <div>
                <strong>Local &amp; Global</strong>
                <span>Clients welcome</span>
              </div>
            </div>
          </div>

          {/* HERO MOCKUP */}
          <div className="hero-visual" aria-label="PinkCode website preview">
            <div className="mockup-stack">
              <div className="mockup-card mockup-main">
                <div className="browser-bar">
                  <div className="browser-dots">
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>

                  <span className="mini-brand">
                    <span>Pink</span>Code
                  </span>

                  <div className="browser-links">
                    <span>Work</span>
                    <span>Services</span>
                    <span>Contact</span>
                  </div>
                </div>

                <div className="mockup-hero">
                  <div>
                    <p className="mini-eyebrow">DIGITAL SOLUTIONS</p>
                    <h2>
                      Solutions that
                      <br />
                      move your business
                      <br />
                      <em>forward.</em>
                    </h2>

                    <p>
                      Modern websites. Ongoing care.
                      <br />
                      Custom systems that scale with you.
                    </p>

                    <button>Let's build something great</button>
                  </div>

                  <div className="abstract-art">
                    <span className="shape shape-one"></span>
                    <span className="shape shape-two"></span>
                    <span className="shape shape-three"></span>
                  </div>
                </div>

                <div className="mockup-features">
                  <div>
                    <span className="feature-icon">✦</span>
                    <strong>Modern Design</strong>
                    <p>Clean, purposeful design that builds trust.</p>
                  </div>

                  <div>
                    <span className="feature-icon">◌</span>
                    <strong>Reliable Performance</strong>
                    <p>Fast, secure and built for real users.</p>
                  </div>

                  <div>
                    <span className="feature-icon">□</span>
                    <strong>Ongoing Support</strong>
                    <p>We stay by your side after launch.</p>
                  </div>
                </div>
              </div>

              <div className="mockup-card mockup-back back-one">
                <div className="back-copy">
                  <span>ABOUT US</span>
                  <h3>Thoughtful design. Practical technology.</h3>
                  <p>Digital products that solve real business problems.</p>
                </div>

                <div className="back-art dark-art"></div>
              </div>

              <div className="mockup-card mockup-back back-two">
                <div>
                  <span>CARE PLANS</span>
                  <h3>Simple monthly care.</h3>
                  <p>Keep your website healthy, secure and up to date.</p>
                </div>

                <div className="shield">✓</div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="services section-light">
          <div className="section-heading centered">
            <p className="eyebrow">WHAT WE DO</p>
            <h2>Digital work with a purpose.</h2>
            <p>
              From polished business websites to custom operational systems,
              we build digital experiences around what your business actually
              needs.
            </p>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <div className="service-icon">▣</div>
              <p className="card-number">01</p>
              <h3>Business Websites</h3>
              <p>
                Beautiful, conversion-focused websites that present your
                business with clarity and build trust from the first click.
              </p>
              <a href="/business-websites">
  Learn more <span>→</span>
</a>
            </article>

            <article className="service-card">
              <div className="service-icon">◫</div>
              <p className="card-number">02</p>
              <h3>Website Care</h3>
              <p>
                Monthly maintenance, updates, security and backups so your
                website stays healthy, fast and worry-free.
              </p>
             <a href="/website-care" className="learn-more">
  Learn more <span>→</span>
</a>
            </article>

            <article className="service-card">
              <div className="service-icon">⊞</div>
              <p className="card-number">03</p>
              <h3>Custom Systems</h3>
              <p>
                Tailored software and digital tools that streamline your
                processes and help your business scale.
              </p>
              <a href="#contact">Learn more <span>→</span></a>
            </article>
          </div>
        </section>

        {/* DARK BRAND SECTION */}
        <section id="about" className="brand-section">
          <div className="brand-section-copy">
            <p className="eyebrow gold">OUR APPROACH</p>

            <h2>
              <span>Pink is the creator.</span>
              <br />
              Code is the craft.
            </h2>

            <div className="gold-line" />

            <p>
              We’re a Botswana-based digital studio that believes in
              thoughtful design, clean code and lasting partnerships.
            </p>

            <p>
              We build simply. We solve practically. We deliver digital
              products that work.
            </p>

            <a href="/our-story" className="button button-outline">
  Our story <span>→</span>
</a>
          </div>

          <div className="geometric-art" aria-hidden="true">
            <span className="circle circle-large"></span>
            <span className="circle circle-small"></span>
            <span className="line-diagonal"></span>
            <span className="dot-grid"></span>
          </div>
        </section>

        {/* WORK */}
        <section id="work" className="work section-light">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Built for real businesses.</h2>
            <p>
              A glimpse at the kind of digital experiences PinkCode can create.
            </p>
          </div>

          <div className="work-grid">
            <article className="work-card work-dark">
              <div className="work-top">
                <span>BUSINESS WEBSITE</span>
                <span>01</span>
              </div>
             <a
  href="https://linkledger.co.bw"
  target="_blank"
  rel="noopener noreferrer"
  className="work-art work-art-one work-link"
>
  <video
    src="/linkledger-portfolio-preview.mp4"
    autoPlay
    muted
    loop
    playsInline
  />
</a>
              <div className="work-bottom">
                <h3>Brand-led digital presence</h3>
                <p>Web design · Development · Mobile optimisation</p>
              </div>
            </article>

        {/* BUSINESS SYSTEMS */}
<article className="work-card">
  <div className="work-top">
    <span>CUSTOM SYSTEM</span>
    <span>02</span>
  </div>

  <div className="work-art work-art-two operations-showcase">

    <div className={`operations-slide ${activeOperation === 0 ? "active" : ""}`}>
      <img
        src="/pinkcode-work/eagles-gym.webp"
        alt="Eagles Gym dashboard"
      />
    </div>

   <div className="operations-slide">
  <img
    src="/pinkcode-work/eagles-gym.webp"
    alt="Eagles Gym dashboard"
  />
</div>

<div className="operations-slide">
  <img
    src="/pinkcode-work/butcher-on-84.webp"
    alt="Butcher on 84 dashboard"
  />
</div>

<div className="operations-slide">
  <img
    src="/pinkcode-work/rfa-operations.webp"
    alt="RFA Operations dashboard"
  />
</div>

<div className="operations-overlay">
  <span>EXPLORE SYSTEMS</span>
  <span>01 / 03</span>
</div>

</div>

<div className="work-bottom">
  <h3>Operations made simpler</h3>
  <p>Dashboards · Workflows · Business tools</p>
</div>
</article>
          </div>
        </section>

  

        {/* CTA */}
        <section id="contact" className="cta">
          <div>
            <p className="eyebrow">READY TO GET STARTED?</p>
            <h2>Let’s build something great together.</h2>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
           <a href="#top" className="custom-logo footer-logo" aria-label="PinkCode home">
  <img src="/pinkcode-logo.png" alt="PinkCode" />
</a>

            <p>
              Digital solutions for businesses
              <br />
              that are ready to grow.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <a href="#work">Work</a>
              <a href="#services">Services</a>
            </div>

            <div>
              <a href="#about">About</a>
              <a href="/contact">Contact</a>
            </div>
          </div>

          <div className="footer-contact">
            <div className="socials">
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="LinkedIn">IN</a>
              <a href="#" aria-label="WhatsApp">WA</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 PinkCode. All rights reserved.</span>
          <span>Beautifully built. Brilliantly simple.</span>
        </div>
      </footer>
    </div>
  )
}

export default App