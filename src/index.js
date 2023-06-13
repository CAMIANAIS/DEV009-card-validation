import validator from './validator.js';


const tarjeta = document.getElementById('tarjeta');
const formulario = document.getElementById('formCard');


formulario.addEventListener("submit",function(e){
  e.preventDefault();
  let valueCard=tarjeta.value;
  tarjeta.value = validator.maskify(valueCard);
  if (validator.isValid(valueCard)) {
    valueCard = "Tarjeta de Crédito Válida";
  } 
  else if(valueCard.trim() === ""){
    valueCard="Ingresa n[umero de tarjeta valida";
  }
  else {
    valueCard = "Tarjeta de Crédito Inválida";
  }
  document.getElementById("validez").innerHTML = valueCard;
})

const btnLimpiar = document.getElementById("btnLimpiar");
btnLimpiar.addEventListener("click", function() {
  document.getElementById("formCard").reset();
});
