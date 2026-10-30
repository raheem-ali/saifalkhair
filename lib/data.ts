export const SITE = {
  name: "Saif Al Khair",
  legal: "General Contracting Estb.",
  arabic: "مؤسسة سيف الخير للمقاولات العامة",
  email: "Operations@alfalakb.com", // change to your real email
  address: "King Abdulaziz Road, Taebah District, 3107, Jubail, Eastern Region, Saudi Arabia 35817",
  shortLocation: "Jubail, Eastern Region, Saudi Arabia",
  hours: "Sun – Thu, 8:00 AM – 6:00 PM",
};

export const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export type IconName =
  | "truck" | "building" | "users" | "zap" | "wrench" | "hardhat"
  | "cog" | "paint" | "sparkles" | "shield" | "clock" | "award" | "layers" | "map" | "cpu";

export interface Service {
  slug: string;
  title: string;
  arabic: string;
  image: string;
  icon: IconName;
  short: string;
  intro: string;
  highlights: string[];
  scope: string[];
  specs: { label: string; value: string }[];
}

const IMG = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  crane: IMG("photo-1578575437130-527eed3abbec"),
  excavator: IMG("photo-1504307651254-35680f356dfd"),
  workers: IMG("photo-1581092160607-ee22621dd758"),
  construction: IMG("photo-1503387762-592deb58ef4e"),
  electrical: IMG("photo-1581092162384-8987c1d64718"),
  steel: IMG("photo-1581092335397-9583fe92d232"),
  plant: IMG("photo-1518709268805-4e9042af9f23"),
  site: IMG("photo-1541888946425-d0fbb186a5b3"),
};

export const SERVICES: Service[] = [
  {
    slug: "industrial-construction",
    title: "Industrial Construction & Civil Works",
    arabic: "الإنشاءات الصناعية والأعمال المدنية",
    image: IMAGES.construction,
    icon: "building",
    short: "Complete civil and electro-mechanical build-out for process plants, utilities and industrial facilities, delivered to specification, budget and programme.",
    intro: "From site preparation to handover, we build the foundations, structures and support facilities that industrial plants depend on. Our civil teams work in live plants and on greenfield expansions with the same planning discipline.",
    highlights: ["Single-source civil, mechanical and electrical delivery", "Work inside live plants under permit-to-work", "Documented inspection and test plans", "Experienced site engineers on every scope"],
    scope: ["Earthworks, excavation and compaction", "Concrete foundations and structures", "Industrial buildings and warehouses", "Drainage, utilities and internal roads", "Structural steel assembly and roofing"],
    specs: [{ label: "Delivery model", value: "Lump-sum and re-measurable contracts" }, { label: "Standards", value: "SBC and client specifications" }, { label: "Coverage", value: "Eastern Province and Kingdom-wide" }],
  },
  {
    slug: "mechanical-construction",
    title: "Mechanical Construction & Fabrication",
    arabic: "الأعمال الميكانيكية والتصنيع",
    image: IMAGES.steel,
    icon: "cog",
    short: "Heavy mechanical scopes by experienced fabrication and erection crews, from structural steel to complete process equipment installation.",
    intro: "Our fabrication and erection crews handle piping, tanks, structural steel and equipment installation with qualified welders, calibrated tools and full weld traceability.",
    highlights: ["Qualified welders and fabricators", "Full weld traceability and hydro-testing", "Shop fabrication and site erection", "Calibrated equipment and documented hold points"],
    scope: ["Process piping fabrication and erection", "Bulk storage tank fabrication and refurbishment", "Structural steel supply and erection", "Static and rotating equipment installation", "Pressure and hydro-testing"],
    specs: [{ label: "Materials", value: "Carbon steel, alloy and stainless" }, { label: "Testing", value: "Hydro-test and NDT support" }, { label: "Crews", value: "Fabricators, welders, riggers" }],
  },
  {
    slug: "electrical-mep",
    title: "Electrical & MEP Engineering",
    arabic: "الهندسة الكهربائية والميكانيكية",
    image: IMAGES.electrical,
    icon: "zap",
    short: "High-voltage services, substation installation, cabling, testing and commissioning, plus HVAC and mechanical systems.",
    intro: "We install, test and commission electrical systems with qualified technicians and calibrated instruments, and integrate them with the mechanical and HVAC scopes on the same project.",
    highlights: ["Transformer and switchgear installation", "Relay testing and thermography", "Commissioning support", "HVAC and mechanical integration"],
    scope: ["Substation equipment installation and testing", "Medium and high-voltage cabling", "Power distribution and lighting", "Instrumentation and control wiring", "HVAC ducting and cooling systems"],
    specs: [{ label: "Testing", value: "Relay, insulation and thermography" }, { label: "Support", value: "Pre-commissioning to handover" }, { label: "Quality", value: "Documented inspection and test plans" }],
  },
  {
    slug: "plant-maintenance-shutdown",
    title: "Plant Maintenance, Shutdown & Turnaround",
    arabic: "صيانة المصانع والإيقاف الدوري",
    image: IMAGES.plant,
    icon: "hardhat",
    short: "Planned and emergency maintenance packages that protect production windows and return assets to service safely, on schedule.",
    intro: "Shutdown windows are planned to the hour. We bring engineers, supervisors and certified trades with enough resource depth to absorb scope growth without slipping dates.",
    highlights: ["Turnaround planning and execution", "Emergency response crews", "Resource depth for scope growth", "Close-out packs in your format"],
    scope: ["Shutdown and turnaround management", "Mechanical overhauls and repairs", "Structural inspection and repair", "Emergency and breakdown maintenance", "Preventive maintenance programmes"],
    specs: [{ label: "Planning", value: "Hour-by-hour shutdown schedules" }, { label: "Reporting", value: "Daily progress and close-out" }, { label: "Response", value: "Eastern Province mobilisation" }],
  },
  {
    slug: "blasting-painting-insulation",
    title: "Blasting, Painting & Thermal Insulation",
    arabic: "الرمل والدهان والعزل الحراري",
    image: IMAGES.workers,
    icon: "paint",
    short: "Surface protection engineered for extreme service: abrasion, corrosion and high-temperature environments across the industrial belt.",
    intro: "We prepare, coat and insulate steel and process assets so they last in harsh Gulf conditions, with documented surface preparation and coating inspection.",
    highlights: ["Abrasive blasting to specified grades", "Protective coating systems", "Hot and cold insulation", "Documented coating inspection"],
    scope: ["Abrasive blasting and surface preparation", "Industrial painting and protective coatings", "Internal tank lining", "Thermal insulation and cladding", "Fireproofing and passive protection"],
    specs: [{ label: "Environments", value: "Corrosive and high-temperature" }, { label: "Inspection", value: "Qualified coating inspectors" }, { label: "Assets", value: "Tanks, piping, steel, vessels" }],
  },
  {
    slug: "on-site-industrial-services",
    title: "On-Site Industrial Services",
    arabic: "الخدمات الصناعية الميدانية",
    image: IMAGES.site,
    icon: "wrench",
    short: "Specialist site interventions delivered with calibrated equipment, qualified technicians and rigorous permit-to-work discipline.",
    intro: "When a plant needs a specialist intervention without a full contract, our on-site teams mobilise with the right tools, permits and supervision.",
    highlights: ["Short-notice mobilisation", "Qualified technicians", "Calibrated equipment", "Permit-to-work discipline"],
    scope: ["Bolt tensioning and flange management", "Leak and repair interventions", "Calibration and testing support", "Scaffolding and access support", "Temporary works and site support"],
    specs: [{ label: "Mobilisation", value: "Short notice, Eastern Province" }, { label: "Supervision", value: "On every scope" }, { label: "Documentation", value: "Job packs and reports" }],
  },
  {
    slug: "industrial-cleaning",
    title: "Industrial Cleaning",
    arabic: "التنظيف الصناعي",
    image: IMAGES.excavator,
    icon: "sparkles",
    short: "Efficiency-restoring cleaning programmes for power, water and process assets, with full containment and waste control.",
    intro: "Fouled equipment loses efficiency and reliability. We clean it safely, contain the waste, and return it to service ready for inspection.",
    highlights: ["Full containment and waste control", "Trained confined-space crews", "Minimal downtime planning", "Inspection-ready results"],
    scope: ["High-pressure water jetting", "Tank and vessel cleaning", "Heat exchanger and condenser cleaning", "Chemical cleaning support", "Waste handling coordination"],
    specs: [{ label: "Sectors", value: "Power, water, process" }, { label: "Safety", value: "Confined-space procedures" }, { label: "Outcome", value: "Restored efficiency" }],
  },
  {
    slug: "manpower-solutions",
    title: "Skilled Manpower Solutions",
    arabic: "حلول الكوادر البشرية المتخصصة",
    image: IMAGES.workers,
    icon: "users",
    short: "Certified engineers, technicians and trades supplied individually or as fully supervised crews for repair, maintenance and construction.",
    intro: "Our workforce is made up of trained, experienced engineers and technicians. We supply the right people at the right time, with supervision, safety coverage and logistics handled.",
    highlights: ["Individual placements or full crews", "Trade-tested and certified personnel", "Safety officers and supervisors", "Rapid mobilisation"],
    scope: ["Engineers and technicians", "Welders and fabricators", "Riggers and helpers", "Safety officers and work permit receivers", "Firewatch and standby crews"],
    specs: [{ label: "Trade categories", value: "40+" }, { label: "Supply model", value: "Individual or supervised crew" }, { label: "Support", value: "Accommodation and transport" }],
  },
  {
    slug: "heavy-equipment-rental",
    title: "Heavy Equipment & Machinery Rental",
    arabic: "تأجير المعدات والآلات الثقيلة",
    image: IMAGES.crane,
    icon: "truck",
    short: "Cranes, excavators, loaders, trailers and generators with certified operators, available on flexible terms.",
    intro: "Our equipment is maintained to a rigorous schedule and supplied with trained operators and riggers, so your lifts and earthmoving run safely and on time.",
    highlights: ["Operators and riggers supplied", "Preventive maintenance on all units", "Flexible daily, monthly and long-term hire", "Delivery direct to site"],
    scope: ["Telescopic and crawler cranes", "Excavators and wheel loaders", "Lowbed and heavy transport trailers", "Industrial power generators", "Lifting plans and rigging support"],
    specs: [{ label: "Hire terms", value: "Daily, monthly, long-term" }, { label: "Operators", value: "Certified and supervised" }, { label: "Delivery", value: "Direct to site" }],
  },
  {
    slug: "industrial-trading-supply",
    title: "Industrial Trading & Material Supply",
    arabic: "التوريدات والتجارة الصناعية",
    image: IMAGES.steel,
    icon: "layers",
    short: "Structural steel, electrical equipment, safety gear, fittings and industrial consumables sourced and delivered to site.",
    intro: "One supply partner for the materials your project needs. We source from approved manufacturers and suppliers and deliver with the documentation your QA team expects.",
    highlights: ["Approved manufacturers and suppliers", "Material certificates provided", "Fast-track procurement", "Direct site delivery"],
    scope: ["Structural steel and plates", "Cables, switchgear and transformers", "Pipes, fittings and flanges", "PPE and safety equipment", "Welding and industrial consumables"],
    specs: [{ label: "Sourcing", value: "Local and international" }, { label: "Traceability", value: "Mill test certificates" }, { label: "Delivery", value: "Kingdom-wide" }],
  },
];

export const SLIDES = [
  { id: 1, title: "Engineering excellence and skilled manpower for Saudi industry", subtitle: "Jubail, Kingdom of Saudi Arabia", arabic: "التميز الهندسي والكفاءات الفنية للصناعة السعودية", description: "Civil, mechanical and electrical construction, plant maintenance, equipment hire and certified workforce solutions for operators, EPC contractors and giga-projects.", image: IMG("photo-1504307651254-35680f356dfd", 1920), badge: "Multi-discipline contractor" },
  { id: 2, title: "Heavy equipment and machinery for demanding projects", subtitle: "Equipment and fleet", arabic: "حلول المعدات الثقيلة للمشاريع الكبرى", description: "Cranes, earthmoving machinery and heavy transport with certified operators, maintained to a rigorous schedule and delivered to site.", image: IMG("photo-1578575437130-527eed3abbec", 1920), badge: "Operators and riggers supplied" },
  { id: 3, title: "Certified trades, mobilised when your programme demands", subtitle: "Manpower solutions", arabic: "الكفاءات الفنية والقوى العاملة الماهرة", description: "Engineers, technicians, welders, riggers and safety officers supplied individually or as fully supervised crews for shutdowns and expansions.", image: IMG("photo-1581092160607-ee22621dd758", 1920), badge: "Trade-ready crews" },
];

export const STATS = [
  { value: "10", label: "Service disciplines", sub: "Specialist capabilities" },
  { value: "40+", label: "Skilled trade categories", sub: "Certified manpower" },
  { value: "8", label: "Industries served", sub: "Oil, power, water and more" },
  { value: "100%", label: "Safety-led delivery", sub: "Permit-to-work on every scope" },
];

export const WHY_US: { icon: IconName; title: string; desc: string }[] = [
  { icon: "shield", title: "Safety without compromise", desc: "Permit-to-work discipline, toolbox talks and dedicated safety officers on every scope keep our people and your assets protected." },
  { icon: "award", title: "Quality as first priority", desc: "Documented inspection points, qualified welders and calibrated equipment produce work that passes first-time client sign-off." },
  { icon: "clock", title: "Programme certainty", desc: "Shutdown windows are planned to the hour, with resource depth to absorb scope growth without slipping dates." },
  { icon: "layers", title: "Multi-discipline depth", desc: "Civil, mechanical and electrical capability under one contract removes interface risk and shortens your vendor list." },
  { icon: "map", title: "Rooted in Jubail", desc: "Based in the Kingdom's industrial heartland, we mobilise to Eastern Province plants quickly and cost-effectively." },
  { icon: "cpu", title: "Engineering-led delivery", desc: "Experienced engineers plan every intervention, so execution is methodical rather than reactive." },
];

export const INDUSTRIES = ["Oil & Gas", "Petrochemicals", "Power Generation", "Water & Desalination", "Mining & Minerals", "Steel & Heavy Industry", "Infrastructure & Utilities", "Giga-Projects"];

export const TRADES = ["Engineers", "Technicians", "Safety Officers", "Riggers", "Work Permit Receivers", "Firewatch", "Standby Crew", "Helpers", "Fabricators", "Welders"];

export const SAFETY_POINTS = [
  { title: "Permit-to-work discipline", desc: "Dedicated permit receivers, firewatch and standby personnel on confined-space and hot-work scopes." },
  { title: "Competent supervision", desc: "Safety officers and experienced supervisors embedded in every crew." },
  { title: "Verified workmanship", desc: "Welder qualifications, calibrated equipment and documented inspection hold points." },
  { title: "Client-aligned reporting", desc: "Daily progress, observations and close-out packs in the format your team already uses." },
];

export const EQUIPMENT = [
  { name: "Telescopic Mobile Cranes", arabic: "رافعات متحركة", category: "Cranes", image: IMG("photo-1578575437130-527eed3abbec", 700) },
  { name: "Heavy-Duty Excavators", arabic: "حفارات ثقيلة", category: "Earthmoving", image: IMG("photo-1504307651254-35680f356dfd", 700) },
  { name: "Crawler Cranes", arabic: "رافعات مجنزرة", category: "Cranes", image: IMG("photo-1581092160607-ee22621dd758", 700) },
  { name: "Industrial Power Generators", arabic: "مولدات كهرباء صناعية", category: "Power", image: IMG("photo-1581092162384-8987c1d64718", 700) },
  { name: "Lowbed Transport Trailers", arabic: "مقطورات نقل ثقيل", category: "Transport", image: IMG("photo-1581092335397-9583fe92d232", 700) },
  { name: "Wheel Loaders", arabic: "شيولات", category: "Earthmoving", image: IMG("photo-1503387762-592deb58ef4e", 700) },
];

export const PROJECTS = [
  { title: "Process Piping Fabrication & Erection Package", category: "Mechanical Construction", desc: "Shop fabrication and site erection of carbon steel spools with full weld traceability and hydro-testing.", image: IMAGES.steel },
  { title: "Bulk Storage Tank Fabrication & Refurbishment", category: "Tank Fabrication", desc: "Plate erection, floor and shell repair, internal lining and reinstatement of a bulk liquid storage tank.", image: IMAGES.plant },
  { title: "Substation Equipment Installation & Testing", category: "Electrical Services", desc: "Transformer and switchgear installation followed by relay testing, thermography and commissioning support.", image: IMAGES.electrical },
];

export const PARTNERS = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Industry partner ${i + 1}`,
  url: `https://alfalakb.com/wp-content/uploads/2026/08/${i + 1}.png`,
}));

export const PROCESS = [
  { title: "Scope review", desc: "We study your scope, drawings and schedule, and confirm what success looks like." },
  { title: "Engineering plan", desc: "Our engineers produce a resourcing, safety and execution plan for approval." },
  { title: "Mobilisation", desc: "Certified crews, equipment and permits arrive on site ready to start." },
  { title: "Delivery and close-out", desc: "Daily reporting, inspection hold points and a complete close-out pack." },
];

// Edit these values to your real figures
export const METRICS = [
  { label: "Project Completion Rate", value: 100 },
  { label: "Client Satisfaction", value: 98 },
  { label: "Safety Compliance", value: 100 },
  { label: "Equipment Availability", value: 95 },
];
