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
          alert("Login successful");
          window.location.href = "dashboard.html"; // redirect on success
        })
        .catch(err => alert(err.message));
    });
  });
  // Password visibility toggle (clean eye icon using FontAwesome)
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