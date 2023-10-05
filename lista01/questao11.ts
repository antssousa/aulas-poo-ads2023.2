// const read = require('readline-sync'); // npm install readline-sync

let alturas: number[] = [];
let altura: number;
for(;;){
    altura = Number(prompt("Digite uma altura, finalizar digite um valor <= 0"));
    // altura = read.questionInt("Digite uma altura, finalizar digite um valor <= 0");
    if (altura <= 0){
        break;
    }
    
    alturas.push(altura)
}

let menor = 0;
let maior = 0;

for (let i = 1; i < alturas.length; i++) {
    if(alturas[maior] < alturas[i]){
        maior = i;
    }

    if(alturas[menor] > alturas[i]){
        menor = i;
    }
}

console.log(`O maior aluno é ${maior} e tem altura ${alturas[maior]} cm`);
console.log(`O menor aluno é ${menor} e tem altura ${alturas[menor]} cm`);