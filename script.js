
 function multiplicacao(number1, number2) {
    return number1 * number2;
  }
  function divisao(num1, num2) {
    if (num2 !== 0) {
      return num1 / num2;
    }
  }
  function soma(num1, num2) {
    return num1 + num2;
  }
  function subtracao(num1, num2) {
    return num1 - num2;
  }

  let numero1 = parseFloat(prompt("Digite um número"));
  let numero2 = parseFloat(prompt("Digite outro número"));
  

  let resultadoMultiplicacao = multiplicacao(numero1, numero2);
  console.log("Multiplicação dos números é: " + resultadoMultiplicacao);

  let resultadoSoma = soma(numero1, numero2);
  console.log("A soma dos números é: " + resultadoSoma);
  
  let resultadoDivisao = divisao(numero1, numero2);
  console.log("Divisão dos números é: " + resultadoDivisao);
  
  let resultadoSubtracao = subtracao(numero1, numero2);
  console.log("Subtração dos números é: " + resultadoSubtracao);
