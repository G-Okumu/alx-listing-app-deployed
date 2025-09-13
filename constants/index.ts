import { PropertyProps } from "@/interfaces";

const backgroundImage = "/assets/okra-amps-y1bnAADWAqk-unsplash.jpg";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: 1,
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image:
      "https://images.unsplash.com/photo-1754671448143-8bd0bfb10bce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
    discount: "",
    description: "",
    reviews: [
      { name: "Alice", rating: 5, comment: "Absolutely loved this place! Highly recommend." },
      { name: "Bob", rating: 4, comment: "Great experience overall, would visit again." },
    ],
  },
  {
    id: 2,
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA",
    },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: {
      bed: "4",
      shower: "2",
      occupants: "5-7",
    },
    image:
      "https://images.unsplash.com/photo-1754901350480-c0fdd1a427b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    discount: "30",
    description: "",
    reviews: [
      { name: "Charlie", rating: 3, comment: "It was okay, nothing too special." },
      { name: "Diana", rating: 5, comment: "Perfect getaway, everything was spotless!" },
    ],
  },
  {
    id: 3,
    name: "Cozy Desert Retreat",
    address: {
      state: "Palm Springs",
      city: "California",
      country: "USA",
    },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image:
      "https://plus.unsplash.com/premium_photo-1749751600727-3fb5c8af5c29?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
    discount: "",
    description: "",
    reviews: [
      { name: "Eli", rating: 2, comment: "Not what I expected, could be cleaner." },
      { name: "Fiona", rating: 4, comment: "Cozy and well-located, minor issues." },
    ],
  },
  {
    id: 4,
    name: "City Lights Penthouse",
    address: {
      state: "New York",
      city: "New York",
      country: "USA",
    },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image:
      "https://images.unsplash.com/photo-1734760381824-f52cb9960b9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D",
    discount: "15",
    description: "",
    reviews: [
      { name: "Ian", rating: 1, comment: "Would not recommend. Poor hygiene." },
      { name: "Jenna", rating: 4, comment: "Pretty good, but a bit noisy at night." },
    ],
  },
  {
    id: 5,
    name: "Riverside Cabin",
    address: {
      state: "Queenstown",
      city: "Otago",
      country: "New Zealand",
    },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6",
    },
    image:
      "https://images.unsplash.com/photo-1734760381824-f52cb9960b9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D",
    discount: "20",
    description: "",
    reviews: [
      { name: "Mason", rating: 5, comment: "Exceeded all expectations!" },
      { name: "Nina", rating: 4, comment: "Very pleasant stay with friendly staff." },
    ],
  },
  {
    id: 6,
    name: "Modern Beachfront Villa",
    address: {
      state: "Sidemen",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10",
    },
    image:
      "https://images.unsplash.com/photo-1734760381824-f52cb9960b9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D",
    discount: "",
    description: "",
    reviews: [
      { name: "Oscar", rating: 3, comment: "Decent, but I've stayed at better places." },
      { name: "Paula", rating: 5, comment: "Superb! Will definitely return." },
    ],
  },
  {
    id: 7,
    name: "Lakeside Chalet",
    address: {
      state: "Banff",
      city: "Alberta",
      country: "Canada",
    },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image:
      "https://images.unsplash.com/photo-1734760381824-f52cb9960b9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D",
    discount: "10",
    description: "",
    reviews: [
      { name: "Oscar", rating: 3, comment: "Decent, but I've stayed at better places." },
      { name: "Paula", rating: 5, comment: "Superb! Will definitely return." },
    ],
  },
  {
    id: 8,
    name: "Tropical Garden Villa",
    address: {
      state: "Koh Samui",
      city: "Surat Thani",
      country: "Thailand",
    },
    rating: 4.8,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "5-6",
    },
    image:
      "https://images.unsplash.com/photo-1734760381824-f52cb9960b9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D",
    discount: "25",
    description: "",
    reviews: [
      { name: "Oscar", rating: 3, comment: "Decent, but I've stayed at better places." },
      { name: "Paula", rating: 5, comment: "Superb! Will definitely return." },
    ],
  },
];


export const properties = [
  {
    image: "/assets/luxury-beach-villa-with-pool.jpg",
    title: "Villa Arrecife Beach House",
    location: "Tulum, Mexico",
    rating: 4.76,
    price: 2450,
    badges: ["30% OFF"],
    amenities: ["Top Villa", "Self Checkin", "Free Reschedule"],
  },
  {
    image: "/assets/wooden-cabin-in-forest.jpg",
    title: "Entire cabin",
    location: "Nova Friburgo, Brazil",
    rating: 4.76,
    price: 62,
    amenities: ["Top Villa", "Self Checkin", "Free Reschedule"],
  },
  {
    image: "/assets/modern-eco-house-in-mountains.jpg",
    title: "Earthen home",
    location: "Santa Marta, Colombia",
    rating: 4.76,
    price: 386,
    amenities: ["Top Villa", "Self Checkin", "Free Reschedule"],
  },
  {
    image: "/assets/private-room-with-wooden-interior.jpg",
    title: "Private room",
    location: "Maceió, Brazil",
    rating: 4.76,
    price: 134,
    amenities: ["Top Villa", "Self Checkin", "Free Reschedule"],
  },
  {
    image: "/assets/luxury-estate-with-infinity-pool.jpg",
    title: "Gokce Gemile Estate",
    location: "Fethiye, Turkey",
    rating: 4.76,
    price: 980,
    amenities: ["Top Villa", "Self Checkin", "Free Reschedule"],
  },
  {
    image: "/assets/modern-villa-with-glass-walls.jpg",
    title: "Luxury 1000 sqm Villa...",
    location: "Marrakech, Morocco",
    rating: 4.76,
    price: 1430,
    amenities: ["Top Villa", "Self Checkin", "Free Reschedule"],
  },
  {
    image: "/assets/moroccan-palace-with-pool.jpg",
    title: "Palais Hassoun Marrakech",
    location: "Marrakech, Morocco",
    rating: 4.76,
    price: 3450,
    amenities: ["Top Villa", "Self Checkin", "Free Reschedule"],
  },
  {
    image: "/assets/hillside-villa-with-mountain-view.jpg",
    title: "Villa Lamp",
    location: "Benalmádena, Spain",
    rating: 4.76,
    price: 2041,
    amenities: ["Top Villa", "Self Checkin", "Free Reschedule"],
  },
  {
    image: "/assets/luxury-villa-infinity-pool.png",
    title: "Villa l'Ouf d'Or",
    location: "Marrakech, Morocco",
    rating: 4.76,
    price: 1009,
    amenities: ["Top Villa", "Self Checkin", "Free Reschedule"],
  },
  {
    image: "/assets/pink-modern-villa-with-pool.jpg",
    title: "Designer villa, pool not...",
    location: "Marrakech, Morocco",
    rating: 4.76,
    price: 1289,
    amenities: ["Top Villa", "Self Checkin", "Free Reschedule"],
  },
  {
    image: "/assets/royal-palace-with-gardens.jpg",
    title: "Royal Zephyr - Marrakech",
    location: "Marrakech, Morocco",
    rating: 4.76,
    price: 1692,
    amenities: ["Top Villa", "Self Checkin", "Free Reschedule"],
  },
  {
    image: "/assets/tropical-resort-palms.png",
    title: "Riad Mago & Bungalows",
    location: "Sidi Abdallah Ghiat, Morocco",
    rating: 4.76,
    price: 865,
    amenities: ["Top Villa", "Self Checkin", "Free Reschedule"],
  },
  {
    image: "/assets/spanish-villa-with-terrace.jpg",
    title: "Casa de Coralina",
    location: "Playas de Vera, Spain",
    rating: 4.76,
    price: 215,
    amenities: ["Top Villa", "Self Checkin", "Free Reschedule"],
  },
  {
    image: "/assets/desert-villa-with-traditional-architecture.jpg",
    title: "Happy Valley Villa, Tuni...",
    location: "Qorveh, Egypt",
    rating: 4.76,
    price: 100,
    amenities: ["Top Villa", "Self Checkin", "Free Reschedule"],
  },
  {
    image: "/assets/greek-island-villa-with-sea-view.jpg",
    title: "Almyros Residence",
    location: "Lasithi, Greece",
    rating: 4.76,
    price: 747,
    amenities: ["Top Villa", "Self Checkin", "Free Reschedule"],
  },
  {
    image: "/assets/modern-white-villa-with-pool.jpg",
    title: "Villa White Stone made...",
    location: "Marrakech, Morocco",
    rating: 4.76,
    price: 1798,
    amenities: ["Top Villa", "Self Checkin", "Free Reschedule"],
  },
]

export { backgroundImage };
