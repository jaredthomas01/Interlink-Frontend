
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
// function to display placements
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
        <a href="view-placement.html?id=${placement.id}" class="btn btn-details">View Details</a>
        <a href="apply.html?placementId=${placement.id}" class="btn btn-apply">Apply Now</a>
      `;

      container.appendChild(item);
    });
  }

  document.addEventListener('DOMContentLoaded', fetchPlacements);

  function displayPlacements(placements) {
    const container = document.getElementById('featured-container');
    container.innerHTML = '';
  
    placements.forEach((placement, index) => {
      const item = document.createElement('div');
      item.className = 'placement-item';
  
      item.innerHTML = `
        <h3>${placement.title || "Untitled Placement"}</h3>
        <p><strong>Company:</strong> ${placement.company?.name || "Unknown"}</p>
        <p><strong>Description:</strong> ${placement.description || "No description available."}</p>
        <p><strong>Requirements:</strong> ${placement.requirements || "Not specified"}</p>
  
  
        <div id="details-${index}" class="details-collapse" style="display: none; margin-top: 1rem;">
          <p><strong>Industry:</strong> ${placement.company?.industry || "N/A"}</p>
          <p><strong>Location:</strong> ${placement.company?.location || "N/A"}</p>
        </div>
        <button class="btn details-toggle" data-target="details-${index}">View Details</button>
        <a href="apply.html?placementId=${placement.id}" class="btn apply-btn">Apply Now</a>
      `;
  
      container.appendChild(item);
    });
  
    // Add event listeners for toggling details
    document.querySelectorAll('.details-toggle').forEach(button => {
      button.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const content = document.getElementById(targetId);
        if (content.style.display === 'none') {
          content.style.display = 'block';
          this.textContent = 'Hide Details';
        } else {
          content.style.display = 'none';
          this.textContent = 'View Details';
        }
      });
    });
  }

  function redirectToApply(placementId) {
    localStorage.setItem("placementId", placementId);
    window.location.href = "apply.html";
  }

  document.addEventListener("DOMContentLoaded", () => {
    const applyForm = document.getElementById("applicationForm");
  
    applyForm.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      const fullName = document.getElementById("name").value;
      const regNo = document.getElementById("registrationNumber").value;
      const course = document.getElementById("course").value;
      const university = document.getElementById("university").value;
      const phone = document.getElementById("phone").value;
      const coverLetter = document.getElementById("coverLetter").value;
      const resumeFile = document.getElementById("resume").files[0];
  
      // Get user and placement info
      const userId = localStorage.getItem("userId");
      const placementId = localStorage.getItem("placementId") || new URLSearchParams(window.location.search).get("placementId");
  
      if (!userId || !placementId) {
        alert("Missing user or placement info. Please login or select a placement again.");
        return;
      }
  
      try {
        // 1. Create student
        const studentRes = await fetch("http://localhost:8080/students", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: fullName,
            registrationNumber: regNo,
            user: { id: parseInt(userId) }
          })
        });
  
        if (!studentRes.ok) throw new Error("Failed to create student");
  
        const studentData = await studentRes.json();
        const studentId = studentData.id;
  
        // 2. Submit application
        const formData = new FormData();
        formData.append("studentId", studentId);
        formData.append("placementId", placementId);
        formData.append("course", course);
        formData.append("university", university);
        formData.append("phone", phone);
        formData.append("coverLetter", coverLetter);
        formData.append("resume", resumeFile);
  
        const appRes = await fetch("http://localhost:8080/applications", {
          method: "POST",
          body: formData,
        });
  
        if (!appRes.ok) throw new Error("Failed to submit application");
  
        alert("Application submitted successfully!");
        window.location.href = "student-dashboard.html";
  
      } catch (err) {
        console.error(err);
        alert("Error: " + err.message);
      }
    });
  });
  
  
