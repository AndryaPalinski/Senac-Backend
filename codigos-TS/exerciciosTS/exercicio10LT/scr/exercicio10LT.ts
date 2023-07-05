/*Escreva uma função para converter de números normais para algaritimos romanos (string).*/
/*Considere o exemplo de 1990.
Em algarismo romano 1990 é MCMXC: 1000=M 900=CM 90= XC.
*/


function convertToRomanNumbers(year: number): string{

    const values = [
        {symbol: "M", value: 1000},
        {symbol: "CM", value: 900},
        {symbol: "D", value: 500},
        {symbol: "CD", value: 400},
        {symbol: "C", value: 100},
        {symbol: "XC", value: 90},
        {symbol: "L", value: 50},
        {symbol: "XL", value: 40},
        {symbol: "X", value: 10},
        {symbol: "IX", value: 9},
        {symbol: "V", value: 5},
        {symbol: "IV", value: 4},
        {symbol: "I", value: 1},    
        ];

        let result = '';

        for (const {symbol, value} of values){

 while (year >= value) {

result += symbol;

year -= value;  

 }                 

}

return result;

}