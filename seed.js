const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const db = [
  // CASUAL - More variety
  {id:'c1',occ:'casual',g:'men',s:'summer',img:'<img src="./images/casual_tee.jpg" alt="Outfit">',n:'Classic Tee & Jeans',i:['White Crewneck','Light Wash Denim','White Sneakers'],c:['#fff','#6aa0d6','#eaeaea']},
  {id:'c2',occ:'casual',g:'women',s:'summer',img:'👗',n:'Breezy Sundress',i:['Floral Midi Dress','Sandals','Straw Tote'],c:['#fef08a','#fcd34d','#a16207']},
  {id:'c3',occ:'casual',g:'unisex',s:'winter',img:'🧥',n:'Cozy Layers',i:['Oversized Hoodie','Joggers','Chunky Sneakers'],c:['#94a3b8','#475569','#0f172a']},
  {id:'c4',occ:'casual',g:'men',s:'winter',img:'🧣',n:'Layered Comfort',i:['Flannel Shirt','Dark Denim','Boots'],c:['#7f1d1d','#1e3a8a','#451a03']},
  {id:'c5',occ:'casual',g:'women',s:'all',img:'👚',n:'Weekend Basics',i:['Striped Tee','High-waisted Jeans','Canvas Sneakers'],c:['#fbbf24','#1e40af','#f8fafc']},
  {id:'c6',occ:'casual',g:'men',s:'all',img:'👕',n:'Street Style',i:['Henley Tee','Cargo Shorts','Slip-on Vans'],c:['#374151','#10b981','#6b7280']},
  {id:'c7',occ:'casual',g:'women',s:'summer',img:'🌸',n:'Boho Chic',i:['Off-shoulder Blouse','Denim Skirt','Espadrilles'],c:['#fef3c7','#3b82f6','#a855f7']},
  {id:'c8',occ:'casual',g:'unisex',s:'monsoon',img:'☔',n:'Rainy Day Comfort',i:['Waterproof Jacket','Sweatpants','Rain Boots'],c:['#1e293b','#64748b','#0f172a']},

  // COLLEGE - More campus styles
  {id:'cl1',occ:'college',g:'unisex',s:'all',img:'🎒',n:'Campus Ready',i:['Graphic Tee','Cargo Pants','Backpack','Converse'],c:['#171717','#3f6212','#1c1917']},
  {id:'cl2',occ:'college',g:'women',s:'summer',img:'👖',n:'Preppy Casual',i:['Polo Shirt','Pleated Skirt','Loafers'],c:['#0ea5e9','#f1f5f9','#020617']},
  {id:'cl3',occ:'college',g:'men',s:'winter',img:'🧥',n:'Varsity Vibe',i:['Varsity Jacket','Grey Hoodie','Jeans'],c:['#1d4ed8','#9ca3af','#172554']},
  {id:'cl4',occ:'college',g:'women',s:'winter',img:'🧣',n:'Study Session',i:['Turtleneck','Mom Jeans','Tote Bag'],c:['#c2410c','#e2e8f0','#450a0a']},
  {id:'cl5',occ:'college',g:'men',s:'all',img:'📚',n:'Library Look',i:['Button-down Shirt','Chinos','Boat Shoes'],c:['#ffffff','#4b5563','#92400e']},
  {id:'cl6',occ:'college',g:'women',s:'all',img:'🎨',n:'Art Student',i:['Paint-stained Tee','Wide-leg Pants','Combat Boots'],c:['#f59e0b','#7c2d12','#374151']},
  {id:'cl7',occ:'college',g:'unisex',s:'summer',img:'🏃',n:'Active Campus',i:['Athletic Tee','Bike Shorts','Running Shoes'],c:['#10b981','#ef4444','#f8fafc']},
  {id:'cl8',occ:'college',g:'men',s:'monsoon',img:'🌧️',n:'Wet Weather Prep',i:['Windbreaker','Track Pants','Waterproof Backpack'],c:['#0ea5e9','#1e293b','#64748b']},

  // PARTY - More party styles
  {id:'p1',occ:'party',g:'women',s:'all',img:'✨',n:'Night Out Glam',i:['Sequin Top','Leather Pants','Heels'],c:['#fcd34d','#000000','#be123c']},
  {id:'p2',occ:'party',g:'men',s:'all',img:'🕺',n:'Sleek Evening',i:['Black Silk Shirt','Tailored Trousers','Chelsea Boots'],c:['#0a0a0a','#171717','#262626']},
  {id:'p3',occ:'party',g:'unisex',s:'summer',img:'🎉',n:'Vibrant Pop',i:['Neon Over-shirt','Dark Denim','Statement Kicks'],c:['#d946ef','#020617','#14b8a6']},
  {id:'p4',occ:'party',g:'women',s:'winter',img:'🎭',n:'Velvet Nights',i:['Velvet Dress','Ankle Boots','Statement Earrings'],c:['#7c3aed','#1e1b4b','#fbbf24']},
  {id:'p5',occ:'party',g:'men',s:'summer',img:'🌴',n:'Tropical Party',i:['Linen Shirt','White Pants','Loafers'],c:['#fef08a','#ffffff','#92400e']},
  {id:'p6',occ:'party',g:'women',s:'all',img:'💃',n:'Dance Floor Ready',i:['Bodycon Dress','Platform Heels','Glitter Clutch'],c:['#ec4899','#000000','#ffd700']},
  {id:'p7',occ:'party',g:'unisex',s:'all',img:'🎶',n:'Festival Vibes',i:['Tie-dye Tee','Distressed Jeans','Combat Boots'],c:['#8b5cf6','#dc2626','#f59e0b']},
  {id:'p8',occ:'party',g:'men',s:'winter',img:'🥃',n:'Cocktail Hour',i:['Cashmere Blazer','Black Trousers','Derby Shoes'],c:['#374151','#000000','#9ca3af']},

  // OUTING - More outdoor styles
  {id:'o1',occ:'outing',g:'unisex',s:'summer',img:'🧢',n:'Urban Explorer',i:['Bucket Hat','Oversized Tee','Shorts','Sandals'],c:['#fde047','#4ade80','#111827']},
  {id:'o2',occ:'outing',g:'women',s:'all',img:'📸',n:'Museum Date',i:['Midi Skirt','Knit Cardigan','Ankle Boots'],c:['#fcd34d','#b45309','#fff7ed']},
  {id:'o3',occ:'outing',g:'men',s:'winter',img:'☕',n:'Weekend Coffee',i:['Puffer Vest','Long Sleeve Henley','Chinos'],c:['#0f766e','#f8fafc','#78350f']},
  {id:'o4',occ:'outing',g:'women',s:'summer',img:'🏞️',n:'Hiking Adventure',i:['Sports Bra','Cargo Pants','Hiking Boots'],c:['#10b981','#8b5cf6','#374151']},
  {id:'o5',occ:'outing',g:'men',s:'all',img:'🚲',n:'Bike Ride',i:['Jersey Tee','Bike Shorts','Cycling Shoes'],c:['#ef4444','#1e293b','#fbbf24']},
  {id:'o6',occ:'outing',g:'unisex',s:'winter',img:'🏔️',n:'Mountain Trek',i:['Thermal Jacket','Snow Pants','Winter Boots'],c:['#1e293b','#64748b','#f1f5f9']},
  {id:'o7',occ:'outing',g:'women',s:'monsoon',img:'🌧️',n:'Rainy Walk',i:['Trench Coat','Waterproof Boots','Umbrella'],c:['#374151','#6b7280','#9ca3af']},
  {id:'o8',occ:'outing',g:'men',s:'summer',img:'🏖️',n:'Beach Day Out',i:['Rash Guard','Board Shorts','Flip Flops'],c:['#06b6d4','#fbbf24','#10b981']},

  // FORMAL - More professional styles
  {id:'f1',occ:'formal',g:'men',s:'all',img:'👔',n:'Boardroom Classic',i:['Navy Suit','White Oxford','Silk Tie','Oxfords'],c:['#1e3a8a','#ffffff','#7f1d1d']},
  {id:'f2',occ:'formal',g:'women',s:'all',img:'👠',n:'Power Suit',i:['Beige Blazer','Matching Trousers','Silk Blouse'],c:['#fef3c7','#d97706','#f8fafc']},
  {id:'f3',occ:'formal',g:'unisex',s:'all',img:'💼',n:'Smart Minimalist',i:['Turtleneck','Tailored Pants','Trench Coat'],c:['#000000','#52525b','#e5e5e5']},
  {id:'f4',occ:'formal',g:'men',s:'summer',img:'🕴️',n:'Summer Executive',i:['Light Grey Suit','Sky Blue Shirt','Brown Loafers'],c:['#9ca3af','#0ea5e9','#92400e']},
  {id:'f5',occ:'formal',g:'women',s:'winter',img:'💼',n:'Winter Professional',i:['Wool Blazer','Pencil Skirt','Turtleneck','Knee-high Boots'],c:['#374151','#000000','#f8fafc']},
  {id:'f6',occ:'formal',g:'men',s:'all',img:'🎩',n:'Traditional Formal',i:['Three-piece Suit','Pocket Square','Patent Shoes'],c:['#1e293b','#ffffff','#fbbf24']},
  {id:'f7',occ:'formal',g:'women',s:'all',img:'💼',n:'Modern Executive',i:['Structured Blazer','Wide-leg Pants','Button-up Shirt'],c:['#7c2d12','#fef3c7','#92400e']},
  {id:'f8',occ:'formal',g:'unisex',s:'monsoon',img:'🌂',n:'Weather-ready Formal',i:['Waterproof Trench','Formal Trousers','Umbrella'],c:['#374151','#6b7280','#9ca3af']},

  // DATE NIGHT - More romantic styles
  {id:'d1',occ:'date',g:'women',s:'summer',img:'🍷',n:'Romantic Evening',i:['Slip Dress','Strappy Heels','Clutch'],c:['#9f1239','#fdf2f8','#fecdd3']},
  {id:'d2',occ:'date',g:'men',s:'all',img:'🌹',n:'Dinner Ready',i:['Cashmere Sweater','Dark Chinos','Loafers'],c:['#111827','#4b5563','#3b82f6']},
  {id:'d3',occ:'date',g:'unisex',s:'winter',img:'🎭',n:'Theatre Night',i:['Wool Overcoat','Smart Trousers','Dress Shoes'],c:['#334155','#0f172a','#94a3b8']},
  {id:'d4',occ:'date',g:'women',s:'all',img:'🌙',n:'Moonlight Date',i:['Little Black Dress','Pearl Earrings','Stilettos'],c:['#000000','#f8fafc','#9ca3af']},
  {id:'d5',occ:'date',g:'men',s:'summer',img:'🌺',n:'Summer Romance',i:['Linen Button-up','Light Chinos','Boat Shoes'],c:['#fef08a','#0ea5e9','#92400e']},
  {id:'d6',occ:'date',g:'women',s:'winter',img:'❄️',n:'Cozy Winter Date',i:['Cable-knit Sweater','Velvet Pants','Ankle Boots'],c:['#7c2d12','#4c1d95','#f8fafc']},
  {id:'d7',occ:'date',g:'unisex',s:'all',img:'🎪',n:'Carnival Night',i:['Striped Tee','Denim Jacket','Sneakers'],c:['#ef4444','#1e293b','#fbbf24']},
  {id:'d8',occ:'date',g:'men',s:'monsoon',img:'☔',n:'Rainy Date',i:['Trench Coat','Waterproof Shoes','Umbrella'],c:['#374151','#6b7280','#9ca3af']},

  // WEDDING - More wedding appropriate styles
  {id:'w1',occ:'wedding',g:'women',s:'all',img:'💐',n:'Guest Elegance',i:['Pastel Maxi Dress','Wedge Heels','Pashmina'],c:['#fbcfe8','#fdf4ff','#db2777']},
  {id:'w2',occ:'wedding',g:'men',s:'summer',img:'🥂',n:'Summer Suiting',i:['Linen Suit','Light Blue Shirt','Brown Brogues'],c:['#fef08a','#bae6fd','#9a3412']},
  {id:'w3',occ:'wedding',g:'men',s:'winter',img:'🎩',n:'Black Tie',i:['Tuxedo','Bow Tie','Patent Leather Shoes'],c:['#000000','#ffffff','#171717']},
  {id:'w4',occ:'wedding',g:'women',s:'summer',img:'🌸',n:'Garden Wedding',i:['Floral Midi Dress','Espadrilles','Wide-brim Hat'],c:['#fef08a','#10b981','#92400e']},
  {id:'w5',occ:'wedding',g:'men',s:'all',img:'💍',n:'Wedding Attire',i:['Morning Suit','Ascot Tie','Oxford Shoes'],c:['#374151','#ffffff','#9ca3af']},
  {id:'w6',occ:'wedding',g:'women',s:'winter',img:'❄️',n:'Winter Wedding',i:['Velvet Gown','Fur Stole','Heeled Boots'],c:['#7c3aed','#f8fafc','#374151']},
  {id:'w7',occ:'wedding',g:'unisex',s:'all',img:'🎊',n:'Casual Wedding',i:['Blazer','Chinos','Loafers'],c:['#6b7280','#f8fafc','#374151']},
  {id:'w8',occ:'wedding',g:'women',s:'monsoon',img:'🌧️',n:'Monsoon Wedding',i:['Light Saree','Sandals','Dupatta'],c:['#fef08a','#a855f7','#374151']},

  // FESTIVE - More cultural styles
  {id:'fs1',occ:'festive',g:'women',s:'all',img:'🪔',n:'Traditional Grace',i:['Embroidered Kurta','Palazzos','Jhumkas'],c:['#b91c1c','#fcd34d','#047857']},
  {id:'fs2',occ:'festive',g:'men',s:'all',img:'✨',n:'Festive Classic',i:['Silk Kurta','Nehru Jacket','Mojaris'],c:['#0ea5e9','#1e3a8a','#fbbf24']},
  {id:'fs3',occ:'festive',g:'women',s:'all',img:'🪔',n:'Festival Colors',i:['Lehenga Choli','Heavy Jewelry','Mochani'],c:['#dc2626','#fbbf24','#7c3aed']},
  {id:'fs4',occ:'festive',g:'men',s:'all',img:'🎨',n:'Cultural Attire',i:['Sherwani','Dupatta','Traditional Footwear'],c:['#7c2d12','#fef3c7','#92400e']},
  {id:'fs5',occ:'festive',g:'women',s:'winter',img:'❄️',n:'Winter Festival',i:['Woolen Shawl','Embroidered Dress','Boots'],c:['#7c2d12','#fef3c7','#374151']},
  {id:'fs6',occ:'festive',g:'unisex',s:'all',img:'🎭',n:'Mask Festival',i:['Colorful Outfit','Face Paint','Comfortable Shoes'],c:['#ef4444','#8b5cf6','#fbbf24']},
  {id:'fs7',occ:'festive',g:'men',s:'summer',img:'🌞',n:'Summer Festive',i:['Light Kurta','Cotton Pants','Sandals'],c:['#fef08a','#10b981','#92400e']},
  {id:'fs8',occ:'festive',g:'women',s:'monsoon',img:'🌧️',n:'Rain Festival',i:['Waterproof Attire','Traditional Jewelry','Covered Shoes'],c:['#374151','#9ca3af','#6b7280']},

  // GYM - More fitness styles
  {id:'g1',occ:'gym',g:'unisex',s:'all',img:'🏋️',n:'Workout Ready',i:['Moisture-wicking Tee','Gym Shorts','Running Shoes'],c:['#14b8a6','#1e293b','#f8fafc']},
  {id:'g2',occ:'gym',g:'women',s:'all',img:'🧘',n:'Yoga Flow',i:['Sports Bra','Leggings','Grip Socks'],c:['#c084fc','#3b0764','#f3e8ff']},
  {id:'g3',occ:'gym',g:'men',s:'all',img:'💪',n:'Power Lifting',i:['Compression Tee','Weightlifting Shorts','Lifting Shoes'],c:['#000000','#ef4444','#f8fafc']},
  {id:'g4',occ:'gym',g:'women',s:'summer',img:'🏃',n:'Summer Run',i:['Tank Top','Running Shorts','Trail Shoes'],c:['#10b981','#ef4444','#f8fafc']},
  {id:'g5',occ:'gym',g:'unisex',s:'winter',img:'❄️',n:'Winter Workout',i:['Thermal Layer','Track Pants','Insulated Shoes'],c:['#1e293b','#64748b','#f1f5f9']},
  {id:'g6',occ:'gym',g:'men',s:'all',img:'🥊',n:'Boxing Session',i:['Rash Guard','MMA Shorts','Boxing Shoes'],c:['#7c2d12','#000000','#f8fafc']},
  {id:'g7',occ:'gym',g:'women',s:'all',img:'🧘‍♀️',n:'Pilates Class',i:['Cropped Tank','High-waisted Leggings','Barefoot Shoes'],c:['#ec4899','#374151','#f8fafc']},
  {id:'g8',occ:'gym',g:'unisex',s:'monsoon',img:'🌧️',n:'Indoor Workout',i:['Dry-fit Tee','Joggers','Indoor Shoes'],c:['#374151','#6b7280','#9ca3af']},

  // BEACH - More beach styles
  {id:'b1',occ:'beach',g:'men',s:'summer',img:'🏖️',n:'Island Time',i:['Floral Shirt','Swim Trunks','Slides'],c:['#0ea5e9','#fef08a','#ef4444']},
  {id:'b2',occ:'beach',g:'women',s:'summer',img:'🌴',n:'Resort Wear',i:['Bikini','Crochet Cover-up','Wide-brim Hat'],c:['#f9a8d4','#fffbeb','#b45309']},
  {id:'b3',occ:'beach',g:'unisex',s:'summer',img:'🏄',n:'Surf Style',i:['Rash Guard','Board Shorts','Flip Flops'],c:['#06b6d4','#fbbf24','#10b981']},
  {id:'b4',occ:'beach',g:'women',s:'summer',img:'🌺',n:'Tropical Paradise',i:['Sarong','Bikini Top','Anklets'],c:['#ec4899','#fef08a','#92400e']},
  {id:'b5',occ:'beach',g:'men',s:'summer',img:'🐚',n:'Beach Casual',i:['Linen Shorts','Tank Top','Sandals'],c:['#fef08a','#10b981','#6b7280']},
  {id:'b6',occ:'beach',g:'women',s:'summer',img:'🩱',n:'Swimwear Ready',i:['One-piece Swimsuit','Beach Towel','Sunglasses'],c:['#3b82f6','#fef3c7','#92400e']},
  {id:'b7',occ:'beach',g:'unisex',s:'summer',img:'⛱️',n:'Beach Day',i:['Sun Hat','Light Cover-up','Water Bottle'],c:['#fbbf24','#10b981','#374151']},
  {id:'b8',occ:'beach',g:'men',s:'summer',img:'🏊',n:'Pool Party',i:['Swim Trunks','Aloha Shirt','Pool Shoes'],c:['#0ea5e9','#ef4444','#fbbf24']}
];

async function main() {
  console.log('Seeding database...');
  for (const item of db) {
    await prisma.outfit.upsert({
      where: { id: item.id },
      update: {},
      create: {
        id: item.id,
        occ: item.occ,
        g: item.g,
        s: item.s,
        img: item.img,
        n: item.n,
        i: JSON.stringify(item.i),
        c: JSON.stringify(item.c)
      }
    });
  }
  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
