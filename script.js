
document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector('[data-max-num-to-show]');
    const showMoreBtn = document.querySelector('.show-more');
    const showLessBtn = document.querySelector('.show-less');
    const maxVisible = parseInt(list.dataset.maxNumToShow, 10);
    const items = Array.from(list.querySelectorAll('li'));

    function updateView(showAll = false) {
      items.forEach((item, index) => {
        item.style.display = (showAll || index < maxVisible) ? "inline-block" : "none";
      });
      showMoreBtn.style.display = showAll ? "none" : "inline-flex";
      showLessBtn.style.display = showAll ? "inline-flex" : "none";
    }

    updateView(false);

    showMoreBtn.addEventListener("click", () => updateView(true));
    showLessBtn.addEventListener("click", () => updateView(false));
  });
  
  var swiper = new Swiper(".books-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
  });
  
  var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
  });
  
  var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
  });
  