// function to display applications
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
    const container = document.getElementById('featured-container'); 
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
    const container = document.getElementById('applications-container');
    container.innerHTML = '';
  
    applications.forEach(app => {
      const item = document.createElement('div');
      item.className = 'application-item';
  
      const resumeLink = app.resumeDownloadUrl || `http://localhost:8080/applications/${app.id}/resume`;
  
      item.innerHTML = `
        <h3>${app.placement?.title || "Untitled Application"}</h3>
        <p><strong>Company:</strong> ${app.placement?.company?.name || "Unknown"}</p>
        <p><strong>Student:</strong> ${app.student?.name || app.studentName || "N/A"}</p>
        <p><strong>Reg No:</strong> ${app.student?.registrationNumber || app.registrationNumber || "N/A"}</p>
        <p><strong>Course:</strong> ${app.course || "N/A"}</p>
        <p><strong>University:</strong> ${app.university || "N/A"}</p>
        <p><strong>Phone:</strong> ${app.phone || "N/A"}</p>
        <p><strong>Cover Letter:</strong> ${app.coverLetter || "N/A"}</p>
        <p><strong>Status:</strong> ${app.status}</p>
        <a class="btn" href="${resumeLink}" target="_blank">Download Resume</a>
        <div class="actions">
        <button class="btn approve-btn" data-id="${app.id}">Approve</button>
        <button class="btn reject-btn" data-id="${app.id}">Reject</button>
      </div>
      `;
  
      container.appendChild(item);
      
    // ✅ Attach event listeners right after adding to DOM
    item.querySelector(".approve-btn").addEventListener("click", () => updateStatus(app.id, "APPROVED"));
    item.querySelector(".reject-btn").addEventListener("click", () => updateStatus(app.id, "REJECTED"));
    });
  }
  
  // Optional DOM load trigger if it's on a separate page
  document.addEventListener('DOMContentLoaded', fetchApplications);
  
   // Attach event listeners to buttons
   document.querySelectorAll(".approve-btn").forEach(btn => {
    btn.addEventListener("click", () => updateStatus(btn.dataset.id, "APPROVED"));
  });

  document.querySelectorAll(".reject-btn").forEach(btn => {
    btn.addEventListener("click", () => updateStatus(btn.dataset.id, "REJECTED"));
  });

function updateStatus(applicationId, newStatus) {
  fetch(`http://localhost:8080/applications/${applicationId}/status?status=${newStatus}`, {
    method: "PATCH",
  })
    .then(res => {
      if (!res.ok) throw new Error("Status update failed");
      return res.json();
    })
    .then(() => {
      alert(`Application ${applicationId} marked as ${newStatus}`);
      fetchApplicationsForCoordinator(); // Refresh list
    })
    .catch(err => {
      alert("Error: " + err.message);
    });
}