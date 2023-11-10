class Pessoa{
    nome: string;
    email: string;

    constructor();
    constructor(nome: string, email: string);
    constructor(nome?: string, email?: string){
        this.nome = nome || "";
        this.email = email || "";
    }

    toString(): string{
        return `Nome: ${this.nome}, e-mail: ${this.email}`;
    }
}

class Evento{
    nome: string;
    descricao: string;
    data: Date;
    participantes: Pessoa[];

    constructor();
    constructor(nome: string, descricao: string, data: Date);
    constructor(nome?: string, descricao?: string, data?: Date){
        this.nome = nome || "";
        this.descricao = descricao || "";
        this.data = data || new Date();
        this.participantes = [];
    }

    adicionar(p: Pessoa): void{
        this.participantes.push(p);
    }

    remover(email: string): Pessoa | null{
        for (let i = 0; i < this.participantes.length; i++) {
            if(email === this.participantes[i].email){
                return this.participantes.splice(i, 1)[0];
            }            
        }
        return null;
    }

    buscar(email: string): Pessoa | null{
        for (const p of this.participantes) {
            if (p.email === email) {
                return p;
            }
        }
        return null;
    }
    listar(): string{
       let saida: string = `Participantes da ${this.nome}\n`;
       for (const p of this.participantes) {
            saida += p.toString() + '\n-------------------\n';
       }
       return saida;
    }
}

const p1 = new Pessoa("Evaldo", "evaldo@mail.com");
const p2 = new Pessoa("José Maria", "josemaria@mail.com");
const p3 = new Pessoa("Andrew Dylan", "andrew@mail.com");
const p4 = new Pessoa("Gaby", "gaby@mail.com");

const calourada = new Evento("Computaria", "Calourada de ADS", new Date(2023, 11, 14));
calourada.adicionar(p1);
calourada.adicionar(p2);
calourada.adicionar(p3);
calourada.adicionar(p4);

console.log(calourada.listar());

if (calourada.remover("andrew@mail.com")){ //!==
    console.log("Removeu");
} else {
    console.log("Não removeu");
}

console.log(calourada.listar());
