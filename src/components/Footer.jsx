export default function Footer() {
  return (
    <footer className="footer">
      <div className="boost-banner">
        <h2>Boost your links today</h2>
        <a href="#shorten" className="cta-btn">Get Started</a>
      </div>

      <div className="footer-content">
        <div className="footer-logo">
          <h2>Shortly</h2>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4>Features</h4>
            <a href="#shortening">Link Shortening</a>
            <a href="#branded">Branded Links</a>
            <a href="#analytics">Analytics</a>
          </div>
          <div className="link-group">
            <h4>Resources</h4>
            <a href="#blog">Blog</a>
            <a href="#developers">Developers</a>
            <a href="#support">Support</a>
          </div>
          <div className="link-group">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#team">Our Team</a>
            <a href="#careers">Careers</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}