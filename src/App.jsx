import { c } from "./styles/tokens";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Work from "./components/Work";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: c.paper }}>
      {/* Print texture, sits above everything and ignores pointer events */}
      <div className="grain" aria-hidden="true" />

      <Header />
      <main>
        <Hero />
        <Ticker />
        <Work />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
