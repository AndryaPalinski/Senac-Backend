/*Função que recebe string com nome, outra string com data("26/06/2023")
Retornar string no formato:
`Olá me chamo ${nome}, nasci no dia ${dia} do mes ${mes} do ano ${ano}`;
*/

function apresentacions(name: string, dateBirth: string): void{

const name1: string = name
let splitDate = dateBirth.split('/');


return console.log (`Olá me chamo ${name1}, nasci no dia ${splitDate[0]} do mes ${splitDate[1]} do ano 
${splitDate[2]}`);

/*Outra forma é tranformar o return em uma string tendo um "Retorno" pra função*/

}

apresentacions('Soares', '12/03/2023');