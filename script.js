// 1. I-set ang starting coordinates ng mapa (Halimbawa: Metro Manila / Caloocan area)
// Format: [Latitude, Longitude], Zoom Level
const map = L.map('map').setView([14.7566, 121.0450], 14);

// 2. Maglagay ng OpenStreetMap base layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// 3. Sample GIS Data gamit ang GeoJSON format
// (Sa susunod, pwede nating kunin ito direktang galing sa database/API mo)
const gisData = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Point A - Main Hub",
                "description": "Starting location o evacuation zone."
            },
            "geometry": {
                "type": "Point",
                "coordinates": [121.0450, 14.7566] // Tandaan: [Longitude, Latitude] sa GeoJSON!
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Point B - Secondary Station",
                "description": "Target destination o checkpoint."
            },
            "geometry": {
                "type": "Point",
                "coordinates": [121.0510, 14.7600]
            }
        }
    ]
};

// 4. I-load ang GeoJSON data sa mapa at lagyan ng popup kapag pinindot
L.geoJSON(gisData, {
    onEachFeature: function (feature, layer) {
        if (feature.properties && feature.properties.name) {
            layer.bindPopup(
                `<strong>${feature.properties.name}</strong><br>${feature.properties.description}`
            );
        }
    }
}).addTo(map);

// 5. Bonus: Kunin ang coordinates kapag nag-click sa mapa (makakatulong sa pag-add ng pins)
map.on('click', function(e) {
    console.log("Clicked Coordinates: Lat " + e.latlng.lat + ", Lng " + e.latlng.lng);
});
// Initialize the map centered on Manuel L. Quezon High School, Brgy. 185, Caloocan
const map = L.map('map').setView([14.7452, 121.0335], 17);

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker for Manuel L. Quezon High School
const schoolMarker = L.marker([14.7452, 121.0335]).addTo(map);
schoolMarker.bindPopup("<b>Manuel L. Quezon High School</b><br>Barangay 185, Caloocan City").openPopup();

// Placeholder for Dijkstra's Algorithm implementation
function calculateEvacuationRoute() {
    // Dito natin ilalagay ang nodes, edges, at Dijkstra calculation logic
    console.log("Dijkstra routing initialized.");
}

calculateEvacuationRoute();
