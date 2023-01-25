// Projeto código nosso de cada dia (dia 36)
// Função que verifica palíndromo
function palindrome(str) {
  const alfanumericos = str.toLowerCase().match(/[a-z0-9]/g);
  return alfanumericos.join() === alfanumericos.reverse().join();
}

console.log(palindrome("j-o)a||o/-oa:,o)(_j"));
