
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
  
  // Placements section

  document.addEventListener('DOMContentLoaded', fetchPlacements);

  function fetchPlacements() {
    fetch('http://localhost:8080/placements')
      .then(response => {
        if (!response.ok) throw new Error("Failed to fetch placements");
        return response.json();
      })
      .then(displayPlacements)
      .catch(err => {
        document.getElementById('placements-container').innerHTML = "<p style='color:red;'>Failed to load placements.</p>";
        console.error(err);
      });
  }

  function displayPlacements(placements) {
    const container = document.getElementById('placements-container');
    container.innerHTML = '';

    placements.forEach(placement => {
      const div = document.createElement('div');
      div.className = 'placement-card';
      div.innerHTML = `
        <h3>${placement.title || 'Untitled Placement'}</h3>
        <p><strong>Company:</strong> ${placement.company?.name || 'Unknown'}</p>
        <p><strong>Description:</strong> ${placement.description || 'No description available.'}</p>
        <p><strong>Requirements:</strong> ${placement.requirements || 'Not specified'}</p>
        <a href="#" class="btn">View Details</a>
      `;
      container.appendChild(div);
    });
  }
 
  
  
  
  
  