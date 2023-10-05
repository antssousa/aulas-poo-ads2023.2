let a: number = 3;
let b: number = 4;
let c: number = 5;

if (a < b + c && b < a + c && c < a + b){
    if(a === b && b === c){
        console.log("Os valores formam um triângulo equilátero");
    } else if (a === b || b === c || a === c) {
        console.log("Os valores formam um triângulo isosceles");
    } else {
        console.log("Os valores formam um triângulo escaleno");
    }
} else {
    console.log("Os valores não formam um triângulo");
}
