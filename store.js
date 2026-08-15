/**
 * חוות האפליקציות — לוגיקת חנות משותפת (סל + מגירה + טופס ליד)
 * נטען בשני הדפים אחרי apps-data.js ואחרי config.js של ה-CRM
 */

var CART_KEY = 'apps-farm-cart';
var WA_PHONE = '972526857000';

/* ── עזרי סל ── */
function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch (e) { return []; }
}
function setCart(ids) {
  localStorage.setItem(CART_KEY, JSON.stringify(ids));
  renderCartUI();
}
function inCart(id) { return getCart().indexOf(id) !== -1; }
function toggleCart(id) {
  var cart = getCart();
  var i = cart.indexOf(id);
  if (i === -1) cart.push(id); else cart.splice(i, 1);
  setCart(cart);
}

/* ── SVG ── */
function iconSVG(app, color) {
  return '<svg viewBox="0 0 24 24" fill="none" stroke="' + color + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + app.icon + '</svg>';
}
function tileStyle(color) {
  return 'background:' + color + '1a;';
}
var SVG_CART = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20" aria-hidden="true"><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/><path d="M3 4h2l2.6 12h10.2l2.2-8H7"/></svg>';
var SVG_PLUS = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';
var SVG_CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>';
var SVG_X = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" width="18" height="18" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';

/* ── כפתור הוספה ── */
function addBtnHTML(appId) {
  var added = inCart(appId);
  return '<button type="button" class="add-btn' + (added ? ' in-cart' : '') + '" data-app="' + appId + '" onclick="onAddClick(this)">'
    + (added ? SVG_CHECK + '<span>בסל</span>' : SVG_PLUS + '<span>לסל</span>') + '</button>';
}
function onAddClick(btn) {
  toggleCart(btn.getAttribute('data-app'));
  refreshAddButtons();
}
function refreshAddButtons() {
  var btns = document.querySelectorAll('.add-btn[data-app]');
  for (var i = 0; i < btns.length; i++) {
    var added = inCart(btns[i].getAttribute('data-app'));
    btns[i].className = 'add-btn' + (added ? ' in-cart' : '');
    btns[i].innerHTML = added ? SVG_CHECK + '<span>בסל</span>' : SVG_PLUS + '<span>לסל</span>';
  }
}

/* ── מגירת הסל ── */
function buildCartUI() {
  var root = document.getElementById('cart-root');
  if (!root) return;
  root.innerHTML =
    '<button type="button" class="cart-fab empty" id="cartFab" onclick="openCart()" aria-label="פתיחת הסל שלי">'
    + SVG_CART + '<span>הסל שלי</span><span class="count" id="cartCount">0</span></button>'
    + '<div class="cart-overlay" id="cartOverlay" onclick="closeCart()"></div>'
    + '<aside class="cart-drawer" id="cartDrawer" aria-label="הסל שלי">'
    +   '<div class="cart-head"><h2>הסל שלי</h2>'
    +   '<button type="button" class="cart-close" onclick="closeCart()" aria-label="סגירה">' + SVG_X + '</button></div>'
    +   '<div class="cart-body" id="cartBody"></div>'
    +   '<form class="cart-form" id="leadForm">'
    +     '<h3>רוצים את הכלים האלה אצלכם?</h3>'
    +     '<input type="text" name="name" placeholder="שם מלא" required>'
    +     '<select name="role"><option value="מנהל.ת">מנהל.ת</option><option value="סגן.ית מנהל.ת">סגן.ית מנהל.ת</option><option value="רכז.ת">רכז.ת</option><option value="מפקח.ת">מפקח.ת</option><option value="אחר">אחר</option></select>'
    +     '<input type="text" name="school" placeholder="שם בית הספר / הארגון" required>'
    +     '<input type="email" name="email" placeholder="אימייל" required>'
    +     '<input type="tel" name="phone" placeholder="טלפון (לא חובה)">'
    +     '<button type="submit" class="btn" id="leadSubmit">שלחו לי הצעה</button>'
    +     '<div class="form-msg" id="formMsg"></div>'
    +     '<div class="wa-line">או דברו איתנו ישירות <a id="waLink" target="_blank" rel="noopener">בוואטסאפ</a></div>'
    +   '</form>'
    + '</aside>';
  document.getElementById('leadForm').addEventListener('submit', submitLead);
  renderCartUI();
}

function renderCartUI() {
  var fab = document.getElementById('cartFab');
  if (!fab) return;
  var cart = getCart();
  fab.className = 'cart-fab' + (cart.length ? '' : ' empty');
  document.getElementById('cartCount').textContent = cart.length;

  var body = document.getElementById('cartBody');
  if (!cart.length) {
    body.innerHTML = '<p class="cart-empty-msg">הסל ריק. חזרו לחנות ובחרו כלים שמעניינים אתכם.</p>';
  } else {
    var html = '';
    for (var i = 0; i < cart.length; i++) {
      var app = getApp(cart[i]);
      if (!app) continue;
      var color = getCategory(app.cat).color;
      html += '<div class="cart-item">'
        + (typeof logoSVG === 'function' ? logoSVG(app, 40) : '<div class="icon-tile" style="' + tileStyle(color) + '">' + iconSVG(app, color) + '</div>')
        + '<span class="ci-name">' + app.name + '</span>'
        + '<button type="button" class="ci-remove" onclick="removeItem(\'' + app.id + '\')" aria-label="הסרת ' + app.name + '">' + SVG_X + '</button>'
        + '</div>';
    }
    body.innerHTML = html;
  }
  updateWALink();
}

function removeItem(id) {
  toggleCart(id);
  refreshAddButtons();
}

function openCart() {
  document.getElementById('cartOverlay').className = 'cart-overlay open';
  document.getElementById('cartDrawer').className = 'cart-drawer open';
}
function closeCart() {
  document.getElementById('cartOverlay').className = 'cart-overlay';
  document.getElementById('cartDrawer').className = 'cart-drawer';
}

function cartAppNames() {
  var names = [];
  var cart = getCart();
  for (var i = 0; i < cart.length; i++) {
    var app = getApp(cart[i]);
    if (app) names.push(app.name);
  }
  return names;
}

function updateWALink() {
  var a = document.getElementById('waLink');
  if (!a) return;
  var names = cartAppNames();
  var text = 'שלום! ראיתי את חוות האפליקציות לניהול בית ספר ואשמח לשמוע עוד' +
    (names.length ? ' על: ' + names.join(', ') : '');
  a.href = 'https://api.whatsapp.com/send?phone=' + WA_PHONE + '&text=' + encodeURIComponent(text);
}

/* ── שליחת ליד ל-CRM ── */
function submitLead(e) {
  e.preventDefault();
  var form = e.target;
  var msg = document.getElementById('formMsg');
  var btn = document.getElementById('leadSubmit');
  var names = cartAppNames();
  if (!names.length) {
    msg.className = 'form-msg err';
    msg.textContent = 'הסל ריק — בחרו לפחות כלי אחד.';
    return;
  }
  var lead = {
    name: form.querySelector('[name="name"]').value,
    email: form.querySelector('[name="email"]').value,
    phone: form.querySelector('[name="phone"]').value || '',
    role: form.querySelector('[name="role"]').value,
    source: 'app-farm',
    interest: 'כלים: ' + names.join(', ') + ' | בית ספר: ' + form.querySelector('[name="school"]').value
  };
  btn.disabled = true;
  msg.className = 'form-msg';
  msg.textContent = 'שולחים...';

  var send = (typeof sendLeadToCRM === 'function')
    ? sendLeadToCRM(lead)
    : Promise.reject(new Error('CRM לא נטען'));

  send.then(function () {
    msg.className = 'form-msg ok';
    msg.textContent = 'הבקשה נשלחה! נחזור אליכם בקרוב.';
    form.reset();
    btn.disabled = false;
  }).catch(function () {
    msg.className = 'form-msg err';
    msg.innerHTML = 'משהו השתבש בשליחה — אפשר לפנות אלינו ישירות בוואטסאפ למטה.';
    btn.disabled = false;
  });
}

/* ── אתחול ── */
document.addEventListener('DOMContentLoaded', buildCartUI);
