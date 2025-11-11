export const comprobar_numero = (numero) => {
    // Verificamos si no es un número valido
    if (isNaN(numero) || numero === "") {
        alert("No es un numero");
        return false;
    }
    
    // Si es un numero, verificamos si es positivo
    if (numero < 0) {
        alert("Es un numero negativo");
        return false;
    }
    
    // Verificamos si es entero
    if (!Number.isInteger(numero)) {
        alert("No es un numero entero");
        return false;
    }
    
    // Si pasa todas las pruebas
    alert("Es un numero entero positivo");
    return true;
}