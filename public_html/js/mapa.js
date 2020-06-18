function initMap(){
    var starting = {lat: 0, lng: 0};
    var map = new google.maps.Map(
            document.getElementById('mapaPrincipal'), {zoom: 4, center: starting});
    var marker = new google.maps.Marker({position: starting, map: map});
    var infoWindow = new google.maps.InfoWindow;
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          
          infoWindow.setPosition(pos);
          infoWindow.setContent('Ubicación determinada');
          infoWindow.open(map);
          map.setCenter(pos);
<<<<<<< HEAD
=======
          map.
>>>>>>> 252a8a63a86128a4f3c9beb9874d7c5079b503d8
        }, function(){
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'ERROR: La geolocalización ha fallado' :
                              'ERROR: Su navegador no soporta geolocalización');
        infoWindow.open(map);
      }

function abrirSidemenu() {
  document.getElementById("menu").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function cerrarSidemenu() {
  document.getElementById("menu").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


