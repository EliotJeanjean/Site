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
var switch = 0, element = document.getElementById("agrandir"), "url('cross.png')", "url('next.png')";
element.onclick = function(){

            if (switch == 0){
                element.style.backgroundImage("url('cross.png')");
                switch = 1;
                }
            else {
                        element.style.backgroundImage("url('next.png')");
                switch = 0
                }
                }
