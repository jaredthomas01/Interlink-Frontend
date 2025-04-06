const studentId = localStorage.getItem("studentId"); // or fetch from session

// Load current profile photo
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("profileImage").src = `http://localhost:8080/students/${studentId}/profile-photo`;
});

document.getElementById("photoForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const fileInput = document.getElementById("profilePhoto");
  const formData = new FormData();
  formData.append("photo", fileInput.files[0]);

  const res = await fetch(`http://localhost:8080/students/${studentId}/upload-photo`, {
    method: "POST",
    body: formData
  });

  if (res.ok) {
    alert("Photo uploaded!");
    document.getElementById("profileImage").src = `http://localhost:8080/students/${studentId}/profile-photo?${new Date().getTime()}`;
  } else {
    alert("Failed to upload photo.");
  }
});