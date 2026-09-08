/* ============================================================
   Anfield Motors — store data
   ============================================================ */

export const PHONE = "+256 700 000 000";
export const PHONE_HREF = "tel:+256700000000";
export const WHATSAPP = "https://wa.me/256700000000";
export const EMAIL = "sales@anfieldmotors.ug";
export const EMAIL_HREF = "mailto:sales@anfieldmotors.ug";
export const ADDRESS =
  "Kireka, Kampala–Jinja Highway, next to Landing Washing Bay, Wakiso District, Uganda.";
export const HOURS = "Monday – Saturday · 8:00 AM – 7:00 PM · Sunday by appointment";

/** Format an integer as Ugandan shillings, e.g. 185000 -> "185,000" */
export function ugx(n: number): string {
  return new Intl.NumberFormat("en-UG").format(n);
}

/** Build a WhatsApp deep link with a pre-filled message. */
export function waLink(message: string): string {
  return `${WHATSAPP}?text=${encodeURIComponent(message)}`;
}

/* ------------------------------ CATEGORIES ------------------------------ */

export interface Category {
  id: string;
  name: string;
  icon: string; // lucide icon name
  blurb: string;
}

export const categories: Category[] = [
  { id: "auto-spares", name: "Auto Spares", icon: "Cog", blurb: "Filters, plugs, gaskets & service kits" },
  { id: "diagnostics", name: "Diagnostics & Tools", icon: "ScanLine", blurb: "Scanners, testers & workshop tools" },
  { id: "wiring", name: "Wiring & Electrical", icon: "Cable", blurb: "Looms, fuse boxes, harnesses & ECU wiring" },
  { id: "suspension", name: "Suspension & Brakes", icon: "Waves", blurb: "Air struts, compressors, discs & pads" },
  { id: "batteries", name: "Batteries & Power", icon: "BatteryCharging", blurb: "Jump starters, chargers & electrical" },
  { id: "tools", name: "Workshop Equipment", icon: "Wrench", blurb: "Hand tools, kits & garage essentials" },
];

/* ------------------------------ PRODUCTS ------------------------------ */

export interface Product {
  id: string;
  name: string;
  category: string; // category id
  brand: string;
  image: string;
  price: number; // UGX, current
  oldPrice?: number; // UGX, before discount
  rating: number; // 0–5
  reviews: number;
  badge?: string;
  description: string;
}

export const products: Product[] = [
  {
    id: "obd2-scanner",
    name: "OBD2 Diagnostic Scanner",
    category: "diagnostics",
    brand: "Ancel",
    image: "./images/products/obd2-scanner.jpg",
    price: 185000,
    oldPrice: 240000,
    rating: 4.7,
    reviews: 330,
    badge: "Hot Deal",
    description: "Reads & clears engine codes, live data and freeze-frame on most vehicles from 1996 onward.",
  },
  {
    id: "bluedriver-pro",
    name: "BlueDriver Pro Bluetooth Scanner",
    category: "diagnostics",
    brand: "BlueDriver",
    image: "./images/products/bluedriver-scanner.png",
    price: 350000,
    oldPrice: 420000,
    rating: 4.9,
    reviews: 178,
    badge: "Official",
    description: "Bluetooth OBD2 dongle with full system scans, live data and repair reports on your phone.",
  },
  {
    id: "socket-set",
    name: "151pc Socket & Ratchet Set",
    category: "tools",
    brand: "Kingbolen",
    image: "./images/products/socket-set.webp",
    price: 135000,
    oldPrice: 180000,
    rating: 4.6,
    reviews: 205,
    description: "High-torque chrome-vanadium sockets, ratchets and bits in a portable carry case.",
  },
  {
    id: "service-kit",
    name: "Full Service Kit — Filters & Plugs",
    category: "auto-spares",
    brand: "Bosch",
    image: "./images/products/service-kit.jpg",
    price: 95000,
    oldPrice: 125000,
    rating: 4.7,
    reviews: 212,
    badge: "Best Seller",
    description: "Oil, air, fuel and cabin filters plus a spark plug set, matched to your vehicle.",
  },
  {
    id: "oil-filter-combo",
    name: "Oil & Filter Combo (OEM Spec)",
    category: "auto-spares",
    brand: "Liqui Moly",
    image: "./images/products/oil-filter.jpg",
    price: 120000,
    oldPrice: 150000,
    rating: 4.8,
    reviews: 96,
    description: "Full-synthetic engine oil with an OEM-spec filter — the exact service combination we use in the workshop.",
  },
  {
    id: "air-filter-set",
    name: "Performance Air Filter Set",
    category: "auto-spares",
    brand: "Mann Filter",
    image: "./images/products/air-filters.jpg",
    price: 65000,
    oldPrice: 85000,
    rating: 4.5,
    reviews: 140,
    description: "High-flow air filters that protect the engine while keeping breathing effortless.",
  },
  {
    id: "plugs-bundle",
    name: "Spark Plugs & Filter Bundle",
    category: "auto-spares",
    brand: "NGK",
    image: "./images/products/filters-plugs.jpg",
    price: 140000,
    oldPrice: 170000,
    rating: 4.6,
    reviews: 88,
    description: "Iridium spark plugs plus the filters to complete a proper tune-up in one box.",
  },
  {
    id: "gasket-set",
    name: "Full Engine Gasket Set",
    category: "auto-spares",
    brand: "Genuine / OEM",
    image: "./images/parts.jpg",
    price: 280000,
    oldPrice: 350000,
    rating: 4.7,
    reviews: 54,
    description: "Complete top-end and bottom-end gasket kit for engine rebuilds — no mystery seals.",
  },
  {
    id: "air-strut",
    name: "Range Rover Air Suspension Strut",
    category: "suspension",
    brand: "Genuine Range Rover",
    image: "./images/products/air-strut.jpg",
    price: 950000,
    oldPrice: 1150000,
    rating: 4.9,
    reviews: 63,
    badge: "Official",
    description: "Front or rear air strut for Range Rover & Sport — ride height restored to factory.",
  },
  {
    id: "air-compressor",
    name: "Air Suspension Compressor Kit",
    category: "suspension",
    brand: "WABCO",
    image: "./images/products/air-strut-2.jpg",
    price: 720000,
    oldPrice: 860000,
    rating: 4.7,
    reviews: 48,
    description: "Replacement compressor with relay kit for Range Rover air systems. Fitted & calibrated in-house.",
  },
  {
    id: "brake-kit",
    name: "Brake Disc & Pad Kit (Front)",
    category: "suspension",
    brand: "Brembo",
    image: "./images/products/brake-kit.jpg",
    price: 320000,
    oldPrice: 400000,
    rating: 4.8,
    reviews: 121,
    badge: "Best Seller",
    description: "Vented discs with ceramic pads for a full front-axle brake refresh. Safety-critical — genuine only.",
  },
  {
    id: "brake-disc",
    name: "Vented Brake Disc (Single)",
    category: "suspension",
    brand: "Brembo",
    image: "./images/products/brake-disc.jpg",
    price: 210000,
    oldPrice: 260000,
    rating: 4.6,
    reviews: 97,
    description: "Balanced, heat-treated vented rotor. Sold as a single unit.",
  },
  {
    id: "brake-rotor",
    name: "Performance Brake Rotor",
    category: "suspension",
    brand: "Wilwood",
    image: "./images/products/brake-disc-2.jpg",
    price: 240000,
    oldPrice: 290000,
    rating: 4.5,
    reviews: 41,
    description: "Slotted performance rotor for spirited driving and heavy vehicles alike.",
  },
  {
    id: "wiring-loom",
    name: "Standalone Engine Wiring Loom + Fuse Block",
    category: "wiring",
    brand: "Anfield Wired",
    image: "./images/products/wiring-loom.jpg",
    price: 520000,
    oldPrice: 640000,
    rating: 4.8,
    reviews: 37,
    badge: "New",
    description: "Standalone loom with fuse block and OBD2 port — for engine swaps and full re-wires.",
  },
  {
    id: "wiring-classic",
    name: "12-Circuit Classic Car Wiring Loom",
    category: "wiring",
    brand: "Anfield Wired",
    image: "./images/products/wiring-classic.jpg",
    price: 380000,
    oldPrice: 470000,
    rating: 4.7,
    reviews: 29,
    description: "12-circuit loom with fuse box, relays and flasher — everything a classic needs to light up.",
  },
  {
    id: "jump-starter",
    name: "Portable Jump Starter 20000mAh",
    category: "batteries",
    brand: "Halo",
    image: "./images/products/jump-starter.jpg",
    price: 240000,
    oldPrice: 320000,
    rating: 4.7,
    reviews: 289,
    badge: "Hot Deal",
    description: "Starts flat batteries in seconds — with USB power bank, light and air compressor built in.",
  },
  {
    id: "jump-starter-pro",
    name: "Jump Starter Power Bank (30000mAh)",
    category: "batteries",
    brand: "Maant",
    image: "./images/products/jump-starter-pro.jpg",
    price: 180000,
    oldPrice: 230000,
    rating: 4.6,
    reviews: 156,
    description: "30000mAh booster for petrol and diesel engines, doubling as a fast-charge power bank.",
  },
];

/* ------------------------------ SERVICES ------------------------------ */

export interface Service {
  icon: string;
  title: string;
  body: string;
  price: string;
  duration: string;
  includes: string[];
  tag?: string;
}

/* Auto-electrical & wiring services — a core speciality */
export const wiringServices: Service[] = [
  {
    icon: "Cable",
    title: "Full Wiring Harness Replacement",
    body: "Complete loom manufacture and replacement — from the fuse box to every sensor, switch and light.",
    price: "From UGX 450,000",
    duration: "1–3 days",
    includes: ["New loom built to your vehicle", "Labelled, taped & loomed runs", "Fuse & relay box wired", "Full continuity test"],
    tag: "Most booked",
  },
  {
    icon: "SearchCheck",
    title: "Wiring Fault Tracing & Repair",
    body: "Shorts, open circuits and burnt wires traced methodically — so the real fault gets fixed, not patched.",
    price: "From UGX 80,000",
    duration: "Same day",
    includes: ["Circuit-by-circuit tracing", "Repair of melted / chewed wiring", "Proper solder & heat-shrink joints", "Re-test of the whole circuit"],
  },
  {
    icon: "CircuitBoard",
    title: "ECU & Module Wiring Repair",
    body: "Repair of damaged ECU, sensor and actuator wiring — without replacing the module when it doesn't need it.",
    price: "From UGX 120,000",
    duration: "Half–1 day",
    includes: ["Pin-level ECU checks", "CAN-bus & signal testing", "Connector & pin replacement", "Re-programming where needed"],
  },
  {
    icon: "BatteryCharging",
    title: "Alternator, Starter & Battery Wiring",
    body: "Charging and starting system rewires — battery cables, earths, alternator and starter feeds done properly.",
    price: "From UGX 90,000",
    duration: "Half day",
    includes: ["Battery & earth cable upgrade", "Alternator / starter feed repair", "Voltage-drop testing", "Charging system verification"],
  },
  {
    icon: "Lightbulb",
    title: "Lighting & Accessory Wiring",
    body: "Headlights, spots, alarms, sound systems, reversing cameras and tow-bar electrics — wired safely.",
    price: "From UGX 60,000",
    duration: "Same day",
    includes: ["Auxiliary lighting installs", "Alarm & sound system wiring", "Camera & parking sensors", "Trailer / tow-bar electrics"],
  },
  {
    icon: "ShieldAlert",
    title: "Airbag & ABS Harness Repair",
    body: "SRS and ABS wiring repairs done to spec — connectors re-pinned and systems re-scanned and cleared.",
    price: "From UGX 150,000",
    duration: "1 day",
    includes: ["SRS / ABS harness repair", "Connector de-pinning & replacement", "Post-repair scan & calibration", "Warning-light verification"],
  },
];

/* General workshop services */
export const services: Service[] = [
  {
    icon: "Wrench",
    title: "Engine Repair & Rebuild",
    body: "Full teardown, machining referral, rebuild and reassembly for engines that knock, smoke or overheat.",
    price: "From UGX 850,000",
    duration: "3–10 days",
    includes: ["Full teardown & inspection", "Genuine / OEM internals", "Factory torque & clearance", "Run-in & road test"],
    tag: "Signature",
  },
  {
    icon: "ScanLine",
    title: "Computer Diagnostics",
    body: "OBD-II scanning with live data — we read what the car is actually saying, so the real fault is fixed first time.",
    price: "From UGX 50,000",
    duration: "30–60 min",
    includes: ["Full system scan", "Live data & freeze-frame", "Plain-language explanation", "Itemised quote"],
  },
  {
    icon: "Mountain",
    title: "Range Rover / Land Rover Care",
    body: "Air suspension, electrical gremlins and engine work for Range Rover and Land Rover models.",
    price: "From UGX 150,000",
    duration: "By job",
    includes: ["Air suspension repair & calibration", "Electrical & module faults", "Engine & transmission work", "Dealer-level service"],
  },
  {
    icon: "CircleCheck",
    title: "BMW Servicing",
    body: "Dealer-level servicing plus engine and electrical repair for BMW saloons and SUVs.",
    price: "From UGX 120,000",
    duration: "Half–1 day",
    includes: ["Dealer-level servicing", "VANOS / timing work", "Cooling system repair", "Oil-leak correction"],
  },
  {
    icon: "Car",
    title: "Toyota Servicing",
    body: "General service, engine work and honest repairs for Toyota sedans, SUVs and pickups.",
    price: "From UGX 90,000",
    duration: "Half–1 day",
    includes: ["Scheduled servicing", "1HZ / 2TR engine work", "Suspension & steering", "Fleet servicing"],
  },
  {
    icon: "Activity",
    title: "Brakes, Suspension & Electrical",
    body: "Full chassis and electrical repair — pads, discs, shocks, wiring faults and beyond-engine diagnostics.",
    price: "From UGX 80,000",
    duration: "Half day",
    includes: ["Brake pads & discs", "Suspension & bushes", "Wiring fault repair", "Full safety check"],
  },
];

/* ------------------------------ PERKS ------------------------------ */

export const perks = [
  { icon: "BadgeCheck", title: "100% Original Products", body: "Genuine & quality assured" },
  { icon: "CircleDollarSign", title: "Best Prices in Uganda", body: "Unbeatable market prices" },
  { icon: "Truck", title: "Fast Delivery", body: "Across Uganda, on time" },
  { icon: "CreditCard", title: "Secure Payments", body: "MoMo, card or cash" },
  { icon: "Headphones", title: "Dedicated Support", body: "We're here to help" },
  { icon: "ShieldCheck", title: "Warranty Included", body: "Parts & workmanship" },
];

export const paymentMethods = ["MTN MoMo", "Airtel Money", "Cash on Delivery", "Visa", "Mastercard"];

/* ------------------------------ BRANDS ------------------------------ */

export interface Brand {
  id: string;
  index: string;
  name: string;
  tagline: string;
  origin: string;
  image: string;
  story: string[];
  expertise: string[];
  engines: string[];
  faults: { code: string; label: string }[];
  warStory: { title: string; body: string };
}

export const brands: Brand[] = [
  {
    id: "range-rover",
    index: "01",
    name: "Range Rover & Land Rover",
    tagline: "British luxury. Demanding engineering.",
    origin: "Solihull, England — since 1948",
    image: "./images/range-rover.jpg",
    story: [
      "The Land Rover was born on a farm in Anglesey in 1948, and the Range Rover arrived in 1970 to prove an SUV could be a luxury car. Seventy-five years later, these are some of the most capable — and most complex — vehicles on Ugandan roads.",
      "Air suspension that lowers itself over speed bumps. Electronics that manage everything from terrain response to seat bolsters. When a Range Rover develops a fault, it is rarely one simple thing — and that is exactly why we built our diagnostic-first process around them.",
    ],
    expertise: [
      "Air suspension faults & compressor failures",
      "Height sensors, valve blocks & calibration",
      "Supercharged V8 & TDV6 engine repair",
      "Electrical gremlins & module faults",
      "Cooling system & head gasket work",
      "Full servicing to factory schedule",
    ],
    engines: ["5.0L Supercharged V8", "3.0L TDV6 Diesel", "4.4L SDV8", "3.0L Si6"],
    faults: [
      { code: "AIR SUSPENSION", label: "Compressor failure — car drops overnight" },
      { code: "P0340", label: "Camshaft sensor faults & timing chain wear" },
      { code: "P0087", label: "Low fuel pressure — rail & pump issues" },
      { code: "C1131", label: "Height sensor calibration drift" },
    ],
    warStory: {
      title: "The suspension that three garages couldn't pin down",
      body: "A 2014 Range Rover Sport arrived with the front end sitting 40mm low and three previous repair attempts behind it. Our scan showed the compressor was fine — the valve block was bleeding pressure back. One calibrated valve block and a full system flush later, it sat perfectly. It's still a customer today.",
    },
  },
  {
    id: "bmw",
    index: "02",
    name: "BMW",
    tagline: "The ultimate driving machine — maintained properly.",
    origin: "Munich, Bavaria — since 1916",
    image: "./images/bmw.jpg",
    story: [
      "BMW built its name on one idea: the driver comes first. From the silky inline-sixes to the turbocharged four-cylinders in today's lineup, these engines reward precision — and punish neglect.",
      "A BMW will tell you exactly what is wrong with it, if you have the tools to listen. Plastic cooling components age, timing chains stretch on high-mileage turbo engines, and VANOS systems develop their own accent. We know the language fluently.",
    ],
    expertise: [
      "N20 / B48 timing chain & tensioner work",
      "VANOS & Valvetronic system repair",
      "Cooling system — radiators, hoses, electric water pumps",
      "Oil leak correction: valve covers, oil filter housings",
      "Turbocharger diagnosis & replacement",
      "Full dealer-level service without dealer prices",
    ],
    engines: ["3.0L B58 Turbo I6", "2.0L B48 Turbo I4", "4.4L N63 V8", "1.5L B38 I3"],
    faults: [
      { code: "P0012", label: "VANOS timing over-retarded — chain or solenoid" },
      { code: "P0301", label: "Cylinder misfire — coils, injectors, compression" },
      { code: "CD9E20", label: "Electric water pump failure — overheat risk" },
      { code: "P0171", label: "Lean mixture — vacuum & intake gasket leaks" },
    ],
    warStory: {
      title: "The timing chain we caught just in time",
      body: "A 320i came in for what the owner called 'a weird rattle on cold starts.' The scan pointed to camshaft correlation. We pulled the cover and found a stretched chain with a failing tensioner — one more month and it would have jumped. The engine was saved. The look on his face when we showed him the old parts? Priceless.",
    },
  },
  {
    id: "toyota",
    index: "03",
    name: "Toyota",
    tagline: "The backbone of Uganda's roads.",
    origin: "Toyota City, Japan — since 1937",
    image: "./images/toyota.jpg",
    story: [
      "From the Land Cruiser that crosses borders without complaint to the Hilux that carries half the country's trade, Toyota owns the roads here — and for good reason. They are engineered to be repaired, not just replaced.",
      "But even a legend needs care. Neglected cooling systems, worn timing kits and tired injectors will stop anything eventually. Our Toyota bench sees everything from the bulletproof 1HZ diesel to modern hybrid systems — and keeps them earning.",
    ],
    expertise: [
      "1HZ / 1HD-T diesel engine rebuilds",
      "2TR-FE, 1GR-FE petrol engine service",
      "Hybrid system health checks & inverter cooling",
      "Land Cruiser, Prado, Hilux, Fortuner & Corolla",
      "Suspension, bushes & steering racks",
      "Fleet servicing for businesses & NGOs",
    ],
    engines: ["4.2L 1HZ Diesel I6", "2.7L 2TR-FE I4", "4.0L 1GR-FE V6", "2.5L Hybrid Dynamic Force"],
    faults: [
      { code: "P0401", label: "EGR flow insufficient — clogging & carbon" },
      { code: "P0172", label: "Rich mixture — leaking injectors & MAF" },
      { code: "P0A80", label: "Hybrid battery degradation warning" },
      { code: "P0128", label: "Coolant thermostat below regulating temp" },
    ],
    warStory: {
      title: "The 1HZ with 640,000 km on the clock",
      body: "A Land Cruiser 70-series arrived towing its own trailer, engine knocking hard. We rebuilt the 1HZ — new pistons, line-bored bearings, full gasket set — and reminded the owner this engine had already outlived two of its contemporaries. He drove it back to Mbarara the same week. That's the Toyota way.",
    },
  },
];

/* ------------------------------ ENGINES ------------------------------ */

export interface Engine {
  id: string;
  name: string;
  short: string;
  brands: string;
  image: string;
  config: string;
  displacement: string;
  character: string;
  knownFor: string;
  faults: string[];
  spec: { label: string; value: string }[];
}

export const engines: Engine[] = [
  {
    id: "sc-v8",
    name: "5.0L Supercharged V8",
    short: "Petrol · V8",
    brands: "Range Rover / Land Rover",
    image: "./images/engine-v8.jpg",
    config: "V8 — 32 valves, supercharged",
    displacement: "4,997 cc",
    character: "Effortless, muscular power. The engine that makes a Range Rover feel like it's gliding.",
    knownFor: "Torque everywhere in the rev range — and a supercharger whine you never get tired of.",
    faults: [
      "Timing chain guide wear on high-mileage units",
      "Supercharger nose bearing & coupler noise",
      "Carbon build-up on intake valves (direct injection)",
      "Coolant crossover pipe leaks",
    ],
    spec: [
      { label: "Aspiration", value: "Eaton supercharger" },
      { label: "Power", value: "510 hp (Autobiography)" },
      { label: "Torque", value: "625 Nm" },
      { label: "Found in", value: "Range Rover, Sport, Discovery" },
    ],
  },
  {
    id: "tdv6",
    name: "3.0L TDV6",
    short: "Diesel · V6",
    brands: "Range Rover / Land Rover",
    image: "./images/engine-diesel.jpg",
    config: "V6 — 24 valves, twin-turbo diesel",
    displacement: "2,993 cc",
    character: "The long-distance workhorse. Effortless cruising torque, sipping fuel on the highway.",
    knownFor: "Pulling Range Rovers across continents — as long as its cooling and EGR systems stay healthy.",
    faults: [
      "Early crankshaft failure on 2005–2009 units",
      "EGR cooler cracking — coolant loss",
      "DPF clogging with short-trip driving",
      "Turbo actuator & vacuum leak faults",
    ],
    spec: [
      { label: "Aspiration", value: "Parallel twin-turbo" },
      { label: "Power", value: "211–258 hp" },
      { label: "Torque", value: "520–600 Nm" },
      { label: "Found in", value: "Range Rover Sport, Discovery, Vogue" },
    ],
  },
  {
    id: "b58",
    name: "3.0L B58 Turbo I6",
    short: "Petrol · Inline-6",
    brands: "BMW",
    image: "./images/engine-inline6.jpg",
    config: "Inline-6 — 24 valves, single twin-scroll turbo",
    displacement: "2,998 cc",
    character: "Silk. The inline-six is the perfect balanced engine — smooth, free-revving, endlessly tunable.",
    knownFor: "Being the modern benchmark: BMW's B58 is widely called the best six-cylinder of its generation.",
    faults: [
      "Coolant hose & plastic fitting embrittlement",
      "VANOS solenoid contamination",
      "Oil filter housing gasket leaks",
      "Boost leaks from charge pipe connections",
    ],
    spec: [
      { label: "Aspiration", value: "Twin-scroll turbo" },
      { label: "Power", value: "340–382 hp" },
      { label: "Torque", value: "500 Nm" },
      { label: "Found in", value: "340i, 540i, X5, Z4 M40i" },
    ],
  },
  {
    id: "ihz",
    name: "4.2L 1HZ Diesel",
    short: "Diesel · Inline-6",
    brands: "Toyota",
    image: "./images/engine-diesel.jpg",
    config: "Inline-6 — 12 valves, OHV, mechanical injection",
    displacement: "4,163 cc",
    character: "The legend. Over-engineered, mechanically simple, and famously impossible to kill.",
    knownFor: "Six-hundred-thousand-kilometre engines. The 1HZ is the reason Land Cruiser owners never sell.",
    faults: [
      "Injector pump wear & timing drift with age",
      "Overheating when cooling systems are neglected",
      "Valve clearance drift (check every 40,000 km)",
      "Oil seal & gasket hardening with heat cycles",
    ],
    spec: [
      { label: "Aspiration", value: "Naturally aspirated (1HZ)" },
      { label: "Power", value: "135 hp" },
      { label: "Torque", value: "285 Nm @ 2,200 rpm" },
      { label: "Found in", value: "Land Cruiser 70 & 80 series" },
    ],
  },
  {
    id: "2tr",
    name: "2.7L 2TR-FE",
    short: "Petrol · Inline-4",
    brands: "Toyota",
    image: "./images/engine-inline6.jpg",
    config: "Inline-4 — 16 valves, VVT-i",
    displacement: "2,693 cc",
    character: "The dependable four. No drama, no sophistication for its own sake — just steady, honest pull.",
    knownFor: "Powering millions of Hilux and Fortuner vehicles across Africa through heat, dust and overload.",
    faults: [
      "Timing chain rattle on cold start (chain wear)",
      "Head gasket risk after severe overheating",
      "Idle air control carbon build-up",
      "Catalytic converter failure from rich running",
    ],
    spec: [
      { label: "Aspiration", value: "Naturally aspirated" },
      { label: "Power", value: "159–166 hp" },
      { label: "Torque", value: "241–245 Nm" },
      { label: "Found in", value: "Hilux, Fortuner, Hiace, Prado" },
    ],
  },
  {
    id: "b48",
    name: "2.0L B48 / N20",
    short: "Petrol · Inline-4 Turbo",
    brands: "BMW",
    image: "./images/engine-v8.jpg",
    config: "Inline-4 — 16 valves, twin-scroll turbo",
    displacement: "1,998 cc",
    character: "The compact powerplant. Big-engine feel from four cylinders — when it's healthy, it's brilliant.",
    knownFor: "Delivering 40 mpg on cruise and 0–100 in under 6 seconds (tuned) from the same engine.",
    faults: [
      "N20 timing chain tensioner failure (pre-2015)",
      "Valve cover & oil filter housing gasket leaks",
      "Turbo oil feed line coking",
      "High-pressure fuel pump wear",
    ],
    spec: [
      { label: "Aspiration", value: "Twin-scroll turbo" },
      { label: "Power", value: "184–258 hp" },
      { label: "Torque", value: "270–400 Nm" },
      { label: "Found in", value: "3 Series, 5 Series, X1, X3" },
    ],
  },
];

/* ------------------------------ SYMPTOMS ------------------------------ */

export const symptoms = [
  {
    symptom: "Knocking or pinging",
    meaning: "Pre-ignition under load — or worn big-end bearings. One is a tune issue, the other an engine-out rebuild.",
    severity: "Critical",
    action: "Stop driving. Get it scanned.",
  },
  {
    symptom: "White smoke from exhaust",
    meaning: "Coolant entering the combustion chamber. Usually a head gasket — sometimes a cracked head.",
    severity: "High",
    action: "Do not top up and hope. Pressure test required.",
  },
  {
    symptom: "Blue-grey smoke",
    meaning: "Oil is burning. Worn rings, valve stem seals or turbo seals — each with very different repair bills.",
    severity: "Medium",
    action: "A compression test tells us which.",
  },
  {
    symptom: "Black smoke",
    meaning: "Over-fuelling. Leaking injectors, a lazy MAF sensor or a choked air filter.",
    severity: "Medium",
    action: "Scan the fuel trims before parts are bought.",
  },
  {
    symptom: "Overheating in traffic",
    meaning: "Cooling system under strain — radiator, fan clutch, water pump, thermostat or a combustion leak.",
    severity: "High",
    action: "Overheating kills engines. Diagnose same-day.",
  },
  {
    symptom: "Loss of power",
    meaning: "Fuel delivery, turbo boost leaks, blocked filters or sensors lying to the ECU.",
    severity: "Low",
    action: "A live-data scan finds the liar.",
  },
];

/* ------------------------------ REBUILD STEPS ------------------------------ */

export const rebuildSteps = [
  { step: "01", title: "Strip & inspect", body: "Full teardown. Every component is inspected, measured and photographed — you see what we see." },
  { step: "02", title: "Measure & machine", body: "Crankshaft, bores and head are measured against factory spec. Machining is referred out only where it's genuinely needed." },
  { step: "03", title: "Parts & prep", body: "Genuine and OEM internals — pistons, bearings, gaskets, timing kits. No mystery parts, ever." },
  { step: "04", title: "Rebuild to spec", body: "Reassembly with factory torque sequences and clearances measured twice. This is where experience shows." },
  { step: "05", title: "Run-in & road test", body: "Primed, started, warmed and monitored. Then road-tested and re-checked before handover." },
];

/* ------------------------------ TESTIMONIALS ------------------------------ */

export const testimonials = [
  {
    quote: "Anfield sorted out my Range Rover's suspension fault after two other garages couldn't pin it down.",
    name: "Moses",
    place: "Kireka",
    rating: 5,
  },
  {
    quote: "Straightforward diagnosis, fair price, and my Toyota runs better than it has in years.",
    name: "Grace",
    place: "Namugongo",
    rating: 5,
  },
  {
    quote: "They showed me the scan results, explained the quote line by line, and finished on the day they promised. That's rare.",
    name: "Daniel",
    place: "Kampala",
    rating: 4.5,
  },
];
