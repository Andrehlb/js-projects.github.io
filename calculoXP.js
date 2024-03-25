//Desafios JavaScript têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.
// Entrada de dados. Lembrar: O parseInt(()) é importante para a conversão dos valores de entrada(String) para um valor numérico(int).

// Lê uma linha com dado de entrada do usuário (num1 nívl do monstro e num2 nível de dificuldade da batalha)
let num1 = parseInt(gets());
let num2 = parseInt(gets());

// Função para calcular XP ganhos em uma batalha
function calculoXP(num1, num2) {
    return num1 * num2 * 100;
}

let xpGanho

// verificar o intervalo de num1 e num2 que são os valores da dificuldade da batalha
if (num2 < 1 || num2 > 100) {
    print("Dificuldade da batalha inválido");
}else{
    // calcular a quatidade de XP ganhos
    xpGanho = calculoXP(num1, num2);

    // mostrar (imprimir) a quantidade de XP ganhos
    print ('Você ganhou ', xpGanho, ' de XP!');
}

