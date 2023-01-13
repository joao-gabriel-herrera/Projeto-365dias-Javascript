// Projeto código nosso de cada dia (dia 16)
// Projto função Par ou Ímpar
// A função recebe quantos numeros vai avaliar e define se ele é par ou ímpar
exibirTipo(13);
function exibirTipo(quantidadeValores) {
  if (typeof quantidadeValores !== "number")
    console.log("Você não digitou um número!");
  else
    for (let i = 1; i <= quantidadeValores; i++) {
      if (i % 2 === 0) console.log("O número", i, "é Par!");
      else console.log("O número", i, "é Ímpar!");
    }
}
