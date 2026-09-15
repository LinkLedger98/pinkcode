import { useState } from "react";
import "./Contact.css";

const countries = [
  { name: "Botswana", code: "+267", flag: "🇧🇼" },
  { name: "South Africa", code: "+27", flag: "🇿🇦" },
  { name: "Zimbabwe", code: "+263", flag: "🇿🇼" },
  { name: "Zambia", code: "+260", flag: "🇿🇲" },
  { name: "Namibia", code: "+264", flag: "🇳🇦" },
  { name: "Mozambique", code: "+258", flag: "🇲🇿" },
  { name: "Malawi", code: "+265", flag: "🇲🇼" },
  { name: "Nigeria", code: "+234", flag: "🇳🇬" },
  { name: "Ghana", code: "+233", flag: "🇬🇭" },
  { name: "Kenya", code: "+254", flag: "🇰🇪" },
  { name: "Tanzania", code: "+255", flag: "🇹🇿" },
  { name: "Rwanda", code: "+250", flag: "🇷🇼" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { name: "India", code: "+91", flag: "🇮🇳" },
];

function Contact() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedPhoneCountry, setSelectedPhoneCountry] = useState(
    countries[0]
  );

  const [countryOpen, setCountryOpen] = useState(false);
  const [phoneCountryOpen, setPhoneCountryOpen] = useState(false);

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(
        "https://formspree.io/f/YOUR_FORM_ID",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Unable to send your enquiry right now. Please try again.");
    }
  };

  return (
    <div className="contact-page">

      {/* ROSE GOLD AMBIENT TRAILS */}
      <div className="contact-glow contact-glow-one"></div>
      <div className="contact-glow contact-glow-two"></div>
      <div className="contact-glow contact-glow-three"></div>

      {/* HEADER */}
      <header className="contact-header">

        <a href="/" className="contact-logo" aria-label="PinkCode home">
          <img src="/pinkcode-logo.png" alt="PinkCode" />
        </a>

        <a href="/" className="back-home">
          <span>←</span>
          Back to PinkCode
        </a>

      </header>

      {/* MAIN */}
      <main className="contact-main">

        {/* LEFT SIDE */}
        <section className="contact-intro">

          <p className="contact-eyebrow">
            START A PROJECT
          </p>

          <h1>
            Let’s build
            <br />
            something
            <br />
            <span>great.</span>
          </h1>

          <div className="contact-gold-line"></div>

          <p className="contact-description">
            Tell us about your business, your idea, or the problem
            you want to solve.
          </p>

          <p className="contact-description secondary">
            You don’t need a website, domain or technical plan yet.
            Just tell us what you need.
          </p>

          <div className="contact-note">
            <span>✦</span>
            <p>
              We’ll review your enquiry and get back to you with
              the next step.
            </p>
          </div>

        </section>

        {/* FORM */}
        <section className="contact-form-card">

          {submitted ? (
            <div className="success-message">

              <div className="success-icon">✓</div>

              <p className="contact-eyebrow">
                ENQUIRY RECEIVED
              </p>

              <h2>
                Thank you.
                <br />
                We’ll be in touch.
              </h2>

              <p>
                Your project enquiry has been sent to PinkCode.
                We’ll review your requirements and get back to you.
              </p>

              <a href="/" className="contact-submit success-button">
                Back to PinkCode
                <span>→</span>
              </a>

            </div>
          ) : (

            <form
              className="project-form"
              onSubmit={handleSubmit}
            >

              {/* SECTION 01 */}
              <div className="form-section">

                <div className="form-section-heading">
                  <span>01</span>

                  <div>
                    <h2>Your details</h2>
                    <p>Tell us who we’ll be working with.</p>
                  </div>
                </div>

                <div className="form-grid">

                  <div className="form-field">
                    <label htmlFor="name">NAME</label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="position">POSITION</label>

                    <input
                      id="position"
                      name="position"
                      type="text"
                      placeholder="e.g. Founder, Director"
                    />
                  </div>

                </div>

                <div className="form-grid">

                  <div className="form-field">
                    <label htmlFor="email">EMAIL</label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      required
                    />
                  </div>

                  {/* PHONE */}
                  <div className="form-field">
                    <label htmlFor="phone">PHONE NUMBER</label>

                    <div className="phone-field">

                      <div className="phone-country-wrapper">

                        <button
                          type="button"
                          className="country-trigger phone-trigger"
                          onClick={() =>
                            setPhoneCountryOpen(!phoneCountryOpen)
                          }
                        >
                          <span>
                            {selectedPhoneCountry.flag}
                          </span>

                          <strong>
                            {selectedPhoneCountry.code}
                          </strong>

                          <span className="country-arrow">
                            {phoneCountryOpen ? "⌃" : "⌄"}
                          </span>
                        </button>

                        {phoneCountryOpen && (
                          <div className="country-menu phone-menu">

                            {countries.map((country) => (
                              <button
                                type="button"
                                key={`${country.name}-phone`}
                                onClick={() => {
                                  setSelectedPhoneCountry(country);
                                  setPhoneCountryOpen(false);
                                }}
                              >
                                <span>{country.flag}</span>
                                <span>{country.name}</span>
                                <small>{country.code}</small>
                              </button>
                            ))}

                          </div>
                        )}

                      </div>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Phone number"
                        required
                      />

                    </div>

                  </div>

                </div>

              </div>


              {/* SECTION 02 */}
              <div className="form-section">

                <div className="form-section-heading">
                  <span>02</span>

                  <div>
                    <h2>Your business</h2>
                    <p>Give us a little context.</p>
                  </div>
                </div>

                <div className="form-grid">

                  <div className="form-field">
                    <label htmlFor="businessName">
                      NAME OF BUSINESS
                    </label>

                    <input
                      id="businessName"
                      name="businessName"
                      type="text"
                      placeholder="Your business name"
                      required
                    />
                  </div>

                  {/* COUNTRY */}
                  <div className="form-field country-field">
                    <label>COUNTRY</label>

                    <button
                      type="button"
                      className="country-trigger"
                      onClick={() =>
                        setCountryOpen(!countryOpen)
                      }
                    >
                      <span>
                        {selectedCountry.flag}
                      </span>

                      <strong>
                        {selectedCountry.name}
                      </strong>

                      <span className="country-arrow">
                        {countryOpen ? "⌃" : "⌄"}
                      </span>
                    </button>

                    {countryOpen && (
                      <div className="country-menu">

                        {countries.map((country) => (
                          <button
                            type="button"
                            key={country.name}
                            onClick={() => {
                              setSelectedCountry(country);
                              setCountryOpen(false);
                            }}
                          >
                            <span>{country.flag}</span>

                            <span>
                              {country.name}
                            </span>

                            <small>
                              {country.code}
                            </small>
                          </button>
                        ))}

                      </div>
                    )}

                    <input
                      type="hidden"
                      name="country"
                      value={selectedCountry.name}
                    />

                  </div>

                </div>

                <div className="form-field">

                  <label htmlFor="businessDescription">
                    WHAT DOES YOUR BUSINESS DO?
                  </label>

                  <textarea
                    id="businessDescription"
                    name="businessDescription"
                    placeholder="Tell us about your business..."
                    rows="5"
                    required
                  ></textarea>

                </div>

              </div>


              {/* SECTION 03 */}
              <div className="form-section">

                <div className="form-section-heading">
                  <span>03</span>

                  <div>
                    <h2>Your idea</h2>
                    <p>Tell us what you want PinkCode to build.</p>
                  </div>
                </div>

                <div className="form-field">

                  <label htmlFor="projectIdea">
                    WHAT WOULD YOU LIKE PINKCODE TO BUILD?
                  </label>

                  <textarea
                    id="projectIdea"
                    name="projectIdea"
                    placeholder="Tell us what you have in mind. It could be a website, online store, booking system, dashboard, business system, or something completely new..."
                    rows="7"
                    required
                  ></textarea>

                </div>

              </div>


              {/* SUBMIT */}
              <div className="form-submit-area">

                <button
                  type="submit"
                  className="contact-submit"
                >
                  Send project enquiry
                  <span>→</span>
                </button>

                <p>
                  No website? No problem.
                  No domain? That’s okay too.
                  Just tell us what you need.
                </p>

              </div>

            </form>

          )}

        </section>

      </main>

    </div>
  );
}

export default Contact;