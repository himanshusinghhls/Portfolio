var typed = new Typed("#element", {
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

function createRipple(x, y) {
  const ripple = document.createElement("div");
  ripple.classList.add("ripple-effect");
  ripple.style.left = `${x}px`;
  ripple.style.top = `${y}px`;
  document.body.appendChild(ripple);

  ripple.addEventListener("animationend", () => ripple.remove());
}

let lastMoveTime = 0;
const moveThrottleMs = 40; // create ripple max every 40ms on mousemove

document.body.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastMoveTime > moveThrottleMs) {
    createRipple(e.clientX, e.clientY);
    lastMoveTime = now;
  }
});

document.body.addEventListener("click", (e) => {
  createRipple(e.clientX, e.clientY);
});
