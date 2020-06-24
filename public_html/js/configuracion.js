function abrirSidemenu() {
    document.getElementById("menu").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
function cerrarSidemenu() {
    document.getElementById("menu").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function cargarXML() {
    var xml = new XMLHttpRequest();
    xml.open('GET', 'public_html/php/select_usuario.php');
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