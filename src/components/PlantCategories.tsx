import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import plantIndoor from "@/assets/plant-indoor.png";
import plantOutdoor from "@/assets/plant-outdoor.png";
import plantGift from "@/assets/plant-gift.png";
import plantOxygen from "@/assets/plant-oxygen.png";
import plantWholesale from "@/assets/plant-wholesale.png";

const PlantCategories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    {
      title: "Indoor Plants",
      description: "Beautiful plants that thrive indoors and purify your air",
      image: plantIndoor,
      color: "from-primary/20 to-accent/10",
      slug: "indoor",
    },
    {
      title: "Outdoor Plants",
      description: "Hardy plants perfect for gardens, balconies, and patios",
      image: plantOutdoor,
      color: "from-terracotta/20 to-primary/10",
      slug: "outdoor",
    },
    {
      title: "Gift Plants",
      description: "Elegantly wrapped plants for every special occasion",
      image: plantGift,
      color: "from-accent/20 to-secondary",
      slug: "gift",
    },
    {
      title: "Oxygen Plants",
      description: "Air-purifying plants that boost oxygen levels naturally",
      image: plantOxygen,
      color: "from-primary/20 to-accent/20",
      slug: "oxygen",
    },
    {
      title: "Wholesale Plants",
      description: "Bulk orders at competitive prices for businesses",
      image: plantWholesale,
      color: "from-earth/10 to-secondary",
      slug: "wholesale",
    },
  ];

  return (
    <section id="plants" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Collection
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Explore Our Plants
          </h2>
          <p className="text-muted-foreground text-lg">
            From elegant indoor plants to vibrant outdoor varieties, find the perfect 
            green companion for every space.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link to={`/plants/${category.slug}`} key={category.title}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${category.color} p-8 cursor-pointer hover:shadow-2xl transition-all duration-500 h-full ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Image */}
                <div className="relative h-48 mb-6 flex items-center justify-center">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-full w-auto object-contain transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-4 transition-all">
                    Explore Collection
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlantCategories;
