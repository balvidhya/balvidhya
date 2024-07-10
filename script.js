//Image SLider//
var swiper = new Swiper(".mySwiper", {
    autoplay: {
    delay: 3000, // Autoplay delay in milliseconds (5 seconds here)
    disableOnInteraction: false, // Enable/disable autoplay on user interaction
   },
    pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
   },
  });
  //About-Read more Button//
  function toggleReadMore() {
  var moreText = document.querySelector('.read-more-content');
  var btnText = document.querySelector('.read-more-btn');

  if (moreText.style.display === 'none') {
  moreText.style.display = 'block';
  btnText.textContent = 'Read Less';
  } else {
  moreText.style.display = 'none';
  btnText.textContent = 'Read More';
  }
  }
  //Popup Admission//
  document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      document.getElementById('sliding-content').style.display = 'block';
    }, 5000);
  });

  
  function closeSlidingContent() {
    document.getElementById('sliding-content').style.display = 'none';
  }
  //Message from Teachers//
  const messages = document.querySelectorAll('.message');
    let currentSlide = 0;
    const totalSlides = messages.length;

    function showSlide(index) {
        messages.forEach((message) => {
            message.classList.remove('active');
        });
        messages[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 2000);
    //Admisson Section Date//
    const yearSpan = document.getElementById('year');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
    //Admission Popup Form//
    document.addEventListener("DOMContentLoaded", function() {
        const openFormBtn1 = document.getElementById("openFormBtn1");
        const openFormBtn2 = document.getElementById("openFormBtn2");
        const openFormBtn3 = document.getElementById("openFormBtn3");
        const popupForm = document.getElementById("popupForm");
        const closeBtn = document.querySelector(".close-btn");

        const openPopup = () => {
            popupForm.style.display = "flex";
        };

        openFormBtn1.addEventListener("click", openPopup);
        openFormBtn2.addEventListener("click", openPopup);
        openFormBtn3.addEventListener("click", openPopup);

        closeBtn.addEventListener("click", function() {
            popupForm.style.display = "none";
        });

        window.addEventListener("click", function(e) {
            if (e.target == popupForm) {
                popupForm.style.display = "none";
            }
        });
    });