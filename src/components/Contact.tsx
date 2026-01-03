import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      content: "18, Prakasam Rd, Janaki Nagar, Alwartirunagar, Valasaravakkam, Chennai – 600087",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 94441 46869",
      link: "tel:+919444146869",
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Open Daily • Closes at 9:30 PM",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Visit Our Nursery
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              We'd love to welcome you to our nursery! Come explore our beautiful 
              collection of plants and get expert advice on plant care.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.content}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <a href="tel:+919444146869" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://maps.google.com/?q=Oxygen+Forest+Gift+Plants+Chennai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8376774261!2d80.16844431531908!3d13.045196416778755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52616dc50cf7db%3A0x8bf0c2456e93f32a!2sValasaravakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600087!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Oxygen Forest Gift Plants Location"
              />
            </div>
            {/* Map Overlay Card */}
            <div className="absolute bottom-4 left-4 right-4 bg-card p-4 rounded-xl shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground">Oxygen Forest Gift Plants</p>
                  <p className="text-sm text-muted-foreground">Vist And Collect </p>
                </div>
                <Button size="sm" asChild>
                  <a
                    href="https://maps.google.com/?q=Oxygen+Forest+Gift+Plants+Chennai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open Map
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
