const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}


document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.querySelector(".prev-slide");
  const nextButton = document.querySelector(".next-slide");
  const slides = document.querySelectorAll(".testimonial-slide");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Add a click event listener to the button
    document.getElementById("submitButton").addEventListener("click", function (event) {
      // Prevent the default form submission behavior
      event.preventDefault();
      
      // Submit the form using JavaScript
      document.getElementById("waitlistForm").submit();
    });
  });
  

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  nextButton.addEventListener("click", nextSlide);
  prevButton.addEventListener("click", prevSlide);

  // Function to automatically change slides every 3 seconds
  function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 3000);
  }

  // Start the automatic slide show
  autoSlide();
});