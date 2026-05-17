export interface ShopProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  badge?: string;
  badgeClass?: string;
  image: string;
}

export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    id: "1",
    name: "Iso-Surge Protein",
    description: "100% Pure Whey Isolate. 25g Protein per scoop.",
    price: 59.99,
    badge: "BEST SELLER",
    badgeClass: "bg-neon-green text-pure-black",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAPBjfFXjI-5TRrimabiQxVBN8I9b0wmAe3tIZTgeKy24IV81jJEMlw-Veq91TwCE9h--bR7zviJiJEb0wgJRik6uXU0Q6YYTJy7O7-TDBlzUZuxqN18j3z91pDPdp-uIb00QUWpWMfbn6uYvWFE8QV6grFN6-rmen5XS4erRAxPsA7ze5JQQbfEmfGJJfLoGuRgj303hzCRjr8YZ856N4k4YBn_Czp3VSlf9xMoGrd4NIbQaxvHQIzeEXhPDuUUFO3Rfc3qE-1tqpS",
  },
  {
    id: "2",
    name: "Ignite Pre-Workout",
    description: "Explosive energy and laser focus for intense sessions.",
    price: 44.99,
    badge: "PRE-WORKOUT",
    badgeClass: "bg-electric-blue text-pure-black",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA4lxJiaut7NKiRtueCxeAs5mg2S0sNbhtDQj14NknDjoAkncyoH_eXI9lECV1DnoWzva9tGh0yDHEPxKfugseVdbNE-qIhOHvyu-ZvovGWOVhyNsfg2G9HZxypAm_Mf2BDAcIKUUdQgBneBpDkIopkMQEC4sn9rhNMAKuH4nZElWmOjFwYWoN6iTjI1r5WUjUDh2x50kNgI4WNehXnKPh6Gop-44tkwIDHe1oPhYCVLvIPdF1Kw48YOiYmyZWHTjYYnOmqh3Ow_TEQ",
  },
  {
    id: "3",
    name: "Daily Core Multi",
    description: "Essential vitamins and minerals for optimal recovery.",
    price: 34.99,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQoww8p2Lsg2WcIAoWfvgUXg-O0kO-VxkjvZlToaFZHMuYAuv8-sz991ZeUFpofaV9QhQxY6XPuU79viXmTeQJ0P8m-_wsUH7XLy8szuDbHEJ9zlZiyP4dtGYcWR7ME7afpl6KZL9ezyafU1YSIHoyIg09SCVtk_POirxWXQPLsb2HZPYu3cS04oLZmQuJkdveHPY1PvDRWmCFwc50bP6MoPV52EJnbe9i1FKrYGhg-hSNovyk_X_JYqu8d4XIjhttSQQj4PBlb1ev",
  },
  {
    id: "4",
    name: "BCAA Amino Surge",
    description: "Intra-workout hydration and muscle preservation.",
    price: 39.99,
    badge: "RECOVERY",
    badgeClass: "bg-outline text-pure-black",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDpOrh858_miriZzJ5JAGG2gXRYBFA9UT978DK90lsx1EqVV4M74Eb-5Dr339ikci4ehHj-O0r1c_rStXNyT3yDmUu1SD4t2OGrnqHEBztZDDVL5ANRDXu9ohU7JkQLM5KhIZ0xX51AVPhIUNfI4UVRxIWWQ0OP0xPNypNRWQKy-NtkHAqtmioeGuBNuy0OHYiCtW7CEV0g6_QreHsbKJ_5QbvThmI4FH33FxnGdaaaMrZiDuZd6MO8qz6ICJV8HbppvIK1DPHDfhsO",
  },
];

export const SHOP_CATEGORIES = [
  "All Products",
  "Proteins",
  "Pre-Workouts",
  "Vitamins & Recovery",
  "Apparel",
];
