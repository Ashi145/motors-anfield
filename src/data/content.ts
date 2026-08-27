export const PHONE = "+256 700 000 000";
export const PHONE_HREF = "tel:+256700000000";
export const WHATSAPP = "https://wa.me/256700000000";
export const ADDRESS =
  "Kireka, Kampala–Jinja Highway, next to Landing Washing Bay, Wakiso District, Uganda.";
export const HOURS = "Monday – Saturday · 8:00 AM – 7:00 PM · Sunday by appointment";

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
    image: "/images/range-rover.jpg",
    story: [
      "The Land Rover was born on a farm in Angelsey in 1948, and the Range Rover arrived in 1970 to prove an SUV could be a luxury car. Seventy-five years later, these are some of the most capable — and most complex — vehicles on Ugandan roads.",
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
    image: "/images/bmw.jpg",
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
    image: "/images/toyota.jpg",
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
    image: "/images/engine-v8.jpg",
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
    image: "/images/engine-diesel.jpg",
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
    image: "/images/engine-inline6.jpg",
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
    image: "/images/engine-diesel.jpg",
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
    image: "/images/engine-inline6.jpg",
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
    image: "/images/engine-v8.jpg",
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
  {
    step: "01",
    title: "Strip & inspect",
    body: "Full teardown. Every component is inspected, measured and photographed — you see what we see.",
  },
  {
    step: "02",
    title: "Measure & machine",
    body: "Crankshaft, bores and head are measured against factory spec. Machining is referred out only where it's genuinely needed.",
  },
  {
    step: "03",
    title: "Parts & prep",
    body: "Genuine and OEM internals — pistons, bearings, gaskets, timing kits. No mystery parts, ever.",
  },
  {
    step: "04",
    title: "Rebuild to spec",
    body: "Reassembly with factory torque sequences and clearances measured twice. This is where experience shows.",
  },
  {
    step: "05",
    title: "Run-in & road test",
    body: "Primed, started, warmed and monitored. Then road-tested and re-checked before handover.",
  },
];

/* ------------------------------ PARTS ------------------------------ */

export interface PartCategory {
  id: string;
  icon: string;
  name: string;
  description: string;
  items: string[];
  brands: string[];
}

export const partCategories: PartCategory[] = [
  {
    id: "engine-internals",
    icon: "Cylinder",
    name: "Engine Internals",
    description: "The parts that decide whether an engine lives another 200,000 km.",
    items: ["Pistons & rings", "Main & big-end bearings", "Head gaskets & full sets", "Timing chains & kits", "Oil pumps", "Valve train components"],
    brands: ["Range Rover", "BMW", "Toyota"],
  },
  {
    id: "air-suspension",
    icon: "Waves",
    name: "Air Suspension",
    description: "Our signature specialty. Range Rover air systems, fixed properly.",
    items: ["Compressors & relay kits", "Air struts & springs", "Valve blocks", "Height sensors", "Line & fitting repair", "Calibration after repair"],
    brands: ["Range Rover", "Land Rover", "Discovery"],
  },
  {
    id: "braking",
    icon: "Disc3",
    name: "Braking",
    description: "The system you bet your life on — no compromises, no mystery pads.",
    items: ["Pads & discs", "Calipers & carriers", "ABS sensors & modules", "Brake lines & hoses", "Master cylinders", "Fluid flush service"],
    brands: ["BMW", "Range Rover", "Toyota"],
  },
  {
    id: "filtration",
    icon: "Filter",
    name: "Filtration & Fluids",
    description: "Cheap insurance. The most ignored service items do the most damage when skipped.",
    items: ["Oil, air & fuel filters", "Cabin filters", "OEM-spec oils", "Coolant & additives", "ATF & differential oils", "Brake fluid"],
    brands: ["All three brands"],
  },
  {
    id: "electrical",
    icon: "Zap",
    name: "Ignition & Electrical",
    description: "Modern cars are electrical systems with wheels. We speak fluent voltage.",
    items: ["Ignition coils & plugs", "Crank & cam sensors", "MAF / MAP sensors", "Alternators & starters", "Batteries & testing", "Wiring fault repair"],
    brands: ["BMW", "Range Rover"],
  },
  {
    id: "cooling",
    icon: "Thermometer",
    name: "Cooling & Climate",
    description: "Ugandan heat is a cooling system's worst enemy. We keep engines at operating temperature.",
    items: ["Radiators & intercoolers", "Water pumps", "Thermostats & housings", "Fan clutches & fans", "A/C compressors", "Hoses & clamps"],
    brands: ["Toyota", "Range Rover", "BMW"],
  },
  {
    id: "turbo-fuel",
    icon: "Fan",
    name: "Turbo & Fuel",
    description: "Boost and fuel delivery — where diagnosis saves you from buying parts you don't need.",
    items: ["Turbochargers & actuators", "Injectors & seals", "High-pressure fuel pumps", "Fuel rails & regulators", "Intercooler pipes", "Boost leak testing"],
    brands: ["BMW", "Range Rover", "Toyota"],
  },
  {
    id: "transmission",
    icon: "Cog",
    name: "Transmission & Driveline",
    description: "Power is useless if it can't reach the wheels smoothly.",
    items: ["Gearbox service & ATF", "Clutch kits", "CV joints & boots", "Differential rebuilds", "Engine & gearbox mounts", "Propshaft work"],
    brands: ["Toyota", "Land Rover", "BMW"],
  },
];

/* ------------------------------ SERVICES ------------------------------ */

export const services = [
  {
    icon: "Wrench",
    title: "Engine Repair & Rebuild",
    body: "Full teardown, machining referral, rebuild and reassembly for engines that knock, smoke, overheat or have lost their pull.",
  },
  {
    icon: "ScanLine",
    title: "Computer Diagnostics",
    body: "OBD-II scanning with live data — we read what the car is actually saying, so the real fault gets fixed the first time.",
  },
  {
    icon: "Mountain",
    title: "Range Rover / Land Rover Care",
    body: "Air suspension, electrical gremlins and engine work for Range Rover and Land Rover models — our deepest specialty.",
  },
  {
    icon: "Cog",
    title: "BMW Servicing",
    body: "Dealer-level servicing plus engine and electrical repair for BMW saloons and SUVs — without dealer invoices.",
  },
  {
    icon: "CircleCheck",
    title: "Toyota Servicing",
    body: "General service, engine work and honest repairs for Toyota sedans, SUVs and pickups — kept earning, not parked.",
  },
  {
    icon: "Activity",
    title: "Brakes, Suspension & Electrical",
    body: "Full chassis and electrical repair — pads, discs, shocks, wiring faults and the diagnostics that go beyond the engine.",
  },
];

/* ------------------------------ PROCESS ------------------------------ */

export const process = [
  { step: "01", title: "Book", body: "Call or WhatsApp us your car's problem and lock in a time slot." },
  { step: "02", title: "Diagnose", body: "Full computer scan plus hands-on inspection to confirm the real fault." },
  { step: "03", title: "Quote", body: "A clear, itemised quote before any work starts. No surprises later." },
  { step: "04", title: "Repair", body: "Engine, diagnostic or specialist work carried out in our workshop." },
  { step: "05", title: "Road Test", body: "Every car is road-tested and rechecked before it goes back to you." },
];

/* ------------------------------ TESTIMONIALS ------------------------------ */

export const testimonials = [
  {
    quote:
      "Anfield sorted out my Range Rover's suspension fault after two other garages couldn't pin it down.",
    name: "Moses",
    place: "Kireka",
  },
  {
    quote:
      "Straightforward diagnosis, fair price, and my Toyota runs better than it has in years.",
    name: "Grace",
    place: "Namugongo",
  },
  {
    quote:
      "They showed me the scan results, explained the quote line by line, and finished on the day they promised. That's rare.",
    name: "Daniel",
    place: "Kampala",
  },
];
