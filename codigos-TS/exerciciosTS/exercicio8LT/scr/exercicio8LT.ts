/*Escreva uma função que pergunta ao usuário a data de nascimento de uma pesoa, 
e a data de emissão da sua carteira de identidade. A função deve retornar um booleano 
que indica se a carteira precisa ser renovada ou não.*/

/*Alguns critérios que presisam ser seguidos:
-< 20 ou = 20, deve ser renovada de 5 em 5 anos. (se for exatamente 5 anos, deve ser enovada.)
20 e 50 anos ou = 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada.)
50 anos, deve  ser renovada de 15 em 15 anos.
*/

function licenseRenewal(dateBirth: string, dateIssue: string): boolean {
//Formata a data em 'string' para formato padrão JS.
    let formatDateBirth = new Date(dateBirth);
//Pega o ano da data formatada.
    let dateBirthYear = formatDateBirth.getFullYear();

/*Para data local
    let date =new Date(); 
    console.log(date.toLocalDateString('pt-br'));*/

    let today = new Date();
    let currentYear = today.getFullYear();

    let formatDateIssue = new Date (dateIssue);
    let dateIssueYear = formatDateIssue.getFullYear();

    let age = currentYear - dateBirthYear;
    let issueYear = currentYear - dateIssueYear

    let result: boolean = false;

//console.log(age, issueYear);

if ( age <= 20 && issueYear >= 5 ) {    
result = true;

} else if (age > 20 && age <= 50 && issueYear >= 10) {
result = true; 

} else if (age > 50 && issueYear >15) {
result = true;
    
}

return result;

};

console.log (licenseRenewal('04/23/1993', '11/07/2015'));