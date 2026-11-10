import heroImg from "@/assets/hero-platter.jpg";
import { Star, Clock, MapPin, IndianRupee } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Krishna Haveli signature North Indian food platter"
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-overlay)" }} />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <span className="animate-fade-up mb-6 inline-block rounded-full border border-secondary/40 bg-secondary/10 px-5 py-2 font-body text-xs text-yellow-200 font-semibold uppercase tracking-[0.3em] text-secondary backdrop-blur-md">
          ✦ Welcome to Krishna Haveli ✦
        </span>
        <h1 className="animate-fade-up-delay-1 mb-5 max-w-5xl font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-primary-foreground drop-shadow-lg md:text-7xl lg:text-8xl">
          Authentic Taste.
          <br />
          <span className="bg-gradient-to-r from-secondary to-[hsl(34,39%,85%)] bg-clip-text italic text-transparent">
            Timeless Hospitality.
          </span>
        </h1>
        <p className="animate-fade-up-delay-2 mb-12 max-w-xl font-body text-sm font-light leading-relaxed text-primary-foreground/80 md:max-w-2xl md:text-base">
          Delicious North Indian cuisine in a clean, welcoming space — open
          <span className="font-semibold text-secondary"> 24 hours </span>
          for families, travelers & food lovers.
        </p>

        <div className="animate-fade-up-delay-3 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="1234567891"
            className="inline-flex items-center gap-2 rounded-full bg-secondary px-10 py-4 font-body text-sm font-bold uppercase tracking-wider text-secondary-foreground shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
          >
            Order Now
          </a>
          <a
            href="https://maps.google.com/?q=Krishna+Haveli+Restaurant+Sahjanwa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-10 py-4 font-body text-sm font-semibold uppercase tracking-wider text-primary-foreground backdrop-blur-md transition-all hover:border-primary-foreground/50 hover:bg-primary-foreground/10"
          >
            Get Directions
          </a>
        </div>

        {/* Trust indicators */}
        <div className="animate-fade-up-delay-3 mt-14 flex flex-wrap items-center justify-center gap-4 rounded-2xl border border-primary-foreground/10 bg-primary-foreground/5 px-6 py-3 backdrop-blur-md md:gap-8">
          <span className="flex items-center gap-1.5 font-body text-xs font-medium text-primary-foreground/80 md:text-sm">
            <Star className="h-4 w-4 text-secondary" /> 4.3 Rating
          </span>
          <span className="h-4 w-px bg-primary-foreground/20" />
          <span className="font-body text-xs font-medium text-primary-foreground/80 md:text-sm">668 Reviews</span>
          <span className="h-4 w-px bg-primary-foreground/20" />
          <span className="flex items-center gap-1.5 font-body text-xs font-medium text-primary-foreground/80 md:text-sm">
            <Clock className="h-4 w-4 text-secondary" /> 24 Hours
          </span>
          <span className="h-4 w-px bg-primary-foreground/20" />
          <span className="flex items-center gap-1.5 font-body text-xs font-medium text-primary-foreground/80 md:text-sm">
            <IndianRupee className="h-4 w-4 text-secondary" /> ₹200–₹400
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <div className="h-10 w-6 rounded-full border-2 border-primary-foreground/40">
          <div className="mx-auto mt-2 h-2 w-1 animate-bounce rounded-full bg-primary-foreground/60" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
