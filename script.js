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
const button = document.getElementById("agrandir");

button.addEventListener("click", function() {
  if (button.textContent === "Agrandir") {
    button.textContent = "Réduire";
  } else {
    button.textContent = "Agrandir";
  }
});
