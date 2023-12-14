const inputSenha = document.querySelector("#senha");
const inputRange = document.querySelector("#range");
const botaoGerarSenha = document.querySelector("button");

let tamanhoSenha = document.querySelector(".tamanhoSenha");

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

inputRange.addEventListener("input", definirRange);

function definirRange() {
  tamanhoSenha.textContent = inputRange.value;
}

definirRange();

botaoGerarSenha.addEventListener("click", () => {
  let senha = "";

  for (let i = 0; i < inputRange.value; i++) {
    senha += Math.round(Math.random() * 9);
  }

  inputSenha.value = senha;
});
