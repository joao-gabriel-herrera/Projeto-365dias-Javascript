// Projeto código nosso de cada dia (dia 38)
// Jogo de adivinhar número
let aleatorio = Math.floor(Math.random() * 1001);
let chute;
while (chute != aleatorio) {
  chute = prompt("Insira o valor que você acha que é:");
  if (chute == aleatorio) {
    alert("Você acertou!");
  } else if (chute < aleatorio) {
    alert("Um número um pouco maior!");
  } else if (chute > aleatorio) {
    alert("Um número um pouco menor!");
  }
}
