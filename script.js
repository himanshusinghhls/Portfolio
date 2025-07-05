document.addEventListener("DOMContentLoaded", () => {
  if (typeof Typed !== "undefined") {
    new Typed("#element", {
      strings: ["Web Developer", "Android App Developer", "Web Designer"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      smartBackspace: true,
      showCursor: true,
      cursorChar: "|",
    });
  } else {
    console.warn("Typed.js is not loaded.");
  }

  const toggleBtn = document.getElementById("mode-toggle");
  const icon = document.querySelector(".slider .icon");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
    if (icon) icon.textContent = "☀︎";
    if (toggleBtn) toggleBtn.checked = true;
  } else {
    if (icon) icon.textContent = "⏾";
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("change", () => {
      document.body.classList.toggle("light");
      const isLight = document.body.classList.contains("light");
      if (icon) icon.textContent = isLight ? "☀︎" : "⏾";
      localStorage.setItem("theme", isLight ? "light" : "dark");
    });
  }

  const createRipple = (x, y) => {
    const ripple = document.createElement("div");
    ripple.className = "ripple-effect";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    document.body.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  };

  const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;
    return function(...args) {
      const context = this;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function() {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  };

  document.body.addEventListener("mousemove", throttle(e => {
    createRipple(e.clientX, e.clientY);
  }, 40));

  document.body.addEventListener("click", e => createRipple(e.clientX, e.clientY));

  document.querySelectorAll(".btn[data-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.getAttribute("data-action");
      if (action === "resume") {
        window.open("Resume.pdf", "_blank", "noopener");
      } else if (action === "github") {
        window.open("https://github.com/himanshusinghhls", "_blank", "noopener");
      }
    });
  });
});
