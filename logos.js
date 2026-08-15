/**
 * חוות האפליקציות — לוגו ייחודי לכל מערכת
 * כל לוגו: זוג צבעי-גרדיאנט משלו + סמל SVG מצויר ידנית (viewBox 0 0 64 64).
 * הסמלים לבנים (עם שכבות שקיפות) על אריח-גרדיאנט — כך כל מערכת מזוהה, וכולן משפחה אחת.
 * להוסיף מערכת חדשה: מוסיפים מפתח לפי ה-id של האפליקציה ב-apps-data.js.
 */
var LOGOS = {

  /* ── תלמידים ── */
  'student-file': { c1: '#12C7C7', c2: '#0B4F9C', svg:
    '<path d="M12 22a4 4 0 0 1 4-4h10l4 4h18a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4z" fill="#fff" opacity=".28"/>'
    + '<path d="M12 28h40v18a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4z" fill="#fff"/>'
    + '<circle cx="32" cy="36" r="4.2" fill="url(#G)"/>'
    + '<path d="M24.5 47c1-4.6 4.2-6.5 7.5-6.5s6.5 1.9 7.5 6.5z" fill="url(#G)"/>' },

  'roster': { c1: '#12C7C7', c2: '#7BCB52', svg:
    '<rect x="12" y="13" width="40" height="11" rx="5.5" fill="#fff"/>'
    + '<rect x="12" y="26.5" width="40" height="11" rx="5.5" fill="#fff" opacity=".78"/>'
    + '<rect x="12" y="40" width="40" height="11" rx="5.5" fill="#fff" opacity=".55"/>'
    + '<circle cx="19" cy="18.5" r="3" fill="url(#G)"/><circle cx="19" cy="32" r="3" fill="url(#G)" opacity=".85"/><circle cx="19" cy="45.5" r="3" fill="url(#G)" opacity=".7"/>'
    + '<rect x="25" y="16.5" width="18" height="4" rx="2" fill="url(#G)" opacity=".55"/><rect x="25" y="30" width="14" height="4" rx="2" fill="url(#G)" opacity=".45"/><rect x="25" y="43.5" width="16" height="4" rx="2" fill="url(#G)" opacity=".38"/>' },

  'admission': { c1: '#0FB5C9', c2: '#0B7DB5', svg:
    '<path d="M30 12h14a4 4 0 0 1 4 4v32a4 4 0 0 1-4 4H30z" fill="#fff" opacity=".35"/>'
    + '<path d="M30 12l-14 4v36l14-4z" fill="#fff"/>'
    + '<circle cx="26.5" cy="33" r="1.9" fill="url(#G)"/>'
    + '<path d="M8 32h20" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M22 25l7 7-7 7" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
    + '<path d="M50 14l1.6 3.4 3.7.5-2.7 2.6.7 3.7-3.3-1.8-3.3 1.8.7-3.7-2.7-2.6 3.7-.5z" fill="#fff" opacity=".9"/>' },

  'journey': { c1: '#12C7C7', c2: '#F00678', svg:
    '<path d="M12 50c10 0 8-16 20-16s8 12 20-4" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-dasharray="1 8" opacity=".55"/>'
    + '<path d="M12 50c10 0 8-16 20-16s8 12 20-4" fill="none" stroke="#fff" stroke-width="4.5" stroke-linecap="round" stroke-dasharray="26 100"/>'
    + '<circle cx="12" cy="50" r="6" fill="#fff"/><circle cx="12" cy="50" r="2.4" fill="url(#G)"/>'
    + '<circle cx="32" cy="34" r="4.5" fill="#fff" opacity=".85"/>'
    + '<path d="M50 30V13" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/><path d="M50 13h11l-3.5 4.5L61 22H50z" fill="#fff"/>' },

  'conversations': { c1: '#12C7C7', c2: '#7BCB52', svg:
    '<path d="M10 22a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8v8a8 8 0 0 1-8 8H24l-8 6v-6h0a8 8 0 0 1-6-8z" fill="#fff" opacity=".55"/>'
    + '<path d="M22 30a8 8 0 0 1 8-8h16a8 8 0 0 1 8 8v8a8 8 0 0 1-8 8h-2v6l-8-6H30a8 8 0 0 1-8-8z" fill="#fff"/>'
    + '<path d="M38 30.5c-2.4-2.6-6.6-.3-4.9 3 .9 1.8 3.4 3.6 4.9 4.7 1.5-1.1 4-2.9 4.9-4.7 1.7-3.3-2.5-5.6-4.9-3z" fill="url(#G)"/>' },

  'risk': { c1: '#0E9DB0', c2: '#061E4F', svg:
    '<circle cx="32" cy="32" r="21" fill="none" stroke="#fff" stroke-width="2.5" opacity=".35"/>'
    + '<circle cx="32" cy="32" r="13" fill="none" stroke="#fff" stroke-width="2.5" opacity=".55"/>'
    + '<path d="M32 32L32 11A21 21 0 0 1 53 32z" fill="#fff" opacity=".35"/>'
    + '<path d="M32 32L53 32" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'
    + '<circle cx="32" cy="32" r="3.5" fill="#fff"/>'
    + '<circle cx="21" cy="24" r="4.5" fill="#F00678"/><circle cx="21" cy="24" r="8" fill="none" stroke="#F00678" stroke-width="2" opacity=".5"/>' },

  /* ── נוכחות ומשמעת ── */
  'attendance': { c1: '#F00678', c2: '#FF7A1A', svg:
    '<circle cx="30" cy="34" r="20" fill="#fff" opacity=".28"/>'
    + '<circle cx="30" cy="34" r="15" fill="#fff"/>'
    + '<path d="M30 25v9l6 4" fill="none" stroke="url(#G)" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>'
    + '<circle cx="48" cy="18" r="9" fill="#fff"/><path d="M43.5 18l3.2 3.2 6-6.4" fill="none" stroke="url(#G)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' },

  'tardiness': { c1: '#FF7A1A', c2: '#F4B41B', svg:
    '<path d="M10 44h44" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".7"/>'
    + '<path d="M17 44a15 15 0 0 1 30 0z" fill="#fff"/>'
    + '<path d="M32 16v6M46.5 22.5l-4 4M17.5 22.5l4 4M8 38h5M51 38h5" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".8"/>'
    + '<circle cx="46" cy="50" r="8" fill="#fff"/><path d="M46 45.5V50l3 2" fill="none" stroke="url(#G)" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>' },

  'discipline': { c1: '#F00678', c2: '#5B2D9E', svg:
    '<path d="M32 10l18 6v14c0 11-7.5 19.5-18 24-10.5-4.5-18-13-18-24V16z" fill="#fff" opacity=".32"/>'
    + '<path d="M32 15l13.5 4.5V30c0 8.5-5.6 15-13.5 18.6C24.1 45 18.5 38.5 18.5 30V19.5z" fill="#fff"/>'
    + '<path d="M25 37h14M27 31h10M29 25h6" stroke="url(#G)" stroke-width="3" stroke-linecap="round"/>' },

  'incident': { c1: '#F00678', c2: '#FF7A1A', svg:
    '<path d="M32 12a13 13 0 0 1 13 13v8l4 6H15l4-6v-8a13 13 0 0 1 13-13z" fill="#fff"/>'
    + '<path d="M26 44a6 6 0 0 0 12 0z" fill="#fff" opacity=".8"/>'
    + '<path d="M32 20v9M32 33.5v.5" stroke="url(#G)" stroke-width="3.6" stroke-linecap="round"/>'
    + '<path d="M9 22l5 2M9 34l5-1M55 22l-5 2M55 34l-5-1" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/>' },

  /* ── צוות והוראה ── */
  'timetable': { c1: '#7BCB52', c2: '#12C7C7', svg:
    '<rect x="11" y="13" width="42" height="40" rx="7" fill="#fff" opacity=".32"/>'
    + '<rect x="11" y="13" width="42" height="12" rx="7" fill="#fff"/>'
    + '<rect x="17" y="30" width="9" height="7" rx="2.5" fill="#fff"/><rect x="28" y="30" width="9" height="7" rx="2.5" fill="#fff" opacity=".7"/><rect x="39" y="30" width="9" height="7" rx="2.5" fill="#fff"/>'
    + '<rect x="17" y="40" width="9" height="7" rx="2.5" fill="#fff" opacity=".7"/><rect x="39" y="40" width="9" height="7" rx="2.5" fill="#fff" opacity=".7"/>'
    + '<path d="M29 43.5h6M32.5 40.5l3 3-3 3" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>' },

  'monthly-reports': { c1: '#7BCB52', c2: '#0EA5B7', svg:
    '<path d="M16 10h22l10 10v30a4 4 0 0 1-4 4H16a4 4 0 0 1-4-4V14a4 4 0 0 1 4-4z" fill="#fff" opacity=".35"/>'
    + '<path d="M38 10v10h10z" fill="#fff" opacity=".7"/>'
    + '<rect x="19" y="36" width="6" height="11" rx="2" fill="#fff"/><rect x="28" y="28" width="6" height="19" rx="2" fill="#fff"/><rect x="37" y="32" width="6" height="15" rx="2" fill="#fff"/>'
    + '<path d="M19 26l9-6 9 3 6-6" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/>' },

  'teacher-feedback': { c1: '#7BCB52', c2: '#F4B41B', svg:
    '<path d="M12 22a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8v12a8 8 0 0 1-8 8H30l-10 8v-8h0a8 8 0 0 1-8-8z" fill="#fff"/>'
    + '<path d="M24 31l2.2-4.6 2.2 4.6 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5z" fill="url(#G)" transform="translate(-4 -6)"/>'
    + '<path d="M32 22l2 4.2 4.6.7-3.3 3.2.8 4.6-4.1-2.2-4.1 2.2.8-4.6-3.3-3.2 4.6-.7z" fill="url(#G)" transform="translate(6 -1) scale(.95)"/>' },

  'duties': { c1: '#7BCB52', c2: '#061E4F', svg:
    '<path d="M46 20a19 19 0 0 0-30 4" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".55"/>'
    + '<path d="M18 44a19 19 0 0 0 30-4" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".55"/>'
    + '<path d="M13 16v9h9M51 48v-9h-9" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity=".55"/>'
    + '<circle cx="32" cy="29" r="5.5" fill="#fff"/><path d="M22 44c1.4-6 5.4-8.5 10-8.5s8.6 2.5 10 8.5z" fill="#fff"/>' },

  /* ── פדגוגיה ואקלים ── */
  'lessons-library': { c1: '#FF7A1A', c2: '#F00678', svg:
    '<rect x="11" y="16" width="10" height="34" rx="3" fill="#fff" opacity=".65"/>'
    + '<rect x="24" y="12" width="10" height="38" rx="3" fill="#fff"/>'
    + '<rect x="37" y="18" width="10" height="32" rx="3" fill="#fff" opacity=".8" transform="rotate(-8 42 34)"/>'
    + '<rect x="26.5" y="18" width="5" height="3" rx="1.5" fill="url(#G)" opacity=".7"/>'
    + '<path d="M50 20c-2.6-2.8-7.2-.3-5.4 3.3 1 2 3.7 4 5.4 5.2 1.7-1.2 4.4-3.2 5.4-5.2 1.8-3.6-2.8-6.1-5.4-3.3z" fill="#fff"/>' },

  'pulse': { c1: '#F00678', c2: '#F47C26', svg:
    '<circle cx="32" cy="32" r="21" fill="#fff" opacity=".28"/>'
    + '<circle cx="32" cy="32" r="15.5" fill="#fff"/>'
    + '<path d="M20 32h5l3-6 5 12 4-9 2 3h5" fill="none" stroke="url(#G)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'
    + '<circle cx="32" cy="32" r="21" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="4 7" opacity=".7"/>' },

  'life-skills': { c1: '#FF7A1A', c2: '#7BCB52', svg:
    '<path d="M32 52V30" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'
    + '<path d="M32 36c-10 1-16-6-16-15 9 0 16 5 16 15z" fill="#fff"/>'
    + '<path d="M32 30c1-10 8-16 16-16 0 9-6 16-16 16z" fill="#fff" opacity=".85"/>'
    + '<path d="M18 52c2-4 6-6 14-6s12 2 14 6z" fill="#fff" opacity=".6"/>' },

  'investment-bank': { c1: '#F4B41B', c2: '#FF7A1A', svg:
    '<circle cx="30" cy="34" r="19" fill="#fff" opacity=".3"/>'
    + '<circle cx="30" cy="34" r="14" fill="#fff"/>'
    + '<path d="M30 25l2.7 5.6 6.2.9-4.5 4.3 1.1 6.1-5.5-2.9-5.5 2.9 1.1-6.1-4.5-4.3 6.2-.9z" fill="url(#G)"/>'
    + '<circle cx="49" cy="18" r="8" fill="#fff"/><path d="M49 14v8M45 18h8" stroke="url(#G)" stroke-width="2.8" stroke-linecap="round"/>' },

  'morning-openings': { c1: '#F4B41B', c2: '#FF7A1A', svg:
    '<path d="M8 46h48" stroke="#fff" stroke-width="4" stroke-linecap="round"/>'
    + '<path d="M17 46a15 15 0 0 1 30 0z" fill="#fff"/>'
    + '<path d="M32 12v8M50.5 19.5l-5.7 5.7M13.5 19.5l5.7 5.7M8 36h6M50 36h6" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".85"/>'
    + '<path d="M22 54h20" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".5"/>' },

  'personal-plan': { c1: '#FF7A1A', c2: '#061E4F', svg:
    '<circle cx="34" cy="34" r="20" fill="none" stroke="#fff" stroke-width="3.5" opacity=".4"/>'
    + '<circle cx="34" cy="34" r="12.5" fill="none" stroke="#fff" stroke-width="3.5" opacity=".7"/>'
    + '<circle cx="34" cy="34" r="5" fill="#fff"/>'
    + '<path d="M34 34L52 16" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>'
    + '<path d="M50 10v8h8" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>' },

  /* ── תכנון ותקציב ── */
  'annual-plan': { c1: '#C98600', c2: '#061E4F', svg:
    '<rect x="11" y="14" width="42" height="40" rx="7" fill="#fff" opacity=".32"/>'
    + '<rect x="11" y="14" width="42" height="11" rx="7" fill="#fff"/>'
    + '<path d="M22 10v8M42 10v8" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>'
    + '<circle cx="20" cy="33" r="3" fill="#fff"/><circle cx="28" cy="33" r="3" fill="#fff"/><circle cx="36" cy="33" r="3" fill="#fff"/><circle cx="44" cy="33" r="3" fill="#fff"/>'
    + '<circle cx="20" cy="42" r="3" fill="#fff"/><circle cx="28" cy="42" r="3" fill="#fff"/><circle cx="36" cy="42" r="3" fill="#fff" opacity=".55"/><circle cx="44" cy="42" r="3" fill="#fff" opacity=".55"/>'
    + '<path d="M18 49h28" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".55"/>' },

  'budget': { c1: '#C98600', c2: '#7BCB52', svg:
    '<ellipse cx="24" cy="44" rx="13" ry="5.5" fill="#fff"/><path d="M11 44v-7c0 3 5.8 5.5 13 5.5s13-2.5 13-5.5v7c0 3-5.8 5.5-13 5.5S11 47 11 44z" fill="#fff" opacity=".65"/>'
    + '<ellipse cx="24" cy="30" rx="13" ry="5.5" fill="#fff" opacity=".8"/>'
    + '<path d="M46 12a14 14 0 1 1-10 4l10 10z" fill="#fff" opacity=".45"/><path d="M46 12a14 14 0 0 1 14 14H46z" fill="#fff"/>' },

  'exams': { c1: '#C98600', c2: '#12C7C7', svg:
    '<rect x="14" y="10" width="30" height="42" rx="5" fill="#fff" opacity=".35"/>'
    + '<rect x="14" y="10" width="30" height="42" rx="5" fill="none" stroke="#fff" stroke-width="2.5" opacity=".7"/>'
    + '<path d="M21 22h12M21 30h16M21 38h10" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'
    + '<path d="M50 20l-14 14-2 6 6-2 14-14z" fill="#fff"/><path d="M47 23l4 4" stroke="url(#G)" stroke-width="2" stroke-linecap="round"/>' },

  'handover': { c1: '#061E4F', c2: '#C98600', svg:
    '<rect x="10" y="22" width="44" height="30" rx="7" fill="#fff"/>'
    + '<path d="M24 22v-5a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v5" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>'
    + '<path d="M10 34h44" stroke="url(#G)" stroke-width="2.5" opacity=".45"/>'
    + '<path d="M22 44h20M36 40l4 4-4 4M28 32l-4 2 4 2" fill="none" stroke="url(#G)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' }
};

/* לוגו-ברירת-מחדל למערכת חדשה שעוד אין לה סמל */
var LOGO_FALLBACK = { c1: '#12C7C7', c2: '#061E4F', svg:
  '<rect x="14" y="14" width="16" height="16" rx="5" fill="#fff"/><rect x="34" y="14" width="16" height="16" rx="5" fill="#fff" opacity=".7"/>'
  + '<rect x="14" y="34" width="16" height="16" rx="5" fill="#fff" opacity=".7"/><rect x="34" y="34" width="16" height="16" rx="5" fill="#fff" opacity=".45"/>' };

function getLogo(id) { return LOGOS[id] || LOGO_FALLBACK; }

/**
 * מחזיר SVG מלא של אריח-לוגו: גרדיאנט ייחודי, ברק עדין, וסמל.
 * size — גודל בפיקסלים (ברירת מחדל 84).
 */
function logoSVG(app, size) {
  var L = getLogo(app.id), s = size || 84, gid = 'lg-' + app.id + '-' + s;
  return '<svg class="app-logo" width="' + s + '" height="' + s + '" viewBox="0 0 64 64" role="img" aria-label="' + app.name + '">'
    + '<defs>'
    +   '<linearGradient id="' + gid + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + L.c1 + '"/><stop offset="1" stop-color="' + L.c2 + '"/></linearGradient>'
    +   '<linearGradient id="' + gid + '-sh" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".22"/><stop offset=".55" stop-color="#fff" stop-opacity="0"/></linearGradient>'
    + '</defs>'
    + '<rect width="64" height="64" rx="18" fill="url(#' + gid + ')"/>'
    + '<rect width="64" height="64" rx="18" fill="url(#' + gid + '-sh)"/>'
    + L.svg.split('url(#G)').join('url(#' + gid + ')')
    + '</svg>';
}
