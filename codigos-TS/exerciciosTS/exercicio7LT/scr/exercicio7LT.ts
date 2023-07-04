/*Aproveitando a função j */


let products = [
    {produto: "pano", quantidade: 1000 , valorUnitario: 23.40},
    {produto: "varao", quantidade: 4500 , valorUnitario: 43.20},
    {produto: "panela", quantidade: 10 , valorUnitario: 320.90},
    {produto: "toalha", quantidade: 430 , valorUnitario: 32.00},
    {produto: "copo", quantidade: 5400 , valorUnitario: 4.90},   
];

type stok = {
    produto: string,
    quantidade: number,
    valorUnitario: number | string,
};

const ajustarPreco = (preco: number): string =>{

const valorAjustado: string = preco.toFixed(2).replace('.', ',')
return "R$" +valorAjustado

};

function listProducts(products: stok[]): string {

//Use a função "ajustar preço" para corrigir os preços do estoque. 

products.map(product => (
    product.valorUnitario = ajustarPreco(product.valorUnitario as number)
));

return products.sort((a, b) =>
a.quantidade - b.quantidade
) as any

};

console.log(listProducts(products))
