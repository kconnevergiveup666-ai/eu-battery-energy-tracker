/*
 * markets.js —— 成员国落实情况（人工整理层）：第一批 7 国（德、法、意、西、荷、波、匈）
 *   dossiers[id][country]: { status: done|partial|late|court|pending|direct|info|unknown, law, date, authority, note, url, verified }
 *   profiles[country]: 国家概况（summary + items[{t 主题, x 内容, u 来源, v:false 待核实}]）
 *   dates[]: 本国特有的时间节点 { c 国家, d 法规 id, date, label, v:false 待核实 }
 *   指令转化状态以欧委会侵权程序与公开追踪为依据，来源不一致处标记 verified:false。
 */
window.MARKETS = {
 "asOf": "2026-11-20",
 "countries": [
  {
   "id": "de",
   "zh": "德国"
  },
  {
   "id": "fr",
   "zh": "法国"
  },
  {
   "id": "it",
   "zh": "意大利"
  },
  {
   "id": "es",
   "zh": "西班牙"
  },
  {
   "id": "nl",
   "zh": "荷兰"
  },
  {
   "id": "pl",
   "zh": "波兰"
  },
  {
   "id": "hu",
   "zh": "匈牙利"
  }
 ],
 "statusLabels": {
  "done": "已转化",
  "partial": "部分转化",
  "late": "逾期未转化",
  "court": "诉至欧盟法院",
  "pending": "未到期",
  "direct": "直接适用",
  "info": "执行信息",
  "unknown": "待核实"
 },
 "dossiers": {
  "nis2": {
   "de": {
    "status": "done",
    "law": "《NIS2 转化与网络安全强化法》（NIS2UmsuCG，修订 BSIG），BGBl. 2025 I Nr. 301",
    "date": "2025-12-06",
    "authority": "联邦信息安全办公室（BSI）",
    "note": "重要实体与基本实体须向 BSI 登记",
    "url": "https://www.openkritis.de/eu/eu-nis-2-member-states.html"
   },
   "fr": {
    "status": "court",
    "law": "尚未通过转化法律（网络韧性法草案审议中）",
    "authority": "国家信息系统安全局（ANSSI）",
    "note": "欧委会已于 2026-07-08 将法国诉至欧盟法院",
    "url": "https://ngcybersecurity.io/nis2-implementation-status-eu-member-states/"
   },
   "it": {
    "status": "done",
    "law": "第 138/2024 号立法令（D.Lgs. 138/2024）",
    "date": "2024-10-16",
    "authority": "国家网络安全局（ACN）",
    "note": "2025 年 12 月发布实体登记和事件报告的实施决定",
    "url": "https://www.openkritis.de/eu/eu-nis-2-member-states.html"
   },
   "es": {
    "status": "court",
    "law": "尚未通过转化法律（草案阶段）",
    "note": "欧委会已于 2026 年 7 月将西班牙诉至欧盟法院",
    "url": "https://ngcybersecurity.io/nis2-implementation-status-eu-member-states/"
   },
   "nl": {
    "status": "done",
    "law": "《网络安全法》（Cyberbeveiligingswet）",
    "date": "2026-08-15",
    "note": "在被诉至欧盟法院约五周后生效",
    "url": "https://ngcybersecurity.io/nis2-implementation-status-eu-member-states/"
   },
   "pl": {
    "status": "done",
    "law": "《国家网络安全体系法》修订案（KSC）",
    "date": "2026-04-03",
    "url": "https://ngcybersecurity.io/nis2-implementation-status-eu-member-states/"
   },
   "hu": {
    "status": "done",
    "law": "2024 年第 LXIX 号法律及第 418/2024 号政府令",
    "date": "2025-01-01",
    "authority": "受监管活动监督局（SZTFH）",
    "note": "欧委会追踪记录中仍有“通报不完整”的理由意见，生效不等于完全转化",
    "url": "https://www.openkritis.de/eu/eu-nis-2-member-states.html"
   }
  },
  "red3": {
   "de": {
    "status": "partial",
    "law": "部分条款已转化（交通燃料配额等）",
    "note": "据报道进展较快，仍有条款待转化",
    "url": "https://www.crossxcheck.com/compliance-hub/red-iii-transposition-tracker",
    "verified": false
   },
   "fr": {
    "status": "late",
    "law": "2025-07 收到欧委会正式通知函",
    "note": "最新转化进展待核实",
    "url": "https://www.eeuropa.org/red-iii-implementation-2026-4455.html",
    "verified": false
   },
   "it": {
    "status": "done",
    "law": "据报道已完成转化",
    "note": "单一来源，待核实",
    "url": "https://www.crossxcheck.com/compliance-hub/red-iii-transposition-tracker",
    "verified": false
   },
   "es": {
    "status": "late",
    "law": "2025-07 收到欧委会正式通知函",
    "note": "最新转化进展待核实",
    "url": "https://www.eeuropa.org/red-iii-implementation-2026-4455.html",
    "verified": false
   },
   "nl": {
    "status": "done",
    "law": "据报道已完成转化",
    "note": "单一来源，待核实",
    "url": "https://www.crossxcheck.com/compliance-hub/red-iii-transposition-tracker",
    "verified": false
   },
   "pl": {
    "status": "late",
    "law": "2025-07 收到欧委会正式通知函",
    "note": "最新转化进展待核实",
    "url": "https://www.eeuropa.org/red-iii-implementation-2026-4455.html",
    "verified": false
   },
   "hu": {
    "status": "late",
    "law": "2025-07 收到欧委会正式通知函",
    "note": "最新转化进展待核实",
    "url": "https://www.eeuropa.org/red-iii-implementation-2026-4455.html",
    "verified": false
   }
  },
  "eed": {
   "de": {
    "status": "late",
    "law": "2025-11 收到欧委会正式通知函",
    "note": "最新转化进展待核实",
    "url": "https://energy.ec.europa.eu/news/december-infringements-package-key-decisions-energy-2025-12-11_en",
    "verified": false
   },
   "fr": {
    "status": "late",
    "law": "2025-11 收到欧委会正式通知函",
    "note": "最新转化进展待核实",
    "url": "https://energy.ec.europa.eu/news/december-infringements-package-key-decisions-energy-2025-12-11_en",
    "verified": false
   },
   "it": {
    "status": "late",
    "law": "2026-10-01 收到欧委会理由意见",
    "note": "据报道截至 2026 年 10 月实施法令尚未发布",
    "url": "https://energy.ec.europa.eu/news/october-infringements-package-key-decisions-energy-2026-10-01_en"
   },
   "es": {
    "status": "late",
    "law": "2026-10-01 收到欧委会理由意见",
    "note": "两个月内须完成转化，否则可能被诉",
    "url": "https://energy.ec.europa.eu/news/october-infringements-package-key-decisions-energy-2026-10-01_en"
   },
   "nl": {
    "status": "late",
    "law": "2025-11 收到欧委会正式通知函",
    "note": "最新转化进展待核实",
    "url": "https://energy.ec.europa.eu/news/december-infringements-package-key-decisions-energy-2025-12-11_en",
    "verified": false
   },
   "pl": {
    "status": "late",
    "law": "2025-11 收到欧委会正式通知函",
    "note": "最新转化进展待核实",
    "url": "https://energy.ec.europa.eu/news/december-infringements-package-key-decisions-energy-2025-12-11_en",
    "verified": false
   },
   "hu": {
    "status": "late",
    "law": "2026-06 收到欧委会理由意见",
    "url": "https://energy.ec.europa.eu/news/june-infringements-package-key-decisions-energy-2026-06-04_en"
   }
  },
  "epbd": {
   "de": {
    "status": "late",
    "law": "2026-05-29 转化期限已过，2026-07 收到欧委会正式通知函（据报道 27 国均未完成）",
    "note": "部分国家已部分转化，具体进展待核实",
    "url": "https://www.esgtoday.com/eu-commission-launches-legal-action-against-all-member-states-for-failing-to-implement-zero-emission-building-law/",
    "verified": false
   },
   "fr": {
    "status": "late",
    "law": "2026-05-29 转化期限已过，2026-07 收到欧委会正式通知函（据报道 27 国均未完成）",
    "note": "部分国家已部分转化，具体进展待核实",
    "url": "https://www.esgtoday.com/eu-commission-launches-legal-action-against-all-member-states-for-failing-to-implement-zero-emission-building-law/",
    "verified": false
   },
   "it": {
    "status": "late",
    "law": "2026-05-29 转化期限已过，2026-07 收到欧委会正式通知函（据报道 27 国均未完成）",
    "note": "部分国家已部分转化，具体进展待核实",
    "url": "https://www.esgtoday.com/eu-commission-launches-legal-action-against-all-member-states-for-failing-to-implement-zero-emission-building-law/",
    "verified": false
   },
   "es": {
    "status": "late",
    "law": "2026-05-29 转化期限已过，2026-07 收到欧委会正式通知函（据报道 27 国均未完成）",
    "note": "部分国家已部分转化，具体进展待核实",
    "url": "https://www.esgtoday.com/eu-commission-launches-legal-action-against-all-member-states-for-failing-to-implement-zero-emission-building-law/",
    "verified": false
   },
   "nl": {
    "status": "late",
    "law": "2026-05-29 转化期限已过，2026-07 收到欧委会正式通知函（据报道 27 国均未完成）",
    "note": "部分国家已部分转化，具体进展待核实",
    "url": "https://www.esgtoday.com/eu-commission-launches-legal-action-against-all-member-states-for-failing-to-implement-zero-emission-building-law/",
    "verified": false
   },
   "pl": {
    "status": "late",
    "law": "2026-05-29 转化期限已过，2026-07 收到欧委会正式通知函（据报道 27 国均未完成）",
    "note": "部分国家已部分转化，具体进展待核实",
    "url": "https://www.esgtoday.com/eu-commission-launches-legal-action-against-all-member-states-for-failing-to-implement-zero-emission-building-law/",
    "verified": false
   },
   "hu": {
    "status": "late",
    "law": "2026-05-29 转化期限已过，2026-07 收到欧委会正式通知函（据报道 27 国均未完成）",
    "note": "部分国家已部分转化，具体进展待核实",
    "url": "https://www.esgtoday.com/eu-commission-launches-legal-action-against-all-member-states-for-failing-to-implement-zero-emission-building-law/",
    "verified": false
   }
  },
  "weee": {
   "de": {
    "status": "done",
    "law": "《电子电气设备法》（ElektroG）",
    "authority": "登记机构：stiftung ear",
    "note": "生产者须在 stiftung ear 登记，非德国企业须指定授权代表"
   },
   "fr": {
    "status": "done",
    "law": "《环境法典》相关条款",
    "authority": "登记：ADEME 的 SYDEREP 系统",
    "note": "通过获批的生态组织（eco-organisme）履行回收义务"
   },
   "it": {
    "status": "done",
    "law": "第 49/2014 号立法令",
    "authority": "登记：生产者国家登记册（商会体系）"
   },
   "es": {
    "status": "done",
    "law": "第 110/2015 号皇家法令",
    "authority": "登记：工业综合登记册（RII-AEE）"
   },
   "nl": {
    "status": "done",
    "law": "《电子电气设备废物条例》（Regeling AEEA）",
    "authority": "登记：Rijkswaterstaat 或加入生产者组织（如 Stichting OPEN）"
   },
   "pl": {
    "status": "done",
    "law": "2015 年《废弃电子电气设备法》",
    "authority": "登记：BDO 系统"
   },
   "hu": {
    "status": "done",
    "law": "第 197/2014 号政府令",
    "authority": "登记：OKIR 系统；MOHU 为国家特许回收运营商"
   }
  },
  "rohs": {
   "de": {
    "status": "done",
    "law": "已于 2013 年前后完成转化（各国产品安全/CE 相关法规）",
    "authority": "市场监管机构"
   },
   "fr": {
    "status": "done",
    "law": "已于 2013 年前后完成转化（各国产品安全/CE 相关法规）",
    "authority": "市场监管机构"
   },
   "it": {
    "status": "done",
    "law": "已于 2013 年前后完成转化（各国产品安全/CE 相关法规）",
    "authority": "市场监管机构"
   },
   "es": {
    "status": "done",
    "law": "已于 2013 年前后完成转化（各国产品安全/CE 相关法规）",
    "authority": "市场监管机构"
   },
   "nl": {
    "status": "done",
    "law": "已于 2013 年前后完成转化（各国产品安全/CE 相关法规）",
    "authority": "市场监管机构"
   },
   "pl": {
    "status": "done",
    "law": "已于 2013 年前后完成转化（各国产品安全/CE 相关法规）",
    "authority": "市场监管机构"
   },
   "hu": {
    "status": "done",
    "law": "已于 2013 年前后完成转化（各国产品安全/CE 相关法规）",
    "authority": "市场监管机构"
   }
  },
  "csddd": {
   "de": {
    "status": "pending",
    "law": "转化期限经 Omnibus I 推迟至 2028-07-26",
    "note": "截至 2026 年年中尚无成员国完成转化"
   },
   "fr": {
    "status": "pending",
    "law": "转化期限经 Omnibus I 推迟至 2028-07-26",
    "note": "截至 2026 年年中尚无成员国完成转化"
   },
   "it": {
    "status": "pending",
    "law": "转化期限经 Omnibus I 推迟至 2028-07-26",
    "note": "截至 2026 年年中尚无成员国完成转化"
   },
   "es": {
    "status": "pending",
    "law": "转化期限经 Omnibus I 推迟至 2028-07-26",
    "note": "截至 2026 年年中尚无成员国完成转化"
   },
   "nl": {
    "status": "pending",
    "law": "转化期限经 Omnibus I 推迟至 2028-07-26",
    "note": "截至 2026 年年中尚无成员国完成转化"
   },
   "pl": {
    "status": "pending",
    "law": "转化期限经 Omnibus I 推迟至 2028-07-26",
    "note": "截至 2026 年年中尚无成员国完成转化"
   },
   "hu": {
    "status": "pending",
    "law": "转化期限经 Omnibus I 推迟至 2028-07-26",
    "note": "截至 2026 年年中尚无成员国完成转化"
   }
  },
  "batteries": {
   "de": {
    "status": "info",
    "law": "《电池法实施法》（BattDG），取代原《电池法》",
    "date": "2025-10-07",
    "authority": "登记：stiftung ear（受联邦环境署委托）",
    "note": "须按品牌和电池类别登记并加入获批的生产者责任组织（OfH）；2026-01-15 前未提交加入证明的登记追溯撤销；非德国企业须以德文书面指定唯一授权代表；零售商销售未登记产品视同生产者",
    "url": "https://www.bakermckenzie.com/en/insight/publications/alerts/2025/10/germany-new-act-aligns-with-eu-battery-rules"
   },
   "fr": {
    "status": "info",
    "law": "2025-08-18 起各类电池生产者须履行 EPR",
    "authority": "登记：ADEME 的 SYDEREP 系统",
    "note": "通过获批生态组织（如 Corepile、ecosystem）履行回收义务；外国卖家通常需本地代表",
    "url": "https://www.repax.io/epr-registers"
   },
   "it": {
    "status": "info",
    "law": "全国电池与蓄电池生产者登记",
    "authority": "登记：国家登记册（商会体系），CDCNPA 负责协调",
    "note": "登记机构名称各来源说法不一，办理前请以官方网站为准",
    "url": "https://www.repax.io/epr-registers",
    "verified": false
   },
   "es": {
    "status": "info",
    "law": "工业综合登记册中的电池生产者专区（RII-PYA）",
    "authority": "登记：RII-PYA",
    "note": "可通过 Ecopilas 等生产者责任组织履行义务",
    "url": "https://www.repax.io/epr-registers",
    "verified": false
   },
   "nl": {
    "status": "info",
    "law": "《电池管理法令》相关规定",
    "authority": "登记：Rijkswaterstaat 或加入生产者组织",
    "note": "执法机构为环境与交通监察局（ILT）；生产者组织名称（Stibat / Stichting OPEN）各来源说法不一",
    "url": "https://www.repax.io/epr-registers",
    "verified": false
   },
   "pl": {
    "status": "info",
    "law": "电池生产者须单独登记",
    "authority": "登记：BDO 系统",
    "url": "https://www.repax.io/epr-registers"
   },
   "hu": {
    "status": "info",
    "law": "国家 EPR 体系（2023 年起由 MOHU 特许运营）",
    "authority": "登记：OKIR / OKIRkapu（国家废物管理局）",
    "url": "https://www.repax.io/epr-registers",
    "verified": false
   }
  },
  "emd-reg": {
   "de": {
    "status": "info",
    "law": "储能新支持机制设计中",
    "note": "据报道 EEG 国家援助批准于 2026 年底到期，新机制计划 2027 年启动",
    "url": "https://gridcog.webflow.io/blog/capacity-markets-battery-storage-europe-2026",
    "verified": false
   },
   "fr": {
    "status": "info",
    "law": "容量机制",
    "note": "储能参与方式待核实",
    "verified": false
   },
   "it": {
    "status": "info",
    "law": "MACSE 储能专项拍卖（Terna）",
    "date": "2025",
    "note": "专为储能设计，面向南部和岛屿地区及较长时长储能",
    "url": "https://gridcog.webflow.io/blog/capacity-markets-battery-storage-europe-2026"
   },
   "es": {
    "status": "info",
    "law": "十年期容量机制（2026 年获批）",
    "date": "2026",
    "note": "2026 年首轮拍卖，设 9 年、5 年、1 年三档，灵活性资源免除电网费",
    "url": "https://gridcog.webflow.io/blog/capacity-markets-battery-storage-europe-2026"
   },
   "nl": {
    "status": "info",
    "law": "SDE++ 与 Flex-e 可支持储能",
    "note": "单一来源，待核实",
    "url": "https://intercel.eu/knowledge-insights/subsidies-for-battery-storage/",
    "verified": false
   },
   "pl": {
    "status": "info",
    "law": "容量市场（储能可参与）",
    "note": "具体中标规模待核实",
    "url": "https://gridcog.webflow.io/blog/capacity-markets-battery-storage-europe-2026",
    "verified": false
   },
   "hu": {
    "status": "info",
    "law": "储能国家援助计划已获欧委会批准",
    "note": "自 2022 年 9 月以来欧委会已批准包括匈牙利在内的多国储能援助计划",
    "verified": false
   }
  },
  "co2-cars": {
   "de": {
    "status": "info",
    "law": "按收入分级的电动车购车补贴（2026 年重启）",
    "note": "2026-01-01 起首次登记的纯电动车可获 3,000–6,000 欧元；家庭收入上限 8 万欧元（两个孩子 9 万）；2026-05-19 起可申请",
    "url": "https://www.evz.de/en/topics/transport/car/electric-cars/country-informations/"
   },
   "fr": {
    "status": "info",
    "law": "生态奖励（bonus écologique）",
    "note": "按收入分级并须通过“环境评分”，另有欧洲制造电池奖励；最高约 5,700 欧元",
    "url": "https://www.euronews.com/business/2026/04/17/electric-cars-which-european-countries-offer-the-most-support-in-2026"
   },
   "it": {
    "status": "info",
    "law": "目前无全国性购车补贴",
    "note": "各来源说法不一，待核实",
    "url": "https://www.euronews.com/business/2026/04/17/electric-cars-which-european-countries-offer-the-most-support-in-2026",
    "verified": false
   },
   "es": {
    "status": "info",
    "law": "Auto+ 计划（MOVES III 后续）",
    "note": "最高 4,500 欧元，按电动化程度、价格以及整车和电池是否欧洲制造评分；至 2026-12-31 或预算 3.5 亿欧元用完",
    "url": "https://www.euronews.com/business/2026/04/17/electric-cars-which-european-countries-offer-the-most-support-in-2026"
   },
   "nl": {
    "status": "info",
    "law": "2025 年起无全国性购车补贴",
    "note": "主要优惠为机动车税减免，2026 年继续缩减",
    "url": "https://www.euronews.com/business/2026/04/17/electric-cars-which-european-countries-offer-the-most-support-in-2026"
   },
   "pl": {
    "status": "info",
    "law": "NaszEauto 预算已用完；Rabla 2026 计划",
    "note": "Rabla 2026 对新纯电车提供补贴，具体金额待核实",
    "url": "https://www.euronews.com/business/2026/04/17/electric-cars-which-european-countries-offer-the-most-support-in-2026",
    "verified": false
   },
   "hu": {
    "status": "info",
    "law": "目前无面向个人的购车补贴",
    "note": "纯电动车免征注册税和年度车辆税",
    "url": "https://www.euronews.com/business/2026/04/17/electric-cars-which-european-countries-offer-the-most-support-in-2026"
   }
  }
 },
 "profiles": {
  "de": {
   "summary": "欧盟最大汽车市场和电池产能聚集地；NIS2、电池法均已落地，执行严格。",
   "items": [
    {
     "t": "电池",
     "x": "BattDG 已于 2025-10-07 生效，须在 stiftung ear 登记并加入 OfH，非德国企业须指定德文授权代表",
     "u": "https://www.bakermckenzie.com/en/insight/publications/alerts/2025/10/germany-new-act-aligns-with-eu-battery-rules"
    },
    {
     "t": "网络安全",
     "x": "NIS2UmsuCG 于 2025-12-06 生效，BSI 为主管机关",
     "u": "https://www.openkritis.de/eu/eu-nis-2-member-states.html"
    },
    {
     "t": "电动车",
     "x": "2026 年重启按收入分级的购车补贴（3,000–6,000 欧元）",
     "u": "https://www.evz.de/en/topics/transport/car/electric-cars/country-informations/"
    },
    {
     "t": "储能",
     "x": "新的储能支持机制计划 2027 年启动（待核实）",
     "u": "https://gridcog.webflow.io/blog/capacity-markets-battery-storage-europe-2026",
     "v": false
    },
    {
     "t": "产业布局",
     "x": "宁德时代图林根工厂等电池产能；整车厂集中"
    }
   ]
  },
  "fr": {
   "summary": "购车补贴明确奖励欧洲制造电池；NIS2 尚未转化，已被诉至欧盟法院。",
   "items": [
    {
     "t": "电动车",
     "x": "生态奖励按“环境评分”发放，另有欧洲制造电池奖励——对中国电池和整车不利",
     "u": "https://www.euronews.com/business/2026/04/17/electric-cars-which-european-countries-offer-the-most-support-in-2026"
    },
    {
     "t": "网络安全",
     "x": "NIS2 未转化，2026-07-08 被诉至欧盟法院",
     "u": "https://ngcybersecurity.io/nis2-implementation-status-eu-member-states/"
    },
    {
     "t": "电池",
     "x": "通过 SYDEREP 登记，经获批生态组织履行回收义务",
     "u": "https://www.repax.io/epr-registers"
    },
    {
     "t": "产业布局",
     "x": "北部“电池谷”：AESC、ACC、Verkor 等电池工厂"
    }
   ]
  },
  "it": {
   "summary": "储能专项拍卖 MACSE 是欧盟最成熟的储能支持机制之一；能效指令转化滞后。",
   "items": [
    {
     "t": "储能",
     "x": "MACSE 储能专项拍卖（2025 年启动），面向南部和岛屿地区",
     "u": "https://gridcog.webflow.io/blog/capacity-markets-battery-storage-europe-2026"
    },
    {
     "t": "网络安全",
     "x": "NIS2 已由 D.Lgs. 138/2024 转化，ACN 为主管机关",
     "u": "https://www.openkritis.de/eu/eu-nis-2-member-states.html"
    },
    {
     "t": "能效",
     "x": "EED 转化滞后，2026-10-01 收到理由意见",
     "u": "https://energy.ec.europa.eu/news/october-infringements-package-key-decisions-energy-2026-10-01_en"
    },
    {
     "t": "电动车",
     "x": "目前无全国性购车补贴（待核实）",
     "u": "https://www.euronews.com/business/2026/04/17/electric-cars-which-european-countries-offer-the-most-support-in-2026",
     "v": false
    }
   ]
  },
  "es": {
   "summary": "购车补贴按“欧洲制造”评分；新的容量机制为储能提供长期收益；NIS2 尚未转化。",
   "items": [
    {
     "t": "储能",
     "x": "十年期容量机制 2026 年获批并开展首轮拍卖，灵活性资源免电网费",
     "u": "https://gridcog.webflow.io/blog/capacity-markets-battery-storage-europe-2026"
    },
    {
     "t": "电动车",
     "x": "Auto+ 按整车和电池是否欧洲制造评分，最高 4,500 欧元",
     "u": "https://www.euronews.com/business/2026/04/17/electric-cars-which-european-countries-offer-the-most-support-in-2026"
    },
    {
     "t": "网络安全",
     "x": "NIS2 未转化，2026 年 7 月被诉至欧盟法院",
     "u": "https://ngcybersecurity.io/nis2-implementation-status-eu-member-states/"
    },
    {
     "t": "产业布局",
     "x": "Stellantis 与宁德时代萨拉戈萨合资电池厂、远景 AESC 等项目"
    }
   ]
  },
  "nl": {
   "summary": "无全国性购车补贴；NIS2 于 2026 年 8 月生效。",
   "items": [
    {
     "t": "网络安全",
     "x": "《网络安全法》2026-08-15 生效",
     "u": "https://ngcybersecurity.io/nis2-implementation-status-eu-member-states/"
    },
    {
     "t": "电动车",
     "x": "2025 年起无全国性购车补贴，仅保留车辆税减免",
     "u": "https://www.euronews.com/business/2026/04/17/electric-cars-which-european-countries-offer-the-most-support-in-2026"
    },
    {
     "t": "储能",
     "x": "SDE++、Flex-e 可支持储能（待核实）",
     "u": "https://intercel.eu/knowledge-insights/subsidies-for-battery-storage/",
     "v": false
    }
   ]
  },
  "pl": {
   "summary": "中东欧电池制造重镇；NIS2 于 2026 年 4 月生效；储能可参与容量市场。",
   "items": [
    {
     "t": "网络安全",
     "x": "KSC 修订案 2026-04-03 生效",
     "u": "https://ngcybersecurity.io/nis2-implementation-status-eu-member-states/"
    },
    {
     "t": "储能",
     "x": "储能可参与容量市场（规模待核实）",
     "u": "https://gridcog.webflow.io/blog/capacity-markets-battery-storage-europe-2026",
     "v": false
    },
    {
     "t": "电池",
     "x": "通过 BDO 系统单独登记电池生产者",
     "u": "https://www.repax.io/epr-registers"
    },
    {
     "t": "产业布局",
     "x": "LG 新能源弗罗茨瓦夫电池工厂等"
    }
   ]
  },
  "hu": {
   "summary": "中国电池企业在欧设厂最集中的国家之一；NIS2 较早生效；无个人购车补贴。",
   "items": [
    {
     "t": "产业布局",
     "x": "宁德时代德布勒森、比亚迪塞格德整车厂，以及三星 SDI、SK On 等电池工厂"
    },
    {
     "t": "网络安全",
     "x": "NIS2 由 2024 年第 LXIX 号法律转化，2025-01-01 生效，SZTFH 为主管机关",
     "u": "https://www.openkritis.de/eu/eu-nis-2-member-states.html"
    },
    {
     "t": "电池",
     "x": "通过 OKIR 登记，MOHU 为国家特许回收运营商（待核实）",
     "u": "https://www.repax.io/epr-registers",
     "v": false
    },
    {
     "t": "能效",
     "x": "EED 转化滞后，2026 年 6 月收到理由意见",
     "u": "https://energy.ec.europa.eu/news/june-infringements-package-key-decisions-energy-2026-06-04_en"
    },
    {
     "t": "电动车",
     "x": "无个人购车补贴，纯电车免注册税和年度车辆税",
     "u": "https://www.euronews.com/business/2026/04/17/electric-cars-which-european-countries-offer-the-most-support-in-2026"
    }
   ]
  }
 },
 "dates": [
  {
   "c": "de",
   "d": "batteries",
   "date": "2026-01-15",
   "label": "BattDG：提交加入生产者责任组织（OfH）证明的截止日，逾期登记追溯撤销"
  },
  {
   "c": "de",
   "d": "emd-reg",
   "date": "2026-12-31",
   "label": "EEG 国家援助批准到期，储能新支持机制计划 2027 年启动",
   "v": false
  },
  {
   "c": "es",
   "d": "co2-cars",
   "date": "2026-12-31",
   "label": "Auto+ 购车补贴计划截止（或预算用完）"
  },
  {
   "c": "es",
   "d": "eed",
   "date": "2026-12-01",
   "label": "EED：回复欧委会理由意见的期限（约两个月）",
   "v": false
  },
  {
   "c": "it",
   "d": "eed",
   "date": "2026-12-01",
   "label": "EED：回复欧委会理由意见的期限（约两个月）",
   "v": false
  },
  {
   "c": "fr",
   "d": "nis2",
   "date": "2026-07-08",
   "label": "NIS2：欧委会将法国诉至欧盟法院"
  },
  {
   "c": "nl",
   "d": "nis2",
   "date": "2026-08-15",
   "label": "NIS2：《网络安全法》生效"
  },
  {
   "c": "pl",
   "d": "nis2",
   "date": "2026-04-03",
   "label": "NIS2：KSC 修订案生效"
  },
  {
   "c": "de",
   "d": "nis2",
   "date": "2025-12-06",
   "label": "NIS2：NIS2UmsuCG 生效"
  },
  {
   "c": "hu",
   "d": "nis2",
   "date": "2025-01-01",
   "label": "NIS2：2024 年第 LXIX 号法律生效"
  },
  {
   "c": "it",
   "d": "nis2",
   "date": "2024-10-16",
   "label": "NIS2：D.Lgs. 138/2024 生效"
  },
  {
   "c": "de",
   "d": "batteries",
   "date": "2025-10-07",
   "label": "BattDG 生效"
  },
  {
   "c": "de",
   "d": "co2-cars",
   "date": "2026-05-19",
   "label": "电动车购车补贴开放申请"
  }
 ]
};
