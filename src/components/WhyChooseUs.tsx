import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Leaf, IndianRupee, Users, Award, Truck } from "lucide-react";

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reasons = [
    {
      icon: Star,
      title: "4.9★ Customer Rating",
      description: "Exceptional service loved by 136+ happy customers",
      highlight: true,
    },
    {
      icon: Leaf,
      title: "Fresh & Healthy Plants",
      description: "Every plant is nurtured to perfection before delivery",
      highlight: false,
    },
    {
      icon: IndianRupee,
      title: "Affordable Wholesale Pricing",
      description: "Best prices in Chennai for bulk and retail orders",
      highlight: false,
    },
    {
      icon: Users,
      title: "Trusted by 100+ Customers",
      description: "Growing community of plant lovers across Chennai",
      highlight: false,
    },
    {
      icon: Award,
      title: "Expert Guidance",
      description: "Free plant care tips and advice from our experts",
      highlight: false,
    },
    {
      icon: Truck,
      title: "Easy Pickup",
      description: "Conveniently located just 22 mins away from you",
      highlight: false,
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-primary text-primary-foreground" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary-foreground/70 font-medium text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-2 mb-4">
            The Oxygen Forest Difference
          </h2>
          <p className="text-primary-foreground/80 text-lg">
            We don't just sell plants — we help you create your own green sanctuary.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
                reason.highlight
                  ? "bg-primary-foreground text-primary"
                  : "bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
              }`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                  reason.highlight ? "bg-primary/10" : "bg-primary-foreground/10"
                }`}
              >
                <reason.icon
                  className={`w-7 h-7 ${
                    reason.highlight ? "text-primary" : "text-primary-foreground"
                  }`}
                />
              </div>
              <h3
                className={`font-display text-xl font-semibold mb-2 ${
                  reason.highlight ? "text-primary" : "text-primary-foreground"
                }`}
              >
                {reason.title}
              </h3>
              <p
                className={
                  reason.highlight
                    ? "text-primary/70"
                    : "text-primary-foreground/70"
                }
              >
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
