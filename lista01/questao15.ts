let n:number = 12341;

let n_string:string = n + "";
let n_invert:string = "";
for(let i = n_string.length - 1; i >= 0; i--){
    n_invert = n_invert + n_string[i];
}

console.log(`${n} invertido ${n_invert}`);

let exp:number = Math.floor(Math.log10(n));

let aux:number = n;

let n_invert2:number = 0;

while(aux !== 0){
    let resto = aux % 10;
    n_invert2 += resto * (10 ** exp);
    exp--;
    aux = Math.floor(aux / 10);
}
console.log(`${n} invertido ${n_invert2}`);