import { Leaf, Facebook, Instagram, Twitter, Youtube, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Our Plants", href: "#plants" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Reviews", href: "#reviews" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const plantCategories = [
    "Indoor Plants",
    "Outdoor Plants",
    "Gift Plants",
    "Oxygen Plants",
    "Wholesale Plants",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">Oxygen Forest</h3>
                <p className="text-xs text-primary-foreground/70 -mt-1">Gift Plants</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Premium gift plants and wholesale nursery in Chennai. Bringing nature's 
              beauty and fresh oxygen into your home.
            </p>
            <p className="font-display text-xl italic text-primary-foreground/90">
              "Grow Green, Live Clean"
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Plant Categories */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Our Plants</h4>
            <ul className="space-y-3">
              {plantCategories.map((category) => (
                <li key={category}>
                  <a
                    href="#plants"
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Get in Touch</h4>
            <div className="space-y-3 text-primary-foreground/80 mb-6">
              <p>18, Prakasam Rd, Valasaravakkam</p>
              <p>Chennai – 600087</p>
              <a href="tel:+919444146869" className="block hover:text-primary-foreground">
                +91 94441 46869
              </a>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-primary-foreground/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Oxygen Forest Gift Plants. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-terracotta fill-terracotta" /> in Chennai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
