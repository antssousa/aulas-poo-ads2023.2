class Pet{
    nome: string;
    idade: number;
    tipo: string;

    constructor(nome: string, idade: number, tipo: string){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    aniversario(): void{
        this.idade++;
    }

    toString(): string{
        return `Nome: ${this.nome}\nIdade: ${this.idade}\nTipo: ${this.tipo}`;
    }
}

const p1 = new Pet("Toscana", 8, "cachorro");
const p2 = new Pet("Rose", 12, "jabuti");

console.log(`${p1}`);
console.log(`${p2}`);