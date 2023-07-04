/*Fatorial = uma oepração matámatica representado por um !. Ele consiste em relizar a multiplicação de 
todos os números (apartir de 1) até aquele colocadoi na operação.*/
/*Exemplo:

3! = 3*2*1 = 6
4! = 4*3*2*1 = 24
5! = 5*4*3*2*1 = 120
6! = 6*5*4*3*2*1 = 720

-Dois valores pra tomar cuidado: 1! = 1 e 0! = 1
*/

function fatorial(word: string): number{

let wordSize: number = word.length;

if (wordSize === 0 || wordSize === 1){

    return 1;
    
}

//Com laço "While". :>

/*let result = wordSize;
while (wordSize > 1) {
    wordSize--;

    result *= wordSize;
}

return result; */

//Com laço "for". :]

for(let i = wordSize -1; i > 1; i--) {
 wordSize *= i;

}

return wordSize;

}

console.log (fatorial("arena"));
