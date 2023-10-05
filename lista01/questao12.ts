let jogadas = Array<Number>(100);


for (let i = 0; i < jogadas.length; i++) {
   jogadas[i] = Math.floor(Math.random() * 6) + 1;
}

let d1, d2, d3, d4, d5, d6: number;
d1 = d2 = d3 = d4 = d5 = d6 = 0;
for (let i = 0; i < jogadas.length; i++) {
    switch(jogadas[i]){
        case 1: d1++; break;
        case 2: d2++; break;
        case 3: d3++; break;
        case 4: d4++; break;
        case 5: d5++; break;
        case 6: d6++; break;
        default: console.log(`Não deu certo`);
    }
}


console.log(`O valor 1 saiu ${d1}`);
console.log(`O valor 2 saiu ${d2}`);
console.log(`O valor 3 saiu ${d3}`);
console.log(`O valor 4 saiu ${d4}`);
console.log(`O valor 5 saiu ${d5}`);
console.log(`O valor 6 saiu ${d6}`);
jogadas.sort();
console.log(`${jogadas}`);