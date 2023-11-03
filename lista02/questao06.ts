class Tarefa{
    descricao: string;
    prioridade: number; // Maior o número maior a prioridade
    concluido: boolean;

    constructor(descricao: string, prioridade: number){
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.concluido = false;
    }

    mudarStatus(): void{
        this.concluido = !this.concluido;
    }

    toString(): string{
        return `Tarefa: ${this.descricao}\nPrioridade: ${this.prioridade}`;
    }
}

class GerenciadorDeTarefas{
    tarefas: Tarefa[];
    
    constructor() {
        this.tarefas = [];
    }

    adicionar(t: Tarefa): void{
        this.tarefas.push(t);
    }

    listarPendentes(): Tarefa[]{
        const naoConcluidas: Tarefa[] = [];
        for (const t of this.tarefas) {
            if(t.concluido === false){ // !t.concluido
                naoConcluidas.push(t);
            }
        }
        return naoConcluidas;
    }

    listarPorPrioridade(): string{
        this.tarefas.sort((a: Tarefa, b: Tarefa) => b.prioridade - a.prioridade);
        return this.tarefas.toString();
    }
}

const g = new GerenciadorDeTarefas();

const t1 = new Tarefa("Comprar comida para a Toscana", 10);
const t2 = new Tarefa("Ver se a Rose tá viva", 9);
const t3 = new Tarefa("Lavar o carro", 1);
const t4 = new Tarefa("Ir no médico", 6);

g.adicionar(t1);
g.adicionar(t2);
g.adicionar(t3);
g.adicionar(t4);

console.log(`${g.listarPendentes().toString()}`);
console.log(`${g.listarPorPrioridade()}`);
