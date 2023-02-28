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
