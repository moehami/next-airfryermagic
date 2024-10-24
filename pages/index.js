// pages/index.js
import HomePage from '../components/ExampleComponent';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CallToAction from '../components/CallToAction';
import AboutSection from '../components/AboutSection';
import LatestNewsSection from '../components/LatestNewsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FaqSection from '../components/FaqSection';
import JoinusSection from '../components/JoinusSection';
import ContactusSection from '../components/ContactusSection';
import FooterSection from '../components/FooterSection';
export default function Home() {
  return (
    <>
  <Navbar />
<HeroSection />
<CallToAction />
<AboutSection />
<LatestNewsSection />
<TestimonialsSection />
<FaqSection />
<JoinusSection />
<ContactusSection />
<FooterSection />
<HomePage />
    </>
  );
}
