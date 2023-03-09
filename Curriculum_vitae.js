
//JSON con informacion
let text = '{"Nombre" : "Ignacio", "Apellido" : "Malato" , "Edad" : "35" , "Trabajo" : "Professional Chef", "Fecha de nacimiento" : "1-2-1988"}';

//Transformamos la inforación del JSON en datos utilizables
const obj = JSON.parse(text);
document.getElementById("Bienvenido").innerHTML = obj.Nombre + " " + obj.Apellido;
document.getElementById("Profesion").innerHTML = obj.Trabajo;

function changeScr() {
    document.getElementById("img1").src="imagenes/perfil.png";
  }