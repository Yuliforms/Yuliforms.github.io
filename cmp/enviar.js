var formu = document.getElementById("formulario"),
    salida = document.getElementById("salida");
    
formu.addEventListener("submit", enviar, false);
function enviar(){
  var boleta = formu["boleta"].value,  
      nombre = formu["nombre"].value,  
      grupo = formu["grupo"].value,  
      materia = formu["materia"].value,  
      fecha = new Date(formu["fecha"].value),
      miFecha;
      miFecha = fecha.getDate() + 1 + "/"+ (fecha.getMonth() + 1) +"/"+fecha.getFullYear();
    salida.textContent="Boleta: " + boleta + " Nombre: "+ nombre+ " Grupo: "+grupo + "Materia: "+materia+ "Fecha: "+miFecha;
}
