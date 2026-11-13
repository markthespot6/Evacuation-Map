// Initialize the map centered on Manuel L. Quezon High School, Brgy. 185, Caloocan
const map = L.map('map').setView([14.769397, 121.076768], 17);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker for Manuel L. Quezon High School
const schoolMarker = L.marker([14.769397, 121.076768]).addTo(map);
schoolMarker.bindPopup("<b>Manuel L. Quezon High School</b><br>Barangay 185, Caloocan City").openPopup();

// Placeholder for Dijkstra's Algorithm implementation
function calculateEvacuationRoute() {
    // Dito natin ilalagay ang nodes, edges, at Dijkstra calculation logic
    console.log("Dijkstra routing initialized.");
}

calculateEvacuationRoute();

