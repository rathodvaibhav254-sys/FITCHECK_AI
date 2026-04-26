const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const db = [
  // CASUAL
  {id:'c1',occ:'casual',g:'men',s:'summer',img:'<img src="./images/casual_tee.jpg" alt="Outfit">',n:'Classic Tee & Jeans',i:['White Crewneck','Light Wash Denim','White Sneakers'],c:['#fff','#6aa0d6','#eaeaea']},
  {id:'c2',occ:'casual',g:'women',s:'summer',img:'👗',n:'Breezy Sundress',i:['Floral Midi Dress','Sandals','Straw Tote'],c:['#fef08a','#fcd34d','#a16207']},
  {id:'c3',occ:'casual',g:'unisex',s:'winter',img:'🧥',n:'Cozy Layers',i:['Oversized Hoodie','Joggers','Chunky Sneakers'],c:['#94a3b8','#475569','#0f172a']},
  {id:'c4',occ:'casual',g:'men',s:'winter',img:'🧣',n:'Layered Comfort',i:['Flannel Shirt','Dark Denim','Boots'],c:['#7f1d1d','#1e3a8a','#451a03']},
  
  // COLLEGE
  {id:'cl1',occ:'college',g:'unisex',s:'all',img:'🎒',n:'Campus Ready',i:['Graphic Tee','Cargo Pants','Backpack','Converse'],c:['#171717','#3f6212','#1c1917']},
  {id:'cl2',occ:'college',g:'women',s:'summer',img:'👖',n:'Preppy Casual',i:['Polo Shirt','Pleated Skirt','Loafers'],c:['#0ea5e9','#f1f5f9','#020617']},
  {id:'cl3',occ:'college',g:'men',s:'winter',img:'🧥',n:'Varsity Vibe',i:['Varsity Jacket','Grey Hoodie','Jeans'],c:['#1d4ed8','#9ca3af','#172554']},
  {id:'cl4',occ:'college',g:'women',s:'winter',img:'🧣',n:'Study Session',i:['Turtleneck','Mom Jeans','Tote Bag'],c:['#c2410c','#e2e8f0','#450a0a']},

  // PARTY
  {id:'p1',occ:'party',g:'women',s:'all',img:'✨',n:'Night Out Glam',i:['Sequin Top','Leather Pants','Heels'],c:['#fcd34d','#000000','#be123c']},
  {id:'p2',occ:'party',g:'men',s:'all',img:'🕺',n:'Sleek Evening',i:['Black Silk Shirt','Tailored Trousers','Chelsea Boots'],c:['#0a0a0a','#171717','#262626']},
  {id:'p3',occ:'party',g:'unisex',s:'summer',img:'🎉',n:'Vibrant Pop',i:['Neon Over-shirt','Dark Denim','Statement Kicks'],c:['#d946ef','#020617','#14b8a6']},

  // OUTING
  {id:'o1',occ:'outing',g:'unisex',s:'summer',img:'🧢',n:'Urban Explorer',i:['Bucket Hat','Oversized Tee','Shorts','Sandals'],c:['#fde047','#4ade80','#111827']},
  {id:'o2',occ:'outing',g:'women',s:'all',img:'📸',n:'Museum Date',i:['Midi Skirt','Knit Cardigan','Ankle Boots'],c:['#fcd34d','#b45309','#fff7ed']},
  {id:'o3',occ:'outing',g:'men',s:'winter',img:'☕',n:'Weekend Coffee',i:['Puffer Vest','Long Sleeve Henley','Chinos'],c:['#0f766e','#f8fafc','#78350f']},

  // FORMAL
  {id:'f1',occ:'formal',g:'men',s:'all',img:'👔',n:'Boardroom Classic',i:['Navy Suit','White Oxford','Silk Tie','Oxfords'],c:['#1e3a8a','#ffffff','#7f1d1d']},
  {id:'f2',occ:'formal',g:'women',s:'all',img:'👠',n:'Power Suit',i:['Beige Blazer','Matching Trousers','Silk Blouse'],c:['#fef3c7','#d97706','#f8fafc']},
  {id:'f3',occ:'formal',g:'unisex',s:'all',img:'💼',n:'Smart Minimalist',i:['Turtleneck','Tailored Pants','Trench Coat'],c:['#000000','#52525b','#e5e5e5']},

  // DATE NIGHT
  {id:'d1',occ:'date',g:'women',s:'summer',img:'🍷',n:'Romantic Evening',i:['Slip Dress','Strappy Heels','Clutch'],c:['#9f1239','#fdf2f8','#fecdd3']},
  {id:'d2',occ:'date',g:'men',s:'all',img:'🌹',n:'Dinner Ready',i:['Cashmere Sweater','Dark Chinos','Loafers'],c:['#111827','#4b5563','#3b82f6']},
  {id:'d3',occ:'date',g:'unisex',s:'winter',img:'🎭',n:'Theatre Night',i:['Wool Overcoat','Smart Trousers','Dress Shoes'],c:['#334155','#0f172a','#94a3b8']},

  // WEDDING
  {id:'w1',occ:'wedding',g:'women',s:'all',img:'💐',n:'Guest Elegance',i:['Pastel Maxi Dress','Wedge Heels','Pashmina'],c:['#fbcfe8','#fdf4ff','#db2777']},
  {id:'w2',occ:'wedding',g:'men',s:'summer',img:'🥂',n:'Summer Suiting',i:['Linen Suit','Light Blue Shirt','Brown Brogues'],c:['#fef08a','#bae6fd','#9a3412']},
  {id:'w3',occ:'wedding',g:'men',s:'winter',img:'🎩',n:'Black Tie',i:['Tuxedo','Bow Tie','Patent Leather Shoes'],c:['#000000','#ffffff','#171717']},

  // FESTIVE
  {id:'fs1',occ:'festive',g:'women',s:'all',img:'🪔',n:'Traditional Grace',i:['Embroidered Kurta','Palazzos','Jhumkas'],c:['#b91c1c','#fcd34d','#047857']},
  {id:'fs2',occ:'festive',g:'men',s:'all',img:'✨',n:'Festive Classic',i:['Silk Kurta','Nehru Jacket','Mojaris'],c:['#0ea5e9','#1e3a8a','#fbbf24']},

  // GYM
  {id:'g1',occ:'gym',g:'unisex',s:'all',img:'🏋️',n:'Workout Ready',i:['Moisture-wicking Tee','Gym Shorts','Running Shoes'],c:['#14b8a6','#1e293b','#f8fafc']},
  {id:'g2',occ:'gym',g:'women',s:'all',img:'🧘',n:'Yoga Flow',i:['Sports Bra','Leggings','Grip Socks'],c:['#c084fc','#3b0764','#f3e8ff']},

  // BEACH
  {id:'b1',occ:'beach',g:'men',s:'summer',img:'🏖️',n:'Island Time',i:['Floral Shirt','Swim Trunks','Slides'],c:['#0ea5e9','#fef08a','#ef4444']},
  {id:'b2',occ:'beach',g:'women',s:'summer',img:'🌴',n:'Resort Wear',i:['Bikini','Crochet Cover-up','Wide-brim Hat'],c:['#f9a8d4','#fffbeb','#b45309']}
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
