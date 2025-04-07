document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const email = document.querySelector("input[type='email']").value;
    const password = document.querySelector("input[placeholder='Enter your password']").value;
    const confirmPassword = document.querySelector("input[placeholder='Confirm your password']").value;
    const role = document.querySelector("select").value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
  
    fetch("http://localhost:8080/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role }),
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Signup failed");
        }
        return res.json(); // if your backend returns user JSON
      })
      .then(() => {
        // ✅ User-friendly message
        alert("✅ You have signed up successfully!");
        window.location.href = "login.html";
      })
      .catch(err => {
        alert(" Signup failed: " + err.message);
      });
  });
  
  
  // 👁️ Password visibility toggle (clean eye icon using FontAwesome)
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
  