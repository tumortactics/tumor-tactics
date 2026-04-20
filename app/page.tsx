import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import AboutGame from "@/components/AboutGame";
import Impact from "@/components/Impact";
import Gallery from "@/components/Gallery";
import GetInvolved from "@/components/GetInvolved";
import SupportMission from "@/components/SupportMission";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Story />
        <AboutGame />
        <Impact />
        <Gallery />
        <GetInvolved />
        <SupportMission />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
