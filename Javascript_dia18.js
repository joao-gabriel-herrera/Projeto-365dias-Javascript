// Projeto código nosso de cada dia (dia 18)
// Função que retorna a soma de todos multíplos de 3 e 5 em um limite estabelecido
somar(10);
function somar(limitador) {
  let multiplos = 0;
  for (let i = 1; i <= limitador; i++) {
    if (i % 3 === 0 || i % 5 === 0) multiplos += i;
  }
  console.log(
    "A soma dos numeros multiplos de 3 e 5 até o limite estabelecido é de: ",
    multiplos
  );
}
