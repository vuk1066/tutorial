var styledMapType = new google.maps.StyledMapType(
[
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
],
{name: 'Styled Map'});


var locations = [
      ['Bondi Beach', -33.890542, 151.274856, 4],
      ['Coogee Beach', -33.923036, 151.259052, 5],
      ['Cronulla Beach', -34.028249, 151.157507, 3],
      ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      ['Maroubra Beach', -33.950198, 151.259302, 1]
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: new google.maps.LatLng(-33.92, 151.25),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();
    var marker,i;

    function drop(myLatLng,infoContent) {
        setTimeout(function() {
          marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            icon: 'icon.png',
            animation: google.maps.Animation.DROP,
            });
        }, i * 150);
      }
      function attachMessage(marker, infoContent) {
        var infowindow = new google.maps.InfoWindow({
          content: infoContent
        });

        marker.addListener(marker,'click', function() {
        //   infowindow.open(marker.get('map'), marker);
        });
      }
   
    function setMarkers() {
      for (i = 0; i < locations.length; i++) {
        var myLatLng = new google.maps.LatLng(locations[i][1], locations[i][2]);
        var infoContent = locations[i][0];
        drop(myLatLng,infoContent);
        attachMessage(marker, infoContent[i]);
      }
    }
    setMarkers();

 /*   for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: 'icon.png',
        animation: google.maps.Animation.DROP
      });
    }
        function addInfo(content){
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(content);
          infowindow.open(map, marker);
        };
      })(marker, i));
      console.log(content);
    }   
*/
map.mapTypes.set('styled_map', styledMapType);
map.setMapTypeId('styled_map');


// function initMap() {
// // Create a new StyledMapType object, passing it an array of styles,
// // and the name to be displayed on the map type control.


// var json = { 
// "id":"155747", 
// "title":"200 Aldersgate", 
// "URL":"http://www.city.ac.uk/visit/campuses/cass/200-aldersgate", 
// "latitude":"51.517876", 
// "longitude":"-0.097722",
// "id":"38284",
// "title":"24 Chiswell Street", 
// "URL":"", "latitude":"51.520714", 
// "longitude":"-0.089425"
// }

// var locations = [
//   {lat: 51.5269,lng: -0.102832},
//   {lat: 51.5262,lng: -0.109619}
// ]
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 16,
//     center: {lat: 51.5269,lng: -0.102832}    
//   });

//   var marker = new google.maps.Marker({
//     position:{lat: 51.5269,lng: -0.102832},
//     map: map,
//     animation: google.maps.Animation.DROP,
//   });

//   marker.setMap(map);
//   //Associate the styled map with the MapTypeId and set it to display.
//   map.mapTypes.set('styled_map', styledMapType);
//   map.setMapTypeId('styled_map');
 
// }

// initMap();

