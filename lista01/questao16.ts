function embaralha(s:string):string{
    let v_string:string[] = s.split("");
    let emb:string = "";
    while(v_string.length !== 0){
        let index = Math.floor(Math.random() * v_string.length);
        let char = v_string.splice(index, 1)[0];
        emb += char;
    }
    
    return emb;
}

function embaralha2(s:string):string{
    let vetor = s.split("");

    vetor.sort(() => Math.random() > 0.5 ? -1: 1);

    return vetor.join("");
}

console.log(`${embaralha("goaiaba")}`);
console.log(`${embaralha("mariola")}`);
console.log(`${embaralha("manga")}`);
console.log(`${embaralha2("goaiaba")}`);
console.log(`${embaralha2("mariola")}`);
console.log(`${embaralha2("manga")}`);