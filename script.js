
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

  function fetchPlacements() {
    fetch('http://localhost:8080/placements')
      .then(response => {
        if (!response.ok) throw new Error("Failed to fetch placements");
        return response.json();
      })
      .then(data => {
        const recentPlacements = data.sort((a, b) => b.id - a.id).slice(0, 10);
        displayPlacements(recentPlacements);
      })
      .catch(error => console.error('Error fetching placements:', error));
  }

  function displayPlacements(placements) {
    const container = document.getElementById('featured-container');
    container.innerHTML = '';

    placements.forEach(placement => {
      const item = document.createElement('div');
      item.className = 'placement-item';

      item.innerHTML = `
        <h3>${placement.title || "Untitled Placement"}</h3>
        <p><strong>Company:</strong> ${placement.company?.name || "Unknown"}</p>
        <p><strong>Description:</strong> ${placement.description || "No description available."}</p>
        <p><strong>Requirements:</strong> ${placement.requirements || "Not specified"}</p>
        <a href="#" class="btn">View Details</a>
      `;

      container.appendChild(item);
    });
  }

  document.addEventListener('DOMContentLoaded', fetchPlacements);


 // Applications section

 function fetchApplications() {
    fetch('http://localhost:8080/applications')
      .then(response => {
        if (!response.ok) throw new Error("Failed to fetch applications");
        return response.json();
      })
      .then(data => {
        const apps = getLatestApplicationsById(data);
        displayApplications(apps);
      })
      .catch(error => console.error('Error fetching applications:', error));
  }
  
  function getLatestApplicationsById(applications) {
    return applications
      .sort((a, b) => b.id - a.id)
      .slice(0, 10);
  }
  
  function displayApplications(applications) {
    const container = document.getElementById('featured-container'); // reused featured-container ID
    container.innerHTML = '';
  
    applications.forEach(app => {
      const element = document.createElement('a');
      element.href = "#";
      element.classList.add('swiper-slide', 'box');
  
      element.innerHTML = `
        <div class="content">
          <h3>${app.placement?.title || "Untitled Position"}</h3>
          <p><strong>Student:</strong> ${app.student?.name || "N/A"}</p>
          <p><strong>Company:</strong> ${app.placement?.company?.name || "Unknown"}</p>
         <p><strong>Status:</strong> ${app.status}</p>
          <a href="#" class="btn">View Application</a>
        </div>
      `;
  
      container.appendChild(element);
    });
  }
  
  document.addEventListener('DOMContentLoaded', fetchApplications);
  
  // Generic UI interactions
  var searchForm = document.querySelector('.search-form');
  
  document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
  }
  
  function loader() {
    document.querySelector('.loader-container').classList.add('active');
  }
  
  function fadeOut() {
    setTimeout(loader, 4000);
  }
  
  function fetchApplications() {
    fetch('http://localhost:8080/applications')
      .then(response => {
        if (!response.ok) throw new Error("Failed to fetch applications");
        return response.json();
      })
      .then(data => {
        const recentApplications = data.sort((a, b) => b.id - a.id).slice(0, 10);
        displayApplications(recentApplications);
      })
      .catch(error => console.error('Error fetching applications:', error));
  }
  
  function displayApplications(applications) {
    const container = document.getElementById('applications-container'); // updated ID
    container.innerHTML = '';
  
    applications.forEach(app => {
      const item = document.createElement('div');
      item.className = 'application-item'; // unique class for applications
  
      item.innerHTML = `
        <h3>${app.placement?.title || "Untitled Application"}</h3>
        <p><strong>Student:</strong> ${app.student?.name || "N/A"}</p>
        <p><strong>Reg No:</strong> ${app.student?.registrationNumber || "N/A"}</p>
        <p><strong>Company:</strong> ${app.placement?.company?.name || "Unknown"}</p>
        <p><strong>Status:</strong> ${app.status}</p>
        <a href="#" class="btn">View Application</a>
      `;
  
      container.appendChild(item);
    });
  }
  
  // Optional DOM load trigger if it's on a separate page
  document.addEventListener('DOMContentLoaded', fetchApplications);
  
  
  
  
  