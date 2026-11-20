/*
 * impacts.en.js —— English text for data/impacts.js (chain + auto/storage/upstream perspectives), keyed by dossier id.
 * Lists follow the same order as impacts.js. Missing entries fall back to Chinese.
 */
window.IMPACTS_EN = {
 "batteries": {
  "chain": "Upstream footprint, recycled-content and due-diligence data → battery makers compile carbon-footprint declarations, passports and due-diligence reports → carmakers and storage integrators source accordingly and place products on the EU market",
  "auto": {
   "levelNote": "Traction batteries in vehicles must comply; carmakers are directly involved in passports, removal and recycling",
   "compliance": [
    "From 18 Feb 2027 traction batteries in EVs placed on the EU market need a battery passport and QR code; carmakers must connect data with battery suppliers",
    "When importing or placing traction batteries on the market, carmakers may carry EPR registration and take-back duties in some countries"
   ],
   "access": [
    "Without a carbon-footprint declaration, passport or due-diligence proof, the vehicle cannot be placed on the EU market",
    "Once classes and caps apply, carmakers will make carbon footprint a hard criterion for nominating battery suppliers"
   ],
   "support": [
    "One EU rulebook lets carmakers use a single battery-compliance approach across the EU"
   ],
   "actions": [
    "Allocate carbon-footprint, passport-data and due-diligence duties in battery supply contracts",
    "Build a vehicle–battery passport data interface"
   ],
   "segments": [
    "Vehicle exports",
    "EU vehicle production",
    "Supply-chain sourcing"
   ]
  },
  "storage": {
   "levelNote": "Industrial batteries >2 kWh and stationary storage systems are directly regulated",
   "compliance": [
    "Stationary storage must meet the Article 12 safety requirements with test documentation; industrial batteries >2 kWh must state performance and durability parameters",
    "From 18 Feb 2027 industrial batteries >2 kWh need a battery passport; carbon-footprint declarations phase in with the delegated acts",
    "Integrators selling under their own brand are producers and bear EPR registration and take-back duties"
   ],
   "access": [
    "Storage products failing safety, passport or EPR requirements cannot be sold in the EU"
   ],
   "support": [
    "Public procurement must consider battery sustainability criteria, favouring low-carbon storage"
   ],
   "actions": [
    "Check Article 12 safety testing and labelling for storage products",
    "Agree passport and footprint data responsibilities with cell suppliers"
   ],
   "segments": [
    "Energy storage systems",
    "Residential / C&I storage",
    "Storage asset operation"
   ]
  },
  "upstream": {
   "levelNote": "Footprint, recycled-content and due-diligence requirements flow straight to mining and materials companies",
   "compliance": [
    "Provide primary carbon-footprint data (energy use, power source, process emissions) to battery makers",
    "Cobalt, natural graphite, lithium, nickel and compounds are in due-diligence scope: trace to the mine and accept third-party audits"
   ],
   "access": [
    "High-footprint materials (e.g. coal-powered cathode or graphite) may be replaced by battery makers",
    "Minimum recycled content from 2031 creates demand for traceable recycled cobalt, lithium and nickel"
   ],
   "support": [
    "Recycled and low-carbon materials gain a price premium"
   ],
   "actions": [
    "Build product carbon-footprint and traceability data",
    "Develop recycled-material capacity or partner with recyclers"
   ],
   "segments": [
    "Mining & refining",
    "Cathode & anode materials",
    "Precursors",
    "Recycling & recycled materials"
   ]
  }
 },
 "batteries-dd-omnibus": {
  "chain": "Due diligence delayed by two years → battery makers and upstream get more time to build traceability → carmakers' supplier audits adjust",
  "auto": {
   "levelNote": "Indirect, through battery suppliers",
   "compliance": [],
   "access": [
    "After 18 Aug 2027, batteries from suppliers without a verified due-diligence system cannot be used in vehicles placed on the EU market"
   ],
   "support": [],
   "actions": [
    "Track battery suppliers' due-diligence readiness in supplier audits"
   ],
   "segments": [
    "Supply-chain sourcing"
   ]
  },
  "storage": {
   "levelNote": "Indirect, through battery suppliers",
   "compliance": [],
   "access": [
    "After 18 Aug 2027, storage products using cells from suppliers without a verified system cannot be placed on the EU market"
   ],
   "support": [],
   "actions": [
    "Check cell suppliers' due-diligence readiness"
   ],
   "segments": [
    "Energy storage systems"
   ]
  },
  "upstream": {
   "levelNote": "Upstream is the main object of due diligence; the delay buys time",
   "compliance": [
    "From 18 Aug 2027 support battery makers' traceability and third-party audits"
   ],
   "access": [],
   "support": [
    "Two more years to complete mine traceability and certification"
   ],
   "actions": [
    "Use the buffer to complete mine-to-material traceability and audits"
   ],
   "segments": [
    "Mining & refining",
    "Cathode & anode materials",
    "Precursors"
   ]
  }
 },
 "bat-cfb": {
  "chain": "Emissions from upstream materials and electricity → counted into the battery footprint under the CFB method → carmakers choose suppliers by footprint class",
  "auto": {
   "levelNote": "Determines the footprint and future class of purchased traction batteries",
   "compliance": [],
   "access": [
    "Once in force, footprint declarations and classes will guide supplier choice; high-footprint batteries risk being phased out"
   ],
   "support": [],
   "actions": [
    "Ask battery suppliers for footprint estimates using the draft method"
   ],
   "segments": [
    "Supply-chain sourcing",
    "Model & powertrain planning"
   ]
  },
  "storage": {
   "levelNote": "The EV method does not apply directly, but the industrial-battery method will follow it",
   "compliance": [],
   "access": [
    "The footprint method for industrial (incl. storage) batteries is expected to follow the CFB rules; electricity modelling is equally decisive"
   ],
   "support": [],
   "actions": [
    "Track the industrial-battery footprint delegated act"
   ],
   "segments": [
    "Energy storage systems"
   ]
  },
  "upstream": {
   "levelNote": "Materials usually make up the largest share of the battery footprint",
   "compliance": [
    "Provide primary data on materials production as the method requires"
   ],
   "access": [
    "If only grid-average factors count, cathode and anode materials made on coal-heavy grids look worse and may be replaced"
   ],
   "support": [
    "Green power and recycled materials cut the footprint significantly"
   ],
   "actions": [
    "Calculate key products' footprints with the draft method",
    "Assess green power or low-carbon processes"
   ],
   "segments": [
    "Cathode & anode materials",
    "Precursors",
    "Mining & refining",
    "Recycling & recycled materials"
   ]
  }
 },
 "bat-recycled": {
  "chain": "Recyclers produce recycled cobalt, lithium and nickel → battery makers calculate recycled content by mass balance → from 2031 non-compliant batteries cannot be placed on the market",
  "auto": {
   "levelNote": "Indirect, through battery suppliers",
   "compliance": [],
   "access": [
    "From 2031 traction batteries must meet minimum recycled content; carmakers must check suppliers can comply"
   ],
   "support": [],
   "actions": [
    "Include recycled-content requirements in long-term supply agreements"
   ],
   "segments": [
    "Supply-chain sourcing"
   ]
  },
  "storage": {
   "levelNote": "Industrial batteries are covered too",
   "compliance": [],
   "access": [
    "From 2031 industrial batteries >2 kWh must meet minimum recycled content"
   ],
   "support": [],
   "actions": [
    "Check cell suppliers' recycled-material sources"
   ],
   "segments": [
    "Energy storage systems"
   ]
  },
  "upstream": {
   "levelNote": "Decides how recycled material is counted and what it is worth",
   "compliance": [
    "Recycled-material suppliers must provide verifiable sourcing and mass-balance data"
   ],
   "access": [
    "If EU-recycled material gets a 1.3 factor (reported, to verify), recycled material from outside the EU becomes less competitive"
   ],
   "support": [
    "Recycling and producing recycled material in the EU gains an edge"
   ],
   "actions": [
    "Assess EU recycling or recycled-material capacity",
    "Keep recycled-material traceability and mass-balance records"
   ],
   "segments": [
    "Recycling & recycled materials",
    "Cathode & anode materials",
    "Precursors"
   ]
  }
 },
 "bat-recycling-eff": {
  "chain": "Recyclers calculate efficiency with one method → compliant recycling capacity underpins battery makers' EPR duties",
  "auto": {
   "levelNote": "Essentially no direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  },
  "storage": {
   "levelNote": "Affects recycling partners for end-of-life storage batteries",
   "compliance": [],
   "access": [
    "End-of-life storage batteries must go to compliant recyclers"
   ],
   "support": [],
   "actions": [
    "Check recycling partners' efficiency data"
   ],
   "segments": [
    "Storage asset operation"
   ]
  },
  "upstream": {
   "levelNote": "Directly binds recyclers",
   "compliance": [
    "Facilities must calculate and report recycling efficiency and material recovery with Regulation (EU) 2025/606"
   ],
   "access": [
    "Recyclers missing targets such as 65% lithium-battery efficiency by 2025 will lose business"
   ],
   "support": [],
   "actions": [
    "Re-check efficiency and recovery rates with the new method"
   ],
   "segments": [
    "Recycling & recycled materials"
   ]
  }
 },
 "bat-dd-guidelines": {
  "chain": "Commission guidelines specify due-diligence practice → battery makers design their systems → upstream provides traceability and audits",
  "auto": {
   "levelNote": "Indirect, through battery suppliers",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [
    "Update supplier due-diligence audits in line with the guidelines"
   ],
   "segments": [
    "Supply-chain sourcing"
   ]
  },
  "storage": {
   "levelNote": "Indirect, through cell suppliers",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [
    "Update supplier due-diligence audits in line with the guidelines"
   ],
   "segments": [
    "Energy storage systems"
   ]
  },
  "upstream": {
   "levelNote": "Upstream is the focus of due-diligence checks",
   "compliance": [
    "The guidelines will specify the risk information and audits upstream must provide"
   ],
   "access": [],
   "support": [],
   "actions": [
    "Track publication and prepare traceability and audit materials"
   ],
   "segments": [
    "Mining & refining",
    "Cathode & anode materials",
    "Precursors"
   ]
  }
 },
 "crma": {
  "chain": "EU benchmarks for extraction, processing, recycling and single-source reliance → upstream projects gain strategic status while import patterns are scrutinised → battery and carmaker sourcing adjusts",
  "auto": {
   "levelNote": "Indirect, through the battery supply chain",
   "compliance": [
    "Large carmakers producing strategic technologies must also assess strategic raw-material supply risks regularly"
   ],
   "access": [],
   "support": [],
   "actions": [
    "Assess country concentration of traction-battery materials"
   ],
   "segments": [
    "Supply-chain sourcing"
   ]
  },
  "storage": {
   "levelNote": "Indirect, through the battery supply chain",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [
    "Watch source concentration for LFP, graphite and other materials"
   ],
   "segments": [
    "Energy storage systems"
   ]
  },
  "upstream": {
   "levelNote": "Lithium, nickel, cobalt, graphite and manganese are strategic raw materials — aimed squarely at upstream",
   "compliance": [
    "Large companies must assess strategic raw-material supply risks every three years"
   ],
   "access": [
    "The 65% single-third-country benchmark colours how supply chains are judged in subsidies, procurement and approvals; chains reliant on Chinese graphite and precursors come under pressure"
   ],
   "support": [
    "Extraction, processing and recycling projects can apply for strategic status: faster permitting (15 months for processing/recycling) and financing support",
    "Third-country projects can also apply, giving overseas mining and materials projects a route into EU supply chains"
   ],
   "actions": [
    "Assess strategic-project applications for EU or overseas projects",
    "Follow the EU raw-materials joint purchasing platform"
   ],
   "segments": [
    "Mining & refining",
    "Cathode & anode materials",
    "Precursors",
    "Recycling & recycled materials"
   ]
  }
 },
 "crma-strategic": {
  "chain": "Commission selects strategic projects → selected materials and recycling projects move faster → they become priority sources for European battery supply chains",
  "auto": {
   "levelNote": "Essentially no direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  },
  "storage": {
   "levelNote": "Essentially no direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  },
  "upstream": {
   "levelNote": "Aimed directly at upstream projects",
   "compliance": [],
   "access": [
    "Material from non-strategic sources may score worse in European sourcing"
   ],
   "support": [
    "Selected projects get faster permitting, financing support and priority handling; third-country projects can apply too"
   ],
   "actions": [
    "Assess applying in the next selection round"
   ],
   "segments": [
    "Mining & refining",
    "Cathode & anode materials",
    "Precursors",
    "Recycling & recycled materials"
   ]
  }
 },
 "cea": {
  "chain": "EU harmonises rules for secondary raw materials and black mass → recycled material circulates freely in the EU → battery makers and carmakers can source recycled content more easily",
  "auto": {
   "levelNote": "May affect indirectly via a WEEE revision and the recycled-material market",
   "compliance": [],
   "access": [],
   "support": [
    "A single market for secondary raw materials helps carmakers meet recycled-content requirements"
   ],
   "actions": [
    "Track the Commission proposal"
   ],
   "segments": [
    "Supply-chain sourcing"
   ]
  },
  "storage": {
   "levelNote": "A WEEE revision may be included, affecting take-back for storage equipment",
   "compliance": [
    "If the WEEE revision is included, producer responsibility for storage systems may change"
   ],
   "access": [],
   "support": [],
   "actions": [
    "Track the WEEE part of the proposal"
   ],
   "segments": [
    "Energy storage systems"
   ]
  },
  "upstream": {
   "levelNote": "Will reshape rules for recycling and recycled materials",
   "compliance": [],
   "access": [
    "Harmonised definitions and customs codes for black mass and recycled materials will decide whether they can circulate in the EU and be exported"
   ],
   "support": [
    "A single market for secondary raw materials favours EU recycling and recycled-material businesses"
   ],
   "actions": [
    "Track provisions on black mass and end-of-waste criteria",
    "Assess a recycling footprint in the EU"
   ],
   "segments": [
    "Recycling & recycled materials",
    "Cathode & anode materials",
    "Precursors"
   ]
  }
 },
 "wsr": {
  "chain": "Cross-border shipments of waste batteries and black mass restricted → recycling closes the loop inside the EU → recycled supply concentrates in EU recyclers and hydrometallurgy",
  "auto": {
   "levelNote": "Affects where end-of-life traction batteries go",
   "compliance": [
    "Cross-border shipments of end-of-life traction batteries require electronic prior notification and consent"
   ],
   "access": [],
   "support": [],
   "actions": [
    "Check cross-border logistics of end-of-life batteries with recycling partners"
   ],
   "segments": [
    "EU vehicle production"
   ]
  },
  "storage": {
   "levelNote": "Affects end-of-life storage batteries and production scrap",
   "compliance": [
    "Cross-border shipments of end-of-life storage batteries require electronic filing and prior consent"
   ],
   "access": [
    "End-of-life batteries cannot be exported to non-OECD countries for treatment"
   ],
   "support": [],
   "actions": [
    "Plan EU recycling channels for end-of-life storage batteries"
   ],
   "segments": [
    "Storage asset operation",
    "Energy storage systems"
   ]
  },
  "upstream": {
   "levelNote": "Decides whether black mass and waste batteries can leave the EU",
   "compliance": [
    "From 21 May 2026 waste shipments within the EU must be filed electronically"
   ],
   "access": [
    "Once managed as hazardous waste, black mass cannot be exported to China or other non-OECD countries — shipping EU-recovered black mass home for refining is essentially closed"
   ],
   "support": [
    "Demand rises for EU hydrometallurgy and recycled-material capacity"
   ],
   "actions": [
    "Assess building or partnering on EU hydrometallurgy"
   ],
   "segments": [
    "Recycling & recycled materials"
   ]
  }
 },
 "black-mass": {
  "chain": "Black mass classified as hazardous → no exports to non-OECD countries → EU refining capacity becomes both bottleneck and opportunity",
  "auto": {
   "levelNote": "Essentially no direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  },
  "storage": {
   "levelNote": "Affects treatment of production scrap and end-of-life storage batteries",
   "compliance": [
    "Lithium-battery production waste must be classified and treated under hazardous-waste codes"
   ],
   "access": [],
   "support": [],
   "actions": [
    "Adjust waste-treatment contracts"
   ],
   "segments": [
    "Energy storage systems"
   ]
  },
  "upstream": {
   "levelNote": "Directly decides where black mass goes and what it is worth",
   "compliance": [
    "Recyclers must operate and ship under hazardous-waste rules"
   ],
   "access": [
    "Black mass can no longer be exported to China or other non-OECD countries for refining"
   ],
   "support": [
    "Demand rises for European hydrometallurgy and recycled material"
   ],
   "actions": [
    "Adjust black-mass sales and shipping before December 2026",
    "Assess EU refining capacity"
   ],
   "segments": [
    "Recycling & recycled materials"
   ]
  }
 },
 "ppwr": {
  "chain": "Packaging recyclability and reuse requirements → transport packaging and logistics for batteries, storage and vehicle parts must change",
  "auto": {
   "levelNote": "Affects transport packaging for parts and batteries",
   "compliance": [
    "From 2030 a share of pallets and crates used within the EU must be reusable"
   ],
   "access": [],
   "support": [],
   "actions": [
    "Push suppliers towards reusable packaging"
   ],
   "segments": [
    "Supply-chain sourcing",
    "EU vehicle production"
   ]
  },
  "storage": {
   "levelNote": "Storage product packaging and logistics must adapt",
   "compliance": [
    "From 12 Aug 2026 packaging must meet essential requirements; importers must fulfil packaging EPR"
   ],
   "access": [
    "Packaging failing recyclability or labelling rules cannot be placed on the market"
   ],
   "support": [],
   "actions": [
    "Redesign storage product packaging for PPWR"
   ],
   "segments": [
    "Energy storage systems"
   ]
  },
  "upstream": {
   "levelNote": "Affects transport packaging for materials",
   "compliance": [
    "Packaging for materials delivered to the EU must comply"
   ],
   "access": [],
   "support": [],
   "actions": [
    "Check export packaging for materials"
   ],
   "segments": [
    "Cathode & anode materials",
    "Electrolyte / separators"
   ]
  }
 },
 "weee": {
  "chain": "Producer responsibility for electrical equipment → storage systems, inverters and chargers must register and fund take-back",
  "auto": {
   "levelNote": "Mainly concerns electrical products such as chargers",
   "compliance": [
    "Chargers sold by carmakers (e.g. home wallboxes) need WEEE registration"
   ],
   "access": [],
   "support": [],
   "actions": [
    "Check WEEE registration for chargers"
   ],
   "segments": [
    "Vehicle exports"
   ]
  },
  "storage": {
   "levelNote": "Electronics in storage systems and inverters fall under WEEE",
   "compliance": [
    "Register as a WEEE producer in each country of sale and fund take-back; battery parts follow the Batteries Regulation's EPR separately"
   ],
   "access": [
    "Equipment without WEEE registration cannot be sold in most member states"
   ],
   "support": [],
   "actions": [
    "Separate storage-system parts under WEEE from those under the Batteries Regulation"
   ],
   "segments": [
    "Energy storage systems",
    "Residential / C&I storage"
   ]
  },
  "upstream": {
   "levelNote": "Essentially no direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  }
 },
 "weee-2024": {
  "chain": "Revised take-back cost rules for PV modules → clearer recycling costs for PV-plus-storage products",
  "auto": {
   "levelNote": "No direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  },
  "storage": {
   "levelNote": "Concerns PV modules in PV-plus-storage products",
   "compliance": [
    "PV modules bear take-back costs under the amended rules"
   ],
   "access": [],
   "support": [],
   "actions": [],
   "segments": [
    "Residential / C&I storage"
   ]
  },
  "upstream": {
   "levelNote": "No direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  }
 },
 "elv": {
  "chain": "Carmakers must build to circular-design rules and remove batteries from end-of-life vehicles → battery makers support removable designs → upstream gets steady end-of-life battery feedstock",
  "auto": {
   "levelNote": "Directly regulates vehicle design and end-of-life management",
   "compliance": [
    "Vehicles must meet circular-design requirements; traction batteries and motors must be removable and batteries taken out before treatment",
    "New vehicles must meet minimum recycled plastic and provide dismantling information"
   ],
   "access": [
    "Models failing circular-design and recycled-plastic requirements cannot obtain type approval"
   ],
   "support": [],
   "actions": [
    "Assess platform removability and recycled-plastic sources",
    "Agree dismantling plans with battery suppliers"
   ],
   "segments": [
    "Model & powertrain planning",
    "EU vehicle production",
    "Vehicle exports"
   ]
  },
  "storage": {
   "levelNote": "Essentially no direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  },
  "upstream": {
   "levelNote": "Centralised removal of end-of-life traction batteries steadies recycling feedstock",
   "compliance": [],
   "access": [],
   "support": [
    "Centralised removal provides steady feedstock for recycling and second life"
   ],
   "actions": [
    "Build recycling partnerships with dismantlers"
   ],
   "segments": [
    "Recycling & recycled materials"
   ]
  }
 },
 "nzia": {
  "chain": "EU sets a 40% manufacturing target and non-price auction criteria → storage and battery projects get fast permitting but face resilience scoring in auctions → demand for localised upstream materials rises",
  "auto": {
   "levelNote": "Vehicles are not net-zero technologies; affected indirectly through the battery supply chain",
   "compliance": [],
   "access": [],
   "support": [
    "European battery capacity growth helps carmakers source locally"
   ],
   "actions": [],
   "segments": [
    "Supply-chain sourcing"
   ]
  },
  "storage": {
   "levelNote": "Storage is a net-zero technology; non-price criteria apply in auctions and procurement",
   "compliance": [
    "Bids in auctions and procurement must document sustainability, cybersecurity and resilience"
   ],
   "access": [
    "Products from a single third country with over 50% supply share lose points; Chinese storage becomes less competitive"
   ],
   "support": [
    "EU storage manufacturing projects can apply for net-zero strategic status with fast permitting"
   ],
   "actions": [
    "Study resilience scoring in key countries' auctions",
    "Assess EU assembly of storage systems"
   ],
   "segments": [
    "Energy storage systems",
    "Storage asset operation"
   ]
  },
  "upstream": {
   "levelNote": "Materials are not net-zero technologies themselves, but localisation targets drive demand",
   "compliance": [],
   "access": [],
   "support": [
    "Growing EU battery and storage capacity drives local materials demand; EU materials projects can use fast permitting"
   ],
   "actions": [
    "Assess EU materials capacity"
   ],
   "segments": [
    "Cathode & anode materials",
    "Electrolyte / separators"
   ]
  }
 },
 "iaa": {
  "chain": "Carmakers need European-made batteries to qualify for purchase incentives → battery makers must produce cells and BMS in Europe → upstream must supply cathode materials and other parts in Europe",
  "auto": {
   "levelNote": "Purchase incentives and public procurement will favour ‘Made in Europe’ vehicles and batteries",
   "compliance": [
    "Models applying for incentives or procurement must prove EU origin of the vehicle and battery components"
   ],
   "access": [
    "Imported vehicles or models using imported batteries may lose incentive eligibility; the Franco-German deal proposes EU-made cell shares of 10% → 20% → 70% (under negotiation)",
    "Large FDI in strategic sectors (including EU car plants) may face joint-venture, technology-transfer and local-staff conditions"
   ],
   "support": [
    "Models built in the EU with European batteries gain incentive and procurement advantages"
   ],
   "actions": [
    "Quantify key models' gaps under different ‘Made in Europe’ shares",
    "Plan EU production and local battery sourcing"
   ],
   "segments": [
    "Vehicle exports",
    "EU vehicle production",
    "Supply-chain sourcing"
   ]
  },
  "storage": {
   "levelNote": "Public procurement and subsidies for storage require EU origin",
   "compliance": [
    "Storage systems in public procurement or subsidy schemes must be of EU origin; systems above 1 MWh must use an EU-made BMS (proposal)"
   ],
   "access": [
    "Imported storage systems lose eligibility for public projects and subsidies"
   ],
   "support": [
    "Companies assembling storage in the EU with local BMS benefit"
   ],
   "actions": [
    "Assess European localisation of storage systems and BMS"
   ],
   "segments": [
    "Energy storage systems",
    "Storage asset operation",
    "EMS/BMS"
   ]
  },
  "upstream": {
   "levelNote": "The second phase requires cathode materials and other parts to be made in the EU",
   "compliance": [
    "Battery-component origin rules extend in phases to cathode materials and more, with proof of origin required"
   ],
   "access": [
    "Imported cathode material may no longer count as ‘Made in Europe’ in the second phase"
   ],
   "support": [
    "EU materials capacity becomes key for battery makers to comply; demand rises"
   ],
   "actions": [
    "Assess building cathode and precursor capacity in the EU",
    "Track the final origin rules"
   ],
   "segments": [
    "Cathode & anode materials",
    "Precursors",
    "Electrolyte / separators"
   ]
  }
 },
 "nzia-nonprice": {
  "chain": "Renewable auctions apply resilience criteria → storage and inverters relying on one third country lose points → European-made systems and components win more easily",
  "auto": {
   "levelNote": "No direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  },
  "storage": {
   "levelNote": "Directly affects storage competitiveness in auction projects",
   "compliance": [
    "Bids must document cybersecurity, data security and responsible business conduct"
   ],
   "access": [
    "At least 30% of auction volume applies resilience criteria; products from countries with over 50% dependence (such as China) are disadvantaged"
   ],
   "support": [
    "European-made storage systems score better"
   ],
   "actions": [
    "Study key countries' scoring and assess localising key components"
   ],
   "segments": [
    "Energy storage systems",
    "Storage asset operation"
   ]
  },
  "upstream": {
   "levelNote": "Indirect, through system integrators",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": [
    "Cathode & anode materials"
   ]
  }
 },
 "fsr": {
  "chain": "Commission reviews foreign subsidies → Chinese acquisitions, plants and large bids in the EU are scrutinised → affects investment and tender wins of carmakers, battery and storage companies",
  "auto": {
   "levelNote": "Chinese carmakers' EU plants and acquisitions may be reviewed",
   "compliance": [
    "Mergers above thresholds must declare foreign financial contributions"
   ],
   "access": [
    "The Commission can review subsidies behind EU car plants ex officio and require commitments or conditions"
   ],
   "support": [],
   "actions": [
    "Compile the group's subsidies and financing into a filing library"
   ],
   "segments": [
    "EU vehicle production",
    "Vehicle exports"
   ]
  },
  "storage": {
   "levelNote": "Bids for large storage and grid procurement must declare foreign financial contributions",
   "compliance": [
    "Procurement bids worth ≥ €250 million must declare foreign financial contributions"
   ],
   "access": [
    "Bids can be excluded (bidders already withdrew from a Romanian solar tender)"
   ],
   "support": [],
   "actions": [
    "Check notification thresholds before bidding for large storage projects"
   ],
   "segments": [
    "Storage asset operation",
    "Energy storage systems"
   ]
  },
  "upstream": {
   "levelNote": "Chinese materials investments in the EU may be reviewed",
   "compliance": [
    "EU acquisitions above thresholds must be notified"
   ],
   "access": [
    "Subsidies behind EU materials plants may be reviewed ex officio"
   ],
   "support": [],
   "actions": [
    "Map subsidy and financing sources of EU projects"
   ],
   "segments": [
    "Cathode & anode materials",
    "Precursors",
    "Recycling & recycled materials"
   ]
  }
 },
 "forced-labour": {
  "chain": "Mine → materials → battery → vehicle or storage system: if forced labour is confirmed anywhere along the chain, the final product can be banned",
  "auto": {
   "levelNote": "Vehicles are the final product; a problem anywhere in the chain can trigger a sales ban",
   "compliance": [
    "Carmakers must be able to show the vehicle supply chain is free of forced labour and provide traceability in investigations"
   ],
   "access": [
    "Vehicles found to involve forced labour must be withdrawn and can return only after the parts are replaced"
   ],
   "support": [],
   "actions": [
    "Trace high-risk chains such as batteries, aluminium and steel"
   ],
   "segments": [
    "Vehicle exports",
    "Supply-chain sourcing"
   ]
  },
  "storage": {
   "levelNote": "Storage systems are covered too",
   "compliance": [
    "Companies must show storage supply chains are free of forced labour"
   ],
   "access": [
    "Storage products found to involve forced labour must be withdrawn from the EU market"
   ],
   "support": [],
   "actions": [
    "Trace cell and material sources"
   ],
   "segments": [
    "Energy storage systems"
   ]
  },
  "upstream": {
   "levelNote": "Graphite, lithium and polysilicon are focus areas",
   "compliance": [
    "Provide downstream customers with traceability to the mine"
   ],
   "access": [
    "Chains sourcing from high-risk regions risk being replaced by customers"
   ],
   "support": [],
   "actions": [
    "Trace raw materials to the mine and follow the Commission's risk database"
   ],
   "segments": [
    "Mining & refining",
    "Cathode & anode materials",
    "Precursors"
   ]
  }
 },
 "csddd": {
  "chain": "Large companies must run value-chain due diligence → carmakers and energy companies pass requirements to battery and storage suppliers → and on to mining and materials",
  "auto": {
   "levelNote": "Large carmakers are primary addressees",
   "compliance": [
    "Carmakers above thresholds must run human-rights and environmental value-chain due diligence (from July 2029; thresholds raised by Omnibus I)"
   ],
   "access": [],
   "support": [],
   "actions": [
    "Combine CSDDD and battery due diligence into one supplier audit"
   ],
   "segments": [
    "EU vehicle production",
    "Supply-chain sourcing"
   ]
  },
  "storage": {
   "levelNote": "Mainly indirect through customer requirements",
   "compliance": [],
   "access": [
    "Energy-company customers will pass due-diligence requirements to storage suppliers"
   ],
   "support": [],
   "actions": [
    "Prepare answers to customer due-diligence questionnaires"
   ],
   "segments": [
    "Energy storage systems"
   ]
  },
  "upstream": {
   "levelNote": "Upstream is the end point of due-diligence cascades",
   "compliance": [],
   "access": [
    "Downstream customers will ask for human-rights and environmental risk information"
   ],
   "support": [],
   "actions": [
    "Prepare due-diligence questionnaires and audit materials"
   ],
   "segments": [
    "Mining & refining",
    "Cathode & anode materials"
   ]
  }
 },
 "omnibus-i": {
  "chain": "CSRD and CSDDD scope sharply narrowed → most mid-sized companies no longer need reporting or due diligence → only very large companies keep pushing requirements down the chain",
  "auto": {
   "levelNote": "Lighter reporting burden for EU subsidiaries",
   "compliance": [
    "Re-check under the new thresholds whether EU subsidiaries still need reporting and due diligence"
   ],
   "access": [],
   "support": [
    "Lower burden"
   ],
   "actions": [],
   "segments": [
    "EU vehicle production"
   ]
  },
  "storage": {
   "levelNote": "Lighter reporting burden for EU subsidiaries",
   "compliance": [
    "Re-check against the new thresholds"
   ],
   "access": [],
   "support": [
    "Lower burden"
   ],
   "actions": [],
   "segments": [
    "Energy storage systems"
   ]
  },
  "upstream": {
   "levelNote": "Lighter reporting burden for EU subsidiaries",
   "compliance": [
    "Re-check against the new thresholds"
   ],
   "access": [],
   "support": [
    "Lower burden"
   ],
   "actions": [],
   "segments": [
    "Cathode & anode materials"
   ]
  }
 },
 "gpsr": {
  "chain": "Consumer products need an EU responsible person and safety and recall procedures → mainly affects portable power stations and power banks",
  "auto": {
   "levelNote": "Vehicles are not covered (type-approval rules apply)",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  },
  "storage": {
   "levelNote": "Consumer products such as portable and home storage are covered",
   "compliance": [
    "Consumer storage products need an EU responsible operator and labelling; safety incidents must be reported via the EU portal"
   ],
   "access": [
    "Marketplaces will require responsible-person and safety information or delist the product"
   ],
   "support": [],
   "actions": [
    "Check responsible persons and labels for consumer storage products"
   ],
   "segments": [
    "Residential / C&I storage"
   ]
  },
  "upstream": {
   "levelNote": "No direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  }
 },
 "rohs": {
  "chain": "Hazardous-substance limits for electrical equipment → electronics in storage systems and chargers must comply",
  "auto": {
   "levelNote": "Mainly concerns electrical products such as chargers",
   "compliance": [
    "Home wallboxes and similar products must comply with RoHS"
   ],
   "access": [],
   "support": [],
   "actions": [],
   "segments": [
    "Vehicle exports"
   ]
  },
  "storage": {
   "levelNote": "Electronics in storage systems must comply",
   "compliance": [
    "Electronics in storage systems and inverters must meet substance limits and be in the technical file"
   ],
   "access": [
    "Non-compliant equipment cannot carry the CE mark"
   ],
   "support": [],
   "actions": [
    "Check suppliers' RoHS test reports"
   ],
   "segments": [
    "Energy storage systems",
    "EMS/BMS"
   ]
  },
  "upstream": {
   "levelNote": "Essentially no direct impact (battery materials are outside RoHS)",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  }
 },
 "pfas": {
  "chain": "PFAS restriction → PVDF binders, fluorinated electrolyte additives and similar materials restricted → batteries must switch materials, and vehicles and storage products adjust",
  "auto": {
   "levelNote": "Vehicles use many fluorinated materials; the traction battery is only one of them",
   "compliance": [
    "If adopted, PFAS-containing parts (batteries, seals, refrigerants etc.) must be substituted within transition periods or used under derogations"
   ],
   "access": [
    "PFAS parts without derogations may be banned"
   ],
   "support": [],
   "actions": [
    "Inventory PFAS-containing vehicle parts and track derogations"
   ],
   "segments": [
    "Model & powertrain planning",
    "Supply-chain sourcing"
   ]
  },
  "storage": {
   "levelNote": "Storage batteries also use PVDF and other fluorinated materials",
   "compliance": [
    "PFAS materials in batteries must be substituted or used under derogation"
   ],
   "access": [
    "Without a derogation, products may not be placed on the EU market"
   ],
   "support": [],
   "actions": [
    "Confirm substitution plans with cell suppliers"
   ],
   "segments": [
    "Energy storage systems"
   ]
  },
  "upstream": {
   "levelNote": "PVDF, fluorinated electrolyte additives and separator coatings are directly affected",
   "compliance": [
    "If adopted, restricted fluorinated materials must stop being supplied to the EU within the transition period, unless derogation conditions are met"
   ],
   "access": [
    "Fluorinated materials without derogations lose the EU market"
   ],
   "support": [
    "Demand rises for fluorine-free binders and other substitutes"
   ],
   "actions": [
    "Speed up fluorine-free binder and alternative additive R&D",
    "Engage in SEAC and Commission decisions through associations"
   ],
   "segments": [
    "Cathode & anode materials",
    "Electrolyte / separators"
   ]
  }
 },
 "lithium-clp": {
  "chain": "Lithium salts classified as Repr. 1A → occupational-health costs rise upstream and at EU materials and cell plants",
  "auto": {
   "levelNote": "Essentially no direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  },
  "storage": {
   "levelNote": "Essentially no direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  },
  "upstream": {
   "levelNote": "Directly affects production, transport and EU use of lithium salts",
   "compliance": [
    "Once in force, lithium salts must be labelled and packaged as Repr. 1A and EU plants must tighten exposure controls"
   ],
   "access": [
    "May become a candidate for REACH authorisation or restriction, affecting long-term EU use"
   ],
   "support": [],
   "actions": [
    "Assess changes to labelling, transport and plant exposure controls"
   ],
   "segments": [
    "Mining & refining",
    "Cathode & anode materials"
   ]
  }
 },
 "espr": {
  "chain": "The digital product passport shares standards with the battery passport → carmakers' and storage companies' product-data systems must be compatible; steel and aluminium ecodesign rules feed into parts",
  "auto": {
   "levelNote": "Vehicles are not in the first wave, but passport and steel/aluminium rules flow through",
   "compliance": [],
   "access": [
    "Steel and aluminium ecodesign requirements will affect body and parts sourcing"
   ],
   "support": [],
   "actions": [
    "Watch the steel and aluminium delegated acts"
   ],
   "segments": [
    "Supply-chain sourcing"
   ]
  },
  "storage": {
   "levelNote": "Non-battery parts of storage systems may be covered later",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [
    "Design battery-passport systems to the common DPP standards"
   ],
   "segments": [
    "Energy storage systems"
   ]
  },
  "upstream": {
   "levelNote": "Steel and aluminium are priorities in the first working plan",
   "compliance": [],
   "access": [
    "Steel and aluminium ecodesign rules affect battery casing and structural materials"
   ],
   "support": [],
   "actions": [],
   "segments": [
    "Mining & refining"
   ]
  }
 },
 "emd-reg": {
  "chain": "Member states assess flexibility needs and set up support → storage assets gain revenue → demand for storage systems and cells grows",
  "auto": {
   "levelNote": "Essentially no direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  },
  "storage": {
   "levelNote": "Directly creates revenue mechanisms for storage",
   "compliance": [],
   "access": [],
   "support": [
    "Member states must assess flexibility needs and may set up support schemes for storage and demand response",
    "PPAs and two-way CfDs help storage projects lock in revenue and raise finance"
   ],
   "actions": [
    "Track flexibility assessments and storage schemes in key countries and prepare bids"
   ],
   "segments": [
    "Storage asset operation",
    "Energy storage systems"
   ]
  },
  "upstream": {
   "levelNote": "Growing storage demand indirectly lifts materials demand",
   "compliance": [],
   "access": [],
   "support": [
    "Storage growth drives demand for LFP and other materials"
   ],
   "actions": [],
   "segments": [
    "Cathode & anode materials"
   ]
  }
 },
 "emd-dir": {
  "chain": "Energy sharing and fixed-price contracts gain legal status → home and community storage demand rises",
  "auto": {
   "levelNote": "Energy sharing lays groundwork for vehicle-grid integration",
   "compliance": [],
   "access": [],
   "support": [
    "Energy sharing and flexible contracts open room for V2G and similar services"
   ],
   "actions": [],
   "segments": [
    "Model & powertrain planning"
   ]
  },
  "storage": {
   "levelNote": "Benefits home and community storage",
   "compliance": [],
   "access": [],
   "support": [
    "Energy sharing (including shared storage) gains legal status, driving home and community storage"
   ],
   "actions": [
    "Track transposition in key countries and develop community storage offers"
   ],
   "segments": [
    "Residential / C&I storage"
   ]
  },
  "upstream": {
   "levelNote": "No direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  }
 },
 "remit": {
  "chain": "Wholesale market reporting duties → own storage assets must report trades",
  "auto": {
   "levelNote": "No direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  },
  "storage": {
   "levelNote": "Own storage assets trading in wholesale markets must report",
   "compliance": [
    "Storage operators trading in EU wholesale markets must report transactions and are subject to ACER cross-border manipulation investigations"
   ],
   "access": [],
   "support": [],
   "actions": [
    "Confirm reporting scope for own storage operations"
   ],
   "segments": [
    "Storage asset operation"
   ]
  },
  "upstream": {
   "levelNote": "No direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  }
 },
 "dr-nc": {
  "chain": "Harmonised rules for demand response and storage in flexibility markets → storage and aggregators enter national markets more easily → EVs can join via aggregation too",
  "auto": {
   "levelNote": "EVs can provide flexibility via aggregators",
   "compliance": [],
   "access": [],
   "support": [
    "Common rules open space for smart charging and V2G in flexibility markets"
   ],
   "actions": [
    "Assess vehicle data interfaces for flexibility services"
   ],
   "segments": [
    "Model & powertrain planning"
   ]
  },
  "storage": {
   "levelNote": "Directly sets the bar for storage entering national flexibility markets",
   "compliance": [
    "Flexibility services require prequalification, metering and data exchange"
   ],
   "access": [],
   "support": [
    "Common rules lower barriers to balancing markets and widen revenue sources"
   ],
   "actions": [
    "Track adoption and assess EMS interfaces"
   ],
   "segments": [
    "Storage asset operation",
    "EMS/BMS",
    "Residential / C&I storage"
   ]
  },
  "upstream": {
   "levelNote": "No direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  }
 },
 "gas-h2-dir": {
  "chain": "Hydrogen market framework → competition and complementarity with batteries in long-duration storage and trucks",
  "auto": {
   "levelNote": "Affects the long-term outlook for fuel-cell vehicles and refuelling",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [
    "Watch hydrogen vs battery competition in heavy trucks"
   ],
   "segments": [
    "Model & powertrain planning"
   ]
  },
  "storage": {
   "levelNote": "Hydrogen is an alternative route for long-duration storage",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": [
    "Storage asset operation"
   ]
  },
  "upstream": {
   "levelNote": "No direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  }
 },
 "gas-h2-reg": {
  "chain": "Cross-border hydrogen network planning → almost no direct impact on the battery value chain",
  "auto": {
   "levelNote": "No direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  },
  "storage": {
   "levelNote": "No direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  },
  "upstream": {
   "levelNote": "No direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  }
 },
 "grids-tene": {
  "chain": "Storage enters cross-border infrastructure planning and funding → large storage projects can gain PCI status and finance",
  "auto": {
   "levelNote": "Essentially no direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  },
  "storage": {
   "levelNote": "Storage projects may gain PCI status and EU funding",
   "compliance": [],
   "access": [],
   "support": [
    "Storage more often listed as Projects of Common Interest, with CEF funding and fast permitting"
   ],
   "actions": [
    "Follow PCI selection for large storage opportunities"
   ],
   "segments": [
    "Storage asset operation"
   ]
  },
  "upstream": {
   "levelNote": "No direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  }
 },
 "grids-permitting": {
  "chain": "Faster permitting for grids, storage and charging → storage plants and charging hubs get built faster → storage and EV demand grows",
  "auto": {
   "levelNote": "Faster charging permits support EV uptake",
   "compliance": [],
   "access": [],
   "support": [
    "Faster charging-infrastructure permitting helps EV sales"
   ],
   "actions": [],
   "segments": [
    "Vehicle exports"
   ]
  },
  "storage": {
   "levelNote": "Directly shortens storage permitting and grid connection",
   "compliance": [],
   "access": [],
   "support": [
    "Shorter permitting and connection deadlines; overriding public interest and tacit approval speed up projects",
    "Connection queues may move to maturity-based ranking"
   ],
   "actions": [
    "Track the trilogue outcome and adjust storage pipelines in key countries"
   ],
   "segments": [
    "Storage asset operation",
    "Energy storage systems"
   ]
  },
  "upstream": {
   "levelNote": "No direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  }
 },
 "red3": {
  "chain": "Renewables targets and acceleration areas → faster permits for co-located storage; BMS data-access duty → batteries and storage systems must open data interfaces",
  "auto": {
   "levelNote": "EVs must open BMS data; renewable electricity in transport counts towards targets",
   "compliance": [
    "Article 20a requires EV manufacturers to give real-time access to basic BMS data (state of health, state of charge etc.) for owners and third parties"
   ],
   "access": [],
   "support": [
    "Renewable electricity in transport counts towards targets, supporting EVs and charging"
   ],
   "actions": [
    "Review vehicle BMS data interfaces and access rights"
   ],
   "segments": [
    "Model & powertrain planning"
   ]
  },
  "storage": {
   "levelNote": "Fast permits for co-located storage plus a BMS data-access duty",
   "compliance": [
    "Home and industrial batteries must give real-time access to basic BMS data"
   ],
   "access": [
    "Products without open BMS interfaces may fail requirements in some countries"
   ],
   "support": [
    "Storage co-located with renewables benefits from accelerated permitting"
   ],
   "actions": [
    "Review storage BMS interfaces and follow national transposition"
   ],
   "segments": [
    "Energy storage systems",
    "Storage asset operation",
    "EMS/BMS"
   ]
  },
  "upstream": {
   "levelNote": "No direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  }
 },
 "eed": {
  "chain": "Energy-efficiency duties → EU plants must run energy management systems or audits",
  "auto": {
   "levelNote": "EU vehicle plants have efficiency duties",
   "compliance": [
    "EU plants run energy management systems or audits by energy-use size (exact thresholds to verify)"
   ],
   "access": [],
   "support": [],
   "actions": [],
   "segments": [
    "EU vehicle production"
   ]
  },
  "storage": {
   "levelNote": "Efficiency requirements (e.g. data centres) support C&I storage",
   "compliance": [],
   "access": [],
   "support": [
    "Efficiency and demand-side management requirements favour C&I storage"
   ],
   "actions": [],
   "segments": [
    "Residential / C&I storage"
   ]
  },
  "upstream": {
   "levelNote": "EU materials plants have efficiency duties",
   "compliance": [
    "EU plants meet efficiency duties by energy-use size"
   ],
   "access": [],
   "support": [],
   "actions": [],
   "segments": [
    "Cathode & anode materials"
   ]
  }
 },
 "epbd": {
  "chain": "Buildings must provide charging points and solar → home charging and PV-plus-storage demand grows",
  "auto": {
   "levelNote": "Building charging and pre-cabling requirements support EV uptake",
   "compliance": [],
   "access": [],
   "support": [
    "Charging points and pre-cabling in new and renovated buildings lower charging barriers"
   ],
   "actions": [],
   "segments": [
    "Vehicle exports"
   ]
  },
  "storage": {
   "levelNote": "Drives home PV-plus-storage demand",
   "compliance": [],
   "access": [],
   "support": [
    "Rooftop solar obligations and zero-emission buildings drive home storage"
   ],
   "actions": [
    "Track national transposition and develop PV-plus-storage products"
   ],
   "segments": [
    "Residential / C&I storage"
   ]
  },
  "upstream": {
   "levelNote": "No direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  }
 },
 "co2-cars": {
  "chain": "Fleet CO2 targets → carmakers' electrification pace → traction-battery orders → upstream materials demand",
  "auto": {
   "levelNote": "Directly sets carmakers' electrification targets and penalty risk",
   "compliance": [
    "New cars must cut CO2 by 55% and vans by 50% versus 2021 by 2030, with penalties per gram per vehicle above target"
   ],
   "access": [
    "Compliance is on the fleet average; too few EVs means penalties or buying credits"
   ],
   "support": [
    "Pooling with other carmakers spreads the compliance burden"
   ],
   "actions": [
    "Model the EV-share path to the targets and assess pooling"
   ],
   "segments": [
    "Model & powertrain planning",
    "Vehicle exports",
    "EU vehicle production"
   ]
  },
  "storage": {
   "levelNote": "Essentially no direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  },
  "upstream": {
   "levelNote": "Sets long-term European demand for battery materials",
   "compliance": [],
   "access": [],
   "support": [
    "Electrification targets secure long-term European demand for battery materials"
   ],
   "actions": [
    "Update materials demand forecasts as targets change"
   ],
   "segments": [
    "Cathode & anode materials",
    "Precursors",
    "Mining & refining"
   ]
  }
 },
 "co2-flex-2025": {
  "chain": "Three-year averaging → short-term relief for carmakers → slower EV push and battery orders in 2025–2026",
  "auto": {
   "levelNote": "Directly eases 2025 compliance and penalty pressure",
   "compliance": [
    "Compliance assessed on 2025–2027 three-year average emissions"
   ],
   "access": [],
   "support": [
    "2025 overshoot can be offset in 2026–2027, reducing penalties or credit purchases"
   ],
   "actions": [
    "Re-plan EV launches for 2025–2027"
   ],
   "segments": [
    "Model & powertrain planning",
    "Vehicle exports"
   ]
  },
  "storage": {
   "levelNote": "No direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  },
  "upstream": {
   "levelNote": "Slower short-term demand",
   "compliance": [],
   "access": [
    "2025–2026 battery-material demand may come in below expectations"
   ],
   "support": [],
   "actions": [
    "Adjust short-term production plans"
   ],
   "segments": [
    "Cathode & anode materials"
   ]
  }
 },
 "co2-revision-2035": {
  "chain": "2035 target cut from 100% to 90% and linked to ‘Made in Europe’ → carmakers keep room for PHEVs and range extenders → lower BEV battery demand expectations, advantage for European-made batteries → upstream demand mix shifts",
  "auto": {
   "levelNote": "Directly changes the post-2035 product roadmap",
   "compliance": [
    "From 2035 a 90% fleet reduction (lower options under discussion in Parliament), with the remainder offset by EU low-carbon steel and sustainable fuels (the Franco-German deal wants the offset conditions dropped)"
   ],
   "access": [
    "PHEV accounting and utility factors decide the compliance value of PHEVs",
    "Small EVs made in the EU earn super-credits; imported models do not"
   ],
   "support": [
    "Room for PHEVs and range extenders lowers the cost of full electrification"
   ],
   "actions": [
    "Plan post-2035 powertrain mix by scenario",
    "Assess EU production of small EVs to earn super-credits"
   ],
   "segments": [
    "Model & powertrain planning",
    "Vehicle exports",
    "EU vehicle production"
   ]
  },
  "storage": {
   "levelNote": "Essentially no direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  },
  "upstream": {
   "levelNote": "A lower BEV share affects total materials demand and its mix",
   "compliance": [],
   "access": [
    "A lower BEV share reduces expected traction-battery materials demand"
   ],
   "support": [
    "The Battery Booster supports European battery production, driving local materials demand"
   ],
   "actions": [
    "Update demand forecasts by scenario"
   ],
   "segments": [
    "Cathode & anode materials",
    "Precursors",
    "Mining & refining"
   ]
  }
 },
 "afir": {
  "chain": "Member states must build charging and hydrogen networks → EVs become easier to use → demand for storage at charging hubs grows",
  "auto": {
   "levelNote": "Charging coverage directly affects EV sales; truck-charging targets affect electric trucks",
   "compliance": [],
   "access": [],
   "support": [
    "Fast and megawatt truck charging along the TEN-T reduces range anxiety for users and fleets",
    "Card payment and price transparency improve the charging experience"
   ],
   "actions": [
    "Track the end-2026 AFIR review and how truck-charging targets affect electric-truck plans"
   ],
   "segments": [
    "Vehicle exports",
    "Model & powertrain planning"
   ]
  },
  "storage": {
   "levelNote": "Demand for storage at charging hubs grows",
   "compliance": [],
   "access": [],
   "support": [
    "Fast and megawatt truck charging drives on-site storage (peak shaving, grid constraints)"
   ],
   "actions": [
    "Develop storage solutions for charging hubs"
   ],
   "segments": [
    "Energy storage systems",
    "Storage asset operation"
   ]
  },
  "upstream": {
   "levelNote": "Essentially no direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  }
 },
 "cbam": {
  "chain": "Imported steel and aluminium need CBAM certificates → raw-material costs rise at EU vehicle and battery plants",
  "auto": {
   "levelNote": "Steel and aluminium for bodies and parts get more expensive",
   "compliance": [
    "EU plants importing steel and aluminium must declare via an authorised declarant and buy CBAM certificates"
   ],
   "access": [],
   "support": [],
   "actions": [
    "Estimate CBAM costs of imported steel and aluminium and assess low-carbon sourcing"
   ],
   "segments": [
    "EU vehicle production",
    "Supply-chain sourcing"
   ]
  },
  "storage": {
   "levelNote": "Steel and aluminium for cabinets and structures get more expensive",
   "compliance": [
    "Imported steel and aluminium for EU assembly must be declared"
   ],
   "access": [],
   "support": [],
   "actions": [],
   "segments": [
    "Energy storage systems"
   ]
  },
  "upstream": {
   "levelNote": "Aluminium foil and battery-casing aluminium are affected",
   "compliance": [
    "Aluminium products (incl. foil) exported to the EU need embedded-emissions data"
   ],
   "access": [
    "High-carbon aluminium faces a growing cost disadvantage in the EU"
   ],
   "support": [
    "Low-carbon aluminium earns a premium"
   ],
   "actions": [
    "Calculate embedded emissions of exported aluminium and assess green-power aluminium"
   ],
   "segments": [
    "Cathode & anode materials",
    "Mining & refining"
   ]
  }
 },
 "cbam-omnibus": {
  "chain": "50-tonne exemption → lower burden for small importers",
  "auto": {
   "levelNote": "Small steel and aluminium imports can be exempt",
   "compliance": [
    "Importers below 50 tonnes a year are exempt from CBAM"
   ],
   "access": [],
   "support": [],
   "actions": [],
   "segments": [
    "EU vehicle production"
   ]
  },
  "storage": {
   "levelNote": "Small imports can be exempt",
   "compliance": [
    "Importers below 50 tonnes a year are exempt from CBAM"
   ],
   "access": [],
   "support": [],
   "actions": [],
   "segments": [
    "Energy storage systems"
   ]
  },
  "upstream": {
   "levelNote": "No direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  }
 },
 "cbam-downstream": {
  "chain": "CBAM extended to about 180 steel and aluminium downstream goods → imported parts (possibly battery casings and structures) need certificates → local sourcing gains",
  "auto": {
   "levelNote": "Many automotive steel and aluminium parts may be covered",
   "compliance": [
    "If covered, imported parts need embedded-emissions declarations and CBAM certificates (proposed from 2028)"
   ],
   "access": [
    "Imported steel and aluminium parts get more expensive versus EU sourcing"
   ],
   "support": [],
   "actions": [
    "Check imported parts against the downstream product list",
    "Assess local sourcing"
   ],
   "segments": [
    "EU vehicle production",
    "Supply-chain sourcing",
    "Vehicle exports"
   ]
  },
  "storage": {
   "levelNote": "Storage cabinets and structural parts may be covered",
   "compliance": [
    "If covered, imports need declarations and certificates"
   ],
   "access": [],
   "support": [],
   "actions": [
    "Check CN codes of steel and aluminium parts in storage systems"
   ],
   "segments": [
    "Energy storage systems"
   ]
  },
  "upstream": {
   "levelNote": "Aluminium foil, casings and similar materials may be covered",
   "compliance": [
    "If foil and similar items are covered, exports need embedded-emissions data"
   ],
   "access": [],
   "support": [],
   "actions": [
    "Check whether products are on the list"
   ],
   "segments": [
    "Cathode & anode materials"
   ]
  }
 },
 "ets": {
  "chain": "Carbon prices raise power prices → higher energy costs at EU plants; ETS revenue funds the Innovation Fund → supports European battery projects",
  "auto": {
   "levelNote": "ETS2 raises fuel costs, indirectly supporting EVs",
   "compliance": [],
   "access": [],
   "support": [
    "ETS2 (buildings and road-transport fuels) raises running costs of combustion cars, making EVs more attractive"
   ],
   "actions": [],
   "segments": [
    "Vehicle exports"
   ]
  },
  "storage": {
   "levelNote": "Carbon prices increase power-price volatility and storage arbitrage value",
   "compliance": [],
   "access": [],
   "support": [
    "Carbon and power-price volatility raise arbitrage and peaking revenues",
    "The Innovation Fund can support storage manufacturing"
   ],
   "actions": [],
   "segments": [
    "Storage asset operation"
   ]
  },
  "upstream": {
   "levelNote": "EU materials plants bear carbon costs indirectly",
   "compliance": [
    "EU plants bear carbon costs via power prices; large combustion units may be covered directly"
   ],
   "access": [],
   "support": [
    "The Innovation Fund can support materials and recycling projects"
   ],
   "actions": [
    "Track relevant Innovation Fund calls"
   ],
   "segments": [
    "Cathode & anode materials",
    "Mining & refining"
   ]
  }
 },
 "ets-2026": {
  "chain": "Slower reduction factor after 2030 → lower carbon-price expectations and industrial power-price risk; new Industrial Decarbonisation Bank → funding for battery and materials projects",
  "auto": {
   "levelNote": "Affects ETS2 and long-term fuel-cost expectations",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": [
    "Vehicle exports"
   ]
  },
  "storage": {
   "levelNote": "Carbon-price expectations affect power prices and storage revenues",
   "compliance": [],
   "access": [
    "Lower carbon-price expectations may reduce power-price volatility and arbitrage"
   ],
   "support": [],
   "actions": [],
   "segments": [
    "Storage asset operation"
   ]
  },
  "upstream": {
   "levelNote": "The Industrial Decarbonisation Bank may fund materials projects",
   "compliance": [],
   "access": [],
   "support": [
    "Industrial Decarbonisation Bank (2031–2040, about €100 billion) with an ETS investment booster meanwhile"
   ],
   "actions": [
    "Track the bank's eligibility rules"
   ],
   "segments": [
    "Cathode & anode materials",
    "Recycling & recycled materials"
   ]
  }
 },
 "ev-duties": {
  "chain": "Countervailing duties on Chinese-made EVs → Chinese carmakers speed up EU plants → battery makers follow to supply locally; industry calls for a separate probe into the battery chain",
  "auto": {
   "levelNote": "Directly raises import costs of Chinese-made EVs",
   "compliance": [
    "Chinese-made battery-electric cars pay company-specific duties of 7.8%–35.3% (on top of 10% customs duty) for five years"
   ],
   "access": [
    "Chinese-made EVs lose price competitiveness"
   ],
   "support": [
    "Models built in the EU are not subject to the duties"
   ],
   "actions": [
    "Assess EU plants or local assembly",
    "Track price-undertaking negotiations"
   ],
   "segments": [
    "Vehicle exports",
    "EU vehicle production"
   ]
  },
  "storage": {
   "levelNote": "Essentially no direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  },
  "upstream": {
   "levelNote": "Risk of a separate investigation into batteries and materials",
   "compliance": [],
   "access": [
    "Industry is calling for anti-subsidy probes into cells and cathode/anode materials — a trade-defence risk"
   ],
   "support": [],
   "actions": [
    "Track any new trade-defence investigation"
   ],
   "segments": [
    "Cathode & anode materials",
    "Precursors"
   ]
  }
 },
 "cra": {
  "chain": "Connected products need cybersecurity compliance for CE marking → connected equipment beyond the vehicle (chargers, storage, BMS/EMS) must comply; vehicles fall under type-approval rules",
  "auto": {
   "levelNote": "Vehicles are out of scope, but home chargers and other connected accessories are in",
   "compliance": [
    "Home chargers and app-linked connected accessories sold by carmakers must meet CRA requirements"
   ],
   "access": [
    "Non-compliant connected accessories cannot carry the CE mark"
   ],
   "support": [],
   "actions": [
    "List connected products beyond the vehicle"
   ],
   "segments": [
    "Vehicle exports"
   ]
  },
  "storage": {
   "levelNote": "Connected storage systems and BMS/EMS software are directly covered",
   "compliance": [
    "From 11 Sep 2026 actively exploited vulnerabilities and severe incidents must be reported; from 11 Dec 2027 new products must meet essential cybersecurity requirements (incl. SBOM, security updates)"
   ],
   "access": [
    "Non-compliant connected storage products cannot carry the CE mark; storage power conversion or EMS classed as Class II need third-party assessment"
   ],
   "support": [
    "CRA compliance helps address European customers' cybersecurity concerns about Chinese equipment"
   ],
   "actions": [
    "Set up a PSIRT and vulnerability reporting",
    "Define support periods and SBOM"
   ],
   "segments": [
    "Energy storage systems",
    "EMS/BMS",
    "Residential / C&I storage"
   ]
  },
  "upstream": {
   "levelNote": "Essentially no direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  }
 },
 "cra-important": {
  "chain": "Important and critical product list → decides the conformity route for connected equipment → affects certification cost and time for storage and chargers",
  "auto": {
   "levelNote": "Concerns connected products such as chargers",
   "compliance": [
    "Check connected accessories against the list to fix the assessment route"
   ],
   "access": [],
   "support": [],
   "actions": [],
   "segments": [
    "Vehicle exports"
   ]
  },
  "storage": {
   "levelNote": "Decides the assessment route for connected storage components",
   "compliance": [
    "Check products against the 28 technical descriptions; Class II needs third-party assessment"
   ],
   "access": [
    "Class II products need notified-body assessment before CE marking"
   ],
   "support": [],
   "actions": [
    "Book notified-body capacity early"
   ],
   "segments": [
    "Energy storage systems",
    "EMS/BMS"
   ]
  },
  "upstream": {
   "levelNote": "No direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  }
 },
 "nis2": {
  "chain": "Energy and manufacturing entities must meet cybersecurity duties → EU entities of storage operators, carmakers and battery makers must register and report → security requirements flow to equipment suppliers",
  "auto": {
   "levelNote": "Motor-vehicle manufacturing is an Annex II ‘other critical sector’",
   "compliance": [
    "EU entities of medium and large carmakers are important entities: registration, risk management and incident reporting"
   ],
   "access": [
    "Carmakers will pass supply-chain security requirements to parts and battery suppliers"
   ],
   "support": [],
   "actions": [
    "Confirm registration duties of EU subsidiaries in each country"
   ],
   "segments": [
    "EU vehicle production",
    "Supply-chain sourcing"
   ]
  },
  "storage": {
   "levelNote": "Storage operators and aggregators are essential entities in the energy sector",
   "compliance": [
    "Storage operators and aggregators must implement risk management and incident reporting (24-hour early warning, 72-hour notification)"
   ],
   "access": [
    "Grid and energy customers will demand cybersecurity assurances from storage suppliers, affecting tender wins"
   ],
   "support": [],
   "actions": [
    "Build a cybersecurity management system (e.g. ISO 27001) and prepare supply-chain security questionnaires"
   ],
   "segments": [
    "Storage asset operation",
    "Energy storage systems",
    "EMS/BMS"
   ]
  },
  "upstream": {
   "levelNote": "Mainly indirect through customer requirements",
   "compliance": [],
   "access": [
    "Large customers may require basic cybersecurity from materials suppliers"
   ],
   "support": [],
   "actions": [],
   "segments": [
    "Cathode & anode materials"
   ]
  }
 },
 "nccs": {
  "chain": "Entities affecting cross-border electricity flows apply extra controls → large storage and grid customers pass requirements to equipment suppliers",
  "auto": {
   "levelNote": "No direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  },
  "storage": {
   "levelNote": "Large storage operators may be identified as high-impact entities",
   "compliance": [
    "Storage operators identified as high- or critical-impact entities must apply extra security controls"
   ],
   "access": [
    "Customers will require storage equipment to meet the code's controls and supply-chain security"
   ],
   "support": [],
   "actions": [
    "Prepare a description of security controls for grid customers"
   ],
   "segments": [
    "Storage asset operation",
    "EMS/BMS"
   ]
  },
  "upstream": {
   "levelNote": "No direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  }
 },
 "csa": {
  "chain": "Voluntary cybersecurity certification → usable as proof of compliance under the CRA and other laws",
  "auto": {
   "levelNote": "Certification can prove connected-product compliance",
   "compliance": [],
   "access": [],
   "support": [
    "EU cybersecurity certification can serve as proof of compliance"
   ],
   "actions": [],
   "segments": [
    "Vehicle exports"
   ]
  },
  "storage": {
   "levelNote": "Certification can prove compliance of connected storage",
   "compliance": [],
   "access": [],
   "support": [
    "EU cybersecurity certification can serve as CRA proof of compliance"
   ],
   "actions": [],
   "segments": [
    "EMS/BMS"
   ]
  },
  "upstream": {
   "levelNote": "No direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  }
 },
 "csa2": {
  "chain": "High-risk suppliers and key ICT assets designated → energy equipment (inverters, storage EMS, charging-management platforms) may be restricted → Chinese storage companies' and carmakers' connected products risk exclusion",
  "auto": {
   "levelNote": "Connected-vehicle and charging-management platforms could be included",
   "compliance": [],
   "access": [
    "If connected-vehicle or charging-management platforms are listed as key ICT assets, suppliers from designated countries may be restricted (the proposal focuses on telecoms and energy)"
   ],
   "support": [],
   "actions": [
    "Track the key-asset list and high-risk supplier criteria"
   ],
   "segments": [
    "Vehicle exports",
    "Model & powertrain planning"
   ]
  },
  "storage": {
   "levelNote": "Storage EMS and power conversion may be listed as key ICT assets",
   "compliance": [],
   "access": [
    "Suppliers from designated countries may be excluded from procurement, EU-funded projects and certification, and face phase-out",
    "The Commission already barred EU funding for PV projects with high-risk-supplier inverters; similar steps may extend to storage"
   ],
   "support": [],
   "actions": [
    "Assess localisation: EU data storage, local operations and software control",
    "Prepare product-security evidence"
   ],
   "segments": [
    "Energy storage systems",
    "EMS/BMS",
    "Storage asset operation"
   ]
  },
  "upstream": {
   "levelNote": "Essentially no direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  }
 },
 "ai-act": {
  "chain": "High-risk AI needs conformity assessment → safety-related AI in storage EMS and AI in carmakers' plants and hiring need assessment",
  "auto": {
   "levelNote": "AI in vehicles falls under type approval, but AI in plants and management is covered",
   "compliance": [
    "AI that is a safety component of factory machinery falls under Annex I high-risk obligations (from 2 Aug 2028); AI CV screening for EU hiring is high-risk",
    "Since 2 Feb 2025 EU entities must ensure staff AI literacy"
   ],
   "access": [],
   "support": [],
   "actions": [
    "Inventory AI used in plants and management processes"
   ],
   "segments": [
    "EU vehicle production"
   ]
  },
  "storage": {
   "levelNote": "AI with safety functions in storage EMS may be high-risk",
   "compliance": [
    "AI used as a safety component of electricity critical infrastructure is Annex III high-risk (from 2 Dec 2027)"
   ],
   "access": [
    "High-risk AI functions need conformity assessment"
   ],
   "support": [],
   "actions": [
    "Assess whether EMS AI functions are safety components"
   ],
   "segments": [
    "EMS/BMS",
    "Storage asset operation"
   ]
  },
  "upstream": {
   "levelNote": "Factory AI such as inspection may be covered",
   "compliance": [
    "AI that is a safety component of machinery in EU plants falls under Annex I high-risk obligations"
   ],
   "access": [],
   "support": [],
   "actions": [],
   "segments": [
    "Cathode & anode materials"
   ]
  }
 },
 "ai-omnibus": {
  "chain": "High-risk AI obligations postponed by 12–16 months → more preparation time for carmakers and storage companies",
  "auto": {
   "levelNote": "High-risk obligations postponed",
   "compliance": [
    "Annex I high-risk obligations postponed to 2 Aug 2028"
   ],
   "access": [],
   "support": [
    "More preparation time"
   ],
   "actions": [],
   "segments": [
    "EU vehicle production"
   ]
  },
  "storage": {
   "levelNote": "High-risk obligations postponed",
   "compliance": [
    "Annex III high-risk obligations postponed to 2 Dec 2027"
   ],
   "access": [],
   "support": [
    "More preparation time"
   ],
   "actions": [],
   "segments": [
    "EMS/BMS"
   ]
  },
  "upstream": {
   "levelNote": "No direct impact",
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [],
   "segments": []
  }
 }
};
