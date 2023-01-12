// Projeto código nosso de cada dia (dia 14)
// Projeto FizzBuzz
// Se divisível por 3 = Fizz
// Se divisível por 5 = Buzz
// Se divisível por 3 e 5 = FizzBuzz
const resultado = fizzBuzz(18);
console.log(resultado);
function fizzBuzz(entrada) {
  if (typeof entrada !== "number") return "Não é um número!";
  return entrada % 3 === 0 && entrada % 5 === 0
    ? "FizzBuzz"
    : entrada % 3 === 0
    ? "Fizz"
    : entrada % 5 === 0
    ? "Buzz"
    : entrada;
}
