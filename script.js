const navLinks = document.querySelectorAll('.main_nav a');
const contentDivs = document.querySelectorAll('.content');

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
const toggleWidthBtn = document.querySelector('#toggle-width-btn');
const contentDisplay = document.querySelector('.content_display');

toggleWidthBtn.addEventListener('click', () => {
  contentDisplay.classList.toggle('content_display--full');
});
toggleWidthBtn.addEventListener('click', () => {
  if (contentDisplay.classList.contains('content_display--full')) {
    contentDisplay.classList.remove('content_display--full');
    toggleWidthBtn.textContent = 'Agrandir';
  } else {
    contentDisplay.classList.add('content_display--full');
    toggleWidthBtn.textContent = 'Réduire';
  }
});
