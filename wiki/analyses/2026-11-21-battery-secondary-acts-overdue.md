---
type: analysis
title: 新电池法配套二级法案的逾期情况
question: 新电池法哪些配套二级法案已经逾期或卡住？会推迟哪些企业义务？
sources: [raw/dossiers/batteries.md, raw/dossiers/bat-cfb.md, raw/dossiers/bat-recycled.md, raw/dossiers/bat-dd-guidelines.md]
updated: 2026-11-21
---

# 新电池法配套二级法案的逾期情况（截至 2026-11-21）

> 这是一篇回存的查询结果，演示 wiki 的 query 流程：问题 → 读 index 和相关页面 → 回答 → 存为 analyses 页。

**问题**：[新电池法](../dossiers/batteries.md)哪些配套二级法案已经逾期或卡住？会推迟哪些企业义务？

## 结论

1. **三项有明确法定期限的已全部逾期**：EV 电池碳足迹方法（逾期一年九个月以上）、尽调指南（逾期近四个月）、再生料含量方法（逾期三个月）。
2. 碳足迹声明义务因此**实际上还没开始**，因为它从方法法案生效后 12 个月起算。
3. 另有两项虽然没有明确的法定期限，但对应义务已经或即将适用，**事实上形成缺口**：标签格式实施条例（标签要求 2026-08-18 已适用）、护照访问权限实施条例（护照 2027-02-18 适用）。
4. 卡住的法案大多由 [DG GROW](../actors/dg-grow.md) 负责；[DG ENV](../actors/dg-env.md) 负责的回收类法案大多已通过。

## 明细

| 二级法案 | 负责总司 | 法定期限 | 状态 | 影响的义务 | 来源 |
|---|---|---|---|---|---|
| [EV 电池碳足迹方法](../dossiers/bat-cfb.md) | GROW | 2025-02-18 | 草案 2024-04-30；ISC 阶段 | EV 碳足迹声明（生效后 12 个月起算）→ 等级 → 限值 | curated、Have Your Say |
| [电池尽调指南](../dossiers/bat-dd-guidelines.md) | — | 2026-07-26 | 未见发布 | 2027-08-18 尽调义务的体系设计依据 | curated、EUR-Lex |
| [再生料含量方法](../dossiers/bat-recycled.md) | ENV | 2026-08-18 | 草案 2026-08-12；ISC 阶段 | 再生料文件要求（2028，待核实）、2031 年目标 | curated、Have Your Say |
| 标签格式实施条例 | ENV | 本库无数据 | 草案 2025-12-15；ISC 阶段 | 标签要求 2026-08-18 已适用 | curated、Have Your Say |
| 护照访问权限实施条例 | GROW | 本库无数据 | 草案 2026-10-19；ISC 阶段 | 护照 2027-02-18 适用，见 [电池护照](../topics/battery-passport.md) | curated、Have Your Say |
| 碳足迹声明格式实施条例 | GROW | 本库无数据 | 草案 2024-04-30；ISC 阶段 | 与 EV 碳足迹方法捆绑 | Have Your Say |
| EV 碳足迹等级、工业电池碳足迹方法 | GROW | 本库无数据 | 2024-06-26 列入计划，尚无草案 | 碳足迹第二步、工业电池声明 | Have Your Say |
| 尽调计划认可（两项） | GROW | 本库无数据 | 2024-06-26 列入计划，尚无草案 | 第三方尽调计划的认可 | Have Your Say |

已按时通过的，作为对照：[回收效率方法](../dossiers/bat-recycling-eff.md)（2025-03-21）、[黑粉废物代码](../dossiers/black-mass.md)（2025-03-05）、数据报告格式（2025-11-13）、可拆卸豁免清单（2026-07-14）（来源：EUR-Lex、Have Your Say）。

## 局限

- “法定期限”只覆盖 curated 中已录入的三项；其余各项的法定期限需对照条例 2023/1542 原文补充。
- “ISC 阶段”来自 Have Your Say 的 stage 字段，只能说明还在部门间协商，不能说明具体卡在哪里。

## 后续跟进建议

- 在 curated 中为标签格式和护照访问权限两项实施条例新增条目，并补上法定期限。
- 每日数据更新后，如果 changes.json 出现这些法案的 EUR-Lex 记录，就 ingest 并更新本页。
