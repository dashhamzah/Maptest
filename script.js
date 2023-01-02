let map;


function showCityOnMap() {
     // Show the loading spinner
    document.querySelector(".spinner").style.display = "flex";
    // Get the city and country values from the form
    const city = document.getElementById("city").value;
    const country = document.getElementById("country").value;
  
    // Make a request to the Geocoding API to convert the city and country into coordinates
    const geocodingAPI = "https://maps.googleapis.com/maps/api/geocode/json?address=" + city + "," + country + "&key=AIzaSyCPLgDIjY-co7xp67ugYnairxSVBToZE6U";
    fetch(geocodingAPI)
      .then((response) => response.json())
      .then((data) => {
        // Get the coordinates from the API response
        const coordinates = data.results[0].geometry.location;
  
        // Center the map on the coordinates
        map.setCenter(coordinates);
  
        // Add a marker to the map
        const marker = new google.maps.Marker({
          position: coordinates,
          map: map,
        });
         // Hide the loading spinner
      document.querySelector(".spinner").style.display = "none";
      });
  }
  
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.8566, lng: 2.3522 },
    zoom: 5,
    mapId: "fe954bc0e7c82b2d",
  });
}