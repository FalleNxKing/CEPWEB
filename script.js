// Google Maps API initialization
function initMap() {
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: { lat: 20.5937, lng: 78.9629 } // Center the map on India
    });
  
    // Add category filters event listeners
    const filterButtons = document.querySelectorAll('.category-filters button');
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        filterLocations(button.dataset.category);
      });
    });
  
    // Load location data and add markers to the map
    loadLocationData(map);
  }
  
  // Function to load location data and add markers to the map
  function loadLocationData(map) {
    // Fetch location data from a data source (e.g., an API or a local file)
    fetch('location-data.json')
      .then(response => response.json())
      .then(data => {
        data.forEach(location => {
          addLocationMarker(map, location);
        });
      })
      .catch(error => {
        console.error('Error loading location data:', error);
      });
  }
  
  // Function to add a location marker to the map
  function addLocationMarker(map, location) {
    const marker = new google.maps.Marker({
      position: { lat: location.latitude, lng: location.longitude },
      map: map,
      title: location.name,
      icon: `img/category-icons/${location.category}.png`
    });
  
    // Add click event listener to open the location details
    marker.addListener('click', () => {
      showLocationDetails(location);
    });
  }
  
  // Function to filter locations based on category
  function filterLocations(category) {
    // Implement the logic to filter and display the relevant locations
    // based on the selected category
  }
  
  // Function to display location details
  function showLocationDetails(location) {
    // Implement the logic to display the location details in the "location-details" section
  }
  
  // Initialize the map when the page loads
  window.onload = initMap;