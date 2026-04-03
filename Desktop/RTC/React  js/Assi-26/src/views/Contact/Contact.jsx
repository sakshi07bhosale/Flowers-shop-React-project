import { useState } from "react";
import "./Contact.css";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import PageTitle from "../../components/PageTitle/PageTitle";

function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      setStatus("Please fill out all fields before submitting.");
      return;
    }

    setStatus("Sending...");

    setTimeout(() => {
      setStatus("Message sent successfully! We will respond shortly.");
      setFormState({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <div className="main-container">
      <Navbar active="Contact" />
      <PageTitle title="Get touch with Us" subtitle={"We are just one call away.."} />
      <BodyContainer>
        <section className="contact-page">
          <h1>Contact Us</h1>
          <p>Have a question or custom request? Share your message below.</p>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <label>
              Name
              <input
                type="text"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Email
              <input
                type="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="Your email"
                required
              />
            </label>

            <label>
              Message
              <textarea
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Tell us about your project, order or question"
                required
                rows={6}
              />
            </label>

            <button type="submit">Send Message</button>
          </form>

          {status && <div className="contact-status">{status}</div>}
        </section>
      </BodyContainer>
      <Footer />
    </div>
  );
}

export default Contact;
