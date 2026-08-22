/**
 * חוות האפליקציות — שכבת-מטא מעל הקטלוג
 * היררכיה (כוכבים), תגיות, ערכות (אילו מערכות בפנים), "יום בחיי מנהלת", והמיפוי לשאלון "בנו את הסל".
 * הקטלוג עצמו נשאר ב-apps-data.js; כאן רק מי-בולט-ומה-מחובר-למה.
 */

/* ── הכוכבים — 6 כרטיסים גדולים מעל הקטלוג ── */
var FEATURED = ['student-file', 'attendance', 'pulse', 'parent-meetings', 'broadcast', 'investment-bank'];

/* ── דמואים חיים (demo/<id>.html) ── */
var DEMOS = ['pulse', 'positions', 'gantt', 'teacher-feedback', 'duties', 'social-posts', 'message-composer', 'brand-kit'];
function hasDemo(id) { return DEMOS.indexOf(id) !== -1; }
function demoHref(id) { return 'demo/' + id + '.html'; }

/* ── תגיות: new · popular · ai ── */
var TAGS = {
  'student-file': ['popular'], 'attendance': ['popular'], 'tardiness': ['popular'], 'pulse': ['popular'],
  'monthly-reports': ['popular'], 'investment-bank': ['popular'], 'incident': ['popular'],
  'parent-meetings': ['new'], 'broadcast': ['new'], 'teacher-assessment': ['new'], 'brand-kit': ['new'], 'social-posts': ['new', 'ai'], 'message-composer': ['new', 'ai'],
  'curriculum': ['ai'], 'positions': ['ai'], 'my-conversations': ['ai'], 'risk': ['ai'], 'planning-hub': ['ai']
};
var TAG_LABEL = { 'new': 'חדש', 'popular': 'מבוקש', 'ai': 'כולל AI' };

/* ── ערכות: אילו מערכות בתוך כל ערכה ── */
var BUNDLES = {
  'hub-teachers':   ['monthly-reports', 'conversations', 'attendance', 'investment-bank', 'annual-plan', 'student-file', 'parent-meetings', 'lessons-library'],
  'hub-counselors': ['counselor-dashboard', 'monthly-reports', 'shiluv', 'therapy', 'student-file', 'pulse', 'incident'],
  'hub-manu':       ['directory', 'tardiness', 'discipline', 'attendance', 'broadcast', 'transportation'],
  'role-dashboard': ['tasks', 'gantt', 'calendar', 'annual-plan', 'student-file']
};

/* ── מפת קשרים: מי מדבר עם מי (מוצג בדף הפירוט) ── */
var LINKS = {
  'student-file': ['conversations', 'risk', 'monthly-reports', 'bagrut', 'journey', 'parent-meetings', 'investment-bank'],
  'attendance': ['tardiness', 'risk', 'monthly-reports', 'broadcast'],
  'tardiness': ['attendance', 'discipline', 'directory'],
  'directory': ['broadcast', 'parent-meetings', 'student-file', 'admission'],
  'discipline': ['incident', 'student-file', 'conversations'],
  'incident': ['discipline', 'counselor-dashboard', 'my-conversations'],
  'risk': ['attendance', 'bagrut', 'discipline', 'conversations', 'counselor-dashboard'],
  'conversations': ['student-file', 'parent-meetings', 'monthly-reports'],
  'monthly-reports': ['student-file', 'attendance', 'counselor-dashboard'],
  'pulse': ['teacher-assessment', 'lessons-library', 'life-skills'],
  'parent-meetings': ['student-file', 'conversations', 'broadcast'],
  'broadcast': ['directory', 'calendar', 'parent-meetings', 'transportation'],
  'investment-bank': ['student-file', 'journey', 'cert-generator'],
  'curriculum': ['positions', 'timetable', 'annual-plan'],
  'positions': ['curriculum', 'job-card-builder', 'budget'],
  'timetable': ['curriculum', 'duties', 'calendar'],
  'exams': ['exam-prep-form', 'bagrut'],
  'strategy': ['swot', 'competitors', 'planning-hub'],
  'planning-hub': ['annual-plan', 'gantt', 'positions'],
  'brand-kit': ['social-posts', 'cert-generator', 'zoom-bg', 'job-card-builder', 'landing-recruitment', 'greeting-cards'],
  'landing-recruitment': ['parent-testimonials', 'admission', 'brand-kit'],
  'social-posts': ['brand-kit', 'broadcast', 'greeting-cards', 'landing-recruitment'],
  'message-composer': ['broadcast', 'brand-kit', 'directory'],
  'competitors': ['swot', 'strategy', 'landing-recruitment'],
  'counselor-dashboard': ['shiluv', 'therapy', 'student-file', 'incident'],
  'teacher-feedback': ['teacher-assessment', 'teacher-plan'],
  'handbook': ['roles', 'handover'],
  'handover': ['handbook', 'roles', 'annual-plan']
};

/* ── "יום בחיי מנהלת" — סקשן סיפורי לפני הקטלוג ── */
var DAY = [
  { time: '07:30', app: 'tardiness',       text: 'שער בית הספר. שני תלמידים מאחרים — נרשמים ב-QR, ההורים מקבלים וואטסאפ, ההשלמה נקבעת במרכז הלמידה. בלי ויכוח.' },
  { time: '08:15', app: 'incident',        text: 'היועצת ממלאת דיווח אירוע חריג. את מאשרת מהנייד — והוא כבר בתיק התלמיד ובלוח המשימות.' },
  { time: '10:00', app: 'curriculum',      text: 'מורה למתמטיקה הודיעה שהיא עוזבת. סוכן ה-AI מציג מי יכול לקחת את השעות ומה הפער לגיוס.' },
  { time: '12:30', app: 'broadcast',       text: 'שינוי בהסעות מחר. הודעה אחת — ל-14 קבוצות הורים בבת אחת. שתי דקות.' },
  { time: '16:00', app: 'parent-meetings', text: 'אסיפות הורים בעוד שבוע. ההורים כבר בוחרים שעות בעצמם; המחנכות רואות לו״ז מלא.' },
  { time: '19:00', app: 'monthly-reports', text: 'הדוח החודשי לפיקוח? נבנה מעצמו מהנתונים של החודש. את רק קוראת ומאשרת.' }
];

/* ── שאלון "בנו את הסל" — 5 שאלות → 5 המלצות ──
 * שאלה 1: כאבים (בחירה מרובה). שאלות 2–5: בחירה אחת, כל תשובה מחזקת מערכות רלוונטיות. */
var QUIZ = {
  pains: [
    { id: 'attendance', label: 'נוכחות, איחורים ומשמעת', apps: ['attendance', 'tardiness', 'discipline', 'incident'] },
    { id: 'parents',    label: 'קשר עם הורים',            apps: ['parent-meetings', 'broadcast', 'directory', 'transportation'] },
    { id: 'students',   label: 'מעקב אחרי תלמידים',       apps: ['student-file', 'risk', 'conversations', 'bagrut'] },
    { id: 'staff',      label: 'צוות — שיבוץ, משוב, דוחות', apps: ['curriculum', 'timetable', 'teacher-feedback', 'monthly-reports', 'duties'] },
    { id: 'climate',    label: 'אקלים ורגש',              apps: ['pulse', 'investment-bank', 'life-skills', 'morning-openings'] },
    { id: 'planning',   label: 'תכנון, תקציב ואסטרטגיה', apps: ['annual-plan', 'positions', 'budget', 'strategy', 'planning-hub'] },
    { id: 'story',      label: 'שיווק, נראות וגיוס תלמידים', apps: ['landing-recruitment', 'social-posts', 'brand-kit', 'competitors', 'parent-testimonials'] },
    { id: 'ops',        label: 'תפעול יומי — משימות, לוחות, נהלים', apps: ['tasks', 'calendar', 'gantt', 'handbook', 'roles'] }
  ],
  questions: [
    {
      id: 'size', title: 'כמה תלמידים בבית הספר?',
      options: [
        { id: 'small', label: 'עד 200 תלמידים', boost: ['directory', 'parent-meetings', 'investment-bank'] },
        { id: 'mid',   label: '200–500',         boost: ['attendance', 'timetable', 'monthly-reports'] },
        { id: 'large', label: 'מעל 500',          boost: ['directory', 'risk', 'curriculum', 'positions'] }
      ]
    },
    {
      id: 'stage', title: 'איזה בית ספר אתם?', hint: 'שכבת הגיל קובעת אילו מערכות ירגישו הכי מהר',
      options: [
        { id: 'elementary', label: 'יסודי',              boost: ['morning-openings', 'investment-bank', 'life-skills', 'parent-meetings'] },
        { id: 'middle',     label: 'חטיבת ביניים',       boost: ['pulse', 'discipline', 'tardiness'] },
        { id: 'high',       label: 'תיכון / שש-שנתי',    boost: ['bagrut', 'exams', 'exam-prep-form'] },
        { id: 'special',    label: 'חינוך מיוחד / אחר',  boost: ['personal-plan', 'therapy', 'shiluv', 'transportation'] }
      ]
    },
    {
      id: 'today', title: 'איך המידע מתנהל אצלכם היום?', hint: 'אין תשובה לא נכונה — זה עוזר לנו לדעת מאיפה מתחילים',
      options: [
        { id: 'excel',    label: 'אקסלים וקבצים מפוזרים',        boost: ['student-file', 'directory', 'monthly-reports'] },
        { id: 'whatsapp', label: 'בעיקר וואטסאפ וטלפונים',       boost: ['broadcast', 'directory', 'calendar'] },
        { id: 'bigsys',   label: 'יש מערכת גדולה — אבל לא נוחה', boost: ['student-file', 'attendance', 'role-dashboard'] },
        { id: 'head',     label: 'בעיקר בראש ובמחברות',          boost: ['tasks', 'calendar', 'handbook'] }
      ]
    },
    {
      id: 'users', title: 'מי יעבוד עם המערכות ביום-יום?',
      options: [
        { id: 'me',      label: 'בעיקר אני וההנהלה',   boost: ['tasks', 'my-conversations', 'planning-hub'] },
        { id: 'staff',   label: 'כל הצוות',             boost: ['monthly-reports', 'timetable', 'duties'] },
        { id: 'parents', label: 'גם ההורים והקהילה',    boost: ['parent-meetings', 'broadcast', 'parent-testimonials'] }
      ]
    }
  ]
};

function recommend(pains, answers) {
  var score = {};
  function add(id, n) { score[id] = (score[id] || 0) + n; }
  for (var i = 0; i < QUIZ.pains.length; i++) {
    if (pains.indexOf(QUIZ.pains[i].id) === -1) continue;
    var a = QUIZ.pains[i].apps;
    for (var j = 0; j < a.length; j++) add(a[j], 10 - j);
  }
  QUIZ.questions.forEach(function (q) {
    for (var k = 0; k < q.options.length; k++) {
      if (q.options[k].id === (answers || {})[q.id]) q.options[k].boost.forEach(function (id) { add(id, 3); });
    }
  });
  /* תיק תלמיד תמיד רלוונטי — עוגן */
  add('student-file', 2);
  var ids = Object.keys(score).sort(function (x, y) { return score[y] - score[x]; });
  return ids.slice(0, 5);
}

function appTags(id) { return TAGS[id] || []; }
