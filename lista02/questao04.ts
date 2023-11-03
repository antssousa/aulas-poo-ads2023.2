class Veiculo{
    marca: string;
    modelo: string;
    ano: number;
    quilometragem: number;

    constructor(marca: string,
        modelo: string,
        ano: number,
        quilometragem: number){
            this.marca = marca;
            this.modelo = modelo;
            this.ano = ano;
            this.quilometragem = quilometragem;
        }

        andar(distancia: number): void{
            this.quilometragem += distancia;
        }

        toString(): string{
            return `Marca: ${this.marca}\nModelo: ${this.modelo}\nAno: ${this.ano}\nQuilometragem: ${this.quilometragem} km`
        }
}

class Estacionamento{
    vagas: number;
    veiculos: Veiculo[];

    constructor(vagas: number){
        this.vagas = vagas;
        this.veiculos = [];
    }

    temVaga(): boolean{
        // return this.veiculos.length < this.vagas;
        if (this.veiculos.length < this.vagas){
            return true;
        } else {
            return false;
        }
    }

    estacionar(v: Veiculo): boolean{
        if(this.temVaga()){
            this.veiculos.push(v)
            return true;
        }
        return false;
    }

    retirar(posicao: number): boolean{
        if(posicao >= 0 && this.veiculos.length){
            delete this.veiculos[posicao];
            return true;
        }
        return false;
    }

    numeroDeVagas(): number{
        return this.vagas - this.veiculos.length; 
    }

    toString(): string{
        let s = '';
        for (const indice in this.veiculos) {
            s = s + `vaga ${(Number(indice) + 1)} = ${this.veiculos[indice].modelo}\n`
        }
        if (this.veiculos.length === 0){
            s = `Estaciamento Vazio`;
        }
        return `${s}\nTem ${this.numeroDeVagas()} vagas`;
    }

}

const c1 = new Veiculo("Fiat", "Punto", 2013, 120000);
const c2 = new Veiculo("Volkswagen", "Gol", 2013, 120000);
const c3 = new Veiculo("Toyota", "Etios", 2013, 120000);
const c4 = new Veiculo("Ford", "Ka", 2013, 120000);
const c5 = new Veiculo("Peugeot", "Punto", 2013, 120000);
const c6 = new Veiculo("Gurgel", "Gurgel", 2013, 120000);
const c7 = new Veiculo("Nissan", "Kicks", 2013, 120000);
c1.andar(200);
console.log(`${c1}`);

const est = new Estacionamento(7);
est.estacionar(c1);
est.estacionar(c2);
est.estacionar(c3);
est.estacionar(c4);
est.estacionar(c5);
est.estacionar(c6);
est.estacionar(c7);
console.log(`${est}`);