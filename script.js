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
window.onload = function() {
  var button = document.getElementById("toggleButton");
  var contentDisplay = document.querySelector(".content_display");

  button.onclick = function() {
    contentDisplay.classList.toggle("expanded");

    if (contentDisplay.classList.contains("expanded")) {
      document.getElementById("toggleButtonIcon").className = "fas fa-compress-alt";
      document.getElementById("toggleButton").innerHTML = "Full Width";
    } else {
      document.getElementById("toggleButtonIcon").className = "fas fa-expand-alt";
      document.getElementById("toggleButton").innerHTML = "Small Width";
    }
  };
};
