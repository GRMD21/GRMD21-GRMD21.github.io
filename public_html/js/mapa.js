var etiqueta = {
    ubicacion:{
        label: 'U'
    },
    Reciclaje:{
        label: 'R'
    }
};

function initMap(){
    var starting = {lat: -35.433104, lng: -71.477477};
    var map = new google.maps.Map(
            document.getElementById('mapaPrincipal'), {zoom: 9, center: starting});
    //var marker = new google.maps.Marker({position: starting, map: map});
    var infoWindow = new google.maps.InfoWindow;
    
    downloadUrl('public_html/php/select_puntos.php', function(data, status) {
        var xml = data.responseXML;
        console.log(xml);
        console.log(status);
        var markers = xml.documentElement.getElementByTagName('puntos');
        Array.prototype.forEach.call(markers, function(markerElem){
            var idPunto = markerElem.getAttribute('idPunto');
            var estado = markerElem.getAttribute('estado');
            var tipo = markerElem.getAttribute('tipo');
            var idCiudad = markerElem.getAttribute('idCiudad');
            var point = new google.maps.LatLng(
                parseFloat(markerElem.getAttribute('latitud')),
                parseFloat(markerElem.getAttribute('longitud')));
                
            var infowincontent = document.createElement('div');
            var strong = document.createElement('strong');
            strong.textContent = estado;
            infowincontent.appendChild(strong);
            infowincontent.appendChild(document.createElement('br'));
            
            var text = document.createElement('text');
            text.textContent = tipo;
            infowincontent.appendChild(text);
            
            var icon = etiqueta[tipo] || {};
            var marker = new google.maps.Marker({
                map: map,
                position: point,
                label: icon.label
            });
            marker.addListener('click', function(){
                infoWindow.setContent(infowincontent);
                infoWindow.open(map, marker);
            });
        });
    });
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          
          infoWindow.setPosition(pos);
          infoWindow.setContent('Ubicación determinada');
          infoWindow.open(map);
          var current_marker = new google.maps.Marker({position: pos, map: map});
        }, function(){
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        handleLocationError(false, infoWindow, map.getCenter());
    }
}
function downloadUrl(url, callback){
    var request = window.ActiveXObject ? 
        new ActiveXObject('Microsoft.XMLHTTP') :
        new XMLHttpRequest();

    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            request.onreadystatechange = nada();
            callback(request, request.status);
        }
    };
    
    request.open('GET', url, true);
    request.send(null);
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

function nada() {}