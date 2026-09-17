# Rule 1 - 檔案結構

- Rule File 只由一個以上的 Rule 區塊組成，區塊之前、之間不得夾雜前言或其他段落。
- 每個 Rule 區塊的結構固定如下，順序不得更動：

```markdown
# Rule N - <Rule name>

- <描述>
- ...

## good example

- <為何是好示範，只點出關鍵>

<具體案例>

## bad example

- <為何是壞示範，只點出關鍵>

<具體案例>
```

- N 由 1 起連續編號。
- code block 內的內容不受本檔任何 Rule 約束。

## good example

- 開頭直接是 `# Rule 1`，兩個 Rule 都有完整的描述、good example、bad example，編號連續。

````markdown
# Rule 1 - 金額型別

- 金額欄位須使用 `decimal`。

## good example

- 單價與小計都是 `decimal`，加總不會產生誤差。

```csharp
public decimal UnitPrice { get; set; }   // 19.99m
public decimal Subtotal => UnitPrice * Quantity;
```

## bad example

- 單價用 `double`，`0.1 + 0.2` 會得到 `0.30000000000000004`。

```csharp
public double UnitPrice { get; set; }
```

# Rule 2 - 金額捨入

- ...（同樣具備描述、good example、bad example）
````

## bad example

- 開頭多了前言；Rule 2 缺少 bad example；編號從 Rule 2 跳到 Rule 4。

````markdown
# 金額規範

本檔整理金額相關的注意事項。

# Rule 1 - 金額型別
...（完整）

# Rule 2 - 金額捨入

- 捨入須使用 `MidpointRounding.AwayFromZero`。

## good example
...

# Rule 4 - 幣別
...
````

# Rule 2 - 規則描述

- Rule name 須為名詞短語，指出本 Rule 約束的對象。
- 每條描述須為可判定真假的陳述，規範用語限用「須」「不得」「可」。
- 描述中不得出現 `建議`、`盡量`、`適當`、`視情況`、`原則上` 這類無法判定的字詞。
- 資料依形式選擇呈現方式：

| 資料形式 | 呈現方式 |
| --- | --- |
| 封閉集合、對照關係 | markdown table，表格外的值一律視為不合法 |
| 語法、schema、樣板 | code block |
| 單一約束 | `-` 條列 |

## good example

- Rule name 是名詞；每條描述都能直接判對錯；允許的型別用表格列成封閉集合。

````markdown
# Rule 1 - 金額型別

- 金額欄位須使用下表的型別，表格外的型別不得用於金額：

| 欄位類別 | C# 型別 | SQL Server 型別 |
| --- | --- | --- |
| 單價、小計、總額 | `decimal` | `decimal(18,2)` |
| 匯率 | `decimal` | `decimal(18,6)` |

- 金額欄位不得為 `null`；無金額時須存 `0`。
````

## bad example

- Rule name 是一句提醒而非名詞；「盡量」「適當」無法判定對錯；允許的型別沒有列成封閉集合。

````markdown
# Rule 1 - 金額要小心

- 金額盡量使用精確一點的型別。
- 必要時適當地做四捨五入。
````

# Rule 3 - 正反範例

- `## good example` 與 `## bad example` 各須以一行 `- ` 說明開頭，只點出關鍵，不重述描述。
- 說明之後須接具體案例，形式可為情境條列、code block，或兩者混合，筆數不限。
- 案例須使用具體資料（實際名稱、數值、程式碼），不得以 `foo`、`xxx`、`...` 代替案例的關鍵部分。
- good example 與 bad example 須使用同一個情境，讓兩者的差異只落在本 Rule 上。
- bad example 只違反本 Rule，不得同時違反其他 Rule。

## good example

- 兩個範例都是「訂單明細的單價」，差別只在型別；說明一行就點出關鍵。

````markdown
## good example

- 單價用 `decimal`，`19.99 * 3` 精確得到 `59.97`。

```csharp
var line = new OrderLine { UnitPrice = 19.99m, Quantity = 3 };
line.Subtotal; // 59.97
```

## bad example

- 單價用 `double`，同樣的計算得到 `59.970000000000006`。

```csharp
var line = new OrderLine { UnitPrice = 19.99, Quantity = 3 };
line.Subtotal; // 59.970000000000006
```
````

## bad example

- 說明只是重述描述；案例用佔位名稱；正反範例的情境不同，看不出差異在哪。

````markdown
## good example

- 這個範例遵守了「金額欄位須使用 decimal」的規定。

```csharp
decimal foo = xxx;
```

## bad example

- 這是錯的。

- 使用者匯出報表時，日期格式不一致。
````

# Rule 4 - 檔案範圍與命名

- Rule File 須位於 `<skill>/rules/`。
- 一個 Rule File 只規範一個對象；Rule 超過 7 個時，須拆成多個檔案。
- 檔名格式為 `<對象>-<類型>.md`，`<類型>` 限用下表：

| 類型 | 規範什麼 | 例 |
| --- | --- | --- |
| 格式規範 | 產物的結構與寫法 | SOP section、類別圖、commit message |
| 領域規範 | 業務或技術上的約束 | 金額型別、錯誤碼、命名慣例 |

- Rule File 不使用 frontmatter。

## good example

- 每個檔案只管一個對象，檔名看得出對象與類型。

```text
plan-with-class-diagram/
├── SKILL.md
└── rules/
    ├── 類別圖-格式規範.md
    └── 類別命名-領域規範.md
```

## bad example

- `rules.md` 看不出對象；`類別圖與命名-格式規範.md` 把兩個對象塞進一檔；`注意事項.md` 沒有類型。

```text
plan-with-class-diagram/
├── SKILL.md
└── rules/
    ├── rules.md
    ├── 類別圖與命名-格式規範.md
    └── 注意事項.md
```

# Rule 5 - 與 SOP 的分工

- Rule File 規定「產物或決策怎樣才算對」；「何時做、依什麼順序做」屬於 SKILL.md 的 `# SOP`。
- Rule 的描述不得使用編號清單，也不得出現以 `READ`、`WRITE`、`THINK`、`DELEGATE` 開頭的步驟；判定邏輯須寫成「若…則…」或表格。
- 目標 SKILL.md 的 `# SOP` 中，須至少有一個 `READ` 步驟指向本 Rule File；沒有被引用的 Rule File 須補上引用或刪除。
- 一句話可講完、且不需要範例的原則，須留在 SKILL.md 的 `# 原則`，不得另立 Rule。

## good example

- SOP 負責「何時讀」，Rule File 只寫判定條件，用「若…則…」表達分支。

````markdown
<!-- SKILL.md -->
## Phase 2 — 已確認的類別圖

1. READ [rules/類別圖-格式規範.md](rules/類別圖-格式規範.md)。
2. WRITE 依規範輸出 mermaid classDiagram。
````

````markdown
<!-- rules/類別圖-格式規範.md -->
# Rule 3 - 關係線

- 兩個類別之間只畫一條關係線。
- 若兩者同時符合組成與相依，則只畫組成 `*--`。
````

## bad example

- Rule File 裡寫了操作步驟，這些屬於 SOP；而且 SKILL.md 的 SOP 沒有任何步驟讀取這個檔案。

````markdown
<!-- rules/類別圖-格式規範.md -->
# Rule 3 - 關係線

1. READ 既有類別的原始碼。
2. THINK 判斷類別之間的關係。
3. WRITE 畫出關係線。
````
