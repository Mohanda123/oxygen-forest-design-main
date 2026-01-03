import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Leaf, Heart, Sparkles, TreeDeciduous } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Leaf,
      title: "Oxygen-Rich Plants",
      description: "Carefully selected plants that purify your air naturally",
    },
    {
      icon: Heart,
      title: "With Love & Care",
      description: "Every plant is nurtured with dedication and expertise",
    },
    {
      icon: Sparkles,
      title: "Premium Quality",
      description: "Healthy, vibrant plants that thrive in your home",
    },
    {
      icon: TreeDeciduous,
      title: "Eco-Friendly",
      description: "Supporting sustainable living and green initiatives",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Growing Green Dreams Since Day One
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              At Oxygen Forest Gift Plants, we believe in the transformative power of nature. 
              Our mission is to bring the beauty and benefits of plants into every home and 
              workspace in Chennai.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              As a trusted wholesale plant nursery, we offer an extensive collection of 
              indoor plants, outdoor plants, and specially curated gift plants. Each plant 
              is selected with care to ensure it brings freshness, beauty, and oxygen-rich 
              air to your space. We're committed to promoting eco-friendly living and 
              helping our community breathe cleaner air.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-primary">136+</div>
                <div className="text-sm text-muted-foreground">Happy Reviews</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Plant Varieties</div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl font-bold text-primary">100+</div>
                <div className="text-sm text-muted-foreground">Trusted Customers</div>
              </div>
            </div>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 card-gradient"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
