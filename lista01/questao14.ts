let n:number = 1234;

console.log(`A quantidade de dígitos é ${n.toString().length}`);

let quant_digitos:number = 0;

let aux:number = n;

while(aux !== 0){
    aux = Math.floor(aux / 10);
    quant_digitos++;
}
console.log(`A quantidade de dígitos de ${n} é ${quant_digitos}`);


console.log(`A quantidade de dígitos de ${n} é ${Math.floor(Math.log10(n)) + 1}`);