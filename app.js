
// DOMContentLoaded - fires when DOM content is loaded
document.addEventListener("DOMContentLoaded", function(event) {
    var background = localStorage.getItem("background");  // Variable 'background' - storage item
    if (background) {
      document.documentElement.className += background; // Assigns variable
    }
  });
  
  //Function for 'Back to Top' button. Appears when user scrolls 25px from home page
  //Identify button
  mybutton = document.getElementById("scrollButton");
  
  // Display button when user scrolls down 25px from top of page
  window.onscroll = function() {
    scrollFunction()
  };
  
  // User scroll renders element visible
  function scrollFunction() {
    if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
      mybutton.style.display = "block";   //If user has scrolled 25px, display button
    } else {
      mybutton.style.display = "none";  //Otherwise display 'none'
    }
  }
  
  // When the user clicks on the button, scroll to the top of the page
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  