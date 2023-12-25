const inputSenha = document.querySelector("#senha");
const inputRange = document.querySelector("#range");
const botaoGerarSenha = document.querySelector("button");

const cheackboxMaiusculo = document.querySelector("#letraMaiuscula");
const cheackboxMinusculo = document.querySelector("#letraMinuscula");
const cheackboxSimbolos = document.querySelector("#simbolos");
const cheackboxNumeros = document.querySelector("#numeros");

let mostrarTamanhoSenha = document.querySelector(".mostrarTamanhoSenha");

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const simbolos = ["-", "@", "_", "#", "!"];
const letras = Array.from({ length: 26 }).map((_, i) =>
  String.fromCharCode(i + 97)
);
const letrasMaiusculas = letras.map((letras) => letras.toUpperCase());

inputRange.addEventListener("input", mostrarRange);
botaoGerarSenha.addEventListener("click", gerarSenha);

function mostrarRange() {
  mostrarTamanhoSenha.textContent = inputRange.value;
}

mostrarRange();

function gerarSenha() {
  let numCheck = cheackboxNumeros.checked ? 1 : 0;
  let simCheck = cheackboxSimbolos.checked ? 1 : 0;
  let minCheck = cheackboxMinusculo.checked ? 1 : 0;
  let maiCheck = cheackboxMaiusculo.checked ? 1 : 0;
  let checkCount = numCheck + simCheck + maiCheck + minCheck;

  let senha = "";

  for (let i = 0; i < inputRange.value / checkCount; i++) {
    if (cheackboxNumeros.checked) {
      senha += numeros[Math.round(Math.random() * (numeros.length - 1))];
    }
    if (cheackboxSimbolos.checked) {
      senha += simbolos[Math.round(Math.random() * (simbolos.length - 1))];
    }
    if (cheackboxMinusculo.checked) {
      senha += letras[Math.round(Math.random() * (letras.length - 1))];
    }
    if (cheackboxMaiusculo.checked) {
      senha +=
        letrasMaiusculas[
          Math.round(Math.random() * (letrasMaiusculas.length - 1))
        ];
    }
  }

  let novaSenha = senha
    .toString()
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");

  inputSenha.value = novaSenha;
}
