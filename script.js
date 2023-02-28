const navLinks = document.querySelectorAll('.main_nav a');
const contentDivs = document.querySelectorAll('.content');
const button = document.getElementById('agrandir');
const contentDisplay = document.getElementById('content_display');

navLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const divId = this.getAttribute('data-div');
    contentDivs.forEach(function(div) {
      div.classList.remove('active');
    });
    const activeDiv = document.getElementById(divId);
    activeDiv.classList.add('active');
  });
});

button.addEventListener('click', function() {
  if (button.classList.contains('agrandir')) {
    contentDisplay.style.width = '80%';
    contentDisplay.style.transition = 'width 0.5s ease-out';
    button.innerHTML = 'Réduire';
    button.classList.remove('agrandir');
  } else {
    contentDisplay.style.width = '50%';
    contentDisplay.style.transition = 'width 0.5s ease-out';
    button.innerHTML = 'Agrandir';
    button.classList.add('agrandir');
  }
});
