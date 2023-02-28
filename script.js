const navLinks = document.querySelectorAll('.main_nav a');
const contentDivs = document.querySelectorAll('.content');
const button = document.querySelector("agrandir");

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
const box = document.querySelector(".content_display");
var switch = 0, element = document.getElementById("agrandir"), img1, img2;
element.onclick = function(){

            if (switch == 0){
                element.style.backgroundImage(img1);
                switch = 1;
                }
            else {
                        element.style.backgroundImage(img2);
                switch = 0
                }
                }
