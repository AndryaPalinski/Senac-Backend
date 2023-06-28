/*Criar uma função que receba o primeiro e o sobrenome, o sobrenome pode ser nulo, exibir nome completo*/

function nameAndLastname(name: string, lastname: string): string{

let name1: string = name 
let lastname1: string | null = lastname

return(`Olá meu nome é ${name1} e meu sobrenome é ${lastname1}.`);

}

console.log (nameAndLastname('Andrya', 'Santos'));

/* function fullname(firstname: string, lastname?: string): void{

console.log(firstname, lastname || );

}

fullname('Asip');*/

//Outra forma de fazer e mais simples ^
//                                    |