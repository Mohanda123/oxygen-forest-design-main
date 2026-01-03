import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import MoneyPlant from "@/assets/money-plant.jpg";
import SnakePlant from "@/assets/snake-plant.jpg";
import PeacelillyPlant from "@/assets/peacelilly-plant.jpg";
import SpiderPlant from "@/assets/spider-plant.jpg";
import PothosPlant from "@/assets/pothos-plant.jpg";
import RubberPlant from "@/assets/rubber-plant.jpg";
import ZZPlant from "@/assets/zz-plant.jpg";
import PhilodendronPlant from "@/assets/Philodendron-plant.jpg";


const plantData = {
  indoor: {
    title: "Indoor Plants",
    description: "Beautiful plants that thrive indoors and purify your air",
    plants: [
      { name: "Money Plant", price: "₹150", care: "Low maintenance", image: MoneyPlant },
      { name: "Snake Plant", price: "₹250", care: "Very easy", image: SnakePlant },
      { name: "Peace Lily", price: "₹350", care: "Moderate", image: PeacelillyPlant },
      { name: "Spider Plant", price: "₹180", care: "Easy", image: SpiderPlant },
      { name: "Pothos", price: "₹120", care: "Very easy", image: PothosPlant },
      { name: "Rubber Plant", price: "₹400", care: "Moderate", image: RubberPlant },
      { name: "ZZ Plant", price: "₹450", care: "Very easy", image: ZZPlant },
      { name: "Philodendron", price: "₹280", care: "Easy", image: PhilodendronPlant },
    ],
  },
  outdoor: {
    title: "Outdoor Plants",
    description: "Hardy plants perfect for gardens, balconies, and patios",
    plants: [
      { name: "Hibiscus", price: "₹200", care: "Moderate", image: "https://images.unsplash.com/photo-1567991722999-74f27f53f33a?w=600" },
      { name: "Bougainvillea", price: "₹350", care: "Easy", image: "https://images.unsplash.com/photo-1728110400947-32db09f89054?q=80" },
      { name: "Jasmine", price: "₹180", care: "Moderate", image: "https://images.unsplash.com/photo-1699864387424-adb0f985ce46?w=600" },
      { name: "Rose Plant", price: "₹250", care: "Moderate", image: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?w=400" },
      { name: "Marigold", price: "₹80", care: "Easy", image: "https://images.unsplash.com/photo-1696324635500-10785ee184b5?w=600" },
      { name: "Croton", price: "₹300", care: "Moderate", image: "https://images.unsplash.com/photo-1657082136162-04169bd5bff1?w=600" },
      { name: "Palm Tree", price: "₹800", care: "Easy", image: "https://plus.unsplash.com/premium_photo-1677354136613-4017778ccfad?w=600" },
      { name: "Fern", price: "₹150", care: "Moderate", image: "https://images.unsplash.com/photo-1638324781201-ef28ac131886?w=600" },
    ],
  },
  gift: {
    title: "Gift Plants",
    description: "Elegantly wrapped plants for every special occasion",
    plants: [
      { name: "Lucky Bamboo", price: "₹299", care: "Very easy", image: "https://images.unsplash.com/photo-1567331711402-509c12c41959?w=400" },
      { name: "Jade Plant", price: "₹350", care: "Easy", image: "https://images.unsplash.com/photo-1616189596748-20a7a4687a62?w=600" },
      { name: "Bonsai Tree", price: "₹999", care: "Expert", image: "https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=400" },
      { name: "Orchid", price: "₹599", care: "Moderate", image: "https://images.unsplash.com/photo-1618080578815-335456280012?w=600" },
      { name: "Succulent Set", price: "₹450", care: "Very easy", image: "https://images.unsplash.com/photo-1754952166964-7b7def2dfca7?w=600" },
      { name: "Anthurium", price: "₹550", care: "Moderate", image: "https://images.unsplash.com/photo-1685501423324-b09cf9b1ef89?w=600" },
      { name: "Money Tree", price: "₹750", care: "Easy", image: "https://images.unsplash.com/photo-1621552330975-f5f9c85dc9c9?w=600" },
      { name: "Terrarium", price: "₹899", care: "Easy", image: "https://images.unsplash.com/photo-1608718119004-04dcc9426902?w=600" },
    ],
  },
  oxygen: {
    title: "Oxygen Plants",
    description: "Air-purifying plants that boost oxygen levels naturally",
    plants: [
      { name: "Areca Palm", price: "₹500", care: "Moderate", image: "https://plus.unsplash.com/premium_photo-1672998159540-0a3f849fe3c6?w=600" },
      { name: "Aloe Vera", price: "₹180", care: "Very easy", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=600" },
      { name: "Boston Fern", price: "₹350", care: "Moderate", image: "https://images.unsplash.com/photo-1526744603200-a2792eb71ed6?w=600" },
      { name: "Bamboo Palm", price: "₹600", care: "Easy", image: "https://plus.unsplash.com/premium_photo-1675006717262-a8f9aed248a3?w=600" },
      { name: "Gerbera Daisy", price: "₹200", care: "Moderate", image: "https://images.unsplash.com/photo-1662320686306-db0a621c569b?q=80" },
      { name: "Chinese Evergreen", price: "₹400", care: "Easy", image: "https://images.unsplash.com/photo-1568151492546-1db658d0fc42?w=600" },
      { name: "Dracaena", price: "₹450", care: "Easy", image: "https://images.unsplash.com/photo-1612363066736-a4a933de2cab?w=600" },
      { name: "English Ivy", price: "₹250", care: "Moderate", image: "https://images.unsplash.com/photo-1644020274212-610857aacc53?w=600" },
    ],
  },
  wholesale: {
    title: "Wholesale Plants",
    description: "Bulk orders at competitive prices for businesses",
    plants: [
      { name: "Mixed Indoor Pack (10)", price: "₹1,500", care: "Varies", image: "https://images.unsplash.com/photo-1701270631257-591a42b226d1?w=600" },
      { name: "Succulent Tray (20)", price: "₹2,000", care: "Very easy", image: "https://images.unsplash.com/photo-1710383855743-02c9fa38e1ef?w=600" },
      { name: "Office Plants (15)", price: "₹3,500", care: "Easy", image: "https://images.unsplash.com/photo-1756635752022-3f9329d9af1a?w=600" },
      { name: "Garden Starter Kit", price: "₹2,500", care: "Moderate", image: "https://images.unsplash.com/photo-1746875459012-65fd19502db0?w=600" },
      { name: "Event Decoration Set", price: "₹5,000", care: "Varies", image: "https://images.unsplash.com/photo-1728450136818-f1f180a22cfc?w=600" },
      { name: "Corporate Gift Pack", price: "₹4,500", care: "Easy", image: "https://images.unsplash.com/photo-1463320898484-cdee8141c787?w=400" },
      { name: "Nursery Starter (50)", price: "₹8,000", care: "Varies", image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=400" },
      { name: "Landscaping Bundle", price: "₹12,000", care: "Moderate", image: "https://images.unsplash.com/photo-1558293842-c0fd3db86157?w=400" },
    ],
  },
};

const PlantCategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const categoryData = plantData[category as keyof typeof plantData];

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Category not found</h1>
          <Link to="/">
            <Button>Go Back Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link to="/#plants">
            <Button variant="ghost" className="mb-6 text-primary hover:text-primary/80">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Categories
            </Button>
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {categoryData.title}
            </h1>
            <p className="text-muted-foreground text-lg">{categoryData.description}</p>
          </motion.div>

          {/* Plants Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryData.plants.map((plant, index) => (
              <motion.div
                key={plant.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">
                    {plant.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">Care: {plant.care}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold text-xl">{plant.price}</span>
                    <a href="tel:+919444146869">
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        <Phone className="w-4 h-4 mr-1" />
                        Enquire
                      </Button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 sm:p-12"
          >
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Our plant experts are here to help you find the perfect plants for your space. 
              Contact us for personalized recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+919444146869">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
              <a
                href="https://wa.me/919444146869?text=Hi! I'm interested in your plants."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default PlantCategoryPage;
