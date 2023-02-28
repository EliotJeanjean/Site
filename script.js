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
let button = document.getElementById("agrandir");
let content = document.getElementById("content_display");

button.addEventListener("click", function() {
  if (button.classList.contains("agrandir")) {
    content.style.width = "80%";
    content.style.transition = "width 0.5s ease-out";
    button.innerHTML = "Réduire";
    button.classList.remove("agrandir");
  } else {
    content.style.width = "50%";
    content.style.transition = "width 0.5s ease-out";
    button.innerHTML = "Agrandir";
    button.classList.add("agrandir");
  }
});
