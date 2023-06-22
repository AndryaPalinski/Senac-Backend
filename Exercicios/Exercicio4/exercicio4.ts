function compartwonumbers (num1: number, num2: number):  number{

let highernumber: number;
let lowernumber: number;

if (num1 > num2) {

    highernumber = num1;
    lowernumber = num2;
} else {

    highernumber = num2;
    lowernumber = num1;
}

const diference = highernumber - lowernumber;

return diference 

}