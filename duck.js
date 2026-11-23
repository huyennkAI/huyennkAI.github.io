// A mother duck and two ducklings waddling up and down each edge of the page.
// The ducklings follow the mother's trail with a delay, so they turn and stop where she did.
(function () {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  var DUCK_SVG =
    '<svg viewBox="0 0 64 64" aria-hidden="true">' +
      '<g class="duck-leg duck-leg-a"><path d="M27 49 v8 h5" /></g>' +
      '<g class="duck-leg duck-leg-b"><path d="M35 49 v8 h5" /></g>' +
      '<path class="duck-body" d="M9 34 L3 27 L13 29 C19 24 28 24 34 27 L40 28 C48 28 53 34 51 42 C49 50 39 53 28 53 C15 53 9 46 9 38 Z"/>' +
      '<circle class="duck-body" cx="44" cy="20" r="10"/>' +
      '<path class="duck-beak" d="M53 18 L62 21 L53 24 Z"/>' +
      '<circle class="duck-eye" cx="47" cy="17" r="1.8"/>' +
      '<path class="duck-wing" d="M19 36 C23 30 33 31 35 38 C31 43 23 43 19 36 Z"/>' +
    '</svg>';

  var MOTHER = 58;            // px
  var BABY = 30;              // px
  var LAGS = [1.4, 2.2];      // seconds each duckling trails behind the mother
  var TRAIL_KEEP = 3;         // seconds of trail history to keep

  function makeDuck(side, size, extraClass) {
    var el = document.createElement('div');
    el.className = 'duck duck-' + side + (extraClass ? ' ' + extraClass : '');
    el.style.width = el.style.height = size + 'px';
    el.innerHTML = '<div class="duck-waddle">' + DUCK_SVG + '</div>';
    document.body.appendChild(el);
    return el;
  }

  function makeFamily(side, startFraction, speed) {
    var babies = LAGS.map(function () { return makeDuck(side, BABY, 'duckling'); });
    var mother = makeDuck(side, MOTHER, 'duck-mother');
    return {
      side: side,
      mother: mother,
      babies: babies,
      y: 0,                       // mother's center, px from top
      startFraction: startFraction,
      dir: side === 'left' ? 1 : -1,   // 1 = down, -1 = up
      speed: speed,
      pauseUntil: 0,
      trail: []                   // [{t, y}]
    };
  }

  var families = [makeFamily('left', 0.3, 44), makeFamily('right', 0.7, 36)];

  function bounds() {
    var pad = 24 + MOTHER / 2;
    return { min: pad, max: Math.max(pad, window.innerHeight - pad) };
  }

  // Place a duck whose center is at y, walking in direction dir (1 down, -1 up).
  function place(el, side, size, y, dir, resting) {
    // Base SVG faces right. Left wall: rotate 90deg (head down). Right wall: rotate -90deg (head up).
    var rot = side === 'left' ? 90 : -90;
    var headDown = side === 'left' ? 1 : -1;
    var flip = dir === headDown ? 1 : -1;
    el.style.transform = 'translateY(' + (y - size / 2).toFixed(1) + 'px) rotate(' + rot + 'deg) scaleX(' + flip + ')';
    el.classList.toggle('is-resting', resting);
  }

  function trailAt(trail, t) {
    for (var i = trail.length - 1; i >= 0; i--) {
      if (trail[i].t <= t) return i;
    }
    return 0;
  }

  var last = performance.now();
  function tick(now) {
    var dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    var b = bounds();

    families.forEach(function (f) {
      var moving = now >= f.pauseUntil;
      if (moving) {
        f.y += f.dir * f.speed * dt;
        if (f.y >= b.max) { f.y = b.max; f.dir = -1; f.pauseUntil = now + 900 + Math.random() * 1300; }
        if (f.y <= b.min) { f.y = b.min; f.dir = 1; f.pauseUntil = now + 900 + Math.random() * 1300; }
        if (Math.random() < 0.002) f.pauseUntil = now + 700 + Math.random() * 1000;
      }
      f.trail.push({ t: now, y: f.y, dir: f.dir });
      while (f.trail.length && f.trail[0].t < now - TRAIL_KEEP * 1000) f.trail.shift();

      place(f.mother, f.side, MOTHER, f.y, f.dir, !moving);

      f.babies.forEach(function (el, i) {
        var idx = trailAt(f.trail, now - LAGS[i] * 1000);
        var p = f.trail[idx];
        var prev = f.trail[Math.max(0, idx - 3)];
        var babyMoving = Math.abs(p.y - prev.y) > 0.01;
        place(el, f.side, BABY, p.y, p.dir, !babyMoving);
      });
    });

    requestAnimationFrame(tick);
  }

  // Seed each trail so ducklings start in line behind the mother.
  families.forEach(function (f) {
    var b = bounds();
    f.y = b.min + (b.max - b.min) * f.startFraction;
    var now = performance.now();
    for (var s = TRAIL_KEEP; s >= 0; s -= 0.05) {
      var y = Math.min(b.max, Math.max(b.min, f.y - f.dir * f.speed * s));
      f.trail.push({ t: now - s * 1000, y: y, dir: f.dir });
    }
  });

  requestAnimationFrame(tick);
})();
