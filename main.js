//*Calcular a média
const aprovado = document.querySelector('h3')
const reprovado = document.querySelector('h4')
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
}

//*Conversor de moedas
function Converter() {
  var valorElemento = parseFloat(document.getElementById('valor').value)
  var elementoValorConvertido = document.getElementById('valorConvertido')
  var conversao = valorElemento * 5.32
  var valorConvertido = 'O resultado em Reais é R$ ' + conversao
  elementoValorConvertido.innerHTML = valorConvertido
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
}

/**Codeflix */
var listaFilmes = [
  'https://i.ytimg.com/vi/uaSYEUugnzE/movieposter_en.jpg',

  'https://upload.wikimedia.org/wikipedia/pt/thumb/b/bf/Insidious.jpg/230px-Insidious.jpg',

  'https://i.pinimg.com/originals/17/aa/71/17aa718c1ab15b482505b8431cf596fc.jpg',

  'https://images-na.ssl-images-amazon.com/images/I/81aA7hEEykL.jpg',

  'https://img.elo7.com.br/product/zoom/2657A30/big-poster-harry-potter-e-a-pedra-filosofal-lo02-90x60-cm-harry-potter.jpg',

  'https://img.elo7.com.br/product/zoom/2692949/big-poster-o-senhor-dos-aneis-o-retorno-do-rei-lo09-90x60-cm-o-senhor-dos-aneis-o-retorno-do-rei.jpg'
]

for (var indice = 0; indice < listaFilmes.length; indice++) {
  document.write('<img src=' + listaFilmes[indice] + '>')
}

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
