// Wait for the page to fully load
window.addEventListener("load", function () {
  // Get the preloader element
  var preloader = document.querySelector(".preloader");

  // Hide the preloader
  preloader.style.display = "none";
});

const themeToggler = document.querySelector(".theme-toggler");
  themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
  })

  const toTop = document.querySelector(".to-top");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
    }
    else{
      toTop.classList.remove("active");
    }
  })

  var loader = document.getElementById("preloader");
      window.addEventListener("load", function () {
        loader.style.display = "none";
      });


      ScrollReveal({
        reset: true,
        distance: "60px",
        duration: 2500,
        delay: 400,
      });

      ScrollReveal().reveal("#carded", {
        delay: 100,
        origin: "left",
      });
      ScrollReveal().reveal(".counter-wrapper", {
        delay: 100,
        origin: "left",
      });
      ScrollReveal().reveal("#heading, #texted, #goals, #stu", {
        delay: 200,
        origin: "bottom",
        interval: 100,
      });
      ScrollReveal().reveal(".box-container, .marquee-container, .quote-container, .events-container h1", {
        delay: 600,
        origin: "bottom",
        interval: 100,
      });
      ScrollReveal().reveal(".image-container, .card", {
        delay: 800,
        origin: "bottom",
        interval: 100,
      });


      const counts = document.querySelectorAll('.count')
const speed = 15

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 100)
        }else{
            counter.innerText = target
        }
    }
    upDate()
})

function expandImage(image) {
  const enlargedImage = document.getElementById('enlarged-image');
  const enlargedImageContainer = document.getElementById('enlarged-image-container');

  enlargedImage.src = image.src;
  enlargedImage.alt = image.alt;
  enlargedImageContainer.style.display = 'flex';

  enlargedImageContainer.onclick = function () {
    enlargedImageContainer.style.display = 'none';
  };
}

document.querySelector('.popup-image span').onclick = () => {
document.querySelector('.popup-image').style.display = 'none';
}




    