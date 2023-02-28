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
var button = document.querySelector("#width_button");
const button = document.getElementById('toggle_button');

function toggleWidth() {
  if (content_display.classList.contains('content_display_small')) {
    content_display.classList.remove('content_display_small');
    content_display.classList.add('content_display_large');
    button.innerHTML = "Reduce Width";
  } else {
    content_display.classList.remove('content_display_large');
    content_display.classList.add('content_display_small');
    button.innerHTML = "Enlarge Width";
  }
}

button.addEventListener('click', function() {
  toggleWidth();
});

