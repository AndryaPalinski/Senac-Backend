//Função tipo (number)
// function operaciotions(num1: number, num2: number): void{
// let sum: number = num1 + num2;
// let diference: number = num1 - num2;
// let multiplicaition: number = num1 * num2;
// let divison: number = num1 / num2;
// console.log(`Numeros recebidos: ${num1} e ${num2}
// \nSoma: ${sum}
// \nSubtração: ${diference}
// \nMultiplicação: ${multiplicaition}
// \nDivisão: ${divison}`)
// }
// operaciotions(600, 45); 
//Função tipo (string)
function operaciotions(num1, num2) {
    var sum = num1 + num2;
    var diference = num1 - num2;
    var multiplicaition = num1 * num2;
    var divison = num1 / num2;
    console.log("Numeros recebidos: ".concat(num1, " e ").concat(num2, "\n    \nSoma: ").concat(sum, "\n    \nSubtra\u00E7\u00E3o: ").concat(diference, "\n    \nMultiplica\u00E7\u00E3o: ").concat(multiplicaition, "\n    \nDivis\u00E3o: ").concat(divison));
}
var result = operaciotions(600, 45);
console.log(result);
