const navLinks = document.querySelectorAll('.main_nav a');
const contentDivs = document.querySelectorAll('.content');
const button = document.getElementById("agrandir");
const box = document.querySelector(".content_display");

button.addEventListener("click", () => {
  box.classList.toggle("toggle");
});
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
document.addEventListener("DOMContentLoaded", function() {
  var button = document.querySelector(".expand_button");
function changeBackground() {
  const button = document.querySelector('.expand_btn');
  button.classList.add('clicked');
}
  button.addEventListener("click", chngebackground);
});

