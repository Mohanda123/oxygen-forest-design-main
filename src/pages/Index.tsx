import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PlantCategories from "@/components/PlantCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <PlantCategories />
        <WhyChooseUs />
        <Reviews />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
