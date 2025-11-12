//Importaciones de los modulos 

import {Conteo_numero} from "./Modulos/Edward_conteo.js";
import {primos} from "./Modulos/primos.js";
import {comprobar_numero} from "./Modulos/Verificador-numeros-michelle.js";
import {palabra_palindroma} from "./Modulos/Palindroma_jaider.js"

let opcion = "";

while (opcion !== "0"){
    opcion = prompt(
        "--- Menu operaciones ---\n"+
        "1. Conteo de letras y vocales\n"+
        "2. Validar numero\n"+
        "3. Verificar si un numero es primo\n"+
        "4. Palabra palindroma\n"+
        "0. Salir"
    );

    switch (opcion) {
        case "1":
            Conteo_numero("");
            alert("ver en consola");
            break;

        case "2":
            let num = prompt("ingrese un numero para validarlo: ");
            let numero = Number(num);
            comprobar_numero(numero);
            break;

        case "3":
            let valor = parseInt(prompt("Ingrese un numero para verificar si es primo: "));
            if (primos(valor)){
                alert(`El numero ${valor} es primo`);
            }else{
                alert(`El numero ${valor} no es primo`);
            }
            break;

        case "4":
            //palindroma
            let palabra = prompt(`Ingrese la palabra que desea verificar: `);
            let palabra_corregida = palabra.toLowerCase().trim();
            let palabra_reversa = palabra_palindroma(palabra_corregida);

            if (palabra_corregida === palabra_reversa) {
                alert(`La palabra es palíndroma`);
            } else {
                alert(`La palabra no es palíndroma`);
            }
            break;
        
        case "0":
            alert("Gracias...");
            break;

        default:
            alert("Opcion no valida. ingresa un numero entre 1 o 0");
    }
}
