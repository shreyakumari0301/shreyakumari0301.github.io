(() => {
  const dict = {
    en: {
      "nav.about": "About",
      "nav.experience": "Experience",
      "nav.publications": "Publications",
      "nav.projects": "Projects",
      "nav.education": "Education",
      "nav.skills": "Skills",
      "nav.contact": "Contact",
      "hero.eyebrow": "Research Engineer · MedOS Tech · Abu Dhabi",
      "hero.lead": "Research Engineer in Machine Learning at MedOS Tech",
      "hero.chip1": "MedOS Tech · Research Engineer",
      "hero.chip2": "IIT Madras · B.S. Data Science",
      "hero.chip3": "5 papers under review",
      "hero.chip4": "Chennai, India",
      "hero.cta": "Experience",
      "about.title": "Work",
      "about.work":
        'Shreya is a Research Engineer at <a href="https://medos.tech/" rel="noopener">MedOS Tech</a> in Abu Dhabi, working on agentic LLM systems, RAG, memory, and evaluation. She collaborates with <strong>Prof. Imran Razzak</strong> at MBZUAI on clinical-trial <strong>World Models</strong>, and with <strong>Prof. Zhiguang Cao</strong> at SMU on <strong>FAROS</strong>, a <strong>World Model</strong> planner for dynamic vehicle routing. She also worked at MI Lab, IIT Madras on TransChem and Archemist (ROS-based robotic materials discovery), and built <a href="https://gurusetu.iitm.ac.in" rel="noopener">GuruSetu</a> at CIFIL Lab, IIT Madras. Her research has three threads: agentic retrieval and routing, LLM memory infrastructure, and World Models for science and planning. She is completing a B.S. in Data Science and Applications at IIT Madras.',
      "stat.1b": "LLMs & RAG",
      "stat.1s": "routing, memory, agents",
      "stat.2b": "World Models",
      "stat.2s": "clinical + combinatorial",
      "stat.3b": "Evaluation",
      "stat.3s": "SWE-bench & harnesses",
      "stat.4b": "5",
      "stat.4s": "active submissions",
      "sec.experience": "Experience",
      "sec.publications": "Publications",
      "sec.projects": "Projects",
      "sec.education": "Education",
      "sec.skills": "Skills",
      "sec.contact": "Contact",
      "contact.blurb":
        "Based in <strong>Chennai, India</strong> · open to research collaborations on medical AI, LLMs, agentic systems, and world models.",
    },
    zh: {
      "nav.about": "简介",
      "nav.experience": "经历",
      "nav.publications": "论文",
      "nav.projects": "项目",
      "nav.education": "教育",
      "nav.skills": "技能",
      "nav.contact": "联系",
      "hero.eyebrow": "研究工程师 · MedOS Tech · 阿布扎比",
      "hero.lead": "MedOS Tech 机器学习研究工程师",
      "hero.chip1": "MedOS Tech · 研究工程师",
      "hero.chip2": "印度理工学院马德拉斯分校 · 数据科学学士",
      "hero.chip3": "5 篇论文审稿中",
      "hero.chip4": "印度钦奈",
      "hero.cta": "经历",
      "about.title": "工作",
      "about.work":
        'Shreya 是阿布扎比 <a href="https://medos.tech/" rel="noopener">MedOS Tech</a> 的研究工程师，专注于智能体大语言模型系统、RAG、记忆与评估。她与 MBZUAI 的 <strong>Imran Razzak 教授</strong>合作研究临床试验<strong>世界模型</strong>，并与新加坡管理大学（SMU）的 <strong>Zhiguang Cao 教授</strong>合作开发 <strong>FAROS</strong>——面向动态车辆路径规划的<strong>世界模型</strong>规划器。她还曾在印度理工学院马德拉斯分校 MI Lab 从事 TransChem 与 Archemist（基于 <strong>ROS</strong> 的机器人材料发现）研究，并在 CIFIL Lab 构建了 <a href="https://gurusetu.iitm.ac.in" rel="noopener">GuruSetu</a>。她的研究有三条主线：智能体检索与路由、大语言模型记忆基础设施，以及面向科学与规划的世界模型。目前正在印度理工学院马德拉斯分校攻读数据科学与应用学士学位。',
      "stat.1b": "大模型与 RAG",
      "stat.1s": "路由、记忆、智能体",
      "stat.2b": "世界模型",
      "stat.2s": "临床 + 组合优化",
      "stat.3b": "评估",
      "stat.3s": "SWE-bench 与评测框架",
      "stat.4b": "5",
      "stat.4s": "在投论文",
      "sec.experience": "经历",
      "sec.publications": "论文",
      "sec.projects": "项目",
      "sec.education": "教育",
      "sec.skills": "技能",
      "sec.contact": "联系",
      "contact.blurb":
        "现居<strong>印度钦奈</strong> · 欢迎就医学人工智能、大语言模型、智能体系统与世界模型展开研究合作。",
    },
  };

  function applyLang(lang) {
    const pack = dict[lang] || dict.en;
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (pack[key] != null) el.textContent = pack[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (pack[key] != null) el.innerHTML = pack[key];
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const on = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
    try {
      localStorage.setItem("site-lang", lang);
    } catch (_) {}
  }

  const saved = (() => {
    try {
      return localStorage.getItem("site-lang");
    } catch (_) {
      return null;
    }
  })();
  applyLang(saved === "zh" ? "zh" : "en");

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyLang(btn.getAttribute("data-lang")));
  });
})();

(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const reveals = document.querySelectorAll(".reveal");
  if (reduceMotion) {
    reveals.forEach((el) => el.classList.add("is-in"));
  } else if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-in"));
  }

  if (reduceMotion) return;

  const bubble = document.getElementById("cursorBubble");
  const ring = document.getElementById("cursorRing");
  const glow = document.querySelector(".page-glow");
  const canvas = document.getElementById("bubbleTrail");
  if (!bubble || !ring || !canvas) return;

  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let bubbleX = mouseX;
  let bubbleY = mouseY;
  let ringX = mouseX;
  let ringY = mouseY;
  let active = false;
  const particles = [];

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function spawnParticle(x, y) {
    particles.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 0.55,
      vy: (Math.random() - 0.5) * 0.55 - 0.15,
      r: 2.5 + Math.random() * 4.5,
      life: 1,
      decay: 0.014 + Math.random() * 0.02,
    });
    if (particles.length > 42) particles.shift();
  }

  function onPointer(x, y) {
    mouseX = x;
    mouseY = y;
    if (!active) {
      active = true;
      bubble.classList.add("is-active");
      ring.classList.add("is-active");
      bubbleX = mouseX;
      bubbleY = mouseY;
      ringX = mouseX;
      ringY = mouseY;
    }
    if (Math.random() > 0.45) spawnParticle(mouseX, mouseY);
  }

  function onMove(event) {
    onPointer(event.clientX, event.clientY);
  }

  function onTouch(event) {
    if (!event.touches || !event.touches.length) return;
    const touch = event.touches[0];
    onPointer(touch.clientX, touch.clientY);
  }

  function onLeave() {
    active = false;
    bubble.classList.remove("is-active", "is-hover");
    ring.classList.remove("is-active");
  }

  function updateHoverTarget(event) {
    const interactive = event.target.closest("a, button, .btn, .card, .stat, .panel");
    bubble.classList.toggle("is-hover", Boolean(interactive));
  }

  function tick() {
    bubbleX += (mouseX - bubbleX) * 0.28;
    bubbleY += (mouseY - bubbleY) * 0.28;
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;

    bubble.style.transform = `translate3d(${bubbleX}px, ${bubbleY}px, 0)`;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

    if (glow) {
      glow.style.left = `${mouseX}px`;
      glow.style.top = `${mouseY}px`;
    }

    ctx.clearRect(0, 0, width, height);
    for (let i = particles.length - 1; i >= 0; i -= 1) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;
      if (p.life <= 0) {
        particles.splice(i, 1);
        continue;
      }
      ctx.beginPath();
      ctx.fillStyle = `rgba(47, 91, 255, ${0.34 * p.life})`;
      ctx.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${0.4 * p.life})`;
      ctx.arc(p.x - p.r * 0.2, p.y - p.r * 0.2, Math.max(p.r * 0.3, 1), 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(tick);
  }

  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", onMove, { passive: true });
  window.addEventListener("mouseover", updateHoverTarget);
  document.addEventListener("mouseleave", onLeave);
  window.addEventListener("touchstart", onTouch, { passive: true });
  window.addEventListener("touchmove", onTouch, { passive: true });
  window.addEventListener("touchend", onLeave);
  window.addEventListener("touchcancel", onLeave);
  requestAnimationFrame(tick);
})();
