let slideIndex = 0;

function showSlides() {
  let slides = document.querySelectorAll('.slide');
  
  // Hide all slides
  slides.forEach(slide => slide.style.display = "none");
  
  // Increment slide index and wrap around
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  
  // Show the current slide
  slides[slideIndex - 1].style.display = "block";
  
  // Set a timer to change the slide every 4 seconds
  setTimeout(showSlides, 4000);
}

// Initialize the slideshow
showSlides();



// Smooth scroll for nav links
document.querySelectorAll("nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    document
      .querySelector(anchor.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

function toggleNav() {
  const navList = document.querySelector("nav ul");
  navList.classList.toggle("show");
}

function toggleEmail() {
  const email = document.getElementById("email");
  email.style.display = (email.style.display === "block") ? "none" : "block";
}

function toggleWhatsapp() {
  const whatsapp = document.getElementById("whatsapp");
  whatsapp.style.display = (whatsapp.style.display === "block") ? "none" : "block";
}

function togglePhone() {
  const phone = document.getElementById("phone");
  phone.style.display = (phone.style.display === "block") ? "none" : "block";
}

// Disable right-click globally
document.addEventListener('keydown', function(e) {
  if (
    (e.ctrlKey && (e.key === 's' || e.key === 'S')) ||           // Ctrl+S
    (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) || // Ctrl+Shift+I (DevTools)
    (e.key === 'PrintScreen')                                     // Print screen key
  ) {
    e.preventDefault();
    alert("This action is disabled.");
  }
});
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
