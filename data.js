// Pflege NUR diese Datei.
//
// Schema pro Spot:
// {
//   name: "Imbissname",
//   street: "Straße",
//   houseNumber: "12a",
//   postalCode: "45127",
//   city: "Essen",
//   lat: 51.4566,
//   lng: 7.0123,
//   category: "Pommesbude", // optional (für Filter)
//   tags: ["Taxi-Teller", "Pommes"], // optional (für Suche)
//   imageUrl: "https://.../bild.jpg" // optional
//   reviews: [
//     { stars: 4.5, date: "2025-12-29" },
//     { stars: 4.0, date: "2025-10-03" }
//   ]
// }

const spots = [
  {
    name: "Beispiel-Imbiss Ruhrpott",
    street: "Musterstraße",
    houseNumber: "12",
    postalCode: "45127",
    city: "Essen",
    lat: 51.456600,
    lng: 7.012300,
    category: "Pommesbude",
    tags: ["Taxi-Teller", "Pommes", "Klassiker"],
    // imageUrl: "https://example.com/taxiteller.jpg",
    reviews: [
      { stars: 4.5, date: "2025-12-29" },
      { stars: 4.0, date: "2025-11-02" }
    ]
  },
  {
    name: "Grill am Bahnhof",
    street: "Bahnhofstraße",
    houseNumber: "3",
    postalCode: "47051",
    city: "Duisburg",
    lat: 51.434400,
    lng: 6.762300,
    category: "Grill",
    tags: ["Taxi-Teller", "Soße"],
    reviews: [
      { stars: 3.5, date: "2025-12-10" }
    ]
  },
  {
    name: "Curry & Co.",
    street: "Altmarkt",
    houseNumber: "1a",
    postalCode: "45879",
    city: "Gelsenkirchen",
    lat: 51.517100,
    lng: 7.085700,
    category: "Currywurst",
    tags: ["Taxi-Teller", "Currywurst"],
    reviews: [
      { stars: 4.0, date: "2025-12-02" },
      { stars: 4.5, date: "2025-09-18" }
    ]
  }
];
