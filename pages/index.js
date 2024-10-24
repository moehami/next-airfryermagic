// pages/index.js
import HomePage from '../components/ExampleComponent';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

export default function Home() {
  return (
    <>
      <Navbar />
    <HeroSection />
      <HomePage />
    </>
  );
}
