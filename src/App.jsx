import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UrlShortener from './components/UrlShortener';
import Statistics from './components/Statistics';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <UrlShortener />
        <Statistics />
      </main>
      <Footer />
    </div>
  );
}
