/*Como guardar as contas dos clientes: Salvar, nome, o saldo total e uma lista contendo 
todos od débitos realizados pelo cliente.*/

/* 
{nome: "Marcos", saldoTotal: 1000 , debitos: [290, 200, 300]},
{nome: "Carol", saldoTotal: 7400 , debitos: [90, 200, 300]},
{nome: "Helena", saldoTotal: 32000 , debitos: [100, 30, 320]},
{nome: "Katte", saldoTotal: 3200 , debitos: [9000, 200, 300]}
*/

/* Crie um array como parametro, atualiza o saldo total descontando todos os débitos e 
retorne apenas os clientes com saldo negativo. */

let users = [
    {nome: "Marcos", saldoTotal: 1000 , debitos: [290, 200, 300]},
    {nome: "Carol", saldoTotal: 7400 , debitos: [90, 200, 300]},
    {nome: "Helena", saldoTotal: 32000 , debitos: []},
    {nome: "Katte", saldoTotal: 3200 , debitos: [9000, 200, 300]},   
];

type clients = {
    nome: string,
    saldoTotal: number,
    debitos: number[],
};

function getNegativeAmount(users: clients[]): clients[]{
calculateDebts();

return users.filter(clients => {

return clients.saldoTotal < 0;
    
});
};

function calculateDebts () {

    return users.map(user => {

        const sumDebts = user.debitos.reduce((acumulator: number, value: number) => 

        value? acumulator += value : 0
              //acumulator = acumulator + value

        , 0);

user.saldoTotal = user.saldoTotal - sumDebts;
// ou user.saldoTotal -= sumDebts

user.debitos = [];

    });
};

console.log(getNegativeAmount(users));

