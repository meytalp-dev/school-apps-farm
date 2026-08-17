/**
 * חוות האפליקציות — לוגיקה משותפת לדף-הבית (index.html) ולקטלוג (catalog.html)
 * דף-הבית: hero-stats · "יום בחיי מנהלת" · הכוכבים · דמואים · אריחי-קטגוריות
 * קטלוג:  חיפוש+סינון (?cat= / ?q=) · כרטיסי flip · שאלון "בנו את הסל" · מצב-מצגת
 * כל render* בודק שהאלמנט קיים — כך אותו קובץ משרת את שני הדפים.
 */
var activeCat = 'all', query = '';
(function () {
  var p = new URLSearchParams(location.search);
  var c = p.get('cat');
  if (c && CATEGORIES.some(function (x) { return x.id === c; })) activeCat = c;
  if (p.get('q')) query = p.get('q').trim().toLowerCase();
})();
function syncUrl() {
  if (!document.getElementById('chips') || !history.replaceState) return;
  var qs = [];
  if (activeCat !== 'all') qs.push('cat=' + encodeURIComponent(activeCat));
  if (query) qs.push('q=' + encodeURIComponent(query));
  var present = new URLSearchParams(location.search).get('present');
  if (present) qs.push('present=' + present);
  history.replaceState(null, '', location.pathname + (qs.length ? '?' + qs.join('&') : '') + location.hash);
}

var SVG_FLIP = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3"/><path d="M18 3v4h-4M6 21v-4h4"/></svg>';
var SVG_TICK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>';
var SVG_SEARCH = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>';
var SVG_PLAY = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>';
var SVG_SPARK = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8z"/><path d="M19 14l.9 2.6L22.5 17.5l-2.6.9L19 21l-.9-2.6-2.6-.9 2.6-.9z" opacity=".7"/></svg>';

var CAT_DESC = {
  students:   'כל מה שקשור לתלמיד — מהקבלה ועד המסע האישי.',
  attendance: 'נוכחות, איחורים ומשמעת — בזמן אמת, בלי טפסים.',
  staff:      'מערכת, תורנויות, דוחות, בחינות ומשוב — הצוות מסודר.',
  pedagogy:   'אקלים, שיעורי חינוך וחיזוקים — הלב של בית הספר.',
  planning:   'תוכנית שנתית, משרות, תקציב ואסטרטגיה — התמונה הגדולה.',
  counseling: 'דשבורד יועצת, סלי שילוב ומטפלים — הטיפול מנוהל.',
  parents:    'אלפון, וואטסאפ, אסיפות הורים והסעות — הקשר עם הבית, מסודר.',
  operations: 'משימות, לוחות, נהלים, שיחות ומשאבים — התפעול היומי זורם.',
  marketing:  'מיתוג, מתחרים, SWOT, המלצות הורים ודף נחיתה — הסיפור של בית הספר, כתוב ומעוצב.',
  generators: 'תעודות, מודעות גיוס, רקעים, ברכות וסטיקרים — עיצוב במיתוג בית הספר, בלי מעצב.',
  kits:       'ערכות מוכנות לפי תפקיד — כמה מערכות, כניסה אחת.'
};

/* ── עזרים ── */
function tagsHTML(id) {
  var t = appTags(id), h = '';
  for (var i = 0; i < t.length; i++) h += '<span class="tag tag-' + t[i] + '">' + (t[i] === 'ai' ? SVG_SPARK : '') + TAG_LABEL[t[i]] + '</span>';
  return h ? '<div class="tags">' + h + '</div>' : '';
}
function miniLogos(ids, size) {
  var h = '';
  for (var i = 0; i < ids.length; i++) { var a = getApp(ids[i]); if (a) h += '<a class="mini-logo" href="app.html?id=' + a.id + '" title="' + a.name + '">' + logoSVG(a, size || 28) + '</a>'; }
  return h;
}
function detailHref(app) { return 'app.html?id=' + app.id; }
function vtName(id) { return 'logo-' + id; }

/* ── hero stats ── */
function renderStats() {
  var el = document.getElementById('heroStats'); if (!el) return;
  var ai = APPS.filter(function (a) { return appTags(a.id).indexOf('ai') !== -1; }).length;
  var items = [
    { n: APPS.length, l: 'מערכות' },
    { n: CATEGORIES.length, l: 'תחומים' },
    { n: ai, l: 'עם סוכן AI' },
    { n: 1, l: 'בית ספר חי שמריץ הכול' }
  ];
  el.innerHTML = items.map(function (it) { return '<div class="stat"><b data-count="' + it.n + '">0</b><span>' + it.l + '</span></div>'; }).join('');
  /* ספירה עולה */
  var nums = el.querySelectorAll('[data-count]');
  for (var i = 0; i < nums.length; i++) (function (node) {
    var target = +node.getAttribute('data-count'), t0 = null;
    function step(ts) { if (!t0) t0 = ts; var p = Math.min(1, (ts - t0) / 1100); node.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); }
    setTimeout(function () { requestAnimationFrame(step); }, 600);
    setTimeout(function () { node.textContent = target; }, 2200);
  })(nums[i]);
}

/* ── יום בחיי מנהלת ── */
function renderDay() {
  var el = document.getElementById('dayTrack'); if (!el) return;
  el.innerHTML = DAY.map(function (d, i) {
    var a = getApp(d.app); if (!a) return '';
    return '<li class="day-stop reveal" style="--reveal-delay:' + (i * 90) + 'ms">'
      + '<div class="day-time">' + d.time + '</div>'
      + '<a class="day-logo" href="' + detailHref(a) + '">' + logoSVG(a, 56) + '</a>'
      + '<div class="day-body"><h3><a href="' + detailHref(a) + '">' + a.name + '</a></h3><p>' + d.text + '</p></div>'
      + '</li>';
  }).join('');
}

/* ── הכוכבים ── */
function starCard(app, i) {
  var L = getLogo(app.id), c = getCategory(app.cat);
  var feats = app.features.slice(0, 3).map(function (f) { return '<li>' + SVG_TICK + f + '</li>'; }).join('');
  return '<article class="star-card reveal tilt" style="--c1:' + L.c1 + ';--c2:' + L.c2 + ';--reveal-delay:' + (i * 80) + 'ms">'
    + '<div class="star-media"><a href="' + detailHref(app) + '" class="star-logo" data-vt="' + vtName(app.id) + '">' + logoSVG(app, 96) + '</a>' + tagsHTML(app.id) + '</div>'
    + '<div class="star-body">'
    +   '<span class="app-kicker">' + c.name + '</span>'
    +   '<h3><a href="' + detailHref(app) + '">' + app.name + '</a></h3>'
    +   '<p>' + app.tagline + '</p>'
    +   '<ul class="app-feats">' + feats + '</ul>'
    +   '<div class="star-actions">' + addBtnHTML(app.id) + (hasDemo(app.id) ? '<a class="demo-link" href="' + demoHref(app.id) + '">' + SVG_PLAY + 'נסו עכשיו</a>' : '<a class="more" href="' + detailHref(app) + '">לפרטים המלאים <span aria-hidden="true">←</span></a>') + '</div>'
    + '</div></article>';
}
function renderFeatured() {
  var el = document.getElementById('starsGrid'); if (!el) return;
  el.innerHTML = FEATURED.map(function (id, i) { var a = getApp(id); return a ? starCard(a, i) : ''; }).join('');
}

/* ── אריחי-קטגוריות (דף-הבית → catalog.html?cat=) ── */
function renderCatTiles() {
  var el = document.getElementById('catTiles'); if (!el) return;
  el.innerHTML = CATEGORIES.map(function (c, i) {
    var apps = APPS.filter(function (a) { return a.cat === c.id; });
    var ids = FEATURED.filter(function (id) { return apps.some(function (a) { return a.id === id; }); });
    apps.forEach(function (a) { if (ids.length < 4 && ids.indexOf(a.id) === -1) ids.push(a.id); });
    return '<a class="cat-tile reveal" href="catalog.html?cat=' + c.id + '" style="--c:' + c.color + ';--reveal-delay:' + (i % 3) * 70 + 'ms">'
      + '<div class="cat-tile-top"><span class="cat-tile-count"><b>' + apps.length + '</b> מערכות</span><div class="cat-tile-logos">' + ids.map(function (id) { var x = getApp(id); return '<span class="mini-logo" title="' + x.name + '">' + logoSVG(x, 26) + '</span>'; }).join('') + '</div></div>'
      + '<h3>' + c.name + '</h3>'
      + (CAT_DESC[c.id] ? '<p>' + CAT_DESC[c.id] + '</p>' : '')
      + '<span class="cat-tile-more">לכל המערכות בתחום <span aria-hidden="true">←</span></span>'
      + '</a>';
  }).join('');
}

/* ── דמואים חיים ── */
function renderDemos() {
  var el = document.getElementById('demosGrid'); if (!el) return;
  el.innerHTML = DEMOS.map(function (id, i) {
    var a = getApp(id); if (!a) return '';
    var L = getLogo(id);
    return '<a class="demo-tile reveal tilt" href="' + demoHref(id) + '" style="--c1:' + L.c1 + ';--c2:' + L.c2 + ';--reveal-delay:' + (i * 70) + 'ms">'
      + logoSVG(a, 64) + '<b>' + a.name + '</b><span>' + a.tagline.split('.')[0] + '.</span>'
      + '<i class="demo-play">' + SVG_PLAY + 'נסו עכשיו</i></a>';
  }).join('');
}

/* ── צ'יפים + חיפוש ── */
function renderChips() {
  var html = '<button type="button" class="chip' + (activeCat === 'all' ? ' active' : '') + '" onclick="setCat(\'all\')">הכול <small>' + APPS.length + '</small></button>';
  for (var i = 0; i < CATEGORIES.length; i++) {
    var c = CATEGORIES[i], n = APPS.filter(function (a) { return a.cat === c.id; }).length;
    html += '<button type="button" class="chip' + (activeCat === c.id ? ' active' : '') + '" onclick="setCat(\'' + c.id + '\')">' + c.name + ' <small>' + n + '</small></button>';
  }
  document.getElementById('chips').innerHTML = html;
}
function matches(app, q) {
  if (!q) return true;
  var hay = (app.name + ' ' + app.tagline + ' ' + app.desc + ' ' + app.features.join(' ') + ' ' + getCategory(app.cat).name).toLowerCase();
  return q.split(/\s+/).every(function (w) { return hay.indexOf(w) !== -1; });
}
function onSearch(v) { query = (v || '').trim().toLowerCase(); renderCatalog(); syncUrl(); }

/* ── כרטיס-קטלוג (flip בלחיצה, tilt ב-hover) ── */
function cardHTML(app, idx) {
  var c = getCategory(app.cat), L = getLogo(app.id);
  var feats = app.features.slice(0, 3).map(function (f) { return '<li>' + SVG_TICK + f + '</li>'; }).join('');
  var bundle = BUNDLES[app.id] ? '<div class="bundle-row">' + miniLogos(BUNDLES[app.id], 24) + '</div>' : '';
  return '<article class="app-card reveal tilt" tabindex="0" aria-label="' + app.name + '" data-id="' + app.id + '" style="--c1:' + L.c1 + ';--c2:' + L.c2 + ';--reveal-delay:' + (idx % 4) * 70 + 'ms">'
    + '<div class="app-card-inner">'
    +   '<div class="app-face app-face-front">'
    +     '<div class="app-media">' + tagsHTML(app.id) + (hasDemo(app.id) ? '<span class="demo-ribbon">' + SVG_PLAY + 'דמו חי</span>' : '')
    +       '<a class="app-logo-wrap" href="' + detailHref(app) + '" data-vt="' + vtName(app.id) + '">' + logoSVG(app, 84) + '</a>'
    +       '<div class="app-name">' + app.name + '</div>'
    +       (bundle || '<span class="app-kicker">' + c.name + '</span>')
    +     '</div>'
    +     '<div class="app-front-hint">' + SVG_FLIP + 'לחצו להפוך · או פתחו את הלוגו</div>'
    +   '</div>'
    +   '<div class="app-face app-face-back">'
    +     '<div class="app-back-body">'
    +       '<div class="app-back-head">' + logoSVG(app, 40) + '<h3>' + app.name + '</h3></div>'
    +       '<p>' + app.tagline + '</p>'
    +       '<ul class="app-feats">' + feats + '</ul>'
    +       '<div class="app-back-actions">' + addBtnHTML(app.id) + (hasDemo(app.id) ? '<a class="demo-link" href="' + demoHref(app.id) + '">' + SVG_PLAY + 'נסו עכשיו</a>' : '<a class="more" href="' + detailHref(app) + '">לפרטים המלאים <span aria-hidden="true">←</span></a>') + '</div>'
    +     '</div>'
    +   '</div>'
    + '</div></article>';
}
function renderCatalog() {
  var html = '', total = 0;
  for (var i = 0; i < CATEGORIES.length; i++) {
    var c = CATEGORIES[i];
    if (activeCat !== 'all' && activeCat !== c.id) continue;
    var cards = '', n = 0;
    for (var j = 0; j < APPS.length; j++) {
      if (APPS[j].cat === c.id && matches(APPS[j], query)) cards += cardHTML(APPS[j], n++);
    }
    if (!n) continue; total += n;
    html += '<section class="cat-section" aria-label="' + c.name + '">'
      + '<div class="section-head reveal" style="--c:' + c.color + '">'
      +   '<div class="section-label"><span class="dot"></span>' + n + ' מערכות</div>'
      +   '<h2 class="section-title">' + c.name + '</h2>'
      +   (CAT_DESC[c.id] && !query ? '<p class="section-sub">' + CAT_DESC[c.id] + '</p>' : '')
      + '</div>'
      + '<div class="grid">' + cards + '</div></section>';
  }
  if (!total) html = '<div class="empty-state">לא מצאנו מערכת שמתאימה ל"' + query + '". נסו מילה אחרת — או <a href="#" onclick="openQuiz();return false;">ענו על 3 שאלות</a> ונמליץ.</div>';
  var body = document.getElementById('catalog-body');
  body.innerHTML = html;
  if (window.observeReveal) observeReveal(body);
  if (query) { var els = body.querySelectorAll('.reveal'); for (var k = 0; k < els.length; k++) els[k].classList.add('is-visible'); }
}
function setCat(id) {
  activeCat = id; renderChips(); renderCatalog(); syncUrl();
  var sec = document.getElementById('catalog');
  if (sec && sec.getBoundingClientRect().top < 0) window.scrollTo({ top: sec.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
}
function renderCatCount() {
  var el = document.getElementById('catCount'); if (!el) return;
  el.textContent = APPS.length + ' מערכות ב-' + CATEGORIES.length + ' תחומים. חפשו לפי צורך, סננו לפי תחום — והוסיפו לסל רק מה שמדבר אליכם.';
}

/* ── שאלון "בנו את הסל" ── */
var quizState = { pains: [], size: 'mid', counselor: 'yes' };
function openQuiz() { document.getElementById('quiz').classList.add('open'); document.body.classList.add('no-scroll'); renderQuiz(1); }
function closeQuiz() { document.getElementById('quiz').classList.remove('open'); document.body.classList.remove('no-scroll'); }
function renderQuiz(step) {
  var box = document.getElementById('quizBody'), h = '';
  var dots = '<div class="quiz-steps">' + [1, 2, 3, 4].map(function (n) { return '<span class="' + (n === step ? 'on' : n < step ? 'done' : '') + '"></span>'; }).join('') + '</div>';
  if (step === 1) {
    h = dots + '<h3>מה מכביד עליכם הכי הרבה היום?</h3><p>אפשר לבחור עד שלושה.</p><div class="quiz-opts">'
      + QUIZ.pains.map(function (p) { return '<button type="button" class="qopt' + (quizState.pains.indexOf(p.id) !== -1 ? ' on' : '') + '" onclick="togglePain(\'' + p.id + '\')">' + p.label + '</button>'; }).join('')
      + '</div><div class="quiz-nav"><span></span><button type="button" class="btn-primary" onclick="renderQuiz(2)"' + (quizState.pains.length ? '' : ' disabled') + '>הבא</button></div>';
  } else if (step === 2) {
    h = dots + '<h3>כמה תלמידים בבית הספר?</h3><div class="quiz-opts">'
      + QUIZ.sizes.map(function (s) { return '<button type="button" class="qopt' + (quizState.size === s.id ? ' on' : '') + '" onclick="quizState.size=\'' + s.id + '\';renderQuiz(2)">' + s.label + '</button>'; }).join('')
      + '</div><div class="quiz-nav"><button type="button" class="btn-outline" onclick="renderQuiz(1)">חזרה</button><button type="button" class="btn-primary" onclick="renderQuiz(3)">הבא</button></div>';
  } else if (step === 3) {
    h = dots + '<h3>יש יועצת חינוכית בצוות?</h3><div class="quiz-opts">'
      + QUIZ.counselor.map(function (s) { return '<button type="button" class="qopt' + (quizState.counselor === s.id ? ' on' : '') + '" onclick="quizState.counselor=\'' + s.id + '\';renderQuiz(3)">' + s.label + '</button>'; }).join('')
      + '</div><div class="quiz-nav"><button type="button" class="btn-outline" onclick="renderQuiz(2)">חזרה</button><button type="button" class="btn-primary" onclick="renderQuiz(4)">הראו לי את הסל</button></div>';
  } else {
    var ids = recommend(quizState.pains, quizState.size, quizState.counselor);
    h = dots + '<h3>הסל שהיינו מתחילים ממנו</h3><p>חמש מערכות שיעשו את ההבדל הכי גדול קודם — אפשר להוסיף או להוריד.</p><div class="quiz-result">'
      + ids.map(function (id) { var a = getApp(id); return '<div class="qres" style="--c1:' + getLogo(id).c1 + '">' + logoSVG(a, 44) + '<div><b>' + a.name + '</b><span>' + a.tagline.split('.')[0] + '.</span></div>' + addBtnHTML(id) + '</div>'; }).join('')
      + '</div><div class="quiz-nav"><button type="button" class="btn-outline" onclick="renderQuiz(1)">מהתחלה</button><button type="button" class="btn-primary" onclick="addAll(' + JSON.stringify(ids).replace(/"/g, '&quot;') + ')">הוסיפו הכול לסל</button></div>';
  }
  box.innerHTML = h;
}
function togglePain(id) {
  var i = quizState.pains.indexOf(id);
  if (i !== -1) quizState.pains.splice(i, 1); else if (quizState.pains.length < 3) quizState.pains.push(id);
  renderQuiz(1);
}
function addAll(ids) {
  var cart = getCart();
  ids.forEach(function (id) { if (cart.indexOf(id) === -1) cart.push(id); });
  setCart(cart); refreshAddButtons(); closeQuiz(); openCart();
}

/* ── מצב מצגת ── */
(function () {
  var p = new URLSearchParams(location.search);
  if (p.get('present') === '1') document.documentElement.classList.add('present');
})();

/* ── הרצה ── */
renderStats(); renderDay(); renderFeatured(); renderDemos(); renderCatTiles(); renderCatCount();
if (document.getElementById('chips')) {
  renderChips(); renderCatalog();
  var qEl = document.getElementById('q'); if (qEl && query) qEl.value = query;
}
if (window.observeReveal) observeReveal();
var badge = document.getElementById('navBadge'); if (badge && document.getElementById('catTiles')) badge.textContent = APPS.length + ' מערכות · בוחרים רק מה שצריך';
