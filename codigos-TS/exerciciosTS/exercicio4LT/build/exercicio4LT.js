"use strict";
var sectors;
(function (sectors) {
    sectors["mark"] = "Marketing";
    sectors["finan"] = "Financeiro";
    sectors["vend"] = "Vendas";
    sectors["prog"] = "Programador";
})(sectors || (sectors = {}));
;
let employees = [
    { name: "Marcos", wage: 2500, sector: sectors.mark, presencial: true },
    { name: "Carol", wage: 2400, sector: sectors.vend, presencial: true },
    { name: "Helena", wage: 3500, sector: sectors.finan, presencial: false },
    { name: "Katte", wage: 2700, sector: sectors.prog, presencial: false },
];
function retornMarketing(employees) {
    return employees.filter(collaborators => collaborators.sector === sectors.mark
        && collaborators.presencial === true);
}
;
console.log(retornMarketing(employees));
//# sourceMappingURL=exercicio4LT.js.map