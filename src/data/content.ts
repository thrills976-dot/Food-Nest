export const reviews = [
  {
    name: "Rosebud Gunda",
    rating: 4,
    text: "It was my first time visiting this restaurant and i was really happy to have found a place that served some Nigerian meals. Their services are great and amazing. Their food takes at max 6 minutes to be served from time of booking. I ordered some Obgono/Oha soup and Garri. The dish looked amazing and it was delicious. I decided to down this meal with a very cold Budweiser (the best decision i have ever made).",
    highlight: "Served in under 6 minutes",
    tags: ["Fast Service", "Nigerian Meals"]
  },
  {
    name: "Hosea Ajet",
    rating: 5,
    text: "Felix and his team are doing a great job. Their food is intercontinental and as a Nigerian, I particularly enjoy all the local Nigerian dishes, served as they should. The venue is clean and quiet. I recommend this place for families, singles and love birds.",
    highlight: "Authentic Nigerian taste",
    tags: ["Authentic", "Family Friendly"]
  },
  {
    name: "Brandon Navanda",
    rating: 5,
    text: "The food was lovely went there with my wife. We enjoyed the Nigerian Egusi soup and the Jollof was perfect. Will probably visit for another day again. The starters Chicken Mushroom and Livers were excellent. Nice clean environment.",
    highlight: "Perfect Jollof",
    tags: ["Great for Couples", "Clean Environment"]
  }
];

export const menuHighlights = [
  {
    name: "Signature Egusi Soup & Pounded Yam",
    category: "West African",
    price: "$15",
    description: "Authentic Nigerian Egusi soup served as it should be, packed with flavor and your choice of meat.",
    image: "https://images.pexels.com/photos/1618913/pexels-photo-1618913.jpeg?auto=compress&cs=tinysrgb&w=800",
    quote: "delicious Nigerian meals... served as they should"
  },
  {
    name: "Perfect Jollof Rice & Chicken",
    category: "West African",
    price: "$12",
    description: "Rich and smoky West African Jollof rice served with perfectly roasted chicken and plantains.",
    image: "https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=800",
    quote: "Jollof was perfect... delicious Nigerian meals"
  },
  {
    name: "Premium Peppercorn Steak",
    category: "Grill",
    price: "$22",
    description: "Tender, juicy cut of beef grilled to perfection with our signature peppercorn sauce.",
    image: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=800",
    quote: "served in under 6 minutes from time of booking"
  },
  {
    name: "Sweet & Sticky Pork Ribs",
    category: "Grill",
    price: "$18",
    description: "Slow-cooked, fall-off-the-bone ribs glazed in our house BBQ sauce.",
    image: "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=800",
    quote: "services are great and amazing... the food was lovely"
  }
];

export const fullMenu = {
  "Breakfast": [
    { name: "Full English Breakfast", price: "$10", description: "Eggs, bacon, sausage, beans, mushrooms, tomatoes, and toast" },
    { name: "Avocado & Egg Toast", price: "$8", description: "Smashed avocado, poached egg, chili flakes on artisanal bread" }
  ],
  "Grill & Meats": [
    { name: "T-Bone Steak (400g)", price: "$24", description: "Grilled to your liking, served with chips and salad", popular: true },
    { name: "BBQ Pork Ribs", price: "$18", description: "Full rack, slow-cooked in our house marinade", popular: true },
    { name: "Mixed Grill Platter", price: "$35", description: "Perfect for sharing: steak, wings, sausage, and ribs", popular: true }
  ],
  "West African": [
    { name: "Jollof Rice & Roasted Chicken", price: "$12", description: "Smoky and spicy, served with fried plantain" },
    { name: "Egusi Soup", price: "$15", description: "Rich melon seed soup, served with Pounded Yam or Garri" },
    { name: "Obgono Soup", price: "$15", description: "Traditional draw soup with assorted meats and Garri" }
  ],
  "Asian Comfort": [
    { name: "Sweet & Sour Chicken", price: "$14", description: "Crispy chicken bites in a tangy sauce with steamed rice" },
    { name: "Beef Chow Mein", price: "$13", description: "Stir-fried noodles with tender beef strips and vegetables" }
  ],
  "Seafood": [
    { name: "Grilled Bream Fish", price: "$16", description: "Whole tilapia marinated in local spices, with side of chips" },
    { name: "Calamari Rings", price: "$10", description: "Crispy fried calamari served with tartare sauce" }
  ]
};
