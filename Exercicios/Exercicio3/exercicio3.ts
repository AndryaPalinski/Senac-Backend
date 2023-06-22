//Nessa questão pode ser usado o "any" ou "boolean". 

function CheckLeapYear(year: number): boolean{

    const cond1 = year % 400 === 0;
    const cond2 = (year % 4 === 0) && (year % 100 !== 0);
    
    return cond1 || cond2; 

}