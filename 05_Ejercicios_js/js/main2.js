function info(cadena) {

  var resultado = "Es \""+cadena+"\" ";


  if(cadena == cadena.toUpperCase()) {
    resultado += "Mayúsculas";
  }
  else if(cadena == cadena.toLowerCase()) {
    resultado += "Minúsculas";
  }
  else {
    resultado += " Mayusculas y minúsculas";
  }

  return resultado;
}

console.log(info("ggggg"));
