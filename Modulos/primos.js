export const primos = (a) => {
    let es_primo = true;
    for (let i = 2; i * i <= a; i++) {
        if (a % i === 0) {
            es_primo = false; 
            break;         
        }
    }
    return es_primo;
}