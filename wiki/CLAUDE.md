# EU 电池与能源政策 Wiki —— 维护规范（schema）

本目录是一个由 LLM 维护的知识库（参考 Karpathy 的 LLM Wiki 模式）。
人负责挑选资料、提问和审阅；LLM 负责撰写、交叉引用、归档和体检。
开始任何 wiki 工作前先读完本文件，再读 [index.md](index.md)。

## 1. 三层结构

| 层 | 位置 | 谁写 | 规则 |
|---|---|---|---|
| 原始资料 | `raw/dossiers/<id>.md` | `tools/export-wiki-raw.ps1` 自动生成 | **只读**。要更新就重新运行脚本，不要手改 |
| 原始资料（补充） | `raw/notes/` | 人工放入（网页剪藏、PDF 摘录、会议记录） | 只读；文件名 `YYYY-MM-DD-主题.md` |
| Wiki | `index.md` `log.md` `dossiers/` `topics/` `actors/` `analyses/` | LLM | 本规范约束的对象 |
| 规范 | `CLAUDE.md`（本文件） | 人与 LLM 共同修订 | 发现 LLM 的坏习惯时，把纠正写进来 |

raw 摘要合并了四个来源：`data/curated.js`（人工整理层）、OEIL、EUR-Lex Cellar 二级法案、
Have Your Say 倡议，以及 `data/changes.json` 中检测到的近期变化。
**raw 的上游数据仍以 `data/` 为准**：wiki 里发现的事实错误，应该反馈到 `data/curated.js`，而不是只改 wiki。

## 2. 页面类型

- `dossiers/<id>.md` —— 每部法规 / 二级法案一页，`<id>` 与 `data/curated.js` 的 id 完全一致。
- `topics/<slug>.md` —— 跨法规的概念或主题（如电池护照、碳足迹）。slug 用英文小写加连字符。
- `actors/<slug>.md` —— 机构、委员会、总司、行业协会等。
- `analyses/YYYY-MM-DD-<slug>.md` —— 回存的查询结果、对比分析、专题研判。

文件名一律用 ASCII（便于 PowerShell 5.1 和 git 处理），页面正文用中文。

### 通用 frontmatter

```yaml
---
type: dossier | topic | actor | analysis
title: 中文标题
id: batteries            # 仅 dossier
oeil: 2020/0353(COD)     # 仅 dossier，没有则留空
status: 已生效 | 立法中 | 草案 | 计划中 | 逾期未通过
sources: [raw/dossiers/batteries.md]
updated: YYYY-MM-DD      # 最后一次实质修改的日期
---
```

### dossier 页结构（按顺序）

1. **一句话定位**：是什么、对电池企业意味着什么。
2. **当前状态**：一段话，写清截至哪天、处于哪个阶段、下一步是什么。
3. **立法进程时间线**：表格，列为 日期 / 机构 / 节点 / 来源。
4. **核心内容**：要点列表。
5. **对电池企业的影响**：合规义务、市场准入、支持机会、建议行动。
6. **配套与相关法规**：链接到其他 dossier 页，注明关系（上位法、修订、配套授权法案……）。
7. **待核实与矛盾**：见第 4 节。
8. **来源**：列出用到的 raw 文件及其中的官方链接。

### topic 页结构

定义 → 涉及哪些法规（链接）及各自规定 → 时间表（跨法规合并）→ 未决问题 → 来源。

### actor 页结构

是谁 → 在本 wiki 涉及的法规中扮演什么角色（链接）→ 关键人物（报告员等）→ 来源。

## 3. 写作规则

- **链接**：用标准 Markdown 相对链接，如 `[新电池法](../dossiers/batteries.md)`。
  这种写法在 GitHub 和 Obsidian 中都能正常跳转。不要用 `[[双链]]`。
- **注明来源**：每个事实性陈述都要能追溯到 raw 文件。日期、编号、百分比之后用括号注明
  `（来源：OEIL）`、`（来源：EUR-Lex）`、`（来源：Have Your Say）` 或 `（来源：curated）`。
- **事实来源的优先级**：官方抓取数据（OEIL / EUR-Lex / Have Your Say）> curated 中 `verified` 不为 false 的条目
  > curated 中 `verified:false` 或文中写明“据报道”“待核实”的条目。后两类必须原样保留“待核实”标记。
- **区分事实与研判**：影响分析和建议属于研判，放在“对电池企业的影响”一节，不要混进时间线。
- **日期**：一律写成 `YYYY-MM-DD`。“目前”“最近”之类的词必须带上“截至 YYYY-MM-DD”。
- **不要编造**：raw 里没有的内容不要写。确实需要背景知识时，标注 `（背景知识，未经本库来源核实）`。
- **页面要短而专**：一页超过约 300 行时，拆出 topic 页。

## 4. 冲突与待核实

- 新旧信息冲突时，**两种说法都保留**，并用下面的格式标注，不要悄悄覆盖：
  ```
  > ⚠️ 冲突：curated 记为 X（来源：curated），EUR-Lex 显示 Y（来源：EUR-Lex）。待人工确认。
  ```
- 法定期限已过但仍未通过的，状态写成“逾期未通过”，并在 [index.md](index.md) 的“需要关注”中列出。
- 发现 `data/curated.js` 需要更正的地方，记在 `log.md` 当次条目的“反馈到 curated”小节里。

## 5. 工作流

### ingest（摄入）

触发：用户说“ingest <id>”、“ingest 最新变化”或“ingest raw/notes/xxx.md”。

1. 如果数据已更新，先运行 `powershell -NoProfile -File tools/export-wiki-raw.ps1` 刷新 raw。
2. “ingest 最新变化”：用 `git diff -- wiki/raw/` 或 `data/changes.json` 找出自上次 ingest 以来有变化的 dossier。
3. 读 raw 文件；如果有不确定的要点，先和用户讨论再写。
4. 新建或更新 `dossiers/<id>.md`。
5. 更新所有受影响的 topic 页和 actor 页。一份资料通常会涉及多个页面，不要只改一页。
6. 检查冲突，按第 4 节标注。
7. 更新 [index.md](index.md)（页面列表和“需要关注”）。
8. 在 [log.md](log.md) 末尾追加一条记录（格式见下）。
9. 运行 `powershell -NoProfile -File tools/lint-wiki.ps1`，修复失效链接。

### query（查询）

1. 先读 [index.md](index.md) 定位页面，再读相关页面；只有 wiki 中没有答案时才去读 raw。
2. 回答时链接到 wiki 页面，并注明来源。
3. 有长期价值的回答（对比、时间表、专题研判）存为 `analyses/YYYY-MM-DD-<slug>.md`，
   登记到 index.md，并在 log.md 记一笔。

### lint（体检）

1. 先运行 `tools/lint-wiki.ps1`，它会检查失效链接、孤立页、缺 frontmatter 的页面，
   以及 curated 中有、但还没有 dossier 页的 id。
2. 再由 LLM 检查脚本发现不了的问题：页面之间的矛盾、已经过时的“当前状态”、
   法定期限已过的节点、被多次提及但没有独立页面的概念、缺失的交叉引用。
3. 结果写进 log.md；能修的直接修，需要人判断的列进 index.md 的“需要关注”。

## 6. log.md 格式

只追加，不改写历史。每条记录用统一前缀，便于用 `Select-String '^## \[' wiki/log.md` 浏览：

```
## [YYYY-MM-DD] ingest | 简短标题
- 来源：raw/dossiers/a.md, raw/dossiers/b.md（OEIL 抓取于 …）
- 新建：…
- 更新：…
- 发现：冲突 / 逾期 / 新动态
- 反馈到 curated：…（没有就写“无”）
```

操作类型：`ingest` | `query` | `lint` | `schema`（修改本规范时）。

## 7. 当前覆盖范围

第一次 ingest（2026-11-21）只覆盖“电池与关键原材料”板块（9 个 dossier）。
其余 curated id 由 lint 脚本列为“未覆盖”，按需逐批 ingest。
