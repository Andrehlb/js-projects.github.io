//Desafios JavaScript têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.
// Para converter os valores inseridos na entrada, utilizamos a função JavaScript parseInt() que converte a parte inicial da string em um número inteiro.

// Lê a poisção inicial do herói
const posicaoInicial = parseInt(gets());
//lê a quantidade de passos que o herói deve dar
const totalPassos = parseInt(gets());

// Função para calcular a posição final do herói
const posicaoFinal = posicaoInicial + totalPassos;

// Mostrar (imprimir) a posição final do herói
print("A posição final do Herói é: ", posicaoFinal);