const Footer = () => (
  <footer className="bg-foreground px-4 py-12 md:px-8">
    <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
      <div>
        <h3 className="mb-3 font-display text-xl font-bold text-primary-foreground">Krishna Haveli</h3>
        <p className="font-body text-sm leading-relaxed text-primary-foreground/60">
          At Krishna Haveli, we take pride in being Sahjanwa’s most trusted North Indian restaurant.
          <br/> With flavors rooted in tradition and service available 24/7, 
          <br/> we’re here to delight your taste buds any time of dayThe most trusted North Indian restaurant in Sahjanwa — serving delicious food 24 hours.
        </p>
      </div>
      <div>
        <h4 className="mb-3 font-body text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">Quick Links</h4>
        <div className="flex flex-col gap-2">
          {["Home", "About", "Menu", "Gallery", "Reviews", "Contact"].map((l) => (
            <a key={l} href={`#${l.toLowerCase() === "home" ? "hero" : l.toLowerCase() === "contact" ? "location" : l.toLowerCase()}`} className="font-body text-sm text-primary-foreground/60 transition-colors hover:text-secondary">
              {l}
            </a>
          ))}
        </div>
      </div>
      <div>
        <h4 className="mb-3 font-body text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">Contact</h4>
        <div className="space-y-2 font-body text-sm text-primary-foreground/60">
          <p>📞 1234567891</p>
          <p>📍 NH 27, GIDA Industrial Area Phase 1, Sahjanwa, UP 273209</p>
          <p>🕒 Open 24 Hours</p>
          <p>⭐ 4.0 Rating (668 Reviews)</p>
        </div>
      </div>
    </div>
    <div className="mx-auto mt-10 max-w-7xl border-t border-primary-foreground/10 pt-6 text-center">
      <p className="font-body text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} Krishna Haveli Restaurant – Gorakhpur. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
