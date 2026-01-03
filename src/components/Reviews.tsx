import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const Reviews = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const reviews = [
    {
      name: "Priya Sharma",
      rating: 5,
      text: "Amazing collection of plants! The staff was so helpful in choosing the right plants for my apartment. My monstera is thriving!",
      date: "2 weeks ago",
    },
    {
      name: "Rajesh Kumar",
      rating: 5,
      text: "Best nursery in Chennai for wholesale orders. Got 50 plants for my office at incredible prices. Highly recommend!",
      date: "1 month ago",
    },
    {
      name: "Anitha Rajan",
      rating: 5,
      text: "Bought a gift plant for my mother's birthday. The wrapping was beautiful and the plant was so healthy. She loved it!",
      date: "3 weeks ago",
    },
    {
      name: "Karthik Venkat",
      rating: 5,
      text: "The oxygen plants from here have genuinely improved our home's air quality. Great variety and reasonable prices.",
      date: "1 month ago",
    },
    {
      name: "Meena Sundaram",
      rating: 4,
      text: "Wonderful experience! The team helped me choose low-maintenance plants perfect for beginners. Will visit again.",
      date: "2 months ago",
    },
    {
      name: "Arjun Nair",
      rating: 5,
      text: "Fantastic nursery with beautiful plants. The care tips they shared were so valuable. My garden looks amazing now!",
      date: "1 month ago",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-terracotta fill-terracotta" : "text-muted"
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Customer Reviews
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex gap-1">{renderStars(5)}</div>
            <span className="font-display text-2xl font-bold text-foreground">4.9</span>
            <span className="text-muted-foreground">(136 Reviews)</span>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
              <div className="flex gap-1 mb-4">{renderStars(review.rating)}</div>
              <p className="text-foreground mb-4 leading-relaxed">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">{review.name}</div>
                  <div className="text-sm text-muted-foreground">{review.date}</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display font-semibold text-primary">
                    {review.name.charAt(0)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
