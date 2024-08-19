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

document.addEventListener('DOMContentLoaded', loadSavedPlans);

document.getElementById('trip-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const destination = document.getElementById('destination').value;
    const dates = document.getElementById('dates').value;
    const travelers = document.getElementById('travelers').value;
    const activities = document.getElementById('activities').value;
    const accommodation = document.getElementById('accommodation').value;

    const trip = {
        destination,
        dates,
        travelers,
        activities,
        accommodation
    };

    // Save the trip to local storage
    saveTrip(trip);

    // Add the trip to the table
    addTripToTable(trip);

    document.getElementById('trip-form').reset();
});

function saveTrip(trip) {
    
    let trips = JSON.parse(localStorage.getItem('trips')) || [];
    
    
    trips.push(trip);
    
   
    localStorage.setItem('trips', JSON.stringify(trips));
}

function loadSavedPlans() {
    // Get saved trips from local storage
    const trips = JSON.parse(localStorage.getItem('trips')) || [];

    trips.forEach(addTripToTable);
}

function addTripToTable(trip) {
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${trip.destination}</td>
        <td>${trip.dates}</td>
        <td>${trip.travelers}</td>
        <td>${trip.activities}</td>
        <td>${trip.accommodation}</td>
    `;
    document.getElementById('summary-table-body').appendChild(newRow);

    // Show the table if it's hidden
    document.getElementById('summary-table').style.display = 'table';
}