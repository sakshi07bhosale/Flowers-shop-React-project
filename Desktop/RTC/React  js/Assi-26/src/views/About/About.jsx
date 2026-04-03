import "./About.css";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import { Sparkles, Leaf, Truck, HeartHandshake } from "lucide-react";
import PageTitle from "../../components/PageTitle/PageTitle";

function About() {
  const highlights = [
    { icon: <Sparkles className="about-icon" />, label: "Premium floral art" },
    { icon: <Leaf className="about-icon" />, label: "Eco-friendly sourcing" },
    { icon: <Truck className="about-icon" />, label: "Fast same-day delivery" },
    { icon: <HeartHandshake className="about-icon" />, label: "Trusted customer care" },
  ];

  return (
    <div className="main-container">
      <Navbar active="About" />
      <PageTitle title="Learn more About Us" subtitle={"Discover what makes us different"} />
      <BodyContainer>
        <section className="about-page">
          <h1 className="about-title">About Us</h1>
          <p className="about-text">We provide premium flower design and services for individuals and businesses. Our mission is to make every moment more beautiful with expertly curated floral arrangements and responsive service.</p>
          <div className="about-highlight-grid">
            {highlights.map((item, idx) => (
              <div key={idx} className="about-highlight-card">
                {item.icon}
                <p>{item.label}</p>
              </div>
            ))}
          </div>
          <div className="about-story">
            <h2>Our Story</h2>
            <p>Established by a team of flower artists, we blend classic style with modern design. From small bouquets to large events, we bring consistent quality and friendly support for every order.</p>
          </div>
        </section>
      </BodyContainer>
      <Footer />
    </div>
  );
}

export default About;
