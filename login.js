document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.querySelector("input[type='email']").value;
    const password = document.querySelector("input[type='password']").value;

    fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then(res => {
        if (!res.ok) throw new Error("Login failed");
        return res.json();
      })
      .then(user => {
        const role = user.role?.toLowerCase();
        const userId = user.id;
      
        if (!userId) {
          alert("Login succeeded but userId is missing!");
          return;
        }
      
        // ✅ Store ONLY non-sensitive info
        localStorage.setItem("userId", userId);
        localStorage.setItem("userEmail", user.email);
        localStorage.setItem("userRole", role);
      
        console.log("✅ Stored userId in localStorage:", userId); // 👈 Add this
      
        // ✅ Redirect based on role
        if (role === "student") {
          localStorage.setItem("studentId", userId); // also set studentId for applications
          window.location.href = "student-dashboard.html";
        } else if (role === "coordinator") {
          window.location.href = "coordinator-dashboard.html";
        } else if (role === "company_representative") {
          window.location.href = "company-dashboard.html";
        } else {
          alert("Unknown role: " + role);
        }
      })
      .catch(err => alert("Login failed: " + err.message));
  });

  // 👁️ Password visibility toggle
  const passwordFields = document.querySelectorAll("input[type='password']");
  passwordFields.forEach(field => {
    const wrapper = document.createElement("div");
    wrapper.style.position = "relative";

    const icon = document.createElement("i");
    icon.className = "fas fa-eye";
    icon.style.position = "absolute";
    icon.style.right = "10px";
    icon.style.top = "50%";
    icon.style.transform = "translateY(-50%)";
    icon.style.cursor = "pointer";
    icon.style.color = "#888";

    const parent = field.parentNode;
    parent.replaceChild(wrapper, field);
    wrapper.appendChild(field);
    wrapper.appendChild(icon);

    icon.addEventListener("click", () => {
      const isHidden = field.type === "password";
      field.type = isHidden ? "text" : "password";
      icon.className = isHidden ? "fas fa-eye-slash" : "fas fa-eye";
    });
  });
});
