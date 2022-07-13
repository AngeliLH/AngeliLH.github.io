function exibeNome(){
    let nome = document.getElementById("c1 campo-nome").value
    document.getElementById("resultadoNome").innerHTML = "Opa! bom dia, " + nome + "!"
    // alert(nome)
    // console.log(nome)
}

function parOuImpar(){
    let number = document.getElementById("c2 espaço-numero").value
    if (number%2 == 0) {
        document.getElementById("resultadoNumero").innerHTML = "O número " + number + " é par!"
      } else {
        document.getElementById("resultadoNumero").innerHTML = "O número " + number + " é impar!"
      }
}

function geraAleatorio(){
    let min = document.getElementById("c3 min").value
    let max = document.getElementById("c4 max").value
    let quantia = document.getElementById("c5 quantidade").value
    let valAleatorios = [];
    for (let i = 0; i < quantia; i++){
      valAleatorios.push(Math.floor(Math.random() * (max - min) + min));
    }
    document.getElementById("resultado").innerHTML = valAleatorios
}

function geraMega(){
  let quantidade = document.getElementById("quantia").value
  let nAleatorios = [];
  for (let i = 0; i < quantidade; i++){
    nAleatorios.push(Math.floor(Math.random() * (max - min) + min ));
  }
  document.getElementById("resultadoMega").innerHTML = nAleatorios
}