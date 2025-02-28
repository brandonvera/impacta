document.addEventListener('DOMContentLoaded', function() {
    const heroSwiper = new Swiper('.hero-swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle) {
      menuToggle.addEventListener('click', function() {
        mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
      });
    }

    const animateElements = document.querySelectorAll('.animate-fade-in, .animate-slide-up');
    
    function checkIfInView() {
      animateElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    }

    animateElements.forEach(element => {
      element.style.opacity = '0';
      if (element.classList.contains('animate-slide-up')) {
        element.style.transform = 'translateY(50px)';
      }
      element.style.transition = 'opacity 1s ease, transform 1s ease';
    });

    window.addEventListener('load', checkIfInView);
    window.addEventListener('scroll', checkIfInView);
  });