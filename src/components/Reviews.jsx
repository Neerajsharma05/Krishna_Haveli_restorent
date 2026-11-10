import { Star } from "lucide-react";

const reviews = [
  { text: "Nice place, food taste is very good and service is excellent.", author: "Rajesh K." },
  { text: "Very tasty food and amazing staff. Will definitely come again!", author: "Priya S." },
  { text: "Clean restaurant with great interior and atmosphere. Highly recommended.", author: "Amit V." },
];

const Reviews = () => (
  <section id="reviews" className="section-padding bg-accent">
    <div className="mx-auto max-w-7xl text-center">
      <p className="mb-3 font-body text-sm font-semibold uppercase tracking-widest text-secondary">Testimonials</p>
      <h2 className="section-heading mx-auto mb-2">What Our Guests Say</h2>
      <div className="mx-auto mb-12 flex items-center justify-center gap-3">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4].map((i) => (
            <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
          ))}
          <Star className="h-5 w-5 text-secondary" />
        </div>
        <span className="font-body text-sm text-muted-foreground">4.0 Rating · 668 Reviews</span>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {reviews.map((r, i) => (
          <div key={i} className="rounded-2xl border border-border bg-card p-8 text-left shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} className="h-4 w-4 fill-secondary text-secondary" />
              ))}
            </div>
            <p className="mb-6 font-body text-base italic leading-relaxed text-foreground">"{r.text}"</p>
            <p className="font-body text-sm font-semibold text-muted-foreground">— {r.author}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;
