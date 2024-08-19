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

// Example of using localStorage
document.addEventListener('DOMContentLoaded', () => {
    const userVisited = localStorage.getItem('visited');

    if (!userVisited) {
        alert('Welcome to Travel Tips! Enjoy your stay.');
        localStorage.setItem('visited', 'true');
    }
});

// Example of using sessionStorage
document.querySelector('#navbarNav .nav-link').addEventListener('click', (e) => {
    sessionStorage.setItem('lastPageVisited', e.target.innerText);
});

// Example of using cookies
function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}

if (!getCookie('firstVisit')) {
    setCookie('firstVisit', 'true', 7);
    alert('Thank you for visiting Travel Tips for the first time!');
}
