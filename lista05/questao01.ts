class SistemaDeReserva{
    private _nome: string = "";
    private _dataEntrada: Date = new Date();
    private _dataSaida: Date = new Date();
    private _diaria: number;

    constructor(diaria: number){
        this._diaria = diaria;
    }

    reservar(dias: number): number;
    reservar(entrada: Date, saida: Date): number;
    reservar(nome: string, dias: number): number;
    reservar(param1: any, param2?: any): number{
        if (typeof param1 === "number"){
            return param1 * this._diaria;
        } else if (param1 instanceof Date && param2 instanceof Date){
            let dataEntrada = param1 as Date;
            let dataSaida = param2 as Date;
            let dias = Math.floor((dataSaida.getTime() - dataEntrada.getTime()) / (1000 * 60 * 60 * 24));
            return dias * this._diaria;
        } else if (typeof param1 === "string" && typeof param2 === "number"){
            this._nome = param1;
            return this._diaria * param2;
        } else {
            throw new Error("Valores inválidos");
        }

    }

}

const sis = new SistemaDeReserva(100);

console.log(sis.reservar(10));
console.log(sis.reservar(new Date(), new Date(2023, 11, 20)));
console.log(sis.reservar("Antonio", 7));
