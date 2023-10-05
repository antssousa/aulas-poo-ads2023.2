let fib: number = 1;
let ant: number = 0;
let n: number = 100;

for (let i = 0; i < n; i++) {
    console.log(`${i + 1}º número = ${fib}`);
    let aux = fib;
    fib = fib + ant;
    ant = aux;
}