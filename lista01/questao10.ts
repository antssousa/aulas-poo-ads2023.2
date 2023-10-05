// const {args} = require("process")
let n: number = 8293;

let primo: boolean = true;

for (let i = 2; i <= (n / 2); i++) {
    if (n % i === 0){
        primo = false;
        break;
    }    
}

if (primo){
    console.log(`${n} é primo`);
} else {
    console.log(`${n} não é primo`);
}



