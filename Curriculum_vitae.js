
//JSON con informacion
let text = '{"Nombre" : "Ignacio", "Apellido" : "Malato" , "Edad" : "35" , "Trabajo" : "Professional Chef", "Fecha de nacimiento" : "1-2-1988"}';

//Transformamos la información del JSON en datos utilizables
const obj = JSON.parse(text);
document.getElementById("Bienvenido").innerHTML = obj.Nombre + " " + obj.Apellido;
document.getElementById("Profesion").innerHTML = obj.Trabajo;

//Funcion con dos variables, cambia dos imagenes en la pagina en conjunto tras clickear un boton
var izq = 1;
var der = 1;


function changeScr() {
    izq += 1;
    if (izq == 2){
    document.getElementById("img1").src="Imagenes/C2.jpg";}
    else if (izq == 3) {
      document.getElementById("img1").src="Imagenes/C3.jpg";
    }
    else if (izq == 4) {
      document.getElementById("img1").src="Imagenes/C4.jpg";
      izq = 0;
    }
    else {
      document.getElementById("img1").src="Imagenes/C1.jpg";
    }
    
    der += 1;
    if (der == 2){
    document.getElementById("img2").src="Imagenes/C6.jpg";}
    else if (der == 3) {
      document.getElementById("img2").src="Imagenes/C7.jpg";
    }
    else if (der == 4) {
      document.getElementById("img2").src="Imagenes/C8.jpg";
      der = 0;
    }
    else {
      document.getElementById("img2").src="Imagenes/C5.jpg";
    }
    
  }