let inputField = document.querySelector("#amigo");
const friendsList = document.querySelector("#listaAmigos");
const finalResult = document.querySelector("#resultado");

let friends = [];

const adicionarAmigo = () => {
  const friendName = inputField.value.trim();
  if (friendName == "") {
    alert("Por favor, insira um nome válido!");
    return;
  }
  friends.push(friendName);
  inputField.value = "";
  inputField.focus();

  friendsList.innerHTML += `<br> ${friendName}`;
};

const sortearAmigo = () => {
  const randomNumber = Math.floor(Math.random() * friends.length);
  const randomName = friends[randomNumber];
  finalResult.innerHTML = `O nome sorteado é: ${randomName}`;
};