document.addEventListener('DOMContentLoaded', function () {
    const productTrack = document.getElementById("productTrack");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
  
    let currentSlide = 0;
    const productCards = document.querySelectorAll(".product-card");
    const productsPerSlide = 4; 
    const totalSlides = Math.ceil(productCards.length / productsPerSlide); 
  
    
    productTrack.style.width = `${totalSlides * 100}%`;
  
    function updateSlider() {
        const shift = (100 / totalSlides) * currentSlide;
        productTrack.style.transform = `translateX(-${shift}%)`;
      }
      
  
   
    prevBtn.addEventListener("click", function () {
      if (currentSlide > 0) {
        currentSlide--;
        updateSlider();
      }
    });
  

    nextBtn.addEventListener("click", function () {
      if (currentSlide < totalSlides - 1) {
        currentSlide++;
        updateSlider();
      }
    });
  });
  
