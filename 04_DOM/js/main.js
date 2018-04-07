// CREADCION DE NODOS

// 1 Creación de un nodo de tipo Element que represente al elemento
var parrafo = document.createElement("p");
// 2 Creaion de un nodo de tiop Text que represente el contenido del elemento
var contenido = document.createTextNode("Hola Amigos");
// 3 Añadir el nodo Text como nodo hijo del nodo Element
parrafo.appendChild(contenido);
// 4 Añadir el nodo Element a la página, en forma de nodo hijo
// del nodo correspondiente al lugar en el que se va a insertar el elemento.
document.body.appendChild(parrafo);

var titulo = document.createElement("h1");
var contentitle = document.createTextNode("Este es un titulo");
titulo.appendChild(contentitle);
document.body.appendChild(titulo);
