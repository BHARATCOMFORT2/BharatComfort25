// Define data
const locations = {
  Patna: [
    { name: "Hotel Maurya", type: "Hotel", address: "Fraser Road, Patna" },
    { name: "Bansi Vihar", type: "Restaurant", address: "Kankarbagh, Patna" }
  ],
  Delhi: [
    { name: "The Imperial", type: "Hotel", address: "Connaught Place, Delhi" },
    { name: "Karim's", type: "Restaurant", address: "Jama Masjid, Delhi" }
  ]
};

// Load elements
const locationList = document.getElementById("locationList");
const listingContainer = document.getElementById("listingContainer");

// Create location buttons
Object.keys(locations).forEach(location => {
  const li = document.createElement("li");
  li.textContent = location;
  li.addEventListener("click", () => showListings(location));
  locationList.appendChild(li);
});

// Show data when location clicked
function showListings(location) {
  const entries = locations[location];
  listingContainer.innerHTML = `<h2>${location} Listings</h2>`;
  entries.forEach(item => {
    listingContainer.innerHTML += `
      <div class="listing">
        <h3>${item.name} (${item.type})</h3>
        <p>${item.address}</p>
      </div>
    `;
  });
}
