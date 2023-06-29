/*Um array traz as pessoas colaboradoras de uma empresa, com seus salários, setores e se trabalham 
presencialmente ou por office.*/

/* 
{nome: "Marcos", salário: 2500, setor: "marketing", presencial: true}
{nome: "Carol", salário: 2400, setor: "financeiro", presencial: true}
{nome: "Helena", salário: 3500, setor: "vendas", presencial: false}
{nome: "Katte", salário: 2700, setor: "programador", presencial: false}
*/

/*Considerando o array acima, crie um 'enum' para os setores e um 'type' para as função que receba este array como parametro e 
retorne apenas as pessoas do setor de marketing que trabalham presencialmente. */

enum sectors {

    mark = "Marketing" ,
    finan = "Financeiro" ,
    vend =  "Vendas",
    prog = "Programador"
}; 

type collaborators = {

name: string, 
wage: number,
sector: sectors,
presencial: boolean 
};

let employees = [

{name: "Marcos", wage: 2500, sector: sectors.mark, presencial: true},
{name: "Carol", wage: 2400, sector: sectors.vend, presencial: true},
{name: "Helena", wage: 3500, sector: sectors.finan, presencial: false},
{name: "Katte", wage: 2700, sector: sectors.prog, presencial: false},

]

function retornMarketing(employees: collaborators[]): collaborators[] {

return employees.filter(collaborators => collaborators.sector === sectors.mark
 && collaborators.presencial === true)

};

console.log(retornMarketing(employees));