// pages/index.js
import HomePage from '../components/ExampleComponent';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CallToAction from '../components/CallToAction';
import AboutSection from '../components/AboutSection';

export default function Home() {
  return (
    <>
      <Navbar />
    <HeroSection />
    <CallToAction />
    <AboutSection />
      <HomePage />
    </>
  );
}
