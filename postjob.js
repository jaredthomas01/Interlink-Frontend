document.getElementById("postJobForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Get field values
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const requirements = document.getElementById("requirements").value;
    const industry = document.getElementById("industry").value;
    const location = document.getElementById("location").value;
    const companyName = document.getElementById("company").value;
  
    // Get logged-in user info from localStorage (ensure this is set on login)
    const userId = localStorage.getItem("userId");
    const userEmail = localStorage.getItem("userEmail");
    const userRole = localStorage.getItem("userRole");
  
    if (!userId || !userEmail || !userRole) {
      alert("Missing user information. Please log in again.");
      return;
    }
  
    // Construct payload to match backend structure
    const jobData = {
      title: title,
      description: description,
      requirements: requirements,
      company: {
        name: companyName,
        industry: industry,
        location: location,
        user: {
          id: parseInt(userId),
          email: userEmail,
          role: userRole
        }
      }
    };
  
    // POST request to backend
    fetch("http://localhost:8080/placements", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(jobData)
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to post job");
        return res.json();
      })
      .then(data => {
        alert("Job posted successfully!");
        window.location.href = "company-dashboard.html";
      })
      .catch(err => {
        console.error("Job posting failed:", err);
        alert("Error: " + err.message);
      });
  });
  