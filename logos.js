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
    + '<path d="M22 44h20M36 40l4 4-4 4M28 32l-4 2 4 2" fill="none" stroke="url(#G)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' },
  /* ── הרחבה — 35 מערכות נוספות ── */

  /* תלמידים */
  'directory': { c1: '#12C7C7', c2: '#0B7DB5', svg:
    '<rect x="12" y="10" width="40" height="44" rx="8" fill="#fff" opacity=".35"/>'
    + '<rect x="12" y="10" width="40" height="44" rx="8" fill="none" stroke="#fff" stroke-width="2.5" opacity=".7"/>'
    + '<circle cx="32" cy="26" r="7" fill="#fff"/><path d="M19 44c1.6-6.5 7-9.5 13-9.5s11.4 3 13 9.5z" fill="#fff"/>'
    + '<path d="M8 20h5M8 30h5M8 40h5" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".8"/>'
    + '<circle cx="47" cy="47" r="8" fill="#7BCB52"/><path d="M43.8 46.2c.6 1.9 2.1 3.4 4 4l1.6-1.6 2.6 1.1-.5 2.2c-4.6.9-9.4-3.9-8.5-8.5l2.2-.5 1.1 2.6z" fill="#fff"/>' },

  'bagrut': { c1: '#0FB5C9', c2: '#061E4F', svg:
    '<path d="M32 12L8 24l24 12 24-12z" fill="#fff"/>'
    + '<path d="M16 30v10c0 4 7 8 16 8s16-4 16-8V30l-16 8z" fill="#fff" opacity=".7"/>'
    + '<path d="M54 25v14" stroke="#fff" stroke-width="3" stroke-linecap="round"/><circle cx="54" cy="42" r="3" fill="#F4B41B"/>'
    + '<circle cx="46" cy="50" r="8" fill="#7BCB52"/><path d="M42.5 50l2.6 2.6 4.6-5" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>' },

  /* ייעוץ וטיפול */
  'counselor-dashboard': { c1: '#7B4EC8', c2: '#5B2D9E', svg:
    '<rect x="10" y="12" width="44" height="40" rx="8" fill="#fff" opacity=".3"/>'
    + '<rect x="15" y="17" width="16" height="12" rx="4" fill="#fff"/><rect x="34" y="17" width="15" height="12" rx="4" fill="#fff" opacity=".7"/>'
    + '<rect x="15" y="32" width="34" height="5" rx="2.5" fill="#fff" opacity=".8"/><rect x="15" y="41" width="24" height="5" rx="2.5" fill="#fff" opacity=".6"/>'
    + '<path d="M42 44c-2.4-2.6-6.6-.3-4.9 3 .9 1.8 3.4 3.6 4.9 4.7 1.5-1.1 4-2.9 4.9-4.7 1.7-3.3-2.5-5.6-4.9-3z" fill="#F00678"/>' },

  'shiluv': { c1: '#A07EE0', c2: '#5B2D9E', svg:
    '<path d="M14 30h36l-3 22H17z" fill="#fff"/>'
    + '<path d="M22 30c0-8 4-13 10-13s10 5 10 13" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".85"/>'
    + '<circle cx="24" cy="40" r="4" fill="url(#G)" opacity=".8"/><circle cx="32" cy="42" r="4" fill="url(#G)" opacity=".8"/><circle cx="40" cy="40" r="4" fill="url(#G)" opacity=".8"/>'
    + '<path d="M28 20l4-4 4 4M32 16v8" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity=".7"/>' },

  'therapy': { c1: '#7B4EC8', c2: '#F00678', svg:
    '<path d="M32 50c-9-6-19-13-19-23a9.5 9.5 0 0 1 19-3 9.5 9.5 0 0 1 19 3c0 10-10 17-19 23z" fill="#fff"/>'
    + '<path d="M18 30h7l3-6 4 12 3-8 2 2h9" fill="none" stroke="url(#G)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' },

  /* צוות */
  'teacher-assessment': { c1: '#7BCB52', c2: '#0EA5B7', svg:
    '<circle cx="32" cy="32" r="21" fill="#fff" opacity=".28"/>'
    + '<path d="M32 12l19 14-7 22H20l-7-22z" fill="none" stroke="#fff" stroke-width="2.5" opacity=".7"/>'
    + '<path d="M32 20l12 9-4.5 14h-15L20 29z" fill="#fff" opacity=".9"/>'
    + '<circle cx="32" cy="12" r="3.5" fill="#fff"/><circle cx="51" cy="26" r="3.5" fill="#fff"/><circle cx="44" cy="48" r="3.5" fill="#fff"/><circle cx="20" cy="48" r="3.5" fill="#fff"/><circle cx="13" cy="26" r="3.5" fill="#fff"/>'
    + '<circle cx="32" cy="32" r="4" fill="url(#G)"/>' },

  'teacher-plan': { c1: '#7BCB52', c2: '#C98600', svg:
    '<path d="M14 50V16" stroke="#fff" stroke-width="4" stroke-linecap="round" opacity=".7"/>'
    + '<path d="M14 18c8-6 14 6 22 0s10-6 14 0v20c-4-6-6-6-14 0s-14-6-22 0z" fill="#fff"/>'
    + '<path d="M22 27h20M22 33h12" stroke="url(#G)" stroke-width="2.6" stroke-linecap="round" opacity=".7"/>'
    + '<path d="M40 44l3 3 6-6" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>' },

  'staff-calendar': { c1: '#7BCB52', c2: '#12C7C7', svg:
    '<rect x="11" y="14" width="42" height="40" rx="7" fill="#fff" opacity=".32"/>'
    + '<rect x="11" y="14" width="42" height="11" rx="7" fill="#fff"/>'
    + '<path d="M22 10v8M42 10v8" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>'
    + '<circle cx="24" cy="36" r="4" fill="#fff"/><path d="M17 48c1-4.2 3.8-6 7-6s6 1.8 7 6z" fill="#fff"/>'
    + '<circle cx="40" cy="36" r="4" fill="#fff" opacity=".8"/><path d="M33 48c1-4.2 3.8-6 7-6s6 1.8 7 6z" fill="#fff" opacity=".8"/>' },

  /* תפעול ותקשורת */
  'tasks': { c1: '#0B7DB5', c2: '#061E4F', svg:
    '<rect x="12" y="10" width="40" height="44" rx="8" fill="#fff" opacity=".3"/>'
    + '<rect x="18" y="18" width="9" height="9" rx="3" fill="#fff"/><path d="M20.5 22.5l2 2 4-4.5" fill="none" stroke="url(#G)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    + '<rect x="18" y="31" width="9" height="9" rx="3" fill="#fff"/><path d="M20.5 35.5l2 2 4-4.5" fill="none" stroke="url(#G)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>'
    + '<rect x="18" y="44" width="9" height="9" rx="3" fill="none" stroke="#fff" stroke-width="2"/>'
    + '<path d="M31 22.5h15M31 35.5h15M31 48.5h10" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".85"/>' },

  'gantt': { c1: '#0EA5B7', c2: '#0B7DB5', svg:
    '<path d="M14 12v40h38" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".7"/>'
    + '<rect x="18" y="17" width="16" height="7" rx="3.5" fill="#fff"/>'
    + '<rect x="26" y="28" width="20" height="7" rx="3.5" fill="#fff" opacity=".85"/>'
    + '<rect x="36" y="39" width="14" height="7" rx="3.5" fill="#fff" opacity=".7"/>'
    + '<circle cx="34" cy="20.5" r="2.2" fill="url(#G)"/><circle cx="46" cy="31.5" r="2.2" fill="url(#G)"/>' },

  'calendar': { c1: '#0B7DB5', c2: '#12C7C7', svg:
    '<rect x="11" y="14" width="42" height="40" rx="7" fill="#fff" opacity=".32"/>'
    + '<rect x="11" y="14" width="42" height="11" rx="7" fill="#fff"/>'
    + '<path d="M22 10v8M42 10v8" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>'
    + '<rect x="18" y="31" width="8" height="7" rx="2" fill="#fff" opacity=".6"/><rect x="28" y="31" width="8" height="7" rx="2" fill="#fff" opacity=".6"/><rect x="38" y="31" width="8" height="7" rx="2" fill="#fff" opacity=".6"/>'
    + '<rect x="18" y="41" width="8" height="7" rx="2" fill="#fff" opacity=".6"/><rect x="28" y="41" width="8" height="7" rx="2" fill="#F00678"/><rect x="38" y="41" width="8" height="7" rx="2" fill="#fff" opacity=".6"/>' },

  'roles': { c1: '#0B7DB5', c2: '#5B2D9E', svg:
    '<circle cx="32" cy="18" r="6" fill="#fff"/><path d="M23 32c1.3-5.5 5-8 9-8s7.7 2.5 9 8z" fill="#fff"/>'
    + '<path d="M32 32v6M32 38H18v6M32 38h14v6" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" opacity=".7"/>'
    + '<circle cx="18" cy="48" r="4.5" fill="#fff" opacity=".85"/><circle cx="32" cy="48" r="4.5" fill="#fff" opacity=".85"/><circle cx="46" cy="48" r="4.5" fill="#fff" opacity=".85"/>' },

  'handbook': { c1: '#0B7DB5', c2: '#061E4F', svg:
    '<path d="M32 18c-6-5-13-6-20-4v32c7-2 14-1 20 4z" fill="#fff"/>'
    + '<path d="M32 18c6-5 13-6 20-4v32c-7-2-14-1-20 4z" fill="#fff" opacity=".7"/>'
    + '<path d="M17 22c4-1 8-1 11 1M17 29c4-1 8-1 11 1M36 23c4-2 8-2 11-1M36 30c4-2 8-2 11-1" stroke="url(#G)" stroke-width="2" stroke-linecap="round" opacity=".6"/>'
    + '<path d="M32 18v32" stroke="url(#G)" stroke-width="2" opacity=".5"/>' },

  'employment': { c1: '#0B7DB5', c2: '#7BCB52', svg:
    '<rect x="10" y="24" width="44" height="28" rx="7" fill="#fff"/>'
    + '<path d="M24 24v-5a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v5" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>'
    + '<path d="M10 36h44" stroke="url(#G)" stroke-width="2.5" opacity=".45"/>'
    + '<circle cx="32" cy="38" r="5" fill="url(#G)"/><path d="M24 50c1-4 4.5-6 8-6s7 2 8 6z" fill="url(#G)" opacity=".8"/>' },

  'my-conversations': { c1: '#0B7DB5', c2: '#F00678', svg:
    '<path d="M12 22a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8v12a8 8 0 0 1-8 8H30l-10 8v-8h0a8 8 0 0 1-8-8z" fill="#fff"/>'
    + '<rect x="28" y="19" width="8" height="14" rx="4" fill="url(#G)"/>'
    + '<path d="M24 28a8 8 0 0 0 16 0M32 36v3" fill="none" stroke="url(#G)" stroke-width="2.5" stroke-linecap="round"/>' },

  'bnot-sherut': { c1: '#12C7C7', c2: '#0B7DB5', svg:
    '<circle cx="24" cy="20" r="6" fill="#fff"/><path d="M12 38c1.4-7 6-10 12-10s10.6 3 12 10z" fill="#fff"/>'
    + '<circle cx="42" cy="22" r="5" fill="#fff" opacity=".75"/><path d="M33 38c1.2-5.5 4.8-8 9-8s7.8 2.5 9 8z" fill="#fff" opacity=".75"/>'
    + '<path d="M18 46h28M22 52h20" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/>'
    + '<path d="M44 12l1.4 2.9 3.2.5-2.3 2.2.6 3.2-2.9-1.5-2.9 1.5.6-3.2-2.3-2.2 3.2-.5z" fill="#F4B41B"/>' },

  'resources': { c1: '#0B7DB5', c2: '#F4B41B', svg:
    '<circle cx="20" cy="26" r="6" fill="#fff"/><circle cx="44" cy="26" r="6" fill="#fff"/><circle cx="32" cy="42" r="6" fill="#fff"/>'
    + '<path d="M20 26h24M20 26l12 16M44 26L32 42" stroke="#fff" stroke-width="2.5" opacity=".6"/>'
    + '<circle cx="32" cy="24" r="4" fill="url(#G)"/><path d="M32 20v-6M28 16l4-3 4 3" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>' },

  'broadcast': { c1: '#25D366', c2: '#0B7DB5', svg:
    '<path d="M14 26v12h8l14 10V16L22 26z" fill="#fff"/>'
    + '<path d="M42 24a10 10 0 0 1 0 16" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".85"/>'
    + '<path d="M47 18a17 17 0 0 1 0 28" fill="none" stroke="#fff" stroke-width="3.5" stroke-linecap="round" opacity=".55"/>' },

  'transportation': { c1: '#0B7DB5', c2: '#F4B41B', svg:
    '<rect x="10" y="14" width="44" height="34" rx="9" fill="#fff"/>'
    + '<rect x="15" y="20" width="14" height="12" rx="3" fill="url(#G)" opacity=".7"/><rect x="35" y="20" width="14" height="12" rx="3" fill="url(#G)" opacity=".7"/>'
    + '<circle cx="20" cy="49" r="5" fill="#061E4F"/><circle cx="44" cy="49" r="5" fill="#061E4F"/>'
    + '<circle cx="18" cy="39" r="2.5" fill="url(#G)"/><circle cx="46" cy="39" r="2.5" fill="url(#G)"/>' },

  /* תכנון */
  'exam-prep-form': { c1: '#C98600', c2: '#0EA5B7', svg:
    '<rect x="14" y="10" width="36" height="44" rx="6" fill="#fff" opacity=".35"/>'
    + '<rect x="14" y="10" width="36" height="44" rx="6" fill="none" stroke="#fff" stroke-width="2.5" opacity=".7"/>'
    + '<rect x="24" y="7" width="16" height="7" rx="3.5" fill="#fff"/>'
    + '<path d="M21 24h22M21 32h22M21 40h14" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'
    + '<circle cx="42" cy="46" r="7" fill="#7BCB52"/><path d="M39 46l2.2 2.2 4-4.4" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>' },

  'curriculum': { c1: '#C98600', c2: '#0B7DB5', svg:
    '<rect x="11" y="13" width="42" height="40" rx="7" fill="#fff" opacity=".3"/>'
    + '<rect x="11" y="13" width="42" height="10" rx="7" fill="#fff"/>'
    + '<rect x="16" y="28" width="12" height="7" rx="3" fill="#fff"/><rect x="31" y="28" width="17" height="7" rx="3" fill="#fff" opacity=".7"/>'
    + '<rect x="16" y="39" width="20" height="7" rx="3" fill="#fff" opacity=".7"/><rect x="39" y="39" width="9" height="7" rx="3" fill="#F00678"/>'
    + '<circle cx="21" cy="18" r="2" fill="url(#G)"/><circle cx="28" cy="18" r="2" fill="url(#G)" opacity=".7"/>' },

  'positions': { c1: '#C98600', c2: '#061E4F', svg:
    '<circle cx="22" cy="20" r="6" fill="#fff"/><path d="M10 38c1.4-7 6-10 12-10s10.6 3 12 10z" fill="#fff"/>'
    + '<circle cx="42" cy="20" r="6" fill="none" stroke="#fff" stroke-width="2.5" stroke-dasharray="3 3"/><path d="M30 38c1.4-7 6-10 12-10s10.6 3 12 10z" fill="none" stroke="#fff" stroke-width="2.5" stroke-dasharray="3 3"/>'
    + '<rect x="16" y="44" width="32" height="8" rx="4" fill="#fff" opacity=".85"/><rect x="16" y="44" width="20" height="8" rx="4" fill="url(#G)" opacity=".7"/>' },

  'strategy': { c1: '#C98600', c2: '#F00678', svg:
    '<path d="M14 50L26 30l10 8 14-22" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" opacity=".85"/>'
    + '<path d="M50 16h-9M50 16v9" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'
    + '<circle cx="14" cy="50" r="4" fill="#fff"/><circle cx="26" cy="30" r="4" fill="#fff"/><circle cx="36" cy="38" r="4" fill="#fff"/>' },

  'planning-hub': { c1: '#C98600', c2: '#7BCB52', svg:
    '<circle cx="32" cy="32" r="8" fill="#fff"/>'
    + '<circle cx="32" cy="12" r="5" fill="#fff" opacity=".85"/><circle cx="51" cy="24" r="5" fill="#fff" opacity=".85"/><circle cx="46" cy="47" r="5" fill="#fff" opacity=".85"/><circle cx="18" cy="47" r="5" fill="#fff" opacity=".85"/><circle cx="13" cy="24" r="5" fill="#fff" opacity=".85"/>'
    + '<path d="M32 17v7M46 27l-7 3M43 43l-6-6M21 43l6-6M18 27l7 3" stroke="#fff" stroke-width="2.5" stroke-linecap="round" opacity=".6"/>'
    + '<path d="M28.5 32l2.5 2.5 4.5-5" fill="none" stroke="url(#G)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>' },

  'planning-form': { c1: '#C98600', c2: '#FF7A1A', svg:
    '<rect x="14" y="10" width="30" height="42" rx="6" fill="#fff" opacity=".9"/>'
    + '<path d="M21 22h16M21 30h16M21 38h10" stroke="url(#G)" stroke-width="3" stroke-linecap="round" opacity=".7"/>'
    + '<rect x="24" y="7" width="10" height="6" rx="3" fill="url(#G)"/>'
    + '<path d="M50 20l-14 14-2 6 6-2 14-14z" fill="#fff"/><path d="M47 23l4 4" stroke="url(#G)" stroke-width="2" stroke-linecap="round"/>' },

  /* שיווק וגיוס */
  'landing-recruitment': { c1: '#F47C26', c2: '#F00678', svg:
    '<rect x="10" y="12" width="44" height="40" rx="7" fill="#fff" opacity=".3"/>'
    + '<rect x="10" y="12" width="44" height="9" rx="7" fill="#fff"/><circle cx="16" cy="16.5" r="1.8" fill="url(#G)"/><circle cx="22" cy="16.5" r="1.8" fill="url(#G)" opacity=".7"/>'
    + '<rect x="16" y="26" width="32" height="6" rx="3" fill="#fff"/><rect x="20" y="35" width="24" height="4" rx="2" fill="#fff" opacity=".7"/>'
    + '<rect x="23" y="43" width="18" height="6" rx="3" fill="#fff"/>' },

  'job-card-builder': { c1: '#F47C26', c2: '#F4B41B', svg:
    '<rect x="10" y="16" width="44" height="32" rx="7" fill="#fff"/>'
    + '<circle cx="22" cy="28" r="5" fill="url(#G)"/><path d="M14 40c1-4 4.5-6 8-6s7 2 8 6z" fill="url(#G)" opacity=".8"/>'
    + '<path d="M36 25h12M36 32h12M36 39h8" stroke="url(#G)" stroke-width="2.6" stroke-linecap="round" opacity=".7"/>'
    + '<path d="M50 10l1.4 2.9 3.2.5-2.3 2.2.6 3.2-2.9-1.5-2.9 1.5.6-3.2-2.3-2.2 3.2-.5z" fill="#fff"/>' },

  /* מחוללים */
  'cert-generator': { c1: '#7B4EC8', c2: '#F4B41B', svg:
    '<rect x="10" y="12" width="44" height="34" rx="6" fill="#fff"/>'
    + '<path d="M18 22h28M20 29h24M24 36h16" stroke="url(#G)" stroke-width="2.4" stroke-linecap="round" opacity=".55"/>'
    + '<circle cx="44" cy="44" r="8" fill="#F4B41B"/><path d="M40 50l-2 8 6-3 6 3-2-8" fill="#F4B41B"/>'
    + '<path d="M44 40.5l1.1 2.3 2.5.4-1.8 1.7.4 2.5-2.2-1.2-2.2 1.2.4-2.5-1.8-1.7 2.5-.4z" fill="#fff"/>' },

  'zoom-bg': { c1: '#7B4EC8', c2: '#0B7DB5', svg:
    '<rect x="8" y="14" width="48" height="32" rx="7" fill="#fff" opacity=".35"/>'
    + '<rect x="8" y="14" width="48" height="32" rx="7" fill="none" stroke="#fff" stroke-width="2.5" opacity=".7"/>'
    + '<path d="M8 40c8-8 14-8 20-2s12 6 28-4v5a7 7 0 0 1-7 7H15a7 7 0 0 1-7-7z" fill="#fff" opacity=".8"/>'
    + '<circle cx="32" cy="27" r="6" fill="#fff"/><path d="M22 40c1.5-5 5.5-7.5 10-7.5s8.5 2.5 10 7.5z" fill="#fff"/>'
    + '<path d="M26 52h12" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".7"/>' },

  'greeting-cards': { c1: '#F00678', c2: '#7B4EC8', svg:
    '<rect x="12" y="14" width="40" height="36" rx="6" fill="#fff" transform="rotate(-6 32 32)"/>'
    + '<path d="M32 44c-7-4.6-14-9.8-14-17a7 7 0 0 1 14-2 7 7 0 0 1 14 2c0 7.2-7 12.4-14 17z" fill="url(#G)" transform="rotate(-6 32 32)"/>'
    + '<path d="M50 12l1.2 2.5 2.8.4-2 2 .5 2.7-2.5-1.3-2.5 1.3.5-2.7-2-2 2.8-.4z" fill="#F4B41B"/>' },

  'sticker-maker': { c1: '#7B4EC8', c2: '#12C7C7', svg:
    '<path d="M14 20a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6v18L36 52H20a6 6 0 0 1-6-6z" fill="#fff"/>'
    + '<path d="M50 38H42a6 6 0 0 0-6 6v8z" fill="#fff" opacity=".6"/>'
    + '<circle cx="26" cy="27" r="3" fill="url(#G)"/><circle cx="38" cy="27" r="3" fill="url(#G)"/>'
    + '<path d="M24 36c3 4 13 4 16 0" fill="none" stroke="url(#G)" stroke-width="3" stroke-linecap="round"/>' },

  /* ערכות */
  'hub-teachers': { c1: '#061E4F', c2: '#12C7C7', svg:
    '<rect x="12" y="12" width="18" height="18" rx="5" fill="#fff"/><rect x="34" y="12" width="18" height="18" rx="5" fill="#fff" opacity=".7"/>'
    + '<rect x="12" y="34" width="18" height="18" rx="5" fill="#fff" opacity=".7"/><rect x="34" y="34" width="18" height="18" rx="5" fill="#fff" opacity=".45"/>'
    + '<circle cx="21" cy="19" r="3" fill="url(#G)"/><path d="M16 27c.8-3 2.8-4.5 5-4.5s4.2 1.5 5 4.5z" fill="url(#G)"/>' },

  'hub-counselors': { c1: '#061E4F', c2: '#7B4EC8', svg:
    '<rect x="12" y="12" width="18" height="18" rx="5" fill="#fff"/><rect x="34" y="12" width="18" height="18" rx="5" fill="#fff" opacity=".7"/>'
    + '<rect x="12" y="34" width="18" height="18" rx="5" fill="#fff" opacity=".7"/><rect x="34" y="34" width="18" height="18" rx="5" fill="#fff" opacity=".45"/>'
    + '<path d="M21 26c-3-2-6-4.4-6-7.5a3.2 3.2 0 0 1 6-1.2 3.2 3.2 0 0 1 6 1.2c0 3.1-3 5.5-6 7.5z" fill="#F00678"/>' },

  'hub-manu': { c1: '#061E4F', c2: '#0B7DB5', svg:
    '<rect x="12" y="12" width="18" height="18" rx="5" fill="#fff"/><rect x="34" y="12" width="18" height="18" rx="5" fill="#fff" opacity=".7"/>'
    + '<rect x="12" y="34" width="18" height="18" rx="5" fill="#fff" opacity=".7"/><rect x="34" y="34" width="18" height="18" rx="5" fill="#fff" opacity=".45"/>'
    + '<rect x="16" y="16" width="4" height="4" fill="url(#G)"/><rect x="22" y="16" width="4" height="4" fill="url(#G)"/><rect x="16" y="22" width="4" height="4" fill="url(#G)"/><rect x="23" y="23" width="3" height="3" fill="url(#G)"/>' },

  'role-dashboard': { c1: '#061E4F', c2: '#F00678', svg:
    '<rect x="10" y="12" width="44" height="40" rx="8" fill="#fff" opacity=".3"/>'
    + '<circle cx="24" cy="26" r="6" fill="#fff"/><path d="M14 40c1.4-6 5.5-8.5 10-8.5s8.6 2.5 10 8.5z" fill="#fff"/>'
    + '<rect x="38" y="20" width="10" height="5" rx="2.5" fill="#fff" opacity=".85"/><rect x="38" y="28" width="10" height="5" rx="2.5" fill="#fff" opacity=".65"/><rect x="38" y="36" width="10" height="5" rx="2.5" fill="#fff" opacity=".45"/>'
    + '<path d="M16 46h32" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".5"/>' },
  /* ── הסיפור הבית-ספרי + אסיפות הורים ── */
  'parent-meetings': { c1: '#0B7DB5', c2: '#7BCB52', svg:
    '<rect x="11" y="14" width="42" height="40" rx="7" fill="#fff" opacity=".32"/>'
    + '<rect x="11" y="14" width="42" height="11" rx="7" fill="#fff"/>'
    + '<path d="M22 10v8M42 10v8" stroke="#fff" stroke-width="3.5" stroke-linecap="round"/>'
    + '<rect x="17" y="30" width="30" height="6" rx="3" fill="#fff" opacity=".55"/><rect x="17" y="39" width="30" height="6" rx="3" fill="#fff"/><rect x="17" y="48" width="30" height="4" rx="2" fill="#fff" opacity=".4"/>'
    + '<circle cx="21" cy="42" r="2.2" fill="url(#G)"/><path d="M40 42l2.5 2.5 5-5" fill="none" stroke="url(#G)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>' },

  'brand-kit': { c1: '#F47C26', c2: '#F00678', svg:
    '<circle cx="24" cy="24" r="10" fill="#fff"/><circle cx="40" cy="24" r="10" fill="#fff" opacity=".7"/><circle cx="32" cy="38" r="10" fill="#fff" opacity=".55"/>'
    + '<path d="M18 50h28" stroke="#fff" stroke-width="4" stroke-linecap="round"/><path d="M22 56h20" stroke="#fff" stroke-width="3" stroke-linecap="round" opacity=".6"/>'
    + '<circle cx="24" cy="24" r="3.5" fill="url(#G)"/><circle cx="40" cy="24" r="3.5" fill="url(#G)" opacity=".8"/><circle cx="32" cy="38" r="3.5" fill="url(#G)" opacity=".7"/>' },

  'competitors': { c1: '#F47C26', c2: '#061E4F', svg:
    '<circle cx="28" cy="28" r="14" fill="none" stroke="#fff" stroke-width="4"/>'
    + '<path d="M38 38l12 12" stroke="#fff" stroke-width="5" stroke-linecap="round"/>'
    + '<rect x="21" y="29" width="4" height="7" rx="1.5" fill="#fff"/><rect x="26.5" y="24" width="4" height="12" rx="1.5" fill="#fff"/><rect x="32" y="20" width="4" height="16" rx="1.5" fill="#F4B41B"/>' },

  'swot': { c1: '#F47C26', c2: '#7BCB52', svg:
    '<rect x="12" y="12" width="18" height="18" rx="5" fill="#fff"/><rect x="34" y="12" width="18" height="18" rx="5" fill="#fff" opacity=".8"/>'
    + '<rect x="12" y="34" width="18" height="18" rx="5" fill="#fff" opacity=".65"/><rect x="34" y="34" width="18" height="18" rx="5" fill="#fff" opacity=".5"/>'
    + '<path d="M17 21l3 3 5-6" fill="none" stroke="url(#G)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>'
    + '<path d="M40 24l6-6M40 18l6 6" stroke="url(#G)" stroke-width="2.4" stroke-linecap="round" opacity=".7"/>'
    + '<path d="M21 47v-8M17 43l4-4 4 4" fill="none" stroke="url(#G)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity=".7"/>'
    + '<path d="M43 39v6M43 48v.5" stroke="url(#G)" stroke-width="2.6" stroke-linecap="round" opacity=".7"/>' },

  'parent-testimonials': { c1: '#F47C26', c2: '#F4B41B', svg:
    '<path d="M12 22a8 8 0 0 1 8-8h24a8 8 0 0 1 8 8v12a8 8 0 0 1-8 8H30l-10 8v-8h0a8 8 0 0 1-8-8z" fill="#fff"/>'
    + '<path d="M22 24c0-3 2-5 5-5v3c-1.5 0-2 .8-2 2h2v6h-5zM33 24c0-3 2-5 5-5v3c-1.5 0-2 .8-2 2h2v6h-5z" fill="url(#G)"/>'
    + '<path d="M50 44l1.4 2.9 3.2.5-2.3 2.2.6 3.2-2.9-1.5-2.9 1.5.6-3.2-2.3-2.2 3.2-.5z" fill="#fff"/><path d="M42 50l1 2 2.2.3-1.6 1.6.4 2.2-2-1-2 1 .4-2.2-1.6-1.6 2.2-.3z" fill="#fff" opacity=".7"/>' },
  /* ── שליחה מרוכזת לקבוצות ── */
  'group-broadcast': { c1: '#25D366', c2: '#061E4F', svg:
    '<path d="M8 22a6 6 0 0 1 6-6h14a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6h-6l-6 5v-5h-2a6 6 0 0 1-6-6z" fill="#fff" opacity=".5"/>'
    + '<path d="M22 32a6 6 0 0 1 6-6h14a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6h-6l-6 5v-5h-2a6 6 0 0 1-6-6z" fill="#fff" opacity=".75"/>'
    + '<path d="M14 42a6 6 0 0 1 6-6h14a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6h-6l-6 5v-5h-2a6 6 0 0 1-6-6z" fill="#fff" opacity=".35"/>'
    + '<path d="M40 10l10 4v10l-10 4z" fill="#fff"/><path d="M34 15v8h6v-8z" fill="#fff"/><path d="M52 12a8 8 0 0 1 0 14" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" opacity=".8"/>'
    + '<path d="M17 21h10M17 25h6" stroke="url(#G)" stroke-width="2.2" stroke-linecap="round" opacity=".6"/>' }
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
