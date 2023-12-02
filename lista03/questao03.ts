class Estoque{
    private _nome: string = "";
    private _quantidade: number = 0;
    private _preco: number = 0;

    constructor(nome: string, quantidade: number, preco: number){
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
    }

    public get nome(): string{
        return this._nome;
    }   

    public get quantidade(): number{
        return this._quantidade;
    } 
    
    public get preco(): number{
        return this._preco;
    }

    public set nome(novoNome: string){  
        if (novoNome.length > 0){
            this._nome = novoNome;
        } else {
            throw new Error("Nome inválido");
        }
    }

    public set quantidade(novaQuantidade: number){
        if (novaQuantidade >= 0){
            this._quantidade = novaQuantidade;
        } else {
            throw new Error("Quantidade inválida");
        }
    }

    public set preco(novoPreco: number){    
        if (novoPreco >= 0){
            this._preco = novoPreco;
        } else {
            throw new Error("Preço inválido");
        }
    }

    public adicionarQuantidade(quantidade: number): void{
        this.quantidade = this._quantidade + quantidade;
    }

    public removerQuantidade(quantidade: number): void{
        if (this._quantidade - quantidade >= 0){
            this.quantidade = this._quantidade - quantidade;
        } else {
            throw new Error("Quantidade inválida");
        }
    }

    tosString(): string{
        return `Nome: ${this._nome}, Quantidade: ${this._quantidade}, Preço: ${this._preco}`;
    }  
    
}

let e1: any;

try {
    e1 = new Estoque("Arroz", -10, 5);
    e1.adicionarQuantidade(10);
    e1.removerQuantidade(5);
    e1.removerQuantidade(20);
} catch(error){ 
    console.error(error.message);
} finally {
    console.log("Sempre será executado");
}