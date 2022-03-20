//*abrir e fechar menu, funcionalidades do nav
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

const sections = document.querySelectorAll('main section[id]')
function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

//*Calcular a média
const aprovado = document.querySelector('h4')
const reprovado = document.querySelector('h5')
const media = 5

function calc(e) {
  var n1 = parseFloat(document.getElementById('notaDoPrimeiroBimestre').value)
  var n2 = parseFloat(document.getElementById('notaDoSegundoBimestre').value)
  var n3 = parseFloat(document.getElementById('notaDoTerceiroBimestre').value)
  var n4 = parseFloat(document.getElementById('notaDoQuartoBimestre').value)

  var calculo = (n1 + n2 + n3 + n4) / 4

  if (calculo >= media) {
    aprovado.classList.add('show')
    reprovado.classList.remove('show')
  } else {
    aprovado.classList.remove('show')
    reprovado.classList.add('show')
  }

  document.getElementById('notaDoPrimeiroBimestre').value = ''
  document.getElementById('notaDoSegundoBimestre').value = ''
  document.getElementById('notaDoTerceiroBimestre').value = ''
  document.getElementById('notaDoQuartoBimestre').value = ''
}

//*Conversor de moedas
function Converter() {
  var valorElemento = parseFloat(document.getElementById('valor').value)
  var elementoValorConvertido = document.getElementById('valorConvertido')
  var conversao = valorElemento * 5.32
  var valorConvertido = 'O resultado em Reais é R$ ' + conversao
  elementoValorConvertido.innerHTML = valorConvertido

  document.getElementById('valor').value = ''
}

/**Game adivinhação*/
var numeroSecreto = parseInt(Math.random() * 11)
function Chutar() {
  var chute = parseInt(document.getElementById('valor-chute').value)
  var elementoResultado = document.getElementById('resultado')

  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = 'Você acertou!'
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = 'Você deve inserir um número de 0 a 10'
  } else {
    elementoResultado.innerHTML =
      'Você errou, o número secreto era ' + numeroSecreto
  }

  document.getElementById('valor-chute').value = ''
}

/**Codeflix */

//*Adicionar filme

function adicionarFilme() {
  var filmeFavorito = document.getElementById('filme').value

  if (filmeFavorito.endsWith('.jpg')) {
    listarFilmesNaTela(filmeFavorito)
  } else {
    console.error('Endereço de filme inválido')
  }

  document.getElementById('filme').value = ''
}

function listarFilmesNaTela(filmeFavorito) {
  var elementoFilmeFavorito = '<img src=' + filmeFavorito + '>'
  var elementoListaFilmes = document.getElementById('listaFilmes')
  elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito
}

//*Tabela de classificação*//
var fabricio = {
  nome: 'Fabricio',
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}
var giulia = {
  nome: 'Giulia',
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

function calculaPontos(jogador) {
  var pontos = jogador.vitorias * 3 + jogador.empates
  return pontos
}

giulia.pontos = calculaPontos(giulia)
fabricio.pontos = calculaPontos(fabricio)

var jogadores = [fabricio, giulia]

function exibeJogadoresNaTela(jogadores) {
  var elemento = ''
  for (var i = 0; i < jogadores.length; i++) {
    elemento += '<tr><td>' + jogadores[i].nome + '</td>'
    elemento += '<td>' + jogadores[i].vitorias + '</td>'
    elemento += '<td>' + jogadores[i].empates + '</td>'
    elemento += '<td>' + jogadores[i].derrotas + '</td>'
    elemento += '<td>' + jogadores[i].pontos + '</td>'
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
    elemento += '</tr>'
  }

  var tabelaJogadores = document.getElementById('tabelaJogadores')
  tabelaJogadores.innerHTML = elemento
}

exibeJogadoresNaTela(jogadores)

function adicionarVitoria(i) {
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
  var jogador = jogadores[i]
  jogador.derrotas++
  jogador.pontos = calculaPontos(jogador)
  exibeJogadoresNaTela(jogadores)
}

//*Super Trunfo*//

var carta1 = {
  nome: 'Bulbassauro',
  atributos: {
    HP: 3,
    ataque: 3,
    defesa: 3,
    ataqueEspecial: 4,
    defesaEspecial: 4,
    velocidade: 3
  }
}

var carta2 = {
  nome: 'Charmander',
  atributos: {
    HP: 3,
    ataque: 4,
    defesa: 3,
    ataqueEspecial: 4,
    defesaEspecial: 3,
    velocidade: 4
  }
}

var carta3 = {
  nome: 'Squirtle',
  atributos: {
    HP: 3,
    ataque: 3,
    defesa: 4,
    ataqueEspecial: 3,
    defesaEspecial: 4,
    velocidade: 3
  }
}

var cartas = [carta1, carta2, carta3]

var cartaMaquina
var cartaJogador

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * 3)
  cartaMaquina = cartas[numeroCartaMaquina]
  console.log(cartaMaquina)

  var numeroCartaJogador = parseInt(Math.random() * 3)
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * 3)
  }

  cartaJogador = cartas[numeroCartaJogador]
  console.log(cartaJogador)

  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
}
