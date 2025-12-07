// app/pages/HomePage.jsx
import Hero from "../_components/Hero";
import FeaturedAnimals from "../_components/FeaturedAnimals";
import ProductSection from "../_components/ProductSection";
import CategoryShowcase from "../_components/CategoryShowcase";
import WhyChooseUs from "../_components/WhyChooseUs";
import Testimonials from "../_components/Testimonials";
import InstagramFeed from "../_components/InstagramFeed";
import Newsletter from "../_components/Newsletter";
import FeaturedToys from "../_components/FeaturedToys";

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <FeaturedAnimals />
      <ProductSection />
      <FeaturedToys />
      <CategoryShowcase />
      <WhyChooseUs />
      <Testimonials />
      <InstagramFeed />
      <Newsletter />
    </div>
  );
}