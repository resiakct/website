document.getElementById("login-form").addEventListener("submit", function(event) {
      event.preventDefault();
      
      const savedUser = JSON.parse(localStorage.getItem("user"));
      
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      
      if (!savedUser) {
        alert("No account found. Please sign up first.");
        return;
      }
      
      if (email === savedUser.email && password === savedUser.password) {
        alert("Login successful!");
        window.location.href = "homepage.html";
      } else {
        alert("Incorrect email or password.");
      }
    });
