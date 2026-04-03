import "./ourServices.css";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import BodyContainer from "../../components/BodyContainer/BodyContainer";
import { Sparkles, LayoutGrid, Truck, Repeat, Gift, BookOpen, Leaf, Sprout } from "lucide-react";
import PageTitle from "../../components/PageTitle/PageTitle";

function OurServices() {
  const services = [
    { icon: <Sparkles className="service-icon" />, title: "Custom Floral Design", description: "Handcrafted bouquets and arrangements for weddings, events, and everyday moments." },
    { icon: <LayoutGrid className="service-icon" />, title: "Event Styling", description: "Full-service floral event styling with modern design direction and setup support." },
    { icon: <Truck className="service-icon" />, title: "Same-day Delivery", description: "Fast local delivery service to ensure your flowers arrive fresh and on time." },
    { icon: <Repeat className="service-icon" />, title: "Subscription Plans", description: "Weekly or monthly arrangements to keep your home or office looking vibrant." },
    { icon: <Gift className="service-icon" />, title: "Corporate Gifting", description: "Curated floral gift packs for employee appreciation, business meetings, and corporate rewards." },
    { icon: <BookOpen className="service-icon" />, title: "Workshop & Classes", description: "Learn floral arrangement techniques in group workshops for hobbyists and professionals." },
    { icon: <Leaf className="service-icon" />, title: "Eco-friendly Sourcing", description: "Sustainably sourced blooms from local growers, focusing on low waste and seasonal collections." },
    { icon: <Sprout className="service-icon" />, title: "Garden Consultation", description: "Expert advice for home and community gardens, including seasonal flower planning and maintenance tips." },
  ];

  return (
    <div className="main-container">
      <Navbar active="Our Services" />
      <PageTitle title="Our Services" 
      subtitle={"We provide best services "}/>
      <BodyContainer>
        <section className="services-page">
          <h1>Our Services</h1>
          <p>Discover our full suite of floral offerings crafted for elegance, ease, and impact.</p>
          <div className="service-grid">
            {services.map((service, index) => (
              <article key={index} className="service-card">
                {service.icon}
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>
      </BodyContainer>
      <Footer />
    </div>
  );
}

export default OurServices;
