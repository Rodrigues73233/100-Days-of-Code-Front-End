let sideBarToggle = document.querySelector('.sidebar-toggle');
let closedBtn = document.querySelector('.close-btn')
let sideBar = document.querySelector('.sidebar');

sideBarToggle.addEventListener('click', function() {
  sideBar.classList.toggle('show-sidebar');
});

closedBtn.addEventListener('click', function() {
  sideBar.classList.remove('show-sidebar');
});