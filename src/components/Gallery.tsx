import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import plantIndoor from "@/assets/plant-indoor.png";
import plantOutdoor from "@/assets/plant-outdoor.png";
import plantGift from "@/assets/plant-gift.png";
import plantOxygen from "@/assets/plant-oxygen.png";
import plantWholesale from "@/assets/plant-wholesale.png";
import heroPlants from "@/assets/hero-plants.png";

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const images = [
    { src: heroPlants, alt: "Premium plant collection", span: "col-span-2 row-span-2" },
    { src: plantIndoor, alt: "Indoor monstera plant", span: "" },
    { src: plantOxygen, alt: "Oxygen-producing areca palm", span: "" },
    { src: plantOutdoor, alt: "Outdoor flowering plants", span: "" },
    { src: plantGift, alt: "Gift wrapped plants", span: "" },
    { src: plantWholesale, alt: "Wholesale nursery", span: "col-span-2" },
  ];

  return (
    <section id="gallery" className="py-24" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Gallery
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            Our Beautiful Plants
          </h2>
          <p className="text-muted-foreground text-lg">
            Take a glimpse at our lush collection of plants ready to find their new home.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl bg-secondary group cursor-pointer ${image.span}`}
            >
              <div className="aspect-square w-full h-full flex items-center justify-center p-4 md:p-8">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-primary-foreground font-medium text-sm">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
