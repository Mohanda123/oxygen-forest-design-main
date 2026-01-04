import { motion } from "framer-motion";
import { Phone, MapPin, Star, Clock, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroPlants from "@/assets/hero-plants.png";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center leaf-pattern overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full mb-6"
            >
              <Star className="w-4 h-4 text-terracotta fill-terracotta" />
              <span className="text-sm font-medium text-secondary-foreground">
                4.9 ⭐ Rating • 136 Reviews
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Bring Nature Home with{" "}
              <span className="text-gradient">Oxygen Forest</span>{" "}
              Gift Plants
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Premium Gift Plants & Wholesale Nursery in Chennai. Fresh, healthy plants
              to purify your air and beautify your space.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button size="lg" asChild className="text-lg px-8">
                <a href="tel:+919444146869" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-8">
                <a
                  href="https://maps.google.com/?q=Oxygen+Forest+Gift+Plants+Chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </a>
              </Button>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg shadow-sm">
                <Clock className="w-4 h-4 text-accent" />
                <span className="text-sm text-foreground">Open Daily • Closes 9:30 PM</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg shadow-sm">
                <MapPin className="w-4 h-4 text-terracotta" />
                <span className="text-sm text-foreground">Low In Price</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-lg shadow-sm">
                <Leaf className="w-4 h-4 text-primary" />
                <span className="text-sm text-foreground">Wholesale Nursery</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src={heroPlants}
                alt="Beautiful indoor plants from Oxygen Forest"
                className="w-full max-w-lg mx-auto drop-shadow-2xl animate-float"
              />
            </div>
            {/* Decorative Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square bg-secondary/50 rounded-full -z-0" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
