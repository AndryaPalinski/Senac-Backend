"use strict";
function apresentacions(name, dateBirth) {
    const name1 = name;
    let splitDate = dateBirth.split('/');
    return console.log(`Olá me chamo ${name1}, nasci no dia ${splitDate[0]} do mes ${splitDate[1]} do ano 
${splitDate[2]}`);
}
apresentacions('Soares', '12/03/2023');
//# sourceMappingURL=exercicio7.js.map