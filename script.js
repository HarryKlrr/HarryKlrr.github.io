/* ============================================================
   HARRY KLAIR — CYBER SECURITY PORTFOLIO
   script.js
   ============================================================ */

/* ── 1. TYPING ANIMATION ────────────────────────────────────── */
const roles = [
  'Cyber Security Graduate',
  'Penetration Tester',
  'SOC Analyst',
  'Defensive Cyber',
  'Azure Security',
  'Future Royal Signals Reserve',
];

const typedEl = document.getElementById('typedText');
let roleIndex  = 0;
let charIndex  = 0;
let isDeleting = false;
let typingTimeout;

function type() {
  const current = roles[roleIndex];

  if (isDeleting) {
    // Remove a character
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
  } else {
    // Add a character
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 45 : 80;

  if (!isDeleting && charIndex === current.length) {
    // Pause at end of word before deleting
    speed = 1800;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    // Move to next word
    isDeleting = false;
    roleIndex  = (roleIndex + 1) % roles.length;
    speed = 400;
  }

  typingTimeout = setTimeout(type, speed);
}

// Start typing after a short delay
setTimeout(type, 1000);


/* ── 2. SCROLL REVEAL (IntersectionObserver) ────────────────── */
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Unobserve after reveal so it doesn't toggle back
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12,       // Trigger when 12% of element is visible
    rootMargin: '0px 0px -40px 0px',
  }
);

revealEls.forEach((el) => observer.observe(el));

// Stagger reveals within the same parent section
// (adds small animation-delay increments to siblings)
document.querySelectorAll('.projects__grid, .skills__grid, .certs__grid, .contact__grid').forEach((grid) => {
  Array.from(grid.children).forEach((child, i) => {
    child.style.transitionDelay = `${i * 80}ms`;
  });
});


/* ── 3. MOBILE NAV ───────────────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.nav__mobile-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// Close mobile menu when a link is clicked
mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});


/* ── 4. ACTIVE NAV LINK ON SCROLL ──────────────────────────── */
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav__link');

function updateActiveLink() {
  const scrollY = window.scrollY + 100; // offset for fixed nav height

  sections.forEach((section) => {
    const top    = section.offsetTop;
    const height = section.offsetHeight;
    const id     = section.getAttribute('id');

    if (scrollY >= top && scrollY < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink(); // run once on load


/* ── 5. NAVBAR BACKGROUND ENHANCEMENT ON SCROLL ────────────── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    navbar.style.background = 'rgba(7, 9, 15, 0.97)';
  } else {
    navbar.style.background = 'rgba(7, 9, 15, 0.85)';
  }
}, { passive: true });


/* ── 6. SMOOTH SCROLL FOR ALL ANCHOR LINKS ──────────────────── */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    const href   = anchor.getAttribute('href');
    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();
    const navHeight = 64;
    const top = target.getBoundingClientRect().top + window.scrollY - navHeight;

    window.scrollTo({ top, behavior: 'smooth' });
  });
});
