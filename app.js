// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Jogo do Número Secreto";

// let paragrafo = document.querySelector("p");
// paragrafo.innerHTML = "Escolha um número entre 1 e 10 :";

// Fizemos uma função com nome "textoNaTela" que irá receber como parâmetro, duas variáveis "tag" e "texto", uma será as "tags" do HTML que serão armazenadas em
//uma outra variável com o nome de "campo", e dentro dessa variável "campo" será colocado dentro dela um "texto" que aparecerá dentro do HTML.

// A palavra reservada "return" finaliza a execução de uma função e especifica os valores que devem ser retonados para onde a função foi chamada.

// Se quiser selecionar apenas o que for escrito no "input" do HTML precisa colocar o ".value".
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumero();
let tentativas = 1;
console.log(numeroSecreto);

function textoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
}

function mensagemInicial() {
  textoNaTela("h1", "Jogo do Número Secreto");
  textoNaTela("p", "Escolha um número entre 1 e 10 : ");
}
mensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numeroSecreto) {
    textoNaTela("h1", "Acertou");
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas =
      "Você acertou o número secreto com " + tentativas + palavraTentativa;
    textoNaTela("p", mensagemTentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (chute > numeroSecreto) {
    textoNaTela("p", "O número secreto é menor");
  } else {
    textoNaTela("p", "O número secreto é maior");
  }
  tentativas++;
  limparCampo();
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function gerarNumero() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumerosSorteados = [];
  }

  if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumero();
  } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  }
}

function reiniciarJogo() {
  limparCampo();
  mensagemInicial();
  numeroSecreto = gerarNumero();
  tentativas = 1;
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
