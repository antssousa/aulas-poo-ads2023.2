let inicio: number = 10;
let fim: number = 1;
let soma: number = 0;

if (inicio > fim){
    let aux = inicio;
    inicio = fim;
    fim = aux;
}

for (let i = inicio; i <= fim ; i++) {
    console.log(`${i}`);
    soma += i;    
}
console.log(`A soma é ${soma}`);