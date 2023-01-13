// Projeto código nosso de cada dia (dia 19)
// Função para obter media de valores em uma array
// Tabela de notas:
// 0-59 = E
// 60-69 = D
// 70-79 = C
// 80-89 = B
// 90-100 = A
const notas = [100, 90, 100, 75];
console.log(mediaNotas(notas));
function mediaNotas(notas) {
  let soma = 0;
  for (let nota of notas) {
    soma += nota;
  }
  const media = soma / notas.length;
  if (media < 59) return "Nota E";
  if (media < 69) return "Nota D";
  if (media < 79) return "Nota C";
  if (media < 89) return "Nota B";
  return "Nota A";
}
