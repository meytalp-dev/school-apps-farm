# בריף לבניית דמו — חוות האפליקציות

## המשימה
לבנות דף-דמו אחד, עצמאי, ב-`demo/<app-id>.html`, שמדגים מערכת אמיתית שקיימת ב-lerani.co.il/management — אבל **בעיצוב של חוות האפליקציות** (שפת IMPACT OS) ועם **נתוני-דמה** של "בית ספר אימפקט". הדמו צריך לתת למנהל/ת שנוחת/ה בו תחושה "אני מבינה מה זה עושה ואיך זה מרגיש" תוך 30 שניות — לא לשחזר כל פיצ'ר.

## מקור
- קובץ-המקור המלא (HTML חי, כולל CSS/JS/דאטה inline) נמצא ב-`C:/Users/meyta/AppData/Local/Temp/claude/c--Users-meyta-Downloads-impactos/547c49e4-eed3-4944-96aa-cd378ce528f0/scratchpad/lerani/<file>`. קראו אותו כדי להבין: מבנה המסך, אילו נתונים יש, אילו פעולות, מה ה"וואו". **אל תעתיקו CSS/עיצוב משם** — רק לוגיקה ורעיונות.
- **אסור** להעביר לדמו שמות אמיתיים, טלפונים, שמות תלמידים/מורים/עובדים, "אורט בית הערבה", "ORT", מספרים אמיתיים. הכול מוחלף בנתוני `DEMO` מ-`demo/demo-data.js` (מורים, כיתות, מקצועות, הורים, גורמי-חוץ, קרנות, חברות, חמשת הממדים) או בנתונים מומצאים שאתם כותבים בתוך הדף. השם היחיד המותר לבית הספר: "בית ספר אימפקט".

## מבנה חובה (ראו `demo/_template.html`)
```html
<link rel="stylesheet" href="../style.css">   <!-- טוקנים, כפתורים, פונט Heebo -->
<link rel="stylesheet" href="demo.css">       <!-- סרגל-דמו, כרטיסים, טבלאות, KPI, טפסים, מודאל, AI, טוסט -->
<style> /* רק CSS ייחודי לדמו הזה */ </style>
...
<main class="demo-main"> … </main>
<script src="../apps-data.js"></script>
<script src="../logos.js"></script>
<script src="../store.js"></script>
<script src="demo-data.js"></script>
<script src="demo-shell.js"></script>
<script>DemoShell.init('<app-id>'); …</script>
```
- `DemoShell.init(id)` מוסיף לבד את הסרגל העליון (חזרה · לוגו · "דמו — נתונים מומצאים" · לסל · לפרטי המערכת), פוטר, טוסט, וסל. **אל תבנו סרגל/nav משלכם.**
- עוזרים: `DemoShell.toast('נשמר')`, `DemoShell.modalHTML(id, title, bodyHTML, actionsHTML)` + `openModal/closeModal`, `DemoShell.aiPanel(id, title, subtitle, [שאלות-מוכנות])` + `DemoShell.aiRegister(id, fn(q)→html)` לסוכן-AI מדומה (מחזיר תשובה לפי מילות-מפתח, עם אנימציית "מקליד").
- רכיבי CSS זמינים ב-demo.css: `.demo-head`, `.demo-toolbar`, `.kpis/.kpi`, `.row.cols-2/3/4`, `.row.side`, `.card/.card-h`, `.tabs/.tab`, `.chip-sm.teal|fuchsia|green|gold|gray|navy`, `.table-wrap > table.tbl`, `label.f + .in`, `.form-grid`, `.btn-sm[.primary|.navy|.ghost]`, `.icon-btn`, `.status.ok|warn|bad|info|muted`, `.bar > i`, `.modal`, `.ai-panel`. כפתורים גדולים: `.btn-primary`, `.btn-outline` (מ-style.css).

## שפה עיצובית (חובה)
- טוקנים: `--navy #061E4F` (טקסט/כותרות), `--fuchsia #F00678` (פעולה ראשית/הדגשה), `--teal #12C7C7` (מידע/חיובי-רך), `--green #7BCB52`, `--yellow #F4B41B`/`--gold #C98600`, `--orange #FF7A1A`, `--gray #64748B`, `--bg #F8FAFC`, `--line rgba(6,30,79,.08)`. **אסור צבעים אחרים** מלבד לבן/שחור וגוונים שקופים של הטוקנים.
- Heebo בלבד. כותרות 800–900 עם letter-spacing שלילי. פינות 16–26px. צללים רכים `rgba(6,30,79,…)`. פילים (999px) לכפתורים/תגיות.
- **אין אימוג'י בכלל.** אייקונים = SVG-קו inline (stroke 2, round) — כתבו אותם בעצמכם, קצרים.
- תנועה: `--motion-ease cubic-bezier(.22,1,.36,1)`, hover = `translateY(-2..-4px)` + צל. בלי אנימציות רועשות.
- מובייל: הכול צריך להיות שמיש ב-390px (grid → עמודה אחת, טבלאות ב-`.table-wrap` גוללות).
- RTL. עברית טבעית, קצרה, בגובה העיניים של מנהלת. בלי מונחים טכניים.

## מה הדמו צריך לכלול
1. `.demo-head` — כותרת המסך + משפט הסבר + toolbar עם 1–3 פעולות.
2. `.kpis` — 3–5 מספרים שמספרים סיפור (במסכי-דשבורד).
3. **המסך הראשי** — התוכן האמיתי של המערכת עם נתוני-דמה עשירים (10–30 רשומות; לא 3). דטרמיניסטי: השתמשו ב-`DEMO.rng(seed)` אם צריך "אקראיות" — כדי שהדמו ייראה זהה בכל טעינה.
4. **אינטראקציה אמיתית** (מינימום 3): פילטר/טאבים · הוספה/עריכה במודאל שמתעדכנת במסך · חיפוש · מיון · לחיצה שפותחת פירוט · סוכן-AI מדומה (איפה שיש AI במקור). שמירה = בזיכרון (JS) + `DemoShell.toast('נשמר בדמו')`. אפשר `localStorage` עם מפתח `farm-demo-<id>` כדי ששינויים ישרדו רענון — עם כפתור "איפוס דמו".
5. **מצב-הצגה נעים**: הדמו נפתח כבר "מלא" ומרשים — לא ריק שדורש הזנה.
6. בלי תלות ברשת (חוץ מגוגל-פונטס). בלי fetch/API. אם במקור יש Gemini/Apps Script — מחליפים בתגובות מוכנות.

## איכות
- קובץ אחד, ES5-ish פשוט (var/function), בלי frameworks. עד ~40KB.
- לבדוק שאין שגיאות JS: `node -e "new Function(require('fs').readFileSync('<file>','utf8').split('<script>').pop().split('</script>')[0])"` (או לפחות לקרוא בעיון).
- לרנדר צילום-מסך: `"/c/Program Files/Google/Chrome/Application/chrome.exe" --headless=new --disable-gpu --hide-scrollbars --window-size=1400,1600 --virtual-time-budget=5000 --screenshot=<out.png> "file:///C:/Users/meyta/Downloads/school-apps-farm/demo/<id>.html"` ולהסתכל עליו (Read) — לתקן מה שנראה רע.
- בסיום להחזיר: נתיב הקובץ, 5 שורות על מה הדמו מדגים, ומה בכוונה הושמט מהמקור.
