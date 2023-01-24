// Projeto código nosso de cada dia (dia 36)
// Função que verifica palíndromo
function palindrome(str) {
  let string = str.replace(/ /g, "");
  let stringdois = string.split("");
  stringdois = stringdois.map((p) => p.toLowerCase());
  let inv = stringdois;
  inv.reverse();
  if (stringdois.length !== inv.length) return false;
  else {
    for (let i = 0; i < inv.length; i++)
      if (inv[i] !== stringdois.reverse()[i]) {
        return false;
      } else {
        return true;
      }
  }
}

console.log(palindrome("not a palindrome"));
