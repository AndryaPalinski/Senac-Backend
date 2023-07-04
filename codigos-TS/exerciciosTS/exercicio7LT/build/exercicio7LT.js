"use strict";
let products = [
    { produto: "pano", quantidade: 1000, valorUnitario: 23.40 },
    { produto: "varao", quantidade: 4500, valorUnitario: 43.20 },
    { produto: "panela", quantidade: 10, valorUnitario: 320.90 },
    { produto: "toalha", quantidade: 430, valorUnitario: 32.00 },
    { produto: "copo", quantidade: 5400, valorUnitario: 4.90 },
];
const ajustarPreco = (preco) => {
    const valorAjustado = preco.toFixed(2).replace('.', ',');
    return "R$" + valorAjustado;
};
function listProducts(products) {
    products.map(product => (product.valorUnitario = ajustarPreco(product.valorUnitario)));
    return products.sort((a, b) => a.quantidade - b.quantidade);
}
;
console.log(listProducts(products));
//# sourceMappingURL=exercicio7LT.js.map