import Navbar from "@Components/Navbar";
import HeroSection from "./HeroSection";
import ListSection from "./ListSection";
import Footer from "@Components/Footer";

export default function Home() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />
      <HeroSection />
      <ListSection />
      <Footer />
    </div>
  );
}
