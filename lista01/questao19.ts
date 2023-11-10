function isPalindrome(str: string): boolean {
    // Remove espaços e converte para letras maiúsculas
    const cleanStr = str.replaceAll(" ", "").toUpperCase();
    // Inverte a string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    // Compara a string original com a string invertida
    return cleanStr === reversedStr;
  }
  
  const sequencia = "socorram me subi no onibus em marrocos"; // Substitua com a sequência desejada
  if (isPalindrome(sequencia)) {
    console.log(`${sequencia} é um palíndromo.`);
  } else {
    console.log(`${sequencia} não é um palíndromo.`);
  }
  