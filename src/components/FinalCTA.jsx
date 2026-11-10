import { Phone, Navigation } from "lucide-react";

const FinalCTA = () => (
  <section className="relative overflow-hidden px-4 py-20 md:py-32" style={{ background: "var(--dark-overlay)" }}>
    <div className="relative z-10 mx-auto max-w-3xl text-center">
      <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-5xl">
        Hungry? Visit Krishna Haveli Today
      </h2>
      <p className="mb-10 font-body text-base text-primary-foreground/75 md:text-lg">
        Enjoy delicious North Indian cuisine, friendly service, and a comfortable dining experience anytime.
      </p>
      <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a href="tel:1234567891" className="inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-4 font-body text-base font-semibold text-secondary-foreground shadow-lg transition-transform hover:scale-105">
          <Phone className="h-5 w-5" /> Order Now
        </a>
        <a href="https://maps.google.com/?q=Krishna+Haveli+Restaurant+Sahjanwa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border-2 border-primary-foreground/30 px-8 py-4 font-body text-base font-semibold text-primary-foreground transition-all hover:border-primary-foreground/60 hover:bg-primary-foreground/10">
          <Navigation className="h-5 w-5" /> Get Directions
        </a>
      </div>
    </div>
  </section>
);

export default FinalCTA;
