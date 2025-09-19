//Parte 1, usando regex para validar

//Obteniendo los campos
const inputNombre = document.querySelector("#nombre");
const spanNombre = document.querySelector("#span-nombre");

const inputEmail = document.querySelector("#email");
const spanEmail = document.querySelector("#span-email");

const inputEdad = document.querySelector("#edad");
const spanEdad = document.querySelector("#span-edad");

const inputContrasenia = document.querySelector("#contrasenia");
const spanContrasenia = document.querySelector("#span-contrasenia");

const btnEnviar = document.querySelector("#enviar");

//Mis expresiones regulares
const regexNombre = /^\p{Lu}\p{Ll}{2,}$/u;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexEdad = /^(?:[5-9]|[1-7]\d|80)$/;
const regexContrasenia =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

//Validar un nombre
inputNombre.addEventListener("input", (e) => {
  let texto = e.target.value;
  if (!regexNombre.test(texto)) {
    btnEnviar.disabled = true;
    spanNombre.textContent =
      "El nombre debe empezar en mayúscula y no debe contener números ni espacios y debe contener al menos 3 caracteres";
  } else {
    btnEnviar.disabled = false;
    spanNombre.textContent = "";
  }
});

//Validar un email
inputEmail.addEventListener("input", (e) => {
  let texto = e.target.value;
  if (!regexEmail.test(texto)) {
    btnEnviar.disabled = true;
    spanEmail.textContent =
      "Su email debe contener un @dominio y un '.' para ser válido";
  } else {
    btnEnviar.disabled = false;
    spanEmail.textContent = "";
  }
});

//Validar la edad
inputEdad.addEventListener("input", (e) => {
  let texto = e.target.value;
  if (!regexEdad.test(texto)) {
    btnEnviar.disabled = true;
    spanEdad.textContent =
      "No se aceptan números negativos, su edad debe estar entre 5 y 80";
  } else {
    btnEnviar.disabled = false;
    spanEdad.textContent = "";
  }
});

//Validar una contraseña segura
inputContrasenia.addEventListener("input", (e) => {
  let texto = e.target.value;
  if (!regexContrasenia.test(texto)) {
    btnEnviar.disabled = true;
    spanContrasenia.textContent =
      "Su contraseña debe contener al menos 8 caracteres, una mayúscula, un número y un caracter especial";
  } else {
    btnEnviar.disabled = false;
    spanContrasenia.textContent = "";
  }
});

//Si no hay datos vacíos y todo está en orden, se da la confirmación y se limpia todo
btnEnviar.addEventListener("click", () => {
  if (
    inputNombre.value == "" ||
    inputEmail.value == "" ||
    inputEdad.value == "" ||
    inputContrasenia.value == ""
  ) {
    alert("Debe llenar todos los campos antes de enviar");
    return;
  }
  alert("Los campos han sido enviados con éxito!");
  limpiar();
});

function limpiar() {
  inputNombre.value = "";
  inputEmail.value = "";
  inputEdad.value = "";
  inputContrasenia.value = "";
}

//Parte 2, encontrando coinciendias en un texto

//traemos los elementos del HTML
const btn1 = document.querySelector("#btn-texto1");
const btn2 = document.querySelector("#btn-texto2");
const btn3 = document.querySelector("#btn-texto3");

//Función que evalúa la regex, pasa un array con las coincidencias y las cuenta
function encontrarCoincidencias(palabra, texto) {
  const expresion = new RegExp(palabra, "gi");

  const coincidencias = texto.match(expresion);
  const cantidad = coincidencias ? coincidencias.length : 0;
  return cantidad;
}

//Se agrega la acción al modal 1
btn1.addEventListener("click", () => {
  const texto = document.querySelector("#texto1").value;
  const palabra = document.querySelector("#select-texto1").value;
  console.log(texto);
  console.log(palabra);

  const coincidencias = encontrarCoincidencias(palabra, texto);

  document.querySelector(
    "#span-texto1"
  ).textContent = `Coincidencias encontradas: ${coincidencias}`;
});

//Se agrega la acción al modal 2
btn2.addEventListener("click", () => {
  const texto = document.querySelector("#texto2").value;
  const palabra = document.querySelector("#select-texto2").value;
  console.log(texto);
  console.log(palabra);

  const coincidencias = encontrarCoincidencias(palabra, texto);

  document.querySelector(
    "#span-texto2"
  ).textContent = `Coincidencias encontradas: ${coincidencias}`;
});

//Se agrega la acción al modal 3
btn3.addEventListener("click", () => {
  const texto = document.querySelector("#texto3").value;
  const palabra = document.querySelector("#input-texto3").value;
  console.log(texto);
  console.log(palabra);

  const coincidencias = encontrarCoincidencias(palabra, texto);

  document.querySelector(
    "#span-texto3"
  ).textContent = `Coincidencias encontradas: ${coincidencias}`;
});
