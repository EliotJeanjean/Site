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
function changeButtonState() {
  var button = document.getElementById("agrandir");
  var content_display = document.getElementById("content_display");

  if (button.classList.contains("agrandir-state")) {
    content_display.style.width = "90%";
    button.innerHTML = "Réduire <i class='fas fa-compress'></i>";
    button.classList.remove("agrandir-state");
    button.classList.add("reduire-state");
  } else {
    content_display.style.width = "50%";
    button.innerHTML = "Agrandir <i class='fas fa-expand'></i>";
    button.classList.remove("reduire-state");
    button.classList.add("agrandir-state");
  }
}
