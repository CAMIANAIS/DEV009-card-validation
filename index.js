import validator from './validator.js';


const tarjeta = document.getElementById('tarjeta');
const formulario = document.getElementById('formCard');


formulario.addEventListener("submit",function(e){
  e.preventDefault();
  let valueCard=tarjeta.value;
  tarjeta.value = validator.maskify(valueCard);
  console.log(valueCard)
  console.log(validator.isValid(valueCard))
  if (validator.isValid(valueCard)) {
    valueCard = "Tarjeta de Crédito Válida";
  } else {
    valueCard = "Tarjeta de Crédito Inválida";
  }
  document.getElementById("validez").innerHTML = valueCard;
})


