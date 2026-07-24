import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import WhyChoose from "@/components/site/WhyChoose";
import FeaturedFoods from "@/components/site/FeaturedFoods";
import MenuGallery from "@/components/site/MenuGallery";
import Gallery from "@/components/site/Gallery";
import SpecialServices from "@/components/site/SpecialServices";
import Reviews from "@/components/site/Reviews";
import Services from "@/components/site/Services";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import FloatingButtons from "@/components/site/FloatingButtons";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen bg-[#0d0d0d] text-beige">
      <Navbar />
      <Hero />
      <About />
      <WhyChoose />
      <FeaturedFoods />
      <MenuGallery />
      <Gallery />
      <SpecialServices />
      <Reviews />
      <Services />
      <Contact />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
