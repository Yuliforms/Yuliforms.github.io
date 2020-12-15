"use strict";
var forma = document.getElementById("forma"),
    campos = ["nombre", "boleta",  "grupo", "materia",
              "fecha"],
    salidas = ["salidaBoleta", "salidaNombre", "salidaGrupo",
               "salidaMateria","salidaFecha"];

 

forma.addEventListener("submit", enviar, false);
function enviar(){
    for (var i = 0, longitud=campos.length; i < longitud; i++) {
      var campo = forma[campos[i]];
      var salida = document.getElementById(salidas[i]);
      salida.value=campo.value;
    }
}
