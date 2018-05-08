function validarEntero(valor){
  valor = parseInt(valor)
    if (isNaN(valor)){
      return ""
    } else {
      return  valor;
    }
}



function valida_envia(){
  if (document.fvalida.nombre.value.length==0) {
    alert("tiene que escribir su nombre");
    document.fvalida.nombre.focus();
    return  0;
  }

  edad = document.fvalida.edad.value;
  edad = validarEntero(edad);
  document.fvalida.edad.value=edad;
  if (edad=="") {
    alert("tiene que introducir un nùmero entero en su edad");
    document.fvalida.edad.focus();
    return  0;
  }else {
    if (edad<18) {
      alert("debe ser mayor de 18 años");
      document.fvalida.edad.focus();
      return  0;
    }
  }

  if (document.fvalida.interes.selectedIndex==0){
    alert("debe seleccionar un motivo de contacto");
    document.fvalida.interes.focus();
    return 0;
  }

  alert("gracias por enviar su formulario");
  document.fvalida.submit();
}
