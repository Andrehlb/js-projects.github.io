function gerarTabuada() {
  const num = document.getElementById("numero").value;
  let resultado = "";

  if (num < 1 || num > 10) {
    resultado = "Por favor, insira um número entre 1 e 10.";
  } else {
    for (let i = 1; i <= 10; i++) {
      resultado += `${num} x ${i} = ${num * i}<br>`;
    }
  }

  document.getElementById("resultado").innerHTML = resultado;
}
