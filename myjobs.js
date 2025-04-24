document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("my-jobs-container");
    const userId = localStorage.getItem("userId");
  
    if (!userId) {
      alert("User not logged in. Please login again.");
      return;
    }
  
    // Step 1: Get company by userId
    fetch(`http://localhost:8080/companies/user/${userId}`)
      .then(response => {
        if (!response.ok) throw new Error("Failed to fetch company info");
        return response.json();
      })
      .then(company => {
        const companyId = company.id;
  
        // Step 2: Get all placements and filter
        return fetch('http://localhost:8080/placements')
          .then(response => {
            if (!response.ok) throw new Error("Failed to fetch placements");
            return response.json();
          })
          .then(placements => {
            const filtered = placements.filter(p => p.company?.id === companyId);
            displayMyJobs(filtered);
          });
      })
      .catch(error => {
        console.error("Error:", error);
        container.innerHTML = `<p style="color:red;">Failed to load jobs: ${error.message}</p>`;
      });
  });
  
  // Step 3: Render jobs with View Details toggle
  function displayMyJobs(jobs) {
    const container = document.getElementById("my-jobs-container");
    container.innerHTML = '';
  
    if (jobs.length === 0) {
      container.innerHTML = "<p>No jobs posted yet.</p>";
      return;
    }
  
    jobs.forEach((job, index) => {
      const item = document.createElement("div");
      item.className = "job-item";
  
      item.innerHTML = `
        <h3>${job.title || "Untitled Job"}</h3>
        <p><strong>Company:</strong> ${job.company?.name || "Unknown"}</p>
        <p><strong>Description:</strong> ${job.description || "N/A"}</p>
        <p><strong>Requirements:</strong> ${job.requirements || "Not specified"}</p>
  
        <div id="details-${index}" class="details-collapse" style="display: none; margin-top: 1rem;">
          <p><strong>Industry:</strong> ${job.company?.industry || "N/A"}</p>
          <p><strong>Location:</strong> ${job.company?.location || "N/A"}</p>
        </div>
  
        <button class="btn details-toggle" data-target="details-${index}">View Details</button>
        <button class="btn edit-btn" data-id="${job.id}">Edit</button>
      <button class="btn delete-btn" data-id="${job.id}">Delete</button>
      `;
  
      container.appendChild(item);
    });
  
    // Add toggle behavior
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
  // Delete functionality
  document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', async function () {
      const jobId = this.getAttribute('data-id');
      if (confirm("Are you sure you want to delete this job?")) {
        try {
          const res = await fetch(`http://localhost:8080/placements/${jobId}`, {
            method: 'DELETE',
          });
          if (!res.ok) throw new Error("Failed to delete job");
          alert("Job deleted successfully!");
          location.reload(); // or re-fetch jobs
        } catch (err) {
          alert("Error deleting job: " + err.message);
        }
      }
    });
  });

  // Edit functionality
  document.querySelectorAll('.edit-btn').forEach(button => {
    button.addEventListener('click', function () {
      const jobId = this.getAttribute('data-id');
      window.location.href = `editjob.html?id=${jobId}`;
    });
  });
}