//Crie um  script que converta uma temperatura em graus Celsius para Fahrenheit. 
//A formula  para conversão é Fahrenheit =(Celsius * 9/5) + 32.


let celsius = parseFloat(prompt("Digite a temperatura em graus Celsius: "));

let fahrenheit = (celsius * 9/5) + 32;


//console.log("A temperatura em Fahrenheit é: " + fahrenheit);

document.write("A temperatura em Fahrenheit é: " + fahrenheit);


//ou


//const celsius = Math.abs(prompt("Quantos graus;"));
//const fahrenheit = ((celsius)prompt("Quantos graus"));
// const fahrenheit = (celsius * 9/5) + 32;
// alert("convertendo ficou: " + fahrenheit + "grau");