import L from 'leaflet';

const MapContainer = document.getElementById('map');


if (MapContainer) {
  
  const map = L.map(MapContainer, {
    // preferCanvas: true,
    scrollWheelZoom: false 
  });

  map.setView([48.004352, 37.993656], 12)

  L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: ['a','b','c']
    }
  ).addTo(map);


  // var custIcon = L.icon({
    // iconUrl: './assets/img/pointer.svg',
    // iconSize: [30, 46], // size of the icon
  // });

  L.marker([48.031081, 38.153155]).addTo(map);
  // , {icon: custIcon}
}


