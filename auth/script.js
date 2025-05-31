const form = document.getElementById('joinForm');
const formContainer = document.getElementById('formContainer');
const confirmationCard = document.getElementById('confirmationCard');
const soundEffect = document.getElementById('soundEffect');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  formContainer.style.animation = 'dropIn 0.5s reverse forwards';
  soundEffect.play(); // Play sound when form is submitted

  setTimeout(() => {
    formContainer.style.display = 'none';
    confirmationCard.classList.add('show');
  }, 500);
});