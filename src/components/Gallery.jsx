import heroPlatter from "@/assets/hero-platter.jpg";
import dalMakhani from "@/assets/dal-makhani.jpg";
import interior from "@/assets/restaurant-interior.jpg";
import familyDining from "@/assets/family-dining.jpg";
import chefCooking from "@/assets/chef-cooking.jpg";
import thali from "@/assets/north-indian-thali.jpg";

const images = [
  { src: heroPlatter, alt: "North Indian food platter" },
  { src: interior, alt: "Restaurant interior" },
  { src: dalMakhani, alt: "Dal Makhani" },
  { src: familyDining, alt: "Family dining at Krishna Haveli" },
  { src: chefCooking, alt: "Chef preparing dishes" },
  { src: thali, alt: "North Indian Thali" },
];

const Gallery = () => (
  <section id="gallery" className="section-padding bg-background">
    <div className="mx-auto max-w-7xl text-center">
      <p className="mb-3 font-body text-sm font-semibold uppercase tracking-widest text-secondary">Gallery</p>
      <h2 className="section-heading mx-auto mb-12">A Glimpse of Krishna Haveli</h2>
      <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {images.map((img, i) => (
          <div key={i} className="mb-4 break-inside-avoid overflow-hidden rounded-2xl">
            <img src={img.src} alt={img.alt} className="w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
