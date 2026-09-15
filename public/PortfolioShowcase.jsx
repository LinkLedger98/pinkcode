import { useEffect, useState } from "react";
import "./PortfolioShowcase.css";

const WORKS = [
  {
    type: "BUSINESS WEBSITE",
    number: "01",
    title: "Brand-led digital presence",
    description: "Web design · Development · Mobile optimisation",
    image: "/pinkcode-work/eagles-gym-portfolio.webp",
    alt: "Eagles Gym Palapye business operations dashboard",
  },
  {
    type: "BUSINESS OPERATIONS",
    number: "02",
    title: "Business control, beautifully organised",
    description: "Daily records · Cash control · Team management",
    image: "/pinkcode-work/butcher-on-84-portfolio.webp",
    alt: "Butcher on 84 business control dashboard",
  },
  {
    type: "OPERATIONS SYSTEM",
    number: "03",
    title: "Complex operations made simple",
    description: "Scheduling · Collections · Fleet · Equipment",
    image: "/pinkcode-work/rfa-operations-portfolio.webp",
    alt: "RFA Operations funeral operations dashboard",
  },
  {
    type: "CUSTOM SYSTEM",
    number: "04",
    title: "Trust. Transparency. Together.",
    description: "Verification · Risk reduction · Customer confidence",
    // Keep your existing LinkLedger video in public/pinkcode-work/linkledger.mp4
    video: "/pinkcode-work/linkledger.mp4",
    alt: "LinkLedger platform",
  },
];

export default function PortfolioShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % WORKS.length);
    }, 5200);

    return () => clearInterval(timer);
  }, []);

  const go = (direction) => {
    setActive(
      (current) => (current + direction + WORKS.length) % WORKS.length
    );
  };

  return (
    <section id="work" className="work section-light">
      <div className="section-heading">
        <p className="eyebrow">SELECTED WORK</p>
        <h2>Built for real businesses.</h2>
        <p>
          A glimpse at the kind of digital experiences PinkCode can create.
        </p>
      </div>

      <div className="portfolio-showcase">
        <div className="portfolio-stage">
          {WORKS.map((work, index) => {
            const offset = (index - active + WORKS.length) % WORKS.length;
            const isActive = offset === 0;

            return (
              <article
                key={work.number}
                className={`portfolio-slide ${
                  isActive ? "is-active" : ""
                }`}
                aria-hidden={!isActive}
              >
                <div className="portfolio-top">
                  <span>{work.type}</span>
                  <span>{work.number}</span>
                </div>

                <div className="portfolio-media">
                  {work.video ? (
                    <video
                      src={work.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <img src={work.image} alt={work.alt} loading="lazy" />
                  )}
                  <div className="portfolio-shine" />
                </div>

                <div className="portfolio-bottom">
                  <div>
                    <h3>{work.title}</h3>
                    <p>{work.description}</p>
                  </div>
                  <span className="portfolio-index">
                    {String(index + 1).padStart(2, "0")} /{" "}
                    {String(WORKS.length).padStart(2, "0")}
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        <div className="portfolio-controls">
          <button type="button" onClick={() => go(-1)} aria-label="Previous project">
            ←
          </button>

          <div className="portfolio-dots" aria-label="Portfolio projects">
            {WORKS.map((work, index) => (
              <button
                key={work.number}
                type="button"
                className={index === active ? "active" : ""}
                onClick={() => setActive(index)}
                aria-label={`Show project ${index + 1}`}
              />
            ))}
          </div>

          <button type="button" onClick={() => go(1)} aria-label="Next project">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
