export const HeroPackage = [
  {
    name: "El Nido Tropical Escape",
    bg: "https://res.cloudinary.com/dqgkvrmve/image/upload/v1775628763/El_Nido_ze1jbe.jpg",
    thumbnail:
      "https://res.cloudinary.com/dqgkvrmve/image/upload/v1775628863/IMG_6047_d5m3jl.webp",
    provinceCity: "Palawan",
    packageOverview:
      "Experience El Nido’s crystal-clear lagoons, towering limestone cliffs, and white-sand beaches. Enjoy island hopping, snorkeling, and hidden lagoons—perfect for both adventure and relaxation.",
    price: 9995,
    star: 4,
  },
  {
    name: "Camiguin Island Born of Fire Escape",
    bg: "https://res.cloudinary.com/dqgkvrmve/image/upload/v1775628981/White_Island_ixukwd.jpg",
    thumbnail:
      "https://res.cloudinary.com/dqgkvrmve/image/upload/v1775628974/White_Island_f0wurp.webp",
    provinceCity: "Camiguin",
    packageOverview:
      "Discover Camiguin’s natural beauty with sandbars, waterfalls, and hot springs. Explore White Island, lush forests, and peaceful landscapes in this quiet tropical escape.",
    price: 8500,
    star: 4,
  },
  {
    name: "Cebu Heritage & Sto. Niño Pilgrimage Tour",
    bg: "https://res.cloudinary.com/dqgkvrmve/image/upload/v1775828398/St_Nino_yl23vq.jpg",
    thumbnail:
      "https://res.cloudinary.com/dqgkvrmve/image/upload/v1775628816/St_Nino_Chuch_vdzdqv.jpg",
    provinceCity: "Cebu",
    packageOverview:
      "Visit the Basilica Minore del Santo Niño in Cebu and explore nearby heritage sites. Experience local culture, history, and cuisine in this vibrant city.",
    price: 6500,
    star: 4,
  },
]

export const Packages = [
  {
    id: 2,
    name: "Waterfalls & Nature Escape: Lanao del Norte",
    packageOverview:
      "Discover the natural wonders of Lanao del Norte, from majestic waterfalls to serene coastal views and cultural landmarks.",
    location: "Iligan City, Lanao del Norte, Philippines",
    provinceCity: "Lanao del Norte",
    maxCapacity: 10,
    price: 8750,
    duration: "3D2N",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZTAhSv_0FzNbr-wGWwFB8OGSbVcIQbE8R59NLHtA2jA1QLNwb7R9oXeM2YxINlGHRxsNClboTPqjYEfG4cSdIn77sViCGfOUuOxXZCxTDO8_ruB2rF5KACHERuM9KTtTIeRcxBrpbxbU/s1600/DSC_0415.JPG",
    highlights: [
      "https://i.ytimg.com/vi/1Qb52Lz6PGU/maxresdefault.jpg",
      "https://www.awanderfulsole.com/wp-content/uploads/2015/01/dsc04644.jpg",
      "https://farm4.staticflickr.com/3797/10863460033_ac64c845c3_o.jpg",
    ],
    itinerary: [
      {
        day: 1,
        activities: [
          "Arrival at Iligan City",
          "Hotel check-in",
          "City tour (Anahaw Amphitheater, City Plaza)",
          "Sunset viewing at Bayug Island",
        ],
      },
      {
        day: 2,
        activities: [
          "Visit Maria Cristina Falls",
          "Explore Tinago Falls (swimming & bamboo raft)",
          "Lunch near the falls",
          "Visit Mimbalot Falls",
          "Dinner and free time",
        ],
      },
      {
        day: 3,
        activities: [
          "Morning visit to Dodiongan Falls",
          "Pasalubong shopping",
          "Check-out and departure",
        ],
      },
    ],
    inclusion: [
      "2 nights accommodation",
      "Daily breakfast",
      "Roundtrip airport/terminal transfers",
      "Entrance fees",
      "Tour guide",
      "Van transportation",
    ],
    exclusion: [
      "Flights",
      "Lunch and dinner",
      "Personal expenses",
      "Optional activities",
    ],
    reviews: [
      {
        rating: 5,
        comment:
          "Absolutely stunning waterfalls! Tinago Falls was the highlight of the trip.",
        media: [
          "https://bisayatraveler.com/wp-content/uploads/2025/02/Cheers-2-1140x595.jpg",
        ],
      },
      {
        rating: 4,
        comment:
          "Very well organized tour. Just wish we had more time in each location.",
        media: [],
      },
      {
        rating: 3,
        comment:
          "Good experience overall, but the stairs going down Tinago Falls were quite tiring.",
        media: [],
      },
      {
        rating: 2,
        comment:
          "Weather didn’t cooperate, but the guides were helpful and accommodating.",
        media: [],
      },
      {
        rating: 1,
        comment:
          "Transportation delay affected our schedule, but destinations were still beautiful.",
        media: [
          "https://www.phtourguide.com/wp-content/uploads/2016/04/Mark-at-Mimbalot-Falls.jpg",
        ],
      },
    ],
  },
  {
    id: 6,
    name: "Camiguin Island Escape",
    packageOverview:
      "Explore the Island Born of Fire with waterfalls, sandbars, and volcanic landscapes.",
    location: "Camiguin, Philippines",
    provinceCity: "Camiguin",
    maxCapacity: 10,
    duration: "3D2N",
    price: 9200,
    image:
      "https://lifestyle.inquirer.net/files/2023/09/camiguin-White-Island-with-Hibok-Hibok-as-background.jpeg",
    highlights: [
      "https://thefroggyadventures.com/wp-content/uploads/2024/11/white-island-camiguin-sandbar.jpg",
      "https://philippinetravels.ph/wp-content/uploads/2022/08/45-Camiguin-Tourist-Spots-Tuasan-Falls-1024x576.jpg",
    ],
    itinerary: [
      {
        day: 1,
        activities: [
          "Arrival in Camiguin",
          "Check-in at Paras Beach Resort",
          "Sunset at White Island",
        ],
      },
      {
        day: 2,
        activities: [
          "Visit Katibawasan Falls",
          "Sunken Cemetery tour",
          "Ardent Hot Spring",
        ],
      },
      {
        day: 3,
        activities: ["Mantigue Island trip", "Departure"],
      },
    ],
    inclusion: [
      "2 nights accommodation at Paras Beach Resort",
      "Breakfast",
      "Boat transfers",
      "Tour guide",
      "Entrance fees",
    ],
    exclusion: ["Flights", "Meals not stated", "Personal expenses"],
    reviews: [
      {
        rating: 5,
        comment: "White Island is unreal!",
        media: [
          "https://thefroggyadventures.com/wp-content/uploads/2024/10/tuasan-falls-camiguin-swimming.jpg",
        ],
      },
      { rating: 4, comment: "Peaceful and beautiful.", media: [] },
      { rating: 3, comment: "Small island but worth it.", media: [] },
      { rating: 2, comment: "Too hot during midday tours.", media: [] },
      {
        rating: 1,
        comment: "Boat delays happened.",
        media: [
          "https://smallgirlbigbackpack.com/wp-content/uploads/2024/02/camiguinwhiteislandboat-866x650.jpg",
        ],
      },
    ],
  },
  {
    id: 7,
    name: "Bukidnon Highlands Adventure",
    packageOverview:
      "Experience cool weather, mountains, and scenic views in Bukidnon.",
    location: "Malaybalay & Dahilayan, Bukidnon",
    provinceCity: "Bukidnon",
    maxCapacity: 8,
    price: 8700,
    image:
      "https://i0.wp.com/www.projectlupad.com/wp-content/uploads/2019/05/World-Class-Dahilayan-Parks-in-Mindanao-Copyright-to-Project-LUPAD-3-1.jpg?fit=1024%2C643&ssl=1",
    highlights: [
      "https://pix10.agoda.net/hotelImages/301773/-1/7c172a8869f89606862ab8390a153096.png?ca=0&ce=1&s=1024x768",
    ],
    duration: "3D2N",
    itinerary: [
      {
        day: 1,
        activities: [
          "Arrival in Bukidnon",
          "Check-in at Dahilayan Forest Park Resort",
          "Leisure time",
        ],
      },
      {
        day: 2,
        activities: [
          "Zipline at Dahilayan Adventure Park",
          "Visit Del Monte Pineapple Plantation",
          "Scenic mountain views",
        ],
      },
      {
        day: 3,
        activities: ["Morning relaxation", "Departure"],
      },
    ],
    inclusion: [
      "2 nights accommodation at Dahilayan Forest Park Resort",
      "Breakfast",
      "Entrance fees",
      "Tour guide",
      "Transportation",
    ],
    exclusion: ["Flights", "Meals not stated", "Personal expenses"],
    reviews: [
      { rating: 5, comment: "Cool weather + amazing views!", media: [] },
      {
        rating: 4,
        comment: "Zipline was the highlight.",
        media: [
          "https://static.wixstatic.com/media/d62bd8_9c4694cc98c047078f1b6fbac7750b06~mv2.jpg/v1/fill/w_560,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/d62bd8_9c4694cc98c047078f1b6fbac7750b06~mv2.jpg",
        ],
      },
      { rating: 3, comment: "Bit far but worth it.", media: [] },
      { rating: 2, comment: "Limited food options.", media: [] },
      { rating: 1, comment: "Transport was tiring.", media: [] },
    ],
  },
  {
    id: 8,
    name: "Siargao Island Adventure",
    packageOverview:
      "Surf, island hop, and explore the tropical paradise of Siargao.",
    location: "General Luna, Siargao",
    provinceCity: "Surigao del Norte",
    maxCapacity: 10,
    price: 10500,
    image: "https://thehappytrip.com/wp-content/uploads/2017/02/CLUB-TARA.jpg",
    highlights: [
      "https://www.journeyera.com/wp-content/uploads/2019/01/siargao-sunset-spots-0831-1024x682.jpg",
      "https://tickettoridegroup.com/blog/wp-content/uploads/2018/06/Screen-Shot-2018-06-19-at-17.22.05.png",
    ],
    duration: "3D2N",
    itinerary: [
      {
        day: 1,
        activities: [
          "Arrival in Siargao",
          "Check-in at Siargao Bleu Resort",
          "Cloud 9 sunset",
        ],
      },
      {
        day: 2,
        activities: [
          "Island hopping (Naked, Daku, Guyam)",
          "Swimming and snorkeling",
        ],
      },
      {
        day: 3,
        activities: ["Sugba Lagoon visit", "Departure"],
      },
    ],
    inclusion: [
      "2 nights accommodation at Siargao Bleu Resort",
      "Breakfast",
      "Island hopping tours",
      "Boat transfers",
      "Tour guide",
    ],
    exclusion: ["Flights", "Lunch and dinner", "Personal expenses"],
    reviews: [
      { rating: 5, comment: "Best island trip ever!", media: [] },
      { rating: 4, comment: "Very fun but crowded.", media: [] },
      { rating: 3, comment: "Good but pricey.", media: [] },
      { rating: 2, comment: "Weather affected tours.", media: [] },
      { rating: 1, comment: "Flight delays ruined timing.", media: [] },
    ],
  },
  {
    id: 9,
    name: "Iligan Backpacker Falls Tour",
    packageOverview:
      "A budget-friendly adventure exploring Iligan’s famous waterfalls with simple accommodations.",
    location: "Iligan City, Lanao del Norte, Philippines",
    provinceCity: "Lanao del Norte",
    maxCapacity: 6,
    price: 4500,
    image:
      "https://preview.redd.it/tinago-falls-iligan-city-v0-hs93jnqmrgde1.jpeg?auto=webp&s=964d2e6a13f69efa7010b44f200308d4d0765624",
    highlights: [
      "https://live.staticflickr.com/7167/6777623905_1a2ea17919_b.jpg",
    ],
    duration: "3D2N",
    itinerary: [
      {
        day: 1,
        activities: [
          "Arrival and check-in",
          "DIY city exploration",
          "Local food trip",
        ],
      },
      {
        day: 2,
        activities: ["Visit Tinago Falls", "Visit Mimbalot Falls", "Free time"],
      },
      {
        day: 3,
        activities: ["Souvenir shopping", "Departure"],
      },
    ],
    inclusion: [
      "2 nights accommodation at Cheradel Suites Iligan",
      "Shared van transportation (Day 2 only)",
      "Tour assistance",
      "Entrance fees",
    ],
    exclusion: ["Meals", "Flights", "Personal expenses"],
    reviews: [
      {
        rating: 5,
        comment: "Sulit for the price!",
        media: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfTlOBQxc2Wo4knOk32twytK_co5AUzR7ggg&s",
        ],
      },
      {
        rating: 4,
        comment: "Simple but enjoyable.",
        media: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZp3jTw8dl6ui08fmWWfSOLKAuAz6KqfWEMA&s",
        ],
      },
      { rating: 3, comment: "Basic accommodation.", media: [] },
      { rating: 2, comment: "Limited inclusions.", media: [] },
      { rating: 1, comment: "Not for luxury travelers.", media: [] },
    ],
  },
  {
    id: 10,
    name: "Camiguin Budget Island Tour",
    packageOverview:
      "Explore Camiguin on a budget with essential tours and affordable accommodations.",
    location: "Mambajao, Camiguin, Philippines",
    provinceCity: "Camiguin",
    maxCapacity: 8,
    price: 5200,
    image:
      "https://philippinetravels.ph/wp-content/uploads/2023/02/300893858_10227636085557409_3412709398823719818_n-1024x576.jpg?v=1675335878",
    highlights: [
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/5f/7e/83/white-island-camiguin.jpg?w=900&h=500&s=1",
    ],
    duration: "3D2N",
    itinerary: [
      {
        day: 1,
        activities: [
          "Arrival and check-in",
          "Visit White Island (DIY)",
          "Sunset viewing",
        ],
      },
      {
        day: 2,
        activities: [
          "Visit Katibawasan Falls",
          "Sunken Cemetery",
          "Ardent Hot Spring",
        ],
      },
      {
        day: 3,
        activities: ["Free time", "Departure"],
      },
    ],
    inclusion: [
      "2 nights accommodation at GV Hotel Camiguin",
      "Land tour (shared)",
      "Entrance fees (selected sites)",
    ],
    exclusion: [
      "Boat fees (White Island optional)",
      "Meals",
      "Flights",
      "Environmental fees",
    ],
    reviews: [
      {
        rating: 5,
        comment: "Affordable and fun!",
        media: [
          "https://i0.wp.com/www.howshewanders.com/wp-content/uploads/2020/03/white-island-camiguin-fp2.jpg?fit=1000%2C563&ssl=1",
        ],
      },
      {
        rating: 4,
        comment: "Great for backpackers.",
        media: [
          "https://mindanews.com/wp-content/uploads/2024/11/13camiguin-copy.jpg",
        ],
      },
      { rating: 3, comment: "Very basic stay.", media: [] },
      { rating: 2, comment: "Extra costs add up.", media: [] },
      { rating: 1, comment: "Too DIY for me.", media: [] },
    ],
  },
  {
    id: 11,
    name: "Bukidnon Chill Budget Escape",
    packageOverview:
      "Enjoy the cool climate of Bukidnon with a simple and budget-friendly getaway.",
    location: "Malaybalay, Bukidnon, Philippines",
    provinceCity: "Bukidnon",
    maxCapacity: 6,
    price: 4800,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoUdKdAN8A8Tx2BLP6Lar5Ib2NaYAULnI3tQ&s",
    highlights: [
      "https://www.projectlupad.com/wp-content/uploads/2018/03/Dahilayan-Adventure-Park-Bukidnon-Aerial-View-Copyright-to-Project-LUPAD-11.jpg",
    ],
    duration: "3D2N",
    itinerary: [
      {
        day: 1,
        activities: [
          "Arrival and check-in",
          "Leisure time",
          "Night market visit",
        ],
      },
      {
        day: 2,
        activities: [
          "Visit Dahilayan area (entrance only)",
          "Viewpoints and photo spots",
          "Free time",
        ],
      },
      {
        day: 3,
        activities: ["Morning coffee with mountain view", "Departure"],
      },
    ],
    inclusion: [
      "2 nights accommodation at Pine Hills Hotel Bukidnon",
      "Shared transportation",
      "Tour assistance",
    ],
    exclusion: [
      "Activities (zipline, rides)",
      "Meals",
      "Flights",
      "Entrance fees (some sites)",
    ],
    reviews: [
      {
        rating: 5,
        comment: "Perfect chill trip!",
        media: [
          "https://s3-cdn.hotellinksolutions.com/hls/data/1989/website/tour/2347/thumbs/full_go-kart1_1750850954.jpg",
          "https://ge2lovelocal.wordpress.com/wp-content/uploads/2023/04/334126962_3270032659915062_383737006623751257_n-1-edited-1.jpg?w=1024",
        ],
      },
      { rating: 4, comment: "Relaxing and cheap.", media: [] },
      { rating: 3, comment: "Limited activities included.", media: [] },
      { rating: 2, comment: "Too basic.", media: [] },
      { rating: 1, comment: "Not much to do without extra budget.", media: [] },
    ],
  },
  {
    id: 15,
    name: "Davao Luxury City & Island Escape",
    packageOverview:
      "A premium 7-day experience combining urban luxury, nature parks, and exclusive island hopping in Davao.",
    location: "Davao City & Samal Island, Philippines",
    provinceCity: "Davao del Sur",
    maxCapacity: 6,
    price: 32000,
    image:
      "https://images.squarespace-cdn.com/content/v1/5c64dd0a2727be078751d911/1771557757767-X9TAL7T6SD2PQZXKQ647/a4.jpg",
    highlights: [
      "https://images.squarespace-cdn.com/content/v1/5c64dd0a2727be078751d911/1601458781531-N7CSVAZ6VE3AR9PWMKTS/92243851_2854247497956243_8874492281487360000_o.jpg?format=1500w",
    ],
    duration: "7D6N",
    itinerary: [
      {
        day: 1,
        activities: [
          "VIP airport pickup",
          "Check-in at DusitD2 Davao",
          "City fine dining",
        ],
      },
      {
        day: 2,
        activities: [
          "Eden Nature Park private tour",
          "Malagos Garden experience",
        ],
      },
      {
        day: 3,
        activities: [
          "Philippine Eagle Center VIP tour",
          "Shopping at Abreeza Mall",
        ],
      },
      {
        day: 4,
        activities: [
          "Private transfer to Samal Island",
          "Check-in at Pearl Farm Beach Resort",
        ],
      },
      { day: 5, activities: ["Island hopping (private yacht)", "Snorkeling"] },
      { day: 6, activities: ["Spa & beachfront relaxation", "Sunset dinner"] },
      { day: 7, activities: ["Free time", "Departure"] },
    ],
    inclusion: [
      "6 nights luxury accommodation (DusitD2 + Pearl Farm)",
      "All meals (full board)",
      "Private yacht island hopping",
      "VIP transfers",
      "Entrance fees",
      "Tour guide + concierge",
    ],
    exclusion: ["International flights", "Personal expenses"],
    reviews: [
      {
        rating: 5,
        comment: "Davao luxury at its finest!",
        media: [
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/f1/f9/fc/wedding-prenup-shoot.jpg?w=900&h=500&s=1",
          "https://cdn.webhotelier.net/photos/w=1920/pearlfarm/L304747.jpg",
        ],
      },
      {
        rating: 5,
        comment: "Pearl Farm was unforgettable.",
        media: [
          "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhtv2665yFph2CFCYgxLmegXUUL6KbRUN8BHV2S604YCaCKZEjqUXwm0jQUsEbDQ3iKV3mSZ53XTdVukR9j4UYvZkeRqlLy-afUbVGYfLMpNJL1cl05HNqaecBjwcTmNPoxolJiUQ/s1600/P1070223_1(1).jpg",
        ],
      },
      { rating: 4, comment: "Very well organized.", media: [] },
    ],
  },
  {
    id: 16,
    name: "Siargao Elite Surf & Lagoon Experience",
    packageOverview:
      "A luxury 8-day island experience featuring surfing, lagoons, private boats, and premium beachfront stays.",
    location: "General Luna, Siargao, Philippines",
    provinceCity: "Surigao del Norte",
    maxCapacity: 6,
    price: 35000,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpitpwCRL7zgmt_4KKjA-SuG3Sz6MDIoaahg&s",
    highlights: [
      "https://www.theluxeguide.com/wp-content/uploads/2022/05/Catamaran-for-rent-siargao.webp",
      "https://www.sunchasingtravelers.com/wp-content/uploads/2020/08/sugba-lagoon-siargao-boat-house.jpg",
      "https://www.journeyera.com/wp-content/uploads/2017/12/siargao-sunset-mangrove-.jpg",
    ],
    duration: "8D7N",
    itinerary: [
      { day: 1, activities: ["VIP arrival", "Check-in at Nay Palad Hideaway"] },
      {
        day: 2,
        activities: ["Private surf lesson at Cloud 9", "Beachfront dinner"],
      },
      { day: 3, activities: ["Island hopping yacht tour"] },
      { day: 4, activities: ["Sugba Lagoon private tour"] },
      { day: 5, activities: ["Cave pool exploration", "Massage spa day"] },
      { day: 6, activities: ["Mangrove tour", "Sunset cruise"] },
      { day: 7, activities: ["Free luxury resort day"] },
      { day: 8, activities: ["Departure"] },
    ],
    inclusion: [
      "7 nights at Nay Palad Hideaway",
      "All meals included",
      "Private yacht tours",
      "Surf coaching",
      "Spa treatments",
      "VIP transfers",
    ],
    exclusion: ["Flights", "Personal shopping"],
    reviews: [
      {
        rating: 5,
        comment: "Best island experience ever!",
        media: [
          "https://theweekendvoyager.weebly.com/uploads/4/6/5/9/46596769/1712791_orig.jpg",
        ],
      },
      { rating: 5, comment: "Luxury meets adventure.", media: [] },
    ],
  },
  {
    id: 17,
    name: "Zamboanga Luxury Cultural & Coastal Journey",
    packageOverview:
      "A 10-day luxury journey through Zamboanga’s pink beaches, heritage sites, and private island escapes.",
    location: "Zamboanga City & nearby islands, Philippines",
    provinceCity: "Zamboanga del Sur",
    maxCapacity: 6,
    price: 38000,
    image:
      "https://i.pinimg.com/564x/15/b6/b6/15b6b6aeb506499cb86c98039f5606ca.jpg",
    highlights: [
      "https://davao.bluelineph.com/wp-content/uploads/sites/51/2023/05/Yakan-1.jpg",
      "https://images.hive.blog/0x0/https://files.steempeak.com/file/steempeak/diosarich/zJC3UVC5-seashore20pink20beach1.jpg",
    ],
    duration: "10D9N",
    itinerary: [
      { day: 1, activities: ["Arrival", "Check-in at Ciudad Hotel Zamboanga"] },
      {
        day: 2,
        activities: ["Fort Pilar historical tour", "City heritage walk"],
      },
      { day: 3, activities: ["Yakan Village cultural immersion"] },
      { day: 4, activities: ["Private boat to Great Santa Cruz Island"] },
      { day: 5, activities: ["Pink Beach relaxation day"] },
      { day: 6, activities: ["Island hopping private tour"] },
      { day: 7, activities: ["Local cuisine fine dining"] },
      { day: 8, activities: ["Spa day at hotel"] },
      { day: 9, activities: ["Free luxury day"] },
      { day: 10, activities: ["Departure"] },
    ],
    inclusion: [
      "9 nights luxury hotel accommodation",
      "Private boat transfers",
      "All meals",
      "Cultural tours",
      "Tour guide + security escort",
    ],
    exclusion: ["Flights", "Personal expenses"],
    reviews: [
      {
        rating: 5,
        comment: "Zamboanga is underrated luxury!",
        media: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmeBUBT1M7YrP0xR4wve0IcOsJvH4peDJaTA&s",
        ],
      },
      { rating: 4, comment: "Pink beach was amazing.", media: [] },
    ],
  },
  {
    id: 18,
    name: "Ultimate Mindanao Grand Luxury Expedition",
    packageOverview:
      "A once-in-a-lifetime 24-day luxury journey across Mindanao covering cities, islands, highlands, and cultural heritage.",
    location:
      "Multi-city Mindanao Tour (Davao, Siargao, Zamboanga, Bukidnon, Cagayan de Oro)",
    provinceCity: "Mindanao",
    maxCapacity: 4,
    price: 125000,
    image:
      "https://image-tc.galaxy.tf/wijpeg-7929zq4qi0e75ubmqvqwx0fyh/dive-spot-ligid-island-in-samal.jpg?width=1920",
    highlights: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Whvl2ptejodcqTAAKM-447mQ-vjVenOqig&s",
      "https://gttp.images.tshiftcdn.com/256128/x/0/cagayan-de-oro-travel-guide-1.jpg?crop=1.91%3A1&fit=crop&width=1200",
      "https://bks-prd-5-global-wp-new-blog.storage.googleapis.com/wp-content/uploads/2023/04/13130628/products-please-senses-shot-mature-couple-enjoying-hot-stone-treatment-995x576-1.jpg",
    ],
    duration: "24D23N",
    itinerary: [
      { day: 1, activities: ["Arrival in Davao", "DusitD2 luxury stay"] },
      { day: 2, activities: ["Davao city tour"] },
      { day: 3, activities: ["Samal Island yacht tour"] },
      { day: 4, activities: ["Eden Nature Park VIP tour"] },
      { day: 5, activities: ["Transfer to Bukidnon"] },
      { day: 6, activities: ["Dahilayan luxury stay"] },
      { day: 7, activities: ["Highland leisure"] },
      { day: 8, activities: ["Transfer to CDO"] },
      { day: 9, activities: ["Whitewater rafting VIP"] },
      { day: 10, activities: ["Rest day luxury hotel"] },
      { day: 11, activities: ["Fly to Siargao"] },
      { day: 12, activities: ["Island hopping yacht"] },
      { day: 13, activities: ["Surf lessons"] },
      { day: 14, activities: ["Spa day"] },
      { day: 15, activities: ["Transfer to Zamboanga"] },
      { day: 16, activities: ["Pink beach tour"] },
      { day: 17, activities: ["Cultural tour"] },
      { day: 18, activities: ["Island hopping"] },
      { day: 19, activities: ["Luxury rest day"] },
      { day: 20, activities: ["Fine dining experience"] },
      { day: 21, activities: ["Free luxury day"] },
      { day: 22, activities: ["Shopping & leisure"] },
      { day: 23, activities: ["Final spa & dinner"] },
      { day: 24, activities: ["Departure"] },
    ],
    inclusion: [
      "23 nights luxury accommodation across Mindanao",
      "All domestic flights included",
      "Private transfers throughout",
      "All meals (fine dining + local cuisine)",
      "Private yacht tours",
      "VIP tour guides",
      "Spa packages",
      "Concierge service",
    ],
    exclusion: ["International flights", "Personal luxury shopping"],
    reviews: [
      {
        rating: 5,
        comment: "The ultimate Mindanao experience!",
        media: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLN7GKkXgg-rz2oLUmJAkObC_Vox32ctBEmQ&s",
        ],
      },
      { rating: 5, comment: "Expensive but life-changing trip.", media: [] },
    ],
  },
  {
    id: 1,
    name: "Iligan Waterfalls Express Adventure",
    packageOverview:
      "A short nature escape exploring Iligan City waterfalls including Tinago Falls and Maria Cristina Falls.",
    location: "Iligan City Tour Base",
    provinceCity: "Lanao del Norte",
    maxCapacity: 6,
    price: 6500,
    image:
      "https://www.travel-tramp.com/wp-content/uploads/2018/07/IMG_9508-Copy-Copy-1024x683.jpg",
    highlights: [
      "https://images.squarespace-cdn.com/content/v1/6284ae28ba19530f06620d18/0da71aa1-f1e7-4655-96b9-4e33788da6e7/MariaCristinaFallsJuly2006.jpg",
    ],
    duration: "3D2N",
    itinerary: [
      {
        day: 1,
        activities: ["Arrival and city tour", "Visit Maria Cristina Falls"],
      },
      {
        day: 2,
        activities: ["Tinago Falls trekking and swimming"],
      },
      {
        day: 3,
        activities: ["Mimbalot Falls visit", "Free time and local food tour"],
      },
    ],
    inclusion: ["Van transfers", "Tour guide", "Entrance fees"],
    exclusion: ["Meals", "Airfare"],
    reviews: [],
  },
]
