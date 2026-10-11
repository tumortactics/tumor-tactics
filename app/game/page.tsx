import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import TheGame from "@/components/TheGame";
import Footer from "@/components/Footer";
import PageJourney from "@/components/PageJourney";

export const metadata: Metadata = {
  title: "Free Download | Tumor Tactics",
  description:
    "Download and print the Tumor Tactics card deck and rulebook, then learn cancer biology through strategic gameplay.",
};

export default function GamePage() {
  return (
    <>
      <Navbar />
      <main>
        <TheGame />
        <PageJourney page="download" />
      </main>
      <Footer />
    </>
  );
}
