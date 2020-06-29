function abrirSidemenu() {
    document.getElementById("menu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function cerrarSidemenu() {
    document.getElementById("menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

//select usuario.idDireccion as idDir, direccion.idCiudad as idCity, direccion.calle1 as cal1, 
//direccion.calle2 as cal2, ciudad.nombre as name, ciudad.region as reg, ciudad.pais as country 
//

function cargarXML() {
    var xml = new XMLHttpRequest();
    xml.open('GET', 'php/select_usuario.php');
    xml.onload = function () {
        if (this.status == 200) {
            var data = JSON.parse(this.responseText).Table, tbodyHtml = '';

            data.map(function (d) {
                tbodyHtml += `
                    <tr>
                       <td>${d.idUsuario}</td>
                       <td>${d.nombre}</td>
                       <td>${d.ciudad}</td>
                       <td>${d.region}</td>
                       <td>${d.pais}</td>
                    </tr>
                `;
            });
            
            document.querySelector('#tbl_direccion tbody').innerHTML = tbodyHtml;
        }
    };
    console.log(xml);
    xml.send();
}