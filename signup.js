//Theme
var icon = document.getElementById("icon");

icon.onclick = function() {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.src = "sun.png";
  }
  else {
    icon.src = "moon.png";
  }
}

document.getElementById('signupform').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting the traditional way

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirmPassword').value;

  // Simple validation
  if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
  }

  // Here you can add additional validation or save the user info

  // Redirect to home page
  window.location.href = 'home.html';
});


