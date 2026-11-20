/*
 * stakeholders.js —— 利益相关方与影响动态（人工整理层）
 *  actors[]: 行业协会 / NGO / 智库 / 企业联盟 / 人物 / 成员国政府 / 议会党团 / 欧盟机构
 *    positions[]: 对某部法规（dossier = curated.js 中的 id）的总体立场，附来源
 *  events[]: 有日期的影响动态（公开信、立场文件、研究报告、表态、政治协议），可关联多部法规与多个主体
 *    stance: support|oppose|amend|neutral   approx:true = 日期仅精确到月   verified:false = 单一二手来源，待核实
 *  本文件须保持为合法 JSON（等号后到最后的分号之间），tools/build.ps1 会读取它做变更追踪。
 */
window.STAKEHOLDERS = {
 "asOf": "2026-11-20",
 "types": {
  "assoc": "行业协会",
  "ngo": "NGO",
  "think": "智库",
  "coalition": "企业联盟",
  "person": "人物",
  "gov": "成员国政府",
  "group": "议会党团",
  "eu": "欧盟机构"
 },
 "stances": {
  "support": "支持/推动",
  "oppose": "反对/批评",
  "amend": "要求修改",
  "neutral": "中立/完善"
 },
 "kinds": {
  "position": "立场文件/声明",
  "letter": "公开信/联名信",
  "report": "报告/研究",
  "statement": "公开表态",
  "deal": "政治协议"
 },
 "actors": [
  {
   "id": "acea",
   "type": "assoc",
   "nameZh": "欧洲汽车制造商协会",
   "name": "ACEA – European Automobile Manufacturers' Association",
   "roleZh": "欧洲主要整车企业的游说组织",
   "url": "https://www.acea.auto/",
   "positions": [
    {
     "dossier": "co2-revision-2035",
     "stance": "amend",
     "textZh": "与 VDA 及多家车企一道，不支持用低碳钢、可再生燃料抵扣剩余 10% 减排的附加条件，要求给予更多灵活性",
     "url": "https://www.euinsider.eu/news/eu-2035-engine-ban-parliament-vote-2026",
     "verified": false
    },
    {
     "dossier": "iaa",
     "stance": "amend",
     "textZh": "委托研究称欧洲电芯产能跟不上 IAA 的“欧洲制造”要求，约 300 万辆车可能因此拿不到补贴，要求放宽或推迟电池原产地要求",
     "url": "https://www.electrive.com/2026/09/29/industrial-accelerator-act-industry-may-fail-to-meet-battery-demand-in-eu/"
    }
   ]
  },
  {
   "id": "vda",
   "type": "assoc",
   "nameZh": "德国汽车工业协会",
   "name": "VDA – Verband der Automobilindustrie",
   "roleZh": "德国车企与零部件企业协会",
   "url": "https://www.vda.de/",
   "positions": [
    {
     "dossier": "co2-revision-2035",
     "stance": "amend",
     "textZh": "不支持对剩余 10% 设置抵扣条件（与 ACEA 立场一致）",
     "url": "https://www.euinsider.eu/news/eu-2035-engine-ban-parliament-vote-2026",
     "verified": false
    }
   ]
  },
  {
   "id": "eurobat",
   "type": "assoc",
   "nameZh": "欧洲汽车与工业电池制造商协会",
   "name": "EUROBAT",
   "roleZh": "铅酸、镍基、锂电池制造商协会",
   "url": "https://www.eurobat.org/",
   "positions": [
    {
     "dossier": "iaa",
     "stance": "amend",
     "textZh": "IAA 附件二（储能电池公共采购的欧盟原产地要求）似乎把欧盟生产的铅基、镍基电池系统排除在外，要求紧急澄清",
     "url": "https://www.eurobat.org/resource/industrial-accelerator-act-annex-ii-excludes-critical-eu-produced-lead-based-and-nickel-based-battery-systems-from-public-procurement/"
    }
   ]
  },
  {
   "id": "ese",
   "type": "assoc",
   "nameZh": "欧洲储能协会",
   "name": "Energy Storage Europe",
   "roleZh": "储能产业协会",
   "url": "https://energystorageeurope.eu/",
   "positions": [
    {
     "dossier": "iaa",
     "stance": "amend",
     "textZh": "支持增强欧洲储能制造能力的目标，但警告部分条款可能拖慢储能部署、推高成本；电池原产地要求应逐步引入；仅聚焦系统制造会让上游供应链仍由中国主导",
     "url": "https://www.energy-storage.news/eu-made-in-europe-regulation-welcomed-but-will-not-remove-dependency-on-china/"
    }
   ]
  },
  {
   "id": "recharge",
   "type": "assoc",
   "nameZh": "欧洲先进充电电池与锂电池协会",
   "name": "RECHARGE",
   "roleZh": "欧洲锂电池与先进电池产业链协会",
   "url": "https://rechargebatteries.org/",
   "positions": [
    {
     "dossier": "cea",
     "stance": "amend",
     "textZh": "要求循环经济法统一黑粉的欧盟定义和技术规格，堵住黑粉流向欧盟以外的漏洞",
     "url": "https://rechargebatteries.org/wp-content/uploads/2026/08/Closing-Black-Mass-Loopholes-Industry-guidance-July-2026.pdf"
    }
   ]
  },
  {
   "id": "spe",
   "type": "assoc",
   "nameZh": "欧洲光伏产业协会",
   "name": "SolarPower Europe",
   "roleZh": "光伏全产业链协会",
   "url": "https://www.solarpowereurope.org/",
   "positions": [
    {
     "dossier": "iaa",
     "stance": "support",
     "textZh": "认为 IAA 开启了欧洲光伏制造的“新时代”",
     "url": "https://www.solarpowereurope.org/press-releases/industrial-accelerator-act-marks-new-era-for-solar-manufacturing-in-europe"
    }
   ]
  },
  {
   "id": "esmc",
   "type": "assoc",
   "nameZh": "欧洲光伏制造商理事会",
   "name": "ESMC – European Solar Manufacturing Council",
   "roleZh": "欧洲本土光伏制造企业协会",
   "url": "https://esmc.solar/",
   "positions": [
    {
     "dossier": "csa2",
     "stance": "support",
     "textZh": "敦促成员国全力支持欧委会的网络安全法 2.0 提案；称欧洲约 80% 新增光伏系统依赖中国逆变器（协会自身数据）",
     "url": "https://esmc.solar/eu-expert-report-calls-for-restrictions-on-high-risk-suppliers-in-solar-pv/"
    }
   ]
  },
  {
   "id": "eurelectric",
   "type": "assoc",
   "nameZh": "欧洲电力行业联合会",
   "name": "Eurelectric",
   "roleZh": "欧洲电力企业协会",
   "url": "https://www.eurelectric.org/",
   "positions": [
    {
     "dossier": "afir",
     "stance": "neutral",
     "textZh": "AFIR 审查应是“完善而非推倒重来”，维持现有框架",
     "url": "https://www.eurelectric.org/wp-content/uploads/2026/03/Eurelectric-AFIR-position-paper-FINAL.pdf"
    },
    {
     "dossier": "grids-tene",
     "stance": "amend",
     "textZh": "要求输电运营商每两年编制一次十年网络发展计划（TYNDP），并明确考虑前瞻性投资",
     "url": "https://www.eurelectric.org/blog/european-grids-package-energy-highways/"
    }
   ]
  },
  {
   "id": "emobility",
   "type": "assoc",
   "nameZh": "欧洲电动出行协会",
   "name": "E-Mobility Europe",
   "roleZh": "电动出行与充电产业协会",
   "url": "https://www.emobilityeurope.org/",
   "positions": [
    {
     "dossier": "afir",
     "stance": "support",
     "textZh": "牵头联名信《维护 AFIR》，反对降低目标，主张加强资金支持和降低投资风险以确保落地",
     "url": "https://www.emobilityeurope.org/wp-content/uploads/2026/03/Joint-letter-Upholding-AFIR-Strengthening-funding-and-derisking-to-ensure-delivery_final.pdf"
    }
   ]
  },
  {
   "id": "edso",
   "type": "assoc",
   "nameZh": "欧洲配电运营商协会",
   "name": "E.DSO",
   "roleZh": "欧洲配电网运营商协会",
   "url": "https://www.edsoforsmartgrids.eu/",
   "positions": [
    {
     "dossier": "afir",
     "stance": "amend",
     "textZh": "要求把充电设施部署与配电网规划更紧密地挂钩",
     "url": "https://www.edsoforsmartgrids.eu/edso-publications/e-dso-feedback-on-the-alternative-fuels-infrastructure-regulation/"
    }
   ]
  },
  {
   "id": "te",
   "type": "ngo",
   "nameZh": "欧洲运输与环境联合会",
   "name": "T&E – Transport & Environment",
   "roleZh": "交通脱碳领域影响力最大的环保 NGO",
   "url": "https://www.transportenvironment.org/",
   "positions": [
    {
     "dossier": "co2-revision-2035",
     "stance": "oppose",
     "textZh": "反对削弱 2035 目标：让电子燃料和混动车计入目标会削弱全面电动化的激励，纯电车占比可能降至 85%",
     "url": "https://www.transportenvironment.org/articles/position-paper-on-the-revision-of-the-eu-car-co2-standards"
    },
    {
     "dossier": "iaa",
     "stance": "support",
     "textZh": "支持对电池实行严格的“欧盟制造”（而非宽泛的“与欧盟合作制造”）规则，认为到 2030 年满足正极材料要求在技术和商业上都可行",
     "url": "https://www.transportenvironment.org/articles/iaa-will-ensure-most-batteries-in-evs-across-europe-will-be-made-in-the-eu"
    }
   ]
  },
  {
   "id": "wwf",
   "type": "ngo",
   "nameZh": "世界自然基金会欧洲政策办公室",
   "name": "WWF European Policy Office",
   "roleZh": "环保 NGO",
   "url": "https://www.wwf.eu/",
   "positions": [
    {
     "dossier": "ets-2026",
     "stance": "oppose",
     "textZh": "主张在 2036 年前维持现行线性减排因子不变，批评提案放松减排",
     "url": "https://www.wwf.eu/?21171691%2Fmedia-advisory-commission-proposal-ets-review-july-2026="
    }
   ]
  },
  {
   "id": "ecnl",
   "type": "ngo",
   "nameZh": "欧洲非营利法律中心",
   "name": "ECNL – European Center for Not-for-Profit Law",
   "roleZh": "公民空间与数字权利 NGO",
   "url": "https://ecnl.org/",
   "positions": [
    {
     "dossier": "ai-omnibus",
     "stance": "oppose",
     "textZh": "认为 AI 简化条例是在保障措施生效前就开倒车",
     "url": "https://ecnl.org/sites/default/files/2026-06/AI-Omnibus-analysis%20June%202026.pdf"
    }
   ]
  },
  {
   "id": "bruegel",
   "type": "think",
   "nameZh": "布鲁盖尔研究所",
   "name": "Bruegel",
   "roleZh": "布鲁塞尔经济政策智库",
   "url": "https://www.bruegel.org/",
   "positions": [
    {
     "dossier": "iaa",
     "stance": "amend",
     "textZh": "批评“欧盟制造”要求、对整个技术类别适用的宽泛韧性标准，以及对中国在欧投资的谨慎态度，认为这是以牺牲脱碳和外部竞争力为代价优先保护本土产业",
     "url": "https://www.bruegel.org/policy-brief/flaws-european-unions-proposed-industrial-accelerator-act-and-how-fix-them"
    }
   ]
  },
  {
   "id": "ai-champions",
   "type": "coalition",
   "nameZh": "欧洲 AI 冠军倡议",
   "name": "EU AI Champions Initiative",
   "roleZh": "60 多家欧洲企业与机构组成的联盟（含 Mistral、空客、ASML、西门子能源等）",
   "positions": []
  },
  {
   "id": "draghi",
   "type": "person",
   "nameZh": "马里奥·德拉吉",
   "name": "Mario Draghi",
   "roleZh": "前欧洲央行行长、前意大利总理；《欧洲竞争力的未来》报告作者",
   "positions": []
  },
  {
   "id": "virkkunen",
   "type": "person",
   "nameZh": "汉娜·维尔库宁",
   "name": "Henna Virkkunen",
   "roleZh": "欧委会执行副主席（技术主权、安全与民主），负责网络安全法 2.0、AI 法",
   "positions": []
  },
  {
   "id": "kristersson",
   "type": "person",
   "nameZh": "乌尔夫·克里斯特松",
   "name": "Ulf Kristersson",
   "roleZh": "瑞典首相",
   "positions": []
  },
  {
   "id": "schildt",
   "type": "person",
   "nameZh": "约翰内斯·希尔特",
   "name": "Johannes Schildt",
   "roleZh": "瑞典数字医疗企业 Kry 前 CEO",
   "positions": []
  },
  {
   "id": "merz",
   "type": "person",
   "nameZh": "弗里德里希·默茨",
   "name": "Friedrich Merz",
   "roleZh": "德国总理",
   "positions": []
  },
  {
   "id": "macron",
   "type": "person",
   "nameZh": "埃马纽埃尔·马克龙",
   "name": "Emmanuel Macron",
   "roleZh": "法国总统",
   "positions": []
  },
  {
   "id": "krutilek",
   "type": "person",
   "nameZh": "翁德热·克鲁蒂莱克",
   "name": "Ondřej Krutílek",
   "roleZh": "欧洲议会议员（ECR，捷克），电网包影子报告员",
   "positions": [
    {
     "dossier": "grids-tene",
     "stance": "amend",
     "textZh": "主张允许输电运营商在有可信需求信号时、在签约前进行前瞻性投资，并通过监管机制回收成本",
     "url": "https://www.cleanenergywire.org/factsheets/qa-eu-grid-package"
    }
   ]
  },
  {
   "id": "maury",
   "type": "person",
   "nameZh": "卡米耶·莫里",
   "name": "Camille Maury",
   "roleZh": "WWF 欧洲政策办公室官员",
   "org": "wwf",
   "positions": []
  },
  {
   "id": "gov-de",
   "type": "gov",
   "nameZh": "德国政府",
   "name": "Germany",
   "roleZh": "成员国",
   "positions": []
  },
  {
   "id": "gov-fr",
   "type": "gov",
   "nameZh": "法国政府",
   "name": "France",
   "roleZh": "成员国",
   "positions": []
  },
  {
   "id": "gov-it",
   "type": "gov",
   "nameZh": "意大利政府",
   "name": "Italy",
   "roleZh": "成员国",
   "positions": []
  },
  {
   "id": "ms-afir10",
   "type": "gov",
   "nameZh": "十国联盟（AFIR）",
   "name": "10 Member States",
   "roleZh": "要求 AFIR 灵活性的十个成员国",
   "positions": []
  },
  {
   "id": "ep-centre",
   "type": "group",
   "nameZh": "EPP、S&D、Renew 三大党团",
   "name": "EPP / S&D / Renew",
   "roleZh": "欧洲议会中间派多数",
   "positions": []
  },
  {
   "id": "seeg",
   "type": "eu",
   "nameZh": "欧委会智能能源专家组",
   "name": "Smart Energy Expert Group (SEEG)",
   "roleZh": "欧委会咨询专家组，成员包括 SolarPower Europe、ENTSO-E、Eurelectric、德国 BSI、CEER、ESMC 代表",
   "positions": []
  }
 ],
 "events": [
  {
   "id": "draghi-report",
   "date": "2024-09-09",
   "dossiers": [
    "nzia",
    "iaa",
    "batteries",
    "emd-reg"
   ],
   "actors": [
    "draghi"
   ],
   "stance": "amend",
   "kind": "report",
   "textZh": "发布《欧洲竞争力的未来》报告，呼吁以产业政策支持电池等清洁技术制造、降低能源价格、简化监管",
   "url": "https://commission.europa.eu/topics/eu-competitiveness/draghi-report_en",
   "effectZh": "成为 2025 年以来“简化一揽子”（Omnibus）和工业加速法等政策的主要依据之一"
  },
  {
   "id": "kristersson-pause",
   "date": "2025-06-01",
   "dossiers": [
    "ai-act"
   ],
   "actors": [
    "kristersson"
   ],
   "stance": "amend",
   "kind": "statement",
   "textZh": "成为首位公开支持暂停实施 AI 法的欧盟国家首脑，理由是共同标准尚未就绪",
   "url": "https://www.biometricupdate.com/202506/should-the-eu-put-a-pause-on-rolling-out-the-ai-act",
   "approx": true
  },
  {
   "id": "schildt-letter",
   "date": "2025-06-30",
   "dossiers": [
    "ai-act"
   ],
   "actors": [
    "schildt"
   ],
   "stance": "amend",
   "kind": "letter",
   "textZh": "起草第二封公开信（Sifted 刊发），称 AI 法是“仓促的定时炸弹”，要求暂停实施并制定可行的实施计划",
   "url": "https://sifted.eu/articles/ai-act-news-startups-vcs-europe-pause-letter"
  },
  {
   "id": "ai-champions-letter",
   "date": "2025-07-03",
   "dossiers": [
    "ai-act",
    "ai-omnibus"
   ],
   "actors": [
    "ai-champions"
   ],
   "stance": "amend",
   "kind": "letter",
   "textZh": "约 50 家成员企业致信冯德莱恩，要求对 AI 法关键义务“停止时钟”两年，直到标准和实施指南就绪",
   "url": "https://www.theregister.com/2025/07/04/eu_businesses_push_for_freedom",
   "effectZh": "2025 年 11 月欧委会提出 AI 简化条例，最终把高风险义务推迟 12–16 个月（条例 (EU) 2026/1744），方向与该诉求一致",
   "approx": true
  },
  {
   "id": "de-it-letter-2035",
   "date": "2025-10-07",
   "dossiers": [
    "co2-revision-2035"
   ],
   "actors": [
    "gov-de",
    "gov-it"
   ],
   "stance": "amend",
   "kind": "letter",
   "textZh": "德国和意大利联名致函，要求 2035 年后高效内燃机仍可销售",
   "url": "https://www.euinsider.eu/news/eu-2035-engine-ban-parliament-vote-2026",
   "effectZh": "欧委会 2025-12-16 提案把 2035 年目标从 100% 降至 90%"
  },
  {
   "id": "acea-vda-2035",
   "date": "2025-12-16",
   "dossiers": [
    "co2-revision-2035"
   ],
   "actors": [
    "acea",
    "vda"
   ],
   "stance": "amend",
   "kind": "statement",
   "textZh": "对欧委会 2035 年修订提案表示不满：不支持用低碳钢、可再生燃料抵扣剩余 10% 的附加条件",
   "url": "https://www.euinsider.eu/news/eu-2035-engine-ban-parliament-vote-2026",
   "approx": true,
   "verified": false
  },
  {
   "id": "ms10-afir",
   "date": "2025-12-01",
   "dossiers": [
    "afir"
   ],
   "actors": [
    "ms-afir10"
   ],
   "stance": "amend",
   "kind": "letter",
   "textZh": "十个成员国要求在完成 AFIR 目标上获得更多灵活性",
   "url": "https://www.clecat.org/en/news/newsletters/call-for-evidence-on-the-upcoming-review-of-the-al",
   "approx": true,
   "verified": false
  },
  {
   "id": "virkkunen-inverters",
   "date": "2026-01-20",
   "dossiers": [
    "csa2"
   ],
   "actors": [
    "virkkunen"
   ],
   "stance": "support",
   "kind": "statement",
   "textZh": "发布网络安全法 2.0 提案时表示，依赖极少数光伏逆变器供应商“可能构成重大安全风险”",
   "url": "https://www.pv-magazine.com/2026/01/20/eu-to-ban-chinese-inverters-commission-proposal-in-cybersecurity-mulls-high-risk-vendors-list/"
  },
  {
   "id": "eurobat-sejourne",
   "date": "2026-02-25",
   "dossiers": [
    "iaa"
   ],
   "actors": [
    "eurobat"
   ],
   "stance": "amend",
   "kind": "letter",
   "textZh": "IAA 提案发布前致函欧委会执行副主席塞茹尔内（Séjourné），提出电池行业诉求",
   "url": "https://www.eurobat.org/wp-content/uploads/2026/03/2026.02.25-EUROBAT-letter-to-Mr-Stephane-Sejourne-IAA-Final-1.pdf"
  },
  {
   "id": "ese-iaa",
   "date": "2026-03-05",
   "dossiers": [
    "iaa"
   ],
   "actors": [
    "ese"
   ],
   "stance": "amend",
   "kind": "position",
   "textZh": "IAA 提案发布次日发表声明：欢迎提案，但警告储能电池原产地要求和储能系统 >1MWh 须用欧盟制造 BMS 等条款可能拖慢部署，要求重大修改",
   "url": "https://energystorageeurope.eu/wp-content/uploads/2026/04/2026.03.05-Press-Release_Energy-Storage-Europe_Industrial-Accelerator-Act.pdf"
  },
  {
   "id": "spe-iaa",
   "date": "2026-03-05",
   "dossiers": [
    "iaa"
   ],
   "actors": [
    "spe"
   ],
   "stance": "support",
   "kind": "position",
   "textZh": "欢迎 IAA，称其开启了欧洲光伏制造的“新时代”",
   "url": "https://www.solarpowereurope.org/press-releases/industrial-accelerator-act-marks-new-era-for-solar-manufacturing-in-europe",
   "approx": true
  },
  {
   "id": "eurobat-annex2",
   "date": "2026-03-15",
   "dossiers": [
    "iaa"
   ],
   "actors": [
    "eurobat"
   ],
   "stance": "amend",
   "kind": "position",
   "textZh": "要求紧急澄清 IAA 附件二：储能电池公共采购的原产地要求似乎排除了欧盟生产的铅基和镍基电池系统",
   "url": "https://www.eurobat.org/resource/industrial-accelerator-act-annex-ii-excludes-critical-eu-produced-lead-based-and-nickel-based-battery-systems-from-public-procurement/",
   "approx": true
  },
  {
   "id": "eurelectric-afir",
   "date": "2026-03-15",
   "dossiers": [
    "afir"
   ],
   "actors": [
    "eurelectric"
   ],
   "stance": "neutral",
   "kind": "position",
   "textZh": "发布 AFIR 审查立场文件：《完善而非推倒重来》",
   "url": "https://www.eurelectric.org/wp-content/uploads/2026/03/Eurelectric-AFIR-position-paper-FINAL.pdf",
   "approx": true
  },
  {
   "id": "upholding-afir",
   "date": "2026-03-15",
   "dossiers": [
    "afir"
   ],
   "actors": [
    "emobility"
   ],
   "stance": "support",
   "kind": "letter",
   "textZh": "联名信《维护 AFIR》：反对在审查中降低目标，要求加强资金支持和去风险工具",
   "url": "https://www.emobilityeurope.org/wp-content/uploads/2026/03/Joint-letter-Upholding-AFIR-Strengthening-funding-and-derisking-to-ensure-delivery_final.pdf",
   "approx": true
  },
  {
   "id": "esmc-funding",
   "date": "2026-04-23",
   "dossiers": [
    "csa2"
   ],
   "actors": [
    "esmc"
   ],
   "stance": "support",
   "kind": "statement",
   "textZh": "欢迎欧委会决定：使用高风险供应商逆变器的光伏项目不得获得欧盟资金（与欧盟电网相连的项目须在 2027-04-15 前逐步替换）",
   "url": "https://www.pv-magazine.com/2026/04/23/eu-moves-to-restrict-funding-for-projects-using-inverters-from-high-risk-suppliers/"
  },
  {
   "id": "ecnl-omnibus",
   "date": "2026-06-01",
   "dossiers": [
    "ai-omnibus"
   ],
   "actors": [
    "ecnl"
   ],
   "stance": "oppose",
   "kind": "report",
   "textZh": "发布分析报告，称 AI 简化条例是“在保障措施生效前就开倒车”",
   "url": "https://ecnl.org/sites/default/files/2026-06/AI-Omnibus-analysis%20June%202026.pdf",
   "approx": true
  },
  {
   "id": "wwf-ets",
   "date": "2026-07-17",
   "dossiers": [
    "ets-2026"
   ],
   "actors": [
    "wwf",
    "maury"
   ],
   "stance": "oppose",
   "kind": "statement",
   "textZh": "回应 ETS 修订提案：决策者不应只听要求削弱 ETS 的行业游说，WWF 主张 2036 年前维持现行减排因子；环保组织估计提案将多允许约 20 亿吨 CO2 排放",
   "url": "https://www.wwf.eu/?21171691%2Fmedia-advisory-commission-proposal-ets-review-july-2026=",
   "approx": true
  },
  {
   "id": "acea-iaa-study",
   "date": "2026-09-29",
   "dossiers": [
    "iaa"
   ],
   "actors": [
    "acea"
   ],
   "stance": "amend",
   "kind": "report",
   "textZh": "发布委托研究：即使欧洲电芯产能到 2032 年增至 306 GWh，仍无法满足 IAA“欧洲制造”需求，约 300 万辆车可能因此拿不到补贴",
   "url": "https://www.electrive.com/2026/09/29/industrial-accelerator-act-industry-may-fail-to-meet-battery-demand-in-eu/"
  },
  {
   "id": "seeg-pv",
   "date": "2026-10-08",
   "dossiers": [
    "csa2",
    "cra",
    "nis2"
   ],
   "actors": [
    "seeg",
    "spe",
    "eurelectric",
    "esmc"
   ],
   "stance": "support",
   "kind": "report",
   "textZh": "欧委会智能能源专家组发布光伏网络安全建议：依据网络安全法 2.0 的标准，限制来自存在重大网络安全风险的第三国供应商的组件和软件，并延伸到户用市场；将光伏逆变器列为 CRA II 类重要产品（须第三方合格评定）；加强对大型电站逆变器通信的管控。报告未点名具体国家或企业",
   "url": "https://www.pv-magazine.com/2026/10/08/eu-expert-group-urges-curbs-on-high-risk-solar-suppliers/",
   "effectZh": "为网络安全法 2.0 的三方谈判和 CRA 产品分类实施法案提供依据，逆变器、储能 EMS 等能源设备的供应商限制风险上升"
  },
  {
   "id": "fr-de-auto-deal",
   "date": "2026-10-16",
   "dossiers": [
    "co2-revision-2035",
    "iaa"
   ],
   "actors": [
    "merz",
    "macron",
    "gov-de",
    "gov-fr"
   ],
   "stance": "amend",
   "kind": "deal",
   "textZh": "在欧盟峰会期间达成法德汽车政策协议：2035 年减排 90% 但无需抵扣剩余 10%；插混车核算更宽松，效用系数 2030 年前不修订；购车补贴和公共采购仅限欧洲制造车辆，电池和关键零部件欧洲制造比例逐步提高（据报道电芯要求为 2028–29 年 10%、2030–31 年 20%、2032 年起 70%，各来源说法不一）",
   "url": "https://www.aa.com.tr/en/europe/germany-france-agree-on-reform-of-european-automotive-policy/4090327",
   "effectZh": "两大成员国的共同立场将在理事会层面强力影响 2035 修订和 IAA 的电池原产地条款"
  },
  {
   "id": "ep-875",
   "date": "2026-10-20",
   "dossiers": [
    "co2-revision-2035"
   ],
   "actors": [
    "ep-centre"
   ],
   "stance": "amend",
   "kind": "position",
   "textZh": "据《明镜周刊》报道，EPP、S&D、Renew 三大党团就 2035 年较 2021 年减排 87.5% 达成一致",
   "url": "https://www.electrive.com/2026/10/20/eu-parliament-mulls-watered-down-co%E2%82%82-reductions-for-cars-in-auto-package-debate/",
   "verified": false
  },
  {
   "id": "te-fr-de",
   "date": "2026-11-18",
   "dossiers": [
    "iaa",
    "co2-revision-2035"
   ],
   "actors": [
    "te"
   ],
   "stance": "oppose",
   "kind": "report",
   "textZh": "发布分析：法德汽车协议将使欧洲近 90% 规划中的电池产能面临风险，电池要求远低于现状（目前欧盟销售的电动车中已有超过 50% 电芯在欧洲制造）",
   "url": "https://cleantechnica.com/2026/11/18/almost-90-of-europes-battery-production-at-risk-from-franco-german-car-deal"
  },
  {
   "id": "recharge-black-mass",
   "date": "2026-07-15",
   "dossiers": [
    "black-mass",
    "cea",
    "wsr"
   ],
   "actors": [
    "recharge"
   ],
   "stance": "amend",
   "kind": "position",
   "textZh": "发布行业指南《堵住黑粉漏洞，建设欧盟电池回收产业》，要求在循环经济法中统一黑粉定义与技术规格，防止黑粉以非危险废物等名义流出欧盟",
   "url": "https://rechargebatteries.org/wp-content/uploads/2026/08/Closing-Black-Mass-Loopholes-Industry-guidance-July-2026.pdf",
   "approx": true
  }
 ]
};
