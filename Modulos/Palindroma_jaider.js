export const palabra_palindroma = (palabra) => {
    let palabra_invertida = palabra.split("").reverse().join("").trim()
    return palabra_invertida;
}