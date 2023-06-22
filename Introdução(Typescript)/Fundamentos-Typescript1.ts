//Declaração de variaveis :>

const company: string = "ASIP"
let age: Number = 44;
let iscorrect: boolean = true; 

//Declaração de array :0 (2 representações)

const arr: Array<number> = [1, 2, 3];
const array: number[] = [1, 2, 3]; 

//Declaração de objetos :] 

const person: {
    name: string,
    age: number
} = {
name: "Asip",
age: 44
}

//Declaração tipo ANY ;--;

let result: any;
result = "result";
result = 2171;
result = true; 

//Declaração de função tipada >:)

function sum(n1: number, n2: number): number {
    return n1 + n2;
}

function resultsum(n1: number, n2: number): string{
    let result = n1 + n2;
    return `Resultado é ${result}.`;
}

//Declaração em função VOID '-'

function sayhello(name?: string): void{
    console.log("Hello, ", name || "world.");
}

