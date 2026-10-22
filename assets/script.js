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
