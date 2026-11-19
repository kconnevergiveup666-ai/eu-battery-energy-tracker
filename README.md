# 欧盟电池与能源立法追踪数据库

聚焦产业政策，重点跟踪与电池、能源相关的欧盟立法。每部法规都能看到：
- **立法程序**：欧委会提案 → 议会各委员会（报告员、影子报告员、草案报告、修正案、意见）→ 全会 → 理事会（工作组、总体方针）→ 三方谈判 → 正式通过 → 公报 → 实施；
- **二级立法**：授权法案、实施法案、协调标准、指南、欧委会报告、后续修订；
- **未发布的草案**：规划中的法案、证据征集、公众咨询、草案意见征求（含反馈期）；
- **在审法规的动态**：排期中的委员会表决和全会日期、理事会政策辩论、三方谈判轮次；
- **变更追踪**：每次更新和上次相比的新增内容。

## 打开方式
- `tracker.html`：单文件版本，数据全部内嵌，双击打开，可以直接分享。
- `index.html`：开发版，从 `data/` 读取数据。

## 一键更新
```
powershell -ExecutionPolicy Bypass -File tools\update-all.ps1
```
分步运行：
| 脚本 | 内容 |
|---|---|
| `tools/update-oeil.ps1` | 欧洲议会立法观察站（OEIL）：程序事件、委员会/报告员、预测议程、文件库 |
| `tools/update-secondary.ps1` | EUR-Lex（Cellar SPARQL）二级立法 + 欧委会 Have Your Say 草案和意见征求 |
| `tools/build.ps1` | 变更追踪（`data/changes.js`）+ 生成 `tracker.html` |

## 数据文件
| 文件 | 说明 |
|---|---|
| `data/curated.js` | 人工层：监测清单、中文解读、法规谱系（`parent`）、理事会内部节点（`council`）、实施节点（`milestones`）、在审动态（`tracking`） |
| `data/sources.json` | 二级立法配置：母法 CELEX、Have Your Say 关键词与匹配规则 |
| `data/oeil-data.*`、`data/secondary-data.*`、`data/changes.*`、`data/snapshot.json` | 脚本生成 |

## 数据说明
- Legislative Train 和 EUR-Lex 的程序页禁止脚本访问，所以 `tracking` 里的在审动态和理事会节点是人工阅读后整理的，每条都注明了来源和"截至"日期，需要定期人工更新。
- Have Your Say 的草案有两种挂靠方式：一是按法律依据（ELI）挂到母法上，最可靠；二是按标题关键词匹配，页面上会标注"按标题关键词匹配"。
- 标注"待核实"的条目，请对照官方来源确认。
