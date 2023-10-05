let link: number = 600; // Mb = 1024 * 1024

let file: number = 120; // MB = 1024 * 1024

let time: number = ((file * 8) / link) / 60;

console.log(`O tempo de download é ${time.toFixed(2)} min`);
console.log("O tempo de download é " + time.toFixed(2) + " min");

