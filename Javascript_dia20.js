// Projeto código nosso de cada dia (dia 20)
// Função que exibe a quantidade de asteriscos que aquela linha possui
exibirAsteriscos(10);
function exibirAsteriscos(linhas) {
  let asterisco = "*";
  for (let i = 1; i <= linhas; i++) {
    console.log(asterisco);
    asterisco += "*";
  }
}
