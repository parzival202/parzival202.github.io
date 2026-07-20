const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");

const storedTheme = localStorage.getItem("portfolio-theme");
const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = storedTheme || (systemDark ? "dark" : "light");
document.documentElement.dataset.theme = initialTheme;

if (header && !header.querySelector("[data-theme-toggle]")) {
  const themeToggle = document.createElement("button");
  themeToggle.className = "theme-toggle";
  themeToggle.type = "button";
  themeToggle.dataset.themeToggle = "";
  themeToggle.innerHTML = `
    <span class="theme-toggle-track" aria-hidden="true">
      <span class="theme-toggle-icon theme-toggle-sun">
        <svg viewBox="0 0 24 24" focusable="false"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"></path></svg>
      </span>
      <span class="theme-toggle-icon theme-toggle-moon">
        <svg viewBox="0 0 24 24" focusable="false"><path d="M20 14.5A7.5 7.5 0 0 1 9.5 4 8 8 0 1 0 20 14.5z"></path></svg>
      </span>
      <span class="theme-toggle-thumb"></span>
    </span>
  `;
  header.insertBefore(themeToggle, menuButton || nav?.nextSibling || null);
}

const themeToggle = document.querySelector("[data-theme-toggle]");

function syncThemeToggle() {
  const theme = document.documentElement.dataset.theme || "light";
  const nextTheme = theme === "dark" ? "clair" : "sombre";
  themeToggle?.setAttribute("aria-label", `Passer en mode ${nextTheme}`);
  themeToggle?.setAttribute("aria-pressed", String(theme === "dark"));
}
syncThemeToggle();

themeToggle?.addEventListener("click", () => {
  const current = document.documentElement.dataset.theme || "light";
  const next = current === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
  localStorage.setItem("portfolio-theme", next);
  syncThemeToggle();
});

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
