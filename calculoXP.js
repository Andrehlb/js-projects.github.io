//Desafios JavaScript com as funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Para converter os valores inseridos na entrada, usar a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.

// Lê uma linha com dado de entrada do 
Ler nivelMonstro (num1)
Ler nivrlDificuldade (num2)

// Função para calcular XP ganhos em uma batalha
function calculoXP(num1, num2) {
    return num1 * num2 * 100;
}

Se num2 < 1 ou num2 > 100
Entao
Escrever "Dificuldade da batalha inválida"
Terminar
FimSE

xpGanhos = calculoXP(nivelMonstro, nivelDificuldade)

Escrever "Você ganhou ", xpGanhos, "XP!"
Fim


