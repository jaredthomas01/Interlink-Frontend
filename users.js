function loadUsers() {
    fetch("http://localhost:8080/users")
      .then(response => response.json())
      .then(users => {
        const container = document.getElementById("users-container");
        container.innerHTML = "";
        users.forEach(user => {
          const div = document.createElement("div");
          div.className = "user-item";
          div.innerHTML = `
            <h3>${user.email}</h3>
            <p><strong>Role:</strong> ${user.role}</p>
            <p><strong>User ID:</strong> ${user.id}</p>
            <div class="btn-group">
              <a href="edituser.html?id=${user.id}&email=${encodeURIComponent(user.email)}&role=${user.role} style ="font-size: 14px"">
  <button>Edit</button>
</a>
              <button onclick="deleteUser(${user.id})">Delete</button>
            </div>
          `;
          container.appendChild(div);
        });
      });
  }

  function submitUser() {
    const id = document.getElementById("user-id").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    const method = id ? "PUT" : "POST";
    const url = id ? `http://localhost:8080/users/${id}` : "http://localhost:8080/users";

    fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, role })
    })
      .then(response => {
        if (!response.ok) throw new Error("Save failed");
        return response.json();
      })
      .then(() => {
        document.getElementById("user-id").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        loadUsers();
      })
      .catch(err => alert(err.message));
  }

  function deleteUser(id) {
    if (!confirm("Are you sure you want to delete this user?")) return;

    fetch(`http://localhost:8080/users/${id}`, { method: "DELETE" })
      .then(response => {
        if (!response.ok) throw new Error("Delete failed");
        loadUsers();
      })
      .catch(err => alert(err.message));
  }

  document.addEventListener("DOMContentLoaded", loadUsers);