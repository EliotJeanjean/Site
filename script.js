const navLinks = document.querySelectorAll('.main_nav a');
const contentDivs = document.querySelectorAll('.content');
const box = document.querySelector(".content_display")
const button = document.querySelector("button")

button.addEventListener("click", () => {
  box.classList.toggle("toggle")
})
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
