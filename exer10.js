// Crie um script que substitua as letras, consforme:
//a. A-> 4
//b. I (letra i) -> 1
//c. E -> 3
//d. O (letra ó) -> 0 (zero)
//e. S -> 5


const frase = prompt("Escreva uma frase");
const resultado = frase
  .replaceAll("a", "4")
  .replaceAll("i", "1")
  .replaceAll("e", "3")
  .replaceAll("o", "0")
  .replaceAll("s", "S");

alert(resultado);
