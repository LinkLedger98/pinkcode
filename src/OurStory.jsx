import React from "react";
import "./OurStory.css";

function OurStory() {
  return (
    <div className="our-story-page">

      {/* BACK */}
      <a href="/" className="story-back">
        <span>←</span>
        Back
      </a>

      {/* HERO */}
      <section className="story-hero">

        <div className="story-eyebrow">
          OUR STORY
        </div>

        <h1>
          Built with intention.
          <br />
          <span>Built for people.</span>
        </h1>

        <p className="story-hero-text">
          PinkCode started with a simple idea: businesses deserve
          digital experiences that feel as thoughtful, capable and
          ambitious as the businesses behind them.
        </p>

      </section>


      {/* FOUNDER */}
      <section className="founder-section">

        <div className="founder-image-wrap">
          <img
            src="/popo-pinkcode.png"
            alt="Popo — Founder of PinkCode"
            className="founder-image"
          />
        </div>

        <div className="founder-copy">

  <div className="story-eyebrow">
    THE PERSON BEHIND PINKCODE
  </div>

  <h2 className="popo-heading">
  Hi, I'm <span className="popo-name">Popo.</span>
  <span className="popo-crown">♕</span>
</h2>

  <div className="founder-story-scroll">

    <p className="founder-intro">
      My name is Thelma Popo Segadimo.
    </p>

    <p>
      I am a mother, a developer, and a woman from Botswana who has
      always been fascinated by what technology can make possible.
    </p>

    <p>
      I am also a creator at heart.
    </p>

    <p>
      I love taking an idea that exists only in someone’s mind and
      turning it into something real. Something people can see,
      experience, interact with, and say, <em>“This is exactly what I
      imagined.”</em>
    </p>

    <p>
      That is where PinkCode began.
    </p>

    <p>
      Not with a perfect business plan. Not with everything figured out.
    </p>

    <p>
      It began with me wanting to create.
    </p>

    <p>
      I wanted to build things that were useful, beautiful, intelligent,
      and thoughtfully made. Things that solved real problems while
      still feeling exciting to use.
    </p>

    <p>
      Being a mother has shaped the way I think about technology.
      I understand how valuable time is. I appreciate simplicity.
      I notice when something creates unnecessary work, and I believe
      technology should make life easier, not more complicated.
    </p>

    <p>
      Being a developer has given me a completely different perspective.
    </p>

    <p>
      I understand what happens behind the screen. The code. The systems.
      The logic. The details that most people never see but that make
      the difference between something that simply exists and something
      that actually works.
    </p>

    <p>
      But I am also someone who cares deeply about creativity.
    </p>

    <p>
      I care about the feeling of a website when you first open it.
    </p>

    <p>
      I care about the words.
    </p>

    <p>
      The typography.
    </p>

    <p>
      The movement.
    </p>

    <p>
      The tiny details.
    </p>

    <p>
      The things that make something feel considered rather than
      simply assembled.
    </p>

    <p>
      I believe technology can be incredibly powerful without being
      complicated.
    </p>

    <p>
      I believe beautiful design should have a purpose.
    </p>

    <p>
      And I believe the best digital experiences happen when creativity
      and technology are given equal importance.
    </p>

    <p>
      That is what PinkCode is about.
    </p>

    <p>
      It is my space to bring those things together.
    </p>

    <p>
      To create websites, digital experiences, and technology that do
      more than simply look good.
    </p>

    <p>
      Things that communicate.
    </p>

    <p>
      Things that connect.
    </p>

    <p>
      Things that make people stop and pay attention.
    </p>

    <p>
      Things that help ideas become real.
    </p>

    <p>
      I am building PinkCode from Botswana, but my imagination has
      never been limited by a border.
    </p>

    <p>
      The internet has always made the world feel much bigger than
      the place you begin.
    </p>

    <p>
      So yes, I am a woman from Botswana.
    </p>

    <p>
      I am a mother.
    </p>

    <p>
      I am a developer.
    </p>

    <p>
      I am a creator.
    </p>

    <p>
      And I am building PinkCode for anyone, anywhere, who has
      something worth bringing to the digital world.
    </p>

    <p className="founder-ending">
      This is only the beginning.
    </p>

  </div>

</div>

      </section>


      {/* BELIEF */}
      <section className="story-belief">

        <div className="story-eyebrow">
          WHAT WE BELIEVE
        </div>

        <h2>
          Your business already has
          <br />
          <span>a story worth telling.</span>
        </h2>

        <p>
          We don't believe every business needs the same website,
          the same technology or the same solution. We start with
          the business itself — then build around what actually
          makes sense.
        </p>

      </section>


      {/* VALUES */}
      <section className="story-values">

        <div className="story-value">
          <span>01</span>

          <h3>Thoughtful</h3>

          <p>
            We care about the details, from the way something looks
            to the way it works.
          </p>
        </div>


        <div className="story-value">
          <span>02</span>

          <h3>Practical</h3>

          <p>
            Beautiful is important. Useful is essential. We build
            things businesses can actually use.
          </p>
        </div>


        <div className="story-value">
          <span>03</span>

          <h3>Personal</h3>

          <p>
            There is a real person behind PinkCode, and there should
            be a real relationship behind every project.
          </p>
        </div>

      </section>


      {/* CLOSING */}
      <section className="story-closing">

        <div className="story-eyebrow">
          PINKCODE
        </div>

        <h2>
          Beautifully built.
          <br />
          <span>Brilliantly simple.</span>
        </h2>

      </section>


      {/* FOOTER */}
      <footer className="story-footer">

        <img
          src="/pinkcode-logo.png"
          alt="PinkCode"
        />

        <div className="story-footer-links">
          <a href="/business-websites">Business Websites</a>
          <a href="/website-care">PinkCode Care</a>
          <a href="/contact">Contact</a>
        </div>

      </footer>

    </div>
  );
}

export default OurStory;