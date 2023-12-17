let number1 = prompt('Digite o primeiro número: ');
let number2 = prompt('Digite o segundo número: ');

number1 = Number(number1);
number2 = Number(number2);

let soma = number1 + number2;
let subtra = number1 - number2; 
let multip = number1 * number2;
let divisao = number1 / number2;
let resto = number1 % number2;

alert('A soma dos dois números é: ' + soma);
alert('A subtração entre os dois números é: ' + subtra)
alert('A multiplicação dos dois números é: ' + multip)
alert('A divisão dos dois números é: ' + divisao)
alert('O resto da divisão dos números é: ' + resto)


if ((soma % 2) == 0) {
  alert('A soma dos números é par')
}
else { 
  alert('A soma dos números é impar')
}

if (number1 == number2) {
  alert('Os números são iguais')
}
else {
  alert('Os números são diferentes')
}