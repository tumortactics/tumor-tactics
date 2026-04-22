import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Impact from "@/components/Impact";
import Story from "@/components/Story";
import WorkshopGallery from "@/components/WorkshopGallery";
import UpcomingEvents from "@/components/UpcomingEvents";
import Awards from "@/components/Awards";
import SupportMission from "@/components/SupportMission";
import GetInvolved from "@/components/GetInvolved";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";

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
