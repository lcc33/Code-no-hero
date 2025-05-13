document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.getElementById("darkModeToggle");
  const startButton = document.getElementById("startLink");
  const jutsuSound = document.getElementById("jutsuSound");

  
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      darkModeToggle.textContent = "🌙 Dark Mode ";
    } else {
      darkModeToggle.textContent = "🌞 Light Mode";
    }
  });

  
  if (startButton && jutsuSound && darkModeToggle) {
    startButton &&
      darkModeToggle.addEventListener("click", (e) => {
        jutsuSound.currentTime = 0;
        jutsuSound.play().catch((err) => {
          console.error("Sound failed to play:", err);
        });
      });
  }
});
