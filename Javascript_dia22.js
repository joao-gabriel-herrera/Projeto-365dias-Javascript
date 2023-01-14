// Projeto código nosso de cada dia (dia 22)
// Utilizando Factory Functions
function cadastrarCarro(marca, modelo, ano, motor, valor) {
  return {
    marca,
    modelo,
    ano,
    motor,
    valor,
    tocarAlarme() {
      console.log("IuIuIuIuIuIu...");
    },
  };
}
const carro1 = cadastrarCarro("Volkswagen", "Gol", "2003", "1.8 AP", 25000);
console.log(carro1);
