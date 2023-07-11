// crie um script que calcula o indice de massa corporal (IMC) com base no peso e altura fornecidos.
//A formula para o calculo do IMC é : IMC= Peso / (Altura * Altura)


let peso = parseFloat(prompt("Digite peso: "));
let altura = parseFloat(prompt("Digite a altura : "));


//console.log(peso, altura);

let IMC= peso / (altura * altura);

document.write("o calculo do IMC é : " + IMC);


//ou

// const peso = Math.abs(prompt("Digite peso: "));
// const altura = Math.abs(prompt("Digite a altura : "));

// const IMC= peso / (altura * altura);

// alert("Seu IMC é: "  + IMC.toFixed(2));  esclarecimento o (2) significa 2 casas após a virgula.
