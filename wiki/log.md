# Wiki 操作日志

只追加，不改写。浏览历史：`Select-String '^## \[' wiki/log.md`

## [2026-11-21] schema | 建立 wiki
- 新建：CLAUDE.md（维护规范）、index.md、log.md
- 新建工具：tools/export-wiki-raw.ps1（生成 raw 层）、tools/lint-wiki.ps1（机械体检）
- raw 层：56 份 dossier 摘要，合并 curated.js、OEIL、EUR-Lex、Have Your Say、changes.json

## [2026-11-21] ingest | 电池与关键原材料板块（第一批，9 个 dossier）
- 来源：raw/dossiers/{batteries, batteries-dd-omnibus, bat-cfb, bat-recycled, bat-recycling-eff, bat-dd-guidelines, crma, crma-strategic, black-mass}.md（OEIL 抓取于 2026-11-20T22:37Z；EUR-Lex、Have Your Say 抓取于 2026-11-20T22:49Z）
- 新建 dossier：上述 9 页
- 新建 topic：battery-passport、carbon-footprint、recycled-content、due-diligence、recycling-and-black-mass、strategic-raw-materials、omnibus-simplification
- 新建 actor：ep-envi、ep-itre、dg-grow、dg-env、council-of-the-eu
- 发现：
  - 逾期：bat-cfb（期限 2025-02-18）、bat-dd-guidelines（2026-07-26）、bat-recycled（2026-08-18）
  - 缺口：标签要求 2026-08-18 已适用，但标签格式实施条例在 Have Your Say 上仍是草案
  - 新动态：护照访问权限实施条例草案（2026-10-19）、工业电池性能最低值草案（2026-09-29）、回收目标评估报告（2026-09-11）、CRMA 第三批战略项目（2026-10-09）
- 反馈到 curated：
  1. bat-cfb：草案日期 2024-04-15（verified:false）应为 2024-04-30（Have Your Say，Ares(2024)3131389）
  2. bat-recycling-eff：摘要中“2026 年评估”已过时，评估报告 52026DC0470 已于 2026-09-11 发布
  3. crma-strategic：补入第三批认定，决定 (EU) 2026/2349，2026-10-09
  4. crma：milestones 补入 2026-05-26 回收潜力清单、2026-10-09 第三批战略项目
  5. 新增条目：护照访问权限实施条例、标签格式实施条例（parent: batteries）
  6. data/sources.json：让 black-mass 匹配 CELEX 32025D0934，crma-strategic 匹配战略项目决定（目前都挂在上级 dossier 名下）

## [2026-11-21] query | 新电池法配套二级法案的逾期情况
- 回存：analyses/2026-11-21-battery-secondary-acts-overdue.md

## [2026-11-21] lint | 第一次体检
- tools/lint-wiki.ps1：失效链接 0，孤立页 0，frontmatter 问题 0；未覆盖 dossier 47 个
- 人工检查：已核对 9 个 dossier 页与 topic、actor 页之间的日期一致性，未发现矛盾
- 更正：初稿中 black-mass 页的“changes.json 同一条记录重复”系首次导出时的偶发现象，重新导出后不再出现，已删除
