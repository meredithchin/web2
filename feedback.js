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

document.getElementById('feedbackform').addEventListener('submit', function (event) {
    event.preventDefault();

    var feedbackData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        description: document.getElementById('description').value
    };

    // Save Feedback Data to Local Storage
    var feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    feedbacks.push(feedbackData);
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
    document.getElementById('feedbackform').reset();

    alert('Feedback Submitted');
});