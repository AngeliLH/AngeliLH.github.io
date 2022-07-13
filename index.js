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