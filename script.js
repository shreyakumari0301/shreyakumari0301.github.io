(() => {
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isCoarse = window.matchMedia("(pointer: coarse)").matches;
  if (reduceMotion || isCoarse) return;

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
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6 - 0.2,
      r: 3 + Math.random() * 5,
      life: 1,
      decay: 0.012 + Math.random() * 0.02,
    });
    if (particles.length > 48) particles.shift();
  }

  function onMove(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
    if (!active) {
      active = true;
      bubble.classList.add("is-active");
      ring.classList.add("is-active");
      bubbleX = mouseX;
      bubbleY = mouseY;
      ringX = mouseX;
      ringY = mouseY;
    }
    if (Math.random() > 0.55) spawnParticle(mouseX, mouseY);
  }

  function onLeave() {
    active = false;
    bubble.classList.remove("is-active", "is-hover");
    ring.classList.remove("is-active");
  }

  function updateHoverTarget(event) {
    const target = event.target;
    const interactive =
      target.closest(
        "a, button, .pub-item, .work-body, .focus-card, .social-btn, .btn"
      );
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
      ctx.fillStyle = `rgba(34, 184, 207, ${0.35 * p.life})`;
      ctx.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.fillStyle = `rgba(255, 255, 255, ${0.45 * p.life})`;
      ctx.arc(p.x - p.r * 0.2, p.y - p.r * 0.2, Math.max(p.r * 0.35, 1), 0, Math.PI * 2);
      ctx.fill();
    }

    requestAnimationFrame(tick);
  }

  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", onMove);
  window.addEventListener("mouseover", updateHoverTarget);
  document.addEventListener("mouseleave", onLeave);
  requestAnimationFrame(tick);
})();
