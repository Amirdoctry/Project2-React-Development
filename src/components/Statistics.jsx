export default function Statistics() {
  const features = [
    {
      id: 1,
      title: 'Brand Recognition',
      description:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
      icon: '/images/icon-brand-recognition.svg',
    },
    {
      id: 2,
      title: 'Detailed Records',
      description:
        'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
      icon: '/images/icon-detailed-records.svg',
    },
    {
      id: 3,
      title: 'Fully Customizable',
      description:
        'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
      icon: '/images/icon-fully-customizable.svg',
    },
  ];

  return (
    <section className="statistics">
      <div className="stats-header">
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our 
          advanced statistics dashboard.
        </p>
      </div>

      <div className="cards-container">
        <div className="connecting-line"></div>
        {features.map((feature) => (
          <div key={feature.id} className={`card card-${feature.id}`}>
            <div className="icon-wrapper">
              <img src={feature.icon} alt={feature.title} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}