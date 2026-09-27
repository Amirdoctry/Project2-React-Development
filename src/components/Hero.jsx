export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand’s recognition and get detailed insights 
          on how your links are performing.
        </p>
        <a href="#shorten" className="cta-btn">Get Started</a>
      </div>
      <div className="hero-image">
        {/* Replace with your starter image asset path if using local files */}
        <img src="/images/illustration-working.svg" alt="Person working at desk" />
      </div>
    </section>
  );
}