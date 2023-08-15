let access = "";
let password = "";
function ejercicio4() {
  password = prompt("Crea una contraseña de no mas de 20 caracteres");
}
function ejercicio4_1() {
  access = prompt("Ingresa su contraseña");

  if (password === access) {
    alert("Acceso concedido" + "\nBienvenido");
  } else {
    alert("Oh oh! Acceso denegado");
  }
}
