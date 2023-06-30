"use strict";
let users = [
    { name: "Marcos", email: "marcos@email.com", role: "admin" },
    { name: "Carol", email: "carol@email.com", role: "admin" },
    { name: "Helena", email: "helena@email.com", role: "user" },
    { name: "Katte", email: "katte@email.com", role: "user" }
];
const result = users.filter((user) => {
    return user.role === "admin";
});
const emails = result.map((mapEmail) => {
    return mapEmail.name;
});
console.log(emails);
//# sourceMappingURL=exercicio5LT.js.map