# EU 电池与能源政策 Wiki · 总目录

由 LLM 维护的知识库，维护规范见 [CLAUDE.md](CLAUDE.md)，操作记录见 [log.md](log.md)。
原始资料在 `raw/dossiers/`，由 `tools/export-wiki-raw.ps1` 从每日抓取的数据生成。

最后更新：2026-11-21 · 覆盖范围：电池与关键原材料板块（56 个 curated dossier 中的 9 个）

## 需要关注

| 优先级 | 事项 | 页面 |
|---|---|---|
| 高 | 黑粉新废物代码据报道 2026-12-09 起适用，日期待核实，不到三周 | [black-mass](dossiers/black-mass.md) |
| 高 | 电池尽调指南法定期限 2026-07-26 已过，仍未见发布；尽调义务 2027-08-18 适用 | [bat-dd-guidelines](dossiers/bat-dd-guidelines.md) |
| 高 | 电池护照 2027-02-18 适用，访问权限实施条例仍是草案 | [电池护照](topics/battery-passport.md) |
| 中 | EV 电池碳足迹方法逾期一年九个月以上，碳足迹声明尚未开始 | [bat-cfb](dossiers/bat-cfb.md) |
| 中 | 再生料含量方法 2026-08-18 法定期限已过 | [bat-recycled](dossiers/bat-recycled.md) |
| 中 | 标签要求 2026-08-18 已适用，但标签格式实施条例未见通过 | [batteries](dossiers/batteries.md) |
| 低 | curated 需要更正或补充的 6 处，见 log 中的“反馈到 curated” | [log.md](log.md) |

## 法规（dossiers）

| 页面 | 状态 | 一句话 |
|---|---|---|
| [新电池法](dossiers/batteries.md) | 已生效 | 条例 2023/1542，电池全生命周期规则 |
| [电池尽调推迟（Omnibus IV）](dossiers/batteries-dd-omnibus.md) | 已生效 | 条例 2025/1561，尽调义务推迟到 2027-08-18 |
| [EV 电池碳足迹方法](dossiers/bat-cfb.md) | 逾期未通过 | 碳足迹声明、分级、限值的计算基础 |
| [再生料含量方法](dossiers/bat-recycled.md) | 逾期未通过 | 质量平衡法；欧盟境内回收材料据报道有 1.3 修正系数 |
| [回收效率方法](dossiers/bat-recycling-eff.md) | 已生效 | 授权条例 2025/606；附件十二目标评估报告 2026-09-11 已发布 |
| [电池尽调指南](dossiers/bat-dd-guidelines.md) | 逾期未发布 | 尽调体系设计的直接依据 |
| [关键原材料法案](dossiers/crma.md) | 已生效 | 条例 2024/1252；10/40/25/65 基准 |
| [战略项目认定](dossiers/crma-strategic.md) | 已生效 | 已有三批认定（2025-03、2025-06、2026-10） |
| [黑粉列为危险废物](dossiers/black-mass.md) | 已生效 | 授权决定 2025/934；黑粉不能出口到非 OECD 国家 |

## 主题（topics）

- [电池护照](topics/battery-passport.md) —— 2027-02-18 适用；访问权限规则未定
- [电池碳足迹](topics/carbon-footprint.md) —— 三步走，配套法案全部未通过
- [电池再生料含量](topics/recycled-content.md) —— 2031、2036 两阶段目标
- [供应链尽职调查](topics/due-diligence.md) —— 电池法、CRMA、CSDDD 的交叉
- [回收目标与黑粉](topics/recycling-and-black-mass.md) —— 回收效率、材料回收率、黑粉定性
- [战略原材料与供应安全](topics/strategic-raw-materials.md) —— CRMA 基准与战略项目
- [Omnibus 简化一揽子](topics/omnibus-simplification.md) —— 推迟和简化类立法

## 机构（actors）

- [欧洲议会 ENVI](actors/ep-envi.md) —— 电池产品类法规的主审委员会
- [欧洲议会 ITRE](actors/ep-itre.md) —— 原材料、产业和能源类法规的主审委员会
- [欧委会 DG GROW](actors/dg-grow.md) —— 碳足迹、尽调、护照类二级法案
- [欧委会 DG ENV](actors/dg-env.md) —— 回收、废物、标签类二级法案
- [欧盟理事会](actors/council-of-the-eu.md) —— 理事会内部节点

## 分析（analyses）

- [2026-11-21 新电池法配套二级法案的逾期情况](analyses/2026-11-21-battery-secondary-acts-overdue.md)

## 尚未 ingest

其余 47 个 dossier 的 raw 摘要已生成，在 `raw/dossiers/` 中，按需 ingest。运行 `tools/lint-wiki.ps1` 可以看到完整清单。
建议下一批：电力与能源市场（emd-reg、emd-dir、red3、nzia、iaa），或循环经济（cea、wsr、elv、espr、ppwr）。
