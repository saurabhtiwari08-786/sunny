function showSection(id) {
  const target = document.getElementById(id);
  if (!target) return;

  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.remove("active");
  });

  target.classList.add("active");
  burst();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function heart() {
  const container = document.getElementById("hearts");
  if (!container) return;

  const heartElement = document.createElement("div");
  heartElement.className = "float-heart";
  heartElement.textContent = Math.random() > 0.25 ? "♥" : "♡";
  heartElement.style.left = `${Math.random() * 100}vw`;
  heartElement.style.fontSize = `${14 + Math.random() * 24}px`;
  heartElement.style.animationDuration = `${4 + Math.random() * 4}s`;

  container.appendChild(heartElement);
  window.setTimeout(() => heartElement.remove(), 8500);
}

function burst() {
  for (let i = 0; i < 30; i += 1) {
    window.setTimeout(heart, i * 55);
  }
}

window.setInterval(() => {
  if (Math.random() > 0.3) heart();
}, 1000);

burst();
