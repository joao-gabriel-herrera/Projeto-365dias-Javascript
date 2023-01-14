// Projeto código nosso de cada dia (dia 25)
// Manipulando strings (métodos mais utilizados)
const mensagem = " Hello World ";
console.log(mensagem);
// Trocar uma palavra da string
console.log(mensagem.replace("Hello", "Ola"));
// Verificar se uma string possui uma determinada palavra
console.log(mensagem.includes("Hello"));
console.log(mensagem.includes("Queijo"));
// Verificar se palavra termina ou começa com determinada palavra
console.log(mensagem.startsWith("Hello"));
console.log(mensagem.endsWith("Hello"));
// Verificar tamanho da palavra ou frase (inclui espaços)
console.log(mensagem.length);
// Retirar espaços excessivos da palavra
console.log(mensagem);
console.log(mensagem.trim());
// Quebrar palavras ou frases em partes definindo aonde deve acontecer a quebra
console.log(mensagem.split(" "));
