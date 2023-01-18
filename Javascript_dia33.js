// Projeto código nosso de cada dia (dia 33)
// Manipulando Arrays
// Adicionando elementos a arrays
const numeros = [1, 2, 3];
console.log(numeros);
// adicionando no inicio
numeros.unshift(0);
console.log(numeros);
// adicionando entre elementos
// nomeArray.splice(indice onde o valor vai ficar / indice do elemento que voce quer deletar(caso seja para substituir um elemento) / elemento que voce vai adicionar)
numeros.splice(1, 0, "a");
console.log(numeros);
// adicionando no final
numeros.push(4);
console.log(numeros);
// Encontrando elementos em um array (primitivo)
// nomeArray.indexOf(retorna o indice que se encontra o valor, caso esse valor não exista nessa array ele retorna -1)
console.log(numeros.indexOf(2));
console.log(numeros.indexOf("2"));
// outra forma
console.log(numeros.includes("a"));
// Encontrando elementos em um array (referência)
const marcas = [
  { id: 1, nome: "a" },
  { id: 2, nome: "b" },
];
let found = marcas.find(function (marca) {
  return marca.nome === "b";
});
console.log(found);
// Removendo elementos de um Array
let datas = ["06/12", "08/09", "12/04"];
console.log(datas);
// Remvendo no início
datas.shift();
console.log(datas);
// Removendo no final
datas = ["06/12", "08/09", "12/04"];
datas.pop();
console.log(datas);
// Removendo um específico
// nomeArray.splice(seleciona indice, remove indice)
datas = ["06/12", "08/09", "12/04"];
datas.splice(1, 1);
console.log(datas);
// Esvaziando uma Array
let valores = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(valores);
// Solução 1: Re-instanciar valores (só funciona se o array for com let)
valores = [];
console.log(valores);
// Solução 2 (Mais indicada, pois apaga todas referências desse array):
valores = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(valores);
valores.length = 0;
console.log(valores);
// Solução 3 usando splice com length
valores = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(valores);
valores.splice(0, valores.length);
console.log(valores);
// Solução 4, usando while pop
valores = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(valores);
while (valores.length > 0) {
  valores.pop();
}
console.log(valores);
// Combinando arrays
const primeiro = [1, 2, 3];
const segundo = [4, 5, 6];
const combinado = primeiro.concat(segundo);
console.log(combinado);
// Dividindo Arrays
// nomeArray.slice(Indica o indice onde comeca o array a ser cortado, indica qual o indice final desse array a ser cortado, o valor desse indice não entrara no array cortado)
const dividido = combinado.slice(0, 3);
console.log(dividido);
//Utilizando Spread para combinar e clonar
// combinar
const combinar = [...primeiro, ...segundo];
console.log(combinar);
// clonar
const clonado = [...combinar];
console.log(clonado);
// adicionando elementos a array com spread
const elementos = [...primeiro, "%", ...segundo, "joao"];
console.log(elementos);
// Iterando uma array
// método for each
const numbers = [7, 8, 9, 10];
numbers.forEach((numero) => console.log(numero));
// Combinando elementos do array
// nomeArray.join('Símbolo separador dos elementos')
const values = [1, 2, 3, 4, 5, 6];
const comb = values.join("*");
console.log(comb);
