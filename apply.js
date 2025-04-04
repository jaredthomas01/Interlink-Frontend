
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

document.addEventListener("DOMContentLoaded", () => {
    const applyForm = document.getElementById("applicationForm");
    const placementId = new URLSearchParams(window.location.search).get("placementId");
    const studentId = localStorage.getItem("studentId");
  
    if (!applyForm) return;
  
    applyForm.addEventListener("submit", async (e) => {
      e.preventDefault();
  
      if (!studentId || !placementId) {
        alert("Missing student or placement information.");
        return;
      }
  
      const fullName = document.getElementById("fullName").value;
      const regNumber = document.getElementById("regNumber").value;
      const course = document.getElementById("course").value;
      const university = document.getElementById("university").value;
      const phone = document.getElementById("phone").value;
      const coverLetter = document.getElementById("coverLetter").value;
      const resumeFile = document.getElementById("resume").files[0];
  
      // Check if already applied
      try {
        const checkRes = await fetch(`http://localhost:8080/applications/check?studentId=${studentId}&placementId=${placementId}`);
        const alreadyApplied = await checkRes.json();
        if (alreadyApplied) {
          alert("You have already applied for this placement.");
          return;
        }
      } catch (err) {
        alert("Error checking application status: " + err.message);
        return;
      }
  
      // Prepare and send application
      const formData = new FormData();
      formData.append("studentId", studentId);
      formData.append("placementId", placementId);
      formData.append("fullName", fullName);
      formData.append("regNo", regNumber);
      formData.append("course", course);
      formData.append("university", university);
      formData.append("phone", phone);
      formData.append("coverLetter", coverLetter);
      formData.append("resume", resumeFile);
  
      try {
        const res = await fetch("http://localhost:8080/applications", {
          method: "POST",
          body: formData,
        });
  
        if (!res.ok) throw new Error("Application failed");
  
        alert("Application submitted successfully!");
        window.location.href = "myapplications.html";
      } catch (err) {
        alert("Error: " + err.message);
      }
    });
  });
  