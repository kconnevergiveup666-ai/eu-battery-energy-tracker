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
 * batteryImpact —— 对电池生产企业的主要影响（视角：对欧出口或在欧设厂的电池企业）
 *   { level: high|medium|low, levelNote, segments: [受影响业务环节],
 *     compliance: [合规义务], access: [市场准入影响], support: [政策支持与机会], actions: [建议行动] }
 *   “待核实”写在文本中；关键时间点取自 milestones，无需重复填写。
 *
 * 二级法案 / 尚未提出的立法：oeil 留空，secondary:true 表示二级法案，
 *   act: { kind: delegated|implementing|guideline|decision|restriction|clp|trade|planned,
 *          ref: 编号, status: adopted|draft|planned, url, statusNote, basis: 法律依据 }
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
    batteryImpact: {
      level: "high",
      levelNote: "直接规制电池产品本身，是对欧销售电池必须满足的基础法规",
      segments: [
        "电芯/模组制造",
        "储能系统集成",
        "材料采购",
        "对欧出口",
        "在欧设厂",
        "回收"
      ],
      compliance: [
        "自 2024-08-18 起电池须通过合格评定、加贴 CE 标志并出具欧盟符合性声明；欧盟境外制造商须有在欧盟设立的经济经营者（进口商或授权代表）承担责任",
        "生产者责任延伸（EPR）：须在每个销售国登记为生产者，承担回收处理费用；非欧盟生产者须指定 EPR 授权代表",
        "碳足迹声明：EV、>2kWh 可充电工业电池、LMT 电池按类别分阶段适用，并以相关授权法案生效后 12 个月为准；EV 电池的计算方法授权法案截至 2026 年仍未通过，需持续跟踪",
        "固定式储能系统（SBESS）须满足第 12 条安全要求并提供测试文件；工业电池须提供电化学性能与耐久性参数",
        "2026-08-18 起标签要求适用，2027-02-18 起电池护照与 QR 码适用（EV、LMT、>2kWh 工业电池）",
        "2027-08-18 起须建立供应链尽职调查体系（钴、天然石墨、锂、镍及其化合物），并经公告机构核查"
      ],
      access: [
        "不满足 CE、EPR 登记或护照要求的电池不得投放欧盟市场，属于硬性准入门槛",
        "碳足迹后续将引入性能等级和最大限值——电网结构以煤电为主的生产基地将处于劣势，可能被挡在限值之外",
        "2031 年起再生料最低含量（钴 16%、锂 6%、镍 6%）要求企业具备可追溯的再生材料来源"
      ],
      support: [
        "第 85 条要求公共采购考虑电池的可持续性标准，低碳、高再生料产品在公共项目中更具优势",
        "统一的欧盟规则取代各国规定，合规一次即可进入全部 27 国市场"
      ],
      actions: [
        "核对每个销售国的 EPR 登记和授权代表安排",
        "按产品类别建立碳足迹核算数据（含上游材料与生产用电），评估绿电采购或欧洲本地生产的必要性",
        "启动电池护照数据架构与 QR 码方案，2027-02 前完成",
        "按 OECD 指南搭建关键矿产尽调体系，选定公告机构"
      ]
    },
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
    batteryImpact: {
      level: "medium",
      levelNote: "在新电池法基础上把尽调义务推迟两年，不改变实质要求",
      segments: [
        "材料采购",
        "电芯/模组制造",
        "对欧出口"
      ],
      compliance: [
        "供应链尽职调查义务适用日推迟至 2027-08-18；尽调政策的审查与报告周期据报道从每年改为每三年一次（待核实）",
        "豁免门槛扩大到更多中型企业（据报道，待核实）"
      ],
      access: [
        "2027-08-18 后未建立并经核查尽调体系的企业，电池不得投放欧盟市场"
      ],
      support: [
        "企业多出两年时间建设体系；欧委会尽调指南原定 2026-07-26 前发布，可作为体系设计依据"
      ],
      actions: [
        "利用缓冲期完成上游矿产溯源与第三方审核",
        "跟踪欧委会尽调指南是否按期发布并据此调整体系"
      ]
    },
    council: [],
    milestones: [
      { date: "2025-07-31", kind: "force", label: "修订条例生效" },
      { date: "2026-07-26", kind: "secondary", label: "委员会发布电池尽职调查指南的期限" },
      { date: "2027-08-18", kind: "deadline", label: "尽职调查义务新的适用日期" }
    ]
  },
  {
    id: "bat-cfb",
    oeil: "",
    parent: "batteries",
    secondary: true,
    act: {
      kind: "delegated",
      ref: "草案 Ares(2024)3131389（未通过）",
      status: "draft",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=PI_COM:Ares(2024)3131389",
      statusNote: "2024 年 4 月发布草案征求意见；截至 2026 年 10 月仍未通过",
      basis: "新电池法第 7 条"
    },
    nameZh: "电动车电池碳足迹计算与核查方法（CFB-EV 授权法案）",
    shortZh: "电池碳足迹方法（CFB）",
    category: "battery",
    relevance: "core",
    tags: [
      "碳足迹",
      "CFB",
      "授权法案",
      "电池护照"
    ],
    summaryZh: "依据新电池法第 7 条，规定电动车电池全生命周期碳足迹的计算与核查规则（功能单位、系统边界、电力建模、数据质量等），并配套一项规定碳足迹声明格式的实施法案。新电池法原定 2025-02-18 前通过，草案已于 2024 年 4 月征求意见，但截至 2026 年 10 月仍未在公报发布。碳足迹声明义务以该授权法案生效后 12 个月为准，因此 EV 电池的碳足迹声明实际上尚未开始。轻型交通工具电池（CFB-LMT）的规则由 JRC 另行研究。",
    impactZh: [
      "碳足迹声明、后续性能等级和最大限值均以此方法为基础——电力建模规则（是否认可绿电合同）直接决定以煤电为主的生产基地的碳足迹数值",
      "通过时间推迟使声明义务顺延，但最终规则一旦生效 12 个月即须申报"
    ],
    batteryImpact: {
      level: "high",
      levelNote: "碳足迹声明、分级和限值的计算基础，决定企业碳足迹数值高低",
      segments: [
        "电芯/模组制造",
        "材料采购",
        "对欧出口",
        "在欧设厂"
      ],
      compliance: [
        "授权法案生效 12 个月后，EV 电池须随产品提供按该方法计算、经公告机构核查的碳足迹声明",
        "须按规定的数据质量要求收集上游材料和生产环节的一手数据"
      ],
      access: [
        "电力建模规则若只认可电网平均排放因子、不认可绿电购电协议，中国生产基地的碳足迹将明显偏高，未来面临限值淘汰风险"
      ],
      support: [],
      actions: [
        "按草案方法先行测算主力产品碳足迹",
        "跟踪电力建模条款的最终文本，评估绿电采购和欧洲生产的必要性",
        "提前选定碳足迹核查的公告机构"
      ]
    },
    council: [],
    milestones: [
      {
        date: "2024-04-15",
        kind: "secondary",
        label: "草案发布征求意见",
        verified: false
      },
      {
        date: "2025-02-18",
        kind: "deadline",
        label: "新电池法规定的通过期限（已错过）"
      }
    ]
  },
  {
    id: "bat-recycled",
    oeil: "",
    parent: "batteries",
    secondary: true,
    act: {
      kind: "delegated",
      ref: "草案（2026 年 8 月征求意见，尚未通过）",
      status: "draft",
      statusNote: "征求意见期 2026-08-12 至 09-09；法定通过期限 2026-08-18",
      basis: "新电池法第 8 条"
    },
    nameZh: "电池再生料含量计算与核查方法（授权法案）",
    shortZh: "再生料含量方法",
    category: "battery",
    relevance: "core",
    tags: [
      "再生料",
      "质量平衡",
      "授权法案"
    ],
    summaryZh: "依据新电池法第 8 条，规定钴、锂、镍、铅再生料含量的计算与核查方法及文件格式。草案采用按工厂、按电池型号、按年度的质量平衡法，并据报道对在欧盟境内回收的材料设 1.3 的修正系数。草案于 2026-08-12 至 09-09 征求意见，尚未正式通过。",
    impactZh: [
      "决定 2031 年再生料最低含量（钴 16%、锂 6%、镍 6%）如何计算和证明",
      "对欧盟境内回收材料的修正系数将使在欧回收的再生料更“值钱”"
    ],
    batteryImpact: {
      level: "high",
      levelNote: "决定再生料目标如何计算，以及境外再生料是否吃亏",
      segments: [
        "材料采购",
        "电芯/模组制造",
        "回收",
        "在欧设厂"
      ],
      compliance: [
        "须按质量平衡法逐工厂、逐型号记录再生料投入和产出，并在合格评定中由公告机构核查数据"
      ],
      access: [
        "若欧盟境内回收材料享有 1.3 修正系数（据报道，待核实），使用中国或其他地区再生料的产品更难达到 2031 年目标"
      ],
      support: [
        "在欧回收或与欧洲回收企业合作，可利用修正系数更容易满足目标"
      ],
      actions: [
        "建立再生料采购的溯源与质量平衡记账体系",
        "评估与欧洲回收企业签订再生料长期供应协议"
      ]
    },
    council: [],
    milestones: [
      {
        date: "2026-08-12",
        kind: "secondary",
        label: "草案开始征求意见（至 09-09）"
      },
      {
        date: "2026-08-18",
        kind: "deadline",
        label: "新电池法规定的通过期限"
      },
      {
        date: "2028-08-18",
        kind: "deadline",
        label: "再生料含量文件要求开始适用（或授权法案生效后 24 个月）",
        verified: false
      },
      {
        date: "2031-08-18",
        kind: "deadline",
        label: "再生料最低含量第一阶段"
      }
    ]
  },
  {
    id: "bat-recycling-eff",
    oeil: "",
    parent: "batteries",
    secondary: true,
    act: {
      kind: "delegated",
      ref: "条例 (EU) 2025/606",
      status: "adopted",
      url: "https://eur-lex.europa.eu/eli/reg_del/2025/606/oj/eng",
      basis: "新电池法第 71 条"
    },
    nameZh: "废电池回收效率与材料回收率计算和核查方法",
    shortZh: "回收效率计算方法",
    category: "battery",
    relevance: "high",
    tags: [
      "回收效率",
      "材料回收率",
      "授权法案"
    ],
    summaryZh: "授权条例 (EU) 2025/606，2025-03-21 通过，2025-07-04 公报发布，2025-07-24 生效。规定回收企业计算回收效率（废电池总质量中被回收的比例）和材料回收率（钴、铜、锂、镍等）的输入、输出口径和核查方式，覆盖铅酸、镍镉、锂及其他电池。2026 年欧委会评估是否调整附件十二的目标。",
    impactZh: [
      "锂电池回收效率 2025 年底须达 65%（2030 年 70%），锂材料回收率 2027 年底 50%"
    ],
    batteryImpact: {
      level: "medium",
      levelNote: "主要约束回收企业，电池企业的回收合作方须达标",
      segments: [
        "回收",
        "在欧设厂"
      ],
      compliance: [
        "自建或合作的回收设施须按该方法计算并报告回收效率和材料回收率"
      ],
      access: [
        "回收合作伙伴达不到目标会影响生产者责任延伸（EPR）义务的履行"
      ],
      support: [],
      actions: [
        "核查回收合作方的回收效率数据是否按新方法计算"
      ]
    },
    council: [],
    milestones: [
      {
        date: "2025-07-24",
        kind: "force",
        label: "授权条例生效"
      },
      {
        date: "2025-12-31",
        kind: "deadline",
        label: "锂电池回收效率 ≥65%"
      },
      {
        date: "2027-12-31",
        kind: "deadline",
        label: "材料回收率：锂 50%，钴/镍/铜 90%"
      }
    ]
  },
  {
    id: "bat-dd-guidelines",
    oeil: "",
    parent: "batteries",
    secondary: true,
    act: {
      kind: "guideline",
      ref: "欧委会指南（第 48–50 条）",
      status: "planned",
      statusNote: "法定发布期限 2026-07-26，截至目前未见发布",
      basis: "新电池法第 48–50 条"
    },
    nameZh: "电池尽职调查义务指南",
    shortZh: "电池尽调指南",
    category: "battery",
    relevance: "high",
    tags: [
      "尽职调查",
      "指南",
      "供应链"
    ],
    summaryZh: "新电池法要求欧委会就第 48–50 条的尽职调查义务（附件十所列社会和环境风险）发布指南，并与企业可持续发展尽职调查指令（CSDDD）的指南协调。原定 2025-02-18 发布，经条例 (EU) 2025/1561 推迟至 2026-07-26；截至目前未见正式发布。",
    impactZh: [
      "是企业设计电池尽调体系、准备公告机构核查的主要依据"
    ],
    batteryImpact: {
      level: "high",
      levelNote: "尽调体系设计的直接依据",
      segments: [
        "材料采购",
        "电芯/模组制造"
      ],
      compliance: [
        "指南将明确风险识别、第三方核查和信息披露的具体做法"
      ],
      access: [
        "2027-08-18 起未按要求建立尽调体系的电池不得投放欧盟市场"
      ],
      support: [],
      actions: [
        "跟踪指南发布，据此对照修正现有尽调体系"
      ]
    },
    council: [],
    milestones: [
      {
        date: "2026-07-26",
        kind: "secondary",
        label: "指南法定发布期限"
      },
      {
        date: "2027-08-18",
        kind: "deadline",
        label: "尽职调查义务适用"
      }
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
    batteryImpact: {
      level: "high",
      levelNote: "锂、镍、钴、石墨、锰均为战略原材料，影响原料采购结构",
      segments: [
        "材料采购",
        "在欧设厂",
        "回收"
      ],
      compliance: [
        "生产电池等战略技术的大型企业须定期（每三年）开展战略原材料供应链风险评估，结果报送董事会"
      ],
      access: [
        "“单一第三国供应不超过 65%”的基准是政策导向而非硬性限制，但会影响补贴、采购和项目审批中对供应链的评价，高度依赖中国石墨、前驱体的供应链面临压力"
      ],
      support: [
        "正负极材料、前驱体、回收项目可申请“战略项目”：加速许可（加工/回收 15 个月）、优先融资对接",
        "第三国战略项目同样可申请，海外矿产与材料项目可借此进入欧盟供应链",
        "欧盟原材料联合采购平台为下游企业提供采购渠道"
      ],
      actions: [
        "梳理关键材料来源国集中度，准备供应链风险评估",
        "评估在欧材料或回收项目申请战略项目的可行性"
      ]
    },
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
    id: "crma-strategic",
    oeil: "",
    parent: "crma",
    secondary: true,
    act: {
      kind: "decision",
      ref: "欧委会决定（2025-03-25、2025-06-04）",
      status: "adopted",
      basis: "关键原材料法第 6–7 条"
    },
    nameZh: "关键原材料战略项目认定",
    shortZh: "战略项目认定",
    category: "battery",
    relevance: "high",
    tags: [
      "战略项目",
      "锂",
      "石墨",
      "加工",
      "回收"
    ],
    summaryZh: "欧委会依据关键原材料法认定战略项目：2025-03-25 公布首批 47 个欧盟境内项目，2025-06-04 公布 13 个第三国项目，涵盖锂、镍、钴、石墨、锰等电池材料的开采、加工和回收。战略项目享有加速许可、融资对接和优先行政处理。",
    impactZh: [
      "获认定项目可更快获得许可和融资，形成欧洲本土电池材料供应链"
    ],
    batteryImpact: {
      level: "medium",
      levelNote: "为在欧材料与回收项目提供加速通道",
      segments: [
        "材料采购",
        "在欧设厂",
        "回收"
      ],
      compliance: [],
      access: [
        "战略项目的产品更容易进入欧洲电池供应链，非战略项目来源的材料在采购评价中可能处于劣势"
      ],
      support: [
        "正负极材料、前驱体、回收项目（含第三国项目）可申请认定，享受加速许可和融资对接"
      ],
      actions: [
        "评估在欧或海外材料项目申请下一轮战略项目的可行性",
        "关注已认定项目作为潜在供应商"
      ]
    },
    council: [],
    milestones: [
      {
        date: "2025-03-25",
        kind: "secondary",
        label: "首批 47 个欧盟境内战略项目"
      },
      {
        date: "2025-06-04",
        kind: "secondary",
        label: "13 个第三国战略项目"
      }
    ]
  },
  {
    id: "cea",
    oeil: "",
    act: {
      kind: "planned",
      status: "planned",
      statusNote: "欧委会计划 2026 年内通过"
    },
    nameZh: "循环经济法（Circular Economy Act）",
    shortZh: "循环经济法",
    category: "circular",
    relevance: "high",
    tags: [
      "二次原材料",
      "WEEE 修订",
      "黑粉",
      "单一市场"
    ],
    summaryZh: "《清洁工业协议》提出的旗舰立法，欧委会计划 2026 年内通过，目标是建立二次原材料和循环产品的欧盟单一市场。欧委会已完成 WEEE 指令评估（近一半电子废物未被收集），计划借此修订 WEEE。电池回收行业呼吁在其中统一黑粉的定义和技术规格、设立单一海关编码，并修订废物运输条例。",
    impactZh: [
      "可能统一黑粉、再生材料的废物终止标准，影响电池回收与再生料供应",
      "WEEE 修订可能并入，影响储能、逆变器等电气设备的回收责任"
    ],
    batteryImpact: {
      level: "medium",
      levelNote: "尚未提出，但将重塑电池回收与再生料市场规则",
      segments: [
        "回收",
        "材料采购",
        "在欧设厂"
      ],
      compliance: [
        "若纳入 WEEE 修订，储能系统等电气设备的生产者责任可能调整"
      ],
      access: [
        "黑粉和再生材料的统一定义与海关编码将决定其能否在欧盟内自由流通、能否出口"
      ],
      support: [
        "二次原材料单一市场有利于在欧回收和再生料采购"
      ],
      actions: [
        "跟踪欧委会提案发布",
        "评估在欧回收布局"
      ]
    },
    council: [],
    milestones: []
  },
  {
    id: "wsr",
    oeil: "2021/0367(COD)",
    nameZh: "废物运输条例（WSR）",
    shortZh: "废物运输条例",
    category: "circular",
    relevance: "high",
    tags: [
      "废电池运输",
      "黑粉",
      "出口限制",
      "电子申报"
    ],
    summaryZh: "条例 (EU) 2024/1157，取代 2006 年废物运输条例。欧盟内废物运输全面电子化申报，强化“事先书面通知与同意”程序；禁止向非 OECD 国家出口危险废物，非危险废物只能出口到申请并获准、证明能环境无害化处理的国家；向 OECD 国家出口受更严格监控。",
    impactZh: [
      "废锂电池（16 06 07*）及黑粉被列为危险废物后，不能出口到非 OECD 国家（含中国）",
      "欧盟内跨境运输废电池须走电子化事先通知与同意程序"
    ],
    batteryImpact: {
      level: "high",
      levelNote: "决定废电池和黑粉能否跨境运输、能否运出欧盟",
      segments: [
        "回收",
        "在欧设厂",
        "材料采购"
      ],
      compliance: [
        "2026-05-21 起欧盟内废物运输须通过电子系统申报，并取得事先书面同意",
        "在欧工厂的生产废料（含锂电池生产废料 16 06 24*）跨境运输同样受约束"
      ],
      access: [
        "黑粉 2026 年 12 月起按危险废物管理后，不能出口到中国等非 OECD 国家——把在欧回收的黑粉运回国内提炼的路径基本被切断"
      ],
      support: [
        "推动在欧盟境内形成回收—提炼—再生料闭环，在欧建设湿法冶金产能的企业受益"
      ],
      actions: [
        "梳理现有废料和黑粉的跨境流向，2026 年 12 月前调整",
        "评估在欧建设或合作湿法冶金产能"
      ]
    },
    council: [
      {
        date: "2023-11-17",
        stage: "deal",
        label: "理事会与议会达成临时协议",
        body: "西班牙轮值主席国",
        verified: false
      }
    ],
    milestones: [
      {
        date: "2024-05-20",
        kind: "force",
        label: "条例生效"
      },
      {
        date: "2026-05-21",
        kind: "apply",
        label: "条例开始适用；电子化申报强制实施"
      },
      {
        date: "2026-12-09",
        kind: "deadline",
        label: "黑粉等按危险废物分类开始适用（见废物清单授权决定）",
        verified: false
      }
    ]
  },
  {
    id: "black-mass",
    oeil: "",
    parent: "wsr",
    secondary: true,
    act: {
      kind: "decision",
      ref: "授权决定 (EU) 2025/934",
      status: "adopted",
      url: "https://eur-lex.europa.eu/eli/dec_del/2025/934/oj/eng",
      statusNote: "2025-03-05 通过；据报道经更正后 2026-12-09 起适用（待核实）",
      basis: "废物框架指令（修订废物清单 2000/532/EC）"
    },
    nameZh: "电池相关废物代码更新：黑粉列为危险废物",
    shortZh: "黑粉列为危险废物",
    category: "circular",
    relevance: "core",
    tags: [
      "黑粉",
      "废物清单",
      "危险废物"
    ],
    summaryZh: "授权决定 (EU) 2025/934（C(2025) 1360），修订欧盟废物清单第 16 06 章：新增按化学体系区分的电池废物代码，其中废锂电池为 16 06 07*、锂电池生产废料为 16 06 24*，并将黑粉作为危险废物管理。据报道经 2025 年 8 月更正后自 2026-12-09 起适用。理事会文件指出欧委会可在必要时提出进一步出口限制。",
    impactZh: [
      "黑粉成为危险废物，叠加废物运输条例，不能出口到非 OECD 国家",
      "在欧回收企业须按危险废物管理要求运营"
    ],
    batteryImpact: {
      level: "high",
      levelNote: "切断黑粉出口到非 OECD 国家的路径",
      segments: [
        "回收",
        "在欧设厂"
      ],
      compliance: [
        "在欧工厂的锂电池生产废料须按危险废物代码分类、储存、运输和交付处理"
      ],
      access: [
        "黑粉不能再出口到中国等非 OECD 国家提炼"
      ],
      support: [
        "欧洲本土湿法冶金和再生料产能需求上升"
      ],
      actions: [
        "2026 年 12 月前完成废料分类与处理合同调整",
        "评估在欧提炼产能或与欧洲回收企业合作"
      ]
    },
    council: [],
    milestones: [
      {
        date: "2025-03-05",
        kind: "secondary",
        label: "欧委会通过授权决定"
      },
      {
        date: "2026-12-09",
        kind: "apply",
        label: "新废物代码开始适用",
        verified: false
      }
    ]
  },
  {
    id: "ppwr",
    oeil: "2022/0396(COD)",
    nameZh: "包装与包装废物条例（PPWR）",
    shortZh: "包装与包装废物条例",
    category: "circular",
    relevance: "high",
    tags: [
      "运输包装",
      "可回收性",
      "重复使用",
      "包装 EPR"
    ],
    summaryZh: "条例 (EU) 2025/40，以直接适用的条例取代包装指令。所有包装须可回收（2030 年起分级要求），塑料包装设再生料最低含量，设定运输包装和托盘的重复使用目标，限制空隙率和过度包装，统一包装标签，并要求各国建立包装生产者责任延伸制度。",
    impactZh: [
      "电池和储能产品的运输包装、托盘、缓冲材料须满足可回收性和重复使用要求",
      "进口商在欧盟投放包装即承担包装 EPR 义务"
    ],
    batteryImpact: {
      level: "medium",
      levelNote: "影响电池产品的包装设计和物流成本",
      segments: [
        "对欧出口",
        "在欧设厂",
        "储能系统集成"
      ],
      compliance: [
        "2026-08-12 起包装须满足基本要求；进口商须在各国履行包装 EPR 登记与申报",
        "欧盟内运输使用的托盘、周转箱等运输包装 2030 年起须达到重复使用比例"
      ],
      access: [
        "不满足可回收性或标签要求的包装不得投放欧盟市场"
      ],
      support: [],
      actions: [
        "梳理出口包装材料与结构，按可回收性要求重新设计",
        "在欧仓储与工厂间物流推行可循环周转包装"
      ]
    },
    council: [
      {
        date: "2023-12-18",
        stage: "ga",
        label: "环境理事会达成总体方针",
        body: "环境理事会",
        verified: false
      },
      {
        date: "2024-03-04",
        stage: "deal",
        label: "理事会与议会达成临时协议",
        body: "比利时轮值主席国",
        verified: false
      }
    ],
    milestones: [
      {
        date: "2025-02-11",
        kind: "force",
        label: "条例生效"
      },
      {
        date: "2026-08-12",
        kind: "apply",
        label: "条例开始适用"
      },
      {
        date: "2030-01-01",
        kind: "deadline",
        label: "包装可回收性与运输包装重复使用目标",
        verified: false
      }
    ]
  },
  {
    id: "weee",
    oeil: "2008/0241(COD)",
    nameZh: "报废电子电气设备指令（WEEE）",
    shortZh: "WEEE 指令",
    category: "circular",
    relevance: "medium",
    tags: [
      "电子废物",
      "生产者责任",
      "储能系统",
      "逆变器"
    ],
    summaryZh: "指令 2012/19/EU（重订版）。电子电气设备的生产者须为其产品的报废回收承担责任：在各成员国登记、标注分类回收标识、承担收集处理费用，并满足收集率和回收率目标。电池本身由新电池法管理，但储能系统中的电子部件、逆变器、充电设备属于 WEEE 范围。欧委会已完成评估，计划借循环经济法修订。",
    impactZh: [
      "储能系统、逆变器、充电桩生产商须在各销售国履行 WEEE 登记与回收义务"
    ],
    batteryImpact: {
      level: "medium",
      levelNote: "影响储能系统、逆变器等电气设备的回收责任",
      segments: [
        "储能系统集成",
        "对欧出口"
      ],
      compliance: [
        "在每个销售国登记为 WEEE 生产者（非欧盟企业须指定授权代表），产品加贴回收标识，承担回收费用",
        "电池部分按新电池法履行 EPR，与 WEEE 分开登记"
      ],
      access: [
        "未完成 WEEE 登记的设备在多数成员国不得销售"
      ],
      support: [],
      actions: [
        "核对储能系统中哪些部件适用 WEEE、哪些适用新电池法",
        "跟踪循环经济法框架下的 WEEE 修订"
      ]
    },
    council: [],
    milestones: [
      {
        date: "2012-08-13",
        kind: "force",
        label: "指令生效"
      },
      {
        date: "2014-02-14",
        kind: "transpose",
        label: "成员国转化期限"
      }
    ]
  },
  {
    id: "weee-2024",
    oeil: "2023/0025(COD)",
    parent: "weee",
    nameZh: "WEEE 指令定向修订（光伏组件等）",
    shortZh: "WEEE 定向修订",
    category: "circular",
    relevance: "related",
    tags: [
      "光伏组件",
      "回溯责任"
    ],
    summaryZh: "指令 (EU) 2024/884，回应欧盟法院判决，修改光伏组件和 2018 年开放范围后新纳入设备的回收费用分担规则，取消对过去投放产品的回溯责任。",
    impactZh: [
      "光储一体产品中光伏组件的回收费用规则更清晰"
    ],
    batteryImpact: {
      level: "low",
      levelNote: "主要涉及光伏组件",
      segments: [
        "储能系统集成"
      ],
      compliance: [
        "光储一体产品中的光伏组件按修订后的规则承担回收费用"
      ],
      access: [],
      support: [],
      actions: []
    },
    council: [],
    milestones: [
      {
        date: "2025-10-09",
        kind: "transpose",
        label: "成员国转化期限"
      }
    ]
  },
  {
    id: "elv",
    oeil: "2023/0284(COD)",
    nameZh: "车辆设计循环性要求与报废车辆管理法规（ELV 法规）",
    shortZh: "报废车辆法规",
    category: "circular",
    relevance: "high",
    tags: ["循环设计", "再生塑料", "动力电池拆解"],
    summaryZh: "以“法规”取代报废车辆指令与 3R 型式认证指令，引入车辆循环设计要求、新车再生塑料最低含量，并规定报废车辆中动力电池与电机的拆除义务。",
    impactZh: [
      "报废车辆中 EV 电池须在处理前拆除，与新电池法回收体系衔接",
      "新车再生塑料含量要求将影响整车与零部件供应链"
    ],
    batteryImpact: {
      level: "medium",
      levelNote: "通过整车厂传导要求，影响动力电池设计与回收",
      segments: [
        "电芯/模组制造",
        "回收"
      ],
      compliance: [
        "整车须设计为动力电池可被拆除，报废车辆在处理前须拆下动力电池；整车厂会要求电池供应商提供拆解信息和配合设计"
      ],
      access: [
        "不满足整车厂循环设计要求的电池包，难以进入欧洲车型供应链"
      ],
      support: [
        "报废车辆电池集中拆除，为梯次利用和回收业务提供稳定原料"
      ],
      actions: [
        "在电池包设计中预留可拆卸结构并准备拆解说明",
        "评估在欧回收或梯次利用布局"
      ]
    },
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
    batteryImpact: {
      level: "high",
      levelNote: "电池与储能被列为净零技术，同时影响公共项目准入",
      segments: [
        "电芯/模组制造",
        "储能系统集成",
        "在欧设厂",
        "对欧出口"
      ],
      compliance: [
        "参与公共采购和可再生能源拍卖时，须提供可持续性、网络安全和供应链韧性方面的证明"
      ],
      access: [
        "可再生能源拍卖至少 30%（或每年 6GW）须适用非价格标准；若某技术来自单一第三国的供应超过 50%，该国产品会被扣分——中国储能和逆变器产品在这类招标中竞争力下降",
        "公共采购同样引入韧性评价"
      ],
      support: [
        "在欧电池厂可申请“净零战略项目”，许可时限缩短至 12 或 18 个月，并有优先行政处理",
        "可设立净零工业加速区和监管沙盒"
      ],
      actions: [
        "评估目标国家拍卖和采购中非价格标准的具体规则",
        "在欧建厂项目尽早申请战略项目认定"
      ]
    },
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
    batteryImpact: {
      level: "high",
      levelNote: "“欧盟制造”与外资条件直接决定中国电池企业在欧盟的市场空间",
      segments: [
        "电芯/模组制造",
        "储能系统集成",
        "BMS/EMS",
        "在欧设厂",
        "对欧出口"
      ],
      compliance: [
        "进入公共采购或补贴项目须证明电池及关键部件的欧盟原产地（提案按阶段扩展到电芯、BMS、正极材料等部件）"
      ],
      access: [
        "公共采购和补贴将倾向“欧盟制造”：提案要求储能电池系统源自欧盟，>1MWh 系统须使用欧盟制造的 BMS；电动车补贴分阶段要求电池部件在欧盟生产",
        "战略行业的大额外国直接投资可能被附加合资、技术转让、本地雇员等条件，影响中国企业在欧新建或扩建电池厂",
        "法德协议提出的电芯欧洲制造比例（10%→20%→70%）仍在谈判中，最终门槛决定进口电芯的空间"
      ],
      support: [
        "在欧生产的电池可享受“欧盟制造”带来的采购和补贴优势——已在欧设厂的企业受益"
      ],
      actions: [
        "测算不同“欧盟制造”比例下现有产品的合规差距",
        "评估欧洲工厂的本地化部件（BMS、正极材料）方案",
        "跟踪外资审查条件的最终文本，提前规划合资或技术合作结构"
      ]
    },
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
    id: "nzia-nonprice",
    oeil: "",
    parent: "nzia",
    secondary: true,
    act: {
      kind: "implementing",
      ref: "实施条例（2025-05-23 通过）",
      status: "adopted",
      statusNote: "条例编号待核实",
      basis: "净零工业法第 26 条"
    },
    nameZh: "可再生能源拍卖非价格标准实施条例",
    shortZh: "拍卖非价格标准",
    category: "industry",
    relevance: "high",
    tags: [
      "拍卖",
      "韧性标准",
      "网络安全",
      "单一来源依赖"
    ],
    summaryZh: "依据净零工业法第 26 条，规定可再生能源拍卖中必须适用的非价格标准：负责任商业行为、网络安全与数据安全、按时交付能力，以及韧性标准——若某净零技术或其主要部件来自单一第三国的供应超过 50%，该国产品在评标中处于不利地位。2025-12-30 起拍卖须适用。",
    impactZh: [
      "光伏、风电、储能等拍卖中，来自中国的主要部件可能被扣分"
    ],
    batteryImpact: {
      level: "high",
      levelNote: "直接影响中国储能和逆变器在欧洲拍卖项目中的竞争力",
      segments: [
        "储能系统集成",
        "对欧出口",
        "在欧设厂"
      ],
      compliance: [
        "投标时须提供网络安全、数据安全、负责任商业行为方面的证明文件"
      ],
      access: [
        "每年至少 30% 拍卖容量（或 6GW）须适用韧性标准；依赖度超过 50% 的国家（如中国）的产品处于不利地位"
      ],
      support: [
        "在欧生产的储能系统和部件在评标中更具优势"
      ],
      actions: [
        "研究重点国家拍卖规则中韧性标准的具体评分方式",
        "评估关键部件本地化以满足韧性要求"
      ]
    },
    council: [],
    milestones: [
      {
        date: "2025-05-23",
        kind: "secondary",
        label: "欧委会通过实施条例"
      },
      {
        date: "2025-12-30",
        kind: "apply",
        label: "拍卖非价格标准义务开始适用"
      }
    ]
  },
  {
    id: "fsr",
    oeil: "2021/0114(COD)",
    nameZh: "外国补贴条例（FSR）",
    shortZh: "外国补贴条例",
    category: "industry",
    relevance: "high",
    tags: [
      "外国补贴",
      "并购申报",
      "公共采购",
      "依职权调查"
    ],
    summaryZh: "条例 (EU) 2022/2560。欧委会可审查扭曲内部市场的外国补贴：营业额 ≥5 亿欧元、外国财政资助 ≥5000 万欧元的并购须事先申报；预估价值 ≥2.5 亿欧元的公共采购投标须申报外国财政资助；欧委会还可依职权调查。可采取承诺、禁止交易或排除投标等措施。曾用于调查中国企业参与罗马尼亚光伏电站招标（投标方随后退出）和风电设备。",
    impactZh: [
      "中国电池企业在欧并购、新建工厂获得的国内补贴可能被审查",
      "参与大型储能、电网公共采购项目须申报外国财政资助"
    ],
    batteryImpact: {
      level: "high",
      levelNote: "中国企业在欧投资和投标的重要审查工具",
      segments: [
        "在欧设厂",
        "储能系统集成",
        "对欧出口"
      ],
      compliance: [
        "达到门槛的并购和公共采购投标须向欧委会申报所获外国财政资助（含政府补贴、低息贷款、税收优惠）"
      ],
      access: [
        "欧委会可依职权调查在欧电池厂所获补贴，可能要求承诺或附加条件；公共采购中可被排除投标"
      ],
      support: [],
      actions: [
        "梳理集团所获国内补贴与融资支持，建立 FSR 申报材料库",
        "大型储能项目投标前评估是否达到申报门槛"
      ]
    },
    council: [
      {
        date: "2022-06-30",
        stage: "deal",
        label: "理事会与议会达成临时协议",
        body: "法国轮值主席国",
        verified: false
      }
    ],
    milestones: [
      {
        date: "2023-01-12",
        kind: "force",
        label: "条例生效"
      },
      {
        date: "2023-07-12",
        kind: "apply",
        label: "条例开始适用"
      },
      {
        date: "2023-10-12",
        kind: "apply",
        label: "并购与公共采购事先申报义务开始适用"
      }
    ]
  },
  {
    id: "forced-labour",
    oeil: "2022/0269(COD)",
    nameZh: "禁止强迫劳动产品条例",
    shortZh: "强迫劳动产品禁令",
    category: "supply",
    relevance: "high",
    tags: [
      "强迫劳动",
      "供应链",
      "市场禁入"
    ],
    summaryZh: "条例 (EU) 2024/3015。禁止在欧盟市场投放、提供或出口使用强迫劳动生产的产品（不论产地、不论企业规模）。主管机关和欧委会基于风险开展调查，查实后产品须撤出市场并处置。欧委会须发布指南并建立强迫劳动风险领域与产品数据库。",
    impactZh: [
      "石墨、锂、多晶硅等原材料供应链若被认定涉及强迫劳动，相关电池产品将被禁止销售"
    ],
    batteryImpact: {
      level: "high",
      levelNote: "适用于所有企业和产品，查实即禁售",
      segments: [
        "材料采购",
        "电芯/模组制造",
        "对欧出口"
      ],
      compliance: [
        "须能证明供应链不涉及强迫劳动，配合调查提供溯源信息"
      ],
      access: [
        "被认定涉及强迫劳动的产品须撤出欧盟市场，相关零部件替换后才能重新投放——对原料来自高风险地区的供应链构成直接风险"
      ],
      support: [],
      actions: [
        "对石墨、锂等原料开展到矿源的溯源核查",
        "跟踪欧委会风险领域与产品数据库"
      ]
    },
    council: [
      {
        date: "2024-01-26",
        stage: "coreper",
        label: "COREPER 通过理事会谈判授权",
        body: "COREPER II",
        verified: false
      },
      {
        date: "2024-03-05",
        stage: "deal",
        label: "理事会与议会达成临时协议",
        body: "比利时轮值主席国",
        verified: false
      }
    ],
    milestones: [
      {
        date: "2024-12-13",
        kind: "force",
        label: "条例生效"
      },
      {
        date: "2026-06-14",
        kind: "secondary",
        label: "欧委会发布指南与风险数据库的期限",
        verified: false
      },
      {
        date: "2027-12-14",
        kind: "apply",
        label: "条例开始适用"
      }
    ]
  },
  {
    id: "csddd",
    oeil: "2022/0051(COD)",
    nameZh: "企业可持续发展尽职调查指令（CSDDD）",
    shortZh: "CSDDD",
    category: "supply",
    relevance: "high",
    tags: [
      "尽职调查",
      "人权",
      "环境",
      "价值链"
    ],
    summaryZh: "指令 (EU) 2024/1760。要求大型企业识别、预防和减轻其自身运营、子公司及上游业务伙伴的人权与环境不利影响。经 Omnibus I（指令 (EU) 2026/470）大幅收窄范围并推迟适用：取消欧盟统一民事责任和气候转型计划义务，适用日推迟至 2029 年 7 月。",
    impactZh: [
      "与新电池法的电池尽调要求叠加，大型在欧企业须统一设计尽调体系"
    ],
    batteryImpact: {
      level: "medium",
      levelNote: "经 Omnibus I 收窄后只覆盖超大型企业",
      segments: [
        "在欧设厂",
        "材料采购"
      ],
      compliance: [
        "达到门槛的在欧企业（及在欧营业额达标的非欧盟企业）须开展价值链尽调；门槛经 Omnibus I 提高"
      ],
      access: [
        "欧洲客户（车企、能源企业）会把尽调要求传导给电池供应商"
      ],
      support: [],
      actions: [
        "对照新电池法尽调体系，评估是否需要扩展到 CSDDD 范围",
        "准备应对客户的尽调问卷"
      ]
    },
    council: [
      {
        date: "2022-12-01",
        stage: "ga",
        label: "竞争力理事会达成总体方针",
        body: "竞争力理事会"
      },
      {
        date: "2023-12-14",
        stage: "deal",
        label: "理事会与议会达成临时协议",
        body: "西班牙轮值主席国"
      }
    ],
    milestones: [
      {
        date: "2024-07-25",
        kind: "force",
        label: "指令生效"
      },
      {
        date: "2028-07-26",
        kind: "transpose",
        label: "成员国转化期限（经 Omnibus I 修订）"
      },
      {
        date: "2029-07-26",
        kind: "apply",
        label: "尽调义务开始适用（经 Omnibus I 修订）"
      }
    ]
  },
  {
    id: "omnibus-i",
    oeil: "2025/0045(COD)",
    parent: "csddd",
    nameZh: "Omnibus I：简化 CSRD 与 CSDDD",
    shortZh: "Omnibus I 简化",
    category: "supply",
    relevance: "medium",
    tags: [
      "Omnibus 简化",
      "CSRD",
      "CSDDD"
    ],
    summaryZh: "指令 (EU) 2026/470，2026-02-26 公报发布，2026-03-18 生效。大幅收窄企业可持续发展报告指令（CSRD）和 CSDDD 的适用范围，以更严格的累计门槛取代“三选二”规则；CSDDD 删除欧盟统一民事责任和气候转型计划义务。CSRD 相关修改的转化期限为 2027-03-19，CSDDD 为 2028-07-26。",
    impactZh: [
      "多数中型在欧子公司不再需要 CSRD 报告或 CSDDD 尽调"
    ],
    batteryImpact: {
      level: "medium",
      levelNote: "降低在欧子公司的报告与尽调负担",
      segments: [
        "在欧设厂"
      ],
      compliance: [
        "按新门槛重新判断在欧子公司是否仍需 CSRD 报告和 CSDDD 尽调（具体员工和营业额门槛待核实）"
      ],
      access: [],
      support: [
        "报告和尽调负担减轻"
      ],
      actions: [
        "按新门槛复核 CSRD 报告计划"
      ]
    },
    council: [
      {
        date: "2025-06-23",
        stage: "coreper",
        label: "理事会通过谈判授权",
        body: "COREPER I",
        verified: false
      },
      {
        date: "2025-12-08",
        stage: "deal",
        label: "理事会与议会达成临时协议",
        body: "丹麦轮值主席国",
        verified: false
      }
    ],
    milestones: [
      {
        date: "2026-03-18",
        kind: "force",
        label: "指令生效"
      },
      {
        date: "2027-03-19",
        kind: "transpose",
        label: "CSRD 相关修改转化期限"
      },
      {
        date: "2028-07-26",
        kind: "transpose",
        label: "CSDDD 相关修改转化期限"
      }
    ]
  },
  {
    id: "gpsr",
    oeil: "2021/0170(COD)",
    nameZh: "通用产品安全条例（GPSR）",
    shortZh: "通用产品安全条例",
    category: "safety",
    relevance: "medium",
    tags: [
      "消费品安全",
      "召回",
      "线上销售",
      "移动电源"
    ],
    summaryZh: "条例 (EU) 2023/988，取代通用产品安全指令。适用于消费品（含移动电源、便携储能、户用储能等消费类电池产品），要求安全评估、技术文件、可追溯信息和欧盟责任人，线上市场负有配合义务，事故须通过 Safety Business Gateway 报告，并规范召回程序。",
    impactZh: [
      "面向消费者销售的电池产品须有欧盟责任人，并满足标签、追溯与事故报告要求"
    ],
    batteryImpact: {
      level: "medium",
      levelNote: "影响移动电源、便携储能等消费类电池产品",
      segments: [
        "对欧出口",
        "储能系统集成"
      ],
      compliance: [
        "消费类电池产品须有欧盟境内责任经营者，产品和包装标注制造商与责任人信息",
        "发生安全事故须通过欧盟平台报告，召回须按规定通知消费者并提供补救"
      ],
      access: [
        "在亚马逊等线上平台销售时，平台会要求提供责任人和安全信息，否则下架"
      ],
      support: [],
      actions: [
        "核对消费类产品的欧盟责任人与标签信息",
        "建立事故报告与召回流程"
      ]
    },
    council: [
      {
        date: "2022-11-28",
        stage: "deal",
        label: "理事会与议会达成临时协议",
        body: "捷克轮值主席国",
        verified: false
      }
    ],
    milestones: [
      {
        date: "2023-06-12",
        kind: "force",
        label: "条例生效"
      },
      {
        date: "2024-12-13",
        kind: "apply",
        label: "条例开始适用"
      }
    ]
  },
  {
    id: "rohs",
    oeil: "2008/0240(COD)",
    nameZh: "电子电气设备有害物质限制指令（RoHS）",
    shortZh: "RoHS 指令",
    category: "safety",
    relevance: "medium",
    tags: [
      "有害物质",
      "BMS",
      "变流器",
      "CE"
    ],
    summaryZh: "指令 2011/65/EU（RoHS 2），限制电子电气设备中铅、汞、镉、六价铬、多溴联苯、多溴二苯醚及四种邻苯二甲酸酯的含量，作为 CE 标志的前提。电池本身不适用 RoHS（由新电池法管理），但储能系统中的 BMS、变流器、线缆和充电设备须符合。",
    impactZh: [
      "储能系统中的电子部件须提供 RoHS 符合性文件"
    ],
    batteryImpact: {
      level: "medium",
      levelNote: "储能系统的电子部件须符合",
      segments: [
        "储能系统集成",
        "BMS/EMS",
        "对欧出口"
      ],
      compliance: [
        "储能系统、逆变器、充电设备中的电子部件须满足有害物质限值，并纳入技术文件和符合性声明"
      ],
      access: [
        "不符合 RoHS 的电子电气设备不能加贴 CE 标志"
      ],
      support: [],
      actions: [
        "核对储能系统电子部件供应商的 RoHS 检测报告"
      ]
    },
    council: [],
    milestones: [
      {
        date: "2011-07-21",
        kind: "force",
        label: "指令生效"
      },
      {
        date: "2013-01-02",
        kind: "transpose",
        label: "成员国转化期限"
      }
    ]
  },
  {
    id: "pfas",
    oeil: "",
    secondary: true,
    act: {
      kind: "restriction",
      ref: "REACH 附件十七限制提案（PFAS 通用限制）",
      status: "draft",
      url: "https://echa.europa.eu/-/echa-to-consult-on-pfas-draft-opinion-in-spring-2026",
      statusNote: "RAC 已出意见；SEAC 最终意见预计 2026 年底",
      basis: "REACH 第 68–73 条"
    },
    nameZh: "PFAS（全氟和多氟烷基物质）通用限制",
    shortZh: "PFAS 通用限制",
    category: "safety",
    relevance: "high",
    tags: [
      "PFAS",
      "PVDF",
      "电解液",
      "REACH"
    ],
    summaryZh: "五国于 2023 年提交、按 REACH 限制程序推进的 PFAS 通用限制提案，覆盖约一万种物质。ECHA 风险评估委员会（RAC）于 2026-03-02 通过意见，拒绝对含氟聚合物整体豁免；社会经济分析委员会（SEAC）2026-03-10 通过意见草案并征求意见至 05-25，未接受将含氟聚合物排除在范围外，但支持对无替代品的特定用途给予有针对性的豁免，最终意见预计 2026 年底，之后由欧委会和 REACH 委员会决定。欧委会 2026-04 宣布不再提出 REACH 全面修订，但明确 PFAS 限制不受影响。",
    impactZh: [
      "PVDF 粘结剂、含氟电解液添加剂和隔膜涂层可能受限，取决于电池用途能否获得豁免及过渡期长短"
    ],
    batteryImpact: {
      level: "high",
      levelNote: "PVDF 等含氟材料广泛用于电极粘结剂和电解液",
      segments: [
        "电芯/模组制造",
        "材料采购",
        "在欧设厂"
      ],
      compliance: [
        "若限制通过，在欧生产和投放的电池中含 PFAS 材料须在过渡期内替代，或依据豁免条件使用并申报"
      ],
      access: [
        "没有获得豁免的含 PFAS 电池部件可能被禁止在欧盟市场使用"
      ],
      support: [],
      actions: [
        "盘点电芯中 PFAS 材料的用途和用量（粘结剂、电解液、隔膜、密封件）",
        "评估无氟粘结剂等替代方案的研发进度",
        "通过行业协会参与 SEAC 意见征求和后续欧委会决策"
      ]
    },
    council: [],
    milestones: [
      {
        date: "2026-03-02",
        kind: "secondary",
        label: "ECHA 风险评估委员会（RAC）通过意见"
      },
      {
        date: "2026-05-25",
        kind: "secondary",
        label: "SEAC 意见草案征求意见截止"
      },
      {
        date: "2026-12-31",
        kind: "secondary",
        label: "SEAC 最终意见（预计）",
        verified: false
      }
    ]
  },
  {
    id: "lithium-clp",
    oeil: "",
    secondary: true,
    act: {
      kind: "clp",
      ref: "CLP 第 24 次适应技术进步修订（ATP）草案",
      status: "draft",
      statusNote: "2025-11-27 向 WTO 通报，原计划 2026 年第一季度通过，最新状态待核实",
      basis: "CLP 条例 (EC) 1272/2008 附件六"
    },
    nameZh: "锂盐有害性分类（碳酸锂、氢氧化锂、氯化锂）",
    shortZh: "锂盐有害性分类",
    category: "safety",
    relevance: "high",
    tags: [
      "碳酸锂",
      "氢氧化锂",
      "生殖毒性",
      "CLP"
    ],
    summaryZh: "ECHA 风险评估委员会 2021 年建议将碳酸锂、氯化锂、氢氧化锂统一分类为生殖毒性 1A 类，并在复审后维持该意见。欧委会在 CLP 第 24 次适应技术进步修订草案中纳入这三种锂盐，2025-11-27 向 WTO 通报，原计划 2026 年第一季度通过，是否已通过尚待核实。",
    impactZh: [
      "锂盐被列为 1A 类生殖毒性物质后，可能触发 REACH 下的后续管控和职业健康要求，增加在欧正极材料与电芯生产成本"
    ],
    batteryImpact: {
      level: "medium",
      levelNote: "影响在欧正极材料、电芯工厂的职业健康与合规成本",
      segments: [
        "材料采购",
        "在欧设厂"
      ],
      compliance: [
        "分类生效后，锂盐须按 1A 类生殖毒性物质标签和包装，工厂须加强职业暴露控制"
      ],
      access: [
        "可能被纳入 REACH 授权或限制候选，长期影响在欧使用"
      ],
      support: [],
      actions: [
        "评估在欧工厂锂盐操作环节的暴露控制",
        "跟踪 ATP 通过与适用日期"
      ]
    },
    council: [],
    milestones: [
      {
        date: "2025-11-27",
        kind: "secondary",
        label: "ATP 草案向 WTO 通报"
      }
    ]
  },
  {
    id: "espr",
    oeil: "2022/0095(COD)",
    nameZh: "可持续产品生态设计法规（ESPR）",
    shortZh: "生态设计法规",
    category: "circular",
    relevance: "high",
    tags: ["数字产品护照", "耐用性", "钢铁铝"],
    summaryZh: "将生态设计框架从能源相关产品扩展至几乎所有实物产品，设定耐用性、可修复性、再生料含量、碳/环境足迹等要求，并建立数字产品护照（DPP）。电池的产品要求在新电池法中单独规定，但 DPP 体系与电池护照共用。",
    impactZh: [
      "数字产品护照基础设施与电池护照互通",
      "首个工作计划优先涵盖钢铁、铝等电池与能源装备上游材料"
    ],
    batteryImpact: {
      level: "low",
      levelNote: "电池的产品要求由新电池法单独规定，ESPR 主要通过数字产品护照体系间接影响",
      segments: [
        "材料采购"
      ],
      compliance: [
        "电池不直接适用 ESPR 产品要求；但数字产品护照的技术标准与电池护照共用，数据系统需兼容"
      ],
      access: [
        "钢、铝等上游材料未来的生态设计要求会传导到电池壳体和结构件采购"
      ],
      support: [],
      actions: [
        "电池护照系统按 ESPR 数字产品护照的通用标准设计，避免重复建设"
      ]
    },
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
    batteryImpact: {
      level: "medium",
      levelNote: "为储能创造收益机制，主要影响储能业务的市场需求",
      segments: [
        "储能系统集成"
      ],
      compliance: [],
      access: [],
      support: [
        "成员国须评估灵活性需求，可设立针对储能和需求响应的非化石灵活性支持计划，直接拉动储能需求",
        "长期购电协议（PPA）和双向差价合约推广，有利于储能项目锁定收益、提高融资能力"
      ],
      actions: [
        "跟踪重点国家的灵活性需求评估和储能支持计划，提前准备投标"
      ]
    },
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
    batteryImpact: {
      level: "low",
      levelNote: "主要利好户用和分布式储能市场",
      segments: [
        "储能系统集成"
      ],
      compliance: [],
      access: [],
      support: [
        "能源共享（含储能共享）获得法律地位，带动户用、社区储能需求"
      ],
      actions: [
        "关注各国转化情况，评估户用储能产品机会"
      ]
    },
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
    batteryImpact: {
      level: "low",
      levelNote: "只影响自营参与批发电力交易的储能电站",
      segments: [
        "储能系统集成"
      ],
      compliance: [
        "如企业自营储能电站并参与欧盟批发电力市场，须履行交易报告义务"
      ],
      access: [],
      support: [],
      actions: [
        "自营电站业务须确认是否落入报告范围"
      ]
    },
    council: [],
    milestones: [{ date: "2024-05-07", kind: "force", label: "条例生效" }]
  },
  {
    id: "dr-nc",
    oeil: "",
    parent: "emd-reg",
    secondary: true,
    act: {
      kind: "implementing",
      ref: "网络规范（委员会条例，尚未通过）",
      status: "draft",
      url: "https://www.acer.europa.eu/news/new-network-code-demand-response-will-further-advance-energy-transition",
      statusNote: "ACER 2025-03-07 提交建议；截至 2026 年中尚未通过",
      basis: "电力市场条例 (EU) 2019/943 第 59 条"
    },
    nameZh: "需求响应网络规范（NC DR）",
    shortZh: "需求响应网络规范",
    category: "power",
    relevance: "high",
    tags: [
      "需求响应",
      "储能",
      "聚合商",
      "灵活性市场"
    ],
    summaryZh: "依据电力市场条例第 59 条制定，由 ENTSO-E 与欧盟配电运营商实体联合起草、ACER 修订后于 2025-03-07 提交欧委会。统一需求响应、聚合、储能参与平衡市场和配电网灵活性服务的规则，并修订平衡导则、系统运行导则和需求连接网络规范。截至 2026 年中尚未通过。",
    impactZh: [
      "统一储能和聚合商参与各国平衡与灵活性市场的准入规则，打开储能收益空间"
    ],
    batteryImpact: {
      level: "medium",
      levelNote: "为储能参与欧洲灵活性市场统一规则",
      segments: [
        "储能系统集成",
        "BMS/EMS"
      ],
      compliance: [
        "储能系统参与灵活性服务须满足资格预审、计量和数据交换要求，EMS 需支持相应接口"
      ],
      access: [],
      support: [
        "统一规则降低储能进入各国平衡市场的门槛，扩大工商业和户用储能的收益来源"
      ],
      actions: [
        "跟踪网络规范通过时间",
        "评估 EMS 对资格预审和数据交换要求的支持"
      ]
    },
    council: [],
    milestones: [
      {
        date: "2025-03-07",
        kind: "secondary",
        label: "ACER 向欧委会提交建议"
      }
    ]
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
    batteryImpact: {
      level: "low",
      levelNote: "对电池企业几乎无直接影响",
      segments: [],
      compliance: [],
      access: [],
      support: [
        "氢能与电池在长时储能领域既互补又竞争，可作为市场研判参考"
      ],
      actions: []
    },
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
    batteryImpact: {
      level: "low",
      levelNote: "对电池企业几乎无直接影响",
      segments: [],
      compliance: [],
      access: [],
      support: [],
      actions: []
    },
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
    batteryImpact: {
      level: "medium",
      levelNote: "储能有望纳入跨境基础设施规划和资金",
      segments: [
        "储能系统集成"
      ],
      compliance: [],
      access: [],
      support: [
        "储能项目有望更多纳入共同利益项目（PCI）清单，获得欧盟资金（CEF）与快速许可"
      ],
      actions: [
        "关注共同利益项目清单评选，寻找大型储能项目合作机会"
      ]
    },
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
    batteryImpact: {
      level: "medium",
      levelNote: "缩短储能项目许可与并网时间，加快需求释放",
      segments: [
        "储能系统集成"
      ],
      compliance: [],
      access: [],
      support: [
        "电池储能项目许可和并网时限缩短，“压倒性公共利益”推定和默示批准机制加快项目落地",
        "并网排队规则可能从先到先得改为按项目成熟度排序，有利于成熟项目"
      ],
      actions: [
        "跟踪三方谈判结果，据此调整重点国家储能项目开发节奏"
      ]
    },
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
    batteryImpact: {
      level: "medium",
      levelNote: "含对电池管理系统数据访问的直接义务，并利好储能部署",
      segments: [
        "BMS/EMS",
        "储能系统集成",
        "电芯/模组制造"
      ],
      compliance: [
        "第 20a 条要求户用和工业电池以及电动车的制造商实时开放电池管理系统（BMS）基本数据（健康状态、充电状态、功率设定等），供用户和第三方使用；各国转化后执行"
      ],
      access: [
        "BMS 不开放数据接口的产品在部分国家可能无法满足要求"
      ],
      support: [
        "与可再生能源同址的储能设施适用加速许可",
        "交通领域可再生电力计入目标，利好电动车与充电需求"
      ],
      actions: [
        "检查 BMS 数据接口与访问权限设计，跟踪重点国家的转化细则"
      ]
    },
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
    batteryImpact: {
      level: "low",
      levelNote: "只影响在欧盟运营的工厂",
      segments: [
        "在欧设厂"
      ],
      compliance: [
        "在欧工厂按能耗规模承担义务：较高能耗企业须实施能源管理体系，其余须定期开展能源审计（据第 11 条，具体门槛待核实）"
      ],
      access: [],
      support: [],
      actions: [
        "在欧工厂评估能耗水平，提前建立能源管理体系（如 ISO 50001）"
      ]
    },
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
    batteryImpact: {
      level: "low",
      levelNote: "间接带动户用储能和充电需求",
      segments: [
        "储能系统集成"
      ],
      compliance: [],
      access: [],
      support: [
        "新建和大修建筑须配置充电点和预布线，并逐步引入屋顶光伏义务，带动户用储能需求"
      ],
      actions: [
        "关注各国转化进度，评估户用光储一体产品机会"
      ]
    },
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
    batteryImpact: {
      level: "high",
      levelNote: "欧盟动力电池需求的核心驱动",
      segments: [
        "电芯/模组制造",
        "对欧出口",
        "在欧设厂"
      ],
      compliance: [],
      access: [
        "车企的电动化节奏决定动力电池订单，目标调整（见 2035 修订）会直接改变需求曲线"
      ],
      support: [
        "2030 年 -55%、2035 年大幅减排的目标保证了欧洲电动车和动力电池的长期需求"
      ],
      actions: [
        "按目标调整情况更新欧洲动力电池需求预测和产能规划"
      ]
    },
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
    batteryImpact: {
      level: "medium",
      levelNote: "改变 2025–2027 年动力电池需求节奏",
      segments: [
        "电芯/模组制造",
        "对欧出口"
      ],
      compliance: [],
      access: [
        "三年平均合规缓解车企短期压力，2025–2026 年的电动车推广节奏可能放缓，订单预期需下调"
      ],
      support: [],
      actions: [
        "与欧洲车企客户核对 2025–2027 年订单节奏"
      ]
    },
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
    batteryImpact: {
      level: "high",
      levelNote: "决定 2035 年后欧洲动力电池需求规模，并与“欧洲制造”挂钩",
      segments: [
        "电芯/模组制造",
        "对欧出口",
        "在欧设厂"
      ],
      compliance: [],
      access: [
        "2035 年目标从 100% 降至 90%（议会讨论中的方案更低），保留插混和增程空间，纯电车占比与电池需求预期下调",
        "欧盟制造的小型电动车可获超级积分，使用欧洲生产电池的车型更有优势",
        "法德协议提出购车补贴和公共采购仅限欧洲制造车辆，并逐步提高电池欧洲制造比例"
      ],
      support: [
        "“汽车一揽子”同时推出“电池助推器”战略，支持欧洲电池生产（在欧工厂可关注）"
      ],
      actions: [
        "分情景（90%、87.5% 等）测算欧洲动力电池需求",
        "评估插混和增程电池产品线的机会",
        "跟踪电池助推器的资金和申请条件"
      ]
    },
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
    tags: ["充电桩", "TEN-T", "重卡充电", "加氢站", "岸电", "支付与价格透明", "AFIR 审查"],
    summaryZh: "取代 2014 年替代燃料基础设施指令（AFID），以直接适用的“条例”对成员国设定强制性目标：按车队规模的充电功率目标（每辆纯电乘用车 1.3kW、每辆插混 0.8kW），TEN-T 核心网/综合网沿线快充站间距与站点功率要求，重型车辆充电与加氢站目标，以及港口岸电和机场地面供电要求；同时规定刷卡即充（ad hoc）、价格透明、数据开放与智能充电/双向充电技术要求。条例第 24 条要求欧委会于 2026 年底前完成审查，欧委会已于 2026 年 3 月启动证据征集。",
    impactZh: [
      "快充与重卡兆瓦级充电网络建设带动大功率充电设备与站端储能（削峰、电网容量受限场景）需求",
      "新建 ≥50kW 充电桩须支持刷卡支付，存量 TEN-T 沿线 ≥50kW 桩须在 2027 年前改造——充电桩硬件与支付模块的合规窗口",
      "数据开放与智能充电、V2G 相关技术要求为车网互动和储能参与灵活性市场奠定基础",
      "2026 年审查可能调整目标（成员国要求更多灵活性，行业呼吁维持目标），关注重卡充电和岸电目标的变化"
    ],
    batteryImpact: {
      level: "medium",
      levelNote: "通过充电网络建设带动需求，充电桩配储受益",
      segments: [
        "储能系统集成"
      ],
      compliance: [
        "如企业生产充电设备：新建 ≥50kW 公共充电桩须支持刷卡支付，并满足数据和智能充电要求"
      ],
      access: [],
      support: [
        "快充和重卡兆瓦级充电网络建设，带动站端储能（削峰、缓解电网容量不足）需求",
        "2026 年审查结果将决定目标是维持还是放松"
      ],
      actions: [
        "开发充电站配储方案",
        "跟踪 2026 年底的 AFIR 审查结果"
      ]
    },
    council: [
      { date: "2022-06-02", stage: "ga", label: "交通理事会达成总体方针", body: "交通理事会" },
      { date: "2023-03-28", stage: "deal", label: "理事会与议会达成临时协议", body: "瑞典轮值主席国" }
    ],
    tracking: {
      asOf: "2026-05-31", source: "欧委会 Have Your Say / 行业公开资料",
      url: "https://ec.europa.eu/info/law/better-regulation/have-your-say_en",
      items: [
        { date: "2026-03-23", lane: "commission", text: "欧委会就 AFIR 审查发布证据征集（Call for evidence），重点评估目标是否仍然适当，尤其是重型车辆充电基础设施，以及港口岸电与航空" },
        { date: "2026-12-31", lane: "commission", text: "AFIR 审查报告（第 24 条），可能附带修订提案", planned: true }
      ],
      outlook: "2025 年 12 月十个成员国要求在完成目标上获得更多灵活性；Eurelectric、充电行业等主张“完善而非推倒”。审查结果预计 2026 年第四季度发布，若提出修订提案，将作为本条下的新程序加入。"
    },
    milestones: [
      { date: "2023-10-12", kind: "force", label: "法规生效" },
      { date: "2024-04-13", kind: "apply", label: "法规开始适用；新建 ≥50kW 公共充电桩须支持刷卡/非接触支付" },
      { date: "2025-12-31", kind: "deadline", label: "TEN-T 核心网每 60km 一处快充站（站点 ≥400kW，含至少 1 个 ≥150kW 充电桩）" },
      { date: "2026-12-31", kind: "review", label: "欧委会完成 AFIR 审查（第 24 条）" },
      { date: "2027-01-01", kind: "deadline", label: "TEN-T 沿线存量 ≥50kW 公共充电桩完成刷卡支付改造" },
      { date: "2027-12-31", kind: "deadline", label: "TEN-T 核心网快充站功率提高至 ≥600kW（含至少 2 个 ≥150kW 充电桩）", verified: false },
      { date: "2030-12-31", kind: "deadline", label: "TEN-T 核心网每 60km 重卡充电站（≥3600kW）；核心网每 200km 及城市节点设加氢站", verified: false }
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
    batteryImpact: {
      level: "medium",
      levelNote: "电池本身不在征收范围内，但在欧工厂的钢铝原料成本上升",
      segments: [
        "在欧设厂",
        "材料采购"
      ],
      compliance: [
        "在欧工厂进口钢、铝（壳体、结构件、箔材）须通过授权申报人申报并购买 CBAM 证书（2026 年起正式征收）"
      ],
      access: [
        "电池目前不是 CBAM 产品；欧委会正在评估把范围扩展到下游产品，需关注是否涉及电池或电池部件（待核实）"
      ],
      support: [],
      actions: [
        "测算在欧工厂进口钢铝的 CBAM 成本，评估改为欧盟内采购或采购低碳铝",
        "跟踪下游产品扩围进展"
      ]
    },
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
    batteryImpact: {
      level: "low",
      levelNote: "降低小批量进口的合规负担",
      segments: [
        "在欧设厂",
        "材料采购"
      ],
      compliance: [
        "每年进口量 50 吨以下的进口商免除 CBAM 义务；证书出售推迟到 2027 年"
      ],
      access: [],
      support: [],
      actions: [
        "小批量进口钢铝的在欧工厂可评估是否适用豁免"
      ]
    },
    council: [],
    milestones: []
  },
  {
    id: "cbam-downstream",
    oeil: "2025/0419(COD)",
    parent: "cbam",
    nameZh: "CBAM 扩展至下游产品与反规避",
    shortZh: "CBAM 下游扩围",
    category: "carbon",
    relevance: "high",
    tags: [
      "下游产品",
      "钢铝制品",
      "反规避"
    ],
    summaryZh: "2025-12-17 提出（COM(2025) 989），拟自 2028-01-01 起将 CBAM 扩展至约 180 种钢铝密集型下游产品，并增加反规避措施、修改进口电力隐含排放的计算方法。理事会于 2026-06-12 达成总体方针，议会立场预计 2026 年 9 月全会形成，之后进入三方谈判。",
    impactZh: [
      "需关注电池壳体、结构件、模组框架等钢铝部件是否在下游产品清单中"
    ],
    batteryImpact: {
      level: "medium",
      levelNote: "可能把电池用钢铝部件纳入征收范围",
      segments: [
        "在欧设厂",
        "材料采购",
        "对欧出口"
      ],
      compliance: [
        "若相关部件被纳入，进口时须申报隐含排放并购买 CBAM 证书"
      ],
      access: [
        "进口钢铝部件成本上升，削弱进口部件相对欧盟本地采购的价格优势"
      ],
      support: [],
      actions: [
        "对照下游产品清单（CN 编码）核查电池相关钢铝部件",
        "测算 2028 年起的潜在成本"
      ]
    },
    council: [
      {
        date: "2026-06-12",
        stage: "ga",
        label: "理事会达成总体方针",
        body: "理事会"
      }
    ],
    milestones: [
      {
        date: "2028-01-01",
        kind: "apply",
        label: "下游产品纳入 CBAM（拟议）",
        verified: false
      }
    ]
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
    batteryImpact: {
      level: "medium",
      levelNote: "碳价推高在欧工厂电价，同时为欧盟电池补贴提供资金来源",
      segments: [
        "在欧设厂"
      ],
      compliance: [
        "电池制造一般不直接纳入 ETS（除非厂内有大型燃烧装置），主要通过电价间接承担碳成本"
      ],
      access: [],
      support: [
        "ETS 收入资助的创新基金曾设立电动车电池制造专项招标，是在欧电池项目的重要资金来源",
        "ETS2 推高燃油成本，间接利好电动车需求"
      ],
      actions: [
        "在欧工厂签订长期绿电 PPA 对冲碳价风险",
        "跟踪创新基金电池相关招标"
      ]
    },
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
    batteryImpact: {
      level: "medium",
      levelNote: "影响 2030 年后的碳价与工业电价，并新增资金工具",
      segments: [
        "在欧设厂"
      ],
      compliance: [],
      access: [],
      support: [
        "新设工业脱碳银行（2031–2040，约 1000 亿欧元），之前以 ETS 投资助推器过渡，可能成为电池项目的新资金来源",
        "间接成本补偿延续，需确认电池制造是否在补偿行业名单内（待核实）",
        "减排因子放缓有助于抑制 2030 年后碳价，降低在欧工厂电价风险"
      ],
      actions: [
        "跟踪工业脱碳银行的设计和申请条件"
      ]
    },
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
  },
  {
    id: "ev-duties",
    oeil: "",
    secondary: true,
    act: {
      kind: "trade",
      ref: "实施条例 (EU) 2024/2754",
      status: "adopted",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=OJ:L_202402754",
      basis: "反补贴基本条例 (EU) 2016/1037"
    },
    nameZh: "对中国产纯电动车征收最终反补贴税",
    shortZh: "对华电动车反补贴税",
    category: "carbon",
    relevance: "high",
    tags: [
      "反补贴",
      "电动车",
      "贸易救济"
    ],
    summaryZh: "实施条例 (EU) 2024/2754，2024-10-30 起对中国产纯电动乘用车征收为期五年的最终反补贴税：比亚迪 17.0%、吉利 18.8%、上汽 35.3%、特斯拉（上海）7.8%，其他合作企业 20.7%，非合作企业 35.3%（在 10% 普通关税之上）。行业组织呼吁对电池供应链另行发起反补贴调查。",
    impactZh: [
      "整车出口欧洲成本上升，推动中国车企和电池企业在欧本地化",
      "电池目前不在征税范围内，但行业呼吁对电芯、正负极材料另行调查"
    ],
    batteryImpact: {
      level: "medium",
      levelNote: "通过整车传导影响动力电池出口，并推动在欧本地化",
      segments: [
        "对欧出口",
        "在欧设厂"
      ],
      compliance: [],
      access: [
        "搭载中国电池的中国产电动车在欧洲价格竞争力下降，间接影响动力电池出口",
        "存在对电池及材料另行发起反补贴调查的风险"
      ],
      support: [
        "在欧设厂为欧洲车企或在欧建厂的中国车企配套的电池企业受益"
      ],
      actions: [
        "评估跟随客户在欧本地化配套",
        "跟踪是否对电池供应链发起新的贸易救济调查"
      ]
    },
    council: [],
    milestones: [
      {
        date: "2024-10-30",
        kind: "apply",
        label: "最终反补贴税开始征收（为期五年）"
      }
    ]
  },
  /* ================= 网络安全与人工智能 ================= */
  {
    id: "cra",
    oeil: "2022/0272(COD)",
    nameZh: "网络韧性法案（CRA）",
    shortZh: "网络韧性法",
    category: "digital",
    relevance: "high",
    tags: ["数字产品", "CE 标志", "漏洞报告", "SBOM", "BMS/EMS", "充电桩", "逆变器"],
    summaryZh: "条例 (EU) 2024/2847。首次对所有“含数字元素的产品”（联网硬件和软件）设定横向网络安全强制要求，作为 CE 标志的前提：安全设计与默认安全、漏洞处理、软件物料清单（SBOM）、支援期内免费安全更新（原则上不少于 5 年），以及对被积极利用漏洞和严重事件的 24 小时预警/72 小时报告义务。已有专门网络安全规则的产品（如整车型式认证、医疗器械）除外。",
    impactZh: [
      "联网的户用/工商业储能系统、BMS 与 EMS 软件、充电桩、逆变器等出口欧盟须满足 CRA 基本要求并在 DoC/CE 中体现",
      "2026 年 9 月 11 日起须向 ENISA 单一报告平台报告被积极利用的漏洞和严重安全事件——已在售产品同样适用",
      "需建立产品全生命周期漏洞管理、SBOM 和安全更新机制，支援期内持续承担义务",
      "部分产品类别（“重要产品”“关键产品”）需第三方合格评定；协调标准由 CEN/CENELEC/ETSI 制定中"
    ],
    batteryImpact: {
      level: "high",
      levelNote: "联网储能、BMS/EMS 软件属于“含数字元素的产品”，是 CE 标志的新前提",
      segments: [
        "储能系统集成",
        "BMS/EMS",
        "对欧出口"
      ],
      compliance: [
        "2026-09-11 起须向 ENISA 平台报告被积极利用的漏洞和严重安全事件（24 小时预警、72 小时报告），已在售的联网产品同样适用",
        "2027-12-11 起新上市产品须满足基本网络安全要求：安全设计、漏洞处理、SBOM、支援期内免费安全更新（原则上不少于 5 年）"
      ],
      access: [
        "不满足 CRA 的联网储能系统、带通信功能的 BMS/EMS 无法加贴 CE 标志，不能在欧盟销售",
        "专家组建议把光伏逆变器列为 II 类重要产品（须第三方合格评定），储能变流器和 EMS 是否被类似归类值得关注"
      ],
      support: [
        "满足 CRA 可作为产品安全卖点，应对欧洲客户对中国设备的网络安全疑虑"
      ],
      actions: [
        "梳理所有联网产品，确定是否属于重要或关键产品类别",
        "建立漏洞报告流程和 PSIRT 团队，2026-09 前就位",
        "建立 SBOM 和安全更新机制，确定支援期"
      ]
    },
    council: [
      { date: "2023-07-19", stage: "coreper", label: "COREPER 通过理事会谈判授权", body: "COREPER I" },
      { date: "2023-11-30", stage: "deal", label: "理事会与议会达成临时协议", body: "西班牙轮值主席国" }
    ],
    milestones: [
      { date: "2024-12-10", kind: "force", label: "法规生效" },
      { date: "2026-06-11", kind: "apply", label: "合格评定机构（公告机构）相关条款开始适用" },
      { date: "2026-09-11", kind: "deadline", label: "被积极利用的漏洞与严重事件报告义务适用（含已上市产品）" },
      { date: "2027-12-11", kind: "apply", label: "法规全面适用：新上市产品须满足基本网络安全要求" }
    ]
  },
  {
    id: "cra-important",
    oeil: "",
    parent: "cra",
    secondary: true,
    act: {
      kind: "implementing",
      ref: "实施条例 (EU) 2025/2392",
      status: "adopted",
      statusNote: "2025-11-28 通过",
      basis: "网络韧性法第 7 条"
    },
    nameZh: "网络韧性法重要产品与关键产品技术描述",
    shortZh: "CRA 重要产品清单",
    category: "digital",
    relevance: "high",
    tags: [
      "重要产品",
      "关键产品",
      "合格评定"
    ],
    summaryZh: "实施条例 (EU) 2025/2392，为网络韧性法附件三、四中的 28 类重要产品和关键产品给出精确技术描述，决定哪些产品须采用协调标准或第三方合格评定。欧委会能源专家组已建议将光伏逆变器列为 II 类重要产品。",
    impactZh: [
      "储能系统中的网关、路由、操作系统类软件等若属于重要产品，合格评定要求更严格"
    ],
    batteryImpact: {
      level: "high",
      levelNote: "决定联网储能部件的合格评定路径",
      segments: [
        "储能系统集成",
        "BMS/EMS",
        "对欧出口"
      ],
      compliance: [
        "对照技术描述判断产品是否属于 I 类、II 类重要产品或关键产品；II 类须第三方合格评定"
      ],
      access: [
        "若储能变流器、EMS 被归为 II 类（参照专家组对逆变器的建议），须经公告机构评定才能加贴 CE"
      ],
      support: [],
      actions: [
        "逐项对照 28 类技术描述，确定每个联网产品的合格评定路径",
        "提前预约公告机构产能"
      ]
    },
    council: [],
    milestones: [
      {
        date: "2025-11-28",
        kind: "secondary",
        label: "欧委会通过实施条例"
      }
    ]
  },
  {
    id: "nis2",
    oeil: "2020/0359(COD)",
    nameZh: "网络与信息系统安全指令（NIS2）",
    shortZh: "NIS2 指令",
    category: "digital",
    relevance: "high",
    tags: ["关键基础设施", "能源行业", "储能运营商", "充电运营商", "电气设备制造", "事件报告", "供应链安全"],
    summaryZh: "指令 (EU) 2022/2555，取代 NIS1。将网络安全义务扩展到 18 个行业的中大型实体：附件一“高度关键行业”包括电力（发电、输配电、聚合商、需求响应与储能运营商、充电点运营商）、油气、氢能等；附件二“其他关键行业”包括电气设备制造和汽车制造。实体须落实风险管理措施（含供应链安全），并履行 24 小时预警/72 小时通报/1 个月最终报告的事件报告义务；管理层对网络安全承担个人责任。电力行业另有《网络安全网络规范》（授权条例 (EU) 2024/1366）。",
    impactZh: [
      "中大型电池/电气设备制造商属于“重要实体”，储能电站运营商、聚合商、充电运营商属于能源行业“基本实体”",
      "须建立网络安全风险管理体系与事件报告流程，最高罚款为全球营业额 2%（基本实体）或 1.4%（重要实体）",
      "供应链安全要求向上游传导：客户（电网、能源企业）将在采购中要求设备供应商提供安全保证",
      "电力行业网络安全网络规范（NCCS）对跨境电力流相关实体提出额外风险评估要求"
    ],
    batteryImpact: {
      level: "high",
      levelNote: "中大型电池制造商在欧子公司属于“重要实体”，储能客户则是“基本实体”",
      segments: [
        "在欧设厂",
        "储能系统集成",
        "对欧出口"
      ],
      compliance: [
        "中大型电池/电气设备制造商（附件二）的在欧实体属于“重要实体”：须向所在国主管机关登记，落实网络安全风险管理（含供应链安全），并履行 24 小时预警、72 小时通报、1 个月最终报告的事件报告义务；管理层承担个人责任"
      ],
      access: [
        "储能电站运营商、聚合商、充电运营商属于能源行业“基本实体”，会在采购中要求设备供应商提供网络安全保证——直接影响储能产品的中标"
      ],
      support: [],
      actions: [
        "确认在欧子公司在各国的登记义务",
        "建立网络安全管理体系（如 ISO 27001），准备面向客户的供应链安全问卷答复材料"
      ]
    },
    council: [
      { date: "2021-12-03", stage: "ga", label: "电信理事会达成总体方针", body: "电信理事会" },
      { date: "2022-05-13", stage: "deal", label: "理事会与议会达成临时协议", body: "法国轮值主席国" }
    ],
    milestones: [
      { date: "2023-01-16", kind: "force", label: "指令生效" },
      { date: "2024-06-13", kind: "secondary", label: "电力行业网络安全网络规范（授权条例 (EU) 2024/1366）生效" },
      { date: "2024-10-17", kind: "transpose", label: "成员国转化期限" },
      { date: "2024-10-18", kind: "apply", label: "成员国措施开始适用；实施条例 (EU) 2024/2690（数字基础设施等风险管理措施）同步适用" },
      { date: "2025-04-17", kind: "deadline", label: "成员国确定基本实体与重要实体清单" }
    ]
  },
  {
    id: "nccs",
    oeil: "",
    parent: "nis2",
    secondary: true,
    act: {
      kind: "delegated",
      ref: "授权条例 (EU) 2024/1366",
      status: "adopted",
      basis: "电力市场条例 (EU) 2019/943 第 59 条"
    },
    nameZh: "电力行业跨境网络安全网络规范（NCCS）",
    shortZh: "电力网络安全网络规范",
    category: "digital",
    relevance: "medium",
    tags: [
      "电力行业",
      "网络安全",
      "风险评估"
    ],
    summaryZh: "授权条例 (EU) 2024/1366，2024-06-13 生效。为影响跨境电力流的实体规定网络安全风险评估、最低与高级安全控制、供应链安全和信息共享要求，按欧盟、区域和成员国三级周期性开展风险评估，与 NIS2 互补。",
    impactZh: [
      "被认定为高影响或关键影响实体的电网、大型储能运营商须落实额外安全控制，并向供应商提出要求"
    ],
    batteryImpact: {
      level: "medium",
      levelNote: "通过大型储能和电网客户传导安全要求",
      segments: [
        "储能系统集成",
        "BMS/EMS"
      ],
      compliance: [],
      access: [
        "高影响实体在采购中会要求储能设备满足规范规定的安全控制和供应链安全要求"
      ],
      support: [],
      actions: [
        "准备针对电网和大型储能客户的网络安全控制说明"
      ]
    },
    council: [],
    milestones: [
      {
        date: "2024-06-13",
        kind: "force",
        label: "授权条例生效"
      }
    ]
  },
  {
    id: "csa",
    oeil: "2017/0225(COD)",
    nameZh: "网络安全法（Cybersecurity Act，CSA）",
    shortZh: "网络安全法",
    category: "digital",
    relevance: "medium",
    tags: ["ENISA", "网络安全认证", "EUCC"],
    summaryZh: "条例 (EU) 2019/881。赋予欧盟网络安全局（ENISA）永久授权，并建立欧盟统一的 ICT 产品、服务和流程网络安全认证框架（如 EUCC 通用准则认证方案、5G、云服务方案）。认证总体上自愿，但其他法规可援引作为合规手段（如 CRA 下的推定符合）。2026 年 1 月欧委会提出“网络安全法 2.0”提案拟废止并取代本条例。",
    impactZh: [
      "欧盟网络安全认证可作为 CRA 合规的证明手段之一",
      "将被 2026/0011(COD) 新条例取代，关注过渡安排"
    ],
    batteryImpact: {
      level: "low",
      levelNote: "自愿性认证框架，可作为合规证明手段",
      segments: [
        "BMS/EMS"
      ],
      compliance: [],
      access: [],
      support: [
        "获得欧盟网络安全认证可用于证明符合 CRA 等法规"
      ],
      actions: [
        "关注将被网络安全法 2.0 取代后的认证过渡安排"
      ]
    },
    council: [],
    milestones: [
      { date: "2019-06-27", kind: "force", label: "法规生效" },
      { date: "2021-06-28", kind: "apply", label: "认证框架相关条款全面适用" }
    ]
  },
  {
    id: "csa2",
    oeil: "2026/0011(COD)",
    parent: "csa",
    nameZh: "网络安全法 2.0：ENISA、网络安全认证框架与 ICT 供应链安全",
    shortZh: "网络安全法 2.0",
    category: "digital",
    relevance: "high",
    tags: ["ICT 供应链安全", "高风险供应商", "关键 ICT 资产", "ENISA"],
    summaryZh: "2026 年 1 月 20 日提出，拟废止条例 (EU) 2019/881。核心新增内容是横向的 ICT 供应链安全框架：认定“构成网络安全关切的第三国”，据与这些国家的关系认定“高风险供应商”，并确定 NIS2 实体使用的“关键 ICT 资产”；被认定的高风险供应商可被排除在关键 ICT 组件采购、欧盟资助项目和欧盟网络安全认证之外，电信运营商移动网络须在最长 36 个月内逐步替换，违规最高罚款为全球营业额 7%。同时扩大 ENISA 职能，简化认证框架。",
    impactZh: [
      "能源行业是 NIS2 关键行业，若光伏逆变器、储能 EMS、充电桩管理平台等被列为“关键 ICT 资产”，来自被认定国家的供应商可能面临采购排除与逐步替换",
      "可能影响中国电池/储能企业参与欧盟能源项目、获得欧盟资金和认证",
      "高风险供应商的认定与关键资产清单将通过实施法案确定，需持续跟踪二级立法"
    ],
    batteryImpact: {
      level: "high",
      levelNote: "“高风险供应商”机制可能把中国能源设备排除在关键项目之外",
      segments: [
        "储能系统集成",
        "BMS/EMS",
        "对欧出口",
        "在欧设厂"
      ],
      compliance: [],
      access: [
        "若储能 EMS、变流器、逆变器等被列为 NIS2 实体使用的“关键 ICT 资产”，来自被认定国家的供应商可能被排除在采购、欧盟资助项目和网络安全认证之外，并面临逐步替换",
        "欧委会已于 2026-04 限制使用高风险供应商逆变器的光伏项目获得欧盟资金，类似做法可能延伸到储能",
        "专家组建议限制范围延伸到户用市场"
      ],
      support: [],
      actions: [
        "跟踪三方谈判中“高风险供应商”认定标准和关键资产清单",
        "评估本地化方案：欧洲数据存储、欧洲本地运维和软件控制权",
        "准备向客户和监管机构证明产品安全的材料"
      ]
    },
    council: [
      { date: "2026-02-02", stage: "wp", label: "网络问题横向工作组开始审议", body: "理事会网络问题横向工作组" },
      { date: "2026-05-22", stage: "wp", label: "轮值主席国提交进展报告", body: "理事会网络问题横向工作组", verified: false }
    ],
    milestones: []
  },
  {
    id: "ai-act",
    oeil: "2021/0106(COD)",
    nameZh: "人工智能法（AI Act）",
    shortZh: "人工智能法",
    category: "digital",
    relevance: "high",
    tags: ["高风险 AI", "关键基础设施", "通用 AI 模型", "AI 素养"],
    summaryZh: "条例 (EU) 2024/1689，全球首部综合性人工智能立法，按风险分级管理：禁止不可接受风险的 AI 实践；高风险 AI 系统（附件三列举的用途，以及附件一产品法规所涵盖产品中的 AI 安全组件）须满足风险管理、数据治理、技术文档、人工监督、准确性与网络安全等要求并进行合格评定；通用 AI 模型提供者承担透明与版权义务。高风险义务适用日期已由 AI 数字简化条例 (EU) 2026/1744 推迟。",
    impactZh: [
      "用于电力、供热等关键基础设施管理和运行的 AI 安全组件属于附件三高风险——电网调度、储能电站 EMS 中的 AI 功能需评估是否落入",
      "工厂中用于质检、设备控制的 AI 若构成机械等附件一产品的安全组件，适用附件一高风险义务（2028 年 8 月起）",
      "2025 年 2 月起企业须确保员工具备 AI 素养；使用通用 AI 模型的企业需关注上游提供者的合规信息"
    ],
    batteryImpact: {
      level: "medium",
      levelNote: "主要影响储能 EMS 中的 AI 功能和在欧工厂使用的 AI",
      segments: [
        "BMS/EMS",
        "在欧设厂"
      ],
      compliance: [
        "2025-02-02 起，在欧实体须确保使用 AI 的员工具备 AI 素养",
        "用作电力供应关键基础设施安全组件的 AI 属于附件三高风险（2027-12-02 起适用）：储能 EMS 中承担安全功能的 AI 需评估",
        "工厂中作为机械安全组件的 AI（质检、设备控制）适用附件一高风险义务（2028-08-02 起）；在欧招聘使用 AI 筛选简历同样属于高风险"
      ],
      access: [
        "被认定为高风险的 AI 功能须完成合格评定，否则相关产品不能在欧盟投放"
      ],
      support: [],
      actions: [
        "盘点产品和工厂中的 AI 应用，判断是否属于高风险",
        "在欧实体开展 AI 素养培训"
      ]
    },
    council: [
      { date: "2022-12-06", stage: "ga", label: "电信理事会达成总体方针", body: "电信理事会" },
      { date: "2023-12-08", stage: "deal", label: "理事会与议会达成临时协议", body: "西班牙轮值主席国" }
    ],
    milestones: [
      { date: "2024-08-01", kind: "force", label: "法规生效" },
      { date: "2025-02-02", kind: "apply", label: "禁止性 AI 实践与 AI 素养义务适用" },
      { date: "2025-08-02", kind: "apply", label: "通用 AI 模型义务、治理与罚则条款适用" },
      { date: "2026-08-02", kind: "apply", label: "法规一般性适用（高风险义务除外，见下）" },
      { date: "2027-12-02", kind: "deadline", label: "附件三高风险 AI 系统义务适用（原定 2026-08-02，经 2026/1744 推迟）" },
      { date: "2028-08-02", kind: "deadline", label: "附件一产品中的高风险 AI 系统义务适用（原定 2027-08-02，经 2026/1744 推迟）" }
    ]
  },
  {
    id: "ai-omnibus",
    oeil: "2025/0359(COD)",
    parent: "ai-act",
    nameZh: "AI 数字简化条例（Digital Omnibus on AI）",
    shortZh: "AI 简化条例",
    category: "digital",
    relevance: "high",
    tags: ["Omnibus 简化", "高风险推迟"],
    summaryZh: "2025 年 11 月 19 日作为“数字简化一揽子”的一部分提出，2026 年 7 月 24 日以条例 (EU) 2026/1744 发布。将高风险 AI 义务改为固定日期：附件三系统推迟至 2027 年 12 月 2 日，附件一产品中的系统推迟至 2028 年 8 月 2 日；成员国 AI 监管沙盒设立期限推迟至 2027 年 8 月 2 日；扩展中小企业简化措施至小型中型企业；新增两项禁止性实践（“裸体化”应用和 AI 生成儿童性虐待内容）；保留认为自身不属高风险的附件三系统的数据库登记义务。",
    impactZh: [
      "高风险 AI 合规准备窗口延长 12–16 个月",
      "关注配套协调标准和欧委会高风险分类指南的发布进度"
    ],
    batteryImpact: {
      level: "low",
      levelNote: "在 AI 法基础上推迟高风险义务",
      segments: [
        "BMS/EMS",
        "在欧设厂"
      ],
      compliance: [
        "附件三高风险义务推迟至 2027-12-02，附件一推迟至 2028-08-02"
      ],
      access: [],
      support: [
        "合规准备时间延长 12–16 个月"
      ],
      actions: [
        "按新日期调整 AI 合规计划，关注高风险分类指南和协调标准"
      ]
    },
    council: [
      { date: "2026-05-07", stage: "deal", label: "理事会与议会达成临时协议", body: "塞浦路斯轮值主席国" }
    ],
    milestones: [
      { date: "2026-07-27", kind: "force", label: "条例 (EU) 2026/1744 生效" },
      { date: "2027-08-02", kind: "deadline", label: "成员国设立 AI 监管沙盒的新期限" }
    ]
  }
];

window.CATEGORIES = {
  battery:   { zh: "电池与关键原材料",   color: "battery" },
  circular:  { zh: "循环经济",           color: "circular" },
  industry:  { zh: "产业政策与投资",     color: "industry" },
  supply:    { zh: "供应链与企业责任",   color: "supply" },
  safety:    { zh: "产品安全与化学品",   color: "safety" },
  power:     { zh: "电力市场与电网",     color: "power" },
  renewable: { zh: "可再生能源与能效",   color: "renewable" },
  transport: { zh: "交通与充电",         color: "transport" },
  carbon:    { zh: "碳定价与贸易",       color: "carbon" },
  digital:   { zh: "网络安全与人工智能", color: "digital" }
};
