import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import PhotoShowcase from "@/components/PhotoShowcase";
import Footer from "@/components/Footer";
import PageJourney from "@/components/PageJourney";

export const metadata = {
  title: "Classroom Gallery | Tumor Tactics",
  description: "See Tumor Tactics in classrooms, workshops, and community events.",
};

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <Gallery />
        <PhotoShowcase />
        <PageJourney page="gallery" />
      </main>
      <Footer />
    </>
  );
}
