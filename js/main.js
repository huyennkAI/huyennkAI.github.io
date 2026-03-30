// ══════════════════════════════════════════
// STARFIELD ANIMATION
// ══════════════════════════════════════════
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];
let shootingStars = [];

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

function createStars() {
    stars = [];
    const count = Math.floor((canvas.width * canvas.height) / 4000);
    for (let i = 0; i < count; i++) {
        stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 1.5 + 0.3,
            opacity: Math.random() * 0.8 + 0.2,
            twinkleSpeed: Math.random() * 0.02 + 0.005,
            twinkleOffset: Math.random() * Math.PI * 2,
            drift: (Math.random() - 0.5) * 0.05
        });
    }
}

function createShootingStar() {
    if (Math.random() < 0.002) {
        shootingStars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height * 0.5,
            length: Math.random() * 80 + 40,
            speed: Math.random() * 8 + 4,
            angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
            opacity: 1,
            decay: 0.015 + Math.random() * 0.01
        });
    }
}

function drawStars(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinkleOffset);
        const opacity = star.opacity * (0.6 + twinkle * 0.4);
        const radius = star.radius * (0.8 + twinkle * 0.2);

        ctx.beginPath();
        ctx.arc(star.x, star.y, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 220, 255, ${opacity})`;
        ctx.fill();

        // Glow for brighter stars
        if (star.radius > 1) {
            ctx.beginPath();
            ctx.arc(star.x, star.y, radius * 3, 0, Math.PI * 2);
            const gradient = ctx.createRadialGradient(
                star.x, star.y, 0,
                star.x, star.y, radius * 3
            );
            gradient.addColorStop(0, `rgba(56, 189, 248, ${opacity * 0.3})`);
            gradient.addColorStop(1, 'rgba(56, 189, 248, 0)');
            ctx.fillStyle = gradient;
            ctx.fill();
        }

        // Slow drift
        star.y += star.drift;
        if (star.y > canvas.height + 5) star.y = -5;
        if (star.y < -5) star.y = canvas.height + 5;
    });

    // Draw shooting stars
    createShootingStar();
    shootingStars = shootingStars.filter(s => s.opacity > 0);
    shootingStars.forEach(s => {
        const endX = s.x - Math.cos(s.angle) * s.length;
        const endY = s.y - Math.sin(s.angle) * s.length;

        const gradient = ctx.createLinearGradient(s.x, s.y, endX, endY);
        gradient.addColorStop(0, `rgba(56, 189, 248, ${s.opacity})`);
        gradient.addColorStop(1, 'rgba(56, 189, 248, 0)');

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Head glow
        ctx.beginPath();
        ctx.arc(s.x, s.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${s.opacity})`;
        ctx.fill();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= s.decay;
    });

    requestAnimationFrame(drawStars);
}

resizeCanvas();
createStars();
requestAnimationFrame(drawStars);
window.addEventListener('resize', () => { resizeCanvas(); createStars(); });

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
