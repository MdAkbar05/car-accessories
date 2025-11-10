import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function main() {
  const categories = await prisma.category.findMany();
  if (categories.length === 0) {
    console.log("⚠️ No categories found. Please seed categories first.");
    return;
  }

  const categoryMap = {};
  for (const cat of categories) {
    categoryMap[cat.name] = cat.id;
  }

  const products = [
    {
      name: "Toyota Corolla Air Filter",
      description:
        "The Toyota Corolla Air Filter is designed for maximum airflow and superior engine protection. Made from multi-layer synthetic fiber that effectively captures contaminants, it ensures optimal combustion efficiency and fuel economy. Ideal for 2023–2024 Corolla models, this OEM-grade part guarantees durability, easy installation, and long-lasting performance even in dusty driving environments.",
      specification:
        "OEM Part No: AF-2024-TC | Filter Type: Dry Paper Element | Compatibility: Toyota Corolla (1.8L petrol engine) | Dimensions: 230mm x 180mm x 45mm | Material: Multi-layer synthetic filter media | Recommended Replacement Interval: Every 10,000 km",
      stock: 200,
      price: 190,
      brand: "Toyota",
      model: "Corolla 2024",
      engine: "1800cc",
      images: [
        "https://cdn.prosystem.com.bd/images/OilCo/CASTROL-EDGE-PROFESSIONAL-LONG-LIFE-III-5W-30-FULL-SYNTHETIC-4L7d8eaf19-14ba-43a2-b2cb-6ce09603826b.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXVqWoB-WmYULFw4fdPn0Nj99WLrejWhV4AQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZieTpHY1NNBCq6q64OK849ehhKMIdDmce-w&s",
      ],
      categoryId: categoryMap["Air Filters"],
      soldCount: 25,
      viewCount: 300,
    },
    {
      name: "Castrol EDGE 5W-30 Full Synthetic Engine Oil",
      description:
        "Castrol EDGE 5W-30 is an advanced full synthetic motor oil designed to maximize engine performance. Featuring Fluid TITANIUM technology, it reduces metal-to-metal contact under extreme pressure, ensuring superior engine protection and cleaner operation. Ideal for high-performance vehicles, it enhances horsepower, improves fuel economy, and extends engine life in both modern gasoline and diesel engines.",
      specification:
        "Viscosity Grade: SAE 5W-30 | Technology: Fluid TITANIUM | API Rating: SN PLUS | ACEA Rating: A3/B4 | Capacity: 4 Liters | Suitable for turbocharged and direct-injection engines | Operating Temperature Range: -30°C to +50°C",
      stock: 150,
      price: 980,
      brand: "Castrol",
      model: "EDGE 5W-30",
      engine: "Universal",
      images: [
        "https://m.media-amazon.com/images/I/71YSk2Qq9mL._AC_SL1500_.jpg",
        "https://www.castrol.com/content/dam/castrol-lubricants/americas/united-states/images/edge-5w30-full-synthetic-engine-oil.png",
      ],
      categoryId: categoryMap["Engine Oil"],
      soldCount: 120,
      viewCount: 800,
    },
    {
      name: "Honda Civic Ceramic Front Brake Pad Set",
      description:
        "This OEM-grade ceramic brake pad set for Honda Civic 2022–2024 delivers quiet, consistent braking power under all conditions. With low dust formulation and high thermal stability, it minimizes rotor wear while maintaining strong friction performance. Designed for a perfect fit, it provides smoother stops and extended lifespan compared to traditional semi-metallic pads.",
      specification:
        "Fitment: Honda Civic (2022–2024) | Material: Ceramic | Includes: 4 Pads (2 sets) | Noise Reduction: Yes | Dust-Free Technology: Low dust composition | Temperature Range: Up to 600°C | Certification: ISO/TS 16949",
      stock: 300,
      price: 450,
      brand: "Honda",
      model: "Civic 2023",
      engine: "1600cc",
      images: [
        "https://cdn11.bigcommerce.com/s-abc123/images/stencil/original/products/132/450/brake-pads-honda-civic.jpg",
        "https://www.hondapartsnow.com/resources/images/parts/brake_pad_set_front.jpg",
      ],
      categoryId: categoryMap["Brake Pads"],
      soldCount: 60,
      viewCount: 410,
    },
    {
      name: "Philips Ultinon Pro9000 H4 LED Headlight Bulbs",
      description:
        "The Philips Ultinon Pro9000 H4 LED Headlight offers next-level visibility and durability. Delivering up to 250% brighter light compared to halogen bulbs, it enhances nighttime driving safety. With advanced AirBoost and SafeBeam technologies, these bulbs ensure optimal heat management and perfectly focused beam patterns. Suitable for most vehicles supporting H4 fitment.",
      specification:
        "Type: H4 Dual Beam | Brightness: Up to 250% brighter | Color Temperature: 5800K Cool White | Voltage: 12V | Power: 25W per bulb | Lifespan: Up to 5,000 hours | Features: AirBoost Cooling, SafeBeam Alignment | Certification: ECE Approved",
      stock: 100,
      price: 750,
      brand: "Philips",
      model: "Ultinon Pro9000",
      engine: "2000cc",
      images: [
        "https://m.media-amazon.com/images/I/71n8qKqL5wL._AC_SL1500_.jpg",
        "https://www.philips.com/c-dam/b2c/category-pages/automotive/lighting/headlights/ultinon-pro9000-led/h4-led-headlight-bulb.jpg",
      ],
      categoryId: categoryMap["Headlights"],
      soldCount: 80,
      viewCount: 600,
    },
    {
      name: "Exide Xplore 12V 35Ah Maintenance-Free Battery",
      description:
        "Exide Xplore 12V battery provides reliable starting power and long-lasting performance for modern vehicles. Built using advanced Ca-Ca (Calcium-Calcium) technology, it requires zero maintenance and offers excellent resistance to corrosion and vibration. Ideal for compact sedans and motorcycles, the Xplore ensures consistent cranking even in extreme temperature conditions.",
      specification:
        "Model: Xplore MF35 | Voltage: 12V | Capacity: 35Ah | Technology: Calcium-Calcium (Ca-Ca) | Design: Maintenance-Free | Weight: 10.5 kg | Warranty: 36 Months | Dimensions: 197mm x 129mm x 227mm",
      stock: 50,
      price: 3200,
      brand: "Exide",
      model: "Xplore MF35",
      engine: "Universal",
      images: [
        "https://www.exideindustries.com/images/battery-xplore.png",
        "https://5.imimg.com/data5/XC/OM/MY-11081802/exide-xplore-battery.jpg",
      ],
      categoryId: categoryMap["Car Batteries"],
      soldCount: 20,
      viewCount: 350,
    },
  ];

  await prisma.product.createMany({ data: products });

  console.log("✅ Seeded 5 sample car products successfully.");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
