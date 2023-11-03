// Definição da classe
class Aluno{
    // Atributos
    matricula: string;
    nome: string;
    notas: number[];
    trabalho: number;

    //Construtor
    constructor();
    constructor(matricula: string, nome: string, notas: number[], trabalho: number);
    constructor(matricula?: string, nome?: string, notas?: number[], trabalho?: number){
        this.matricula = matricula || "";
        this.nome = nome || "Fulano";
        this.notas = notas || [0, 0];
        this.trabalho = trabalho || 0;
    }

    // Definição dos métodos
    media(): number{
        let m: number = (this.notas[0] * 2.5 + this.notas[1] * 2.5 + this.trabalho * 2) / 7;
        return m;
    }

    final(): number{
        let m: number = this.media();
        if (m >= 7 || m < 4){
            return 0;
        }
        return 12 - m;
    }
}

const aluno1 = new Aluno("11111", "João Silva", [8, 9], 7);

console.log(`O aluno ${aluno1.nome} tem média ${aluno1.media().toFixed(2)} e precisa para a final ${aluno1.final().toFixed(2)}`);

const aluno2 = new Aluno("11111", "João Peixe", [3, 4], 5);
console.log(`O aluno ${aluno2.nome} tem média ${aluno2.media().toFixed(2)} e precisa para a final ${aluno2.final().toFixed(2)}`);

const aluno3 = new Aluno();
console.log(`O aluno ${aluno3.nome} tem média ${aluno3.media().toFixed(2)} e precisa para a final ${aluno3.final().toFixed(2)}`);