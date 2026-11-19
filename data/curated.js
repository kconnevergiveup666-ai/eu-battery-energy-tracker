/*
 * curated.js —— 人工整理层（监测清单 + 中文解读 + 理事会内部节点 + 实施节点）
 *
 * 1. 每条记录的  oeil: "YYYY/NNNN(COD)"  决定了 tools/update-oeil.ps1 要抓取哪些程序。
 *    新增一部法规：复制一条记录，填好 oeil 编号，然后运行更新脚本即可。
 * 2. 欧委会提案、议会各委员会（主审/意见/联合委员会、报告员、影子报告员）、
 *    议会全会、理事会最终通过、签署、公报发布 —— 全部由脚本从 OEIL 自动抓取，无需手填。
 * 3. OEIL 不记录理事会内部进程（工作组 / COREPER 授权 / 部长理事会总体方针）以及三方谈判结果，
 *    这些写在 council 数组里；实施与适用节点写在 milestones 数组里。
 *    council / milestones 的 verified:false 表示日期尚待对照官方来源核实。
 *
 * council[].stage 取值：
 *   wp        理事会工作组审议          coreper   COREPER 谈判授权
 *   ga        部长理事会总体方针         trilogue  三方谈判（中间轮次）
 *   deal      三方达成临时协议           endorse   COREPER 确认协议文本
 * milestones[].kind 取值：force 生效 / apply 开始适用 / deadline 义务期限 / transpose 转化期限 /
 *   secondary 授权法案/实施法案/指南 / review 评估审查
 * council[].planned:true / tracking.items[].planned:true 表示“已排期/预计”的未来节点。
 *
 * tracking —— 在审法规的动态跟进（Legislative Train 等来源，人工阅读后整理；脚本无法自动抓取这些站点）
 *   { asOf: 来源版本日期, source, url,
 *     items: [{ date, lane: commission|epc|epp|council|trilogue|other, text, planned?, src? }],
 *     outlook: 下一步展望 }
 * 二级立法（授权/实施法案、指南、草案、意见征求）由 tools/update-secondary.ps1 自动抓取，配置见 data/sources.json。
 */
window.CURATED = [
  /* ================= 电池与关键原材料 ================= */
  {
    id: "batteries",
    oeil: "2020/0353(COD)",
    nameZh: "电池与废电池法规（新电池法）",
    shortZh: "新电池法",
    category: "battery",
    relevance: "core",
    tags: ["电池护照", "碳足迹", "再生料含量", "尽职调查", "回收"],
    summaryZh: "取代 2006 年电池指令，是欧盟首部覆盖电池全生命周期的“法规”（直接适用）。对动力电池、工业电池、轻型交通工具电池等设定碳足迹申报与分级、再生材料最低含量、性能耐久性、可拆卸、电池护照、供应链尽职调查及回收效率/材料回收率目标。",
    impactZh: [
      "进入欧盟市场的 EV/工业电池需提交碳足迹声明，后续按等级设上限——对上游正极、电芯制造的用电结构构成直接压力",
      "2031 年起钴 16%、锂 6%、镍 6%、铅 85% 的再生料最低含量；2036 年提高至钴 26%、锂 12%、镍 15%",
      "2027 年 2 月起 EV、LMT 及 >2kWh 工业电池须配备数字电池护照",
      "供应链尽职调查义务经 Omnibus IV 推迟至 2027 年 8 月 18 日"
    ],
    council: [
      { date: "2022-03-17", stage: "ga", label: "环境理事会达成总体方针", body: "环境理事会 (ENVI Council)" },
      { date: "2022-12-09", stage: "deal", label: "理事会与议会达成临时协议", body: "捷克轮值主席国" },
      { date: "2023-01-18", stage: "endorse", label: "COREPER 确认三方协议文本", body: "COREPER I", note: "OEIL 收录的 COREPER 确认函 GEDA/A/(2023)000527" }
    ],
    milestones: [
      { date: "2023-08-17", kind: "force", label: "法规生效" },
      { date: "2024-02-18", kind: "apply", label: "法规整体开始适用" },
      { date: "2025-12-31", kind: "deadline", label: "锂电池回收效率 ≥65%（2030 年 ≥70%）" },
      { date: "2026-08-18", kind: "deadline", label: "电池标签要求适用" },
      { date: "2027-02-18", kind: "deadline", label: "电池护照、QR 码及便携电池可拆卸要求适用" },
      { date: "2027-08-18", kind: "deadline", label: "供应链尽职调查义务适用（原定 2025-08-18，经 2025/1561 推迟）" },
      { date: "2027-12-31", kind: "deadline", label: "材料回收率：锂 50%，钴/镍/铜 90%" },
      { date: "2031-08-18", kind: "deadline", label: "再生料最低含量第一阶段（Co16% / Li6% / Ni6% / Pb85%）" },
      { date: "2036-08-18", kind: "deadline", label: "再生料最低含量第二阶段（Co26% / Li12% / Ni15% / Pb85%）" }
    ]
  },
  {
    id: "batteries-dd-omnibus",
    oeil: "2025/0129(COD)",
    parent: "batteries",
    nameZh: "电池尽职调查义务推迟（Omnibus IV“暂停时钟”）",
    shortZh: "电池尽调推迟",
    category: "battery",
    relevance: "core",
    tags: ["Omnibus 简化", "尽职调查"],
    summaryZh: "简化一揽子（Omnibus IV）的一部分，将新电池法下经济经营者的供应链尽职调查义务推迟两年至 2027 年 8 月 18 日，并相应推迟委员会发布尽调指南的期限。走紧急程序，议会无三方谈判直接一读通过。",
    impactZh: [
      "电池企业尽调体系建设窗口延长两年",
      "委员会尽调指南发布期限顺延至 2026 年 7 月 26 日"
    ],
    council: [],
    milestones: [
      { date: "2025-07-31", kind: "force", label: "修订条例生效" },
      { date: "2026-07-26", kind: "secondary", label: "委员会发布电池尽职调查指南的期限" },
      { date: "2027-08-18", kind: "deadline", label: "尽职调查义务新的适用日期" }
    ]
  },
  {
    id: "crma",
    oeil: "2023/0079(COD)",
    nameZh: "关键原材料法案（CRMA）",
    shortZh: "关键原材料法",
    category: "battery",
    relevance: "core",
    tags: ["锂", "钴", "镍", "石墨", "战略项目", "供应安全"],
    summaryZh: "确立 34 种关键原材料与 17 种战略原材料清单，设定 2030 年基准：欧盟开采满足 10%、加工 40%、回收 25% 的年消费需求，单一第三国供应任一战略原材料不超过 65%。建立战略项目认定、加速许可（开采 27 个月/加工回收 15 个月）和供应链监测、储备协调机制。",
    impactZh: [
      "锂、镍、钴、天然石墨、锰等电池材料均列入战略原材料",
      "“65% 单一来源上限”对电池材料进口结构形成政策导向",
      "大型企业须对战略原材料供应链开展风险评估"
    ],
    council: [
      { date: "2023-06-30", stage: "coreper", label: "COREPER 通过理事会谈判授权", body: "COREPER I" },
      { date: "2023-11-13", stage: "deal", label: "理事会与议会达成临时协议", body: "西班牙轮值主席国" }
    ],
    milestones: [
      { date: "2024-05-23", kind: "force", label: "法规生效" },
      { date: "2025-03-25", kind: "secondary", label: "委员会公布首批 47 个欧盟境内战略项目" },
      { date: "2025-06-04", kind: "secondary", label: "委员会公布 13 个第三国战略项目" },
      { date: "2030-12-31", kind: "deadline", label: "10% 开采 / 40% 加工 / 25% 回收 / 65% 来源上限 基准年" }
    ]
  },
  {
    id: "elv",
    oeil: "2023/0284(COD)",
    nameZh: "车辆设计循环性要求与报废车辆管理法规（ELV 法规）",
    shortZh: "报废车辆法规",
    category: "battery",
    relevance: "high",
    tags: ["循环设计", "再生塑料", "动力电池拆解"],
    summaryZh: "以“法规”取代报废车辆指令与 3R 型式认证指令，引入车辆循环设计要求、新车再生塑料最低含量，并规定报废车辆中动力电池与电机的拆除义务。",
    impactZh: [
      "报废车辆中 EV 电池须在处理前拆除，与新电池法回收体系衔接",
      "新车再生塑料含量要求将影响整车与零部件供应链"
    ],
    council: [
      { date: "2025-06-17", stage: "ga", label: "环境理事会达成总体方针", body: "环境理事会", verified: false }
    ],
    milestones: []
  },

  /* ================= 工业与制造 ================= */
  {
    id: "nzia",
    oeil: "2023/0081(COD)",
    nameZh: "净零工业法案（NZIA）",
    shortZh: "净零工业法",
    category: "industry",
    relevance: "core",
    tags: ["电池制造", "本土产能 40%", "非价格标准", "加速许可"],
    summaryZh: "目标到 2030 年欧盟本土净零技术制造能力满足 40% 部署需求。将电池/储能列为净零技术，设立“净零战略项目”加速许可、公共采购与可再生能源拍卖中的非价格（可持续性与韧性）标准、净零工业加速区与“监管沙盒”。",
    impactZh: [
      "电池与储能被列为净零技术，可申请战略项目和快速许可（制造项目 ≤12/18 个月）",
      "可再生能源拍卖至少 30% 容量（或每年 6GW）须适用韧性等非价格标准——若某国在某技术上供应占比超过 50%，将受到不利评分",
      "公共采购中引入可持续性和韧性评价"
    ],
    council: [
      { date: "2023-12-07", stage: "ga", label: "竞争力理事会达成总体方针", body: "竞争力理事会 (COMPET)" },
      { date: "2024-02-06", stage: "deal", label: "理事会与议会达成临时协议", body: "比利时轮值主席国" }
    ],
    milestones: [
      { date: "2024-06-29", kind: "force", label: "法规生效" },
      { date: "2025-05-23", kind: "secondary", label: "委员会通过关于可再生能源拍卖非价格标准的实施条例", verified: false },
      { date: "2025-12-30", kind: "apply", label: "拍卖非价格标准义务开始适用" },
      { date: "2030-12-31", kind: "deadline", label: "40% 本土制造能力基准年" }
    ]
  },
  {
    id: "iaa",
    oeil: "2026/0068(COD)",
    parent: "nzia",
    nameZh: "工业加速法案（IAA）",
    shortZh: "工业加速法",
    category: "industry",
    relevance: "core",
    tags: ["欧盟制造", "低碳标签", "外资审查", "电池"],
    summaryZh: "加速战略行业产能与脱碳的新框架：在公共采购与公共支持中引入“欧盟制造（Made in EU）”与低碳要求，对战略行业（含电池）中的大额外国直接投资附加条件（如合资、技术转让、本地雇员），并修订 NZIA 等法规。议会由 INTA/ITRE/IMCO 三委员会联合审议。",
    impactZh: [
      "电池被列入战略行业，外资电池项目可能面临持股、技术转让、本地化等条件",
      "公共采购/补贴中的“欧盟制造”及低碳要求影响电池与电动车供应链布局",
      "议会报告员草案提出：战略行业“欧洲制造”与低碳产品门槛 2036 年提高至 50%，并收紧第三国成分视为欧盟原产的七项条件"
    ],
    council: [
      { date: "2026-09-09", stage: "wp", label: "竞争力与增长工作组审议主席国妥协文本（9–10 日）", body: "竞争力与增长工作组", note: "主要改动：以贸易协定与产品特定市场准入体系取代宽泛的“欧洲制造”概念" },
      { date: "2026-09-24", stage: "wp", label: "竞争力理事会：爱尔兰主席国通报谈判进展", body: "竞争力理事会 (COMPET)" }
    ],
    tracking: {
      asOf: "2026-10-25", source: "EP Legislative Train",
      url: "https://www.europarl.europa.eu/legislative-train/theme-a-new-plan-for-europe-s-sustainable-prosperity-and-competitiveness/file-industrial-decarbonisation-accelerator-act",
      items: [
        { date: "2025-04-16", lane: "commission", text: "欧委会启动公众咨询（至 2025-07-09）" },
        { date: "2026-03-04", lane: "commission", text: "欧委会发布 IAA 提案 COM(2026)100：2035 年制造业占 GDP 20% 目标、“欧洲制造”与低碳偏好、外资审查强化、工业加速区、简化许可" },
        { date: "2026-04-29", lane: "epc", text: "INTA/ITRE/IMCO 联合委员会程序（第59条），三位报告员任命：Cavazzini（INTA）、Grudler（ITRE）、Jouvet（IMCO）" },
        { date: "2026-09-09", lane: "epc", text: "三位报告员发布联合报告草案（267 条修正案）：“欧洲制造”与低碳门槛 2036 年升至 50%；纳入海事制造；战略材料扩展至建筑用塑料；提高风机/光伏/热泵/核电的欧盟成分" },
        { date: "2026-12-01", lane: "epc", text: "联合委员会表决（Legislative Train 排期）", planned: true },
        { date: "2026-12-14", lane: "epc", text: "媒体报道（MLex）：委员会表决推迟至 12 月 14 日，修正案超过 5,000 条", planned: true, src: "MLex（媒体）", verified: false },
        { date: "2026-12-14", lane: "epp", text: "全会表决并确定议会谈判立场（12 月 14 日当周，待确认；OEIL 预测日期 14/12）", planned: true }
      ],
      outlook: "议会与理事会立场均预计在 2026 年底前后形成，2027 年进入三方谈判；理事会内部对“欧洲制造”概念分歧明显。"
    },
    milestones: []
  },
  {
    id: "espr",
    oeil: "2022/0095(COD)",
    nameZh: "可持续产品生态设计法规（ESPR）",
    shortZh: "生态设计法规",
    category: "industry",
    relevance: "high",
    tags: ["数字产品护照", "耐用性", "钢铁铝"],
    summaryZh: "将生态设计框架从能源相关产品扩展至几乎所有实物产品，设定耐用性、可修复性、再生料含量、碳/环境足迹等要求，并建立数字产品护照（DPP）。电池的产品要求在新电池法中单独规定，但 DPP 体系与电池护照共用。",
    impactZh: [
      "数字产品护照基础设施与电池护照互通",
      "首个工作计划优先涵盖钢铁、铝等电池与能源装备上游材料"
    ],
    council: [
      { date: "2023-05-22", stage: "ga", label: "竞争力理事会达成总体方针", body: "竞争力理事会" },
      { date: "2023-12-04", stage: "deal", label: "理事会与议会达成临时协议", body: "西班牙轮值主席国" }
    ],
    milestones: [
      { date: "2024-07-18", kind: "force", label: "法规生效" },
      { date: "2025-04-16", kind: "secondary", label: "委员会通过 2025–2030 年首个 ESPR 工作计划" }
    ]
  },

  /* ================= 电力与能源市场 ================= */
  {
    id: "emd-reg",
    oeil: "2023/0077A(COD)",
    nameZh: "电力市场设计改革（条例部分）",
    shortZh: "电力市场改革-条例",
    category: "power",
    relevance: "core",
    tags: ["差价合约 CfD", "PPA", "灵活性", "储能"],
    summaryZh: "修订电力市场条例 2019/943：新建可再生能源与核电的公共支持须采用双向差价合约，鼓励长期购电协议（PPA），引入非化石灵活性需求评估与支持机制，强化储能和需求响应。",
    impactZh: [
      "成员国须评估灵活性需求，可设立针对储能/需求响应的支持计划",
      "PPA 推广与担保机制利好电池储能项目的收益锁定"
    ],
    council: [
      { date: "2023-10-17", stage: "ga", label: "能源理事会达成总体方针", body: "能源理事会 (TTE Energy)" },
      { date: "2023-12-14", stage: "deal", label: "理事会与议会达成临时协议", body: "西班牙轮值主席国" }
    ],
    milestones: [
      { date: "2024-07-16", kind: "force", label: "条例生效" }
    ]
  },
  {
    id: "emd-dir",
    oeil: "2023/0077B(COD)",
    parent: "emd-reg",
    nameZh: "电力市场设计改革（指令部分）",
    shortZh: "电力市场改革-指令",
    category: "power",
    relevance: "high",
    tags: ["消费者保护", "能源共享"],
    summaryZh: "修订电力指令 2019/944 与可再生能源指令：强化消费者权利、固定价格合同、能源共享（含储能共享）、供应商风险对冲义务。",
    impactZh: ["分布式储能与能源共享获得明确法律地位"],
    council: [
      { date: "2023-10-17", stage: "ga", label: "能源理事会达成总体方针", body: "能源理事会" },
      { date: "2023-12-14", stage: "deal", label: "理事会与议会达成临时协议", body: "西班牙轮值主席国" }
    ],
    milestones: [
      { date: "2024-07-16", kind: "force", label: "指令生效" },
      { date: "2025-01-17", kind: "transpose", label: "成员国转化期限" }
    ]
  },
  {
    id: "remit",
    oeil: "2023/0076(COD)",
    nameZh: "批发能源市场完整性与透明度（REMIT 修订）",
    shortZh: "REMIT 修订",
    category: "power",
    relevance: "related",
    tags: ["市场监管", "ACER"],
    summaryZh: "与电力市场改革同步提出，强化 ACER 对跨境市场操纵案件的调查权，扩大报告义务（含 LNG 与算法交易）。",
    impactZh: ["参与批发电力市场的储能运营商面临更完整的交易报告义务"],
    council: [],
    milestones: [{ date: "2024-05-07", kind: "force", label: "条例生效" }]
  },
  {
    id: "gas-h2-dir",
    oeil: "2021/0425(COD)",
    nameZh: "氢能与脱碳气体市场指令",
    shortZh: "氢气市场指令",
    category: "power",
    relevance: "related",
    tags: ["氢能", "天然气"],
    summaryZh: "建立氢气网络与市场的共同规则，设立氢网络运营商、拆分与第三方准入规则，推动可再生与低碳气体市场化。",
    impactZh: ["为氢能与储能互补的长时储能路径提供市场框架"],
    council: [
      { date: "2023-03-28", stage: "ga", label: "能源理事会达成总体方针", body: "能源理事会" },
      { date: "2023-11-27", stage: "deal", label: "理事会与议会达成临时协议", body: "西班牙轮值主席国" }
    ],
    milestones: [{ date: "2026-08-05", kind: "transpose", label: "成员国转化期限（大部分条款）" }]
  },
  {
    id: "gas-h2-reg",
    oeil: "2021/0424(COD)",
    parent: "gas-h2-dir",
    nameZh: "氢能与脱碳气体市场条例",
    shortZh: "氢气市场条例",
    category: "power",
    relevance: "related",
    tags: ["氢能", "ENNOH"],
    summaryZh: "与指令配套，设立欧洲氢网络运营商网络（ENNOH），规定跨境氢基础设施规划与关税规则。",
    impactZh: [],
    council: [
      { date: "2023-03-28", stage: "ga", label: "能源理事会达成总体方针", body: "能源理事会" },
      { date: "2023-12-08", stage: "deal", label: "理事会与议会达成临时协议", body: "西班牙轮值主席国" }
    ],
    milestones: []
  },
  {
    id: "grids-tene",
    oeil: "2025/0399(COD)",
    nameZh: "跨欧洲能源基础设施指南（TEN-E 修订，欧洲电网一揽子）",
    shortZh: "TEN-E 修订（电网包）",
    category: "power",
    relevance: "high",
    tags: ["电网", "跨境互联", "PCI/PMI"],
    summaryZh: "“欧洲电网一揽子”核心立法之一，重构跨欧洲能源基础设施规划方式，引入欧盟层面集中式跨境基础设施规划，扩展至储能与配电网项目。",
    impactZh: ["储能与配电网有望更多纳入共同利益项目（PCI）清单获得资金与快速许可"],
    council: [
      { date: "2026-06-26", stage: "ga", label: "能源理事会通过电网一揽子（TEN-E + 许可指令）谈判立场", body: "能源理事会 (TTE Energy)", note: "要求就中央情景制定实施法案；阻塞收入未用部分 10%（逐步升至 25%）用于跨境基础设施" },
      { date: "2026-09-30", stage: "trilogue", label: "首轮（介绍性）三方谈判", body: "爱尔兰轮值主席国" },
      { date: "2026-10-13", stage: "trilogue", label: "第二轮三方谈判：原则同意敏感性分析为强制要求", body: "爱尔兰轮值主席国" },
      { date: "2026-11-17", stage: "trilogue", label: "第三轮三方谈判", body: "爱尔兰轮值主席国", planned: true },
      { date: "2026-12-01", stage: "trilogue", label: "计划中的最后一轮三方谈判", body: "爱尔兰轮值主席国", planned: true }
    ],
    tracking: {
      asOf: "2026-10-25", source: "EP Legislative Train",
      url: "https://www.europarl.europa.eu/legislative-train/theme-a-new-plan-for-europe-s-sustainable-prosperity-and-competitiveness/file-guidelines-for-trans-european-energy-infrastructure",
      items: [
        { date: "2025-12-10", lane: "commission", text: "欧委会发布欧洲电网一揽子，TEN-E 条例重订为核心立法之一" },
        { date: "2026-04-24", lane: "epc", text: "报告员 Tsvetelina Penkova（S&D）发布报告草案：强化欧委会在共同能源情景中的作用，新建前须优先考虑电网优化与需求侧方案" },
        { date: "2026-09-10", lane: "epc", text: "ITRE 委员会表决" }
      ],
      outlook: "目标在 2026-12-01 最后一轮三方谈判中达成协议。"
    },
    milestones: []
  },
  {
    id: "grids-permitting",
    oeil: "2025/0400(COD)",
    nameZh: "加速许可程序指令（欧洲电网一揽子）",
    shortZh: "电网许可加速指令",
    category: "power",
    relevance: "high",
    tags: ["许可", "储能", "电网接入"],
    summaryZh: "“欧洲电网一揽子”的许可加速部分，修订电力指令、可再生能源指令及气体指令，缩短电网、可再生能源、储能与充电设施项目的许可时限，改进电网接入排队规则。",
    impactZh: ["电池储能项目的许可与并网时限有望缩短", "电网接入“先到先得”规则可能调整为基于成熟度的排序", "议会与理事会均支持“压倒性公共利益”推定与默示批准机制"],
    council: [
      { date: "2026-06-26", stage: "ga", label: "能源理事会通过谈判立场（与 TEN-E 一并）", body: "能源理事会 (TTE Energy)", note: "数字化申请门户；电力与可再生项目推定为压倒性公共利益；成员国可规定中间步骤默示批准；社区利益分享" },
      { date: "2026-07-14", stage: "trilogue", label: "首轮三方谈判", body: "爱尔兰轮值主席国" },
      { date: "2026-10-06", stage: "trilogue", label: "第二轮三方谈判", body: "爱尔兰轮值主席国" },
      { date: "2026-11-17", stage: "trilogue", label: "第三轮三方谈判", body: "爱尔兰轮值主席国", planned: true }
    ],
    tracking: {
      asOf: "2026-10-25", source: "EP Legislative Train",
      url: "https://www.europarl.europa.eu/legislative-train/theme-a-new-plan-for-europe-s-sustainable-prosperity-and-competitiveness/file-acceleration-of-permit-granting-procedures",
      items: [
        { date: "2026-04-16", lane: "epc", text: "报告员 Niels Fuglsang（S&D）发布报告草案：小型项目与改造项目加速、环评豁免、默示批准、能效优先与“非电网方案”、全流程数字化与单一窗口" },
        { date: "2026-05-11", lane: "epc", text: "委员会修正案提交截止" },
        { date: "2026-07-02", lane: "epc", text: "ITRE 通过报告：57 票赞成、3 票反对、8 票弃权；以 64:3 授权启动三方谈判" }
      ],
      outlook: "三方谈判进行中，第三轮定于 2026-11-17。"
    },
    milestones: []
  },

  /* ================= 可再生能源与能效 ================= */
  {
    id: "red3",
    oeil: "2021/0218(COD)",
    nameZh: "可再生能源指令修订（RED III）",
    shortZh: "RED III",
    category: "renewable",
    relevance: "high",
    tags: ["42.5% 目标", "加速区", "储能"],
    summaryZh: "将 2030 年可再生能源占比目标提高至 42.5%（力争 45%），设立可再生能源加速区与许可时限，明确同址储能纳入快速许可，并强化交通、工业、建筑分领域目标。",
    impactZh: ["与可再生能源同址的储能设施适用同样的加速许可", "交通领域可再生电力计入目标，利好电动车充电"],
    council: [
      { date: "2022-06-27", stage: "ga", label: "能源理事会达成总体方针", body: "能源理事会" },
      { date: "2023-03-30", stage: "deal", label: "理事会与议会达成临时协议", body: "瑞典轮值主席国" }
    ],
    milestones: [
      { date: "2023-11-20", kind: "force", label: "指令生效" },
      { date: "2024-07-01", kind: "transpose", label: "许可相关条款转化期限" },
      { date: "2025-05-21", kind: "transpose", label: "其余条款转化期限" }
    ]
  },
  {
    id: "eed",
    oeil: "2021/0203(COD)",
    nameZh: "能源效率指令重订（EED）",
    shortZh: "能效指令",
    category: "renewable",
    relevance: "related",
    tags: ["能效优先", "数据中心"],
    summaryZh: "将 2030 年最终能源消费较 2020 参考情景降低 11.7% 列为约束性目标，确立“能效优先”原则，强化公共部门与企业能源审计义务。",
    impactZh: ["大型工业用户能源管理体系义务影响电池制造厂运营"],
    council: [
      { date: "2022-06-27", stage: "ga", label: "能源理事会达成总体方针", body: "能源理事会" },
      { date: "2023-03-10", stage: "deal", label: "理事会与议会达成临时协议", body: "瑞典轮值主席国" }
    ],
    milestones: [{ date: "2025-10-11", kind: "transpose", label: "成员国转化期限" }]
  },
  {
    id: "epbd",
    oeil: "2021/0426(COD)",
    nameZh: "建筑能效指令重订（EPBD）",
    shortZh: "建筑能效指令",
    category: "renewable",
    relevance: "related",
    tags: ["零排放建筑", "充电桩预布线", "太阳能"],
    summaryZh: "新建筑 2030 年起须为零排放建筑，逐步引入建筑太阳能义务，并对新建与大修建筑设定电动车充电点与预布线要求。",
    impactZh: ["建筑充电基础设施要求带动家用/商用充电与户用储能需求"],
    council: [
      { date: "2022-10-25", stage: "ga", label: "能源理事会达成总体方针", body: "能源理事会" },
      { date: "2023-12-07", stage: "deal", label: "理事会与议会达成临时协议", body: "西班牙轮值主席国" }
    ],
    milestones: [{ date: "2026-05-29", kind: "transpose", label: "成员国转化期限" }]
  },

  /* ================= 交通与充电 ================= */
  {
    id: "co2-cars",
    oeil: "2021/0197(COD)",
    nameZh: "乘用车与轻型商用车 CO2 排放标准（2035 零排放）",
    shortZh: "汽车 CO2 标准",
    category: "transport",
    relevance: "core",
    tags: ["2035", "电动车", "需求侧"],
    summaryZh: "修订条例 2019/631：2030 年新乘用车 CO2 较 2021 年减 55%、轻型商用车减 50%，2035 年均减 100%，即事实上禁售新燃油车。是欧盟动力电池需求最核心的政策驱动。",
    impactZh: ["决定欧盟动力电池需求曲线", "后续经 2025/1214（三年平均合规）及 2025/0420(COD)（2035 目标调整）修订"],
    council: [
      { date: "2022-06-29", stage: "ga", label: "环境理事会达成总体方针", body: "环境理事会" },
      { date: "2022-10-27", stage: "deal", label: "理事会与议会达成临时协议", body: "捷克轮值主席国" }
    ],
    milestones: [
      { date: "2023-05-15", kind: "force", label: "修订条例生效" },
      { date: "2030-01-01", kind: "deadline", label: "乘用车 -55% / 轻商车 -50%" },
      { date: "2035-01-01", kind: "deadline", label: "乘用车与轻商车 -100%（原文）" }
    ]
  },
  {
    id: "co2-flex-2025",
    oeil: "2025/0070(COD)",
    parent: "co2-cars",
    nameZh: "汽车 CO2 标准 2025–2027 合规灵活性",
    shortZh: "CO2 三年平均合规",
    category: "transport",
    relevance: "high",
    tags: ["汽车行动计划", "紧急程序"],
    summaryZh: "允许车企以 2025–2027 三年平均排放评估合规，而非逐年考核，缓解 2025 年目标下的罚款压力。议会采用紧急程序快速通过。",
    impactZh: ["短期内减缓车企为合规而压价推广电动车的压力，影响 2025–2026 年电池需求节奏"],
    council: [],
    milestones: [{ date: "2025-06-20", kind: "force", label: "修订条例生效", verified: false }]
  },
  {
    id: "co2-revision-2035",
    oeil: "2025/0420(COD)",
    parent: "co2-cars",
    nameZh: "轻型车 CO2 标准修订与车辆标签（汽车一揽子）",
    shortZh: "2035 目标调整",
    category: "transport",
    relevance: "core",
    tags: ["汽车一揽子", "2035", "欧盟制造低碳钢"],
    summaryZh: "2025 年 12 月“汽车一揽子”的核心提案：将 2035 年 100% 减排调整为 90%，剩余 10% 可通过欧盟生产的低碳钢与可持续燃料抵扣；轻型商用车 2030 年目标由 50% 降至 40%；为小型欧盟制造电动车设超级积分；并以新车辆标签规定取代 1999/94/EC。同一一揽子还包括“电池助推器（Battery Booster）”战略。",
    impactZh: ["2035 年后保留部分插混/增程空间，长期电池需求预期下调", "“欧盟制造”小型电动车超级积分利好本土电池供应链", "2030–2032 年引入多年平均合规"],
    council: [
      { date: "2026-01-13", stage: "wp", label: "环境工作组非正式会议首次交换意见", body: "环境工作组" },
      { date: "2026-03-17", stage: "wp", label: "环境理事会政策辩论", body: "环境理事会" },
      { date: "2026-06-25", stage: "wp", label: "环境理事会第二次政策辩论", body: "环境理事会" },
      { date: "2026-12-11", stage: "ga", label: "预计环境理事会达成总体方针", body: "环境理事会", planned: true }
    ],
    tracking: {
      asOf: "2026-10-25", source: "EP Legislative Train",
      url: "https://www.europarl.europa.eu/legislative-train/package-automotive-package/file-co2-emission-standards-for-new-light-duty-vehicles-and-labelling",
      items: [
        { date: "2026-01-28", lane: "commission", text: "Hoekstra 委员在 ENVI 委员会介绍提案并答询" },
        { date: "2026-03-19", lane: "epc", text: "Massimiliano Salini（EPP）被任命为报告员" },
        { date: "2026-04-17", lane: "epc", text: "报告员发布报告草案（提出进一步重大修改）" },
        { date: "2026-04-29", lane: "other", text: "欧洲经济和社会委员会通过意见（报告员 Matteo Borsani）" },
        { date: "2026-10-14", lane: "other", text: "欧洲地区委员会通过“汽车一揽子”意见" },
        { date: "2026-11-23", lane: "epp", text: "全会表决预计日期（Legislative Train）；OEIL 预测为 2026-12-14", planned: true }
      ],
      outlook: "ENVI 已于 2026-11-04 表决；理事会预计 2026-12-11 达成总体方针，之后启动三方谈判。"
    },
    milestones: []
  },
  {
    id: "afir",
    oeil: "2021/0223(COD)",
    nameZh: "替代燃料基础设施法规（AFIR）",
    shortZh: "充电设施法规",
    category: "transport",
    relevance: "high",
    tags: ["充电桩", "TEN-T", "加氢站"],
    summaryZh: "设定基于车队规模的充电容量目标（每辆纯电车 1.3kW），要求 2025 年起 TEN-T 核心网每 60km 设置 ≥150kW 快充站，并规定支付便利性与价格透明。",
    impactZh: ["快充网络建设带动大功率充电与站端储能需求"],
    council: [
      { date: "2022-06-02", stage: "ga", label: "交通理事会达成总体方针", body: "交通理事会" },
      { date: "2023-03-28", stage: "deal", label: "理事会与议会达成临时协议", body: "瑞典轮值主席国" }
    ],
    milestones: [
      { date: "2023-10-12", kind: "force", label: "法规生效" },
      { date: "2024-04-13", kind: "apply", label: "法规开始适用" },
      { date: "2025-12-31", kind: "deadline", label: "TEN-T 核心网每 60km 快充站（≥400kW 站点）" }
    ]
  },

  /* ================= 碳定价与贸易 ================= */
  {
    id: "cbam",
    oeil: "2021/0214(COD)",
    nameZh: "碳边境调节机制（CBAM）",
    shortZh: "CBAM",
    category: "carbon",
    relevance: "high",
    tags: ["碳关税", "钢铝", "电力"],
    summaryZh: "对进口钢铁、铝、水泥、化肥、电力和氢征收与欧盟碳价挂钩的 CBAM 证书费用。2023-10 起过渡期仅申报，2026-01-01 起进入正式征收期。",
    impactZh: ["电池壳体、结构件所用铝/钢及进口电力受影响", "委员会评估将范围扩展至下游产品（可能涉及电池相关产品）"],
    council: [
      { date: "2022-03-15", stage: "ga", label: "经济与财政理事会达成总体方针", body: "ECOFIN" },
      { date: "2022-12-13", stage: "deal", label: "理事会与议会达成临时协议", body: "捷克轮值主席国" }
    ],
    milestones: [
      { date: "2023-10-01", kind: "apply", label: "过渡期开始（仅申报）" },
      { date: "2026-01-01", kind: "apply", label: "正式征收期开始" }
    ]
  },
  {
    id: "cbam-omnibus",
    oeil: "2025/0039(COD)",
    parent: "cbam",
    nameZh: "CBAM 简化与强化（Omnibus I）",
    shortZh: "CBAM 简化",
    category: "carbon",
    relevance: "related",
    tags: ["Omnibus 简化", "50 吨豁免"],
    summaryZh: "引入每年 50 吨的进口量豁免门槛，免除约 90% 小进口商义务；简化排放计算与核查规则，推迟证书出售至 2027 年。",
    impactZh: ["中小进口商合规负担降低"],
    council: [],
    milestones: []
  },
  {
    id: "ets",
    oeil: "2021/0211A(COD)",
    nameZh: "欧盟碳排放交易体系修订（ETS，Fit for 55）",
    shortZh: "ETS 修订",
    category: "carbon",
    relevance: "high",
    tags: ["碳价", "免费配额退出", "ETS2"],
    summaryZh: "将 ETS 覆盖行业 2030 年减排目标提高至较 2005 年 -62%，随 CBAM 引入逐步退出免费配额（2026–2034），设立覆盖建筑与道路交通燃料的 ETS2。",
    impactZh: ["碳价上行提高电力成本，影响电池制造的能源成本", "ETS2 推高燃油成本，间接利好电动车"],
    council: [
      { date: "2022-06-29", stage: "ga", label: "环境理事会达成总体方针", body: "环境理事会" },
      { date: "2022-12-18", stage: "deal", label: "理事会与议会达成临时协议", body: "捷克轮值主席国" }
    ],
    milestones: [
      { date: "2023-06-05", kind: "force", label: "指令生效" },
      { date: "2026-01-01", kind: "apply", label: "CBAM 行业免费配额开始逐步削减" }
    ]
  },
  {
    id: "ets-2026",
    oeil: "2026/0212(COD)",
    parent: "ets",
    nameZh: "ETS 与市场稳定储备修订：竞争力与成本有效的脱碳",
    shortZh: "ETS 2026 修订",
    category: "carbon",
    relevance: "high",
    tags: ["ETS 审查", "工业竞争力"],
    summaryZh: "2026 年 7 月 17 日提出，使 ETS 与 2040 年净减排 90% 目标衔接：线性减排因子由 4.4% 降至 3.7%（2031–2035）与 1.7%（2036–2040）；2036–2040 年允许最多 2% 高质量国际信用；拍卖 2.5 亿配额支持 BioCCS/DACCS 碳移除；扩展至航空、海运小型船舶与城市垃圾焚烧；保留免费配额、CBAM 与间接成本补偿；获免费配额企业须自 2029-09-30 起制定脱碳投资计划；新设工业脱碳银行（2031–2040，约 1000 亿欧元），之前以 ETS 投资助推器过渡。",
    impactZh: ["减排因子放缓与国际信用引入将压低 2030 年后碳价预期，影响工业电价", "间接成本补偿延续，利好电池等高耗电制造业", "工业脱碳银行可能成为电池与清洁技术项目的新资金来源"],
    council: [
      { date: "2026-10-12", stage: "wp", label: "环境理事会政策辩论", body: "环境理事会" },
      { date: "2026-12-11", stage: "ga", label: "环境理事会目标达成总体方针", body: "环境理事会", planned: true }
    ],
    tracking: {
      asOf: "2026-10-25", source: "EP Legislative Train",
      url: "https://www.europarl.europa.eu/legislative-train/theme-a-new-plan-for-europe-s-sustainable-prosperity-and-competitiveness/file-update-of-the-eu-emissions-trading-system-(eu-ets)",
      items: [
        { date: "2026-07-17", lane: "commission", text: "欧委会发布 ETS 指令与 MSR 决定修订提案；另有基准值调整、停止 MSR 配额失效两项配套提案" },
        { date: "2026-09-15", lane: "epc", text: "ENVI 报告员 Peter Liese（EPP）提交报告草案" },
        { date: "2026-10-06", lane: "epc", text: "委员会修正案提交截止" },
        { date: "2026-10-21", lane: "other", text: "欧洲经济和社会委员会通过意见（报告员 Kädi Ristkok）" },
        { date: "2026-12-31", lane: "epp", text: "议会目标在年底前形成立场", planned: true }
      ],
      outlook: "议会与理事会目标在 2027 年第一季度达成协议。"
    },
    milestones: []
  }
];

window.CATEGORIES = {
  battery:   { zh: "电池与关键原材料", color: "battery" },
  industry:  { zh: "工业与制造",       color: "industry" },
  power:     { zh: "电力市场与电网",   color: "power" },
  renewable: { zh: "可再生能源与能效", color: "renewable" },
  transport: { zh: "交通与充电",       color: "transport" },
  carbon:    { zh: "碳定价与贸易",     color: "carbon" }
};
