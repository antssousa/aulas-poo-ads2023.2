class Avaliacao{
    private _nota1: number;
    private _nota2: number;

    constructor(nota1: number, nota2: number){
        this._nota1 = nota1;
        this._nota2 = nota2;
    }

    calcularNotaFinal(): number{
        return (this.nota1 + this.nota2) / 2;
    }

    public get nota1(){
        return this._nota1;
    }
    public get nota2(){
        return this._nota2;
    }
}

class AvaliacaoEscrita extends Avaliacao{

    constructor(gramatica: number, fluencia: number){
        super(gramatica, fluencia);
    }

    calcularNotaFinal(): number {
        return (this.nota1 * 3 + this.nota2 * 2) / 5
    }
}

class AvaliacaoOral extends Avaliacao{

    constructor(gramatica: number, fluencia: number){
        super(gramatica, fluencia);
    }

    calcularNotaFinal(): number {
        return (this.nota1 * 2 + this.nota2 * 3) / 5
    }

}

const av1 = new Avaliacao(7, 8);
console.log(`Avaliacao: ${av1.calcularNotaFinal()}`);
const av2 = new AvaliacaoEscrita(7, 8);
console.log(`Avaliacao Escrita: ${av2.calcularNotaFinal()}`);
const av3 = new AvaliacaoOral(7, 8);
console.log(`Avaliacao Oral: ${av3.calcularNotaFinal()}`);