// Get Hamburger menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

// Toggle navigation menu and hamburger animation
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  hamburger.classList.toggle('active');
});

document.querySelector(".plus").addEventListener("click", () => {
    let quantity = document.querySelector(".num");
    quantity.textContent = parseInt(quantity.textContent) + 1;
});

document.querySelector(".minus").addEventListener("click", () => {
    let quantity = document.querySelector(".num");
    if (parseInt(quantity.textContent) > 1) {
        quantity.textContent = parseInt(quantity.textContent) - 1;
    }
});

  // Image gallery functionality
  const mainImage = document.querySelector(".main-image");
  const thumbnails = document.querySelectorAll(".thumbnails .thumb");
  
  function changeImage(imageSrc) {
      mainImage.src = imageSrc;
      thumbnails.forEach(thumb => thumb.classList.remove("active"));
      document.querySelector(`.gallery-thumbs img[src='${imageSrc}']`).classList.add("active");
  }
  
  thumbnails.forEach(thumb => {
      thumb.addEventListener("click", function() {
          changeImage(this.src);
      });
  });
