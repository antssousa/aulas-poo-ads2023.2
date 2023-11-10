function validateCPF(cpf: string): boolean {
    // Remove caracteres não numéricos e verifica se o CPF tem 11 dígitos
    const cleanCPF = cpf.replace(/\D/g, '');
    if (cleanCPF.length !== 11) {
      return false;
    }
  
    // Converte a string do CPF para um array de números
    const cpfArray = cleanCPF.split('').map(Number);
  
    // Calcula o primeiro dígito verificador
    let sum = 0;
    for (let i = 0; i < 9; i++) {
      sum += cpfArray[i] * (10 - i);
    }
    const remainder1 = (sum * 10) % 11;
    const digit1 = (remainder1 === 10) ? 0 : remainder1;
  
    // Calcula o segundo dígito verificador
    sum = 0;
    for (let i = 0; i < 10; i++) {
      sum += cpfArray[i] * (11 - i);
    }
    const remainder2 = (sum * 10) % 11;
    const digit2 = (remainder2 === 10) ? 0 : remainder2;
  
    // Verifica se os dígitos verificadores calculados são iguais aos informados pelo usuário
    return cpfArray[9] === digit1 && cpfArray[10] === digit2;
  }
  
  // Exemplo de uso:
  const cpf = "123.456.789-09"; // Substitua com o CPF que deseja validar
  if (validateCPF(cpf)) {
    console.log(`${cpf} é um CPF válido.`);
  } else {
    console.log(`${cpf} não é um CPF válido.`);
  }
  