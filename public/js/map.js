const coordinates =
    listing.geometry?.coordinates?.length === 2
        ? [listing.geometry.coordinates[1], listing.geometry.coordinates[0]]
        : [34.0259, -118.7798];

const map = L.map("map").setView(coordinates, 10);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

L.marker(coordinates)
    .addTo(map)
    .bindPopup(`${listing.location}, ${listing.country}`)
    .openPopup();