class Pessoa{
    nome: string;
    idade: number;
    peso: number;
    altura: number;

    constructor(nome: string, idade: number, peso: number, altura: number){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }

    imc(): number{
        return this.peso / (this.altura ** 2);
    }

    // Menor que 18.5 - Abaixo do peso ;
    // Entre 18.5 e 24.9 - Peso normal ;
    // Entre 25.0 e 29.9 - Pré-obesidade ;
    // Entre 30.0 e 34.9 - Obesidade Grau 1 ;
    // Entre 35.0 e 39.9 - Obesidade Grau 2 ;
    // Acima de 40 - Obesidade Grau 3
    classificacao(): string{
        let indice = this.imc();
        if(indice < 18.5){
            return 'Abaixo do peso';
        } else if(indice < 25){
            return 'Peso ideal'
        } else if (indice < 30){
            return 'Pré-obesidade';
        } else if (indice < 35){
            return 'Obesidade grau 1';
        } else if (indice < 40){
            return 'Obesidade grau 2';
        } else {
            return 'Obesidade grau 3';
        }
    }

    toString(): string{
        return `O ${this.nome} tem imc = ${this.imc().toFixed(1)} e está classificado como ${this.classificacao()}`
    }
}

const p1 = new Pessoa("Toin das tapiocas", 38, 76, 1.58);
const p2 = new Pessoa("Cairo", 19, 65, 1.75);
const p3 = new Pessoa("José Maria", 18, 76, 1.83);

console.log(`${p1}`);
console.log(`${p2}`);
console.log(`${p3}`);