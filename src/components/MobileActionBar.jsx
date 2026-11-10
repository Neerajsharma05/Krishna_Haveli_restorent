import { Phone, Navigation, ShoppingBag } from "lucide-react";

const MobileActionBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-border bg-card/95 backdrop-blur-md md:hidden">
    <a href="tel:1234567891" className="flex flex-1 flex-col items-center gap-1 py-3 font-body text-xs font-medium text-primary">
      <Phone className="h-5 w-5" />
      Call
    </a>
    <a href="https://maps.google.com/?q=Krishna+Haveli+Restaurant+Sahjanwa" target="_blank" rel="noopener noreferrer" className="flex flex-1 flex-col items-center gap-1 py-3 font-body text-xs font-medium text-primary">
      <Navigation className="h-5 w-5" />
      Directions
    </a>
    <a href="tel:1234567891" className="flex flex-1 flex-col items-center gap-1 bg-primary py-3 font-body text-xs font-semibold text-primary-foreground">
      <ShoppingBag className="h-5 w-5" />
      Order Now
    </a>
  </div>
);

export default MobileActionBar;
