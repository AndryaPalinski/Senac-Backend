"use strict";
function licenseRenewal(dateBirth, dateIssue) {
    let formatDateBirth = new Date(dateBirth);
    let dateBirthYear = formatDateBirth.getFullYear();
    let today = new Date();
    let currentYear = today.getFullYear();
    let formatDateIssue = new Date(dateIssue);
    let dateIssueYear = formatDateIssue.getFullYear();
    let age = currentYear - dateBirthYear;
    let issueYear = currentYear - dateIssueYear;
    let result = false;
    if (age <= 20 && issueYear >= 5) {
        result = true;
    }
    else if (age > 20 && age <= 50 && issueYear >= 10) {
        result = true;
    }
    else if (age > 50 && issueYear > 15) {
        result = true;
    }
    return result;
}
;
console.log(licenseRenewal('04/23/1993', '11/07/2015'));
//# sourceMappingURL=exercicio8LT.js.map