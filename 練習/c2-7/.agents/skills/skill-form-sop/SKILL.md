---
name: skill-form-sop
description: 當要撰寫 SKILL 時, 只要涉及到流程(SOP)的撰寫就必須使用此SKILL
---

# SOP

> 格式條文見 [rules/sop-格式規範.md](rules/sop-格式規範.md)。本 section 即為該規範之實例。

## Phase 1 — 流程邊界清單

1. READ [rules/sop-格式規範.md](rules/sop-格式規範.md) 與目標 skill 的 frontmatter `description`。
2. WRITE 寫下一行「輸入 → 產物」：啟動時手上必定已有什麼、結束時桌上必須留下什麼。

出口條件：輸入與產物皆為可被指認的具體物件（檔案、段落、回覆）。

## Phase 2 — SOP 草稿

1. THINK 從產物回推中間必須先存在的半成品，每一個即為一個 Phase。
2. WRITE 依規範 §1–§4 寫出各 Phase 的標題、步驟與出口條件。

出口條件：草稿中每個 Phase 皆具備名詞式標題、動詞開頭的編號步驟，以及一行出口條件。

## Phase 3 — 交付

1. DELEGATE 格式檢查交給 `scripts/check-sop.py`；若該 script 尚不存在，改以 READ 逐條比對規範 §5。
2. WRITE 將通過檢查的草稿寫入目標 skill 的 SKILL.md，置於 `# SOP` 標題之下。

出口條件：目標 SKILL.md 中存在 `# SOP` section，且規範 §5 的檢核清單全數通過。
