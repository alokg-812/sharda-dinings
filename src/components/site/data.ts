import type { LucideIcon } from "lucide-react";
import {
  Utensils, Users, Wallet, Soup, Salad, ConciergeBell, Zap, Armchair,
  ChefHat, Sparkles, Cake, PartyPopper, DoorOpen, ShoppingBag, Truck,
  Sun, Sunrise, Moon, Coffee, IceCream, Leaf, Drumstick, Baby, ParkingCircle,
  Accessibility, PhoneOff, CalendarCheck, Car,
} from "lucide-react";

export type Food = {
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
};

export const foods: Food[] = [
  {
    name: "Afghani Chicken",
    description: "Juicy chicken marinated in creamy spices and grilled to perfection in the tandoor.",
    price: "₹340",
    image: "/assets/foods/afghani-chicken.jpg",
    category: "Tandoor"
  },

  {
    name: "Chhole with Naan & Kulche",
    description: "Authentic Punjabi chhole served with freshly baked butter naan and soft kulchas.",
    price: "₹300",
    image: "/assets/foods/chhole-naan-and-kulche.jpg",
    category: "North Indian"
  },

  {
    name: "Chicken 65",
    description: "Crispy fried chicken tossed with aromatic South Indian spices and curry leaves.",
    price: "₹330",
    image: "/assets/foods/chicken-65.jpg",
    category: "Chinese"
  },

  {
    name: "Chicken Momos",
    description: "Steamed chicken dumplings served with spicy Schezwan chutney.",
    price: "₹220",
    image: "/assets/foods/chicken-momos.jpg",
    category: "Snacks"
  },

  {
    name: "Chicken Tandoori",
    description: "Classic tandoori chicken marinated overnight and charcoal grilled.",
    price: "₹290",
    image: "/assets/foods/chicken-tandoori.jpg",
    category: "Tandoor"
  },

  {
    name: "Chilli Paneer",
    description: "Crispy cottage cheese tossed with onions, capsicum and spicy Indo-Chinese sauce.",
    price: "₹320",
    image: "/assets/foods/chilli-paneer.jpg",
    category: "Chinese"
  },

  {
    name: "Chocolate Shake",
    description: "Rich chocolate milkshake blended with creamy ice cream for a delightful treat.",
    price: "₹130",
    image: "/assets/foods/chocolate-shake.jpg",
    category: "Beverages"
  },

  {
    name: "Cappuccino",
    description: "Freshly brewed espresso topped with velvety milk foam.",
    price: "₹90",
    image: "/assets/foods/coffe-cappuccino.jpg",
    category: "Hot Coffee"
  },

  {
    name: "Cold Coffee",
    description: "Refreshing chilled coffee blended with milk and ice cream.",
    price: "₹140",
    image: "/assets/foods/cold-coffee.jpg",
    category: "Cold Coffee"
  },

  {
    name: "Crispy Honey Chilli Potato",
    description: "Golden fried potato fingers glazed with honey, garlic and chilli sauce.",
    price: "₹270",
    image: "/assets/foods/crispy-honey-chilli-potato.jpg",
    category: "Chinese"
  },

  {
    name: "Crispy Veg Burger",
    description: "Crunchy vegetable patty layered with fresh veggies and creamy sauces.",
    price: "₹180",
    image: "/assets/foods/crispy-veg-burger.jpg",
    category: "Fast Food"
  },

  {
    name: "Irish Coffee",
    description: "Smooth coffee infused with a rich Irish flavour, served chilled.",
    price: "₹150",
    image: "/assets/foods/irish-coffee.jpg",
    category: "Cold Coffee"
  },

  {
    name: "Paneer Lababdar with Butter Naan",
    description: "Soft paneer cubes cooked in a creamy tomato-cashew gravy, served with butter naan.",
    price: "₹320",
    image: "/assets/foods/paneer-lababdar.jpg",
    category: "North Indian"
  },

  {
    name: "Sandwich & Pasta Combo",
    description: "A satisfying combo of grilled sandwich paired with creamy pasta.",
    price: "₹280",
    image: "/assets/foods/sandwich-and-pasta-combo.jpg",
    category: "Fast Food"
  },

  {
    name: "Schezwan Chowmein",
    description: "Wok-tossed noodles cooked in spicy Schezwan sauce with fresh vegetables.",
    price: "₹290",
    image: "/assets/foods/schezwan-chowein.jpg",
    category: "Chinese"
  },

  {
    name: "Veg Spring Roll",
    description: "Crispy golden spring rolls stuffed with seasoned vegetables.",
    price: "₹270",
    image: "/assets/foods/veg-spring-roll.jpg",
    category: "Chinese"
  },

  {
    name: "Virgin Mojito",
    description: "Refreshing blend of mint leaves, lime, soda and crushed ice.",
    price: "₹170",
    image: "/assets/foods/virgin-mojito.jpg",
    category: "Mocktails"
  }
];

export const menuImages: string[] = [
  "/assets/menu/menu1.jpg",
  "/assets/menu/menu2.jpg",
  "/assets/menu/menu3.jpg",
  "/assets/menu/menu4.jpg",
  "/assets/menu/menu5.jpg",
  "/assets/menu/menu6.jpg",
];

export const galleryImages: string[] = [
  "/assets/gallery/gallery1.jpg",
  "/assets/gallery/gallery2.jpg",
  "/assets/gallery/gallery3.jpg",
  "/assets/gallery/gallery4.jpg",
  "/assets/gallery/gallery5.jpg",
  "/assets/gallery/gallery6.jpg",
  "/assets/gallery/gallery7.jpg",
  "/assets/gallery/gallery8.jpg",
  "/assets/gallery/gallery9.jpg",
];

export const aboutCards: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Salad, title: "Fresh Ingredients", text: "Sourced daily from trusted local farms and markets." },
  { icon: Users, title: "Family Friendly", text: "Warm, welcoming space designed for every generation." },
  { icon: Wallet, title: "Pocket Friendly", text: "Luxury dining that respects your budget." },
  { icon: Utensils, title: "North Indian Cuisine", text: "Authentic tandoor, curries and biryanis." },
  { icon: Soup, title: "Chinese Cuisine", text: "Indo-Chinese wok classics with bold flavours." },
  { icon: ConciergeBell, title: "Professional Hospitality", text: "Attentive service that anticipates every need." },
  { icon: Zap, title: "Quick Service", text: "Piping hot plates delivered without the wait." },
  { icon: Armchair, title: "Comfortable Ambience", text: "Warm lighting and plush seating for every mood." },
];

export const whyChoose: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Salad, title: "Fresh Ingredients", text: "Farm-fresh produce, every single plate." },
  { icon: ChefHat, title: "Expert Chefs", text: "Decades of craft behind every recipe." },
  { icon: Sparkles, title: "Luxury Ambience", text: "Golden lighting and elegant interiors." },
  { icon: Zap, title: "Fast Service", text: "Warm plates in minutes, never rushed." },
  { icon: Cake, title: "Birthday Parties", text: "Cakes, décor and unforgettable moments." },
  { icon: Users, title: "Family Gatherings", text: "Long tables built for laughter." },
  { icon: PartyPopper, title: "Private Dining", text: "Curated evenings, only for your guests." },
  { icon: ShoppingBag, title: "Takeaway", text: "The Sharda experience, at home." },
  { icon: Truck, title: "Delivery", text: "Hot and fresh, delivered to your door." },
];

export const specialServices: { icon: LucideIcon; title: string }[] = [
  { icon: Users, title: "Family Dining" },
  { icon: Cake, title: "Birthday Parties" },
  { icon: CalendarCheck, title: "Corporate Events" },
  { icon: ShoppingBag, title: "Takeaway" },
  { icon: Truck, title: "Delivery" },
  { icon: PartyPopper, title: "Private Dining" },
  { icon: Sun, title: "Rooftop Seating" },
];

export const services: { icon: LucideIcon; title: string }[] = [
  { icon: Utensils, title: "Dine In" },
  { icon: ShoppingBag, title: "Takeaway" },
  { icon: Truck, title: "Delivery" },
  { icon: PhoneOff, title: "No Contact Delivery" },
  { icon: CalendarCheck, title: "Reservations" },
  { icon: Sunrise, title: "Breakfast" },
  { icon: Sun, title: "Lunch" },
  { icon: Moon, title: "Dinner" },
  { icon: Coffee, title: "Coffee" },
  { icon: IceCream, title: "Desserts" },
  { icon: Leaf, title: "Vegetarian" },
  { icon: Drumstick, title: "Non Vegetarian" },
  { icon: Baby, title: "Kids Menu" },
  { icon: ParkingCircle, title: "Free Parking" },
  { icon: Accessibility, title: "Wheelchair Accessible" },
];

export const reviews = [
  { name: "Khalid Khan", text: "I had a wonderful experience at Sharda Dinings. Delicious food, clean restaurant, pleasant atmosphere and excellent hospitality." },
  { name: "Mahendra Sahani", text: "The ambiance is beautiful and food quality is excellent." },
  { name: "Bharath Gulaganji", text: "The malai chicken, biryani and harabara chicken were amazing." },
  { name: "Arunima Patel", text: "The staff was polite and the food was delicious." },
  { name: "Prasoon Tripathi", text: "I celebrated my birthday here and everything was perfect." },
];