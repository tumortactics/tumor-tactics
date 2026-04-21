import Navbar from "@/components/Navbar";
import Gallery from "@/components/Gallery";
import PhotoShowcase from "@/components/PhotoShowcase";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <Gallery />
        <PhotoShowcase />
      </main>
      <Footer />
    </>
  );
}
