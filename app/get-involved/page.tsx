import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import GetInvolved from "@/components/GetInvolved";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Get Involved | Tumor Tactics",
  description:
    "Partner with Tumor Tactics, bring the game to your school, or join the student-led team making cancer education more accessible.",
};

export default function GetInvolvedPage() {
  return (
    <>
      <Navbar />
      <main>
        <GetInvolved />
      </main>
      <Footer />
    </>
  );
}
