const inputSenha = document.querySelector("#senha");
const inputRange = document.querySelector("#range");
const botaoGerarSenha = document.querySelector("button");

const cheackboxMaiusculo = document.querySelector("#letraMaiuscula");
const cheackboxSMinusculo = document.querySelector("#letraMinuscula");
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
  const caracteresSelecionados = [
    ...(cheackboxNumeros.checked ? numeros : []),
    ...(cheackboxSimbolos.checked ? simbolos : []),
    ...(cheackboxSMinusculo.checked ? letras : []),
    ...(cheackboxMaiusculo.checked ? letrasMaiusculas : []),
  ];

  if (!caracteresSelecionados.length) return;

  let senha = "";

  for (let i = 0; i < inputRange.value; i++) {
    /* prettier-ignore */
    senha += caracteresSelecionados[Math.round(Math.random() * (caracteresSelecionados.length - 1))];
  }

  inputSenha.value = senha;
}
