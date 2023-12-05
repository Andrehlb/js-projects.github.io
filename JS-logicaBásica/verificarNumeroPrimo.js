// Escreve um programa em JS que verifica se um numero é primo ou não.
// Obs: número primo é um número natural, maior que 1, que possui apenas dois divisores: o 1 e ele mesmo.
// Exemplo: 2, 3, 5, 7, 11, 13, 17, 19, 23...
// Exemplo de saída: "17 é um número primo", "22 não é um número primo", "15 não é um número primo", "2 é um número primo

function isPrime(number) {
    if (number <= 1) return false; // 0 e 1 não são primos

    // Verifica se há algum número divisor além de 1 e ele mesmo
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

// Testes: testando a função isPrime()
const testNumber = 17;
if (isPrime(testNumber)) {
    console.log(`${testNumber} é um número primo`);
} else {
    console.log(`${testNumber} não é um número primo`);
}