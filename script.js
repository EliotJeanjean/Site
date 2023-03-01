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
const buttonToggle = document.querySelector('.expand_btn');
buttonToggle.addEventListener('click', toggleClass);
function toggleClass(){
  const element = document.querySelector('.expand_btn');
  element.classList.toggle('expand_btn_clicked');
}
