const modal = document.querySelector('.modal-overlay');
const modalBtn = document.querySelector('.modal-btn');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', function() {
  modal.classList.toggle('open-modal');
});

closeBtn.addEventListener('click', function() {
  modal.classList.remove('open-modal');
});