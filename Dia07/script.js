const operacao = prompt("Qual operação deseja fazer? (1 - adição, 2 - subtração, 3 - multiplicação, 4 - divisão)")

function adicao(num1, num2) {
  return num1 + num2;
}

function subtracao(num1, num2) {
  return num1 - num2;
}

function multiplicacao(num1, num2) {
  return num1 * num2;
}

function divisao(num1, num2) {
  return num1 / num2;
}


let num1, num2, resultado;

switch (operacao) {
  case "1":
    num1 = prompt("Digite o primeiro número.")
    num2 = prompt("Digite o segundo número.")
    resultado = adicao(parseInt(num1), parseInt(num2))
    console.log(resultado)
    break;
  case "2":
    num1 = prompt("Digite o primeiro número.")
    num2 = prompt("Digite o segundo número.")
    resultado = subtracao(parseInt(num1), parseInt(num2))
    console.log(resultado)
    break;
  case "3":
    num1 = prompt("Digite o primeiro número.")
    num2 = prompt("Digite o segundo número.")
    resultado = multiplicacao(parseInt(num1), parseInt(num2))
    console.log(resultado)
    break;
  case "4":
    num1 = prompt("Digite o primeiro número.")
    num2 = prompt("Digite o segundo número.")
    resultado = divisao(parseInt(num1), parseInt(num2))
    console.log(resultado)
    break;
  default:
    console.log("Opção inválida!")
}