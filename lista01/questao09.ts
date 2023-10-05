let fat: number = 1;
let n: number = 130;

let i = n;

while (i > 0){
    fat *= i;
    i--;
}

console.log(`${n}! = ${fat}`);
