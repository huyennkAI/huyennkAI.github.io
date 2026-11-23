// Two ducks that waddle up and down the left and right edges of the page.
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

  // side: 'left' | 'right'. Each wall rotates the duck so its feet face the wall.
  function makeDuck(side, startFraction, speed) {
    var el = document.createElement('div');
    el.className = 'duck duck-' + side;
    el.innerHTML = '<div class="duck-waddle">' + DUCK_SVG + '</div>';
    document.body.appendChild(el);
    return {
      el: el,
      side: side,
      y: 0,
      startFraction: startFraction,
      dir: side === 'left' ? 1 : -1,   // 1 = down, -1 = up
      speed: speed,                    // px per second
      pauseUntil: 0
    };
  }

  var ducks = [makeDuck('left', 0.25, 46), makeDuck('right', 0.7, 38)];
  var margin = 60;

  function bounds() {
    var h = window.innerHeight;
    return { min: margin, max: Math.max(margin, h - margin - 44) };
  }

  ducks.forEach(function (d) {
    var b = bounds();
    d.y = b.min + (b.max - b.min) * d.startFraction;
  });

  function render(d) {
    // Base SVG faces right. Left wall: rotate 90deg (head down). Right wall: rotate -90deg (head up).
    var rot = d.side === 'left' ? 90 : -90;
    var headDown = d.side === 'left' ? 1 : -1;
    var flip = d.dir === headDown ? 1 : -1;
    d.el.style.transform = 'translateY(' + d.y.toFixed(1) + 'px) rotate(' + rot + 'deg) scaleX(' + flip + ')';
    d.el.classList.toggle('is-resting', performance.now() < d.pauseUntil);
  }

  var last = performance.now();
  function tick(now) {
    var dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    var b = bounds();
    ducks.forEach(function (d) {
      if (now >= d.pauseUntil) {
        d.y += d.dir * d.speed * dt;
        if (d.y >= b.max) { d.y = b.max; d.dir = -1; d.pauseUntil = now + 800 + Math.random() * 1200; }
        if (d.y <= b.min) { d.y = b.min; d.dir = 1; d.pauseUntil = now + 800 + Math.random() * 1200; }
        // occasional short rest mid-way
        if (Math.random() < 0.002) d.pauseUntil = now + 600 + Math.random() * 900;
      }
      render(d);
    });
    requestAnimationFrame(tick);
  }

  ducks.forEach(render);
  requestAnimationFrame(tick);
})();
