document.querySelector(".btn").addEventListener("click", function () {
    const email = document.querySelector("input[type='text']").value;
  
    if (!email) {
      alert("Please enter a valid email.");
      return;
    }
  
    fetch("http://localhost:8080/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email })
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to send verification code");
        return res.text();
      })
      .then(msg => alert(msg))
      .catch(err => alert(err.message));
  });
  