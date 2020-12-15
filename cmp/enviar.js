"use strict";
var formu = document.getElementById("formu"),
    campos = ["nombre", "boleta",  "grupo", "materia",
              "fecha"],
    salidas = ["salidaBoleta", "salidaNombre", "salidaGrupo",
               "salidaMateria","salidaFecha"];

 

formu.addEventListener("submit", enviar, false);
function enviar(){
    for (var i = 0, longitud=campos.length; i < longitud; i++) {
      var campo = formu[campos[i]];
      var salida = document.getElementById(salidas[i]);
      salida.value=campo.value;
    }
}
