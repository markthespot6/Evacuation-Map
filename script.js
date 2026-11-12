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
