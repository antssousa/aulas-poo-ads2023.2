class Ponto{
    x: number;
    y: number;

    constructor();
    constructor(x: number, y: number);
    constructor(p: Ponto);
    constructor(...args: any){
        if (args.length == 0){
            this.x = 0;
            this.y = 0;
        } else if (args.length == 1){
            let outroPonto = args[0] as Ponto;
            this.x = outroPonto.x;
            this.y = outroPonto.y;
        } else {
            this.x = args[0];
            this.y = args[1];
        }
    }

    distancia(p: Ponto): number{
        let d = Math.sqrt((this.x - p.x) ** 2 + (this.y - p.y) ** 2);
        return d;
    }

    toString(): string{
        return `(x = ${this.x}, y = ${this.y})`
    }
}

const p1 = new Ponto();
console.log(`p1 = ${p1}`);
const p2 = new Ponto(3, 4);
console.log(`p2 = ${p2}`);
const p3 = new Ponto(p2);
console.log(`p3 = ${p3}`);

console.log(`A distancia entre p1 e p2 é ${p1.distancia(p2)}`);
console.log(`A distancia entre p2 e p3 é ${p2.distancia(p3)}`);