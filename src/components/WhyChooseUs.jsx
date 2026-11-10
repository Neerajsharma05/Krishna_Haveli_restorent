import { UtensilsCrossed, SparklesIcon, Heart, Clock, Users } from "lucide-react";

const reasons = [
  { icon: UtensilsCrossed, title: "Authentic Taste", desc: "Traditional recipes prepared fresh every day." },
  { icon: SparklesIcon, title: "Clean & Hygienic Dining", desc: "Maintaining the highest cleanliness standards." },
  { icon: Heart, title: "Friendly Hospitality", desc: "Our staff ensures a comfortable dining experience." },
  { icon: Clock, title: "24 Hour Service", desc: "Perfect for late night cravings and travelers." },
  { icon: Users, title: "Family Friendly", desc: "Spacious seating for families and groups." },
];

const WhyChooseUs = () => (
  <section className="section-padding bg-background">
    <div className="mx-auto max-w-7xl text-center">
      <p className="mb-3 font-body text-sm font-semibold uppercase tracking-widest text-secondary">Why Us</p>
      <h2 className="section-heading mx-auto mb-4">Why Customers Love Krishna Haveli</h2>
      <p className="section-subheading mx-auto mb-12">We go above and beyond to create memorable dining experiences.</p>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {reasons.map((r) => (
          <div key={r.title} className="rounded-2xl border border-border bg-card p-8 text-left shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <r.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 font-display text-xl font-semibold text-foreground">{r.title}</h3>
            <p className="font-body text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
