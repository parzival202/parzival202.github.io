const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");

function syncHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}
syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".site-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav?.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const canHover = window.matchMedia("(pointer: fine)").matches;

// Stagger reveal groups: siblings sharing a parent animate in sequence.
const revealGroups = new Map();
document.querySelectorAll(".reveal").forEach(el => {
  const parent = el.parentElement;
  if (!revealGroups.has(parent)) revealGroups.set(parent, []);
  revealGroups.get(parent).push(el);
});
revealGroups.forEach(list => {
  list.forEach((el, i) => el.style.setProperty("--stagger", Math.min(i, 8)));
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Wipe-in project screenshots as they enter view.
const imageObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      imageObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".case-visual img, .media-card img").forEach(img => imageObserver.observe(img));

const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".site-nav a")];
const railMarks = [...document.querySelectorAll("[data-rail-mark]")];
const activeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(link => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
    });
    railMarks.forEach(mark => {
      mark.classList.toggle("is-active", mark.dataset.railMark === entry.target.id);
    });
  });
}, { rootMargin: "-35% 0px -55% 0px" });
sections.forEach(section => activeObserver.observe(section));

// Vertical scroll progress rail: fill + thumb track total scroll, marks sit at
// each section's actual position in the document so they stay accurate on resize.
const rail = document.querySelector("[data-scroll-rail]");
if (rail) {
  const railFill = rail.querySelector("[data-rail-fill]");
  const railThumb = rail.querySelector("[data-rail-thumb]");

  function scrollProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    return max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
  }

  function layoutRailMarks() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    if (max <= 0) return;
    railMarks.forEach(mark => {
      const section = document.getElementById(mark.dataset.railMark);
      if (!section) return;
      const pct = Math.min(1, Math.max(0, section.offsetTop / max));
      mark.parentElement.style.top = `${pct * 100}%`;
    });
  }

  function updateRail() {
    const pct = scrollProgress() * 100;
    railFill.style.height = `${pct}%`;
    railThumb.style.top = `${pct}%`;
  }

  let railTicking = false;
  window.addEventListener("scroll", () => {
    if (!railTicking) {
      requestAnimationFrame(() => { updateRail(); railTicking = false; });
      railTicking = true;
    }
  }, { passive: true });

  window.addEventListener("resize", layoutRailMarks);
  layoutRailMarks();
  updateRail();
}

// Custom cursor + magnetic / tilt hover effects (pointer devices only).
if (canHover && !reduceMotion) {
  document.documentElement.classList.add("has-custom-cursor");

  const dot = document.createElement("div");
  dot.className = "cursor-dot";
  const ring = document.createElement("div");
  ring.className = "cursor-ring";
  document.body.append(dot, ring);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
  });

  function trackRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
    requestAnimationFrame(trackRing);
  }
  trackRing();

  document.querySelectorAll("a, button, .project-card").forEach(el => {
    el.addEventListener("mouseenter", () => ring.classList.add("is-active"));
    el.addEventListener("mouseleave", () => ring.classList.remove("is-active"));
  });

  document.querySelectorAll(".btn").forEach(el => {
    el.addEventListener("mousemove", e => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left - r.width / 2;
      const y = e.clientY - r.top - r.height / 2;
      el.style.transform = `translate(${x * 0.15}px, ${y * 0.35}px)`;
    });
    el.addEventListener("mouseleave", () => { el.style.transform = ""; });
  });

  document.querySelectorAll(".project-card").forEach(el => {
    el.addEventListener("mousemove", e => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(700px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg)`;
    });
    el.addEventListener("mouseleave", () => { el.style.transform = ""; });
  });
}
