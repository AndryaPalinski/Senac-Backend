"use strict";
function fatorial(word) {
    let wordSize = word.length;
    if (wordSize === 0 || wordSize === 1) {
        return 1;
    }
    for (let i = wordSize - 1; i > 1; i--) {
        wordSize *= i;
    }
    return wordSize;
}
console.log(fatorial("arena"));
//# sourceMappingURL=exercicio9LT.js.map