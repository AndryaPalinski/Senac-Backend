/* Crie uma função que receba um parâmetro qualquer e que imprima no seu console o tipo da variável.*/

/*Aqui usamos o 'typeof' para pormos uma variavel e descibrir seu tipo. Primeiro definimos a variavel
como "any" para valer qualquer valor, depois retornamos seu resultado. */

function vartype(parameter: any): any{

    const any: any = typeof(parameter);

    return any;

}

console.log(vartype(4));
console.log(vartype("4"));
console.log(vartype(true));

/*Outro ex:

function getParamenterType(param1: number = 456, param2: string = "gremio", param3: boolean = false): 
void {

console.log(typeof(param1));
console.log(typeof(param2));
console.log(typeof(param3));
}

getParamenterType();

*/