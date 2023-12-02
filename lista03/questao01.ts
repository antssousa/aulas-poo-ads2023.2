class Circulo{
    private _raio: number;

    constructor(raio: number){
        this._raio = raio;
    }

    get raio(): number{
        return this._raio;
    }

    set raio(raio: number){
        if (raio >= 0){
            this._raio = raio;
        } else {
            console.error("O raio não pode ser negativo");
        }
    }

    public getArea(): number{
        return Math.PI * (this._raio ** 2);
    }

    public getCircunferencia(): number{
        return 2 * Math.PI * this._raio;
    }
}

const c1 = new Circulo(10);

console.log(`Raio do círculo: ${c1.raio}, Área: ${c1.getArea()}, Circuferência : ${c1.getCircunferencia()}`);


c1.raio = -10 // ERRO