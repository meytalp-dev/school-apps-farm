/**
 * חוות האפליקציות — מעטפת הדמו
 * כל דף-דמו קורא: DemoShell.init('app-id') אחרי טעינת ../apps-data.js, ../logos.js, ../store.js
 * מרנדר: סרגל עליון (חזרה · לוגו+שם · תג "נתוני דמה" · לסל · לפרטי המערכת), פוטר, טוסט, ועוזרים.
 */
var DemoShell = (function () {
  var SVG_BACK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 6l6 6-6 6"/></svg>';
  var SVG_X = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';
  var SVG_SPARK = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8z"/><path d="M19 14l.9 2.6L22.5 17.5l-2.6.9L19 21l-.9-2.6-2.6-.9 2.6-.9z" opacity=".7"/></svg>';

  function init(appId, opts) {
    opts = opts || {};
    var app = getApp(appId);
    if (!app) return;
    document.title = 'דמו · ' + app.name + ' — חוות האפליקציות';
    /* מצב מוטמע (iframe בתוך דמו אחר): ?embed=1 — בלי סרגל עליון ופוטר */
    if (/[?&]embed=1/.test(location.search)) {
      document.documentElement.classList.add('embed');
      var toastE = document.createElement('div'); toastE.className = 'toast'; toastE.id = 'demoToast'; document.body.appendChild(toastE);
      if (!document.getElementById('cart-root')) { var crE = document.createElement('div'); crE.id = 'cart-root'; document.body.appendChild(crE); }
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { var mE = document.querySelector('.modal.open'); if (mE) mE.classList.remove('open'); } });
      return;
    }
    var bar = document.createElement('header');
    bar.className = 'demo-bar';
    bar.innerHTML = '<div class="demo-bar-inner">'
      + '<a class="demo-back" href="../catalog.html">' + SVG_BACK + '<span>לחוות האפליקציות</span></a>'
      + '<div class="demo-brand">' + logoSVG(app, 40) + '<div><h1>' + app.name + '</h1><small>' + (opts.subtitle || DEMO.school.name + ' · ' + DEMO.school.year) + '</small></div></div>'
      + '<span class="demo-badge">דמו — נתונים מומצאים</span>'
      + '<div class="demo-actions">' + addBtnHTML(app.id) + '<a class="btn-outline" href="../app.html?id=' + app.id + '">לפרטי המערכת</a></div>'
      + '</div>';
    document.body.insertBefore(bar, document.body.firstChild);

    var foot = document.createElement('div');
    foot.className = 'demo-foot';
    foot.innerHTML = 'זהו דמו של <b>' + app.name + '</b> עם נתונים מומצאים של "' + DEMO.school.name + '". במערכת האמיתית הנתונים שלכם, ההרשאות שלכם, בענן שלכם. '
      + '<a href="../app.html?id=' + app.id + '">לפרטי המערכת</a> · <a href="../index.html#contact">לשיחת היכרות</a>';
    document.body.appendChild(foot);

    var toast = document.createElement('div'); toast.className = 'toast'; toast.id = 'demoToast'; document.body.appendChild(toast);
    if (!document.getElementById('cart-root')) { var cr = document.createElement('div'); cr.id = 'cart-root'; document.body.appendChild(cr); }
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { var m = document.querySelector('.modal.open'); if (m) m.classList.remove('open'); } });
  }

  var toastTimer;
  function toast(msg) {
    var t = document.getElementById('demoToast'); if (!t) return;
    t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2400);
  }
  function openModal(id) { var m = document.getElementById(id); if (m) m.classList.add('open'); }
  function closeModal(id) { var m = document.getElementById(id); if (m) m.classList.remove('open'); }
  function modalHTML(id, title, bodyHTML, actionsHTML) {
    return '<div class="modal" id="' + id + '" role="dialog" aria-modal="true"><div class="modal-overlay" onclick="DemoShell.closeModal(\'' + id + '\')"></div>'
      + '<div class="modal-card"><button type="button" class="icon-btn modal-close" onclick="DemoShell.closeModal(\'' + id + '\')" aria-label="סגירה">' + SVG_X + '</button>'
      + '<h3>' + title + '</h3>' + bodyHTML + (actionsHTML ? '<div class="modal-actions">' + actionsHTML + '</div>' : '') + '</div></div>';
  }
  /* פאנל סוכן-AI מדומה: תשובות מוכנות לפי מילות-מפתח, עם "הקלדה" */
  function aiPanel(id, title, subtitle, suggestions) {
    return '<section class="ai-panel" id="' + id + '">'
      + '<div class="ai-head"><span class="spark">' + SVG_SPARK + '</span><div><h3>' + title + '</h3><small>' + (subtitle || 'סוכן AI — בדמו התשובות מוכנות מראש') + '</small></div></div>'
      + '<div class="ai-body" id="' + id + '-body"><div class="ai-msg bot">שלום! שאלו אותי — או בחרו שאלה מוכנה למטה.</div></div>'
      + '<div class="ai-suggest">' + (suggestions || []).map(function (s) { return '<button type="button" onclick="DemoShell.aiAsk(\'' + id + '\', this.textContent)">' + s + '</button>'; }).join('') + '</div>'
      + '<form class="ai-input" onsubmit="event.preventDefault();DemoShell.aiAsk(\'' + id + '\', this.q.value);this.q.value=\'\'"><input class="in" name="q" placeholder="שאלו את הסוכן…" autocomplete="off"><button type="submit" class="btn-sm navy">שלח</button></form>'
      + '</section>';
  }
  var aiAnswers = {};
  function aiRegister(id, fn) { aiAnswers[id] = fn; }
  function aiAsk(id, q) {
    q = (q || '').trim(); if (!q) return;
    var body = document.getElementById(id + '-body');
    body.insertAdjacentHTML('beforeend', '<div class="ai-msg user">' + esc(q) + '</div>');
    var typing = document.createElement('div'); typing.className = 'ai-msg bot'; typing.innerHTML = '<span class="typing"><i></i><i></i><i></i></span>'; body.appendChild(typing);
    body.scrollTop = body.scrollHeight;
    setTimeout(function () {
      var ans = (aiAnswers[id] ? aiAnswers[id](q) : null) || 'בדמו אני עונה על שאלות מוכנות מראש — במערכת האמיתית הסוכן מנתח את הנתונים שלכם בזמן אמת.';
      typing.innerHTML = ans; body.scrollTop = body.scrollHeight;
    }, 700 + Math.random() * 500);
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  return { init: init, toast: toast, openModal: openModal, closeModal: closeModal, modalHTML: modalHTML, aiPanel: aiPanel, aiRegister: aiRegister, aiAsk: aiAsk, esc: esc };
})();
