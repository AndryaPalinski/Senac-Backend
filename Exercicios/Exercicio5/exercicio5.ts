function checkIIDrenovation(): boolean{

    const currentyear = Number(prompt("Digite o ano atual: "));
    const birthyear = Number(prompt("Digite o ano de nascimento: "));
    const issueyear = Number (prompt("Digite o ano de emissão do documento: "));

    const age: number = currentyear - birthyear;
    const wallettime: number = currentyear - issueyear;

    const cond1 = age <= 20 && wallettime >= 5;
    const cond2 = age > 20 && age <= 50 && wallettime >= 10;
    const cond3 = age > 50 && wallettime >= 15;

    return (cond1 || cond2 || cond3);

}