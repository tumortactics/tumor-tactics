import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import GameSnapshot from "@/components/GameSnapshot";
import HowToPlayVideo from "@/components/HowToPlayVideo";
import Story from "@/components/Story";
import WorkshopGallery from "@/components/WorkshopGallery";
import PressSection from "@/components/PressSection";
import UpcomingEvents from "@/components/UpcomingEvents";
import NonprofitModel from "@/components/NonprofitModel";
import Awards from "@/components/Awards";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <GameSnapshot />
        <HowToPlayVideo />
        <PressSection />
        <Story />
        <WorkshopGallery />
        <UpcomingEvents />
        <Awards />
        <NonprofitModel />
      </main>
      <Footer />
    </>
  );
}
