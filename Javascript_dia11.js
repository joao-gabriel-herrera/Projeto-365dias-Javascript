// Projeto código nosso de cada dia (dia 11)
// Laço de repetição utilizando For
for (let i = 0; i < 5; i++) {
  console.log("Estou na minha ", i + 1, "º repetição!");
}
// Laço de repetição com condição:
for (let i = 1; i <= 5; i++) {
  if (i % 2 !== 0) {
    console.log("O número", i, "é impar");
  }
}
// Laço de reptição com For...In
const pessoa = {
  nome: "João",
  idade: "20",
};
for (let chave in pessoa) {
  console.log(chave);
}
const cores = ["Vermelho", "Branco", "Azul", "Verde"];
for (let indice in cores) {
  console.log(indice, cores[indice]);
}
// Laço de repetição usando For..of
let notas = [100, 85, 45, 32, 69, 97, 84, 12, 25, 36, 22, 100, 99];
let aprovados = 0;
let reprovados = 0;
for (let n of notas) {
  n >= 60 ? aprovados++ : reprovados++;
}
console.log("Aprovados: " + aprovados);
console.log("Reprovados: " + reprovados);
