/*
 * curated.en.js —— English content for data/curated.js, keyed by dossier id (used when the page language is English).
 * Fields: name, short, tags, summary, impact, bi{levelNote,segments,compliance,access,support,actions},
 *   council[{label,body,note}] and milestones[] in the same order as curated.js, tracking{source,items,src,outlook}, act{ref,statusNote,basis}.
 * Missing fields fall back to the Chinese text.
 */
window.CURATED_EN = {
 "_categories": {
  "battery": "Batteries & critical raw materials",
  "circular": "Circular economy",
  "industry": "Industrial policy & investment",
  "supply": "Supply chain & corporate responsibility",
  "safety": "Product safety & chemicals",
  "power": "Electricity markets & grids",
  "renewable": "Renewables & efficiency",
  "transport": "Transport & charging",
  "carbon": "Carbon pricing & trade",
  "digital": "Cybersecurity & AI"
 },
 "batteries": {
  "name": "Batteries and Waste Batteries Regulation",
  "short": "Batteries Regulation",
  "tags": [
   "Battery passport",
   "Carbon footprint",
   "Recycled content",
   "Due diligence",
   "Recycling"
  ],
  "summary": "Replaces the 2006 Batteries Directive and is the EU's first directly applicable regulation covering the whole battery life cycle. For EV, industrial and LMT batteries it sets carbon-footprint declarations and classes, minimum recycled content, performance and durability, removability, a battery passport, supply-chain due diligence, and recycling-efficiency and material-recovery targets.",
  "impact": [
   "EV and industrial batteries placed on the EU market need a carbon-footprint declaration, later followed by classes and caps — direct pressure on the power mix of cathode and cell production",
   "Minimum recycled content from 2031: cobalt 16%, lithium 6%, nickel 6%, lead 85%; from 2036: cobalt 26%, lithium 12%, nickel 15%",
   "From February 2027 EV, LMT and >2 kWh industrial batteries need a digital battery passport",
   "Supply-chain due diligence postponed to 18 August 2027 by Omnibus IV"
  ],
  "bi": {
   "levelNote": "Regulates the battery itself — the baseline law for selling any battery in the EU",
   "compliance": [
    "Since 18 August 2024 batteries need conformity assessment, CE marking and an EU declaration of conformity; non-EU manufacturers need an EU-established economic operator (importer or authorised representative)",
    "Extended producer responsibility (EPR): register as a producer in every member state of sale and finance collection and treatment; non-EU producers must appoint an EPR authorised representative",
    "Carbon-footprint declaration: phased in by category (EV, rechargeable industrial >2 kWh, LMT) and starting 12 months after the relevant delegated act; the EV methodology act was still not adopted in 2026",
    "Stationary battery energy storage systems must meet the Article 12 safety requirements with test documentation; industrial batteries must state electrochemical performance and durability parameters",
    "Labelling applies from 18 August 2026; the battery passport and QR code from 18 February 2027 (EV, LMT, >2 kWh industrial)",
    "From 18 August 2027 a supply-chain due-diligence system (cobalt, natural graphite, lithium, nickel and compounds) verified by a notified body is required"
   ],
   "access": [
    "Batteries without CE marking, EPR registration or a passport cannot be placed on the EU market — a hard entry barrier",
    "Carbon-footprint performance classes and maximum thresholds will follow — plants running on coal-heavy grids are disadvantaged and may be excluded by the caps",
    "Minimum recycled content from 2031 (Co 16%, Li 6%, Ni 6%) requires traceable recycled-material supply"
   ],
   "support": [
    "Article 85 requires public procurement to consider battery sustainability criteria, favouring low-carbon, high-recycled-content products in public projects",
    "A single EU rulebook replaces national rules: comply once to access all 27 markets"
   ],
   "actions": [
    "Check EPR registration and authorised representatives in every country of sale",
    "Build carbon-footprint data by product (upstream materials and production electricity) and assess green-power sourcing or EU production",
    "Start the battery-passport data architecture and QR-code solution before February 2027",
    "Set up minerals due diligence along OECD guidance and select a notified body"
   ],
   "segments": [
    "Cell/module manufacturing",
    "Energy storage systems",
    "Materials sourcing",
    "Exports to the EU",
    "EU production",
    "Recycling"
   ]
  },
  "council": [
   {
    "label": "Environment Council general approach",
    "body": "Environment Council"
   },
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Czech Presidency"
   },
   {
    "label": "COREPER endorses the trilogue text",
    "body": "COREPER I",
    "note": "COREPER confirmation letter GEDA/A/(2023)000527 recorded in OEIL"
   }
  ],
  "milestones": [
   "Entry into force",
   "Regulation applies",
   "Lithium battery recycling efficiency ≥65% (≥70% by 2030)",
   "Labelling requirements apply",
   "Battery passport, QR code and portable-battery removability apply",
   "Supply-chain due diligence applies (originally 2025-08-18, postponed by 2025/1561)",
   "Material recovery: lithium 50%, cobalt/nickel/copper 90%",
   "Recycled content, first stage (Co 16% / Li 6% / Ni 6% / Pb 85%)",
   "Recycled content, second stage (Co 26% / Li 12% / Ni 15% / Pb 85%)"
  ]
 },
 "batteries-dd-omnibus": {
  "name": "Postponement of battery due-diligence obligations (Omnibus IV ‘stop-the-clock’)",
  "short": "Battery due diligence delay",
  "tags": [
   "Omnibus simplification",
   "Due diligence"
  ],
  "summary": "Part of the Omnibus IV simplification package: postpones economic operators' supply-chain due-diligence obligations under the Batteries Regulation by two years to 18 August 2027, and the deadline for the Commission's due-diligence guidelines accordingly. Adopted under the urgent procedure, with the EP voting at first reading without trilogue.",
  "impact": [
   "Two more years to build battery due-diligence systems",
   "Deadline for the Commission's due-diligence guidelines moved to 26 July 2026"
  ],
  "bi": {
   "levelNote": "Delays the due-diligence obligations of the Batteries Regulation by two years without changing their substance",
   "compliance": [
    "Due-diligence obligations now apply from 18 August 2027; reporting on due-diligence policies reportedly moves from annual to every three years (to verify)",
    "The exemption threshold reportedly widens to more mid-sized companies (to verify)"
   ],
   "access": [
    "After 18 August 2027, batteries from companies without a verified due-diligence system cannot be placed on the EU market"
   ],
   "support": [
    "Two extra years to build the system; the Commission's guidelines (due by 26 July 2026) provide the design basis"
   ],
   "actions": [
    "Use the buffer to complete upstream minerals traceability and third-party audits",
    "Track whether the guidelines are published on time and adjust the system accordingly"
   ],
   "segments": [
    "Materials sourcing",
    "Cell/module manufacturing",
    "Exports to the EU"
   ]
  },
  "milestones": [
   "Amending regulation enters into force",
   "Deadline for the Commission's battery due-diligence guidelines",
   "New application date of due-diligence obligations"
  ]
 },
 "bat-cfb": {
  "name": "EV battery carbon footprint calculation and verification rules (CFB-EV delegated act)",
  "short": "Battery carbon footprint rules (CFB)",
  "tags": [
   "Carbon footprint",
   "CFB",
   "Delegated act",
   "Battery passport"
  ],
  "summary": "Under Article 7 of the Batteries Regulation, sets the rules for calculating and verifying the life-cycle carbon footprint of EV batteries (functional unit, system boundary, electricity modelling, data quality), with a companion implementing act on the declaration format. The Regulation required adoption by 18 February 2025; a draft went to consultation in April 2024 but had still not been published in the Official Journal as of October 2026. Declaration obligations start 12 months after the delegated act enters into force, so EV carbon-footprint declarations have in practice not started. Rules for LMT batteries (CFB-LMT) are being studied separately by the JRC.",
  "impact": [
   "Declarations, later performance classes and caps all rest on this method — the electricity-modelling rules (whether green-power contracts count) directly determine the footprint of plants on coal-heavy grids",
   "The delay pushes back declarations, but once the final rules enter into force they must be met within 12 months"
  ],
  "bi": {
   "levelNote": "The calculation basis for declarations, classes and caps — it decides how high a company's footprint comes out",
   "compliance": [
    "Twelve months after entry into force, EV batteries must carry a carbon-footprint declaration calculated with this method and verified by a notified body",
    "Primary data on upstream materials and production must be collected to the required data quality"
   ],
   "access": [
    "If electricity modelling accepts only grid-average factors and not green-power PPAs, Chinese-made batteries will show markedly higher footprints and risk being excluded by future caps"
   ],
   "support": [],
   "actions": [
    "Calculate the footprint of key products with the draft method now",
    "Follow the final electricity-modelling provisions and assess green-power sourcing and EU production",
    "Select a notified body for footprint verification early"
   ],
   "segments": [
    "Cell/module manufacturing",
    "Materials sourcing",
    "Exports to the EU",
    "EU production"
   ]
  },
  "milestones": [
   "Draft published for feedback",
   "Deadline set by the Batteries Regulation (missed)"
  ],
  "act": {
   "ref": "Draft Ares(2024)3131389 (not adopted)",
   "statusNote": "Draft consulted in April 2024; still not adopted as of October 2026",
   "basis": "Batteries Regulation, Article 7"
  }
 },
 "bat-recycled": {
  "name": "Recycled content calculation and verification rules for batteries (delegated act)",
  "short": "Recycled content rules",
  "tags": [
   "Recycled content",
   "Mass balance",
   "Delegated act"
  ],
  "summary": "Under Article 8 of the Batteries Regulation, sets the method for calculating and verifying recycled cobalt, lithium, nickel and lead and the documentation format. The draft uses a mass-balance approach per plant, battery model and year and reportedly applies a 1.3 correction factor to material recycled in the EU. Consulted from 12 August to 9 September 2026; not yet adopted.",
  "impact": [
   "Decides how the 2031 minimum recycled-content targets (Co 16%, Li 6%, Ni 6%) are calculated and proven",
   "A correction factor for EU-recycled material would make recycled content from European recyclers worth more"
  ],
  "bi": {
   "levelNote": "Decides how recycled-content targets are counted and whether non-EU recycled material is disadvantaged",
   "compliance": [
    "Recycled inputs and outputs must be recorded per plant and model on a mass-balance basis, with data checked by the notified body during conformity assessment"
   ],
   "access": [
    "If EU-recycled material gets a 1.3 factor (reported, to verify), products using recycled material from China or elsewhere will find the 2031 targets harder to meet"
   ],
   "support": [
    "Recycling in the EU or partnering with European recyclers makes the targets easier to reach through the correction factor"
   ],
   "actions": [
    "Set up traceability and mass-balance accounting for recycled-material purchases",
    "Consider long-term offtake agreements with European recyclers"
   ],
   "segments": [
    "Materials sourcing",
    "Cell/module manufacturing",
    "Recycling",
    "EU production"
   ]
  },
  "milestones": [
   "Draft open for feedback (until 09-09)",
   "Deadline set by the Batteries Regulation",
   "Recycled-content documentation applies (or 24 months after the delegated act)",
   "Recycled content, first stage"
  ],
  "act": {
   "ref": "Draft (consulted August 2026, not yet adopted)",
   "statusNote": "Feedback period 2026-08-12 to 09-09; legal deadline 2026-08-18",
   "basis": "Batteries Regulation, Article 8"
  }
 },
 "bat-recycling-eff": {
  "name": "Calculation and verification of recycling efficiency and material recovery for waste batteries",
  "short": "Recycling efficiency rules",
  "tags": [
   "Recycling efficiency",
   "Material recovery",
   "Delegated act"
  ],
  "summary": "Delegated Regulation (EU) 2025/606, adopted 21 March 2025, published 4 July 2025 and in force since 24 July 2025. Sets the input and output boundaries and verification for recyclers' recycling efficiency (share of total waste-battery mass recycled) and material recovery (cobalt, copper, lithium, nickel and others), covering lead-acid, nickel-cadmium, lithium and other batteries. In 2026 the Commission is assessing whether to adjust the Annex XII targets.",
  "impact": [
   "Lithium battery recycling efficiency must reach 65% by end-2025 (70% by 2030); lithium recovery 50% by end-2027"
  ],
  "bi": {
   "levelNote": "Mainly binds recyclers; battery makers' recycling partners must meet it",
   "compliance": [
    "Own or partner recycling facilities must calculate and report recycling efficiency and material recovery with this method"
   ],
   "access": [
    "Recycling partners missing the targets undermine fulfilment of EPR obligations"
   ],
   "support": [],
   "actions": [
    "Check that recycling partners calculate efficiency data with the new method"
   ],
   "segments": [
    "Recycling",
    "EU production"
   ]
  },
  "milestones": [
   "Delegated regulation enters into force",
   "Lithium battery recycling efficiency ≥65%",
   "Material recovery: lithium 50%, cobalt/nickel/copper 90%"
  ],
  "act": {
   "ref": "Regulation (EU) 2025/606",
   "basis": "Batteries Regulation, Article 71"
  }
 },
 "bat-dd-guidelines": {
  "name": "Guidelines on battery due-diligence obligations",
  "short": "Battery due-diligence guidelines",
  "tags": [
   "Due diligence",
   "Guidelines",
   "Supply chain"
  ],
  "summary": "The Batteries Regulation requires the Commission to issue guidelines on the Article 48–50 due-diligence obligations (social and environmental risks listed in Annex X), aligned with the CSDDD guidance. Originally due by 18 February 2025, postponed to 26 July 2026 by Regulation (EU) 2025/1561; no publication seen so far.",
  "impact": [
   "The main reference for designing a battery due-diligence system and preparing notified-body verification"
  ],
  "bi": {
   "levelNote": "Direct basis for designing the due-diligence system",
   "compliance": [
    "The guidelines will specify risk identification, third-party verification and disclosure in practice"
   ],
   "access": [
    "From 18 August 2027 batteries without a compliant due-diligence system cannot be placed on the EU market"
   ],
   "support": [],
   "actions": [
    "Track publication and align the existing system with it"
   ],
   "segments": [
    "Materials sourcing",
    "Cell/module manufacturing"
   ]
  },
  "milestones": [
   "Legal deadline for the guidelines",
   "Due-diligence obligations apply"
  ],
  "act": {
   "ref": "Commission guidelines (Articles 48–50)",
   "statusNote": "Legal deadline 2026-07-26; not published so far",
   "basis": "Batteries Regulation, Articles 48–50"
  }
 },
 "crma": {
  "name": "Critical Raw Materials Act (CRMA)",
  "short": "Critical Raw Materials Act",
  "tags": [
   "Lithium",
   "Cobalt",
   "Nickel",
   "Graphite",
   "Strategic projects",
   "Security of supply"
  ],
  "summary": "Lists 34 critical and 17 strategic raw materials and sets 2030 benchmarks: EU extraction to cover 10%, processing 40% and recycling 25% of annual consumption, with no more than 65% of any strategic raw material from a single third country. Creates strategic-project status, faster permitting (27 months for extraction, 15 for processing/recycling), supply-chain monitoring and stockpiling coordination.",
  "impact": [
   "Lithium, nickel, cobalt, natural graphite and manganese are all strategic raw materials",
   "The 65% single-supplier benchmark steers battery-material import structures",
   "Large companies must run risk assessments of their strategic raw-material supply chains"
  ],
  "bi": {
   "levelNote": "Lithium, nickel, cobalt, graphite and manganese are strategic raw materials — shapes material sourcing",
   "compliance": [
    "Large companies manufacturing strategic technologies such as batteries must run a supply-chain risk assessment for strategic raw materials every three years and report it to the board"
   ],
   "access": [
    "The 65% single-third-country benchmark is a policy target rather than a hard limit, but it colours how supply chains are judged in subsidies, procurement and project approval — supply chains heavily reliant on Chinese graphite and precursors come under pressure"
   ],
   "support": [
    "Cathode, anode, precursor and recycling projects can apply for strategic-project status: faster permitting (15 months for processing/recycling) and priority access to finance",
    "Third-country strategic projects can also apply, giving overseas mining and materials projects a route into EU supply chains",
    "The EU joint purchasing platform for raw materials offers downstream companies another sourcing channel"
   ],
   "actions": [
    "Map country concentration of key materials and prepare the supply-chain risk assessment",
    "Assess applying for strategic-project status for EU materials or recycling projects"
   ],
   "segments": [
    "Materials sourcing",
    "EU production",
    "Recycling"
   ]
  },
  "council": [
   {
    "label": "COREPER adopts the Council negotiating mandate",
    "body": "COREPER I"
   },
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Spanish Presidency"
   }
  ],
  "milestones": [
   "Entry into force",
   "Commission selects the first 47 strategic projects in the EU",
   "Commission selects 13 strategic projects in third countries",
   "Benchmark year: 10% extraction / 40% processing / 25% recycling / 65% supplier cap"
  ]
 },
 "crma-strategic": {
  "name": "Selection of CRMA strategic projects",
  "short": "Strategic project selection",
  "tags": [
   "Strategic projects",
   "Lithium",
   "Graphite",
   "Processing",
   "Recycling"
  ],
  "summary": "The Commission selects strategic projects under the CRMA: 47 projects in the EU announced on 25 March 2025 and 13 in third countries on 4 June 2025, covering extraction, processing and recycling of lithium, nickel, cobalt, graphite, manganese and other battery materials. Strategic projects get faster permitting, help with financing and priority administrative treatment.",
  "impact": [
   "Selected projects get permits and finance faster, building a European battery-materials supply chain"
  ],
  "bi": {
   "levelNote": "Fast lane for EU materials and recycling projects",
   "compliance": [],
   "access": [
    "Output from strategic projects enters European battery supply chains more easily; material from non-strategic sources may score worse in procurement"
   ],
   "support": [
    "Cathode, anode, precursor and recycling projects (including in third countries) can apply and benefit from faster permitting and financing support"
   ],
   "actions": [
    "Assess applying for the next selection round for EU or overseas materials projects",
    "Treat selected projects as potential suppliers"
   ],
   "segments": [
    "Materials sourcing",
    "EU production",
    "Recycling"
   ]
  },
  "milestones": [
   "First 47 strategic projects in the EU",
   "13 strategic projects in third countries"
  ],
  "act": {
   "ref": "Commission decisions (2025-03-25, 2025-06-04)",
   "basis": "CRMA, Articles 6–7"
  }
 },
 "cea": {
  "name": "Circular Economy Act",
  "short": "Circular Economy Act",
  "tags": [
   "Secondary raw materials",
   "WEEE revision",
   "Black mass",
   "Single market"
  ],
  "summary": "Flagship law announced in the Clean Industrial Deal, planned for adoption by the Commission in 2026, to create a single market for secondary raw materials and circular products. The Commission has evaluated the WEEE Directive (almost half of e-waste is not collected) and plans to revise it in this context. Battery recyclers are calling for a harmonised EU definition and technical specification of black mass, a single customs code and a revision of the Waste Shipment Regulation.",
  "impact": [
   "May harmonise end-of-waste criteria for black mass and recycled materials, affecting battery recycling and recycled-material supply",
   "A WEEE revision may be folded in, affecting take-back obligations for storage systems, inverters and other electrical equipment"
  ],
  "bi": {
   "levelNote": "Not yet proposed, but will reshape the rules for battery recycling and recycled materials",
   "compliance": [
    "If the WEEE revision is included, producer responsibility for storage systems and other electrical equipment may change"
   ],
   "access": [
    "Harmonised definitions and customs codes for black mass and recycled materials will decide whether they can circulate freely in the EU and be exported"
   ],
   "support": [
    "A single market for secondary raw materials favours recycling and recycled-material sourcing in the EU"
   ],
   "actions": [
    "Track publication of the Commission proposal",
    "Assess a recycling footprint in the EU"
   ],
   "segments": [
    "Recycling",
    "Materials sourcing",
    "EU production"
   ]
  },
  "act": {
   "statusNote": "Commission plans adoption in 2026"
  }
 },
 "wsr": {
  "name": "Waste Shipment Regulation (WSR)",
  "short": "Waste Shipment Regulation",
  "tags": [
   "Waste battery shipments",
   "Black mass",
   "Export restrictions",
   "Electronic filing"
  ],
  "summary": "Regulation (EU) 2024/1157 replaces the 2006 Waste Shipment Regulation. Shipments within the EU move to fully electronic notification under a strengthened prior written notification and consent procedure; exports of hazardous waste to non-OECD countries are banned, and non-hazardous waste may only go to countries that apply and show they can manage it soundly; exports to OECD countries are monitored more closely.",
  "impact": [
   "Once waste lithium batteries (16 06 07*) and black mass are hazardous waste, they cannot be exported to non-OECD countries, including China",
   "Shipping waste batteries across EU borders requires electronic prior notification and consent"
  ],
  "bi": {
   "levelNote": "Decides whether waste batteries and black mass can cross borders or leave the EU",
   "compliance": [
    "From 21 May 2026 waste shipments within the EU must be filed electronically with prior written consent",
    "Cross-border shipments of production scrap from EU plants (including lithium-battery production waste 16 06 24*) are covered too"
   ],
   "access": [
    "Once black mass is managed as hazardous waste from December 2026, it cannot be exported to China or other non-OECD countries — the route of shipping EU-recovered black mass home for refining is essentially closed"
   ],
   "support": [
    "Pushes a closed loop of recycling, refining and recycled material inside the EU; companies building hydrometallurgy capacity in the EU benefit"
   ],
   "actions": [
    "Map current cross-border flows of scrap and black mass and adjust them before December 2026",
    "Assess building or partnering on hydrometallurgy capacity in the EU"
   ],
   "segments": [
    "Recycling",
    "EU production",
    "Materials sourcing"
   ]
  },
  "council": [
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Spanish Presidency"
   }
  ],
  "milestones": [
   "Entry into force",
   "Regulation applies; electronic filing mandatory",
   "Hazardous classification of black mass applies (see List of Waste delegated decision)"
  ]
 },
 "black-mass": {
  "name": "Update of battery waste codes: black mass classified as hazardous",
  "short": "Black mass classified as hazardous",
  "tags": [
   "Black mass",
   "List of Waste",
   "Hazardous waste"
  ],
  "summary": "Delegated Decision (EU) 2025/934 (C(2025) 1360) amends chapter 16 06 of the European List of Waste: new battery waste codes by chemistry, with waste lithium batteries as 16 06 07* and lithium-battery production waste as 16 06 24*, and black mass managed as hazardous waste. After an August 2025 corrigendum it reportedly applies from 9 December 2026. A Council document notes the Commission may propose further export restrictions if needed.",
  "impact": [
   "Black mass becomes hazardous waste and, combined with the Waste Shipment Regulation, cannot be exported to non-OECD countries",
   "EU recyclers must operate under hazardous-waste rules"
  ],
  "bi": {
   "levelNote": "Closes the route of exporting black mass to non-OECD countries",
   "compliance": [
    "Lithium-battery production waste at EU plants must be classified, stored, transported and handed over under hazardous-waste codes"
   ],
   "access": [
    "Black mass can no longer be exported to China or other non-OECD countries for refining"
   ],
   "support": [
    "Demand rises for European hydrometallurgy and recycled-material capacity"
   ],
   "actions": [
    "Adjust waste classification and treatment contracts before December 2026",
    "Assess EU refining capacity or partnerships with European recyclers"
   ],
   "segments": [
    "Recycling",
    "EU production"
   ]
  },
  "milestones": [
   "Commission adopts the delegated decision",
   "New waste codes apply"
  ],
  "act": {
   "ref": "Delegated Decision (EU) 2025/934",
   "statusNote": "Adopted 2025-03-05; reportedly applies from 2026-12-09 after a corrigendum (to verify)",
   "basis": "Waste Framework Directive (amends the List of Waste, Decision 2000/532/EC)"
  }
 },
 "ppwr": {
  "name": "Packaging and Packaging Waste Regulation (PPWR)",
  "short": "Packaging Regulation (PPWR)",
  "tags": [
   "Transport packaging",
   "Recyclability",
   "Reuse",
   "Packaging EPR"
  ],
  "summary": "Regulation (EU) 2025/40 replaces the Packaging Directive with a directly applicable regulation. All packaging must be recyclable (graded requirements from 2030), plastic packaging has minimum recycled content, transport packaging and pallets have reuse targets, empty space and over-packaging are limited, labels are harmonised, and member states must run packaging EPR schemes.",
  "impact": [
   "Transport packaging, pallets and cushioning for batteries and storage products must meet recyclability and reuse requirements",
   "Importers placing packaging on the EU market take on packaging EPR obligations"
  ],
  "bi": {
   "levelNote": "Affects packaging design and logistics costs for battery products",
   "compliance": [
    "From 12 August 2026 packaging must meet the essential requirements; importers must register and report under packaging EPR in each country",
    "From 2030 a share of pallets, crates and other transport packaging used within the EU must be reusable"
   ],
   "access": [
    "Packaging that fails recyclability or labelling requirements cannot be placed on the EU market"
   ],
   "support": [],
   "actions": [
    "Review export packaging materials and design against recyclability rules",
    "Use reusable transport packaging between EU warehouses and plants"
   ],
   "segments": [
    "Exports to the EU",
    "EU production",
    "Energy storage systems"
   ]
  },
  "council": [
   {
    "label": "Environment Council general approach",
    "body": "Environment Council"
   },
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Belgian Presidency"
   }
  ],
  "milestones": [
   "Entry into force",
   "Regulation applies",
   "Packaging recyclability and transport-packaging reuse targets"
  ]
 },
 "weee": {
  "name": "Waste Electrical and Electronic Equipment Directive (WEEE)",
  "short": "WEEE Directive",
  "tags": [
   "E-waste",
   "Producer responsibility",
   "Storage systems",
   "Inverters"
  ],
  "summary": "Directive 2012/19/EU (recast). Producers of electrical and electronic equipment are responsible for end-of-life take-back: registration in each member state, separate-collection marking, financing collection and treatment, and collection and recovery targets. Batteries are covered by the Batteries Regulation, but electronics in storage systems, inverters and charging equipment fall under WEEE. The Commission has evaluated the directive and plans to revise it through the Circular Economy Act.",
  "impact": [
   "Makers of storage systems, inverters and chargers must register and meet take-back obligations in each country of sale"
  ],
  "bi": {
   "levelNote": "Covers take-back for storage systems, inverters and other electrical equipment",
   "compliance": [
    "Register as a WEEE producer in each country of sale (non-EU companies need an authorised representative), mark products and finance take-back",
    "Battery parts fall under the Batteries Regulation's EPR, registered separately from WEEE"
   ],
   "access": [
    "Equipment without WEEE registration cannot be sold in most member states"
   ],
   "support": [],
   "actions": [
    "Determine which parts of a storage system fall under WEEE and which under the Batteries Regulation",
    "Track the WEEE revision under the Circular Economy Act"
   ],
   "segments": [
    "Energy storage systems",
    "Exports to the EU"
   ]
  },
  "milestones": [
   "Entry into force",
   "Transposition deadline"
  ]
 },
 "weee-2024": {
  "name": "Targeted amendment of the WEEE Directive (PV panels etc.)",
  "short": "WEEE targeted amendment",
  "tags": [
   "PV panels",
   "Retroactive liability"
  ],
  "summary": "Directive (EU) 2024/884 responds to a Court of Justice ruling by changing how take-back costs are shared for PV panels and equipment brought into scope in 2018, removing retroactive liability for products placed on the market earlier.",
  "impact": [
   "Clearer rules on take-back costs for PV modules in PV-plus-storage products"
  ],
  "bi": {
   "levelNote": "Mainly concerns PV modules",
   "compliance": [
    "PV modules in PV-plus-storage products bear take-back costs under the amended rules"
   ],
   "access": [],
   "support": [],
   "actions": [],
   "segments": [
    "Energy storage systems"
   ]
  },
  "milestones": [
   "Transposition deadline"
  ]
 },
 "elv": {
  "name": "Regulation on circularity requirements for vehicle design and end-of-life vehicles (ELV Regulation)",
  "short": "End-of-Life Vehicles Regulation",
  "tags": [
   "Circular design",
   "Recycled plastic",
   "EV battery dismantling"
  ],
  "summary": "Replaces the End-of-Life Vehicles Directive and the 3R type-approval directive with a regulation introducing circular design requirements, minimum recycled plastic in new vehicles, and obligations to remove traction batteries and motors from end-of-life vehicles.",
  "impact": [
   "EV batteries must be removed from end-of-life vehicles before treatment, linking to the Batteries Regulation's recycling system",
   "Recycled-plastic requirements for new vehicles affect vehicle and component supply chains"
  ],
  "bi": {
   "levelNote": "Passed on through carmakers; affects traction battery design and recycling",
   "compliance": [
    "Vehicles must be designed so traction batteries can be removed, and batteries must be taken out before treatment; carmakers will ask battery suppliers for dismantling information and design cooperation"
   ],
   "access": [
    "Battery packs that do not meet carmakers' circular-design requirements will struggle to enter European vehicle programmes"
   ],
   "support": [
    "Centralised removal of end-of-life EV batteries provides steady feedstock for second life and recycling"
   ],
   "actions": [
    "Design packs for removability and prepare dismantling instructions",
    "Assess second-life or recycling operations in the EU"
   ],
   "segments": [
    "Cell/module manufacturing",
    "Recycling"
   ]
  },
  "council": [
   {
    "label": "Environment Council general approach",
    "body": "Environment Council"
   }
  ]
 },
 "nzia": {
  "name": "Net-Zero Industry Act (NZIA)",
  "short": "Net-Zero Industry Act",
  "tags": [
   "Battery manufacturing",
   "40% EU capacity",
   "Non-price criteria",
   "Faster permitting"
  ],
  "summary": "Aims for EU manufacturing capacity of net-zero technologies to meet 40% of deployment needs by 2030. Lists batteries and storage as net-zero technologies and creates net-zero strategic projects with faster permitting, non-price (sustainability and resilience) criteria in public procurement and renewable auctions, net-zero acceleration valleys and regulatory sandboxes.",
  "impact": [
   "Batteries and storage count as net-zero technologies and can apply for strategic-project status and fast permitting (≤12/18 months for manufacturing)",
   "At least 30% of renewable auction volume (or 6 GW a year) must apply resilience and other non-price criteria — supply from a country with more than 50% share of a technology scores worse",
   "Public procurement must assess sustainability and resilience"
  ],
  "bi": {
   "levelNote": "Batteries and storage are net-zero technologies; also shapes access to public projects",
   "compliance": [
    "Bids in public procurement and renewable auctions must document sustainability, cybersecurity and supply-chain resilience"
   ],
   "access": [
    "At least 30% of renewable auction volume (or 6 GW a year) must apply non-price criteria; products from a third country supplying over 50% of a technology lose points — Chinese storage and inverters become less competitive in these tenders",
    "Public procurement also applies resilience scoring"
   ],
   "support": [
    "EU battery plants can apply for net-zero strategic-project status, with permitting cut to 12 or 18 months and priority handling",
    "Net-zero acceleration valleys and regulatory sandboxes can be set up"
   ],
   "actions": [
    "Study the non-price criteria in target countries' auctions and procurement",
    "Apply early for strategic-project status for EU plant projects"
   ],
   "segments": [
    "Cell/module manufacturing",
    "Energy storage systems",
    "EU production",
    "Exports to the EU"
   ]
  },
  "council": [
   {
    "label": "Competitiveness Council general approach",
    "body": "Competitiveness Council (COMPET)"
   },
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Belgian Presidency"
   }
  ],
  "milestones": [
   "Entry into force",
   "Commission adopts implementing regulation on non-price criteria in renewable auctions",
   "Non-price criteria in auctions apply",
   "Benchmark year for 40% EU manufacturing capacity"
  ]
 },
 "iaa": {
  "name": "Industrial Accelerator Act (IAA)",
  "short": "Industrial Accelerator Act",
  "tags": [
   "Made in EU",
   "Low-carbon label",
   "FDI screening",
   "Batteries"
  ],
  "summary": "A new framework to accelerate capacity and decarbonisation in strategic sectors: ‘Made in EU’ and low-carbon requirements in public procurement and public support, conditions on large foreign direct investment in strategic sectors including batteries (such as joint ventures, technology transfer and local staff), and amendments to the NZIA and other laws. Handled in Parliament jointly by INTA, ITRE and IMCO.",
  "impact": [
   "Batteries are a strategic sector: foreign battery investments may face conditions on ownership, technology transfer and localisation",
   "‘Made in EU’ and low-carbon requirements in procurement and subsidies affect battery and EV supply-chain location",
   "The rapporteurs' draft report proposes raising ‘Made in Europe’ and low-carbon thresholds for strategic sectors to 50% by 2036 and tightening the seven conditions under which third-country content counts as EU origin"
  ],
  "bi": {
   "levelNote": "‘Made in EU’ rules and FDI conditions directly decide the market space for Chinese battery makers in the EU",
   "compliance": [
    "Access to public procurement or subsidy schemes requires proof of EU origin for batteries and key components (phased in under the proposal to cells, BMS, cathode materials and more)"
   ],
   "access": [
    "Procurement and subsidies will favour ‘Made in EU’: the proposal requires storage battery systems to originate in the EU and systems above 1 MWh to use an EU-made BMS; EV incentives phase in EU production of battery components",
    "Large FDI in strategic sectors may face joint-venture, technology-transfer and local-staffing conditions, affecting new or expanded Chinese battery plants in the EU",
    "The EU-cell shares proposed in the Franco-German deal (10% → 20% → 70%) are still under negotiation; the final threshold decides the room for imported cells"
   ],
   "support": [
    "Batteries made in the EU benefit from procurement and subsidy preferences — companies already producing in Europe gain"
   ],
   "actions": [
    "Quantify the compliance gap of current products under different ‘Made in EU’ shares",
    "Assess localising components (BMS, cathode materials) at European plants",
    "Track the final FDI conditions and plan joint-venture or technology-partnership structures early"
   ],
   "segments": [
    "Cell/module manufacturing",
    "Energy storage systems",
    "BMS/EMS",
    "EU production",
    "Exports to the EU"
   ]
  },
  "council": [
   {
    "label": "Competitiveness and Growth Working Party discusses Presidency compromise text (9–10)",
    "body": "Competitiveness and Growth Working Party",
    "note": "Main change: the broad ‘Made in Europe’ concept replaced by a trade-agreement and product-specific market-access system"
   },
   {
    "label": "Competitiveness Council: Irish Presidency reports on progress",
    "body": "Competitiveness Council (COMPET)"
   }
  ],
  "tracking": {
   "source": "EP Legislative Train",
   "items": [
    "Commission opens public consultation (until 2025-07-09)",
    "Commission publishes the IAA proposal COM(2026)100: manufacturing at 20% of GDP by 2035, ‘Made in Europe’ and low-carbon preferences, stronger FDI screening, industrial acceleration areas, simpler permitting",
    "Joint INTA/ITRE/IMCO procedure (Rule 59); three rapporteurs appointed: Cavazzini (INTA), Grudler (ITRE), Jouvet (IMCO)",
    "Rapporteurs publish joint draft report (267 amendments): ‘Made in Europe’ and low-carbon thresholds up to 50% by 2036; maritime manufacturing included; strategic materials extended to construction plastics; higher EU content for wind, solar, heat pumps and nuclear",
    "Joint committee vote (Legislative Train schedule)",
    "Press report (MLex): committee vote postponed to 14 December, over 5,000 amendments",
    "Plenary vote and EP negotiating position (week of 14 December, to be confirmed; OEIL forecast 14/12)"
   ],
   "outlook": "EP and Council positions are both expected around end-2026, with trilogues in 2027; member states are clearly divided over the ‘Made in Europe’ concept.",
   "src": [
    null,
    null,
    null,
    null,
    null,
    "MLex (press)",
    null
   ]
  }
 },
 "nzia-nonprice": {
  "name": "Implementing regulation on non-price criteria in renewable auctions",
  "short": "Auction non-price criteria",
  "tags": [
   "Auctions",
   "Resilience criteria",
   "Cybersecurity",
   "Single-source dependence"
  ],
  "summary": "Under Article 26 of the NZIA, sets the non-price criteria renewable auctions must apply: responsible business conduct, cybersecurity and data security, ability to deliver on time, and resilience — if more than 50% of a net-zero technology or its main components comes from a single third country, products from that country are disadvantaged in scoring. Auctions must apply them from 30 December 2025.",
  "impact": [
   "In solar, wind and storage auctions, main components from China may lose points"
  ],
  "bi": {
   "levelNote": "Directly affects the competitiveness of Chinese storage and inverters in European auctions",
   "compliance": [
    "Bids must document cybersecurity, data security and responsible business conduct"
   ],
   "access": [
    "At least 30% of auction volume (or 6 GW a year) must apply resilience criteria; products from countries with over 50% dependence (such as China) are disadvantaged"
   ],
   "support": [
    "Storage systems and components made in the EU score better"
   ],
   "actions": [
    "Study how resilience criteria are scored in key countries' auctions",
    "Assess localising key components to meet resilience requirements"
   ],
   "segments": [
    "Energy storage systems",
    "Exports to the EU",
    "EU production"
   ]
  },
  "milestones": [
   "Commission adopts the implementing regulation",
   "Non-price criteria in auctions apply"
  ],
  "act": {
   "ref": "Implementing regulation (adopted 2025-05-23)",
   "statusNote": "Regulation number to verify",
   "basis": "NZIA, Article 26"
  }
 },
 "fsr": {
  "name": "Foreign Subsidies Regulation (FSR)",
  "short": "Foreign Subsidies Regulation",
  "tags": [
   "Foreign subsidies",
   "Merger notification",
   "Public procurement",
   "Ex officio review"
  ],
  "summary": "Regulation (EU) 2022/2560. The Commission can review foreign subsidies that distort the internal market: mergers with EU turnover ≥ €500 million and foreign financial contributions ≥ €50 million must be notified; bids in public procurement worth ≥ €250 million must declare foreign financial contributions; and the Commission can open ex officio reviews. Remedies include commitments, prohibiting deals or excluding bids. It has been used on Chinese bidders for a Romanian solar park (the bidders withdrew) and on wind equipment.",
  "impact": [
   "Domestic subsidies received by Chinese battery makers for EU acquisitions or new plants may be reviewed",
   "Bids for large storage and grid procurement must declare foreign financial contributions"
  ],
  "bi": {
   "levelNote": "A key review tool for Chinese investment and bids in the EU",
   "compliance": [
    "Mergers and procurement bids above the thresholds must declare foreign financial contributions to the Commission (government grants, low-interest loans, tax breaks)"
   ],
   "access": [
    "The Commission can review subsidies behind EU battery plants ex officio and require commitments or conditions; bids can be excluded from procurement"
   ],
   "support": [],
   "actions": [
    "Compile the group's domestic subsidies and financing support into an FSR filing library",
    "Check notification thresholds before bidding for large storage projects"
   ],
   "segments": [
    "EU production",
    "Energy storage systems",
    "Exports to the EU"
   ]
  },
  "council": [
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "French Presidency"
   }
  ],
  "milestones": [
   "Entry into force",
   "Regulation applies",
   "Prior notification for mergers and procurement applies"
  ]
 },
 "forced-labour": {
  "name": "Regulation prohibiting products made with forced labour",
  "short": "Forced Labour Regulation",
  "tags": [
   "Forced labour",
   "Supply chain",
   "Market ban"
  ],
  "summary": "Regulation (EU) 2024/3015 bans placing, making available or exporting products made with forced labour on the EU market, regardless of origin or company size. Competent authorities and the Commission investigate on a risk basis; confirmed products must be withdrawn and disposed of. The Commission must issue guidelines and a database of forced-labour risk areas and products.",
  "impact": [
   "If graphite, lithium or polysilicon supply chains are found to involve forced labour, the related battery products will be banned from sale"
  ],
  "bi": {
   "levelNote": "Applies to all companies and products; a confirmed finding means a sales ban",
   "compliance": [
    "Companies must be able to show their supply chains are free of forced labour and provide traceability information in investigations"
   ],
   "access": [
    "Products found to involve forced labour must be withdrawn from the EU market and can return only after the parts are replaced — a direct risk for supply chains with raw materials from high-risk regions"
   ],
   "support": [],
   "actions": [
    "Trace graphite, lithium and other raw materials back to the mine",
    "Track the Commission's risk-area and product database"
   ],
   "segments": [
    "Materials sourcing",
    "Cell/module manufacturing",
    "Exports to the EU"
   ]
  },
  "council": [
   {
    "label": "COREPER adopts the Council negotiating mandate",
    "body": "COREPER II"
   },
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Belgian Presidency"
   }
  ],
  "milestones": [
   "Entry into force",
   "Deadline for Commission guidelines and risk database",
   "Regulation applies"
  ]
 },
 "csddd": {
  "name": "Corporate Sustainability Due Diligence Directive (CSDDD)",
  "short": "CSDDD",
  "tags": [
   "Due diligence",
   "Human rights",
   "Environment",
   "Value chain"
  ],
  "summary": "Directive (EU) 2024/1760 requires large companies to identify, prevent and mitigate adverse human-rights and environmental impacts in their own operations, subsidiaries and upstream business partners. Omnibus I (Directive (EU) 2026/470) sharply narrowed its scope and postponed it: the EU civil-liability regime and the climate transition plan obligation were removed, and application moved to July 2029.",
  "impact": [
   "Overlaps with battery due diligence under the Batteries Regulation; large EU companies need one integrated system"
  ],
  "bi": {
   "levelNote": "After Omnibus I only very large companies are covered",
   "compliance": [
    "EU companies above the thresholds (and non-EU companies with qualifying EU turnover) must carry out value-chain due diligence; thresholds were raised by Omnibus I"
   ],
   "access": [
    "European customers (carmakers, energy companies) will pass due-diligence requirements on to battery suppliers"
   ],
   "support": [],
   "actions": [
    "Assess whether the Batteries Regulation system needs extending to CSDDD scope",
    "Prepare answers to customer due-diligence questionnaires"
   ],
   "segments": [
    "EU production",
    "Materials sourcing"
   ]
  },
  "council": [
   {
    "label": "Competitiveness Council general approach",
    "body": "Competitiveness Council"
   },
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Spanish Presidency"
   }
  ],
  "milestones": [
   "Entry into force",
   "Transposition deadline (as amended by Omnibus I)",
   "Due-diligence obligations apply (as amended by Omnibus I)"
  ]
 },
 "omnibus-i": {
  "name": "Omnibus I: simplification of CSRD and CSDDD",
  "short": "Omnibus I simplification",
  "tags": [
   "Omnibus simplification",
   "CSRD",
   "CSDDD"
  ],
  "summary": "Directive (EU) 2026/470, published 26 February 2026 and in force since 18 March 2026. Sharply narrows the scope of the Corporate Sustainability Reporting Directive (CSRD) and the CSDDD, replacing the ‘two out of three’ test with stricter cumulative thresholds; removes the EU civil-liability regime and climate transition plan obligation from the CSDDD. Transposition deadline 19 March 2027 for the CSRD changes and 26 July 2028 for the CSDDD changes.",
  "impact": [
   "Most mid-sized EU subsidiaries no longer need CSRD reporting or CSDDD due diligence"
  ],
  "bi": {
   "levelNote": "Lightens reporting and due-diligence burdens for EU subsidiaries",
   "compliance": [
    "Re-check under the new thresholds whether EU subsidiaries still need CSRD reporting and CSDDD due diligence (exact employee and turnover thresholds to verify)"
   ],
   "access": [],
   "support": [
    "Lower reporting and due-diligence burden"
   ],
   "actions": [
    "Review CSRD reporting plans against the new thresholds"
   ],
   "segments": [
    "EU production"
   ]
  },
  "council": [
   {
    "label": "Council adopts negotiating mandate",
    "body": "COREPER I"
   },
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Danish Presidency"
   }
  ],
  "milestones": [
   "Entry into force",
   "Transposition deadline for CSRD changes",
   "Transposition deadline for CSDDD changes"
  ]
 },
 "gpsr": {
  "name": "General Product Safety Regulation (GPSR)",
  "short": "General Product Safety Regulation",
  "tags": [
   "Consumer product safety",
   "Recalls",
   "Online sales",
   "Power banks"
  ],
  "summary": "Regulation (EU) 2023/988 replaces the General Product Safety Directive. Applies to consumer products, including power banks, portable power stations and home storage, requiring risk analysis, technical documentation, traceability and a responsible person in the EU. Online marketplaces must cooperate, accidents must be reported through the Safety Business Gateway, and recall procedures are standardised.",
  "impact": [
   "Battery products sold to consumers need an EU responsible person and must meet labelling, traceability and accident-reporting rules"
  ],
  "bi": {
   "levelNote": "Affects power banks, portable power stations and other consumer battery products",
   "compliance": [
    "Consumer battery products need an EU-based responsible economic operator, with manufacturer and responsible-person details on product and packaging",
    "Safety incidents must be reported via the EU portal; recalls must notify consumers and offer remedies"
   ],
   "access": [
    "Marketplaces such as Amazon will require responsible-person and safety information or delist the product"
   ],
   "support": [],
   "actions": [
    "Check EU responsible persons and labels for consumer products",
    "Set up incident-reporting and recall procedures"
   ],
   "segments": [
    "Exports to the EU",
    "Energy storage systems"
   ]
  },
  "council": [
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Czech Presidency"
   }
  ],
  "milestones": [
   "Entry into force",
   "Regulation applies"
  ]
 },
 "rohs": {
  "name": "Restriction of Hazardous Substances in electrical and electronic equipment (RoHS)",
  "short": "RoHS Directive",
  "tags": [
   "Hazardous substances",
   "BMS",
   "Power conversion",
   "CE"
  ],
  "summary": "Directive 2011/65/EU (RoHS 2) restricts lead, mercury, cadmium, hexavalent chromium, PBB, PBDE and four phthalates in electrical and electronic equipment as a condition for CE marking. Batteries themselves are outside RoHS (covered by the Batteries Regulation), but the BMS, power conversion, cabling and charging equipment in storage systems must comply.",
  "impact": [
   "Electronic parts of storage systems need RoHS compliance documentation"
  ],
  "bi": {
   "levelNote": "Electronic parts of storage systems must comply",
   "compliance": [
    "Electronics in storage systems, inverters and chargers must meet substance limits and be covered in the technical file and declaration of conformity"
   ],
   "access": [
    "Electrical equipment that fails RoHS cannot carry the CE mark"
   ],
   "support": [],
   "actions": [
    "Check RoHS test reports from suppliers of storage-system electronics"
   ],
   "segments": [
    "Energy storage systems",
    "BMS/EMS",
    "Exports to the EU"
   ]
  },
  "milestones": [
   "Entry into force",
   "Transposition deadline"
  ]
 },
 "pfas": {
  "name": "Universal PFAS restriction (per- and polyfluoroalkyl substances)",
  "short": "Universal PFAS restriction",
  "tags": [
   "PFAS",
   "PVDF",
   "Electrolyte",
   "REACH"
  ],
  "summary": "A restriction proposal covering some 10,000 substances, submitted by five countries in 2023 and advancing under the REACH restriction procedure. ECHA's Committee for Risk Assessment (RAC) adopted its opinion on 2 March 2026, rejecting a blanket exemption for fluoropolymers; the Committee for Socio-economic Analysis (SEAC) agreed its draft opinion on 10 March 2026 and consulted until 25 May. SEAC did not accept excluding fluoropolymers from scope but supports targeted derogations for specific uses without alternatives; its final opinion is expected by end-2026, after which the Commission and REACH Committee decide. In April 2026 the Commission dropped the full REACH revision but stated the PFAS restriction is unaffected.",
  "impact": [
   "PVDF binders, fluorinated electrolyte additives and separator coatings may be restricted, depending on whether battery uses get derogations and how long the transition is"
  ],
  "bi": {
   "levelNote": "PVDF and other fluorinated materials are widely used in electrode binders and electrolytes",
   "compliance": [
    "If adopted, PFAS materials in batteries made or sold in the EU must be substituted within the transition period or used under derogation conditions with reporting"
   ],
   "access": [
    "Battery parts containing PFAS without a derogation may be banned from the EU market"
   ],
   "support": [],
   "actions": [
    "Inventory PFAS uses and quantities in cells (binders, electrolyte, separators, seals)",
    "Assess progress on fluorine-free binders and other substitutes",
    "Engage in the SEAC consultation and the Commission decision through industry associations"
   ],
   "segments": [
    "Cell/module manufacturing",
    "Materials sourcing",
    "EU production"
   ]
  },
  "milestones": [
   "ECHA RAC adopts its opinion",
   "SEAC draft opinion consultation closes",
   "SEAC final opinion (expected)"
  ],
  "act": {
   "ref": "REACH Annex XVII restriction proposal (universal PFAS restriction)",
   "statusNote": "RAC opinion adopted; SEAC final opinion expected end-2026",
   "basis": "REACH, Articles 68–73"
  }
 },
 "lithium-clp": {
  "name": "Hazard classification of lithium salts (lithium carbonate, hydroxide, chloride)",
  "short": "Lithium salt classification",
  "tags": [
   "Lithium carbonate",
   "Lithium hydroxide",
   "Reproductive toxicity",
   "CLP"
  ],
  "summary": "ECHA's RAC recommended in 2021 classifying lithium carbonate, lithium chloride and lithium hydroxide as Category 1A reproductive toxicants and maintained this after review. The Commission included the three salts in the draft 24th adaptation to technical progress (ATP) of CLP, notified to the WTO on 27 November 2025 with adoption planned for Q1 2026; whether it has been adopted is still to be verified.",
  "impact": [
   "Classification as Repr. 1A may trigger follow-up REACH controls and occupational-health requirements, raising costs for cathode and cell production in the EU"
  ],
  "bi": {
   "levelNote": "Raises occupational-health and compliance costs at EU cathode and cell plants",
   "compliance": [
    "Once in force, lithium salts must be labelled and packaged as Repr. 1A substances and plants must tighten exposure controls"
   ],
   "access": [
    "May become a candidate for REACH authorisation or restriction, affecting EU use in the long term"
   ],
   "support": [],
   "actions": [
    "Assess exposure controls where lithium salts are handled at EU plants",
    "Track ATP adoption and application date"
   ],
   "segments": [
    "Materials sourcing",
    "EU production"
   ]
  },
  "milestones": [
   "Draft ATP notified to the WTO"
  ],
  "act": {
   "ref": "Draft 24th CLP adaptation to technical progress (ATP)",
   "statusNote": "Notified to the WTO on 2025-11-27; adoption planned for Q1 2026, current status to verify",
   "basis": "CLP Regulation (EC) 1272/2008, Annex VI"
  }
 },
 "espr": {
  "name": "Ecodesign for Sustainable Products Regulation (ESPR)",
  "short": "Ecodesign Regulation",
  "tags": [
   "Digital product passport",
   "Durability",
   "Steel & aluminium"
  ],
  "summary": "Extends ecodesign from energy-related products to almost all physical goods, setting durability, repairability, recycled content and carbon/environmental footprint requirements, and creates the Digital Product Passport (DPP). Battery requirements are set separately in the Batteries Regulation, but the DPP system is shared with the battery passport.",
  "impact": [
   "Digital product passport infrastructure interoperates with the battery passport",
   "The first working plan prioritises steel and aluminium, upstream materials for batteries and energy equipment"
  ],
  "bi": {
   "levelNote": "Battery requirements are in the Batteries Regulation; ESPR matters mainly through the digital product passport",
   "compliance": [
    "Batteries are not directly subject to ESPR product requirements, but DPP technical standards are shared with the battery passport, so data systems must be compatible"
   ],
   "access": [
    "Future ecodesign requirements for steel, aluminium and other upstream materials will feed into casing and structural-part sourcing"
   ],
   "support": [],
   "actions": [
    "Design the battery-passport system to the common ESPR DPP standards to avoid duplication"
   ],
   "segments": [
    "Materials sourcing"
   ]
  },
  "council": [
   {
    "label": "Competitiveness Council general approach",
    "body": "Competitiveness Council"
   },
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Spanish Presidency"
   }
  ],
  "milestones": [
   "Entry into force",
   "Commission adopts the first ESPR working plan 2025–2030"
  ]
 },
 "emd-reg": {
  "name": "Electricity market design reform (Regulation)",
  "short": "Electricity market reform – Regulation",
  "tags": [
   "Contracts for difference",
   "PPA",
   "Flexibility",
   "Storage"
  ],
  "summary": "Amends Electricity Regulation 2019/943: public support for new renewables and nuclear must use two-way contracts for difference, long-term PPAs are encouraged, non-fossil flexibility needs assessments and support schemes are introduced, and storage and demand response are strengthened.",
  "impact": [
   "Member states must assess flexibility needs and may create support schemes for storage and demand response",
   "PPA promotion and guarantee schemes help storage projects lock in revenues"
  ],
  "bi": {
   "levelNote": "Creates revenue mechanisms for storage — mainly drives demand for storage",
   "compliance": [],
   "access": [],
   "support": [
    "Member states must assess flexibility needs and may set up non-fossil flexibility support schemes for storage and demand response, directly driving storage demand",
    "PPAs and two-way CfDs help storage projects lock in revenue and raise financing"
   ],
   "actions": [
    "Track flexibility assessments and storage support schemes in key countries and prepare bids"
   ],
   "segments": [
    "Energy storage systems"
   ]
  },
  "council": [
   {
    "label": "Energy Council general approach",
    "body": "Energy Council (TTE Energy)"
   },
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Spanish Presidency"
   }
  ],
  "milestones": [
   "Regulation enters into force"
  ]
 },
 "emd-dir": {
  "name": "Electricity market design reform (Directive)",
  "short": "Electricity market reform – Directive",
  "tags": [
   "Consumer protection",
   "Energy sharing"
  ],
  "summary": "Amends Electricity Directive 2019/944 and the Renewable Energy Directive: stronger consumer rights, fixed-price contracts, energy sharing (including shared storage) and supplier hedging obligations.",
  "impact": [
   "Distributed storage and energy sharing gain a clear legal basis"
  ],
  "bi": {
   "levelNote": "Mainly benefits home and distributed storage",
   "compliance": [],
   "access": [],
   "support": [
    "Energy sharing (including shared storage) gains legal status, driving home and community storage demand"
   ],
   "actions": [
    "Track national transposition and assess home-storage opportunities"
   ],
   "segments": [
    "Energy storage systems"
   ]
  },
  "council": [
   {
    "label": "Energy Council general approach",
    "body": "Energy Council"
   },
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Spanish Presidency"
   }
  ],
  "milestones": [
   "Directive enters into force",
   "Transposition deadline"
  ]
 },
 "remit": {
  "name": "Wholesale Energy Market Integrity and Transparency (REMIT revision)",
  "short": "REMIT revision",
  "tags": [
   "Market supervision",
   "ACER"
  ],
  "summary": "Proposed alongside the electricity market reform: strengthens ACER's powers to investigate cross-border market manipulation and extends reporting obligations (including LNG and algorithmic trading).",
  "impact": [
   "Storage operators trading in wholesale electricity markets face fuller transaction-reporting obligations"
  ],
  "bi": {
   "levelNote": "Only affects storage assets trading in wholesale electricity markets",
   "compliance": [
    "Companies operating their own storage assets in EU wholesale markets must meet transaction-reporting obligations"
   ],
   "access": [],
   "support": [],
   "actions": [
    "Check whether own storage-asset operations fall within reporting scope"
   ],
   "segments": [
    "Energy storage systems"
   ]
  },
  "milestones": [
   "Regulation enters into force"
  ]
 },
 "dr-nc": {
  "name": "Network Code on Demand Response (NC DR)",
  "short": "Demand response network code",
  "tags": [
   "Demand response",
   "Storage",
   "Aggregators",
   "Flexibility markets"
  ],
  "summary": "Developed under Article 59 of the Electricity Regulation, drafted jointly by ENTSO-E and the EU DSO Entity and revised by ACER, which submitted it to the Commission on 7 March 2025. Harmonises rules for demand response, aggregation and storage participation in balancing markets and distribution-level flexibility services, and amends the balancing guideline, system operation guideline and demand connection code. Not adopted as of mid-2026.",
  "impact": [
   "Harmonises access rules for storage and aggregators in national balancing and flexibility markets, opening revenue opportunities for storage"
  ],
  "bi": {
   "levelNote": "Harmonises rules for storage in European flexibility markets",
   "compliance": [
    "Storage providing flexibility services must meet prequalification, metering and data-exchange requirements; the EMS needs matching interfaces"
   ],
   "access": [],
   "support": [
    "Common rules lower barriers for storage entering national balancing markets and widen revenue sources for C&I and home storage"
   ],
   "actions": [
    "Track adoption timing",
    "Check EMS support for prequalification and data-exchange requirements"
   ],
   "segments": [
    "Energy storage systems",
    "BMS/EMS"
   ]
  },
  "milestones": [
   "ACER submits its recommendation to the Commission"
  ],
  "act": {
   "ref": "Network code (Commission regulation, not yet adopted)",
   "statusNote": "ACER recommendation submitted 2025-03-07; not adopted as of mid-2026",
   "basis": "Electricity Regulation (EU) 2019/943, Article 59"
  }
 },
 "gas-h2-dir": {
  "name": "Hydrogen and decarbonised gas market Directive",
  "short": "Hydrogen market Directive",
  "tags": [
   "Hydrogen",
   "Natural gas"
  ],
  "summary": "Sets common rules for hydrogen networks and markets, including hydrogen network operators, unbundling and third-party access, and promotes markets for renewable and low-carbon gases.",
  "impact": [
   "Provides a market framework for long-duration storage paths where hydrogen complements batteries"
  ],
  "bi": {
   "levelNote": "Almost no direct impact on battery makers",
   "compliance": [],
   "access": [],
   "support": [
    "Hydrogen both complements and competes with batteries in long-duration storage — useful for market analysis"
   ],
   "actions": [],
   "segments": []
  },
  "council": [
   {
    "label": "Energy Council general approach",
    "body": "Energy Council"
   },
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Spanish Presidency"
   }
  ],
  "milestones": [
   "Transposition deadline (most provisions)"
  ]
 },
 "gas-h2-reg": {
  "name": "Hydrogen and decarbonised gas market Regulation",
  "short": "Hydrogen market Regulation",
  "tags": [
   "Hydrogen",
   "ENNOH"
  ],
  "summary": "Companion to the Directive: sets up the European Network of Network Operators for Hydrogen (ENNOH) and rules on cross-border hydrogen infrastructure planning and tariffs.",
  "impact": [],
  "bi": {
   "levelNote": "Almost no direct impact on battery makers",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  },
  "council": [
   {
    "label": "Energy Council general approach",
    "body": "Energy Council"
   },
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Spanish Presidency"
   }
  ]
 },
 "grids-tene": {
  "name": "Guidelines for trans-European energy infrastructure (TEN-E revision, European Grids Package)",
  "short": "TEN-E revision (Grids Package)",
  "tags": [
   "Grids",
   "Cross-border interconnection",
   "PCI/PMI"
  ],
  "summary": "One of the core laws of the European Grids Package: restructures trans-European energy infrastructure planning with centralised EU-level cross-border planning and extends scope to storage and distribution-grid projects.",
  "impact": [
   "Storage and distribution-grid projects are more likely to become Projects of Common Interest (PCI), gaining funding and fast permitting"
  ],
  "bi": {
   "levelNote": "Storage could enter cross-border infrastructure planning and funding",
   "compliance": [],
   "access": [],
   "support": [
    "Storage projects are more likely to be listed as Projects of Common Interest, with EU funding (CEF) and fast permitting"
   ],
   "actions": [
    "Follow PCI selection for large storage project opportunities"
   ],
   "segments": [
    "Energy storage systems"
   ]
  },
  "council": [
   {
    "label": "Energy Council adopts negotiating position on the Grids Package (TEN-E + permitting directive)",
    "body": "Energy Council (TTE Energy)",
    "note": "Asks for an implementing act on the central scenario; 10% of unused congestion income (rising to 25%) for cross-border infrastructure"
   },
   {
    "label": "First (introductory) trilogue",
    "body": "Irish Presidency"
   },
   {
    "label": "Second trilogue: agreement in principle to make sensitivity analysis mandatory",
    "body": "Irish Presidency"
   },
   {
    "label": "Third trilogue",
    "body": "Irish Presidency"
   },
   {
    "label": "Planned final trilogue",
    "body": "Irish Presidency"
   }
  ],
  "tracking": {
   "source": "EP Legislative Train",
   "items": [
    "Commission publishes the European Grids Package, with the TEN-E recast as a core law",
    "Rapporteur Tsvetelina Penkova (S&D) publishes draft report: stronger Commission role in joint energy scenarios; grid optimisation and demand-side options before new build",
    "ITRE committee vote"
   ],
   "outlook": "Aim to reach agreement at the final trilogue on 2026-12-01.",
   "src": [
    null,
    null,
    null
   ]
  }
 },
 "grids-permitting": {
  "name": "Directive accelerating permitting procedures (European Grids Package)",
  "short": "Grid permitting directive",
  "tags": [
   "Permitting",
   "Storage",
   "Grid connection"
  ],
  "summary": "The permitting part of the European Grids Package: amends the Electricity, Renewable Energy and Gas Directives to shorten permitting for grids, renewables, storage and charging infrastructure and improve grid-connection queue rules.",
  "impact": [
   "Permitting and grid connection for battery storage projects should get faster",
   "First-come-first-served grid connection may move to maturity-based ranking",
   "Both Parliament and Council support an overriding public interest presumption and tacit approval"
  ],
  "bi": {
   "levelNote": "Shortens permitting and connection for storage projects, releasing demand faster",
   "compliance": [],
   "access": [],
   "support": [
    "Shorter permitting and connection deadlines for battery storage; the overriding public interest presumption and tacit approval speed up projects",
    "Grid-connection queues may move from first-come-first-served to maturity-based ranking, favouring mature projects"
   ],
   "actions": [
    "Track the trilogue outcome and adjust storage project pipelines in key countries"
   ],
   "segments": [
    "Energy storage systems"
   ]
  },
  "council": [
   {
    "label": "Energy Council adopts negotiating position (together with TEN-E)",
    "body": "Energy Council (TTE Energy)",
    "note": "Digital application portals; electricity and renewable projects presumed of overriding public interest; member states may provide tacit approval for intermediate steps; community benefit sharing"
   },
   {
    "label": "First trilogue",
    "body": "Irish Presidency"
   },
   {
    "label": "Second trilogue",
    "body": "Irish Presidency"
   },
   {
    "label": "Third trilogue",
    "body": "Irish Presidency"
   }
  ],
  "tracking": {
   "source": "EP Legislative Train",
   "items": [
    "Rapporteur Niels Fuglsang (S&D) publishes draft report: faster small and repowering projects, EIA exemptions, tacit approval, energy efficiency first and non-wire alternatives, fully digital single window",
    "Deadline for committee amendments",
    "ITRE adopts report: 57 in favour, 3 against, 8 abstentions; trilogue mandate by 64:3"
   ],
   "outlook": "Trilogues under way; third round scheduled for 2026-11-17.",
   "src": [
    null,
    null,
    null
   ]
  }
 },
 "red3": {
  "name": "Renewable Energy Directive revision (RED III)",
  "short": "RED III",
  "tags": [
   "42.5% target",
   "Acceleration areas",
   "Storage"
  ],
  "summary": "Raises the 2030 renewables target to 42.5% (aiming for 45%), creates renewables acceleration areas with permitting deadlines, explicitly includes co-located storage in fast permitting, and strengthens sector targets for transport, industry and buildings.",
  "impact": [
   "Storage co-located with renewables benefits from the same accelerated permitting",
   "Renewable electricity in transport counts towards targets, supporting EV charging"
  ],
  "bi": {
   "levelNote": "Includes a direct obligation on BMS data access and supports storage deployment",
   "compliance": [
    "Article 20a requires manufacturers of home and industrial batteries and EVs to give real-time access to basic BMS data (state of health, state of charge, power set point) for users and third parties, applied once transposed"
   ],
   "access": [
    "Products whose BMS does not open data interfaces may fail requirements in some countries"
   ],
   "support": [
    "Storage co-located with renewables benefits from accelerated permitting",
    "Renewable electricity in transport counts towards targets, supporting EV and charging demand"
   ],
   "actions": [
    "Review BMS data interfaces and access rights and follow national transposition details"
   ],
   "segments": [
    "BMS/EMS",
    "Energy storage systems",
    "Cell/module manufacturing"
   ]
  },
  "council": [
   {
    "label": "Energy Council general approach",
    "body": "Energy Council"
   },
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Swedish Presidency"
   }
  ],
  "milestones": [
   "Directive enters into force",
   "Transposition deadline for permitting provisions",
   "Transposition deadline for other provisions"
  ]
 },
 "eed": {
  "name": "Energy Efficiency Directive recast (EED)",
  "short": "Energy Efficiency Directive",
  "tags": [
   "Energy efficiency first",
   "Data centres"
  ],
  "summary": "Makes an 11.7% reduction in final energy consumption by 2030 (versus the 2020 reference scenario) binding, enshrines the energy efficiency first principle and strengthens energy audit obligations for the public sector and companies.",
  "impact": [
   "Energy-management obligations for large industrial users affect battery plant operations"
  ],
  "bi": {
   "levelNote": "Only affects plants operating in the EU",
   "compliance": [
    "EU plants take on obligations by energy-use size: higher consumers must run an energy management system, others need periodic energy audits (Article 11; exact thresholds to verify)"
   ],
   "access": [],
   "support": [],
   "actions": [
    "Assess energy use at EU plants and set up an energy management system (e.g. ISO 50001) early"
   ],
   "segments": [
    "EU production"
   ]
  },
  "council": [
   {
    "label": "Energy Council general approach",
    "body": "Energy Council"
   },
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Swedish Presidency"
   }
  ],
  "milestones": [
   "Transposition deadline"
  ]
 },
 "epbd": {
  "name": "Energy Performance of Buildings Directive recast (EPBD)",
  "short": "Buildings Directive (EPBD)",
  "tags": [
   "Zero-emission buildings",
   "Charging pre-cabling",
   "Solar"
  ],
  "summary": "New buildings must be zero-emission from 2030, solar obligations are phased in, and new and renovated buildings must have EV charging points and pre-cabling.",
  "impact": [
   "Charging requirements for buildings drive demand for home and commercial charging and home storage"
  ],
  "bi": {
   "levelNote": "Indirectly drives home storage and charging demand",
   "compliance": [],
   "access": [],
   "support": [
    "Charging points and pre-cabling in new and renovated buildings, plus phased rooftop solar obligations, drive home storage demand"
   ],
   "actions": [
    "Track national transposition and assess integrated PV-plus-storage products"
   ],
   "segments": [
    "Energy storage systems"
   ]
  },
  "council": [
   {
    "label": "Energy Council general approach",
    "body": "Energy Council"
   },
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Spanish Presidency"
   }
  ],
  "milestones": [
   "Transposition deadline"
  ]
 },
 "co2-cars": {
  "name": "CO2 emission standards for cars and vans (2035 zero-emission)",
  "short": "Car CO2 standards",
  "tags": [
   "2035",
   "Electric vehicles",
   "Demand side"
  ],
  "summary": "Amends Regulation 2019/631: new cars must cut CO2 by 55% and vans by 50% versus 2021 by 2030, and both by 100% by 2035 — a de facto end to new combustion-engine sales. The core policy driver of EU traction-battery demand.",
  "impact": [
   "Shapes the EU traction-battery demand curve",
   "Later amended by 2025/1214 (three-year averaging) and 2025/0420(COD) (2035 target adjustment)"
  ],
  "bi": {
   "levelNote": "The core driver of EU traction-battery demand",
   "compliance": [],
   "access": [
    "Carmakers' electrification pace sets traction-battery orders; target changes (see the 2035 revision) directly shift the demand curve"
   ],
   "support": [
    "The −55% (2030) and deep 2035 targets secure long-term European demand for EVs and traction batteries"
   ],
   "actions": [
    "Update European traction-battery demand forecasts and capacity plans as targets change"
   ],
   "segments": [
    "Cell/module manufacturing",
    "Exports to the EU",
    "EU production"
   ]
  },
  "council": [
   {
    "label": "Environment Council general approach",
    "body": "Environment Council"
   },
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Czech Presidency"
   }
  ],
  "milestones": [
   "Amending regulation enters into force",
   "Cars −55% / vans −50%",
   "Cars and vans −100% (original text)"
  ]
 },
 "co2-flex-2025": {
  "name": "Car CO2 standards: compliance flexibility for 2025–2027",
  "short": "CO2 three-year averaging",
  "tags": [
   "Automotive Action Plan",
   "Urgent procedure"
  ],
  "summary": "Lets carmakers comply on the basis of 2025–2027 three-year average emissions instead of yearly checks, easing penalty pressure under the 2025 target. Parliament fast-tracked it under the urgent procedure.",
  "impact": [
   "Eases short-term pressure on carmakers to push EVs at discounted prices for compliance, affecting 2025–2026 battery demand"
  ],
  "bi": {
   "levelNote": "Shifts the timing of traction-battery demand in 2025–2027",
   "compliance": [],
   "access": [
    "Three-year averaging eases carmakers' short-term pressure; EV roll-out in 2025–2026 may slow and order expectations should be lowered"
   ],
   "support": [],
   "actions": [
    "Check 2025–2027 order timing with European carmaker customers"
   ],
   "segments": [
    "Cell/module manufacturing",
    "Exports to the EU"
   ]
  },
  "milestones": [
   "Amending regulation enters into force"
  ]
 },
 "co2-revision-2035": {
  "name": "Revision of light-duty vehicle CO2 standards and vehicle labelling (Automotive Package)",
  "short": "2035 target revision",
  "tags": [
   "Automotive Package",
   "2035",
   "EU-made low-carbon steel"
  ],
  "summary": "Core proposal of the December 2025 Automotive Package: the 2035 target is cut from 100% to 90%, with the remaining 10% offset by EU-made low-carbon steel and sustainable fuels; the 2030 van target falls from 50% to 40%; super-credits for small EU-made EVs; and a new vehicle-labelling regulation replaces 1999/94/EC. The same package includes the ‘Battery Booster’ strategy.",
  "impact": [
   "Leaves room for PHEVs and range extenders after 2035, lowering long-term battery demand expectations",
   "Super-credits for ‘Made in EU’ small EVs favour the EU battery supply chain",
   "Multi-year averaging for 2030–2032"
  ],
  "bi": {
   "levelNote": "Decides the size of European traction-battery demand after 2035 and links it to ‘Made in Europe’",
   "compliance": [],
   "access": [
    "The 2035 target drops from 100% to 90% (options in Parliament go lower), keeping room for PHEVs and range extenders and lowering expected BEV share and battery demand",
    "Small EVs made in the EU earn super-credits, favouring models using European-made batteries",
    "The Franco-German deal proposes limiting purchase incentives and public procurement to European-made vehicles and raising the EU-made share of batteries step by step"
   ],
   "support": [
    "The Automotive Package also launches the ‘Battery Booster’ strategy to support European battery production (relevant for EU plants)"
   ],
   "actions": [
    "Model European traction-battery demand under scenarios (90%, 87.5% etc.)",
    "Assess opportunities for PHEV and range-extender battery lines",
    "Track Battery Booster funding and eligibility"
   ],
   "segments": [
    "Cell/module manufacturing",
    "Exports to the EU",
    "EU production"
   ]
  },
  "council": [
   {
    "label": "First informal exchange of views in the Working Party on the Environment",
    "body": "Working Party on the Environment"
   },
   {
    "label": "Environment Council policy debate",
    "body": "Environment Council"
   },
   {
    "label": "Second Environment Council policy debate",
    "body": "Environment Council"
   },
   {
    "label": "Environment Council expected to agree a general approach",
    "body": "Environment Council"
   }
  ],
  "tracking": {
   "source": "EP Legislative Train",
   "items": [
    "Commissioner Hoekstra presents the proposal to ENVI and answers questions",
    "Massimiliano Salini (EPP) appointed rapporteur",
    "Rapporteur publishes draft report (proposing further major changes)",
    "EESC adopts opinion (rapporteur Matteo Borsani)",
    "Committee of the Regions adopts opinion on the Automotive Package",
    "Expected plenary vote (Legislative Train); OEIL forecast 2026-12-14"
   ],
   "outlook": "ENVI voted on 2026-11-04; the Council is expected to agree a general approach on 2026-12-11, followed by trilogues.",
   "src": [
    null,
    null,
    null,
    null,
    null,
    null
   ]
  }
 },
 "afir": {
  "name": "Alternative Fuels Infrastructure Regulation (AFIR)",
  "short": "AFIR (charging infrastructure)",
  "tags": [
   "Charging points",
   "TEN-T",
   "Truck charging",
   "Hydrogen stations",
   "Shore power",
   "Payment & price transparency",
   "AFIR review"
  ],
  "summary": "Replaces the 2014 Alternative Fuels Infrastructure Directive (AFID) with a directly applicable regulation setting binding targets for member states: fleet-based charging capacity (1.3 kW per battery-electric car, 0.8 kW per PHEV), spacing and power of fast-charging pools along the TEN-T core and comprehensive networks, truck charging and hydrogen refuelling targets, and shore power in ports and ground power at airports; plus ad hoc payment, price transparency, open data and smart/bidirectional charging requirements. Article 24 requires the Commission to complete a review by end-2026; a call for evidence was launched in March 2026.",
  "impact": [
   "Fast and megawatt truck-charging networks drive demand for high-power chargers and on-site storage (peak shaving, grid-constrained sites)",
   "New ≥50 kW chargers must accept card payment, and existing ≥50 kW chargers on the TEN-T must be retrofitted by 2027 — a compliance window for charger hardware and payment modules",
   "Open data, smart charging and V2G requirements lay the groundwork for vehicle-grid integration and storage in flexibility markets",
   "The 2026 review may change targets (member states want more flexibility; industry wants them kept) — watch truck-charging and shore-power targets"
  ],
  "bi": {
   "levelNote": "Drives demand through charging-network build-out; on-site storage benefits",
   "compliance": [
    "For charger makers: new ≥50 kW public chargers must accept card payment and meet data and smart-charging requirements"
   ],
   "access": [],
   "support": [
    "Fast and megawatt truck-charging networks drive demand for on-site storage (peak shaving, easing grid constraints)",
    "The 2026 review will decide whether targets are kept or relaxed"
   ],
   "actions": [
    "Develop storage solutions for charging hubs",
    "Track the AFIR review due end-2026"
   ],
   "segments": [
    "Energy storage systems"
   ]
  },
  "council": [
   {
    "label": "Transport Council general approach",
    "body": "Transport Council"
   },
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Swedish Presidency"
   }
  ],
  "milestones": [
   "Entry into force",
   "Regulation applies; new ≥50 kW public chargers must accept card/contactless payment",
   "Fast-charging pool every 60 km on the TEN-T core network (≥400 kW per pool, incl. at least one ≥150 kW point)",
   "Commission completes the AFIR review (Article 24)",
   "Existing ≥50 kW public chargers on the TEN-T retrofitted for card payment",
   "TEN-T core fast-charging pools raised to ≥600 kW (incl. at least two ≥150 kW points)",
   "Truck charging every 60 km on the TEN-T core (≥3,600 kW); hydrogen stations every 200 km on the core network and in urban nodes"
  ],
  "tracking": {
   "source": "Commission Have Your Say / public industry sources",
   "items": [
    "Commission launches a call for evidence for the AFIR review, focusing on whether targets remain adequate, especially for heavy-duty charging, port shore power and aviation",
    "AFIR review report (Article 24), possibly with an amending proposal"
   ],
   "outlook": "In December 2025 ten member states asked for more flexibility in meeting the targets; Eurelectric and the charging industry argue for ‘refinement, not replacement’. The review is expected in Q4 2026; any amending proposal will be added as a new procedure under this file.",
   "src": [
    null,
    null
   ]
  }
 },
 "cbam": {
  "name": "Carbon Border Adjustment Mechanism (CBAM)",
  "short": "CBAM",
  "tags": [
   "Carbon border levy",
   "Steel & aluminium",
   "Electricity"
  ],
  "summary": "Requires CBAM certificates, priced in line with the EU carbon price, for imports of iron and steel, aluminium, cement, fertilisers, electricity and hydrogen. A reporting-only transitional period ran from October 2023; the definitive period with payment began on 1 January 2026.",
  "impact": [
   "Aluminium and steel for battery casings and structural parts, and imported electricity, are affected",
   "The Commission is assessing extension to downstream products (possibly battery-related)"
  ],
  "bi": {
   "levelNote": "Batteries are not covered, but steel and aluminium costs rise for EU plants",
   "compliance": [
    "EU plants importing steel and aluminium (casings, structural parts, foil) must declare through an authorised declarant and buy CBAM certificates (definitive period from 2026)"
   ],
   "access": [
    "Batteries are not CBAM goods today; the Commission is assessing extension to downstream products — watch whether batteries or battery parts are included (to verify)"
   ],
   "support": [],
   "actions": [
    "Estimate CBAM costs of imported steel and aluminium at EU plants and assess EU sourcing or low-carbon aluminium",
    "Track the downstream extension"
   ],
   "segments": [
    "EU production",
    "Materials sourcing"
   ]
  },
  "council": [
   {
    "label": "ECOFIN general approach",
    "body": "ECOFIN"
   },
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Czech Presidency"
   }
  ],
  "milestones": [
   "Transitional period starts (reporting only)",
   "Definitive period starts"
  ]
 },
 "cbam-omnibus": {
  "name": "CBAM simplification and strengthening (Omnibus I)",
  "short": "CBAM simplification",
  "tags": [
   "Omnibus simplification",
   "50-tonne exemption"
  ],
  "summary": "Introduces an annual 50-tonne import threshold that exempts about 90% of small importers, simplifies emissions calculation and verification, and postpones the sale of certificates to 2027.",
  "impact": [
   "Lower compliance burden for small importers"
  ],
  "bi": {
   "levelNote": "Eases compliance for small-volume imports",
   "compliance": [
    "Importers below 50 tonnes a year are exempt from CBAM; certificate sales postponed to 2027"
   ],
   "access": [],
   "support": [],
   "actions": [
    "EU plants importing small volumes of steel and aluminium can check whether the exemption applies"
   ],
   "segments": [
    "EU production",
    "Materials sourcing"
   ]
  }
 },
 "cbam-downstream": {
  "name": "Extension of CBAM to downstream goods and anti-circumvention",
  "short": "CBAM downstream extension",
  "tags": [
   "Downstream goods",
   "Steel & aluminium products",
   "Anti-circumvention"
  ],
  "summary": "Proposed on 17 December 2025 (COM(2025) 989): from 1 January 2028 CBAM would cover about 180 steel- and aluminium-intensive downstream products, with anti-circumvention measures and a new method for embedded emissions in imported electricity. The Council agreed its general approach on 12 June 2026; Parliament's position was expected at the September 2026 plenary, followed by trilogues.",
  "impact": [
   "Check whether battery casings, structural parts and module frames are on the downstream product list"
  ],
  "bi": {
   "levelNote": "Could bring steel and aluminium battery parts into scope",
   "compliance": [
    "If covered, imports of these parts require embedded-emissions declarations and CBAM certificates"
   ],
   "access": [
    "Imported steel and aluminium parts get more expensive, eroding their price advantage over EU sourcing"
   ],
   "support": [],
   "actions": [
    "Check battery-related steel and aluminium parts against the downstream product list (CN codes)",
    "Estimate potential costs from 2028"
   ],
   "segments": [
    "EU production",
    "Materials sourcing",
    "Exports to the EU"
   ]
  },
  "council": [
   {
    "label": "Council general approach",
    "body": "Council"
   }
  ],
  "milestones": [
   "Downstream goods brought into CBAM (proposed)"
  ]
 },
 "ets": {
  "name": "EU Emissions Trading System revision (ETS, Fit for 55)",
  "short": "ETS revision",
  "tags": [
   "Carbon price",
   "Free allocation phase-out",
   "ETS2"
  ],
  "summary": "Raises the 2030 reduction target for ETS sectors to −62% versus 2005, phases out free allocation alongside CBAM (2026–2034), and creates ETS2 covering fuels for buildings and road transport.",
  "impact": [
   "A rising carbon price raises power costs and the energy cost of battery manufacturing",
   "ETS2 raises fuel costs, indirectly supporting EVs"
  ],
  "bi": {
   "levelNote": "Carbon prices raise power costs at EU plants and fund EU battery support",
   "compliance": [
    "Battery manufacturing is generally not directly covered by the ETS (unless a site has large combustion units); carbon costs come indirectly through power prices"
   ],
   "access": [],
   "support": [
    "The ETS-funded Innovation Fund has run a dedicated EV battery manufacturing call — an important funding source for EU battery projects",
    "ETS2 raises fuel costs, indirectly supporting EV demand"
   ],
   "actions": [
    "Sign long-term green PPAs for EU plants to hedge carbon-price risk",
    "Track Innovation Fund battery calls"
   ],
   "segments": [
    "EU production"
   ]
  },
  "council": [
   {
    "label": "Environment Council general approach",
    "body": "Environment Council"
   },
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Czech Presidency"
   }
  ],
  "milestones": [
   "Directive enters into force",
   "Free allocation for CBAM sectors starts phasing down"
  ]
 },
 "ets-2026": {
  "name": "ETS and Market Stability Reserve revision: competitiveness and cost-effective decarbonisation",
  "short": "ETS 2026 revision",
  "tags": [
   "ETS review",
   "Industrial competitiveness"
  ],
  "summary": "Proposed on 17 July 2026 to align the ETS with the 2040 target of −90% net emissions: the linear reduction factor falls from 4.4% to 3.7% (2031–2035) and 1.7% (2036–2040); up to 2% high-quality international credits in 2036–2040; 250 million allowances auctioned to support BioCCS/DACCS removals; extension to aviation, small maritime vessels and municipal waste incineration; free allocation, CBAM and indirect cost compensation kept; companies receiving free allocation must have decarbonisation investment plans from 30 September 2029; a new Industrial Decarbonisation Bank (2031–2040, about €100 billion) with an ETS investment booster in the meantime.",
  "impact": [
   "A slower reduction factor and international credits lower carbon-price expectations after 2030, affecting industrial power prices",
   "Indirect cost compensation continues, benefiting power-intensive manufacturing such as batteries",
   "The Industrial Decarbonisation Bank may become a new funding source for battery and clean-tech projects"
  ],
  "bi": {
   "levelNote": "Affects post-2030 carbon and power prices and adds funding tools",
   "compliance": [],
   "access": [],
   "support": [
    "A new Industrial Decarbonisation Bank (2031–2040, about €100 billion), bridged by an ETS investment booster, may fund battery projects",
    "Indirect cost compensation continues — check whether battery manufacturing is on the eligible list (to verify)",
    "A slower reduction factor helps contain post-2030 carbon prices, lowering power-price risk for EU plants"
   ],
   "actions": [
    "Track the design and eligibility of the Industrial Decarbonisation Bank"
   ],
   "segments": [
    "EU production"
   ]
  },
  "council": [
   {
    "label": "Environment Council policy debate",
    "body": "Environment Council"
   },
   {
    "label": "Environment Council aims for a general approach",
    "body": "Environment Council"
   }
  ],
  "tracking": {
   "source": "EP Legislative Train",
   "items": [
    "Commission publishes proposals revising the ETS Directive and MSR Decision, plus companion proposals on benchmark adjustment and stopping MSR invalidation",
    "ENVI rapporteur Peter Liese (EPP) tables draft report",
    "Deadline for committee amendments",
    "EESC adopts opinion (rapporteur Kädi Ristkok)",
    "Parliament aims to adopt its position by year-end"
   ],
   "outlook": "Parliament and Council aim for agreement in Q1 2027.",
   "src": [
    null,
    null,
    null,
    null,
    null
   ]
  }
 },
 "ev-duties": {
  "name": "Definitive countervailing duties on battery electric vehicles from China",
  "short": "EV countervailing duties on China",
  "tags": [
   "Countervailing duties",
   "Electric vehicles",
   "Trade defence"
  ],
  "summary": "Implementing Regulation (EU) 2024/2754 imposes five-year definitive countervailing duties on battery-electric cars from China from 30 October 2024: BYD 17.0%, Geely 18.8%, SAIC 35.3%, Tesla (Shanghai) 7.8%, other cooperating companies 20.7%, non-cooperating 35.3% (on top of the 10% standard duty). Industry groups are calling for a separate anti-subsidy probe into the battery supply chain.",
  "impact": [
   "Higher costs for vehicle exports to Europe push Chinese carmakers and battery makers to localise in the EU",
   "Batteries are not covered today, but industry is calling for a separate probe into cells and cathode/anode materials"
  ],
  "bi": {
   "levelNote": "Affects traction-battery exports through vehicles and pushes localisation in the EU",
   "compliance": [],
   "access": [
    "Chinese-made EVs with Chinese batteries lose price competitiveness in Europe, indirectly hitting traction-battery exports",
    "Risk of a separate anti-subsidy investigation into batteries and battery materials"
   ],
   "support": [
    "Battery makers producing in the EU for European carmakers or Chinese carmakers with EU plants benefit"
   ],
   "actions": [
    "Assess localising supply alongside customers in the EU",
    "Track any new trade-defence investigation into the battery supply chain"
   ],
   "segments": [
    "Exports to the EU",
    "EU production"
   ]
  },
  "milestones": [
   "Definitive countervailing duties apply (five years)"
  ],
  "act": {
   "ref": "Implementing Regulation (EU) 2024/2754",
   "basis": "Basic Anti-Subsidy Regulation (EU) 2016/1037"
  }
 },
 "cra": {
  "name": "Cyber Resilience Act (CRA)",
  "short": "Cyber Resilience Act",
  "tags": [
   "Digital products",
   "CE marking",
   "Vulnerability reporting",
   "SBOM",
   "BMS/EMS",
   "Chargers",
   "Inverters"
  ],
  "summary": "Regulation (EU) 2024/2847. For the first time sets horizontal mandatory cybersecurity requirements for all ‘products with digital elements’ (connected hardware and software) as a condition for CE marking: secure by design and by default, vulnerability handling, a software bill of materials (SBOM), free security updates during the support period (in principle at least five years), and 24-hour early warning / 72-hour notification of actively exploited vulnerabilities and severe incidents. Products with sector-specific cybersecurity rules (such as type-approved vehicles and medical devices) are excluded.",
  "impact": [
   "Connected home and C&I storage systems, BMS and EMS software, chargers and inverters exported to the EU must meet CRA essential requirements, reflected in the DoC/CE",
   "From 11 September 2026 actively exploited vulnerabilities and severe incidents must be reported via the ENISA single reporting platform — also for products already on the market",
   "Lifecycle vulnerability management, SBOM and security updates are needed throughout the support period",
   "Some categories (important and critical products) need third-party conformity assessment; harmonised standards are being drafted by CEN/CENELEC/ETSI"
  ],
  "bi": {
   "levelNote": "Connected storage and BMS/EMS software are ‘products with digital elements’ — a new condition for CE marking",
   "compliance": [
    "From 11 September 2026 actively exploited vulnerabilities and severe incidents must be reported to the ENISA platform (24-hour early warning, 72-hour notification), including for connected products already on sale",
    "From 11 December 2027 new products must meet essential cybersecurity requirements: secure design, vulnerability handling, SBOM, free security updates during the support period (in principle at least five years)"
   ],
   "access": [
    "Connected storage systems and BMS/EMS with communication functions that fail the CRA cannot carry the CE mark or be sold in the EU",
    "The expert group recommends classing PV inverters as Class II important products (third-party assessment); watch whether storage power conversion and EMS are classed similarly"
   ],
   "support": [
    "CRA compliance can be a selling point that addresses European customers' cybersecurity concerns about Chinese equipment"
   ],
   "actions": [
    "List all connected products and determine whether they are important or critical products",
    "Set up vulnerability reporting and a PSIRT team before September 2026",
    "Establish SBOM and security-update processes and define the support period"
   ],
   "segments": [
    "Energy storage systems",
    "BMS/EMS",
    "Exports to the EU"
   ]
  },
  "council": [
   {
    "label": "COREPER adopts the Council negotiating mandate",
    "body": "COREPER I"
   },
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Spanish Presidency"
   }
  ],
  "milestones": [
   "Entry into force",
   "Provisions on conformity assessment bodies (notified bodies) apply",
   "Reporting of actively exploited vulnerabilities and severe incidents applies (including products already on the market)",
   "Regulation fully applies: new products must meet essential cybersecurity requirements"
  ]
 },
 "cra-important": {
  "name": "CRA technical descriptions of important and critical products",
  "short": "CRA important products list",
  "tags": [
   "Important products",
   "Critical products",
   "Conformity assessment"
  ],
  "summary": "Implementing Regulation (EU) 2025/2392 gives precise technical descriptions for the 28 categories of important and critical products in CRA Annexes III and IV, deciding which products must use harmonised standards or third-party conformity assessment. The Commission's smart energy expert group has recommended classing PV inverters as Class II important products.",
  "impact": [
   "If gateways, routers or operating-system-type software in storage systems are important products, conformity assessment becomes stricter"
  ],
  "bi": {
   "levelNote": "Decides the conformity-assessment route for connected storage components",
   "compliance": [
    "Check each product against the descriptions to see whether it is a Class I or II important product or a critical product; Class II needs third-party assessment"
   ],
   "access": [
    "If storage power conversion and EMS are classed as Class II (as the expert group suggests for inverters), notified-body assessment is needed before CE marking"
   ],
   "support": [],
   "actions": [
    "Map each connected product against the 28 technical descriptions and fix its assessment route",
    "Book notified-body capacity early"
   ],
   "segments": [
    "Energy storage systems",
    "BMS/EMS",
    "Exports to the EU"
   ]
  },
  "milestones": [
   "Commission adopts the implementing regulation"
  ],
  "act": {
   "ref": "Implementing Regulation (EU) 2025/2392",
   "statusNote": "Adopted 2025-11-28",
   "basis": "CRA, Article 7"
  }
 },
 "nis2": {
  "name": "Network and Information Security Directive (NIS2)",
  "short": "NIS2 Directive",
  "tags": [
   "Critical infrastructure",
   "Energy sector",
   "Storage operators",
   "Charging operators",
   "Electrical equipment manufacturing",
   "Incident reporting",
   "Supply-chain security"
  ],
  "summary": "Directive (EU) 2022/2555 replaces NIS1 and extends cybersecurity obligations to medium and large entities in 18 sectors. Annex I (sectors of high criticality) includes electricity (generation, transmission and distribution, aggregators, demand-response and storage operators, charging point operators), oil and gas, and hydrogen; Annex II (other critical sectors) includes manufacturing of electrical equipment and motor vehicles. Entities must implement risk-management measures (including supply-chain security) and report incidents with a 24-hour early warning, 72-hour notification and one-month final report; management bodies are personally accountable. The electricity sector also has a Network Code on Cybersecurity (Delegated Regulation (EU) 2024/1366).",
  "impact": [
   "Medium and large battery and electrical-equipment manufacturers are ‘important entities’; storage operators, aggregators and charging operators are ‘essential entities’ in the energy sector",
   "Cyber risk management and incident reporting are required; fines up to 2% (essential) or 1.4% (important) of global turnover",
   "Supply-chain security requirements flow upstream: grid and energy customers will demand security assurances from equipment suppliers",
   "The electricity network code (NCCS) adds risk-assessment requirements for entities affecting cross-border flows"
  ],
  "bi": {
   "levelNote": "EU subsidiaries of medium and large battery makers are ‘important entities’; storage customers are ‘essential entities’",
   "compliance": [
    "EU entities of medium and large battery and electrical-equipment manufacturers (Annex II) are important entities: register with the national authority, implement cybersecurity risk management (including supply-chain security) and report incidents (24-hour early warning, 72-hour notification, one-month final report); management is personally accountable"
   ],
   "access": [
    "Storage operators, aggregators and charging operators are essential entities in the energy sector and will require cybersecurity assurances from equipment suppliers — directly affecting storage tender wins"
   ],
   "support": [],
   "actions": [
    "Confirm registration duties for EU subsidiaries in each country",
    "Build a cybersecurity management system (e.g. ISO 27001) and prepare answers to customers' supply-chain security questionnaires"
   ],
   "segments": [
    "EU production",
    "Energy storage systems",
    "Exports to the EU"
   ]
  },
  "council": [
   {
    "label": "Telecom Council general approach",
    "body": "Telecom Council"
   },
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "French Presidency"
   }
  ],
  "milestones": [
   "Entry into force",
   "Electricity Network Code on Cybersecurity (Delegated Regulation (EU) 2024/1366) enters into force",
   "Transposition deadline",
   "National measures apply; Implementing Regulation (EU) 2024/2690 (risk-management measures for digital infrastructure etc.) applies",
   "Member states establish lists of essential and important entities"
  ]
 },
 "nccs": {
  "name": "Network Code on Cybersecurity for cross-border electricity flows (NCCS)",
  "short": "Electricity cybersecurity network code",
  "tags": [
   "Electricity sector",
   "Cybersecurity",
   "Risk assessment"
  ],
  "summary": "Delegated Regulation (EU) 2024/1366, in force since 13 June 2024. Sets cybersecurity risk assessment, minimum and advanced security controls, supply-chain security and information sharing for entities affecting cross-border electricity flows, with periodic risk assessments at EU, regional and national level, complementing NIS2.",
  "impact": [
   "Grid operators and large storage operators identified as high- or critical-impact entities must apply extra controls and pass requirements on to suppliers"
  ],
  "bi": {
   "levelNote": "Security requirements flow through large storage and grid customers",
   "compliance": [],
   "access": [
    "High-impact entities will require storage equipment to meet the code's security controls and supply-chain security requirements in procurement"
   ],
   "support": [],
   "actions": [
    "Prepare a description of cybersecurity controls for grid and large storage customers"
   ],
   "segments": [
    "Energy storage systems",
    "BMS/EMS"
   ]
  },
  "milestones": [
   "Delegated regulation enters into force"
  ],
  "act": {
   "ref": "Delegated Regulation (EU) 2024/1366",
   "basis": "Electricity Regulation (EU) 2019/943, Article 59"
  }
 },
 "csa": {
  "name": "Cybersecurity Act (CSA)",
  "short": "Cybersecurity Act",
  "tags": [
   "ENISA",
   "Cybersecurity certification",
   "EUCC"
  ],
  "summary": "Regulation (EU) 2019/881 gives ENISA a permanent mandate and creates an EU cybersecurity certification framework for ICT products, services and processes (such as the EUCC common-criteria scheme, 5G and cloud schemes). Certification is broadly voluntary but can be referenced by other laws as a means of compliance (e.g. presumption of conformity under the CRA). In January 2026 the Commission proposed a ‘Cybersecurity Act 2’ to repeal and replace it.",
  "impact": [
   "EU cybersecurity certification is one way to demonstrate CRA compliance",
   "To be replaced by the new regulation 2026/0011(COD); watch transitional arrangements"
  ],
  "bi": {
   "levelNote": "Voluntary certification framework that can serve as proof of compliance",
   "compliance": [],
   "access": [],
   "support": [
    "EU cybersecurity certification can be used to demonstrate compliance with the CRA and other laws"
   ],
   "actions": [
    "Watch the certification transition once replaced by the Cybersecurity Act 2"
   ],
   "segments": [
    "BMS/EMS"
   ]
  },
  "milestones": [
   "Entry into force",
   "Certification framework provisions fully apply"
  ]
 },
 "csa2": {
  "name": "Cybersecurity Act 2: ENISA, the cybersecurity certification framework and ICT supply-chain security",
  "short": "Cybersecurity Act 2",
  "tags": [
   "ICT supply-chain security",
   "High-risk suppliers",
   "Key ICT assets",
   "ENISA"
  ],
  "summary": "Proposed on 20 January 2026 to repeal Regulation (EU) 2019/881. Its main addition is a horizontal ICT supply-chain security framework: identifying third countries posing cybersecurity concerns, designating high-risk suppliers by their links to those countries, and defining key ICT assets used by NIS2 entities. Designated high-risk suppliers can be excluded from procurement of key ICT components, EU funding programmes and EU cybersecurity certification; mobile networks must phase them out within at most 36 months; fines reach 7% of global turnover. ENISA's mandate is expanded and the certification framework simplified.",
  "impact": [
   "Energy is a NIS2 critical sector: if PV inverters, storage EMS or charging-management platforms are listed as key ICT assets, suppliers from designated countries may face exclusion and phase-out",
   "May affect Chinese battery and storage companies' participation in EU energy projects, access to EU funding and certification",
   "High-risk supplier designations and key-asset lists will come by implementing acts — secondary legislation needs close tracking"
  ],
  "bi": {
   "levelNote": "The high-risk supplier mechanism could exclude Chinese energy equipment from critical projects",
   "compliance": [],
   "access": [
    "If storage EMS, power conversion or inverters are listed as key ICT assets used by NIS2 entities, suppliers from designated countries may be excluded from procurement, EU-funded projects and certification, and face phase-out",
    "In April 2026 the Commission already barred EU funding for PV projects using high-risk-supplier inverters; similar steps may extend to storage",
    "The expert group recommends extending restrictions to the residential market"
   ],
   "support": [],
   "actions": [
    "Track high-risk supplier criteria and the key-asset list in trilogues",
    "Assess localisation: EU data storage, local operations and software control",
    "Prepare evidence of product security for customers and regulators"
   ],
   "segments": [
    "Energy storage systems",
    "BMS/EMS",
    "Exports to the EU",
    "EU production"
   ]
  },
  "council": [
   {
    "label": "Horizontal Working Party on Cyber Issues starts examination",
    "body": "Council Horizontal Working Party on Cyber Issues"
   },
   {
    "label": "Presidency progress report",
    "body": "Council Horizontal Working Party on Cyber Issues"
   }
  ]
 },
 "ai-act": {
  "name": "Artificial Intelligence Act (AI Act)",
  "short": "AI Act",
  "tags": [
   "High-risk AI",
   "Critical infrastructure",
   "General-purpose AI models",
   "AI literacy"
  ],
  "summary": "Regulation (EU) 2024/1689, the world's first comprehensive AI law, regulates by risk: unacceptable-risk practices are banned; high-risk AI systems (uses listed in Annex III, and AI safety components of products under Annex I legislation) must meet risk-management, data-governance, documentation, human-oversight, accuracy and cybersecurity requirements and undergo conformity assessment; providers of general-purpose AI models have transparency and copyright obligations. High-risk application dates were postponed by the Digital Omnibus on AI, Regulation (EU) 2026/1744.",
  "impact": [
   "AI safety components in the management and operation of electricity and heating infrastructure are Annex III high-risk — AI functions in grid control and storage EMS need assessment",
   "Factory AI used for inspection or machine control that forms a safety component of machinery falls under Annex I high-risk obligations (from August 2028)",
   "Since February 2025 companies must ensure staff AI literacy; users of general-purpose AI models should watch upstream providers' compliance information"
  ],
  "bi": {
   "levelNote": "Mainly affects AI functions in storage EMS and AI used at EU plants",
   "compliance": [
    "Since 2 February 2025, EU entities must ensure AI literacy among staff using AI",
    "AI used as a safety component of electricity-supply critical infrastructure is Annex III high-risk (from 2 December 2027): AI with safety functions in storage EMS must be assessed",
    "AI that is a safety component of factory machinery (inspection, machine control) falls under Annex I high-risk obligations (from 2 August 2028); AI screening of CVs for EU hiring is also high-risk"
   ],
   "access": [
    "AI functions classed as high-risk need conformity assessment before the products can be placed on the EU market"
   ],
   "support": [],
   "actions": [
    "Inventory AI uses in products and plants and decide whether any are high-risk",
    "Run AI-literacy training at EU entities"
   ],
   "segments": [
    "BMS/EMS",
    "EU production"
   ]
  },
  "council": [
   {
    "label": "Telecom Council general approach",
    "body": "Telecom Council"
   },
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Spanish Presidency"
   }
  ],
  "milestones": [
   "Entry into force",
   "Prohibited AI practices and AI literacy apply",
   "General-purpose AI model obligations, governance and penalties apply",
   "General application (except high-risk obligations, see below)",
   "Annex III high-risk AI obligations apply (originally 2026-08-02, postponed by 2026/1744)",
   "Annex I high-risk AI obligations apply (originally 2027-08-02, postponed by 2026/1744)"
  ]
 },
 "ai-omnibus": {
  "name": "Digital Omnibus on AI",
  "short": "AI Omnibus",
  "tags": [
   "Omnibus simplification",
   "High-risk delay"
  ],
  "summary": "Proposed on 19 November 2025 as part of the digital simplification package and published on 24 July 2026 as Regulation (EU) 2026/1744. Fixes the high-risk application dates: Annex III systems from 2 December 2027 and Annex I systems from 2 August 2028; postpones the deadline for national AI regulatory sandboxes to 2 August 2027; extends SME simplifications to small mid-caps; adds two prohibited practices (‘nudifier’ apps and AI-generated child sexual abuse material); keeps database registration for Annex III systems deemed not high-risk.",
  "impact": [
   "High-risk AI compliance gets 12–16 more months",
   "Watch the harmonised standards and the Commission's high-risk classification guidelines"
  ],
  "bi": {
   "levelNote": "Postpones the AI Act's high-risk obligations",
   "compliance": [
    "Annex III high-risk obligations postponed to 2 December 2027, Annex I to 2 August 2028"
   ],
   "access": [],
   "support": [
    "12–16 more months to prepare"
   ],
   "actions": [
    "Adjust AI compliance plans to the new dates and follow the high-risk classification guidelines and harmonised standards"
   ],
   "segments": [
    "BMS/EMS",
    "EU production"
   ]
  },
  "council": [
   {
    "label": "Provisional agreement between Council and Parliament",
    "body": "Cypriot Presidency"
   }
  ],
  "milestones": [
   "Regulation (EU) 2026/1744 enters into force",
   "New deadline for national AI regulatory sandboxes"
  ]
 }
};
