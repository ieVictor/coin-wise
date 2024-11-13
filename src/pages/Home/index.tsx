import Navbar from '@Components/Navbar';
import HeroSection from './HeroSection';
import ListSection from './ListSection';

export default function Home() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Navbar />
      <HeroSection />
      <ListSection />
    </div>
  );
}
