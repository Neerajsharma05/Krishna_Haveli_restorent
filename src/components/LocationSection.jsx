import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const LocationSection = () => (
  <section id="location" className="section-padding bg-accent">
    <div className="mx-auto max-w-7xl">
      <div className="text-center">
        <p className="mb-3 font-body text-sm font-semibold uppercase tracking-widest text-secondary">Find Us</p>
        <h2 className="section-heading mx-auto mb-12">Visit Krishna Haveli Restaurant</h2>
      </div>
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl shadow-lg">
          <iframe
            title="Krishna Haveli Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.0!2d83.4!3d26.8!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ4JzAwLjAiTiA4M8KwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="flex flex-col justify-center gap-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="mb-1 font-display text-lg font-semibold text-foreground">Address</h3>
              <p className="font-body text-sm text-muted-foreground">NH 27, GIDA Industrial Area Phase 1,<br />Sahjanwa, Uttar Pradesh 273209</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="mb-1 font-display text-lg font-semibold text-foreground">Phone</h3>
              <a href="tel:1234567891" className="font-body text-sm text-primary hover:underline">1234567891</a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="mb-1 font-display text-lg font-semibold text-foreground">Working Hours</h3>
              <p className="font-body text-sm text-muted-foreground">Open 24 Hours</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 pt-4">
            <a href="tel:1234567891" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-body text-sm font-semibold text-primary-foreground transition-transform hover:scale-105">
              <Phone className="h-4 w-4" /> Call Now
            </a>
            <a href="https://maps.google.com/?q=Krishna+Haveli+Restaurant+Sahjanwa" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-body text-sm font-semibold text-secondary-foreground transition-transform hover:scale-105">
              <Navigation className="h-4 w-4" /> Get Directions
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default LocationSection;
