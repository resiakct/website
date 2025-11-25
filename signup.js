document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (confirmPassword !== password) {
    alert("Incorrect password, try again!");
    return;
  }

  const user = { email, password };
  localStorage.setItem("user", JSON.stringify(user));

  alert("Account created successfully!");
  window.location.href = "index.html"; 
});
