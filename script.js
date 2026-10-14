/**
 * Portfolio JavaScript - Midnight Universe Cinematic Experience
 * Author: Namrata Himmat Patil
 * Features:
 *  - Cinematic First-Visit Intro Sequence (Starfield, Planet Glow, Typing, Skip & Replay)
 *  - Cosmic Background Canvas (Drifting Stars, Shooting Stars, Distant Planets, Stardust)
 *  - Floating Motivational Quotes HUD (Ethereal cycle & non-blocking)
 *  - Interactive Developer Terminal HUD with Custom Commands
 *  - Dynamic Typing Effect in Hero
 *  - Holographic Project Filter Transitions & Specs Modals
 *  - 3D Perspective Card Tilt & Scroll-Triggered Reveals
 *  - Navigation Scroll Spy & Mobile Drawer
 *  - Contact Form Client Validation & Mailto Transmit
 *  - Copy Email & Suggested LinkedIn Headline
 *  - Resume Download Detection & Toast Notification
 */

// ==========================================
// 1. CONFIGURATION (Privacy Protected: No Home Address)
// ==========================================
const CONFIG = {
  name: "Namrata Himmat Patil",
  title: "Aspiring Software Engineer | B.Tech IT '29",
  institution: "R. C. Patel Institute of Technology, Shirpur",
  location: "Maharashtra, India", // General region only - home address strictly removed
  email: "patilnamrata.student@gmail.com",
  githubUrl: "https://github.com/",
  linkedinUrl: "https://www.linkedin.com/in/namrata-patil-189860384/",
  resumeFileName: "resume.pdf",
};

// Detailed Project Blueprint Data for Modals
const PROJECT_DETAILS = {
  "seo-tool": {
    category: "Web Engineering & Diagnostic Tooling",
    title: "Website Broken Link & SEO Health Audit Tool",
    body: `
      <div>
        <h4 class="modal-section-title">// Problem Statement</h4>
        <p class="modal-text">
          Broken hyperlinks (404 status codes) and missing on-page SEO metadata harm search engine indexing, degrade domain trust scores, and deliver frustrating user experiences. Manual crawling on complex sites is slow, incomplete, and difficult to audit repeatedly.
        </p>
      </div>

      <div>
        <h4 class="modal-section-title">// Architectural Capabilities &amp; Features</h4>
        <ul class="modal-list">
          <li><strong>Automated URL Crawler:</strong> Systematically traverses target internal URLs from a provided root domain.</li>
          <li><strong>HTTP Status Diagnostics:</strong> Verifies server response status codes, flagging 404 dead links, broken redirects (301/302 chains), and server timeouts.</li>
          <li><strong>On-Page SEO Evaluator:</strong> Analyzes essential tags including Title lengths, Meta descriptions, OpenGraph tags, Heading hierarchies (H1/H2), and image alt text presence.</li>
          <li><strong>Structured Diagnostic Report:</strong> Compiles findings into prioritized categories with actionable guidance for site administrators.</li>
        </ul>
      </div>

      <div>
        <h4 class="modal-section-title">// Development Roadmap &amp; Tech Stack</h4>
        <p class="modal-text">
          Architecture, parsing logic, and report format are actively under prototype design. Implementation technologies are currently being benchmarked.
        </p>
      </div>
    `
  },
  "cyberquant": {
    category: "Smart India Hackathon 2026 Flagship",
    title: "CyberQuant AI — Cyber Risk Quantification & Investment Optimization",
    body: `
      <div>
        <h4 class="modal-section-title">// Initiative Vision</h4>
        <p class="modal-text">
          Traditional corporate security reviews rely on qualitative risk matrices (High/Medium/Low) that fail to convey financial risk to boards and executive leadership. CyberQuant AI is a platform concept developed for Smart India Hackathon 2026 to bridge the gap between technical vulnerability intelligence and capital allocation optimization.
        </p>
      </div>

      <div>
        <h4 class="modal-section-title">// Analytical Concepts &amp; Security Frameworks</h4>
        <ul class="modal-list">
          <li><strong>Vulnerability Intelligence:</strong> Incorporating CVSS (Common Vulnerability Scoring System), EPSS (Exploit Prediction Scoring System), and CISA KEV (Known Exploited Vulnerabilities catalog).</li>
          <li><strong>FAIR Model Integration:</strong> Applying Factor Analysis of Information Risk to quantify threat event frequencies and probable loss magnitudes.</li>
          <li><strong>Monte Carlo Simulations:</strong> Executing probabilistic simulations to construct loss exceedance curves and prioritize defensive investments under uncertainty.</li>
          <li><strong>Attack Graphs &amp; Explainability:</strong> Visualizing multi-hop attack graphs combined with SHAP (SHapley Additive exPlanations) to explain security prioritization clearly to non-technical stakeholders.</li>
        </ul>
      </div>

      <div>
        <h4 class="modal-section-title">// Project Status</h4>
        <p class="modal-text">
          Collaborative concept, analytical models, and architecture proposal submitted for the Smart India Hackathon 2026 problem track.
        </p>
      </div>
    `
  },
  "national-project": {
    category: "National Technical Competition",
    title: "National-Level Technical Project Presentation (2023)",
    body: `
      <div>
        <h4 class="modal-section-title">// Experience &amp; Demonstration</h4>
        <p class="modal-text">
          Represented an innovative technical project at the national competition level in 2023, showcasing practical engineering approaches, defending design decisions, and presenting live demonstrations before academic and technical evaluation panels.
        </p>
      </div>

      <div>
        <h4 class="modal-section-title">// Key Takeaways &amp; Recognition</h4>
        <ul class="modal-list">
          <li><strong>Technical Communication:</strong> Conveyed system functionality, problem objectives, and real-world value clearly under strict competition evaluation guidelines.</li>
          <li><strong>Panel Review &amp; Defense:</strong> Received constructive feedback and defended technical methodologies before judging committees.</li>
          <li><strong>Achievement Recognition:</strong> Awarded an official Certificate of Achievement and Merit for national presentation.</li>
        </ul>
      </div>

      <div>
        <h4 class="modal-section-title">// Verification</h4>
        <p class="modal-text">
          Verified entry supported by an official Certificate of Achievement.
        </p>
      </div>
    `
  }
};

// Curated Motivational & Cosmic Quotes
const MOTIVATIONAL_QUOTES = [
  { text: "“The cosmos is within us. We are made of star-stuff.”", author: "— Carl Sagan" },
  { text: "“Code is poetry written in logic across a canvas of infinite possibilities.”", author: "— Software Engineering" },
  { text: "“Simplicity is prerequisite for reliability.”", author: "— Edsger W. Dijkstra" },
  { text: "“Every line of code is a step toward building something greater than ourselves.”", author: "— Engineering Mindset" },
  { text: "“From fundamental algorithms to limitless horizons.”", author: "— Namrata Patil" },
  { text: "“Small iterative steps in logic lead to stellar transformations.”", author: "— Tech Philosophy" }
];

// ==========================================
// 2. DOM INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initUniverseIntro();
  initScrollProgress();
  initMouseGlow();
  initCosmicCanvas();
  initDeveloperTerminal();
  initTypingEffect();
  initProjectFilters();
  initProjectModals();
  initCardTilt();
  initScrollReveal();
  initMotivationalQuotes();
  initNavigation();
  initContactForm();
  initResumeButton();
  initCopyActions();
});

// ==========================================
// 3. ANIMATED INTRO SEQUENCE (FIRST VISIT & REPLAY)
// ==========================================
function initUniverseIntro() {
  const introEl = document.getElementById("universeIntro");
  const skipBtn = document.getElementById("skipIntroBtn");
  const replayBtn = document.getElementById("replayIntroBtn");
  const typingTextEl = document.getElementById("introTypingText");
  const statusLineEl = document.getElementById("introStatusLine");
  const starCanvas = document.getElementById("introStarfieldCanvas");

  if (!introEl) return;

  const sessionKey = "hasSeenMidnightUniverseIntro";
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Render Twinkling Starfield in Intro
  let animId = null;
  function renderIntroStars() {
    if (!starCanvas) return;
    const ctx = starCanvas.getContext("2d");
    let w = (starCanvas.width = window.innerWidth);
    let h = (starCanvas.height = window.innerHeight);

    const stars = [];
    for (let i = 0; i < 90; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.6 + 0.6,
        alpha: Math.random(),
        speed: Math.random() * 0.03 + 0.015
      });
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      stars.forEach(s => {
        s.alpha += s.speed;
        const currentAlpha = 0.3 + Math.abs(Math.sin(s.alpha)) * 0.7;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`;
        ctx.fill();
      });
      if (!introEl.classList.contains("intro-hidden")) {
        animId = requestAnimationFrame(draw);
      }
    }
    draw();
  }

  function hideIntro() {
    introEl.classList.add("intro-hidden");
    sessionStorage.setItem(sessionKey, "true");
    if (animId) cancelAnimationFrame(animId);
  }

  function playIntroSequence() {
    introEl.classList.remove("intro-hidden");
    renderIntroStars();

    const phrase = "Initializing Namrata's Code Workspace...";
    if (typingTextEl) typingTextEl.textContent = "";
    if (statusLineEl) statusLineEl.textContent = "Compiling developer environment...";

    let idx = 0;
    const typingInterval = setInterval(() => {
      if (idx < phrase.length) {
        typingTextEl.textContent += phrase[idx];
        idx++;
      } else {
        clearInterval(typingInterval);
        if (statusLineEl) {
          statusLineEl.textContent = "Build successful • Entering Code Workspace...";
          statusLineEl.style.color = "#a855f7";
        }
        setTimeout(() => {
          hideIntro();
        }, 1100);
      }
    }, 60);

    // Safety timeout
    setTimeout(() => {
      if (!introEl.classList.contains("intro-hidden")) {
        hideIntro();
      }
    }, 4500);
  }

  // Check session storage
  const hasSeen = sessionStorage.getItem(sessionKey);
  if (hasSeen === "true" || prefersReducedMotion) {
    introEl.classList.add("intro-hidden");
  } else {
    playIntroSequence();
  }

  // Skip button
  if (skipBtn) {
    skipBtn.addEventListener("click", hideIntro);
  }

  // Replay Intro button
  if (replayBtn) {
    replayBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        playIntroSequence();
      }, 250);
    });
  }
}

// ==========================================
// 4. COSMIC BACKGROUND CANVAS (STARS, SHOOTING STARS & NEBULA)
// ==========================================
function initCosmicCanvas() {
  const canvas = document.getElementById("cosmicCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }, { passive: true });

  // 1. Drifting Code Syntax Tokens (NO PLANETS)
  const CODE_SNIPPETS = [
    "public class Namrata {",
    "void main(String[] args)",
    "int *ptr = &logic;",
    "SELECT * FROM future;",
    "DSA: O(1) space, O(N) time",
    "if (curiosity) build();",
    "git commit -m 'feat: code'",
    "while (true) { learn(); }",
    "#include <stdio.h>",
    "struct Node* next = NULL;",
    "System.out.println('build');",
    "const engineer = 'Patil';",
    "npm run dev",
    "{ status: 200, ok: true }",
    "01001110 01010000",
    "<Developer career='IT' />",
    "new Scanner(System.in);",
    "for (int i=0; i<n; i++)",
    "boolean isReady = true;",
    "SQL: INNER JOIN solutions",
    "ptr->next = newNode;",
    "RCPIT.IT.Shirpur.2029;",
    "return 0;",
    "float accuracy = 0.99f;",
    "try { solve(); } catch(e)"
  ];

  const codeParticles = [];
  const codeCount = Math.min(Math.floor(window.innerWidth / 55), 24);
  const purpleMaroonColors = ["#c084fc", "#a855f7", "#e879f9", "#be123c", "#fb7185", "#d8b4fe"];

  for (let i = 0; i < codeCount; i++) {
    codeParticles.push({
      text: CODE_SNIPPETS[i % CODE_SNIPPETS.length],
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() * -0.25) - 0.08, // slow upward drift
      color: purpleMaroonColors[i % purpleMaroonColors.length],
      alpha: Math.random() * 0.16 + 0.12,
      baseAlpha: Math.random() * 0.16 + 0.12,
      fontSize: Math.floor(Math.random() * 2) + 11,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.015 + 0.008
    });
  }

  // 2. Stars & Data Sparks (NO BLUE - Purple, Maroon & Pure White only)
  const starCount = Math.min(Math.floor(window.innerWidth / 14), 110);
  const stars = [];
  const starColors = ["#ffffff", "#e9d5ff", "#c084fc", "#a855f7", "#be123c", "#fb7185"];

  for (let i = 0; i < starCount; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.15,
      radius: Math.random() * 1.4 + 0.5,
      baseRadius: Math.random() * 1.4 + 0.5,
      color: starColors[Math.floor(Math.random() * starColors.length)],
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.01
    });
  }

  // 3. Shooting Code Streaks / Data Packets (Purple-Maroon trail)
  const shootingStars = [];

  function spawnShootingStar() {
    if (prefersReducedMotion || document.hidden) return;
    const startX = Math.random() * (width * 0.8) + (width * 0.1);
    const startY = Math.random() * (height * 0.4);
    const angle = (Math.PI / 4) + (Math.random() - 0.5) * 0.25;
    const speed = Math.random() * 8 + 10;

    shootingStars.push({
      x: startX,
      y: startY,
      length: Math.random() * 85 + 65,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      opacity: 1,
      decay: Math.random() * 0.018 + 0.012
    });
  }

  setInterval(spawnShootingStar, 6200);

  // Mouse interaction
  const mouse = { x: null, y: null, radius: 130 };
  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, { passive: true });

  window.addEventListener("mouseleave", () => {
    mouse.x = null;
    mouse.y = null;
  }, { passive: true });

  function render() {
    if (document.hidden) {
      requestAnimationFrame(render);
      return;
    }

    ctx.clearRect(0, 0, width, height);

    // Render Floating Code Syntax Tokens
    for (let i = 0; i < codeParticles.length; i++) {
      const p = codeParticles[i];

      if (!prefersReducedMotion) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -80) p.x = width + 80;
        if (p.x > width + 80) p.x = -80;
        if (p.y < -30) p.y = height + 30;
        if (p.y > height + 30) p.y = -30;
      }

      p.pulse += p.pulseSpeed;
      let alpha = p.baseAlpha + Math.sin(p.pulse) * 0.06;

      // Mouse interactivity with code
      if (mouse.x !== null && mouse.y !== null) {
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          p.x += (dx / dist) * force * 1.5;
          p.y += (dy / dist) * force * 1.5;
          alpha = Math.min(0.7, alpha + 0.35); // brighten when mouse is close!
        }
      }

      ctx.save();
      ctx.font = `${p.fontSize}px 'Fira Code', 'JetBrains Mono', Consolas, monospace`;
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0.08, Math.min(0.75, alpha));
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 6;
      ctx.fillText(p.text, p.x, p.y);
      ctx.restore();
    }

    // Render Drifting Stars / Sparks
    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];

      if (!prefersReducedMotion) {
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0) s.x = width;
        if (s.x > width) s.x = 0;
        if (s.y < 0) s.y = height;
        if (s.y > height) s.y = 0;
      }

      s.pulse += s.pulseSpeed;
      const currentRadius = s.baseRadius + Math.sin(s.pulse) * 0.35;
      const alpha = 0.35 + Math.abs(Math.sin(s.pulse)) * 0.65;

      if (mouse.x !== null && mouse.y !== null) {
        const dx = s.x - mouse.x;
        const dy = s.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          s.x += (dx / dist) * force * 1.1;
          s.y += (dy / dist) * force * 1.1;
        }
      }

      ctx.beginPath();
      ctx.arc(s.x, s.y, Math.max(0.5, currentRadius), 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.globalAlpha = alpha;
      ctx.fill();
      ctx.globalAlpha = 1.0;
    }

    // Render Shooting Code Sparks (Purple -> Maroon -> Fade)
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const meteor = shootingStars[i];

      const endX = meteor.x - meteor.vx * (meteor.length / 10);
      const endY = meteor.y - meteor.vy * (meteor.length / 10);

      const grad = ctx.createLinearGradient(meteor.x, meteor.y, endX, endY);
      grad.addColorStop(0, `rgba(255, 255, 255, ${meteor.opacity})`);
      grad.addColorStop(0.3, `rgba(168, 85, 247, ${meteor.opacity * 0.95})`); // vibrant purple
      grad.addColorStop(0.75, `rgba(225, 29, 72, ${meteor.opacity * 0.7})`);  // electric maroon
      grad.addColorStop(1, `rgba(4, 2, 6, 0)`);

      ctx.beginPath();
      ctx.moveTo(meteor.x, meteor.y);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.8;
      ctx.stroke();

      meteor.x += meteor.vx;
      meteor.y += meteor.vy;
      meteor.opacity -= meteor.decay;

      if (meteor.opacity <= 0 || meteor.x > width + 100 || meteor.y > height + 100) {
        shootingStars.splice(i, 1);
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

// ==========================================
// 5. FLOATING MOTIVATIONAL QUOTES HUD
// ==========================================
function initMotivationalQuotes() {
  const hud = document.getElementById("floatingQuoteHud");
  const quoteText = document.getElementById("quoteText");
  const quoteAuthor = document.getElementById("quoteAuthor");
  const closeBtn = document.getElementById("quoteCloseBtn");

  if (!hud || !quoteText || !quoteAuthor) return;

  let currentQuoteIndex = 0;
  let isDismissed = false;

  function showNextQuote() {
    if (isDismissed) return;

    const quote = MOTIVATIONAL_QUOTES[currentQuoteIndex];
    quoteText.textContent = quote.text;
    quoteAuthor.textContent = quote.author;

    hud.classList.add("quote-visible");

    // Fade out after 8 seconds
    setTimeout(() => {
      hud.classList.remove("quote-visible");

      // Wait 10 seconds before next quote
      setTimeout(() => {
        currentQuoteIndex = (currentQuoteIndex + 1) % MOTIVATIONAL_QUOTES.length;
        showNextQuote();
      }, 10000);
    }, 8000);
  }

  // Start after initial delay on page load
  setTimeout(() => {
    showNextQuote();
  }, 4200);

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      hud.classList.remove("quote-visible");
      isDismissed = true;
    });
  }
}

// ==========================================
// 6. DEVELOPER TERMINAL INTERACTIVE HUD
// ==========================================
function initDeveloperTerminal() {
  const form = document.getElementById("terminalForm");
  const input = document.getElementById("terminalInput");
  const output = document.getElementById("terminalOutput");
  if (!form || !input || !output) return;

  const COMMANDS = {
    help: () => [
      { text: "=== Midnight Universe Terminal Commands ===", highlight: true },
      { text: "  whoami     - Identity, degree, and engineering trajectory" },
      { text: "  skills     - Verified coursework & explored toolkits" },
      { text: "  projects   - Featured platforms and competition entries" },
      { text: "  education  - Academic timeline at RCPIT Shirpur" },
      { text: "  contact    - Official email & professional endpoints" },
      { text: "  quote      - Fetch a philosophical starlight quote" },
      { text: "  replay     - Replay the cinematic intro sequence" },
      { text: "  clear      - Reset the terminal buffer" }
    ],
    whoami: () => [
      { text: "Namrata Himmat Patil", highlight: true },
      { text: "Aspiring Software Engineer | B.Tech IT '29" },
      { text: "Institution: R. C. Patel Institute of Technology, Shirpur" },
      { text: "Location: Maharashtra, India" }
    ],
    skills: () => [
      { text: "Completed Academic Coursework:", highlight: true },
      { text: "  - C Programming (Procedural foundations, memory, pointers)" },
      { text: "  - Java (Object-Oriented Programming, Encapsulation, Polymorphism)" },
      { text: "  - Data Structures & Algorithms (Linear structures, sorting, complexity)" },
      { text: "  - Database Management Systems (Relational normalization, ACID)" },
      { text: "  - Operating Systems & IT Infrastructure" },
      { text: "Actively Exploring / Learning:", highlight: true },
      { text: "  - SQL, HTML5, CSS3, JavaScript (Vanilla), Git & GitHub" },
      { text: "Developer Tooling:", highlight: true },
      { text: "  - Visual Studio Code, Antigravity IDE, Overleaf/LaTeX, Replit" }
    ],
    projects: () => [
      { text: "1. Website Broken Link & SEO Health Audit Tool", highlight: true },
      { text: "   Crawls internal URLs, validates HTTP responses, flags SEO issues, builds report." },
      { text: "2. CyberQuant AI — Smart India Hackathon 2026", highlight: true },
      { text: "   Translates cyber risks into financial metrics; FAIR model, EPSS, Monte Carlo simulation." },
      { text: "3. 2023 National-Level Technical Project Presentation", highlight: true },
      { text: "   Demonstrated technical solution before evaluation panels, earned merit certificate." }
    ],
    education: () => [
      { text: "Degree: Bachelor of Technology (B.Tech) in Information Technology", highlight: true },
      { text: "College: R. C. Patel Institute of Technology (RCPIT), Shirpur" },
      { text: "Expected Graduation: 2029 (Currently in Second Year)" }
    ],
    contact: () => [
      { text: "Email Node: patilnamrata.student@gmail.com", highlight: true },
      { text: "Region: Maharashtra, India" },
      { text: "LinkedIn: https://www.linkedin.com/in/namrata-patil-189860384/" },
      { text: "GitHub: https://github.com/" }
    ],
    quote: () => {
      const q = MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)];
      return [
        { text: q.text, highlight: true },
        { text: `  ${q.author}` }
      ];
    },
    replay: () => {
      setTimeout(() => {
        const replayBtn = document.getElementById("replayIntroBtn");
        if (replayBtn) replayBtn.click();
      }, 300);
      return [
        { text: "Replaying Midnight Universe cinematic intro sequence...", highlight: true }
      ];
    }
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const rawVal = input.value.trim();
    if (!rawVal) return;

    const cmd = rawVal.toLowerCase();
    input.value = "";

    const cmdLine = document.createElement("div");
    cmdLine.className = "terminal-line";
    cmdLine.innerHTML = `<span class="terminal-prompt">$</span> ${escapeHtml(rawVal)}`;
    output.appendChild(cmdLine);

    if (cmd === "clear") {
      output.innerHTML = "";
      const welcome = document.createElement("div");
      welcome.className = "terminal-line terminal-out";
      welcome.textContent = "Terminal buffer reset. Type 'help' for available commands.";
      output.appendChild(welcome);
      return;
    }

    const handler = COMMANDS[cmd];
    if (handler) {
      const lines = handler();
      lines.forEach(item => {
        const outLine = document.createElement("div");
        outLine.className = item.highlight 
          ? "terminal-line terminal-out-highlight" 
          : "terminal-line terminal-out";
        outLine.textContent = item.text;
        output.appendChild(outLine);
      });
    } else {
      const errLine = document.createElement("div");
      errLine.className = "terminal-line terminal-out";
      errLine.innerHTML = `Command not recognized: <span style="color:#ef4444;">${escapeHtml(rawVal)}</span>. Type 'help' for commands.`;
      output.appendChild(errLine);
    }

    output.scrollTop = output.scrollHeight;
  });

  // Terminal Shortcut Buttons
  const shortcuts = document.querySelectorAll(".term-shortcut");
  shortcuts.forEach(btn => {
    btn.addEventListener("click", () => {
      const cmd = btn.getAttribute("data-cmd");
      if (cmd) {
        input.value = cmd;
        form.dispatchEvent(new Event("submit"));
      }
    });
  });
}

// ==========================================
// 7. SCROLL PROGRESS BAR
// ==========================================
function initScrollProgress() {
  const bar = document.getElementById("scrollProgressBar");
  if (!bar) return;

  function update() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${progress}%`;
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
}

// ==========================================
// 8. SOFT MOUSE-FOLLOWING GLOW AURA
// ==========================================
function initMouseGlow() {
  const glow = document.getElementById("mouseGlow");
  if (!glow) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    glow.style.display = "none";
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;
  let isMoving = false;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isMoving) {
      isMoving = true;
      requestAnimationFrame(updatePos);
    }
  }, { passive: true });

  function updatePos() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;
    glow.style.transform = `translate3d(${currentX - 260}px, ${currentY - 260}px, 0)`;

    if (Math.abs(mouseX - currentX) > 0.5 || Math.abs(mouseY - currentY) > 0.5) {
      requestAnimationFrame(updatePos);
    } else {
      isMoving = false;
    }
  }
}

// ==========================================
// 9. ANIMATED TYPING EFFECT
// ==========================================
function initTypingEffect() {
  const typedTextEl = document.getElementById("typedText");
  if (!typedTextEl) return;

  const phrases = [
    "Aspiring Software Engineer",
    "B.Tech IT Student @ RCPIT",
    "C & Java Developer",
    "DSA & DBMS Learner",
    "Problem Solver & Tech Explorer"
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  const typingSpeed = 80;
  const deletingSpeed = 40;
  const pauseEnd = 2000;
  const pauseStart = 400;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typedTextEl.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typedTextEl.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
    }

    let delay = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentPhrase.length) {
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      delay = pauseStart;
    }

    setTimeout(type, delay);
  }

  type();
}

// ==========================================
// 10. INTERACTIVE PROJECT FILTERING
// ==========================================
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  if (!filterBtns.length || !projectCards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      const filterValue = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const category = card.getAttribute("data-category");

        if (filterValue === "all" || category === filterValue) {
          card.classList.remove("filtered-out");
          card.style.opacity = "0";
          card.style.transform = "translateY(12px)";
          setTimeout(() => {
            card.style.transition = "opacity 0.28s ease, transform 0.28s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 20);
        } else {
          card.classList.add("filtered-out");
        }
      });
    });
  });
}

// ==========================================
// 11. PROJECT DETAILS MODAL & ACTION BUTTONS
// ==========================================
function initProjectModals() {
  const modal = document.getElementById("projectModal");
  const modalCloseBtn = document.getElementById("modalCloseBtn");
  const modalCategory = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  if (!modal) return;

  const detailButtons = document.querySelectorAll(".btn-project-details");
  detailButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const projectId = btn.getAttribute("data-project");
      const data = PROJECT_DETAILS[projectId];

      if (data) {
        modalCategory.textContent = data.category;
        modalTitle.textContent = data.title;
        modalBody.innerHTML = data.body;
        openModal();
      }
    });
  });

  const noticeButtons = document.querySelectorAll("[data-action]");
  noticeButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.getAttribute("data-action");
      if (action === "repo-notice") {
        showToast("📦 The repository for this project is currently in private development and will be released upon milestone completion.", 4500);
      } else if (action === "hackathon-notice") {
        showToast("🛡️ Smart India Hackathon 2026: Project proposal and analytical architecture documentation are in review.", 4500);
      } else if (action === "certificate-notice") {
        showToast("🏅 2023 National-Level Entry: Official certificate of presentation and merit available upon academic verification.", 4500);
      }
    });
  });

  function openModal() {
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) {
      closeModal();
    }
  });
}

// ==========================================
// 12. SUBTLE 3D CARD TILT EFFECT
// ==========================================
function initCardTilt() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const tiltCards = document.querySelectorAll(
    ".narrative-card, .feature-box, .skill-category-card, .project-card, .timeline-card, .achievement-card"
  );

  tiltCards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const normX = (x / rect.width) - 0.5;
      const normY = (y / rect.height) - 0.5;

      const tiltX = -normY * 5;
      const tiltY = normX * 5;

      card.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) translateY(-3px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

// ==========================================
// 13. SMOOTH SCROLL REVEAL OBSERVER
// ==========================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll(".reveal-on-scroll");
  if (!revealElements.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    revealElements.forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: "0px 0px -30px 0px"
  });

  revealElements.forEach(el => observer.observe(el));
}

// ==========================================
// 14. NAVIGATION & ACTIVE SCROLL SPY
// ==========================================
function initNavigation() {
  const header = document.getElementById("header");
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  const links = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.classList.toggle("open", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    links.forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    highlightActiveSection(sections, links);
  }, { passive: true });
}

function highlightActiveSection(sections, links) {
  const scrollPosition = window.scrollY + 130;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      links.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

// ==========================================
// 15. RESUME DOWNLOAD HANDLER
// ==========================================
function initResumeButton() {
  const resumeBtn = document.getElementById("resumeBtn");
  if (!resumeBtn) return;

  resumeBtn.addEventListener("click", (e) => {
    fetch(CONFIG.resumeFileName, { method: "HEAD" })
      .then(res => {
        if (!res.ok) {
          e.preventDefault();
          showToast(
            `📄 Resume note: Place your resume as "${CONFIG.resumeFileName}" in this folder to enable direct download!`,
            5000
          );
        }
      })
      .catch(() => {
        e.preventDefault();
        showToast(
          `📄 Place your resume as "${CONFIG.resumeFileName}" in the project folder to enable one-click download.`,
          5000
        );
      });
  });
}

// ==========================================
// 16. CONTACT FORM VALIDATION & TRANSMISSION
// ==========================================
function initContactForm() {
  const form = document.getElementById("contactForm");
  const feedback = document.getElementById("formFeedback");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("senderName");
    const emailInput = document.getElementById("senderEmail");
    const subjectInput = document.getElementById("messageSubject");
    const messageInput = document.getElementById("messageBody");

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const subjectError = document.getElementById("subjectError");
    const messageError = document.getElementById("messageError");

    [nameError, emailError, subjectError, messageError].forEach(el => el.textContent = "");
    [nameInput, emailInput, subjectInput, messageInput].forEach(el => el.classList.remove("invalid"));
    feedback.className = "form-feedback";
    feedback.textContent = "";

    let isValid = true;

    if (!nameInput.value.trim()) {
      nameError.textContent = "Please enter your full name.";
      nameInput.classList.add("invalid");
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
      emailError.textContent = "Please enter your email address.";
      emailInput.classList.add("invalid");
      isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email format (e.g., name@domain.com).";
      emailInput.classList.add("invalid");
      isValid = false;
    }

    if (!subjectInput.value.trim()) {
      subjectError.textContent = "Please enter a transmission subject.";
      subjectInput.classList.add("invalid");
      isValid = false;
    }

    if (!messageInput.value.trim()) {
      messageError.textContent = "Please enter your message content.";
      messageInput.classList.add("invalid");
      isValid = false;
    }

    if (!isValid) return;

    const mailtoSubject = encodeURIComponent(`[Portfolio Contact] ${subjectInput.value.trim()}`);
    const mailtoBody = encodeURIComponent(
      `From: ${nameInput.value.trim()} (${emailInput.value.trim()})\n\nMessage:\n${messageInput.value.trim()}`
    );
    const mailtoUrl = `mailto:${CONFIG.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    feedback.className = "form-feedback success";
    feedback.innerHTML = `
      ✓ Transmitting payload from <strong>${escapeHtml(nameInput.value.trim())}</strong>! 
      Opening mail client for destination <em>${CONFIG.email}</em>...
    `;

    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 850);

    form.reset();
  });
}

// ==========================================
// 17. COPY ACTIONS (Email & Headline)
// ==========================================
function initCopyActions() {
  const copyEmailBtn = document.getElementById("copyEmailBtn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      copyToClipboard(CONFIG.email, () => {
        showToast(`📋 Copied email: ${CONFIG.email}`, 3500);
        copyEmailBtn.textContent = "Copied!";
        setTimeout(() => {
          copyEmailBtn.textContent = "Copy Email";
        }, 2000);
      });
    });
  }

  const copyHeadlineBtn = document.getElementById("copyHeadlineBtn");
  const headlineText = document.getElementById("headlineText");
  if (copyHeadlineBtn && headlineText) {
    copyHeadlineBtn.addEventListener("click", () => {
      const text = headlineText.textContent.trim();
      copyToClipboard(text, () => {
        showToast("📋 Copied LinkedIn Headline to clipboard!", 3500);
        copyHeadlineBtn.textContent = "Done!";
        setTimeout(() => {
          copyHeadlineBtn.textContent = "Copy";
        }, 2000);
      });
    });
  }

  function copyToClipboard(text, onSuccess) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text)
        .then(onSuccess)
        .catch(() => fallbackCopy(text, onSuccess));
    } else {
      fallbackCopy(text, onSuccess);
    }
  }

  function fallbackCopy(text, onSuccess) {
    const textArea = document.createElement("textarea");
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand("copy");
      onSuccess();
    } catch (err) {
      showToast(`Text: ${text}`, 4000);
    }
    document.body.removeChild(textArea);
  }
}

// ==========================================
// 18. UTILITY FUNCTIONS
// ==========================================
function showToast(message, duration = 4000) {
  const toast = document.getElementById("toastNotification");
  const toastMsg = document.getElementById("toastMessage");
  if (!toast || !toastMsg) return;

  toastMsg.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, duration);
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}
