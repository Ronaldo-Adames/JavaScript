//Crie um  script que calcula a aréa de um retãngulo com base na largura e altura fornecida.
//A formula para o caclculo da area é:  Area = largura * altura.


let largura = parseFloat(prompt("Digite a largura do retângulo: "));
let altura = parseFloat(prompt("Digite a altura do retângulo: "));


let area = largura * altura;


document.write("A área do retângulo é: " + area);


// ou

// const largura = Math.abs(prompt("Digite a largura do retângulo: "));
// const altura = Math.abs(prompt("Digite a altura do retângulo: "));


// const area = largura * altura;

// alert("A área do retângulo é: " + area);