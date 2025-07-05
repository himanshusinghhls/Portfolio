document.addEventListener("DOMContentLoaded", () => {
  new Typed("#element", {
    strings: ["Web Developer", "Android App Developer", "Web Designer"],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true
  });

  const toggleBtn = document.getElementById("mode-toggle");
  const icon = document.querySelector(".slider .icon");
  toggleBtn.addEventListener("change", () => {
    document.body.classList.toggle("light");
    icon.textContent = document.body.classList.contains("light") ? "☀︎" : "⏾";
  });

  const createRipple = (x, y) => {
    const ripple = document.createElement("div");
    ripple.className = "ripple-effect";
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    document.body.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  };

  let lastMove = 0;
  const throttleTime = 40;
  document.body.addEventListener("mousemove", e => {
    const now = Date.now();
    if (now - lastMove > throttleTime) {
      createRipple(e.clientX, e.clientY);
      lastMove = now;
    }
  });
  document.body.addEventListener("click", e => createRipple(e.clientX, e.clientY));

  document.querySelectorAll(".btn[data-action]").forEach(btn => {
    btn.addEventListener("click", () => {
      const action = btn.getAttribute("data-action");
      if (action === "resume") window.open("Resume.pdf");
      if (action === "github") window.open("https://github.com/himanshusinghhls");
    });
  });
});
