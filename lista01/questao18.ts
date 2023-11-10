let frase: string = "Hoje é sexta";
const caracteres = frase.length;
const palavras = frase.split(" ").length;
const espacos = frase.split(" ").length - 1;
console.log(
  `Caracteres: ${caracteres}, Palavras: ${palavras}, Espaços: ${espacos}`
);
