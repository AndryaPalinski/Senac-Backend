//Exercicio feito em aula para completar as declarações. 

function checkTriangle(a: number, b: number, c: number): string{

    if (a !== b && b !== c) {
        return "Escaleno";
    } else if (a === b && b === c) {
        return "Equilátero";
    } else {
        return "Isóceles";
    }
}