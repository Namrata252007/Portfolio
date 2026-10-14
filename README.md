# 🌌 Namrata Patil — Developer Code Universe Portfolio

A premium, cinematic, interactive developer portfolio website built with **Modern HTML5, Cybernetic CSS3, and Vanilla JavaScript**. Featuring a dominant **Pitch Black (`#030206`) and Velvet Maroon (`#0c030c`, `#be123c`, `#8B263F`)** palette, glowing **Electric Purple & Violet accents (`#a855f7`, `#c084fc`)**, minimal lavender hints (`#e9d5ff`), **NO DOMINANT BLUE**, an animated first-visit cinematic intro sequence with a Holographic Code Core (`<NP />`), an interactive background with **Drifting Code Syntax Tokens (NO PLANETS)**, shooting data streaks, floating quotes HUD, centered portrait photo frame, and direct **LinkedIn Profile (`namrata-patil-189860384`)** integrations.

---

## 🚀 Live Preview (Active Server)

👉 **[http://localhost:8000](http://localhost:8000)** *(Open or refresh in your browser!)*

---

## 🌌 Architecture & Aesthetic Highlights

1. **Cinematic Animated Intro Sequence (First-Visit & Replay):**
   - Fullscreen dark starfield initializes on first visit.
   - Twinkling stars and data sparks shimmer into the cosmic void.
   - A **Holographic Developer Code Core (`<NP />`)** slowly glows into view with rotating `{ }` brackets and purple/maroon aura (**No planets**).
   - Text types in: `Initializing Namrata's Code Workspace...`.
   - Smoothly transitions into the developer portfolio.
   - Includes a visible **"Skip Intro"** button and remembers the session state via `sessionStorage`.
   - Can be replayed anytime via the **"Replay Intro"** button in the footer or by typing `replay` in the hero terminal!

2. **Code Universe Background Canvas (`#cosmicCanvas`):**
   - **Drifting Code Syntax Tokens:** Real software engineering code snippets (`public class`, `void main()`, `int *ptr`, `DSA: O(1)`, `SELECT * FROM`, `git commit`, `new Scanner()`, `0101`, etc.) floating gently in purple and maroon shades. **All planets completely removed**.
   - Interactive mouse reaction: code tokens gently brighten and glide away when cursor approaches.
   - Periodic **Shooting Code Sparks (Data Streaks)** streaking across the sky with purple & maroon luminous trails.
   - Layered CSS background in deep pitch black (`#030206`) and velvet maroon/purple nebulae.

3. **Official LinkedIn Profile Integration:**
   - Canonical profile link: **`https://www.linkedin.com/in/namrata-patil-189860384/`**
   - Direct high-visibility LinkedIn button in the **Hero CTA Group**.
   - Quick LinkedIn link in the **Site Navigation Bar**.
   - Verified LinkedIn badge pill in the **About Dossier Profile**.
   - Official LinkedIn button in the **Contact Section**.
   - Interactive `contact` and `whoami` terminal commands return the active LinkedIn endpoint.

4. **Stunning Hero Section & Integrated Profile Photo:**
   - Concentric orbital rings with revolving **Code Syntax Nodes** (`</>`, `{AI}`, `[DSA]`).
   - **Integrated Profile Photo (`profile.jpg`):** Cleanly framed within the glowing aperture with custom optical centering (`object-position: center 20%`), subtle scale hover effect, and automatic fallback to monogram if missing.
   - Interactive Developer Terminal HUD supporting one-click shortcut pills: `[whoami]`, `[skills]`, `[projects]`, `[education]`, `[contact]`, `[quote]`.

5. **Privacy Protection & Authentic Information:**
   - **No home address displayed:** Location set strictly and broadly to "Maharashtra, India".
   - 100% authentic academic profile as a 2nd-year B.Tech IT student at RCPIT Shirpur (Class of 2029).
   - Real coursework (C, Java OOP), core fundamentals (DSA, DBMS, OS), and active exploration (Web Dev, SQL).
   - Real project records: *Website Broken Link & SEO Health Audit Tool*, *CyberQuant AI* for SIH 2026, and *2023 National-Level Technical Project Presentation*.

6. **Accessibility & Performance:**
   - Full support for `@media (prefers-reduced-motion: reduce)`.
   - High contrast text (`#FFFFFF`, `#F8FAFC`, `#E2E8F0`, `#94A3B8`).
   - Zero external library bloat: pure vanilla HTML5, CSS3, and JavaScript running at 60 FPS.

---

## 💎 Sections & Features

- **Hero Universe:** 3D interactive wireframe sphere, monogram HUD, developer CLI terminal, typing text animation (`> role:`), and action buttons.
- **Dossier About Section:** Academic trajectory at RCPIT Shirpur (Class of 2029), engineering philosophy, and milestone stats.
- **Authentic Skills Breakdown:**
  - 🟢 **Coursework Complete:** C Language (88%), Java OOP (85%).
  - 🔵 **Core Academic Subjects:** Data Structures & Algorithms (82%), DBMS (80%), Operating Systems (76%).
  - 🟡 **Actively Exploring:** HTML5 (72%), CSS3 (70%), Vanilla JavaScript (60%), SQL (65%).
  - 🛠️ **Developer Tooling:** VS Code, Git & GitHub, Antigravity IDE, Overleaf / LaTeX, Replit.
- **Holographic Projects & Blueprint Modals:**
  - **Website Broken Link & SEO Health Audit Tool:** Automated URL crawler, HTTP response verification, on-page SEO diagnostics, and structured reporting.
  - **CyberQuant AI:** Smart India Hackathon 2026 platform exploring FAIR model, CVSS/EPSS, CISA KEV, Attack Graphs, Monte Carlo simulation, and SHAP explainability.
  - **National-Level Technical Project Presentation (2023):** Merit-certified national competition presentation.
  - Interactive **"Inspect Specs"** modals with problem statements, architectural capabilities, and roadmap.
- **Academic Timeline & Milestones:** Glowing timeline highlighting B.Tech in IT at RCPIT Shirpur, SIH 2026 participation, and NSS community leadership.
- **Terminal Communication Node:**
  - One-click copy email button with instant toast notification.
  - One-click copy LinkedIn headline button.
  - Client-validated contact form with automated mail client redirection.
  - Responsive mobile drawer navigation with active scroll spy.

---

## 📁 File Structure

```text
Namratapo/
├── index.html        # Semantic HTML5 with cyber canvas, floating shapes, HUD badges, and modal dialog
├── style.css         # Futuristic cyber CSS with layered gradients, grids, glows & responsive layouts
├── script.js         # Particle canvas, cyber typewriter, filter transitions & copy logic
├── README.md         # Documentation and deployment walkthrough
└── resume.pdf        # (Optional) Drop your PDF resume here for the download button
```

---

## ✏️ How to Customize Your Details

Open [`script.js`](file:///c:/Users/DELL/Desktop/Namratapo/script.js) and update the `CONFIG` block at the top:
```javascript
const CONFIG = {
  name: "Namrata Himmat Patil",
  email: "patilnamrata.student@gmail.com", // Your primary email
  githubUrl: "https://github.com/your-username", // Your GitHub profile URL
  linkedinUrl: "https://linkedin.com/in/your-username", // Your LinkedIn profile URL
  resumeFileName: "resume.pdf", // Your resume PDF name
};
```

---

## 🚢 Free Deployment to GitHub Pages

1. Initialize git in this folder:
   ```bash
   git init
   git add .
   git commit -m "feat: futuristic cyber-engineer portfolio"
   ```
2. Create a new repository on [GitHub](https://github.com) named `portfolio` or `username.github.io`.
3. Push to GitHub:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
4. In GitHub, go to **Settings &rarr; Pages &rarr; Source: Deploy from branch (main) &rarr; Save**. Your portfolio will be live worldwide in seconds!
