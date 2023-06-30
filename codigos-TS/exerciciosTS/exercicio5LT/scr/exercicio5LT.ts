/*Consideando o 'array' de usuários abaixo, crie uma função que receba este 'array' como parâmetros 
e retorne uma lsita com apenas os emails dos usuários "admin".*/

/* 
{nome: "Marcos", email: "marcos@email.com" , role: "admin"}
{nome: "Carol", email: "carol@email.com" , role: "admin"}
{nome: "Helena", email: "helena@email.com" , role: "user"}
{nome: "Katte", email: "katte@email.com", role: "user"}
*/


let users = [

{name: "Marcos", email: "marcos@email.com" , role: "admin"},
{name: "Carol", email: "carol@email.com" , role: "admin"},
{name: "Helena", email: "helena@email.com" , role: "user"},
{name: "Katte", email: "katte@email.com", role: "user"}


];

const result = users.filter((user) => {

    //console.log(user);
   return user.role === "admin";

});

const emails = result.map((mapEmail)=> {

return mapEmail.email;

})

console.log(emails); 