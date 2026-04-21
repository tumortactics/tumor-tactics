import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Impact from "@/components/Impact";
import AboutGame from "@/components/AboutGame";
import Story from "@/components/Story";
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
        <Marquee />
        <Story />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
