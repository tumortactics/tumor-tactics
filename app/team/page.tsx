import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import PageJourney from "@/components/PageJourney";

export const metadata: Metadata = {
  title: "Meet Our Team | Tumor Tactics",
  description:
    "Meet the student leaders bringing Tumor Tactics into classrooms, workshops, and community events.",
};

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main>
        <TeamSection />
        <PageJourney page="team" />
      </main>
      <Footer />
    </>
  );
}
