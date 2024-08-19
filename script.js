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

// Initialize the Leaflet map
var map = L.map('map').setView([3.1390, 101.6869], 5); // Coordinates for Kuala Lumpur
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Function to open blog modals
function openBlogModal(modalId) {
    $('#' + modalId).modal('show');
}

document.addEventListener("DOMContentLoaded", function() {
    const apiKey = 'gJv6BSlZQ7p5CAq8RSUkIiizaoMDV8nnaimc8k7TKqbP9zNw6yEVKHfZ';
    const stateDropdown = document.getElementById('state-dropdown');
    const imageContainer = document.getElementById('state-image-container');
    const descriptionContainer = document.getElementById('description-container');

    function fetchImages(state) {
        fetch(`https://api.pexels.com/v1/search?query=${state}&per_page=1`, {
            headers: {
                Authorization: apiKey
            }
        })
        .then(response => response.json())
        .then(data => {
            const photo = data.photos[0];
            if (photo) {
                imageContainer.innerHTML = `<img src="${photo.src.large}" alt="${state} Image" class="img-fluid">`;
            } else {
                imageContainer.innerHTML = `<p>No image found for ${state}.</p>`;
            }
        })
        .catch(error => {
            console.error('Error fetching image:', error);
            imageContainer.innerHTML = `<p>Error fetching image for ${state}.</p>`;
        });
    }

    const stateDescriptions = {
        "Johor": "Johor is known for its beautiful beaches, including Desaru and the tropical islands of Pulau Rawa and Pulau Sibu.",
        "Kedah": "Kedah is home to Langkawi, an archipelago of 99 islands with stunning beaches, clear waters, and duty-free shopping.",
        "Kelantan": "Kelantan offers a rich cultural experience with traditional Malay arts, crafts, and the serene beaches of Tok Bali.",
        "Malacca": "Malacca is a UNESCO World Heritage site, renowned for its historical landmarks, museums, and vibrant cultural scene.",
        "Negeri Sembilan": "Negeri Sembilan is famous for its unique Minangkabau architecture and the beautiful Port Dickson beach.",
        "Pahang": "Pahang is known for its lush rainforests, including Taman Negara, and the cool highlands of Cameron Highlands.",
        "Penang": "Penang is a food haven, with its capital, George Town, being a UNESCO World Heritage site known for its street art and cuisine.",
        "Perak": "Perak is home to the historic town of Ipoh, the royal town of Kuala Kangsar, and the famous Pangkor Island.",
        "Perlis": "Perlis, the smallest state in Malaysia, is known for its serene countryside, limestone hills, and the Wang Kelian State Park.",
        "Selangor": "Selangor is the most developed state in Malaysia, home to the vibrant city of Shah Alam and the famous Batu Caves.",
        "Terengganu": "Terengganu is known for its traditional boat-building, beautiful islands like Redang and Perhentian, and rich Malay culture.",
        "Sabah": "Sabah is home to Mount Kinabalu, the highest peak in Southeast Asia, and is known for its diverse wildlife and marine parks.",
        "Sarawak": "Sarawak offers a unique blend of indigenous culture, rainforests, and the famous Mulu Caves, a UNESCO World Heritage site.",
        "WP Kuala Lumpur": "Kuala Lumpur, the capital city of Malaysia, is known for its iconic Petronas Twin Towers, vibrant markets, and bustling nightlife.",
        "WP Labuan": "Labuan is an offshore financial center and duty-free island known for its wreck diving sites and serene beaches.",
        "WP Putrajaya": "Putrajaya is the administrative capital of Malaysia, known for its impressive architecture, parks, and man-made lakes."
    };

    stateDropdown.addEventListener('change', function() {
        const state = stateDropdown.value;
        fetchImages(state);
        if (stateDescriptions[state]) {
            descriptionContainer.innerHTML = `<p>${stateDescriptions[state]}</p>`;
        } else {
            descriptionContainer.innerHTML = `<p>No description available for ${state}.</p>`;
        }
    });
});