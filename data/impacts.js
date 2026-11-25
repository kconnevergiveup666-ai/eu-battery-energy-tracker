/*
 * impacts.js —— 产业链各视角的影响分析（人工整理层），按 curated.js 的 id 对应
 *   chain: 影响传导（一句话说明影响如何沿产业链传递）
 *   auto / storage / upstream: 车企 / 储能企业 / 上游供应链视角；电池企业视角沿用 curated.js 的 batteryImpact
 *   每个视角 { level: high|medium|low|none, levelNote, segments[], compliance[], access[], support[], actions[] }
 *   视角立场：对欧出口或在欧设厂的中国企业。“待核实”写在文本中。
 */
window.IMPACTS = {
 "batteries": {
  "chain": "上游材料的碳足迹、再生料和尽调数据 → 电池企业汇总为碳足迹声明、电池护照和尽调报告 → 车企和储能集成商据此采购、在欧盟投放产品",
  "auto": {
   "level": "high",
   "levelNote": "整车中的动力电池必须合规，车企是电池护照、拆卸和回收的直接相关方",
   "segments": [
    "整车出口",
    "在欧整车生产",
    "供应链采购"
   ],
   "compliance": [
    "2027-02-18 起在欧盟投放的电动车动力电池须带电池护照和二维码，车企需与电池供应商打通数据",
    "作为动力电池进口或投放主体时，车企在部分国家需承担 EPR 登记和回收责任"
   ],
   "access": [
    "动力电池缺少碳足迹声明、护照或尽调证明时，整车无法合规投放欧盟市场",
    "碳足迹等级和限值引入后，车企会把碳足迹作为定点电池供应商的硬指标"
   ],
   "support": [
    "统一规则便于车企在全欧盟采用同一套电池合规方案"
   ],
   "actions": [
    "在电池采购合同中写明碳足迹、护照数据和尽调义务的分工",
    "建立整车—电池护照的数据接口"
   ]
  },
  "storage": {
   "level": "high",
   "levelNote": "工业电池 >2kWh 和固定式储能系统直接受管",
   "segments": [
    "储能系统集成",
    "户用/工商业储能",
    "储能电站运营"
   ],
   "compliance": [
    "固定式储能系统须满足第 12 条安全要求并提供测试文件；>2kWh 工业电池须标注性能与耐久性参数",
    "2027-02-18 起 >2kWh 工业电池须带电池护照；碳足迹声明按授权法案生效时间分阶段适用",
    "系统集成商以自有品牌投放时视为生产者，须承担 EPR 登记和回收责任"
   ],
   "access": [
    "不满足安全、护照或 EPR 要求的储能产品不能在欧盟销售"
   ],
   "support": [
    "公共采购需考虑电池可持续性标准，低碳储能产品更有优势"
   ],
   "actions": [
    "核对储能产品的第 12 条安全测试和标签",
    "明确与电芯供应商之间的护照与碳足迹数据责任"
   ]
  },
  "upstream": {
   "level": "high",
   "levelNote": "碳足迹、再生料和尽调要求直接传导到矿产和材料企业",
   "segments": [
    "矿产与精炼",
    "正负极材料",
    "前驱体",
    "回收与再生料"
   ],
   "compliance": [
    "须向电池企业提供碳足迹一手数据（能耗、电力来源、工艺排放）",
    "钴、天然石墨、锂、镍及其化合物纳入尽职调查，须配合溯源到矿山并接受第三方审核"
   ],
   "access": [
    "碳足迹高的材料（如煤电生产的正极、石墨）可能被电池企业替换",
    "2031 年起再生料最低含量要求带来对可追溯再生钴、锂、镍的需求"
   ],
   "support": [
    "再生材料和低碳材料获得溢价空间"
   ],
   "actions": [
    "建立产品碳足迹核算和溯源数据",
    "布局再生料产能或与回收企业合作"
   ]
  }
 },
 "batteries-dd-omnibus": {
  "chain": "尽调义务推迟两年 → 电池企业和上游有更多时间建立溯源体系 → 车企的供应商审核节奏随之调整",
  "auto": {
   "level": "low",
   "levelNote": "通过电池供应商间接影响",
   "segments": [
    "供应链采购"
   ],
   "compliance": [],
   "access": [
    "2027-08-18 后，电池供应商若无经核查的尽调体系，其电池不能用于欧盟投放的车辆"
   ],
   "support": [],
   "actions": [
    "在供应商审核中跟踪电池企业尽调体系建设进度"
   ]
  },
  "storage": {
   "level": "low",
   "levelNote": "通过电池供应商间接影响",
   "segments": [
    "储能系统集成"
   ],
   "compliance": [],
   "access": [
    "2027-08-18 后，电芯供应商若无经核查的尽调体系，相关储能产品不能投放欧盟市场"
   ],
   "support": [],
   "actions": [
    "确认电芯供应商的尽调准备情况"
   ]
  },
  "upstream": {
   "level": "medium",
   "levelNote": "上游是尽调的主要对象，推迟带来准备时间",
   "segments": [
    "矿产与精炼",
    "正负极材料",
    "前驱体"
   ],
   "compliance": [
    "2027-08-18 起须配合电池企业完成溯源与第三方审核"
   ],
   "access": [],
   "support": [
    "多两年时间完成矿山溯源与认证"
   ],
   "actions": [
    "利用缓冲期完成矿山到材料的溯源与审核"
   ]
  }
 },
 "bat-cfb": {
  "chain": "上游材料和电力的排放 → 按 CFB 方法计入电池碳足迹 → 车企按碳足迹等级选择供应商",
  "auto": {
   "level": "medium",
   "levelNote": "决定所采购动力电池的碳足迹数值和未来等级",
   "segments": [
    "供应链采购",
    "车型与动力系统规划"
   ],
   "compliance": [],
   "access": [
    "方法生效后电池碳足迹声明和等级将成为车企选择供应商的依据，高碳足迹电池面临淘汰风险"
   ],
   "support": [],
   "actions": [
    "要求电池供应商按草案方法提供碳足迹测算"
   ]
  },
  "storage": {
   "level": "low",
   "levelNote": "EV 方法不直接适用于储能，但工业电池方法会参照",
   "segments": [
    "储能系统集成"
   ],
   "compliance": [],
   "access": [
    "工业电池（含储能）的碳足迹方法预计参照 CFB 规则，电力建模方式同样关键"
   ],
   "support": [],
   "actions": [
    "跟踪工业电池碳足迹授权法案"
   ]
  },
  "upstream": {
   "level": "high",
   "levelNote": "材料环节通常占电池碳足迹的大头",
   "segments": [
    "正负极材料",
    "前驱体",
    "矿产与精炼",
    "回收与再生料"
   ],
   "compliance": [
    "须按方法要求提供材料生产环节的一手数据"
   ],
   "access": [
    "若只认可电网平均排放因子，煤电地区生产的正极、负极材料碳足迹偏高，可能被替换"
   ],
   "support": [
    "绿电生产和再生材料可显著降低碳足迹"
   ],
   "actions": [
    "按草案方法测算主要产品碳足迹",
    "评估绿电或低碳工艺"
   ]
  }
 },
 "bat-recycled": {
  "chain": "回收企业产出再生钴锂镍 → 电池企业按质量平衡法计算再生料含量 → 2031 年起不达标的电池不能投放",
  "auto": {
   "level": "low",
   "levelNote": "通过电池供应商间接影响",
   "segments": [
    "供应链采购"
   ],
   "compliance": [],
   "access": [
    "2031 年起动力电池须达再生料最低含量，车企需确认供应商能达标"
   ],
   "support": [],
   "actions": [
    "在长期采购协议中纳入再生料要求"
   ]
  },
  "storage": {
   "level": "low",
   "levelNote": "工业电池同样适用再生料要求",
   "segments": [
    "储能系统集成"
   ],
   "compliance": [],
   "access": [
    "2031 年起 >2kWh 工业电池须达再生料最低含量"
   ],
   "support": [],
   "actions": [
    "确认电芯供应商的再生料来源"
   ]
  },
  "upstream": {
   "level": "high",
   "levelNote": "直接决定再生料的计算方式和市场价值",
   "segments": [
    "回收与再生料",
    "正负极材料",
    "前驱体"
   ],
   "compliance": [
    "再生料供应商须提供可核查的来源和质量平衡数据"
   ],
   "access": [
    "若欧盟境内回收材料享有 1.3 修正系数（据报道，待核实），欧盟外的再生料竞争力下降"
   ],
   "support": [
    "在欧盟境内回收和生产再生料更有优势"
   ],
   "actions": [
    "评估在欧回收或再生料产能",
    "建立再生料溯源与质量平衡记录"
   ]
  }
 },
 "bat-recycling-eff": {
  "chain": "回收企业按统一方法计算回收效率 → 达标的回收能力支撑电池企业的 EPR 义务",
  "auto": {
   "level": "none",
   "levelNote": "基本无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "storage": {
   "level": "low",
   "levelNote": "影响储能电池报废后的回收合作方",
   "segments": [
    "储能电站运营"
   ],
   "compliance": [],
   "access": [
    "报废储能电池须交给达标的回收企业"
   ],
   "support": [],
   "actions": [
    "核实回收合作方的回收效率数据"
   ]
  },
  "upstream": {
   "level": "high",
   "levelNote": "直接约束回收企业",
   "segments": [
    "回收与再生料"
   ],
   "compliance": [
    "回收设施须按 (EU) 2025/606 的方法计算并报告回收效率和材料回收率"
   ],
   "access": [
    "达不到 2025 年锂电池回收效率 65% 等目标的回收企业将失去业务"
   ],
   "support": [],
   "actions": [
    "按新方法复核回收效率和材料回收率"
   ]
  }
 },
 "bat-dd-guidelines": {
  "chain": "欧委会指南明确尽调做法 → 电池企业据此设计体系 → 上游按要求提供溯源和审核",
  "auto": {
   "level": "low",
   "levelNote": "通过电池供应商间接影响",
   "segments": [
    "供应链采购"
   ],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [
    "参照指南更新供应商尽调审核要求"
   ]
  },
  "storage": {
   "level": "low",
   "levelNote": "通过电芯供应商间接影响",
   "segments": [
    "储能系统集成"
   ],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [
    "参照指南更新供应商尽调审核要求"
   ]
  },
  "upstream": {
   "level": "medium",
   "levelNote": "上游是尽调核查的重点",
   "segments": [
    "矿产与精炼",
    "正负极材料",
    "前驱体"
   ],
   "compliance": [
    "指南将明确上游需提供的风险信息和审核要求"
   ],
   "access": [],
   "support": [],
   "actions": [
    "跟踪指南发布，提前准备溯源和审核材料"
   ]
  }
 },
 "crma": {
  "chain": "欧盟设定开采、加工、回收和单一来源基准 → 上游项目获战略项目支持、进口结构受审视 → 电池企业和车企的材料采购随之调整",
  "auto": {
   "level": "low",
   "levelNote": "通过电池供应链间接影响",
   "segments": [
    "供应链采购"
   ],
   "compliance": [
    "生产战略技术的大型车企同样须定期开展战略原材料供应链风险评估"
   ],
   "access": [],
   "support": [],
   "actions": [
    "评估动力电池材料的来源国集中度"
   ]
  },
  "storage": {
   "level": "low",
   "levelNote": "通过电池供应链间接影响",
   "segments": [
    "储能系统集成"
   ],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [
    "关注磷酸铁锂、石墨等材料的来源集中度"
   ]
  },
  "upstream": {
   "level": "high",
   "levelNote": "锂、镍、钴、石墨、锰均为战略原材料，直接面向上游",
   "segments": [
    "矿产与精炼",
    "正负极材料",
    "前驱体",
    "回收与再生料"
   ],
   "compliance": [
    "大型企业须每三年开展战略原材料供应链风险评估"
   ],
   "access": [
    "“单一第三国不超过 65%”的基准会影响补贴、采购和项目审批对供应链的评价，高度依赖中国石墨、前驱体的供应链面临压力"
   ],
   "support": [
    "开采、加工、回收项目可申请战略项目，享受加速许可（加工/回收 15 个月）和融资对接",
    "第三国项目也可申请战略项目，海外矿产和材料项目有机会进入欧盟供应链"
   ],
   "actions": [
    "评估在欧或海外项目申请战略项目",
    "跟踪欧盟原材料联合采购平台"
   ]
  }
 },
 "crma-strategic": {
  "chain": "欧委会认定战略项目 → 获认定的材料和回收项目加速落地 → 成为欧洲电池供应链的优先来源",
  "auto": {
   "level": "none",
   "levelNote": "基本无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "storage": {
   "level": "none",
   "levelNote": "基本无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "upstream": {
   "level": "high",
   "levelNote": "直接面向上游项目",
   "segments": [
    "矿产与精炼",
    "正负极材料",
    "前驱体",
    "回收与再生料"
   ],
   "compliance": [],
   "access": [
    "非战略项目来源的材料在欧洲采购评价中可能处于劣势"
   ],
   "support": [
    "获认定项目享受加速许可、融资对接和优先行政处理，第三国项目同样可申请"
   ],
   "actions": [
    "评估申请下一轮战略项目认定"
   ]
  }
 },
 "cea": {
  "chain": "欧盟统一二次原材料和黑粉规则 → 回收与再生料在欧盟内自由流通 → 电池企业和车企更容易采购再生料",
  "auto": {
   "level": "low",
   "levelNote": "可能通过 WEEE 修订和再生料市场间接影响",
   "segments": [
    "供应链采购"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "再生材料单一市场有利于车企满足再生料要求"
   ],
   "actions": [
    "跟踪欧委会提案"
   ]
  },
  "storage": {
   "level": "medium",
   "levelNote": "WEEE 修订可能并入，影响储能设备的回收责任",
   "segments": [
    "储能系统集成"
   ],
   "compliance": [
    "若并入 WEEE 修订，储能系统等电气设备的生产者责任可能调整"
   ],
   "access": [],
   "support": [],
   "actions": [
    "跟踪提案中 WEEE 部分"
   ]
  },
  "upstream": {
   "level": "high",
   "levelNote": "将重塑回收和再生料市场规则",
   "segments": [
    "回收与再生料",
    "正负极材料",
    "前驱体"
   ],
   "compliance": [],
   "access": [
    "黑粉和再生材料的统一定义与海关编码将决定能否在欧盟内流通、能否出口"
   ],
   "support": [
    "二次原材料单一市场有利于在欧回收和再生料业务"
   ],
   "actions": [
    "跟踪提案中关于黑粉和废物终止标准的条款",
    "评估在欧回收布局"
   ]
  }
 },
 "wsr": {
  "chain": "废电池和黑粉跨境运输受限 → 回收在欧盟内闭环 → 再生料供应集中于欧盟境内的回收和湿法冶金企业",
  "auto": {
   "level": "low",
   "levelNote": "影响报废动力电池的流向",
   "segments": [
    "在欧整车生产"
   ],
   "compliance": [
    "报废动力电池跨境运输须走电子化事先通知与同意程序"
   ],
   "access": [],
   "support": [],
   "actions": [
    "与回收合作方核对报废电池的跨境物流安排"
   ]
  },
  "storage": {
   "level": "medium",
   "levelNote": "影响报废储能电池和生产废料的流向",
   "segments": [
    "储能电站运营",
    "储能系统集成"
   ],
   "compliance": [
    "报废储能电池跨境运输须电子化申报并取得事先同意"
   ],
   "access": [
    "报废电池不能出口到非 OECD 国家处理"
   ],
   "support": [],
   "actions": [
    "规划报废储能电池在欧盟境内的回收渠道"
   ]
  },
  "upstream": {
   "level": "high",
   "levelNote": "直接决定黑粉和废电池能否运出欧盟",
   "segments": [
    "回收与再生料"
   ],
   "compliance": [
    "2026-05-21 起欧盟内废物运输须电子化申报"
   ],
   "access": [
    "黑粉按危险废物管理后不能出口到中国等非 OECD 国家，在欧回收的黑粉运回国内提炼的路径基本被切断"
   ],
   "support": [
    "欧盟境内湿法冶金和再生料产能需求上升"
   ],
   "actions": [
    "评估在欧建设或合作湿法冶金产能"
   ]
  }
 },
 "black-mass": {
  "chain": "黑粉被列为危险废物 → 不能出口到非 OECD 国家 → 欧盟境内提炼产能成为瓶颈与机会",
  "auto": {
   "level": "none",
   "levelNote": "基本无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "storage": {
   "level": "low",
   "levelNote": "影响储能电池生产废料和报废电池的处理",
   "segments": [
    "储能系统集成"
   ],
   "compliance": [
    "锂电池生产废料须按危险废物代码分类和处理"
   ],
   "access": [],
   "support": [],
   "actions": [
    "调整废料处理合同"
   ]
  },
  "upstream": {
   "level": "high",
   "levelNote": "直接决定黑粉的流向和价值",
   "segments": [
    "回收与再生料"
   ],
   "compliance": [
    "回收企业须按危险废物要求运营和运输"
   ],
   "access": [
    "黑粉不能再出口到中国等非 OECD 国家提炼"
   ],
   "support": [
    "欧洲本土湿法冶金和再生料需求上升"
   ],
   "actions": [
    "2026 年 12 月前调整黑粉销售和运输安排",
    "评估在欧提炼产能"
   ]
  }
 },
 "ppwr": {
  "chain": "包装可回收性和重复使用要求 → 电池、储能和整车零部件的运输包装与物流方案调整",
  "auto": {
   "level": "low",
   "levelNote": "影响零部件和电池的运输包装",
   "segments": [
    "供应链采购",
    "在欧整车生产"
   ],
   "compliance": [
    "欧盟内运输使用的托盘和周转箱 2030 年起须达到重复使用比例"
   ],
   "access": [],
   "support": [],
   "actions": [
    "推动供应商使用可循环包装"
   ]
  },
  "storage": {
   "level": "medium",
   "levelNote": "储能产品包装和物流须调整",
   "segments": [
    "储能系统集成"
   ],
   "compliance": [
    "2026-08-12 起包装须满足基本要求，进口商须履行包装 EPR"
   ],
   "access": [
    "不满足可回收性或标签要求的包装不能投放"
   ],
   "support": [],
   "actions": [
    "按 PPWR 调整储能产品包装设计"
   ]
  },
  "upstream": {
   "level": "low",
   "levelNote": "影响材料运输包装",
   "segments": [
    "正负极材料",
    "电解液/隔膜"
   ],
   "compliance": [
    "向欧盟交付材料时包装须满足要求"
   ],
   "access": [],
   "support": [],
   "actions": [
    "核对出口材料包装"
   ]
  }
 },
 "weee": {
  "chain": "电气设备的生产者责任 → 储能系统、逆变器、充电设备须登记和承担回收费用",
  "auto": {
   "level": "low",
   "levelNote": "主要涉及充电设备等电气产品",
   "segments": [
    "整车出口"
   ],
   "compliance": [
    "车企销售的充电设备（如家用充电桩）须履行 WEEE 登记"
   ],
   "access": [],
   "support": [],
   "actions": [
    "核对充电设备的 WEEE 登记"
   ]
  },
  "storage": {
   "level": "high",
   "levelNote": "储能系统中的电子部件、逆变器属于 WEEE 范围",
   "segments": [
    "储能系统集成",
    "户用/工商业储能"
   ],
   "compliance": [
    "在每个销售国登记为 WEEE 生产者并承担回收费用，电池部分另按新电池法履行 EPR"
   ],
   "access": [
    "未完成 WEEE 登记的设备在多数成员国不得销售"
   ],
   "support": [],
   "actions": [
    "区分储能系统中适用 WEEE 和新电池法的部件"
   ]
  },
  "upstream": {
   "level": "none",
   "levelNote": "基本无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "weee-2024": {
  "chain": "光伏组件回收费用规则调整 → 光储一体产品的回收成本更清晰",
  "auto": {
   "level": "none",
   "levelNote": "无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "storage": {
   "level": "low",
   "levelNote": "涉及光储一体产品中的光伏组件",
   "segments": [
    "户用/工商业储能"
   ],
   "compliance": [
    "光伏组件按修订后的规则承担回收费用"
   ],
   "access": [],
   "support": [],
   "actions": []
  },
  "upstream": {
   "level": "none",
   "levelNote": "无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "elv": {
  "chain": "车企须按循环设计要求造车并拆除报废车电池 → 电池企业配合可拆卸设计 → 上游获得稳定的报废电池回收原料",
  "auto": {
   "level": "high",
   "levelNote": "直接规制整车设计和报废车管理",
   "segments": [
    "车型与动力系统规划",
    "在欧整车生产",
    "整车出口"
   ],
   "compliance": [
    "整车须按循环设计要求设计，动力电池和电机须可拆卸，报废车处理前须拆除动力电池",
    "新车须达到再生塑料最低含量，并提供拆解信息"
   ],
   "access": [
    "不满足循环设计和再生塑料要求的车型无法通过型式认证"
   ],
   "support": [],
   "actions": [
    "评估车型平台的可拆卸设计和再生塑料来源",
    "与电池供应商协同制定拆解方案"
   ]
  },
  "storage": {
   "level": "none",
   "levelNote": "基本无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "upstream": {
   "level": "medium",
   "levelNote": "报废动力电池集中拆除，回收原料更稳定",
   "segments": [
    "回收与再生料"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "报废车电池集中拆除为回收和梯次利用提供稳定原料"
   ],
   "actions": [
    "与拆解企业建立回收合作"
   ]
  }
 },
 "nzia": {
  "chain": "欧盟设定 40% 本土制造目标和拍卖非价格标准 → 储能、电池项目获加速许可但在拍卖中受韧性评分约束 → 上游材料本地化需求上升",
  "auto": {
   "level": "low",
   "levelNote": "整车不属于净零技术，主要通过电池供应链间接受影响",
   "segments": [
    "供应链采购"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "欧洲电池产能扩张有利于车企就近采购"
   ],
   "actions": []
  },
  "storage": {
   "level": "high",
   "levelNote": "储能是净零技术，拍卖和公共采购适用非价格标准",
   "segments": [
    "储能系统集成",
    "储能电站运营"
   ],
   "compliance": [
    "参与拍卖和公共采购须提供可持续性、网络安全和韧性证明"
   ],
   "access": [
    "来自供应占比超过 50% 的单一第三国的产品在拍卖中扣分，中国储能系统竞争力下降"
   ],
   "support": [
    "在欧储能制造项目可申请净零战略项目，享受加速许可"
   ],
   "actions": [
    "研究重点国家拍卖规则中的韧性评分",
    "评估储能系统在欧组装"
   ]
  },
  "upstream": {
   "level": "medium",
   "levelNote": "材料不是净零技术本身，但本土化目标带动需求",
   "segments": [
    "正负极材料",
    "电解液/隔膜"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "欧洲电池和储能产能扩张带动本地材料需求，在欧材料项目可借助加速许可"
   ],
   "actions": [
    "评估在欧材料产能布局"
   ]
  }
 },
 "iaa": {
  "chain": "车企想拿购车补贴必须用欧洲制造的电池 → 电池企业须在欧洲生产电芯、BMS → 上游须在欧洲供应正极材料等部件",
  "auto": {
   "level": "high",
   "levelNote": "购车补贴和公共采购将倾向“欧洲制造”车辆和电池",
   "segments": [
    "整车出口",
    "在欧整车生产",
    "供应链采购"
   ],
   "compliance": [
    "申请补贴或参与公共采购的车型须证明整车和电池部件的欧盟原产地"
   ],
   "access": [
    "进口整车或使用进口电池的车型可能失去补贴资格；法德协议提出电芯欧洲制造比例 10% → 20% → 70%（谈判中）",
    "战略行业大额外资（含在欧建车厂）可能被附加合资、技术转让、本地雇员等条件"
   ],
   "support": [
    "在欧生产并使用欧洲电池的车型获得补贴和采购优势"
   ],
   "actions": [
    "测算主力车型在不同“欧洲制造”比例下的合规差距",
    "规划在欧生产和本地电池采购"
   ]
  },
  "storage": {
   "level": "high",
   "levelNote": "储能公共采购和补贴要求欧盟原产",
   "segments": [
    "储能系统集成",
    "储能电站运营",
    "EMS/BMS"
   ],
   "compliance": [
    "进入公共采购或补贴项目须证明储能系统欧盟原产，>1MWh 系统须使用欧盟制造的 BMS（提案）"
   ],
   "access": [
    "进口储能系统在公共项目和补贴中失去资格"
   ],
   "support": [
    "在欧组装储能系统并使用本地 BMS 的企业受益"
   ],
   "actions": [
    "评估储能系统和 BMS 的欧洲本地化方案"
   ]
  },
  "upstream": {
   "level": "high",
   "levelNote": "第二阶段要求正极材料等部件在欧盟生产",
   "segments": [
    "正负极材料",
    "前驱体",
    "电解液/隔膜"
   ],
   "compliance": [
    "电池部件原产地要求分阶段扩展到正极材料等，须提供原产地证明"
   ],
   "access": [
    "进口正极材料在第二阶段可能不再计入“欧洲制造”"
   ],
   "support": [
    "在欧材料产能成为电池企业满足要求的关键，需求上升"
   ],
   "actions": [
    "评估在欧建设正极、前驱体产能",
    "跟踪原产地规则最终文本"
   ]
  }
 },
 "nzia-nonprice": {
  "chain": "可再生能源拍卖适用韧性标准 → 依赖单一第三国的储能和逆变器被扣分 → 欧洲制造的系统和部件更易中标",
  "auto": {
   "level": "none",
   "levelNote": "无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "storage": {
   "level": "high",
   "levelNote": "直接影响储能在拍卖项目中的竞争力",
   "segments": [
    "储能系统集成",
    "储能电站运营"
   ],
   "compliance": [
    "投标须提供网络安全、数据安全和负责任商业行为证明"
   ],
   "access": [
    "每年至少 30% 拍卖容量适用韧性标准，依赖度超过 50% 的国家（如中国）的产品处于不利地位"
   ],
   "support": [
    "欧洲制造的储能系统在评标中更有优势"
   ],
   "actions": [
    "研究重点国家的评分方式，评估关键部件本地化"
   ]
  },
  "upstream": {
   "level": "low",
   "levelNote": "通过系统集成商间接影响",
   "segments": [
    "正负极材料"
   ],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "fsr": {
  "chain": "欧委会审查外国补贴 → 中国企业在欧并购、建厂和大型项目投标受审查 → 影响车企、电池和储能企业的投资与中标",
  "auto": {
   "level": "high",
   "levelNote": "中国车企在欧建厂和并购可能受审查",
   "segments": [
    "在欧整车生产",
    "整车出口"
   ],
   "compliance": [
    "达到门槛的并购须申报所获外国财政资助"
   ],
   "access": [
    "欧委会可依职权调查在欧车厂所获补贴，要求承诺或附加条件"
   ],
   "support": [],
   "actions": [
    "建立集团补贴与融资支持的申报材料库"
   ]
  },
  "storage": {
   "level": "high",
   "levelNote": "大型储能和电网公共采购投标须申报外国财政资助",
   "segments": [
    "储能电站运营",
    "储能系统集成"
   ],
   "compliance": [
    "预估价值 ≥2.5 亿欧元的公共采购投标须申报外国财政资助"
   ],
   "access": [
    "可能被排除投标（已有罗马尼亚光伏电站投标方退出的先例）"
   ],
   "support": [],
   "actions": [
    "大型储能项目投标前评估是否达到申报门槛"
   ]
  },
  "upstream": {
   "level": "medium",
   "levelNote": "中国材料企业在欧投资可能受审查",
   "segments": [
    "正负极材料",
    "前驱体",
    "回收与再生料"
   ],
   "compliance": [
    "在欧并购达到门槛须申报"
   ],
   "access": [
    "在欧材料工厂所获补贴可能被依职权调查"
   ],
   "support": [],
   "actions": [
    "梳理在欧项目的补贴与融资来源"
   ]
  }
 },
 "forced-labour": {
  "chain": "矿产来源 → 材料 → 电池 → 整车或储能系统，任何一环被查实涉及强迫劳动，最终产品都可能被禁售",
  "auto": {
   "level": "high",
   "levelNote": "整车是最终产品，供应链任何一环出问题都可能被禁售",
   "segments": [
    "整车出口",
    "供应链采购"
   ],
   "compliance": [
    "须能证明整车供应链不涉及强迫劳动，配合调查提供溯源信息"
   ],
   "access": [
    "被认定涉及强迫劳动的车辆须撤出欧盟市场，相关零部件替换后才能重新投放"
   ],
   "support": [],
   "actions": [
    "对电池、铝、钢等高风险供应链开展溯源"
   ]
  },
  "storage": {
   "level": "high",
   "levelNote": "储能系统同样适用",
   "segments": [
    "储能系统集成"
   ],
   "compliance": [
    "须能证明储能系统供应链不涉及强迫劳动"
   ],
   "access": [
    "被认定的储能产品须撤出欧盟市场"
   ],
   "support": [],
   "actions": [
    "对电芯和材料来源开展溯源"
   ]
  },
  "upstream": {
   "level": "high",
   "levelNote": "石墨、锂、多晶硅等是重点审查领域",
   "segments": [
    "矿产与精炼",
    "正负极材料",
    "前驱体"
   ],
   "compliance": [
    "须向下游提供到矿源的溯源信息"
   ],
   "access": [
    "原料来自高风险地区的供应链面临被下游替换的风险"
   ],
   "support": [],
   "actions": [
    "对原料开展到矿源的溯源核查，跟踪欧委会风险数据库"
   ]
  }
 },
 "csddd": {
  "chain": "大型企业须对价值链开展尽调 → 车企和能源企业把要求传导给电池和储能供应商 → 再传导到上游矿产与材料",
  "auto": {
   "level": "medium",
   "levelNote": "大型车企是主要适用对象",
   "segments": [
    "在欧整车生产",
    "供应链采购"
   ],
   "compliance": [
    "达到门槛的车企须开展价值链人权与环境尽调（2029 年 7 月起，门槛经 Omnibus I 提高）"
   ],
   "access": [],
   "support": [],
   "actions": [
    "整合 CSDDD 与电池尽调要求，统一供应商审核"
   ]
  },
  "storage": {
   "level": "low",
   "levelNote": "主要通过客户要求间接影响",
   "segments": [
    "储能系统集成"
   ],
   "compliance": [],
   "access": [
    "能源企业客户会把尽调要求传导给储能供应商"
   ],
   "support": [],
   "actions": [
    "准备应对客户的尽调问卷"
   ]
  },
  "upstream": {
   "level": "medium",
   "levelNote": "上游是尽调传导的终点",
   "segments": [
    "矿产与精炼",
    "正负极材料"
   ],
   "compliance": [],
   "access": [
    "下游客户会要求提供人权与环境风险信息"
   ],
   "support": [],
   "actions": [
    "准备尽调问卷与审核材料"
   ]
  }
 },
 "omnibus-i": {
  "chain": "CSRD 和 CSDDD 范围大幅收窄 → 多数中型企业不再需要报告和尽调 → 只有超大型企业的要求继续向供应链传导",
  "auto": {
   "level": "low",
   "levelNote": "减轻在欧子公司的报告负担",
   "segments": [
    "在欧整车生产"
   ],
   "compliance": [
    "按新门槛判断在欧子公司是否仍需报告和尽调"
   ],
   "access": [],
   "support": [
    "报告和尽调负担减轻"
   ],
   "actions": []
  },
  "storage": {
   "level": "low",
   "levelNote": "减轻在欧子公司的报告负担",
   "segments": [
    "储能系统集成"
   ],
   "compliance": [
    "按新门槛复核"
   ],
   "access": [],
   "support": [
    "负担减轻"
   ],
   "actions": []
  },
  "upstream": {
   "level": "low",
   "levelNote": "减轻在欧子公司的报告负担",
   "segments": [
    "正负极材料"
   ],
   "compliance": [
    "按新门槛复核"
   ],
   "access": [],
   "support": [
    "负担减轻"
   ],
   "actions": []
  }
 },
 "gpsr": {
  "chain": "消费类产品须有欧盟责任人并履行安全和召回义务 → 主要影响便携储能和移动电源",
  "auto": {
   "level": "none",
   "levelNote": "整车不适用（有专门的型式认证规则）",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "storage": {
   "level": "medium",
   "levelNote": "便携储能、户用储能等消费类产品适用",
   "segments": [
    "户用/工商业储能"
   ],
   "compliance": [
    "消费类储能产品须有欧盟责任经营者、标注责任人信息，安全事故须通过欧盟平台报告"
   ],
   "access": [
    "线上平台会要求提供责任人和安全信息，否则下架"
   ],
   "support": [],
   "actions": [
    "核对消费类储能产品的责任人和标签"
   ]
  },
  "upstream": {
   "level": "none",
   "levelNote": "无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "rohs": {
  "chain": "电子电气设备有害物质限值 → 储能系统、充电设备的电子部件须合规",
  "auto": {
   "level": "low",
   "levelNote": "主要涉及充电设备等电气产品",
   "segments": [
    "整车出口"
   ],
   "compliance": [
    "家用充电桩等电气产品须符合 RoHS"
   ],
   "access": [],
   "support": [],
   "actions": []
  },
  "storage": {
   "level": "medium",
   "levelNote": "储能系统中的电子部件须符合",
   "segments": [
    "储能系统集成",
    "EMS/BMS"
   ],
   "compliance": [
    "储能系统、逆变器中的电子部件须满足有害物质限值并纳入技术文件"
   ],
   "access": [
    "不符合 RoHS 的设备不能加贴 CE 标志"
   ],
   "support": [],
   "actions": [
    "核对电子部件供应商的 RoHS 检测报告"
   ]
  },
  "upstream": {
   "level": "none",
   "levelNote": "基本无直接影响（电池材料不适用 RoHS）",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "pfas": {
  "chain": "PFAS 限制 → PVDF 粘结剂、含氟电解液添加剂等材料受限 → 电池须换用替代材料，车企和储能产品随之调整",
  "auto": {
   "level": "medium",
   "levelNote": "车辆中大量使用含氟材料，动力电池只是其中之一",
   "segments": [
    "车型与动力系统规划",
    "供应链采购"
   ],
   "compliance": [
    "若限制通过，含 PFAS 的部件（电池、密封件、冷媒等）须在过渡期内替代或依据豁免使用"
   ],
   "access": [
    "未获豁免的含 PFAS 部件可能被禁止"
   ],
   "support": [],
   "actions": [
    "盘点整车中含 PFAS 的部件，跟踪豁免范围"
   ]
  },
  "storage": {
   "level": "medium",
   "levelNote": "储能电池同样使用 PVDF 等含氟材料",
   "segments": [
    "储能系统集成"
   ],
   "compliance": [
    "电池中的 PFAS 材料须替代或依据豁免使用"
   ],
   "access": [
    "未获豁免可能无法投放欧盟市场"
   ],
   "support": [],
   "actions": [
    "与电芯供应商确认替代方案"
   ]
  },
  "upstream": {
   "level": "high",
   "levelNote": "PVDF、含氟电解液添加剂和隔膜涂层直接受影响",
   "segments": [
    "正负极材料",
    "电解液/隔膜"
   ],
   "compliance": [
    "若限制通过，须在过渡期内停止向欧盟供应受限含氟材料，或证明符合豁免条件"
   ],
   "access": [
    "未获豁免的含氟材料将失去欧盟市场"
   ],
   "support": [
    "无氟粘结剂等替代材料迎来需求"
   ],
   "actions": [
    "加快无氟粘结剂、替代电解液添加剂的研发",
    "通过行业协会参与 SEAC 和欧委会决策"
   ]
  }
 },
 "lithium-clp": {
  "chain": "锂盐被列为生殖毒性 1A 类 → 上游和在欧材料、电芯工厂的职业健康成本上升",
  "auto": {
   "level": "none",
   "levelNote": "基本无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "storage": {
   "level": "none",
   "levelNote": "基本无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "upstream": {
   "level": "high",
   "levelNote": "直接影响锂盐生产、运输和在欧使用",
   "segments": [
    "矿产与精炼",
    "正负极材料"
   ],
   "compliance": [
    "分类生效后，锂盐须按 1A 类生殖毒性物质标签和包装，在欧工厂须加强暴露控制"
   ],
   "access": [
    "可能被纳入 REACH 授权或限制候选，长期影响在欧使用"
   ],
   "support": [],
   "actions": [
    "评估标签、运输和工厂暴露控制的调整"
   ]
  }
 },
 "espr": {
  "chain": "数字产品护照体系与电池护照共用标准 → 车企和储能企业的产品数据系统需兼容；钢铝生态设计要求传导到零部件",
  "auto": {
   "level": "low",
   "levelNote": "整车不在首批范围，但数字产品护照和钢铝要求会传导",
   "segments": [
    "供应链采购"
   ],
   "compliance": [],
   "access": [
    "钢、铝生态设计要求将影响车身和零部件采购"
   ],
   "support": [],
   "actions": [
    "关注钢铝授权法案"
   ]
  },
  "storage": {
   "level": "low",
   "levelNote": "储能系统中的非电池部件未来可能纳入",
   "segments": [
    "储能系统集成"
   ],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [
    "电池护照系统按通用数字产品护照标准设计"
   ]
  },
  "upstream": {
   "level": "low",
   "levelNote": "钢铝等上游材料优先纳入首个工作计划",
   "segments": [
    "矿产与精炼"
   ],
   "compliance": [],
   "access": [
    "钢、铝生态设计要求影响电池壳体和结构件材料"
   ],
   "support": [],
   "actions": []
  }
 },
 "emd-reg": {
  "chain": "成员国评估灵活性需求并设支持机制 → 储能电站获得收益来源 → 带动储能系统和电芯需求",
  "auto": {
   "level": "none",
   "levelNote": "基本无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "storage": {
   "level": "high",
   "levelNote": "直接为储能创造收益机制",
   "segments": [
    "储能电站运营",
    "储能系统集成"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "成员国须评估灵活性需求，可设立针对储能和需求响应的支持计划",
    "PPA 和双向差价合约推广，有利于储能项目锁定收益和融资"
   ],
   "actions": [
    "跟踪重点国家的灵活性需求评估和储能支持计划，提前准备投标"
   ]
  },
  "upstream": {
   "level": "low",
   "levelNote": "储能需求增长间接带动材料需求",
   "segments": [
    "正负极材料"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "储能需求增长带动磷酸铁锂等材料需求"
   ],
   "actions": []
  }
 },
 "emd-dir": {
  "chain": "能源共享和固定价格合同获得法律地位 → 户用和社区储能需求上升",
  "auto": {
   "level": "low",
   "levelNote": "能源共享为车网互动提供基础",
   "segments": [
    "车型与动力系统规划"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "能源共享和灵活合同为 V2G 等车网互动服务创造条件"
   ],
   "actions": []
  },
  "storage": {
   "level": "medium",
   "levelNote": "利好户用和社区储能",
   "segments": [
    "户用/工商业储能"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "能源共享（含储能共享）获得法律地位，带动户用、社区储能需求"
   ],
   "actions": [
    "跟踪重点国家转化，开发社区储能方案"
   ]
  },
  "upstream": {
   "level": "none",
   "levelNote": "无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "remit": {
  "chain": "批发电力市场交易报告义务 → 自营储能电站须报告交易",
  "auto": {
   "level": "none",
   "levelNote": "无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "storage": {
   "level": "medium",
   "levelNote": "自营储能电站参与批发市场须履行报告义务",
   "segments": [
    "储能电站运营"
   ],
   "compliance": [
    "参与欧盟批发电力市场的储能运营商须履行交易报告义务，并接受 ACER 跨境市场操纵调查"
   ],
   "access": [],
   "support": [],
   "actions": [
    "确认自营电站业务的报告范围"
   ]
  },
  "upstream": {
   "level": "none",
   "levelNote": "无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "dr-nc": {
  "chain": "统一需求响应和储能参与灵活性市场的规则 → 储能和聚合商更容易进入各国市场 → 电动车也可通过聚合参与",
  "auto": {
   "level": "low",
   "levelNote": "电动车可通过聚合商参与灵活性服务",
   "segments": [
    "车型与动力系统规划"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "统一规则为电动车智能充电和 V2G 参与灵活性市场打开空间"
   ],
   "actions": [
    "评估车辆参与灵活性服务的数据接口"
   ]
  },
  "storage": {
   "level": "high",
   "levelNote": "直接决定储能进入各国灵活性市场的门槛",
   "segments": [
    "储能电站运营",
    "EMS/BMS",
    "户用/工商业储能"
   ],
   "compliance": [
    "参与灵活性服务须满足资格预审、计量和数据交换要求"
   ],
   "access": [],
   "support": [
    "统一规则降低储能进入平衡市场的门槛，扩大收益来源"
   ],
   "actions": [
    "跟踪网络规范通过时间，评估 EMS 接口"
   ]
  },
  "upstream": {
   "level": "none",
   "levelNote": "无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "gas-h2-dir": {
  "chain": "氢能市场框架 → 与电池在长时储能和重卡领域形成竞争与互补",
  "auto": {
   "level": "low",
   "levelNote": "影响燃料电池车和加氢基础设施的长期前景",
   "segments": [
    "车型与动力系统规划"
   ],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [
    "关注重卡领域氢能与电池路线的竞争"
   ]
  },
  "storage": {
   "level": "low",
   "levelNote": "氢能是长时储能的替代路线",
   "segments": [
    "储能电站运营"
   ],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "upstream": {
   "level": "none",
   "levelNote": "无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "gas-h2-reg": {
  "chain": "氢网络跨境规划 → 对电池产业链几乎无直接影响",
  "auto": {
   "level": "none",
   "levelNote": "无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "storage": {
   "level": "none",
   "levelNote": "无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "upstream": {
   "level": "none",
   "levelNote": "无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "grids-tene": {
  "chain": "储能纳入跨境基础设施规划和资金 → 大型储能项目获得 PCI 资格和融资",
  "auto": {
   "level": "none",
   "levelNote": "基本无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "storage": {
   "level": "medium",
   "levelNote": "储能项目有望获得 PCI 资格和欧盟资金",
   "segments": [
    "储能电站运营"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "储能更多纳入共同利益项目清单，获得 CEF 资金和快速许可"
   ],
   "actions": [
    "关注 PCI 评选，寻找大型储能项目机会"
   ]
  },
  "upstream": {
   "level": "none",
   "levelNote": "无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "grids-permitting": {
  "chain": "电网、储能和充电设施许可加速 → 储能电站和充电站落地更快 → 带动储能和电动车需求",
  "auto": {
   "level": "low",
   "levelNote": "充电设施许可加速，有利于电动车普及",
   "segments": [
    "整车出口"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "充电设施许可加快，有助于电动车销售"
   ],
   "actions": []
  },
  "storage": {
   "level": "high",
   "levelNote": "直接缩短储能项目许可和并网时间",
   "segments": [
    "储能电站运营",
    "储能系统集成"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "储能项目许可和并网时限缩短，压倒性公共利益推定和默示批准加快落地",
    "并网排队可能改为按项目成熟度排序"
   ],
   "actions": [
    "跟踪三方谈判结果，调整重点国家储能项目开发节奏"
   ]
  },
  "upstream": {
   "level": "none",
   "levelNote": "无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "red3": {
  "chain": "可再生能源目标和加速区 → 同址储能许可加快；BMS 数据开放义务 → 电池和储能系统须开放数据接口",
  "auto": {
   "level": "medium",
   "levelNote": "电动车须开放 BMS 数据，交通领域可再生电力计入目标",
   "segments": [
    "车型与动力系统规划"
   ],
   "compliance": [
    "第 20a 条要求电动车制造商实时开放电池管理系统基本数据（健康状态、充电状态等），供车主和第三方使用"
   ],
   "access": [],
   "support": [
    "交通领域可再生电力计入目标，利好电动车与充电"
   ],
   "actions": [
    "检查车辆 BMS 数据接口与访问权限"
   ]
  },
  "storage": {
   "level": "high",
   "levelNote": "同址储能加速许可，并有 BMS 数据开放义务",
   "segments": [
    "储能系统集成",
    "储能电站运营",
    "EMS/BMS"
   ],
   "compliance": [
    "户用和工业电池须实时开放 BMS 基本数据"
   ],
   "access": [
    "BMS 不开放数据接口的产品在部分国家可能不合规"
   ],
   "support": [
    "与可再生能源同址的储能设施适用加速许可"
   ],
   "actions": [
    "检查储能 BMS 数据接口，跟踪各国转化细则"
   ]
  },
  "upstream": {
   "level": "none",
   "levelNote": "无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "eed": {
  "chain": "能效义务 → 在欧工厂须实施能源管理体系或能源审计",
  "auto": {
   "level": "low",
   "levelNote": "在欧整车厂须履行能效义务",
   "segments": [
    "在欧整车生产"
   ],
   "compliance": [
    "在欧工厂按能耗规模实施能源管理体系或能源审计（具体门槛待核实）"
   ],
   "access": [],
   "support": [],
   "actions": []
  },
  "storage": {
   "level": "low",
   "levelNote": "数据中心等能效要求带动工商业储能需求",
   "segments": [
    "户用/工商业储能"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "能效与需求侧管理要求有利于工商业储能"
   ],
   "actions": []
  },
  "upstream": {
   "level": "low",
   "levelNote": "在欧材料工厂须履行能效义务",
   "segments": [
    "正负极材料"
   ],
   "compliance": [
    "在欧工厂按能耗规模履行能效义务"
   ],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "epbd": {
  "chain": "建筑须配置充电点和光伏 → 带动家用充电、户用光储需求",
  "auto": {
   "level": "medium",
   "levelNote": "建筑充电点和预布线要求有利于电动车普及",
   "segments": [
    "整车出口"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "新建和大修建筑须配置充电点和预布线，降低用户充电门槛"
   ],
   "actions": []
  },
  "storage": {
   "level": "medium",
   "levelNote": "带动户用光储需求",
   "segments": [
    "户用/工商业储能"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "屋顶光伏义务和零排放建筑要求带动户用储能"
   ],
   "actions": [
    "跟踪各国转化，开发光储一体产品"
   ]
  },
  "upstream": {
   "level": "none",
   "levelNote": "无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "co2-cars": {
  "chain": "车队 CO2 目标 → 车企电动化节奏 → 动力电池订单 → 上游材料需求",
  "auto": {
   "level": "high",
   "levelNote": "直接决定车企的电动化目标和罚款风险",
   "segments": [
    "车型与动力系统规划",
    "整车出口",
    "在欧整车生产"
   ],
   "compliance": [
    "2030 年新乘用车较 2021 年减排 55%、轻商车 50%，超标按每克每辆车罚款"
   ],
   "access": [
    "车企须按车队平均排放达标，电动车占比不足将面临罚款或购买积分"
   ],
   "support": [
    "与其他车企组成排放池可分摊达标压力"
   ],
   "actions": [
    "按目标测算电动车占比路径，评估排放池合作"
   ]
  },
  "storage": {
   "level": "none",
   "levelNote": "基本无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "upstream": {
   "level": "high",
   "levelNote": "长期决定欧洲动力电池材料需求",
   "segments": [
    "正负极材料",
    "前驱体",
    "矿产与精炼"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "电动化目标保证欧洲电池材料的长期需求"
   ],
   "actions": [
    "按目标调整情景更新材料需求预测"
   ]
  }
 },
 "co2-flex-2025": {
  "chain": "三年平均合规 → 车企短期压力缓解 → 2025–2026 年电动车推广和电池订单节奏放缓",
  "auto": {
   "level": "high",
   "levelNote": "直接缓解 2025 年合规和罚款压力",
   "segments": [
    "车型与动力系统规划",
    "整车出口"
   ],
   "compliance": [
    "2025–2027 年按三年平均排放评估合规"
   ],
   "access": [],
   "support": [
    "可把 2025 年的超标在 2026–2027 年弥补，减少罚款或购买积分"
   ],
   "actions": [
    "重新规划 2025–2027 年电动车投放节奏"
   ]
  },
  "storage": {
   "level": "none",
   "levelNote": "无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "upstream": {
   "level": "low",
   "levelNote": "短期需求节奏放缓",
   "segments": [
    "正负极材料"
   ],
   "compliance": [],
   "access": [
    "2025–2026 年动力电池材料需求可能低于预期"
   ],
   "support": [],
   "actions": [
    "调整短期排产计划"
   ]
  }
 },
 "co2-revision-2035": {
  "chain": "2035 目标从 100% 降至 90%，并与“欧洲制造”挂钩 → 车企保留插混和增程空间 → 纯电池需求预期下调、欧洲制造电池获优势 → 上游需求结构变化",
  "auto": {
   "level": "high",
   "levelNote": "直接改变 2035 年后的产品路线",
   "segments": [
    "车型与动力系统规划",
    "整车出口",
    "在欧整车生产"
   ],
   "compliance": [
    "2035 年起车队减排 90%（议会讨论中的方案更低），剩余部分可用欧盟低碳钢和可持续燃料抵扣（法德协议主张取消抵扣条件）"
   ],
   "access": [
    "插混车核算方式和效用系数影响插混车型的合规价值",
    "欧洲制造的小型电动车可获超级积分，进口车型无此优势"
   ],
   "support": [
    "保留插混和增程车型空间，降低全面电动化的成本压力"
   ],
   "actions": [
    "分情景规划 2035 年后的动力系统组合",
    "评估在欧生产小型电动车以获取超级积分"
   ]
  },
  "storage": {
   "level": "none",
   "levelNote": "基本无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "upstream": {
   "level": "medium",
   "levelNote": "纯电占比下调将影响材料需求总量和结构",
   "segments": [
    "正负极材料",
    "前驱体",
    "矿产与精炼"
   ],
   "compliance": [],
   "access": [
    "纯电车占比下调使动力电池材料需求预期下降"
   ],
   "support": [
    "电池助推器战略支持欧洲电池生产，带动本地材料需求"
   ],
   "actions": [
    "按不同情景更新需求预测"
   ]
  }
 },
 "afir": {
  "chain": "成员国须建设充电和加氢网络 → 电动车使用便利性提升 → 充电站配储需求上升",
  "auto": {
   "level": "high",
   "levelNote": "充电网络覆盖直接影响电动车销售，重卡充电目标影响电动重卡",
   "segments": [
    "整车出口",
    "车型与动力系统规划"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "TEN-T 沿线快充和重卡兆瓦级充电网络建设，降低用户和车队的里程焦虑",
    "刷卡支付和价格透明要求改善充电体验"
   ],
   "actions": [
    "跟踪 2026 年底 AFIR 审查，评估重卡充电目标变化对电动重卡计划的影响"
   ]
  },
  "storage": {
   "level": "medium",
   "levelNote": "充电站配储需求上升",
   "segments": [
    "储能系统集成",
    "储能电站运营"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "快充和重卡兆瓦级充电站带动站端储能（削峰、缓解电网容量不足）"
   ],
   "actions": [
    "开发充电站配储方案"
   ]
  },
  "upstream": {
   "level": "none",
   "levelNote": "基本无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "cbam": {
  "chain": "进口钢、铝须购买 CBAM 证书 → 在欧整车和电池工厂的原材料成本上升",
  "auto": {
   "level": "medium",
   "levelNote": "车身和零部件用钢铝成本上升",
   "segments": [
    "在欧整车生产",
    "供应链采购"
   ],
   "compliance": [
    "在欧工厂进口钢、铝须通过授权申报人申报并购买 CBAM 证书"
   ],
   "access": [],
   "support": [],
   "actions": [
    "测算进口钢铝的 CBAM 成本，评估低碳材料采购"
   ]
  },
  "storage": {
   "level": "low",
   "levelNote": "储能柜体、结构件用钢铝成本上升",
   "segments": [
    "储能系统集成"
   ],
   "compliance": [
    "在欧组装时进口钢铝须申报"
   ],
   "access": [],
   "support": [],
   "actions": []
  },
  "upstream": {
   "level": "medium",
   "levelNote": "铝箔、电池壳体铝材等受影响",
   "segments": [
    "正负极材料",
    "矿产与精炼"
   ],
   "compliance": [
    "向欧盟出口铝制品（含铝箔）须提供隐含排放数据"
   ],
   "access": [
    "高碳铝在欧盟市场成本劣势扩大"
   ],
   "support": [
    "低碳铝获得溢价"
   ],
   "actions": [
    "测算出口铝材的隐含排放，评估绿电铝"
   ]
  }
 },
 "cbam-omnibus": {
  "chain": "50 吨豁免门槛 → 小批量进口商合规负担降低",
  "auto": {
   "level": "low",
   "levelNote": "小批量进口钢铝可豁免",
   "segments": [
    "在欧整车生产"
   ],
   "compliance": [
    "年进口量 50 吨以下免除 CBAM 义务"
   ],
   "access": [],
   "support": [],
   "actions": []
  },
  "storage": {
   "level": "low",
   "levelNote": "小批量进口可豁免",
   "segments": [
    "储能系统集成"
   ],
   "compliance": [
    "年进口量 50 吨以下免除 CBAM 义务"
   ],
   "access": [],
   "support": [],
   "actions": []
  },
  "upstream": {
   "level": "none",
   "levelNote": "无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "cbam-downstream": {
  "chain": "CBAM 扩展到约 180 种钢铝下游产品 → 进口零部件（可能含电池壳体、结构件）须购买证书 → 本地采购更具优势",
  "auto": {
   "level": "high",
   "levelNote": "大量汽车钢铝零部件可能被纳入",
   "segments": [
    "在欧整车生产",
    "供应链采购",
    "整车出口"
   ],
   "compliance": [
    "若相关零部件被纳入，进口时须申报隐含排放并购买 CBAM 证书（拟 2028 年起）"
   ],
   "access": [
    "进口钢铝零部件成本上升，削弱相对欧盟本地采购的价格优势"
   ],
   "support": [],
   "actions": [
    "对照下游产品清单核查进口零部件",
    "评估本地化采购"
   ]
  },
  "storage": {
   "level": "medium",
   "levelNote": "储能柜体和结构件可能被纳入",
   "segments": [
    "储能系统集成"
   ],
   "compliance": [
    "若相关部件被纳入，进口时须申报并购买证书"
   ],
   "access": [],
   "support": [],
   "actions": [
    "核查储能系统钢铝部件的 CN 编码"
   ]
  },
  "upstream": {
   "level": "medium",
   "levelNote": "铝箔、壳体等材料可能被纳入",
   "segments": [
    "正负极材料"
   ],
   "compliance": [
    "若铝箔等被纳入，出口须提供隐含排放数据"
   ],
   "access": [],
   "support": [],
   "actions": [
    "核查产品是否在清单内"
   ]
  }
 },
 "ets": {
  "chain": "碳价推高电价 → 在欧工厂能源成本上升；ETS 收入资助创新基金 → 支持欧洲电池项目",
  "auto": {
   "level": "medium",
   "levelNote": "ETS2 推高燃油成本，间接利好电动车",
   "segments": [
    "整车出口"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "ETS2（建筑和道路交通燃料）推高燃油车使用成本，提升电动车吸引力"
   ],
   "actions": []
  },
  "storage": {
   "level": "medium",
   "levelNote": "碳价推高电价波动，提升储能套利价值",
   "segments": [
    "储能电站运营"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "碳价和电价波动提升储能的套利与调峰收益",
    "创新基金可支持储能制造项目"
   ],
   "actions": []
  },
  "upstream": {
   "level": "medium",
   "levelNote": "在欧材料工厂间接承担碳成本",
   "segments": [
    "正负极材料",
    "矿产与精炼"
   ],
   "compliance": [
    "在欧工厂通过电价间接承担碳成本，大型燃烧装置可能直接纳入"
   ],
   "access": [],
   "support": [
    "创新基金可支持材料和回收项目"
   ],
   "actions": [
    "跟踪创新基金相关招标"
   ]
  }
 },
 "ets-2026": {
  "chain": "2030 年后减排因子放缓 → 碳价预期下降、工业电价风险降低；新设工业脱碳银行 → 为电池、材料项目提供资金",
  "auto": {
   "level": "low",
   "levelNote": "影响 ETS2 和长期燃油成本预期",
   "segments": [
    "整车出口"
   ],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "storage": {
   "level": "low",
   "levelNote": "碳价预期影响电价和储能收益",
   "segments": [
    "储能电站运营"
   ],
   "compliance": [],
   "access": [
    "碳价预期下降可能降低电价波动和储能套利空间"
   ],
   "support": [],
   "actions": []
  },
  "upstream": {
   "level": "medium",
   "levelNote": "工业脱碳银行可能成为材料项目资金来源",
   "segments": [
    "正负极材料",
    "回收与再生料"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "工业脱碳银行（2031–2040，约 1000 亿欧元）及过渡期 ETS 投资助推器"
   ],
   "actions": [
    "跟踪工业脱碳银行的申请条件"
   ]
  }
 },
 "ev-duties": {
  "chain": "中国产电动车被征反补贴税 → 中国车企加快在欧建厂 → 带动电池企业跟随在欧配套；行业呼吁对电池供应链另行调查",
  "auto": {
   "level": "high",
   "levelNote": "直接提高中国产电动车的进口成本",
   "segments": [
    "整车出口",
    "在欧整车生产"
   ],
   "compliance": [
    "中国产纯电动乘用车按企业适用 7.8%–35.3% 的反补贴税（在 10% 关税之上），为期五年"
   ],
   "access": [
    "中国产电动车价格竞争力下降"
   ],
   "support": [
    "在欧生产的车型不受反补贴税影响"
   ],
   "actions": [
    "评估在欧建厂或本地组装",
    "跟踪价格承诺谈判进展"
   ]
  },
  "storage": {
   "level": "none",
   "levelNote": "基本无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "upstream": {
   "level": "medium",
   "levelNote": "存在对电池及材料另行调查的风险",
   "segments": [
    "正负极材料",
    "前驱体"
   ],
   "compliance": [],
   "access": [
    "行业呼吁对电芯、正负极材料发起反补贴调查，存在贸易救济风险"
   ],
   "support": [],
   "actions": [
    "跟踪是否发起新的贸易救济调查"
   ]
  }
 },
 "cra": {
  "chain": "联网产品须满足网络安全要求才能贴 CE → 车载以外的联网设备（充电桩、储能、BMS/EMS）须合规；整车由型式认证规则单独管理",
  "auto": {
   "level": "medium",
   "levelNote": "整车不适用，但家用充电桩、车机外的联网配件适用",
   "segments": [
    "整车出口"
   ],
   "compliance": [
    "车企销售的家用充电桩、App 关联的联网配件须满足 CRA 要求"
   ],
   "access": [
    "不合规的联网配件不能加贴 CE 标志"
   ],
   "support": [],
   "actions": [
    "梳理整车以外的联网产品"
   ]
  },
  "storage": {
   "level": "high",
   "levelNote": "联网储能系统和 BMS/EMS 软件直接适用",
   "segments": [
    "储能系统集成",
    "EMS/BMS",
    "户用/工商业储能"
   ],
   "compliance": [
    "2026-09-11 起须报告被积极利用的漏洞和严重事件，2027-12-11 起新上市产品须满足基本网络安全要求（含 SBOM、安全更新）"
   ],
   "access": [
    "不满足 CRA 的联网储能产品不能加贴 CE 标志；储能变流器、EMS 若被列为 II 类重要产品须第三方评定"
   ],
   "support": [
    "满足 CRA 可回应欧洲客户对中国设备网络安全的疑虑"
   ],
   "actions": [
    "建立 PSIRT 和漏洞报告流程",
    "确定产品支援期和 SBOM"
   ]
  },
  "upstream": {
   "level": "none",
   "levelNote": "基本无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "cra-important": {
  "chain": "重要和关键产品清单 → 决定联网设备的合格评定路径 → 影响储能、充电设备的认证成本和周期",
  "auto": {
   "level": "low",
   "levelNote": "涉及充电设备等联网产品",
   "segments": [
    "整车出口"
   ],
   "compliance": [
    "对照清单确定联网配件的合格评定路径"
   ],
   "access": [],
   "support": [],
   "actions": []
  },
  "storage": {
   "level": "high",
   "levelNote": "决定储能联网部件的合格评定路径",
   "segments": [
    "储能系统集成",
    "EMS/BMS"
   ],
   "compliance": [
    "对照 28 类技术描述判断产品类别，II 类须第三方评定"
   ],
   "access": [
    "若被归为 II 类，须经公告机构评定才能加贴 CE"
   ],
   "support": [],
   "actions": [
    "提前预约公告机构产能"
   ]
  },
  "upstream": {
   "level": "none",
   "levelNote": "无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "nis2": {
  "chain": "能源和制造业实体须落实网络安全义务 → 储能运营商、车企、电池制造商的在欧实体须登记和报告 → 安全要求传导到设备供应商",
  "auto": {
   "level": "high",
   "levelNote": "汽车制造属于附件二“其他关键行业”",
   "segments": [
    "在欧整车生产",
    "供应链采购"
   ],
   "compliance": [
    "中大型车企的在欧实体属于“重要实体”，须登记、落实风险管理和事件报告"
   ],
   "access": [
    "车企会把供应链安全要求传导给零部件和电池供应商"
   ],
   "support": [],
   "actions": [
    "确认在欧子公司在各国的登记义务"
   ]
  },
  "storage": {
   "level": "high",
   "levelNote": "储能运营商、聚合商属于能源行业“基本实体”",
   "segments": [
    "储能电站运营",
    "储能系统集成",
    "EMS/BMS"
   ],
   "compliance": [
    "储能电站运营商、聚合商须落实风险管理和 24 小时预警、72 小时通报的事件报告"
   ],
   "access": [
    "电网和能源客户会要求储能设备供应商提供网络安全保证，影响中标"
   ],
   "support": [],
   "actions": [
    "建立网络安全管理体系（如 ISO 27001），准备供应链安全问卷"
   ]
  },
  "upstream": {
   "level": "low",
   "levelNote": "主要通过下游客户要求间接影响",
   "segments": [
    "正负极材料"
   ],
   "compliance": [],
   "access": [
    "大型客户可能要求材料供应商满足基本网络安全要求"
   ],
   "support": [],
   "actions": []
  }
 },
 "nccs": {
  "chain": "影响跨境电力流的实体须执行额外安全控制 → 大型储能和电网客户向设备供应商提出要求",
  "auto": {
   "level": "none",
   "levelNote": "无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "storage": {
   "level": "medium",
   "levelNote": "大型储能运营商可能被认定为高影响实体",
   "segments": [
    "储能电站运营",
    "EMS/BMS"
   ],
   "compliance": [
    "被认定为高影响或关键影响实体的储能运营商须落实额外安全控制"
   ],
   "access": [
    "客户会要求储能设备满足规范的安全控制和供应链安全要求"
   ],
   "support": [],
   "actions": [
    "准备针对电网客户的网络安全控制说明"
   ]
  },
  "upstream": {
   "level": "none",
   "levelNote": "无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "csa": {
  "chain": "自愿性网络安全认证 → 可作为 CRA 等法规的合规证明",
  "auto": {
   "level": "low",
   "levelNote": "认证可用于证明联网产品合规",
   "segments": [
    "整车出口"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "欧盟网络安全认证可作为合规证明"
   ],
   "actions": []
  },
  "storage": {
   "level": "low",
   "levelNote": "认证可用于证明储能联网产品合规",
   "segments": [
    "EMS/BMS"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "欧盟网络安全认证可作为 CRA 合规证明"
   ],
   "actions": []
  },
  "upstream": {
   "level": "none",
   "levelNote": "无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "csa2": {
  "chain": "认定高风险供应商和关键 ICT 资产 → 能源设备（逆变器、储能 EMS、充电管理平台）可能被限制 → 中国储能企业和车企的联网产品面临排除风险",
  "auto": {
   "level": "medium",
   "levelNote": "车联网和充电管理平台存在被纳入的可能",
   "segments": [
    "整车出口",
    "车型与动力系统规划"
   ],
   "compliance": [],
   "access": [
    "若车联网、充电管理平台被列为关键 ICT 资产，来自被认定国家的供应商可能受限（目前提案以电信和能源为重点）"
   ],
   "support": [],
   "actions": [
    "跟踪关键资产清单和高风险供应商认定标准"
   ]
  },
  "storage": {
   "level": "high",
   "levelNote": "储能 EMS、变流器可能被列为关键 ICT 资产",
   "segments": [
    "储能系统集成",
    "EMS/BMS",
    "储能电站运营"
   ],
   "compliance": [],
   "access": [
    "来自被认定国家的供应商可能被排除在采购、欧盟资助项目和认证之外，并须逐步替换",
    "欧委会已限制使用高风险供应商逆变器的光伏项目获得欧盟资金，类似做法可能延伸到储能"
   ],
   "support": [],
   "actions": [
    "评估本地化方案：欧洲数据存储、本地运维和软件控制权",
    "准备产品安全证明材料"
   ]
  },
  "upstream": {
   "level": "none",
   "levelNote": "基本无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "ai-act": {
  "chain": "高风险 AI 须合格评定 → 储能 EMS 中的安全类 AI、车企工厂和招聘中的 AI 需评估",
  "auto": {
   "level": "medium",
   "levelNote": "车辆中的 AI 由型式认证规则管理，但工厂和企业管理中的 AI 适用",
   "segments": [
    "在欧整车生产"
   ],
   "compliance": [
    "工厂中作为机械安全组件的 AI 适用附件一高风险义务（2028-08-02 起），在欧招聘使用 AI 筛选简历属于高风险",
    "2025-02-02 起在欧实体须确保员工具备 AI 素养"
   ],
   "access": [],
   "support": [],
   "actions": [
    "盘点工厂和管理流程中的 AI 应用"
   ]
  },
  "storage": {
   "level": "medium",
   "levelNote": "储能 EMS 中承担安全功能的 AI 可能属于高风险",
   "segments": [
    "EMS/BMS",
    "储能电站运营"
   ],
   "compliance": [
    "用作电力关键基础设施安全组件的 AI 属于附件三高风险（2027-12-02 起）"
   ],
   "access": [
    "被认定为高风险的 AI 功能须完成合格评定"
   ],
   "support": [],
   "actions": [
    "评估 EMS 中 AI 功能是否构成安全组件"
   ]
  },
  "upstream": {
   "level": "low",
   "levelNote": "工厂中的 AI 质检等可能适用",
   "segments": [
    "正负极材料"
   ],
   "compliance": [
    "在欧工厂作为机械安全组件的 AI 适用附件一高风险义务"
   ],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "ai-omnibus": {
  "chain": "高风险 AI 义务推迟 12–16 个月 → 车企、储能企业的 AI 合规准备时间延长",
  "auto": {
   "level": "low",
   "levelNote": "高风险义务推迟",
   "segments": [
    "在欧整车生产"
   ],
   "compliance": [
    "附件一高风险义务推迟至 2028-08-02"
   ],
   "access": [],
   "support": [
    "合规准备时间延长"
   ],
   "actions": []
  },
  "storage": {
   "level": "low",
   "levelNote": "高风险义务推迟",
   "segments": [
    "EMS/BMS"
   ],
   "compliance": [
    "附件三高风险义务推迟至 2027-12-02"
   ],
   "access": [],
   "support": [
    "合规准备时间延长"
   ],
   "actions": []
  },
  "upstream": {
   "level": "none",
   "levelNote": "无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "uk-zev": {
  "chain": "ZEV 比例逐年提高 → 车企必须多卖纯电车或购买额度 → 纯电车和动力电池需求被托底，额度在车企之间流动",
  "auto": {
   "level": "high",
   "levelNote": "在英国注册新车的车企直接承担年度配额义务",
   "segments": [
    "整车出口",
    "英国销售"
   ],
   "compliance": [
    "每年零排放车占新注册量须达标：乘用车 2026 年 33%，2030 年 80%；未达标按 £12,000/辆缴纳合规款",
    "可通过储蓄、借用、CO2 转换和交易履约；须按要求向主管部门报告注册数据"
   ],
   "access": [
    "纯电车型多的中国品牌合规压力小，还可出售富余额度",
    "以燃油车和混动为主的车企须购买额度或接受罚款，可能压低燃油车在英供应"
   ],
   "support": [
    "额度交易为纯电车企带来额外收入，有利于在英定价"
   ],
   "actions": [
    "测算每年可出售的额度和价格区间，与传统车企洽谈额度交易",
    "跟踪 2026 年审查结论，评估 2027 年后目标是否调整"
   ]
  },
  "storage": {
   "level": "none",
   "levelNote": "对储能企业无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "upstream": {
   "level": "low",
   "levelNote": "间接影响：英国电动车产量和电池需求的政策基础",
   "segments": [
    "正负极材料",
    "锂盐"
   ],
   "compliance": [],
   "access": [
    "配额托底英国电池需求，但英国本土电池产能有限，材料需求更多体现为对整车和电池进口"
   ],
   "support": [],
   "actions": [
    "关注英国电池工厂（如在建超级工厂）的材料本地采购需求"
   ]
  }
 },
 "uk-ecg": {
  "chain": "补贴按生产碳排放分档 → 车企要求电池供应商提供电芯生产地和用电数据 → 低碳电芯和低碳组装地获得价格优势",
  "auto": {
   "level": "high",
   "levelNote": "直接决定 £37,000 以下纯电车型能否享受最高 £3,750 补贴",
   "segments": [
    "整车出口",
    "英国销售"
   ],
   "compliance": [
    "逐款车型向 OZEV 申请资格，提交型式认证、质保、电池衰减和生产碳排放证据（英文）",
    "生产商须持有经核实的 SBTi 目标或 TPI 评估 4 级以上"
   ],
   "access": [
    "整车组装地或电芯生产地碳排放超阈值的车型无法获得补贴，在同价位竞争中处于劣势"
   ],
   "support": [
    "满足条件的车型可获 £1,500–£3,750 补贴，直接降低消费者购车成本"
   ],
   "actions": [
    "逐款评估车型的补贴资格和档位，必要时调整供货基地",
    "尽早申请 SBTi 核实或提升 TPI 评级"
   ]
  },
  "storage": {
   "level": "none",
   "levelNote": "对储能企业无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "upstream": {
   "level": "low",
   "levelNote": "间接影响：补贴看的是电芯生产地，材料环节的碳排放目前不在门槛内",
   "segments": [
    "正负极材料"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "电芯企业转向低碳生产地时，可能带动材料就近配套"
   ],
   "actions": [
    "关注客户电芯产能向低碳地区转移的计划"
   ]
  }
 },
 "uk-roo": {
  "chain": "原产地规则收紧 → 整车厂要求电池包和电芯具备英欧原产资格 → 亚洲进口电芯配套的车辆面临 10% 关税，本地电池产能需求上升",
  "auto": {
   "level": "high",
   "levelNote": "在英国或欧盟生产、并在英欧之间销售的电动车直接受影响",
   "segments": [
    "在欧整车生产",
    "英国销售",
    "供应链采购"
   ],
   "compliance": [
    "2027 年起按最终规则核算每款车型的原产资格，向进口方出具原产地声明"
   ],
   "access": [
    "电池非原产的车型在英欧之间失去零关税，须缴纳 10% 关税"
   ],
   "support": [
    "在英国或欧盟本地采购电池的车型可继续零关税"
   ],
   "actions": [
    "2026 年底前完成在产车型的原产资格测算",
    "与电池供应商确认 2027 年后的本地化供货方案"
   ]
  },
  "storage": {
   "level": "low",
   "levelNote": "规则针对车辆及车用动力电池，储能电池不在这几个特定规则范围内",
   "segments": [
    "储能系统集成"
   ],
   "compliance": [],
   "access": [
    "固定式储能电池适用一般原产地规则，影响有限（待核实）"
   ],
   "support": [],
   "actions": []
  },
  "upstream": {
   "level": "medium",
   "levelNote": "电池原产资格的计算会追溯到正极活性材料等关键部件",
   "segments": [
    "正极材料",
    "电芯部件"
   ],
   "compliance": [
    "向英欧电池厂供货时可能需要提供材料原产和价值数据"
   ],
   "access": [
    "英欧本地材料更有利于客户的电池满足原产规则"
   ],
   "support": [
    "在英欧本地设立材料产能可获得订单优势"
   ],
   "actions": [
    "了解客户按最终规则核算原产资格所需的数据"
   ]
  }
 },
 "uk-cbam": {
  "chain": "进口铝材、钢材按隐含排放征税 → 在英加工企业采购成本上升 → 低碳或欧盟来源的材料更有竞争力",
  "auto": {
   "level": "low",
   "levelNote": "整车和零部件不在范围内，在英工厂进口钢铝原料时受影响",
   "segments": [
    "在英整车生产",
    "供应链采购"
   ],
   "compliance": [],
   "access": [
    "在英工厂进口钢铝原料成本上升"
   ],
   "support": [],
   "actions": [
    "核对在英工厂进口原料的 CBAM 范围"
   ]
  },
  "storage": {
   "level": "low",
   "levelNote": "储能产品不在范围内，进口钢结构、铝材时受影响",
   "segments": [
    "储能系统集成"
   ],
   "compliance": [],
   "access": [
    "集装箱式储能所用钢结构如单独进口可能在范围内（待核实）"
   ],
   "support": [],
   "actions": []
  },
  "upstream": {
   "level": "high",
   "levelNote": "出口英国的铝、钢产品直接受影响",
   "segments": [
    "铝箔/铝材",
    "钢材",
    "对英出口"
   ],
   "compliance": [
    "向英国进口商提供按英国规则计算的隐含排放数据，必要时经核查",
    "海外设施须按 HMRC 指南监测排放"
   ],
   "access": [
    "无法提供实际排放数据时按默认值计税，价格竞争力下降",
    "欧盟产品将获豁免，中国产品相对劣势扩大"
   ],
   "support": [],
   "actions": [
    "按 HMRC 指南建立出口英国产品的排放监测",
    "与英国客户约定排放数据和成本分摊"
   ]
  }
 },
 "uk-ets-link": {
  "chain": "英欧碳市场挂钩 → 英国碳价向欧盟看齐、双方互免 CBAM → 英国产钢铝等进入欧盟免缴 CBAM，英国对欧生产基地价值上升",
  "auto": {
   "level": "low",
   "levelNote": "整车生产不在碳市场覆盖范围，影响体现为电价和钢铝成本",
   "segments": [
    "在英整车生产"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "英国产钢铝零部件出口欧盟时免缴欧盟 CBAM"
   ],
   "actions": []
  },
  "storage": {
   "level": "low",
   "levelNote": "间接影响：碳价影响英国电价和储能套利空间",
   "segments": [
    "储能运营"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "碳价上升通常拉大峰谷价差，利好储能收益（间接）"
   ],
   "actions": []
  },
  "upstream": {
   "level": "medium",
   "levelNote": "英国产铝、钢等出口欧盟将免缴欧盟 CBAM",
   "segments": [
    "铝材",
    "钢材",
    "在英设厂"
   ],
   "compliance": [],
   "access": [
    "在英国生产的 CBAM 商品进入欧盟更具成本优势，从中国直接出口欧盟则无此豁免"
   ],
   "support": [
    "在英国设立铝、钢等加工产能可同时覆盖英欧市场"
   ],
   "actions": [
    "评估英国作为对欧材料加工基地的可行性"
   ]
  }
 },
 "uk-batteries": {
  "chain": "大不列颠旧规则与北爱尔兰欧盟规则并存 → 电池企业维持两套合规 → 全英统一制度出台后向欧盟新电池法看齐",
  "auto": {
   "level": "medium",
   "levelNote": "车企作为动力电池投放主体时承担生产者责任",
   "segments": [
    "整车出口",
    "英国销售"
   ],
   "compliance": [
    "在英销售电动车时，须为车内动力电池履行生产者登记和回收义务（视进口安排而定）",
    "在北爱尔兰销售时须满足欧盟新电池法要求"
   ],
   "access": [],
   "support": [],
   "actions": [
    "确认英国进口商或授权方承担电池生产者责任的安排"
   ]
  },
  "storage": {
   "level": "high",
   "levelNote": "储能电池属于工业电池，直接受管",
   "segments": [
    "储能系统集成",
    "户用/工商业储能",
    "对英出口"
   ],
   "compliance": [
    "大不列颠：作为工业电池生产者登记，承担回收义务",
    "北爱尔兰：满足欧盟新电池法对固定式储能的安全、性能和护照要求"
   ],
   "access": [
    "全英统一制度可能引入欧盟式的固定式储能安全和性能要求"
   ],
   "support": [],
   "actions": [
    "跟踪全英统一制度咨询，评估对储能产品的新增要求"
   ]
  },
  "upstream": {
   "level": "low",
   "levelNote": "间接影响：未来若引入再生料和尽调要求，将延伸至材料端",
   "segments": [
    "回收",
    "正负极材料"
   ],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [
    "关注全英统一制度是否包括再生料最低含量和尽调要求"
   ]
  }
 },
 "uk-dpr": {
  "chain": "英国研究产品护照 → 若与欧盟互通，企业一套数据覆盖两地 → 若另起格式，产业链须准备两套数据",
  "auto": {
   "level": "low",
   "levelNote": "可能涉及车辆及电池的产品信息传递",
   "segments": [
    "整车出口"
   ],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": [
    "跟踪政府回应"
   ]
  },
  "storage": {
   "level": "medium",
   "levelNote": "储能电池同样需要电池护照，英国是否另设格式影响数据投入",
   "segments": [
    "储能系统集成"
   ],
   "compliance": [],
   "access": [
    "若英国另设格式，可能需要额外数据系统"
   ],
   "support": [],
   "actions": [
    "跟踪政府回应"
   ]
  },
  "upstream": {
   "level": "low",
   "levelNote": "护照数据最终会追溯到材料来源和碳足迹",
   "segments": [
    "正负极材料"
   ],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "uk-product-reg": {
  "chain": "英国继续认可 CE 并获得跟进欧盟规则的授权 → 欧盟合规文件可用于大不列颠 → 降低英欧两地的重复认证成本",
  "auto": {
   "level": "low",
   "levelNote": "整车适用型式认证体系，本法主要影响零部件和充电设备",
   "segments": [
    "零部件",
    "充电设备"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "零部件和充电设备的 CE 文件可用于大不列颠（视领域而定）"
   ],
   "actions": []
  },
  "storage": {
   "level": "medium",
   "levelNote": "储能系统涉及电气安全、电磁兼容等产品规则",
   "segments": [
    "储能系统集成",
    "户用/工商业储能"
   ],
   "compliance": [
    "确认储能产品所涉领域（低电压、电磁兼容、无线电等）在大不列颠的标志要求"
   ],
   "access": [],
   "support": [
    "CE 继续认可，可沿用欧盟认证"
   ],
   "actions": [
    "对照政府按领域列出的现行做法逐项确认"
   ]
  },
  "upstream": {
   "level": "none",
   "levelNote": "对材料企业无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "uk-minerals": {
  "chain": "英国推动本土加工和回收、限制单一来源 → 政府支持项目倾向多元化采购 → 中国材料企业在英合作或设厂的方式需要调整",
  "auto": {
   "level": "low",
   "levelNote": "间接影响电池原材料来源",
   "segments": [
    "供应链采购"
   ],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "storage": {
   "level": "low",
   "levelNote": "间接影响电池原材料来源",
   "segments": [
    "材料采购"
   ],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "upstream": {
   "level": "high",
   "levelNote": "直接关系锂、镍、钴、石墨等材料的英国市场与投资环境",
   "segments": [
    "锂盐",
    "正负极材料",
    "回收",
    "在英设厂"
   ],
   "compliance": [],
   "access": [
    "单一国家供应不超过 60% 的目标意味着来自中国的材料份额可能受到政策引导限制"
   ],
   "support": [
    "在英国设立加工或回收产能可申请关键矿产基金、DRIVE35 和电价补贴"
   ],
   "actions": [
    "评估在英加工或回收项目的政策支持",
    "关注政府支持项目中的供应来源要求"
   ]
  }
 },
 "uk-drive35": {
  "chain": "政府资助零排放汽车和电池制造 → 降低在英设厂成本 → 配合原产地规则吸引电池和材料本地化",
  "auto": {
   "level": "medium",
   "levelNote": "在英整车和零部件投资可申请资助",
   "segments": [
    "在英整车生产",
    "零部件"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "零排放车型和关键零部件产线可申请资助"
   ],
   "actions": [
    "评估在英生产项目的资助可能性"
   ]
  },
  "storage": {
   "level": "low",
   "levelNote": "主要面向汽车领域，储能项目一般不在范围内",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "upstream": {
   "level": "medium",
   "levelNote": "材料和关键矿产项目同样在资助范围内",
   "segments": [
    "锂盐",
    "正负极材料",
    "在英设厂"
   ],
   "compliance": [],
   "access": [],
   "support": [
    "康沃尔锂项目已获资助"
   ],
   "actions": [
    "评估在英材料项目申请 DRIVE35 的条件"
   ]
  }
 },
 "uk-esa": {
  "chain": "英国对智能户用储能、充电桩设统一网络安全和电网要求 → 系统集成商和充电桩企业须做英国专项认证 → 合规能力成为进入英国户用市场的门槛",
  "auto": {
   "level": "low",
   "levelNote": "主要涉及家用充电桩，车企如销售自有品牌充电桩则受影响",
   "segments": [
    "充电设备"
   ],
   "compliance": [
    "自有品牌家用充电桩须满足智能充电和网络安全要求"
   ],
   "access": [],
   "support": [],
   "actions": []
  },
  "storage": {
   "level": "high",
   "levelNote": "户用和小型工商业储能直接受管",
   "segments": [
    "户用/工商业储能",
    "储能系统集成",
    "对英出口"
   ],
   "compliance": [
    "以智能功能销售的储能须满足智能功能、网络安全（含远程控制安全）和电网稳定性要求",
    "保存并提供合规证明"
   ],
   "access": [
    "不满足要求的智能储能产品将不能在英销售"
   ],
   "support": [
    "统一规则有利于户用储能参与需求响应和灵活性市场"
   ],
   "actions": [
    "对照草案要求评估产品的网络安全和远程控制设计",
    "跟踪最终条例的实施日期"
   ]
  },
  "upstream": {
   "level": "none",
   "levelNote": "对材料企业无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 },
 "uk-ldes": {
  "chain": "收益托底降低长时储能投资风险 → 长时技术项目落地加速 → 储能技术路线分化",
  "auto": {
   "level": "none",
   "levelNote": "对车企无直接影响",
   "segments": [],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  },
  "storage": {
   "level": "medium",
   "levelNote": "影响英国储能市场技术路线和项目收益",
   "segments": [
    "储能系统集成",
    "大型储能"
   ],
   "compliance": [],
   "access": [
    "资格标准对放电时长有要求，常规锂电项目一般不在范围内（待核实）"
   ],
   "support": [
    "符合条件的长时储能项目获得长期收益保障"
   ],
   "actions": [
    "评估长时储能产品是否满足资格标准",
    "关注下一申请窗口"
   ]
  },
  "upstream": {
   "level": "low",
   "levelNote": "间接影响：可能带动钒等长时储能材料需求",
   "segments": [
    "其他材料"
   ],
   "compliance": [],
   "access": [],
   "support": [],
   "actions": []
  }
 }
};
