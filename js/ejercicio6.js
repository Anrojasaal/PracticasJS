let name1 = "";
let country = "";
let age = "";
let state = "";

function ejercicio6() {
  name1 = prompt("Ingrese su nombre");
  age = prompt("Ingrese su edad");
  country = prompt("Ingrese su pais");
  state = prompt("Ingrese su estado / departamento");
  if (
    name1 === null ||
    name1 === "" ||
    age === null ||
    age === "" ||
    country === null ||
    country === "" ||
    state === null ||
    state === ""
  ) {
    alert("Alguno de los datos no es el correcto");
  } else {
    name1 = name1.toLowerCase();
    age = age.toLowerCase();
    country = country.toLowerCase();
    state = state.toLowerCase();

    if (age > 17) {
      if (country === "canada") {
        if (state === "toronto") {
          alert("Tu beca a sido aplicada");
        } else {
          alert("Lo siento, por el momento no podemos aplicar tu beca");
        }
      } else {
        alert("Lo siento, por el momento no podemos aplicar tu beca");
      }
    } else {
      alert("Lo siento, por el momento no podemos aplicar tu beca");
    }
  }
}
