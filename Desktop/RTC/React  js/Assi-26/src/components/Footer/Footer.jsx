import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <h3>Assi-26</h3>
          <p>Built with React. Simple and responsive footer component.</p>
        </div>

        <div className="footer__links">
          <div>
            <h4>Explore</h4>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
          </div>
          <div>
            <h4>Contact</h4>
            <p>info@example.com</p>
            <p>+1 (123) 456-7890</p>
            <p>123 React Street, JS City</p>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© {new Date().getFullYear()} Assi-26. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
