/**
 * חוות האפליקציות — שכבת המותג והתנועה (בשפת IMPACT OS)
 * סימן טביעת-אצבע+לב · לואדר · אור-עכבר ב-hero · badge בגלילה · reveal · flip במגע · מכתבת בפוטר
 */
var BRAND_MARK_SVG =
  '<svg class="brand-lockup-mark" viewBox="0 0 240 284" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true">'
  + '<g stroke="var(--mark-fp, #12C7C7)" stroke-width="9.5" stroke-linecap="round" stroke-linejoin="round" fill="none">'
  + '<path d="M66 76C88 42 139 35 172 60C197 79 207 111 199 146"/>'
  + '<path d="M45 110C57 55 118 26 171 48C212 65 235 107 230 153"/>'
  + '<path d="M19 149C16 79 73 23 142 27C199 30 242 77 240 133"/>'
  + '<path d="M51 188C35 103 94 32 174 38"/>'
  + '<path d="M79 212C52 136 82 70 142 57C180 49 213 72 220 110"/>'
  + '<path d="M108 234C83 185 95 130 134 107C160 92 191 101 202 128"/>'
  + '<path d="M137 255C110 226 110 183 132 158C149 140 177 143 190 164"/>'
  + '<path d="M160 270C145 252 141 232 148 212"/>'
  + '<path d="M39 171C75 148 96 119 108 88"/>'
  + '<path d="M59 218C99 187 119 153 130 115"/>'
  + '<path d="M93 252C123 229 140 203 148 172"/>'
  + '<path d="M185 204C210 170 220 134 209 101"/>'
  + '<path d="M202 245C221 222 232 196 235 169"/>'
  + '</g>'
  + '<g stroke="var(--mark-heart, #F00678)" stroke-width="9.5" stroke-linecap="round" stroke-linejoin="round" fill="none">'
  + '<path d="M88 135C100 111 126 112 140 136C154 111 181 111 194 136"/>'
  + '<path d="M88 135C102 164 127 184 141 199C156 184 181 163 194 136"/>'
  + '</g>'
  + '<g fill="var(--mark-fp, #12C7C7)">'
  + '<circle cx="62" cy="75" r="6.8"/><circle cx="185" cy="60" r="6.8"/><circle cx="35" cy="111" r="6.8"/><circle cx="222" cy="155" r="6.8"/>'
  + '<circle cx="65" cy="218" r="6.8"/><circle cx="166" cy="269" r="6.8"/><circle cx="207" cy="203" r="6.8"/><circle cx="101" cy="253" r="6.8"/>'
  + '<circle cx="135" cy="97" r="6.8"/><circle cx="188" cy="136" r="6.8"/><circle cx="119" cy="178" r="6.8"/><circle cx="142" cy="211" r="6.8"/>'
  + '</g></svg>';

(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* סימן המותג בכל המקומות המסומנים */
  var slots = document.querySelectorAll('[data-brand-mark]');
  for (var i = 0; i < slots.length; i++) slots[i].innerHTML = BRAND_MARK_SVG;

  /* טביעת-אצבע כ-watermark (data-URI) לרקעים של כרטיסים */
  var wm = BRAND_MARK_SVG.replace(/var\(--mark-fp, #12C7C7\)/g, '#061E4F').replace(/var\(--mark-heart, #F00678\)/g, '#061E4F').replace(/ class="brand-lockup-mark"/, '');
  document.documentElement.style.setProperty('--fp-url', 'url("data:image/svg+xml;charset=utf-8,' + encodeURIComponent(wm) + '")');

  /* לואדר — פעם אחת בכל session */
  var loader = document.getElementById('islLoader');
  if (loader) {
    var seen = false;
    try { seen = sessionStorage.getItem('farm-loader') === '1'; } catch (e) {}
    if (seen || reduce) { loader.remove(); }
    else {
      var done = false;
      var finish = function () {
        if (done) return; done = true;
        loader.classList.add('is-done');
        try { sessionStorage.setItem('farm-loader', '1'); } catch (e) {}
        setTimeout(function () { if (loader.parentNode) loader.parentNode.removeChild(loader); }, 600);
      };
      var skip = loader.querySelector('.isl-skip');
      if (skip) skip.addEventListener('click', finish);
      setTimeout(finish, 1750);
    }
  }

  /* Hero — אור עוקב-עכבר שחושף את טביעת-האצבע */
  var hero = document.querySelector('.hero'), light = document.querySelector('.hero-reveal-light');
  if (hero && light && window.matchMedia('(hover: hover)').matches && !reduce) {
    hero.addEventListener('mousemove', function (e) {
      var r = hero.getBoundingClientRect();
      light.style.setProperty('--x', (e.clientX - r.left) + 'px');
      light.style.setProperty('--y', (e.clientY - r.top) + 'px');
      light.style.setProperty('--o', '1');
    });
    hero.addEventListener('mouseleave', function () { light.style.setProperty('--o', '0'); });
  }

  /* Nav — badge בגלילה */
  var badge = document.querySelector('.nav-scroll-badge');
  if (badge) {
    var onScroll = function () { badge.classList.toggle('is-visible', window.scrollY > 260); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }

  /* reveal on scroll */
  if ('IntersectionObserver' in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      for (var j = 0; j < entries.length; j++) {
        if (entries[j].isIntersecting) { entries[j].target.classList.add('is-visible'); io.unobserve(entries[j].target); }
      }
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.06 });
    window.observeReveal = function (root) {
      var els = (root || document).querySelectorAll('.reveal:not(.is-visible)');
      for (var k = 0; k < els.length; k++) io.observe(els[k]);
    };
  } else {
    window.observeReveal = function (root) {
      var els = (root || document).querySelectorAll('.reveal');
      for (var k = 0; k < els.length; k++) els[k].classList.add('is-visible');
    };
  }
  window.observeReveal();

  /* Flip — במגע: הקשה על כרטיס הופכת אותו (כפתורים וקישורים לא הופכים) */
  document.addEventListener('click', function (e) {
    var card = e.target.closest && e.target.closest('.app-card');
    if (!card) {
      var open = document.querySelectorAll('.app-card.is-flipped');
      for (var m = 0; m < open.length; m++) open[m].classList.remove('is-flipped');
      return;
    }
    if (e.target.closest('a, button, input, select, label')) return;
    var others = document.querySelectorAll('.app-card.is-flipped');
    for (var n = 0; n < others.length; n++) if (others[n] !== card) others[n].classList.remove('is-flipped');
    card.classList.toggle('is-flipped');
  });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    var card = document.activeElement && document.activeElement.classList && document.activeElement.classList.contains('app-card') ? document.activeElement : null;
    if (card) { e.preventDefault(); card.classList.toggle('is-flipped'); }
  });

  /* פוטר — מכתבת */
  var tw = document.querySelector('.footer-typewriter');
  if (tw && !reduce && 'IntersectionObserver' in window) {
    var full = tw.getAttribute('data-text') || tw.textContent; tw.textContent = '';
    var started = false;
    var tio = new IntersectionObserver(function (es) {
      if (!es[0].isIntersecting || started) return; started = true; tio.disconnect();
      tw.classList.add('is-writing'); var idx = 0;
      (function type() {
        tw.textContent = full.slice(0, ++idx);
        if (idx < full.length) setTimeout(type, 34 + Math.random() * 40);
        else setTimeout(function () { tw.classList.remove('is-writing'); }, 1200);
      })();
    }, { threshold: .4 });
    tio.observe(tw);
  } else if (tw) { tw.textContent = tw.getAttribute('data-text') || tw.textContent; }
})();

/* ── v3: tilt · view-transitions · מקלדת/מצגת ── */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var canHover = window.matchMedia && window.matchMedia('(hover: hover)').matches;

  /* tilt — הכרטיס נוטה לפי מיקום העכבר (max ±7°) */
  if (canHover && !reduce) {
    document.addEventListener('pointermove', function (e) {
      var el = e.target.closest && e.target.closest('.tilt');
      if (!el) return;
      var r = el.getBoundingClientRect();
      var px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
      el.style.setProperty('--ry', (px * 10).toFixed(2) + 'deg');
      el.style.setProperty('--rx', (-py * 8).toFixed(2) + 'deg');
    }, { passive: true });
    document.addEventListener('pointerout', function (e) {
      var el = e.target.closest && e.target.closest('.tilt');
      if (!el || (e.relatedTarget && el.contains(e.relatedTarget))) return;
      el.style.setProperty('--ry', '0deg'); el.style.setProperty('--rx', '0deg');
    }, { passive: true });
  }

  /* view transitions — הלוגו שנלחץ מקבל שם, ובדף הפירוט הלוגו הגדול מקבל אותו שם */
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('[data-vt]');
    if (!a) return;
    var svg = a.querySelector('svg');
    if (svg) svg.style.viewTransitionName = a.getAttribute('data-vt');
  }, true);
  var stageLogo = document.querySelector('.detail-stage .app-logo');
  if (stageLogo) {
    var id = new URLSearchParams(location.search).get('id');
    if (id) stageLogo.style.viewTransitionName = 'logo-' + id;
  }

  /* Escape סוגר שאלון/סל; מצב-מצגת: חיצים בין כרטיסים, רווח הופך */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      if (typeof closeQuiz === 'function' && document.getElementById('quiz') && document.getElementById('quiz').classList.contains('open')) closeQuiz();
      else if (typeof closeCart === 'function') closeCart();
    }
    if (!document.documentElement.classList.contains('present')) return;
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    var cards = Array.prototype.slice.call(document.querySelectorAll('.app-card'));
    if (!cards.length) return;
    var i = cards.indexOf(document.activeElement);
    var next = e.key === 'ArrowLeft' ? i + 1 : i - 1;   /* RTL: שמאלה = הבא */
    if (next < 0) next = 0; if (next >= cards.length) next = cards.length - 1;
    cards[next].focus(); cards[next].scrollIntoView({ block: 'center', behavior: 'smooth' });
    e.preventDefault();
  });
})();
