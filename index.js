function exibeNome(){
    let nome = document.getElementById("c1-campo-nome").value
    document.getElementById("c1-resultadoNome").innerHTML = "Opa! bom dia, " + nome + "!"
    // alert(nome)
    // console.log(nome)
}

function parOuImpar(){
    let number = document.getElementById("c2-espaço-numero").value
    if (number%2 == 0) {
        document.getElementById("c2-resultadoNumero").innerHTML = "O número " + number + " é par!"
      } else {
        document.getElementById("c2-resultadoNumero").innerHTML = "O número " + number + " é impar!"
      }
}

function geraAleatorio(){
    let min = document.getElementById("c3-min").value
    let max = document.getElementById("c4-max").value
    let quantia = document.getElementById("c5 quantidade").value
    let valAleatorios = [];
    for (let i = 0; i < quantia; i++){
      valAleatorios.push(Math.floor(Math.random() * (max - min) + min));
    }
    document.getElementById("c3-resultado").innerHTML = valAleatorios
}

function geraJogoMega(){
  let nJogos = parseInt(document.getElementById("c6-campo-numerico").value)
  let JogosMega
  for (let i = 0; i < nJogos; i++){
    JogosMega.push("jogo" + 1)
  }
  document.getElementById("c4-resultadoMega").innerHTML = JogosMega
}

function CriaJogoValido(){
  
}

function geraCalculo(){
  let valor1 = parseFloat(document.getElementById("c1-campo-numerico").value)
  let valor2 = parseFloat(document.getElementById("c2-campo-numerico").value)
  
  // if (opcao == 1) {
  //   console.log(soma(valor1, valor2))
  // } else if (opcao == 2) {
  //   console.log(subtracao(valor1, valor2))
  // } else if (opcao == 3) {
  //   console.log(multiplicacao(valor1, valor2))
  // } else if (opcao == 4) {
  //   console.log(divisao(valor1, valor2))
  // }
  
  // function soma(a, b) {
  //   let soma = a + b
  //   return soma;
  // }
  
  // function subtracao(a, b) {
  //   let subtracao = a - b
  //   return subtracao
  // }
  
  // function multiplicacao(a, b) {
  //   let multiplicacao = a * b
  //   return multiplicacao
  // }
  
  // function divisao(a, b) {
  //   let divisao = a / b
  //   return divisao
  // }
  
}



