document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeToggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  const startBtn = document.getElementById("startButton");
  const jutsuSound = document.getElementById("jutsuSound");

  startBtn.addEventListener("click", () => {
    jutsuSound.currentTime = 0;
    jutsuSound.play().catch((e) => {
      console.error("Audio play failed:", e);
    });
  });
});
