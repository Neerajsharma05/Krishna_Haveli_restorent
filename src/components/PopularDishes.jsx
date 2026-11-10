
import { useState, useEffect, useRef } from "react";

import dalMakhani from "@/assets/dal-makhani.jpg";
import chickenBiryani from "@/assets/chicken-biryani.jpg";
import paneerAngara from "@/assets/paneer-angara.jpg";
import thali from "@/assets/north-indian-thali.jpg";
import butterChicken from "@/assets/butter-chicken.jpg";
import shahiPaneer from "@/assets/shahi-paneer.jpg";
import kadaiPaneer from "@/assets/kadai-paneer.jpg";
import paneerTikka from "@/assets/paneer-tikka.jpg";
import malaiKofta from "@/assets/malai-kofta.jpg";
import choleBhature from "@/assets/chole-bhature.jpg";
import rajmaChawal from "@/assets/rajma-chawal.jpg";
import palakPaneer from "@/assets/palak-paneer.jpg";
import chickenTikka from "@/assets/chicken-tikka.jpg";
import tandooriChicken from "@/assets/tandoori-chicken.jpg";
import muttonCurry from "@/assets/mutton-curry.jpg";
import fishCurry from "@/assets/fish-curry.jpg";
import chickenKorma from "@/assets/chicken-korma.jpg";
import garlicNaan from "@/assets/garlic-naan.jpg";
import butterNaan from "@/assets/butter-naan.jpg";
import tandooriRoti from "@/assets/tandoori-roti.jpg";
import lacchaParatha from "@/assets/laccha-paratha.jpg";
import jeeraRice from "@/assets/jeera-rice.jpg";
import vegPulao from "@/assets/veg-pulao.jpg";
import chickenFriedRice from "@/assets/chicken-fried-rice.jpg";
import samosa from "@/assets/samosa.jpg";
import paneerPakora from "@/assets/paneer-pakora.jpg";
import haraBharaKebab from "@/assets/hara-bhara-kebab.jpg";
import springRoll from "@/assets/spring-roll.jpg";
import gulabJamun from "@/assets/gulab-jamun.jpg";
import rasmalai from "@/assets/rasmalai.jpg";
import gajarHalwa from "@/assets/gajar-ka-halwa.jpg";
import kheer from "@/assets/rice-kheer.jpg";
// import lassi from "@/assets/sweet-lassi.jpg";
import masalaChaas from "@/assets/masala-chaas.jpg";
import masalaTea from "@/assets/masala-tea.jpg";
import coldCoffee from "@/assets/cold-coffee.jpg";

const additionalDishes = [
  // Main Course - Vegetarian
  {
    name: "Shahi Paneer",
    desc: "Soft paneer cubes cooked in a rich creamy tomato and cashew gravy.",
    img: shahiPaneer,
  },
  {
    name: "Kadai Paneer",
    desc: "Fresh paneer tossed with capsicum, onions and aromatic kadai spices.",
    img: kadaiPaneer,
  },
  {
    name: "Malai Kofta",
    desc: "Delicate vegetable and paneer dumplings served in a silky malai gravy.",
    img: malaiKofta,
  },
  {
    name: "Palak Paneer",
    desc: "Fresh cottage cheese cooked in a flavorful spinach gravy.",
    img: palakPaneer,
  },
  {
    name: "Chole Bhature",
    desc: "Spicy Punjabi chickpea curry served with fluffy fried bhature.",
    img: choleBhature,
  },
  {
    name: "Rajma Chawal",
    desc: "Traditional kidney bean curry served with steamed basmati rice.",
    img: rajmaChawal,
  },

  // Main Course - Non Vegetarian
  {
    name: "Butter Chicken",
    desc: "Tender chicken pieces simmered in a buttery tomato-based gravy.",
    img: butterChicken,
  },
  {
    name: "Chicken Tikka",
    desc: "Juicy chicken chunks marinated in spices and grilled in a tandoor.",
    img: chickenTikka,
  },
  {
    name: "Tandoori Chicken",
    desc: "Classic roasted chicken marinated with yogurt and Indian spices.",
    img: tandooriChicken,
  },
  {
    name: "Mutton Curry",
    desc: "Slow-cooked tender mutton in a traditional aromatic Indian gravy.",
    img: muttonCurry,
  },
  {
    name: "Fish Curry",
    desc: "Fresh fish cooked in a deliciously spiced traditional curry.",
    img: fishCurry,
  },
  {
    name: "Chicken Korma",
    desc: "Rich and mildly spiced chicken curry with creamy nut-based gravy.",
    img: chickenKorma,
  },

  // Starters
  {
    name: "Paneer Tikka",
    desc: "Marinated paneer cubes grilled with onions and bell peppers.",
    img: paneerTikka,
  },
  {
    name: "Samosa",
    desc: "Crispy golden pastry filled with spiced potatoes and peas.",
    img: samosa,
  },
  {
    name: "Paneer Pakora",
    desc: "Soft paneer slices coated in seasoned gram flour and deep-fried.",
    img: paneerPakora,
  },
  {
    name: "Hara Bhara Kebab",
    desc: "Crispy vegetarian kebabs made with spinach, peas and potatoes.",
    img: haraBharaKebab,
  },
  {
    name: "Spring Roll",
    desc: "Crunchy rolls filled with seasoned vegetables and served with dip.",
    img: springRoll,
  },

  // Breads
  {
    name: "Garlic Naan",
    desc: "Soft tandoor-baked naan topped with fresh garlic and butter.",
    img: garlicNaan,
  },
  {
    name: "Butter Naan",
    desc: "Classic fluffy naan brushed generously with melted butter.",
    img: butterNaan,
  },
  {
    name: "Tandoori Roti",
    desc: "Traditional whole wheat flatbread baked in a clay oven.",
    img: tandooriRoti,
  },
  {
    name: "Laccha Paratha",
    desc: "Crispy layered Indian flatbread cooked with a touch of ghee.",
    img: lacchaParatha,
  },

  // Rice
  {
    name: "Jeera Rice",
    desc: "Fluffy basmati rice tempered with cumin seeds and ghee.",
    img: jeeraRice,
  },
  {
    name: "Veg Pulao",
    desc: "Fragrant basmati rice cooked with fresh vegetables and spices.",
    img: vegPulao,
  },
  {
    name: "Chicken Fried Rice",
    desc: "Stir-fried rice tossed with chicken, vegetables and savory spices.",
    img: chickenFriedRice,
  },

  // Desserts
  {
    name: "Gulab Jamun",
    desc: "Soft milk-solid dumplings soaked in fragrant sugar syrup.",
    img: gulabJamun,
  },
  {
    name: "Rasmalai",
    desc: "Soft cottage cheese dumplings soaked in chilled saffron milk.",
    img: rasmalai,
  },
  {
    name: "Gajar Ka Halwa",
    desc: "Traditional slow-cooked carrot pudding garnished with dry fruits.",
    img: gajarHalwa,
  },
  {
    name: "Rice Kheer",
    desc: "Creamy rice pudding flavored with cardamom and dry fruits.",
    img: kheer,
  },

  {
    name: "Masala Chaas",
    desc: "Cooling buttermilk blended with roasted cumin and fresh herbs.",
    img: masalaChaas,
  },
  {
    name: "Masala Tea",
    desc: "Traditional Indian tea brewed with aromatic spices and milk.",
    img: masalaTea,
  },
  {
    name: "Cold Coffee",
    desc: "Chilled creamy coffee blended with milk and a hint of sweetness.",
    img: coldCoffee,
  },
];



const dishes = [
  {
    name: "Dal Makhani",
    desc: "Creamy slow-cooked lentils with authentic Indian spices.",
    img: dalMakhani,
  },
  {
    name: "Chicken Biryani",
    desc: "Aromatic basmati rice with perfectly cooked chicken.",
    img: chickenBiryani,
  },
  {
    name: "Paneer Angara",
    desc: "Rich smoky paneer curry loved by vegetarians.",
    img: paneerAngara,
  },
  {
    name: "North Indian Thali",
    desc: "A complete traditional meal with fresh breads and curries.",
    img: thali,
  },
];

const PopularDishes = () => {
  const [showFullMenu, setShowFullMenu] = useState(false);
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  // Display menu items
  const allDishes = [...dishes, ...additionalDishes];
  const visibleDishes = showFullMenu ? allDishes : dishes;

  const toggleMenu = () => {
    if (showFullMenu) {
      // Collapsing: scroll back to the top of the section
      setShowFullMenu(false);
      sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      setShowFullMenu(true);
    }
  };

  // Lazy load images using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.dataset.src;
            if (src) {
              img.src = src;
              img.classList.remove("opacity-0");
              img.classList.add("opacity-100");
              img.classList.add("transition-opacity", "duration-700", "ease-in-out");
            }
            observer.unobserve(img);
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleDishes]);

  return (
    <section id="menu" ref={sectionRef} className="section-padding bg-accent">
      <div className="mx-auto max-w-7xl text-center">

        <p className="mb-3 font-body text-sm font-semibold uppercase tracking-widest text-secondary">
          Our Specialties
        </p>

        <h2 className="section-heading mx-auto mb-4">
          Popular Dishes
        </h2>

        <p className="section-subheading mx-auto mb-12">
          Handcrafted recipes passed down through generations,
          prepared fresh every day.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {visibleDishes.map((dish, index) => (
            <div
              key={`${dish.name}-${index}`}
              ref={(el) => (itemRefs.current[index] = el)}
              className="group overflow-hidden rounded-2xl bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 opacity-0 translate-y-4"
              style={{
                animation: `fadeUp 0.6s ease-out forwards`,
                animationDelay: `${Math.min(index * 50, 300)}ms`,
              }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  data-src={dish.img}
                  alt={dish.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-0"
                  loading="lazy"
                />
              </div>

              <div className="p-5 text-left">
                <h3 className="mb-1 font-display text-lg font-semibold text-foreground">
                  {dish.name}
                </h3>

                <p className="font-body text-sm text-muted-foreground">
                  {dish.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={toggleMenu}
          className="mt-12 inline-flex items-center gap-2 rounded-lg bg-secondary px-8 py-4 font-body text-base font-semibold text-secondary-foreground shadow-md transition-transform hover:scale-105"
        >
          {showFullMenu ? "Show Less" : "View Full Menu"}
        </button>

      </div>
    </section>
  );
};

export default PopularDishes;
