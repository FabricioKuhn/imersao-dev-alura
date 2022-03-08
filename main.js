const aprovado = document.querySelector('h3')
const reprovado = document.querySelector('h4')
const media = 5

const button = document.querySelector('#calcular')

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

  alert('Sua média é ' + calculo)
}

function mediaAnual() {}
