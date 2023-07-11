// Crie um script que extraia uma parte especifica de uma string. 
//Por exemplo, extrair os primeiros três caracteres de uma palavra e exiba o resultado.

const String = prompt("Digite uma string(Palavra): ");

const string = String.slice(0,3);

document.write("Extrair os primeiros três caracteres de uma palavra: " + string);