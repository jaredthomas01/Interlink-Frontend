document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("applications-container");

  try {
    const res = await fetch("http://localhost:8080/applications/approved");
    if (!res.ok) throw new Error("Failed to fetch approved applications");

    const applications = await res.json();

    if (!applications || applications.length === 0) {
      container.innerHTML = "<p>No shortlisted students yet.</p>";
      return;
    }

    applications.forEach(app => {
      const item = document.createElement("div");
      item.className = "application-item";

      const studentName = app.studentName || "Unnamed Student";
const regNumber = app.registrationNumber || "N/A";
      const course = app.course || "N/A";
      const university = app.university || "N/A";
      const phone = app.phone || "N/A";
      const status = app.status || "PENDING";
      const resumeLink = app.resumeDownloadUrl || `http://localhost:8080/applications/${app.id}/resume`;

      item.innerHTML = `
        <h3>${studentName}</h3>
        <p><strong>Reg No:</strong> ${regNumber}</p>
        <p><strong>Course:</strong> ${course}</p>
        <p><strong>University:</strong> ${university}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Status:</strong> ${status}</p>
        <a class="btn" href="${resumeLink}" target="_blank">Download Resume</a>
      `;

      container.appendChild(item);
    });

  } catch (err) {
    console.error("Error loading approved applications:", err);
    container.innerHTML = "<p>Failed to load shortlisted students.</p>";
  }
});
