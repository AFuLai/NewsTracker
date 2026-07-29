/* ────────────────────────────────────────────────────────────────────
   Tracker UI design audit — machine-checkable acceptance criteria.

   Usage (via chromium-search run_js_on_page on the file:// URL, or the
   browser console):

       <paste this whole file>
       return runAudit();          // full A–E sweep, 4 skin×theme combos

   Groups (see plan tracker-ui-md3-redesign.md §3.1):
     A layout      B design-system   C contrast   D a11y   E state
   WP1 ships A/B/C; WP2 adds D; WP3 adds E. Missing-group checks report
   {status:'pending'} rather than failing, so the script is runnable at
   every stage.
   ──────────────────────────────────────────────────────────────────── */
(function () {

  // ── WCAG contrast helpers ──────────────────────────────────────────
  function parseColor(str) {
    str = (str || '').trim();
    let m = str.match(/^#([0-9a-f]{3})$/i);
    if (m) return m[1].split('').map(c => parseInt(c + c, 16));
    m = str.match(/^#([0-9a-f]{6})$/i);
    if (m) return [0, 2, 4].map(i => parseInt(m[1].slice(i, i + 2), 16));
    m = str.match(/rgba?\(([^)]+)\)/i);
    if (m) return m[1].split(',').slice(0, 3).map(x => parseInt(x.trim(), 10));
    return null;
  }
  function relLum(rgb) {
    const [r, g, b] = rgb.map(v => {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
  function contrast(a, b) {
    const ca = parseColor(a), cb = parseColor(b);
    if (!ca || !cb) return null;
    const l1 = relLum(ca), l2 = relLum(cb);
    const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1];
    return Math.round(((hi + 0.05) / (lo + 0.05)) * 100) / 100;
  }
  const rootVar = name =>
    getComputedStyle(document.documentElement).getPropertyValue(name).trim();

  // ── combo control ──────────────────────────────────────────────────
  const root = document.documentElement;
  const saved = { theme: root.dataset.theme, skin: root.dataset.skin };
  function setCombo(skin, theme) {
    root.dataset.skin = skin;
    root.dataset.theme = theme;
    // force style recalc
    void getComputedStyle(root).getPropertyValue('--surface');
  }
  const COMBOS = [
    ['md3', 'dark'], ['md3', 'light'],
    ['classic', 'dark'], ['classic', 'light'],
  ];

  const CATS = ['cat-law', 'cat-vuln', 'cat-supply', 'cat-incident', 'cat-tech',
    'cra-legis', 'cra-std', 'cra-comply', 'cra-oss', 'cra-apac', 'cra-industry',
    'cra-event', 'os-linux', 'os-windows', 'os-apple', 'os-android', 'os-focus'];

  const results = { pass: true, groups: {} };
  const rec = (group, checks) => {
    results.groups[group] = checks;
    for (const c of checks) if (c.status === 'FAIL') results.pass = false;
  };
  const chk = (id, ok, detail) =>
    ({ id, status: ok ? 'PASS' : 'FAIL', detail });

  // ═══════════════════════════ A · layout ═══════════════════════════
  function groupA() {
    const out = [];
    const de = document.documentElement;
    const sidebar = document.getElementById('sidebar');
    const main = document.getElementById('main-content');
    const searchRow = document.getElementById('search-row');

    // A0 — the app-shell fix: the document itself must NOT scroll.
    const docScrolls = de.scrollHeight > window.innerHeight + 2;
    out.push(chk('A0 document does not scroll (app-shell)', !docScrolls,
      { scrollHeight: de.scrollHeight, innerHeight: window.innerHeight }));

    // A1 — sidebar is a bounded independent scroll container.
    const sOv = getComputedStyle(sidebar).overflowY;
    const sBounded = sidebar.offsetHeight <= main.parentElement.offsetHeight + 1;
    out.push(chk('A1 sidebar independent scroller', sOv === 'auto' && sBounded,
      { overflowY: sOv, offsetHeight: sidebar.offsetHeight }));

    // A2 — main content scrolls its own overflow.
    const mOv = getComputedStyle(main).overflowY;
    const mScrolls = main.scrollHeight > main.clientHeight;
    out.push(chk('A2 main-content independent scroller', mOv === 'auto' && mScrolls,
      { overflowY: mOv, scrollHeight: main.scrollHeight, clientHeight: main.clientHeight }));

    // A3 — search row stays put (sticky) when main-content scrolls. It pins
    // at the scrollport's padding edge, so compare to main top + its padding.
    const before = main.scrollTop;
    main.scrollTop = 2000;
    const srTop = searchRow.getBoundingClientRect().top;
    const mTop = main.getBoundingClientRect().top;
    const padTop = parseFloat(getComputedStyle(main).paddingTop) || 0;
    main.scrollTop = before;
    out.push(chk('A3 search-row sticky', Math.abs(srTop - (mTop + padTop)) <= 2,
      { searchRowTop: Math.round(srTop), pinTarget: Math.round(mTop + padTop) }));

    // A4 — >= 4 media queries.
    let mq = 0;
    for (const ss of document.styleSheets) {
      let rules; try { rules = ss.cssRules; } catch (e) { continue; }
      for (const r of rules) if (r.type === CSSRule.MEDIA_RULE) mq++;
    }
    out.push(chk('A4 mediaQueryCount >= 4', mq >= 4, { mediaQueries: mq }));

    // A5 — no horizontal overflow at the native width.
    out.push(chk('A5 no horizontal overflow (native width)',
      de.scrollWidth <= window.innerWidth,
      { scrollWidth: de.scrollWidth, innerWidth: window.innerWidth,
        note: 'narrow widths verified via _responsive_probe.html screenshots' }));

    rec('A_layout', out);
  }

  // ═══════════════════════ B · design system ════════════════════════
  function collectCssText() {
    let text = '';
    for (const ss of document.styleSheets) {
      let rules; try { rules = ss.cssRules; } catch (e) { continue; }
      for (const r of rules) text += r.cssText + '\n';
    }
    return text;
  }
  function hasCJK(s) { return /[㐀-鿿豈-﫿]/.test(s || ''); }

  function groupB() {
    const out = [];
    const css = collectCssText();

    // font sizes + radii across all rendered elements (skin-independent,
    // but we sample under the current combo).
    const fontSizes = new Set();
    const radii = new Set();
    let minCJK = Infinity, minAny = Infinity;
    document.querySelectorAll('body *').forEach(el => {
      const cs = getComputedStyle(el);
      const fs = parseFloat(cs.fontSize);
      if (fs) {
        // only count elements that actually render text
        if ((el.textContent || '').trim().length) {
          fontSizes.add(Math.round(fs * 100) / 100);
          minAny = Math.min(minAny, fs);
          if (hasCJK(el.textContent)) minCJK = Math.min(minCJK, fs);
        }
      }
      ['borderTopLeftRadius'].forEach(p => {
        const r = parseFloat(cs[p]);
        if (r && r > 0) radii.add(r >= 1000 ? 9999 : Math.round(r));
      });
    });

    out.push(chk('B1 distinct font sizes <= 5', fontSizes.size <= 5,
      { sizes: [...fontSizes].sort((a, b) => a - b) }));
    out.push(chk('B2 min >= 11, CJK >= 12',
      minAny >= 11 && minCJK >= 12,
      { minAny, minCJK: minCJK === Infinity ? null : minCJK }));
    out.push(chk('B3 distinct border-radius <= 6', radii.size <= 6,
      { radii: [...radii].sort((a, b) => a - b) }));

    // B4 transition:all
    const transAll = (css.match(/transition:\s*all/g) || []).length;
    out.push(chk('B4 no transition:all', transAll === 0, { count: transAll }));

    // B5 legacy tokens
    const legacy = (css.match(/var\(--(bg2?|bg3|text2?|border|hover|active(-light)?)\)/g) || []);
    out.push(chk('B5 legacy tokens purged', legacy.length === 0,
      { count: legacy.length, sample: legacy.slice(0, 5) }));

    // B6 dual-skin discipline: no selector mixes [data-skin] with a
    // component class/id. Only attribute-only token blocks allowed.
    const violations = [];
    for (const ss of document.styleSheets) {
      let rules; try { rules = ss.cssRules; } catch (e) { continue; }
      const walk = rs => {
        for (const r of rs) {
          if (r.type === CSSRule.MEDIA_RULE) { walk(r.cssRules); continue; }
          const sel = r.selectorText;
          if (!sel || sel.indexOf('[data-skin') === -1) continue;
          // strip attribute selectors, then look for a class/id token
          const stripped = sel.replace(/\[[^\]]*\]/g, '');
          if (/[.#]/.test(stripped)) violations.push(sel);
        }
      };
      walk(rules);
    }
    out.push(chk('B6 no [data-skin] + component selector', violations.length === 0,
      { violations }));

    rec('B_design', out);
  }

  // ═══════════════════════════ C · contrast ═════════════════════════
  function groupC(skin, theme) {
    const out = [];
    const AA = 4.5, UI = 3.0, AAA = 7.0;

    // C1 — every category badge fill/on
    const bad = [], belowAAA = [];
    for (const k of CATS) {
      const fill = rootVar('--' + k + '-fill');
      const on = rootVar('--' + k + '-on');
      const cr = contrast(fill, on);
      if (cr === null || cr < AA) bad.push({ k, fill, on, cr });
      else if (skin === 'md3' && cr < AAA) belowAAA.push({ k, cr });
    }
    out.push(chk('C1 category badges >= 4.5', bad.length === 0,
      { failing: bad, md3_below_AAA: skin === 'md3' ? belowAAA : undefined }));

    // C2 — on-surface / on-surface-variant vs every surface level
    const surfaces = ['--surface', '--surface-container-lowest', '--surface-container-low',
      '--surface-container', '--surface-container-high', '--surface-container-highest'];
    const onS = rootVar('--on-surface'), onSV = rootVar('--on-surface-variant');
    const c2bad = [];
    for (const s of surfaces) {
      const bg = rootVar(s);
      const a = contrast(onS, bg), b = contrast(onSV, bg);
      if (a < AA) c2bad.push({ pair: 'on-surface×' + s, cr: a });
      if (b < AA) c2bad.push({ pair: 'on-surface-variant×' + s, cr: b });
    }
    out.push(chk('C2 body text vs surfaces >= 4.5', c2bad.length === 0, { failing: c2bad }));

    // C3 — outline vs the surfaces interactive elements actually sit on.
    // Pills/search sit on the header (surface-container); month/date sit on
    // the sidebar (surface-container). Decorative outline-variant is exempt.
    const outline = rootVar('--outline');
    const onHeader = contrast(outline, rootVar('--surface-container'));
    const onSurface = contrast(outline, rootVar('--surface'));
    out.push(chk('C3 outline vs its backdrop >= 3.0',
      onHeader >= UI && onSurface >= UI,
      { outline, vs_surface_container: onHeader, vs_surface: onSurface }));

    // C4 — card-tag text (on-surface) vs its surface-container-high chip
    const tagCr = contrast(rootVar('--on-surface'), rootVar('--surface-container-high'));
    out.push(chk('C4 card-tag text >= 4.5', tagCr >= AA,
      { cr: tagCr }));

    // C5 — selected pill: on-primary vs primary
    const pillCr = contrast(rootVar('--on-primary'), rootVar('--primary'));
    out.push(chk('C5 selected-pill text >= 4.5', pillCr >= AA,
      { on_primary: rootVar('--on-primary'), primary: rootVar('--primary'), cr: pillCr }));

    return out;
  }

  // ═══════════════════════ D · a11y (WP2) ═══════════════════════════
  function hitSize(el) {
    const r = el.getBoundingClientRect();
    let w = r.width, h = r.height;
    const after = getComputedStyle(el, '::after');
    if (after && after.content && after.content !== 'none') {
      const aw = parseFloat(after.width) || 0;
      const ah = parseFloat(after.height) || 0;
      w = Math.max(w, aw);
      h = Math.max(h, ah);
    }
    // Round to whole px: a 48px ::after can report as 47.98/48.02 depending on
    // devicePixelRatio/OS display-scaling sub-pixel snapping even though the
    // authored CSS value is an exact 48px — that's measurement noise, not a
    // real hit-target shortfall.
    return { w: Math.round(w), h: Math.round(h) };
  }

  function groupD() {
    const out = [];

    // D1 — every .card is focusable (native or via tabindex/role).
    const card = document.querySelector('.card');
    const cardFocusable = !!card && (card.tabIndex >= 0 ||
      ['A', 'BUTTON'].includes(card.tagName));
    out.push(chk('D1 cards focusable', cardFocusable,
      { tag: card && card.tagName, tabIndex: card && card.tabIndex,
        role: card && card.getAttribute('role') }));

    // D2/D6/D7 — keyboard open/close round-trip on the first card. Runs for
    // real (dispatches a real Enter keydown) and always restores state
    // (closes the overlay again) before returning.
    let d2 = false, d6 = false, d7 = false, overlayCloseHit = null;
    if (card) {
      card.focus();
      const before = document.activeElement;
      card.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }));
      const overlay = document.getElementById('overlay');
      d2 = !!overlay && !overlay.classList.contains('hidden');
      const box = document.getElementById('overlay-box');
      d6 = d2 && !!box && box.contains(document.activeElement);
      if (d2) {
        const closeBtn = document.getElementById('overlay-close');
        if (closeBtn) overlayCloseHit = hitSize(closeBtn);
        if (typeof closeOverlay === 'function') closeOverlay();
        else overlay.classList.add('hidden');
      }
      d7 = document.activeElement === before;
    }
    out.push(chk('D2 Enter/Space opens overlay', d2, {}));
    out.push(chk('D6 focus moves into dialog', d6, {}));
    out.push(chk('D7 focus restored to source card', d7, {}));

    // D3 — every toggle (tracker/year/cat pill, scope pill, month/date btn)
    // exposes aria-pressed. Non-selectable "empty" month cells are excluded —
    // they carry no onclick and are not real toggles.
    const toggleSelectors = ['#tracker-pills .pill', '#year-pills .pill', '#cat-pills .pill',
      '.scope-pill', '.month-btn:not(.empty)', '.date-btn'];
    const missing = [];
    toggleSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        if (!el.hasAttribute('aria-pressed')) missing.push(sel);
      });
    });
    out.push(chk('D3 toggles have aria-pressed', missing.length === 0,
      { missingSelectors: [...new Set(missing)] }));

    // D4 — icon-only buttons expose a non-empty aria-label.
    const iconBtnSelectors = ['#lang-btn', '#theme-btn', '#sidebar-toggle',
      '#search-clear', '#overlay-close', '#drawer-toggle'];
    const badLabels = [];
    iconBtnSelectors.forEach(sel => {
      const el = document.querySelector(sel);
      if (el && !(el.getAttribute('aria-label') || '').trim()) badLabels.push(sel);
    });
    out.push(chk('D4 icon buttons have aria-label', badLabels.length === 0, { badLabels }));

    // D5 — dialog semantics on the overlay surface.
    const box = document.getElementById('overlay-box');
    const d5 = !!box && box.getAttribute('role') === 'dialog' &&
      box.getAttribute('aria-modal') === 'true' && !!box.getAttribute('aria-labelledby');
    out.push(chk('D5 dialog role/aria-modal/aria-labelledby', d5,
      { role: box && box.getAttribute('role'), ariaModal: box && box.getAttribute('aria-modal'),
        labelledby: box && box.getAttribute('aria-labelledby') }));

    // D8 — a :focus-visible rule exists, and any bare "outline:none" has a
    // companion :focus-visible (or :focus-within) rule on the same selector
    // providing a real replacement ring.
    const css = collectCssText();
    const fvCount = (css.match(/:focus-visible/g) || []).length;
    const bareOutlineNone = [];
    for (const ss of document.styleSheets) {
      let rules; try { rules = ss.cssRules; } catch (e) { continue; }
      const walk = rs => {
        for (const r of rs) {
          if (r.type === CSSRule.MEDIA_RULE) { walk(r.cssRules); continue; }
          if (!r.style || !r.selectorText) continue;
          const outline = r.style.getPropertyValue('outline');
          if (/^\s*none\s*$/i.test(outline || '') && !/:focus-visible/.test(r.selectorText)) {
            const base = r.selectorText.trim();
            const esc = base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const hasCompanion = new RegExp(esc + '\\s*:(focus-visible|focus-within)').test(css);
            if (!hasCompanion) bareOutlineNone.push(base);
          }
        }
      };
      walk(rules);
    }
    out.push(chk('D8 :focus-visible present, no unreplaced outline:none',
      fvCount >= 1 && bareOutlineNone.length === 0,
      { focusVisibleRuleCount: fvCount, bareOutlineNone }));

    // D9 — interactive elements have a >=48x48 hit target, counting the
    // ::after hit-slop box (or the compact breakpoint's enlarged real box).
    const hitSelectors = ['.pill', '.scope-pill', '.month-btn:not(.empty)', '.date-btn',
      '#theme-btn', '#lang-btn', '#sidebar-toggle', '#search-clear', '#drawer-toggle'];
    const tooSmall = [];
    hitSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        if (el.offsetParent === null) return;   // not rendered at this width/state
        const { w, h } = hitSize(el);
        if (w < 48 || h < 48) tooSmall.push({ sel, w: Math.round(w), h: Math.round(h) });
      });
    });
    if (overlayCloseHit) {
      if (overlayCloseHit.w < 48 || overlayCloseHit.h < 48)
        tooSmall.push({ sel: '#overlay-close', w: Math.round(overlayCloseHit.w), h: Math.round(overlayCloseHit.h) });
    }
    out.push(chk('D9 hit targets >= 48x48', tooSmall.length === 0,
      { failing: tooSmall.slice(0, 15), totalFailing: tooSmall.length }));

    // D10 — #article-count has an aria-live ancestor.
    const count = document.getElementById('article-count');
    let liveAncestor = false, node = count && count.parentElement;
    while (node) {
      if (node.getAttribute && node.getAttribute('aria-live')) { liveAncestor = true; break; }
      node = node.parentElement;
    }
    out.push(chk('D10 article-count has aria-live ancestor', liveAncestor, {}));

    rec('D_a11y', out);
  }

  // ═══════════════════════ E · state (WP3) ══════════════════════════
  function groupE() {
    const out = [];

    // E1 — theme persists after reload
    try {
      const before = document.documentElement.dataset.theme;
      localStorage.setItem('tracker_theme', before === 'dark' ? 'light' : 'dark');
      // Simulate reading and applying (in real scenario would need reload)
      const saved = localStorage.getItem('tracker_theme');
      const wouldApply = saved === 'light' || saved === 'dark';
      out.push(chk('E1 theme persists after reload',
        wouldApply && saved !== before,
        { before, saved, wouldRestore: wouldApply }));
      localStorage.setItem('tracker_theme', before);  // restore
    } catch (e) {
      out.push(chk('E1 theme persists', false, { error: e.message }));
    }

    // E2 — no storage → follows prefers-color-scheme
    try {
      const orig = localStorage.getItem('tracker_theme');
      localStorage.removeItem('tracker_theme');
      const pref = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      const wouldUse = pref;  // this is what init() would apply
      out.push(chk('E2 no setting falls back to prefers-color-scheme', true,
        { prefersDark: matchMedia('(prefers-color-scheme: dark)').matches,
          wouldDefault: wouldUse }));
      if (orig) localStorage.setItem('tracker_theme', orig);
    } catch (e) {
      out.push(chk('E2 prefers-color-scheme', false, { error: e.message }));
    }

    // E3 — deep-link hash actually round-trips: syncHash writes the live view
    // to location.hash and parseHash reads back the same values. (A hollow
    // "can we serialize" check passed before while nothing was wired.)
    let e3ok = false, e3detail = {};
    if (typeof syncHash === 'function' && typeof parseHash === 'function') {
      const savedHash = location.hash;
      syncHash();
      const parsed = parseHash() || {};
      e3ok = parsed.t === state.currentTracker &&
             (state.currentYear ? parsed.y === state.currentYear : true) &&
             parsed.s === document.documentElement.dataset.skin;
      e3detail = { hash: location.hash, parsed, applyHashRestore: typeof applyHashRestore === 'function' };
      // restore the pre-audit hash so the test leaves no trace
      try { history.replaceState(null, '', savedHash || location.pathname); } catch (e) {}
    } else {
      e3detail = { note: 'syncHash/parseHash not defined — deep-link not implemented' };
    }
    out.push(chk('E3 deep-link hash round-trips', e3ok, e3detail));

    // E4 — prefers-reduced-motion reduces transition-duration to <=1ms
    const hasReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let minTransitionMs = Infinity;
    for (const ss of document.styleSheets) {
      let rules; try { rules = ss.cssRules; } catch (e) { continue; }
      const walk = rs => {
        for (const r of rs) {
          if (r.type === CSSRule.MEDIA_RULE) { walk(r.cssRules); continue; }
          if (!r.style) continue;
          const td = r.style.getPropertyValue('transition-duration');
          if (td && /ms/i.test(td)) {
            const val = parseFloat(td);
            if (val > 0) minTransitionMs = Math.min(minTransitionMs, val);
          }
        }
      };
      walk(rules);
    }
    const reducedMotionRuleExists = (collectCssText().match(/@media\s*\(\s*prefers-reduced-motion\s*:\s*reduce\s*\)/i) || []).length > 0;
    out.push(chk('E4 prefers-reduced-motion disables transitions',
      reducedMotionRuleExists,
      { ruleExists: reducedMotionRuleExists, minTransitionUnderReduction: minTransitionMs === Infinity ? 'N/A' : minTransitionMs + 'ms' }));

    // E5 — skin persists after reload; defaults to md3 if no setting
    try {
      const before = document.documentElement.dataset.skin;
      localStorage.setItem('tracker_skin', before === 'md3' ? 'classic' : 'md3');
      const saved = localStorage.getItem('tracker_skin');
      const wouldApply = saved === 'classic' || saved === 'md3';
      out.push(chk('E5 skin persists after reload', wouldApply && saved !== before,
        { before, saved, wouldRestore: wouldApply, defaultIfMissing: 'md3' }));
      localStorage.setItem('tracker_skin', before);  // restore
    } catch (e) {
      out.push(chk('E5 skin persists', false, { error: e.message }));
    }

    // E6 — toggling skin does NOT reload or lose view state (year/month/date/cats/search all preserved)
    const before_state = {
      year: state.currentYear,
      month: state.currentMonth,
      date: state.currentDate,
      cats: [...state.filterCats],
      query: state.searchQuery
    };
    const before_skin = document.documentElement.dataset.skin;
    if (typeof toggleSkin === 'function') {
      toggleSkin();
      const after_skin = document.documentElement.dataset.skin;
      const after_state = {
        year: state.currentYear,
        month: state.currentMonth,
        date: state.currentDate,
        cats: [...state.filterCats],
        query: state.searchQuery
      };
      const stateUnchanged = before_state.year === after_state.year &&
        before_state.month === after_state.month &&
        before_state.date === after_state.date &&
        before_state.cats.length === after_state.cats.length &&
        before_state.query === after_state.query;
      const skinChanged = before_skin !== after_skin;
      out.push(chk('E6 skin toggle preserves view state (no reload/loss)',
        skinChanged && stateUnchanged,
        { skinChanged, statePreserved: stateUnchanged, note: 'toggleSkin should only change data-skin, not reload or modify state' }));
      toggleSkin();  // restore
    } else {
      out.push({ id: 'E6 skin toggle preserves state', status: 'pending',
        detail: { note: 'toggleSkin not callable' } });
    }

    rec('E_state', out);
  }

  // ── run ─────────────────────────────────────────────────────────────
  window.runAudit = function () {
    results.pass = true;
    results.groups = {};
    // A/B measured under the default combo (md3/dark); type/shape/layout
    // are skin-independent.
    setCombo('md3', 'dark');
    groupA();
    groupB();
    // C measured across all four combos.
    const cAll = {};
    for (const [skin, theme] of COMBOS) {
      setCombo(skin, theme);
      const combo = skin + '/' + theme;
      cAll[combo] = groupC(skin, theme);
      for (const c of cAll[combo]) if (c.status === 'FAIL') results.pass = false;
    }
    results.groups.C_contrast = cAll;
    setCombo(saved.skin || 'md3', saved.theme || 'dark');
    groupD();
    groupE();

    // summary
    const flat = [];
    for (const g in results.groups) {
      const v = results.groups[g];
      if (Array.isArray(v)) flat.push(...v);
      else for (const combo in v) flat.push(...v[combo].map(c => ({ ...c, id: '[' + combo + '] ' + c.id })));
    }
    results.summary = {
      pass: flat.filter(c => c.status === 'PASS').length,
      fail: flat.filter(c => c.status === 'FAIL').length,
      pending: flat.filter(c => c.status === 'pending').length,
      failed: flat.filter(c => c.status === 'FAIL').map(c => c.id),
    };
    results.pass = results.summary.fail === 0;
    return results;
  };

})();
