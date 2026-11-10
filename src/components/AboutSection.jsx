import interiorImg from "@/assets/restaurant-interior.jpg";

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <img src={interiorImg} alt="Krishna Haveli Restaurant elegant interior" className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" loading="lazy" />
      </div>
      <div>
        <p className="mb-3 font-body text-sm font-semibold uppercase tracking-widest text-secondary">About Us</p>
        <h2 className="section-heading mb-6">A Place Where Great Taste Meets Comfort</h2>
        <div className="space-y-4 font-body text-base leading-relaxed text-muted-foreground">
          <p>Krishna Haveli Restaurant is a popular dining destination in Sahjanwa, Gorakhpur known for its delicious North Indian cuisine, hygienic environment, and welcoming hospitality.</p>
          <p>Whether you are traveling along NH-27, meeting friends, or enjoying a family dinner, Krishna Haveli offers a relaxing place to enjoy fresh, flavorful food at any time of the day.</p>
          <p>Open 24 hours, we proudly serve travelers, families, and local residents with food that feels both authentic and satisfying.</p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
