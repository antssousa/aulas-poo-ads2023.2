class GeradorID{
    private static contador: number = 0;

    public static gerarNovoID(): number{
        GeradorID.contador++;
        return GeradorID.contador; 
    }

    public static getContador(): number{
        return GeradorID.contador;
    }

}

console.log(`id gerado: ${GeradorID.gerarNovoID()}`);
console.log(`id gerado: ${GeradorID.gerarNovoID()}`);
console.log(`id gerado: ${GeradorID.gerarNovoID()}`);
console.log(`id gerado: ${GeradorID.gerarNovoID()}`);
console.log(`id gerado: ${GeradorID.gerarNovoID()}`);
console.log(`id gerado: ${GeradorID.gerarNovoID()}`);
console.log(`id gerado: ${GeradorID.gerarNovoID()}`);
console.log(`id gerado: ${GeradorID.gerarNovoID()}`);
console.log(`id gerado: ${GeradorID.gerarNovoID()}`);