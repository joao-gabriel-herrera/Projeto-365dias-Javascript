// Projeto código nosso de cada dia (dia 7)
// Um login que pode ser nome do usúario ou email
// Operador lógico ou (or) em javascript: ||, se uma das condições forem verdades o resultado é true
let username = true;
let email = false;
let login = username || email ? "Usuário encontrado" : "Usuário não encontrado";
console.log(login);
let username2 = false;
let email2 = false;
let login2 =
  username2 || email2 ? "Usuário encontrado" : "Usuário não encontrado";
console.log(login2);
