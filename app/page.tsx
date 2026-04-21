import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Story from "@/components/Story";
import WorkshopGallery from "@/components/WorkshopGallery";
import UpcomingEvents from "@/components/UpcomingEvents";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Story />
        <WorkshopGallery />
        <UpcomingEvents />
        <Awards />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
