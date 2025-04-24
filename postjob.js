document.getElementById("postJobForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    // Get form fields
    const companyName = document.getElementById("name").value;
    const industry = document.getElementById("industry").value;
    const location = document.getElementById("location").value;
  
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const requirements = document.getElementById("requirements").value;
  
    // Get logged in user
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Missing user info. Please log in again.");
      return;
    }
  
    try {
      // STEP 1 — Check if company already exists for user
      const companyCheck = await fetch(`http://localhost:8080/companies/user/${userId}`);
      let companyId;
  
      if (companyCheck.ok) {
        const companyData = await companyCheck.json();
        companyId = companyData.id;
      } else {
        // STEP 2 — If not, create the company
        const companyRes = await fetch("http://localhost:8080/companies", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: companyName,
            industry: industry,
            location: location,
            user: { id: parseInt(userId) }
          })
        });
  
        if (!companyRes.ok) throw new Error("Failed to create company");
  
        const companyData = await companyRes.json();
        companyId = companyData.id;
      }
  
      // STEP 3 — Post placement
      const placementRes = await fetch("http://localhost:8080/placements", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: title,
          description: description,
          requirements: requirements,
          company: { id: parseInt(companyId) }
        })
      });
  
      if (!placementRes.ok) throw new Error("Failed to post job");
  
      alert("Job posted successfully!");
      window.location.href = "company-dashboard.html";
  
    } catch (err) {
      console.error(err);
      alert("Error: " + err.message);
    }
  });
  