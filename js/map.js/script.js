// Initialize Leaflet map
const map = L.map('map').setView([-25.870, 28.190], 13); // Centurion coordinates

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add marker
L.marker([-25.870, 28.190]).addTo(map)
  .bindPopup("Second Chance Pup Foundation")
  .openPopup();
