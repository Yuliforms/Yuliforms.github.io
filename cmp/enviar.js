 function enviar(){
  var boleta = document.getElementById('boleta').value,  
      nombre = document.getElementById('nombre').value,   
      grupo = document.getElementById('grupo').value,   
      materia = document.getElementById('materia').value,  
      fecha = new Date(formu["fecha"].value),
      miFecha;
      miFecha = fecha.getDate() + 1 + "/"+ (fecha.getMonth() + 1) +"/"+fecha.getFullYear();
      document.registro.boletaobt.value = boleta;
      document.registro.nombreobt.value = nombre;
      document.registro.grupoobt.value = grupo;
      document.registro.materobt.value = materia;
      document.registro.dateoobt.value = miFecha;
 }
