const tam = 100000;
let vetor = Array<Number>(tam);

for (let i = 0; i < vetor.length; i++) {
    vetor[i] = Math.floor(Math.random() * tam);    
}
console.log(`[${vetor}]`);


for(let i = 0; i < vetor.length; i++){
    let trocou:boolean = false;
    for(let j = 0; j < vetor.length - 1; j++){
        if (vetor[j] > vetor[j + 1]){
            let aux = vetor[j];
            vetor[j] = vetor[j + 1];
            vetor[j + 1] = aux;
            trocou = true;
        }
    }
    if (!trocou){
        break;
    }
}

console.log(`Vetor Ordenado = [${vetor}]`);
