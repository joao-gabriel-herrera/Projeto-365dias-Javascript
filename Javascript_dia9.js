// Projeto código nosso de cada dia (dia 9)
// Utilizando If e Else
// Alerta de acordo com horário:
let horaAtual = new Date();
let hora = horaAtual.getHours();
if (hora >= 6 && hora <= 12) {
  console.log("Bom Dia!");
} else if (hora > 12 && hora <= 18) {
  console.log("Boa Tarde!");
} else {
  console.log("Boa Noite!");
}
