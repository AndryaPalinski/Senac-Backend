"use strict";
let users = [
    { nome: "Marcos", saldoTotal: 1000, debitos: [290, 200, 300] },
    { nome: "Carol", saldoTotal: 7400, debitos: [90, 200, 300] },
    { nome: "Helena", saldoTotal: 32000, debitos: [] },
    { nome: "Katte", saldoTotal: 3200, debitos: [9000, 200, 300] },
];
function getNegativeAmount(users) {
    calculateDebts();
    return users.filter(clients => {
        return clients.saldoTotal < 0;
    });
}
;
function calculateDebts() {
    return users.map(user => {
        const sumDebts = user.debitos.reduce((acumulator, value) => value ? acumulator += value : 0, 0);
        user.saldoTotal = user.saldoTotal - sumDebts;
        user.debitos = [];
    });
}
;
console.log(getNegativeAmount(users));
//# sourceMappingURL=exercicio6LT.js.map