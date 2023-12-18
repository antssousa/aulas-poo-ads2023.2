// Super classe ou classe pai
class Veiculo{
    protected _marca: string;
    protected _modelo: string;

    constructor(marca: string, modelo: string){
        this._marca = marca;
        this._modelo = modelo;
    }

    displayInfo(): string{
        return `marca: ${this._marca}, modelo: ${this._modelo}`;
    }
}

class Carro extends Veiculo{
    private _tipoCarroceria: string;

    constructor(marca: string, modelo: string, tipoCarroceria: string){
        super(marca, modelo);
        this._tipoCarroceria = tipoCarroceria;
    }

    displayInfo(): string {
        return `${super.displayInfo()}, tipo carroceria: ${this._tipoCarroceria}`;
    }
}

class Caminhao extends Veiculo{
    private _capacidadeCarga: number;

    constructor(marca: string, modelo: string, capacidadeCarga: number){
        super(marca, modelo);
        // this._marca = marca
        this._capacidadeCarga = capacidadeCarga;
    }

    displayInfo(): string {
        return `${super.displayInfo()}, capacidade de carga: ${this._capacidadeCarga}`
    }
}

const veiculo = new Veiculo("Fiat", "Palio");
const carro = new Carro("Chevrolet", "Ônix", "Hatch");
const caminhao = new Caminhao("Scania", "Scania", 10000);

console.log(`O objeto veiculo é do tipo Veiculo: ${veiculo instanceof Veiculo}`);
console.log(`O objeto veiculo é do tipo Carro: ${veiculo instanceof Carro}`);
console.log(`O objeto carro é do tipo Carro: ${carro instanceof Carro}`);
console.log(`O objeto carro é do tipo Veiculo: ${carro instanceof Veiculo}`);
console.log(`O objeto carro é do tipo Caminhao: ${carro instanceof Caminhao}`);

console.log(`${veiculo.displayInfo()}`);
console.log(`${carro.displayInfo()}`);
console.log(`${caminhao.displayInfo()}`);

const veiculos: Veiculo[] = [];
veiculos.push(veiculo);
veiculos.push(carro);
veiculos.push(caminhao);

for (const v of veiculos) {
    console.log(`${v.displayInfo()}`);
}