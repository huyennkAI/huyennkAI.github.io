// ══════════════════════════════════════════
// SPACEKIT 3D SPACE BACKGROUND
// ══════════════════════════════════════════
(function initSpaceKit() {
    const container = document.getElementById('spacekit-container');
    if (!container || typeof Spacekit === 'undefined') return;

    const sim = new Spacekit.Simulation(container, {
        basePath: 'https://typpo.github.io/spacekit/src',
        startDate: new Date(2025, 0, 1),
        jdPerSecond: 0.5,
        camera: {
            initialPosition: [2, -8, 4],
            enableDrift: true,
        },
        debug: {
            showAxes: false,
            showGrid: false,
            showStats: false,
        },
    });

    // Deep space skybox
    sim.createSkybox(Spacekit.SkyboxPresets.NASA_TYCHO);

    // Star field
    sim.createStars();

    // Sun at center
    sim.createObject('sun', Spacekit.SpaceObjectPresets.SUN);

    // Inner planets — orbits create beautiful rings
    sim.createObject('mercury', Spacekit.SpaceObjectPresets.MERCURY);
    sim.createObject('venus', Spacekit.SpaceObjectPresets.VENUS);
    sim.createObject('earth', Spacekit.SpaceObjectPresets.EARTH);
    sim.createObject('mars', Spacekit.SpaceObjectPresets.MARS);
    sim.createObject('jupiter', Spacekit.SpaceObjectPresets.JUPITER);

    // Disable pointer events on the container so content is interactive
    // but allow scroll-wheel zoom on the 3D scene
    container.style.pointerEvents = 'none';
})();

// ══════════════════════════════════════════
// NAVBAR SCROLL EFFECT
// ══════════════════════════════════════════
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// ══════════════════════════════════════════
// MOBILE NAV TOGGLE
// ══════════════════════════════════════════
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ══════════════════════════════════════════
// SCROLL REVEAL
// ══════════════════════════════════════════
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

// ══════════════════════════════════════════
// ACTIVE NAV LINK
// ══════════════════════════════════════════
const sections = document.querySelectorAll('section[id]');
const navLinksAll = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinksAll.forEach(link => {
                link.classList.toggle('active',
                    link.getAttribute('href') === `#${entry.target.id}`
                );
            });
        }
    });
}, { threshold: 0.3 });

sections.forEach(sec => sectionObserver.observe(sec));

// ══════════════════════════════════════════
// PARALLAX MOUSE EFFECT ON HERO
// ══════════════════════════════════════════
const hero = document.querySelector('.hero');
const orbitRings = document.querySelectorAll('.orbit-ring');
hero.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 2;
    const y = (e.clientY / window.innerHeight - 0.5) * 2;
    orbitRings.forEach((ring, i) => {
        const factor = (i + 1) * 8;
        ring.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
});

// ══════════════════════════════════════════
// SMOOTH SCROLL FOR ANCHOR LINKS
// ══════════════════════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
