# Skill SOP 寫法：階段、步驟與動作粒度

SOP 是 Skill 的主流程。本課程將它集中放在 `SKILL.md`，用階段與步驟交代執行順序，並在需要的地方引用規則、樣板與腳本。

適合在建立 Skill，或既有流程讓人看不出下一步要做什麼時使用。

## 先定義主流程，再拆步驟

![主流程由步驟串成；較大的步驟可展開成子步驟，並對應所需規則](./檢查%20skill%20方法-assets/image%201.png)

1. 先列出完成任務需要經過的主流程。
2. 若某個步驟包含多個動作，可將它視為一個階段（Phase），再拆成子步驟。
3. 在各步驟指出需要讀取的規則、參考的樣板或執行的腳本。

圖中的步驟 2 展開成 2-1 至 2-4；規則 2-2A 對應步驟 2-2，表示規則應在需要它的位置載入。

## 每個步驟要有明確動作

步驟的粒度要細到能交代當下要做什麼，例如：

| 動作 | 需要交代的內容 |
| --- | --- |
| 看／讀 | 要讀取哪些需求、程式碼、文件或規則。 |
| 判斷 | 要決定什麼，以及判斷後如何繼續。 |
| 生成 | 要產出什麼、存放在哪裡、參考哪個樣板。 |
| 執行 | 要執行哪個腳本來完成該步驟。 |

依步驟的實際需要撰寫，不是每一步都必須包含全部動作。

## 課程範例：繪製類別圖的 SOP

![類別圖 SOP 範例：從範圍探索、產物規劃，到圖稿確認與實作授權](./檢查%20skill%20方法-assets/image%205.png)

截圖中的主流程分成四個階段：

| 階段 | 主要動作與資源 |
| --- | --- |
| Phase 0：Intake and Boundary Discovery | 讀取使用者需求、相關程式碼與文件，依 `rules/diagram-scope.md` 判定架構改動範圍。 |
| Phase 1：Diagram Artifact Planning | 決定圖檔產物與命名，依 `rules/diagram-artifact.md` 執行。 |
| Phase 2：Diagram Realization and Confirmation Gate | 依 `templates/class-diagram.class.md` 與 `rules/diagram-render.md` 產出 Mermaid class diagram，寫入 `docs/architecture/<feature-scope>.class.md`，再依確認規則取得回應。 |
| Phase 3：Implementation Authorization Gate | 圖稿確認後，再處理是否授權實作的問題。 |

這個範例也寫明分支：使用者確認圖稿後才進入下一階段；要求修圖或資訊不足時，回到指定步驟補充與調整。**確認圖稿與授權實作是此範例中的兩個不同關卡。**

## SOP 的內容邊界

在本課程的寫法中，SOP 以各階段的主敘述和步驟為主，避免塞入打斷流程的大摘要、小提示或重複背景說明。衍生細節再依需求抽出。

![SKILL.md 保存流程；rules 說明執行要求，templates 說明產物格式，scripts 提供腳本](./檢查%20skill%20方法-assets/image%206.png)

需要加速某一步時，可以將實作腳本放在 `scripts/`，並由 SOP 指出何時執行。完整分工見 [Skill 模組化](./Skill%20模組化.md)。

寫完後，可用 [Skill 檢查指南](./檢查%20skill%20方法.md) 檢查流程是否清楚、規則是否能在正確步驟被找到。

## 來源

- 原筆記：〈檢查 skill 方法〉中的主流程、SOP 範例與步驟粒度段落。
- [課程逐字稿：Skill 模組化概論](../../逐字稿/c2m5-0_Skill%20模組化概論%20—%20更好維護、理解和強化執行的%20Skill%20組織方法.txt)。
- 影片截圖：`檢查 skill 方法-assets/image 1.png`、`image 5.png`、`image 6.png`。
