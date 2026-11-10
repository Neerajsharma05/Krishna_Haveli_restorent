
import { useState, useEffect } from "react";
import { Phone, Navigation, ShoppingBag } from "lucide-react";

const MobileActionBar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show action bar after scrolling 150px
      setIsVisible(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Check initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`
        fixed bottom-0 left-0 right-0 z-50
        flex border-t border-border
        bg-card/95 backdrop-blur-md
        md:hidden
        transition-all duration-500 ease-in-out
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0 pointer-events-none"
        }
      `}
    >
      {/* Call */}
      <a
        href="tel:1234567891"
        className="flex flex-1 flex-col items-center gap-1 py-3 font-body text-xs font-medium text-primary active:scale-95 transition-transform"
      >
        <Phone className="h-5 w-5" />
        Call
      </a>

      {/* Directions */}
      <a
        href="https://maps.google.com/?q=Krishna+Haveli+Restaurant+Sahjanwa"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 flex-col items-center gap-1 py-3 font-body text-xs font-medium text-primary active:scale-95 transition-transform"
      >
        <Navigation className="h-5 w-5" />
        Directions
      </a>

      {/* Order Now */}
      <a
        href="tel:1234567891"
        className="flex flex-1 flex-col items-center gap-1 bg-primary py-3 font-body text-xs font-semibold text-primary-foreground active:scale-95 transition-transform"
      >
        <ShoppingBag className="h-5 w-5" />
        Order Now
      </a>
    </div>
  );
};

export default MobileActionBar;
