import React from "react";
import "./WebsiteCare.css";

function WebsiteCare() {
  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <div className="care-page">

      {/* BACK BUTTON */}
      <button className="care-back" onClick={goBack}>
        <span className="care-back-arrow">←</span>
        <span>Back</span>
      </button>

      {/* =========================================
          HERO
          ========================================= */}
      <section className="care-hero">
        <div className="care-eyebrow">
          WEBSITE CARE
        </div>

        <h1>
          Your website
          <br />
          shouldn’t become
          <br />
          <span>your problem.</span>
        </h1>

        <p>
          Your website is supposed to help your business — not give you another
          thing to worry about. PinkCode keeps your website maintained,
          monitored and supported after launch.
        </p>

        {/* No CTA here */}
      </section>


      {/* =========================================
          WHAT WE LOOK AFTER
          ========================================= */}
      <section className="care-lookafter">
        <div className="care-lookafter-heading">
          <div>
            <div className="care-eyebrow">
              WHAT WE LOOK AFTER
            </div>

            <h2>
              We keep things
              <br />
              <span>running.</span>
            </h2>
          </div>

          <p>
            Your care plan determines the level of ongoing support and
            attention your website receives.
          </p>
        </div>

        <div className="care-services-grid">

          <div className="care-service">
            <span className="care-number">01</span>
            <h3>Updates</h3>
            <p>
              We keep your website's software and supported components
              maintained so you don't have to worry about routine technical
              updates.
            </p>
          </div>

          <div className="care-service">
            <span className="care-number">02</span>
            <h3>Monitoring</h3>
            <p>
              We keep an eye on your website so problems can be identified
              before they become bigger headaches.
            </p>
          </div>

          <div className="care-service">
            <span className="care-number">03</span>
            <h3>Backups</h3>
            <p>
              Regular backups give your website a recovery point if something
              goes wrong.
            </p>
          </div>

          <div className="care-service">
            <span className="care-number">04</span>
            <h3>Security</h3>
            <p>
              Routine security checks help keep your website protected and
              maintained.
            </p>
          </div>

          <div className="care-service">
            <span className="care-number">05</span>
            <h3>Small changes</h3>
            <p>
              Need a photo replaced, wording updated or a small section
              changed? Depending on your plan, PinkCode can handle it for you.
            </p>
          </div>

          <div className="care-service">
            <span className="care-number">06</span>
            <h3>Technical help</h3>
            <p>
              When something stops working, you have someone to contact
              instead of having to figure everything out yourself.
            </p>
          </div>

        </div>
      </section>


      {/* =========================================
          CARE PLANS
          ========================================= */}
      <section className="care-plans">

        <div className="care-plans-heading">
          <div>
            <div className="care-eyebrow">
              PINKCODE CARE PLANS
            </div>

            <h2>
              Choose the level
              <br />
              of <span>care you</span>
              <br />
              <span>need.</span>
            </h2>
          </div>

          <p>
            Start with the level that makes sense for your business. You can
            move to a different level of care as your website grows.
          </p>
        </div>


        <div className="care-plan-grid">

          {/* ESSENTIAL */}
          <div className="care-plan">
            <span className="care-number">01</span>

            <h3>Essential Care</h3>

            <div className="care-price">
              <span>$29</span>
              <small>/month</small>
            </div>

            <p className="care-plan-description">
              For businesses that want their website kept healthy, secure and
              up to date.
            </p>

            <ul>
              <li>Website monitoring</li>
              <li>Security checks</li>
              <li>Routine updates</li>
            </ul>
          </div>


          {/* BUSINESS */}
          <div className="care-plan care-plan-featured">
            <span className="care-number">02</span>

            <h3>Business Care</h3>

            <div className="care-price">
              <span>$59</span>
              <small>/month</small>
            </div>

            <p className="care-plan-description">
              For businesses that rely on their website and want ongoing
              technical support.
            </p>

            <ul>
              <li>Everything in Essential Care</li>
              <li>Priority technical support</li>
              <li>Small content updates</li>
              <li>Form and functionality checks</li>
            </ul>
          </div>


          {/* PREMIUM */}
          <div className="care-plan">
            <span className="care-number">03</span>

            <h3>Premium Care</h3>

            <div className="care-price">
              <span>$99</span>
              <small>/month</small>
            </div>

            <p className="care-plan-description">
              For larger websites and businesses that want a more hands-on
              ongoing service.
            </p>

            <ul>
              <li>Everything in Business Care</li>
              <li>Priority maintenance</li>
              <li>More frequent monitoring</li>
              <li>Ongoing performance checks</li>
            </ul>
          </div>

        </div>

      </section>

    </div>
  );
}

export default WebsiteCare;