// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function displayInfo(){
  alert("Form Submitted Succesfully,I will reach to you as soon as possible.");
}

let output = document.getElementById('submit');
const formToReset = document.getElementById('form');
formToReset.addEventListener('submit', (e) => {
   e.preventDefault();
   formToReset.reset();
});
