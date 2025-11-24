document.getElementById("signupForm").addEventListener("submit", function(event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      const user = { email, password };

      localStorage.setItem("user", JSON.stringify(user));

      if (confirmPassword === password) {
        alert("Account created successfully!");
      window.location.href = "login.html";
      } else {
        alert("Please enter the right password");
      }
    });
