//Crie um scritp que converte um determinado número de horas em minutos. 
//Atribua o resultado a uma variavel chamada "minutos".
//Considere que 1 hora possui 60 minutos.



let horas = parseFloat(prompt("Digite as horas: "));

let minutos = horas * 60;

document.write("As horas em minutos é: " + minutos);

// ou

// const horas = Math.abs(prompt("Digite as horas: "));

// const minutos = horas * 60;

// alert(horas + " horas = " + minutos + "minutos");