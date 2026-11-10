import { Star, Clock, UtensilsCrossed, SparklesIcon, MapPin } from "lucide-react";

const items = [
  { icon: Star, label: "668+ Happy Customers" },
  { icon: Clock, label: "Open 24 Hours" },
  { icon: UtensilsCrossed, label: "Authentic North Indian Food" },
  { icon: SparklesIcon, label: "Hygienic Dining" },
  { icon: MapPin, label: "Located on NH-27" },
];

const TrustBar = () => (
  <section className="bg-primary">
    <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-5 md:justify-between md:gap-4 md:px-8">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-2 text-primary-foreground/90">
          <item.icon className="h-4 w-4 text-secondary" />
          <span className="font-body text-xs font-medium md:text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TrustBar;
