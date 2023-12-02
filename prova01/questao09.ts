numeroDoQuarto, tipo, ocupado (booleano), precoDiaria

class QuartoDeHotel{
    numeroDoQuarto: number;
    tipo: string;
    ocupado: boolean;
    precoDiaria: number;

    constructor(numeroDoQuarto: number, tipo: string, precoDiaria: number){
        this.numeroDoQuarto = numeroDoQuarto;
        this.tipo = tipo;
        this.precoDiaria = precoDiaria;
        this.ocupado = false;
    }

    reservar(): void{
        this.ocupado = !this.ocupado ? true : false;
    }

    liberar(): void{
        this.ocupado = false;
    }

    calcularHospedagem(dias: number): number{
        return dias * this.precoDiaria;
    }

    toString(): string{
        let msg = this.ocupado? "ocupado": "livre";
        return `Quarto: ${this.numeroDoQuarto},\nTipo: ${this.tipo}\nStatus: ${msg}\nValor da diária: ${this.precoDiaria}`
    }
}

class GerenciadorDeHotel{
    quartos: QuartoDeHotel[];

    constructor(){
        this.quartos = [];
    }

    adicionarQuarto(quarto: QuartoDeHotel): void{
        this.quartos.push(quarto);
    }

    buscarQuarto(numeroDoQuarto: number): QuartoDeHotel | null{
        for (const quarto of this.quartos) {
            if (numeroDoQuarto == quarto.numeroDoQuarto){
                return quarto;
            }
        }
        return null;
    }

    listarQuartosDisponiveis(): QuartoDeHotel[]{
        let quartoDisponivel: QuartoDeHotel[] = [];
        for (const quarto of this.quartos) {
            if(!quarto.ocupado){
                quartoDisponivel.push(quarto);
            }
        }
        return quartoDisponivel;
    }
}