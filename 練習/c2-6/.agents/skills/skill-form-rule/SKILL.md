---
name: skill-form-rule
description: 當要撰寫 SKILL 時, 只要涉及到 rules/ 底下 Rule File 的新增或修改就必須使用此SKILL
---

# SOP

> 格式條文見 [rules/RuleFile-格式規範.md](rules/RuleFile-格式規範.md)。該規範本身即依自己寫成，可作為標準範例。

## Phase 1 — 候選規則清單

1. READ [rules/RuleFile-格式規範.md](rules/RuleFile-格式規範.md)、目標 skill 的 SKILL.md，以及其 `rules/` 底下既有的 Rule File。
2. WRITE 在回覆中逐條列出候選規則，來源包含：使用者的要求、目標 SKILL.md 的 `# 原則`、SOP 步驟中夾帶的約束。

出口條件：回覆中有一份候選規則清單，每條皆標明來源。

## Phase 2 — 規則歸屬表

1. THINK 依規範 Rule 5 判斷每條候選規則的去處：留在 `# 原則`、放入哪一個 Rule File、移回 SOP，或刪除。
2. WRITE 在回覆中輸出歸屬表，欄位為「規則／去處／理由」，並依規範 Rule 4 列出本次要新增或修改的 Rule File 檔名。

出口條件：回覆中有一份歸屬表，每條候選規則恰有一個去處，且列出了要新增或修改的 Rule File 檔名。

## Phase 3 — Rule File 草稿

1. WRITE 依規範 Rule 1–3，為每個要新增或修改的 Rule File 寫出草稿，每個 Rule 皆含描述、good example、bad example。
2. WRITE 在目標 SKILL.md 的 SOP 中，於需要該規則的 Phase 加入 `READ rules/<檔名>` 步驟；從 `# 原則` 搬出的條目同步刪除。

出口條件：每個 Rule File 草稿皆存在，且目標 SOP 中各有至少一個 `READ` 步驟指向它。

## Phase 4 — 交付

1. DELEGATE 格式檢查交給 `scripts/check-rule.py`；若該 script 尚不存在，改以 READ 逐條比對規範 Rule 1–5 的描述。
2. WRITE 將通過檢查的 Rule File 寫入目標 skill 的 `rules/`，並寫回修改後的 SKILL.md。

出口條件：目標 `rules/` 中存在各 Rule File，且每個檔案皆符合規範 Rule 1–5 的全部描述。
