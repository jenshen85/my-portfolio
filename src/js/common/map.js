import L from 'leaflet';

const MapContainer = document.getElementById('map');


if (MapContainer) {
  
  const map = L.map(MapContainer, {
    // preferCanvas: true,
    scrollWheelZoom: false 
  });

  map.setView([47.961997, 36.745420], 9)

  L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', 
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      subdomains: ['a','b','c']
    }
  ).addTo(map);


  let custIcon = L.icon({
    iconUrl: './assets/img/icons/map_marker.svg',
    iconSize: [40, 56], // size of the icon
  });

  L.marker([48.031081, 38.153155], {icon: custIcon}).addTo(map);
  // 
}


