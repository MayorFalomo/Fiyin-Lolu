import Image from 'next/image';
import HeroSection from './components/HeroSection';
import Navbar from './components/navbar/Navbar';
import Story from './components/Story';
import SmoothScrolling from './components/animations/SmoothScrolling';
import Events from './components/Events';
import Wishlist from './components/Wishlist';
import Gallery from './components/Gallery';
import Logo from './components/Logo';
import RSVP from './components/rsvp/RSVP';
import Faq from './components/Faq';
import SaveTheDate from './components/animations/SaveTheDate';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <SmoothScrolling>
        <Logo />
        <HeroSection />
        <Navbar />
        <Story />
        <Events />
        <Wishlist />
        <Gallery />
        <RSVP />
        <Faq />
        <SaveTheDate />
      </SmoothScrolling>
    </div>
  );
}
