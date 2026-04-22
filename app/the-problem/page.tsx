import Navbar from "@/components/Navbar";
import TheProblem from "@/components/TheProblem";
import Footer from "@/components/Footer";

export const metadata = {
  title: "The Problem | Tumor Tactics",
  description:
    "1 in 3 Americans will be diagnosed with cancer — yet less than 12% of K–8 curriculum covers it. Tumor Tactics is changing that.",
};

export default function TheProblemPage() {
  return (
    <>
      <Navbar />
      <main>
        <TheProblem />
      </main>
      <Footer />
    </>
  );
}
