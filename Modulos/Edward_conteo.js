export const Conteo_numero = (palabra) =>
    {
        
// Pedir palabra al usuario
let palabra = prompt("Ingresa una palabra:");

// Pasar todo a minúsculas
palabra = palabra.toLowerCase();

// Contar letras
let cantidadLetras = palabra.length;
console.log("La palabra tiene " + cantidadLetras + " letras.");

// Contadores para cada vocal
let contA = 0;
let contE = 0;
let contI = 0;
let contO = 0;
let contU = 0;

// Recorrer cada letra de la palabra
for (let i = 0; i < palabra.length; i++) {
  let letra = palabra[i];

  if (letra === "a") {
    contA++;
  } else if (letra === "e") {
    contE++;
  } else if (letra === "i") {
    contI++;
  } else if (letra === "o") {
    contO++;
  } else if (letra === "u") {
    contU++;
  }
}

// Mostrar cuántas veces aparece cada vocal
if (contA > 0) console.log("La vocal 'a' aparece " + contA + " veces.");
if (contE > 0) console.log("La vocal 'e' aparece " + contE + " veces.");
if (contI > 0) console.log("La vocal 'i' aparece " + contI + " veces.");
if (contO > 0) console.log("La vocal 'o' aparece " + contO + " veces.");
if (contU > 0) console.log("La vocal 'u' aparece " + contU + " veces.");

// Verificar si alguna vocal se repite
if (contA > 1 || contE > 1 || contI > 1 || contO > 1 || contU > 1) {
  console.log("Hay vocales que se repiten.");
} else {
  console.log("Ninguna vocal se repite.");
}


}