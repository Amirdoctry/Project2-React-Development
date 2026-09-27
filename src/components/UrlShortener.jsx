import { useState, useEffect } from 'react';
import axios from 'axios';

export default function UrlShortener() {
  const [inputUrl, setInputUrl] = useState('');
  const [links, setLinks] = useState(() => {
    // Load links saved in localStorage on first load
    const saved = localStorage.getItem('shortenedLinks');
    return saved ? JSON.parse(saved) : [];
  });
  const [error, setError] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [loading, setLoading] = useState(false);

  // Keep localStorage updated whenever the links array changes
  useEffect(() => {
    localStorage.setItem('shortenedLinks', JSON.stringify(links));
  }, [links]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Check for empty input
    if (!inputUrl.trim()) {
      setError('Please add a link');
      return;
    }

    setError('');
    setLoading(true);

    try {
      // Using corsproxy.io to bypass local CORS policy restrictions with Clean URI
      const response = await axios.post(
        'https://corsproxy.io/?https://cleanuri.com/api/v1/shorten',
        new URLSearchParams({ url: inputUrl })
      );

      const newLink = {
        original: inputUrl,
        short: response.data.result_url,
      };

      setLinks([newLink, ...links]);
      setInputUrl('');
    } catch (err) {
      setError('Unable to shorten this link. Please enter a valid URL.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (shortUrl, index) => {
    navigator.clipboard.writeText(shortUrl);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section className="url-shortener-container">
      <form onSubmit={handleSubmit} className="shortener-form">
        <div className="input-group">
          <input
            type="text"
            placeholder="Shorten a link here..."
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            className={error ? 'input-error' : ''}
          />
          {error && <p className="error-message">{error}</p>}
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Shortening...' : 'Shorten It!'}
        </button>
      </form>

      {/* List of shortened links */}
      <ul className="link-list">
        {links.map((link, index) => (
          <li key={index} className="link-item">
            <span className="original-url">{link.original}</span>
            <span className="short-url">{link.short}</span>
            <button
              onClick={() => handleCopy(link.short, index)}
              className={copiedIndex === index ? 'copied' : ''}
            >
              {copiedIndex === index ? 'Copied!' : 'Copy'}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}