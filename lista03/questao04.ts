class Tempo{
    private _hora: number  = 0;
    private _minuto: number = 0;
    private _segundo: number = 0;

    constructor(h: number, m: number, s: number){
      this.hora = h;
      this.minuto = m;
      this.segundo = s;
    }

    public get hora(): number{
        return this._hora;
    }

    public get minuto(): number{
        return this._minuto;
    }

    public get segundo(): number{
        return this._segundo;
    }

    public set hora(novaHora: number){
        if (novaHora >= 0 && novaHora < 24){
            this._hora = novaHora;
        } else {
            console.error("Hora inválida");
        }
    }

    public set minuto(novoMinuto: number){
        if(novoMinuto >= 0 && novoMinuto < 60){
            this._minuto = novoMinuto;
        } else {
            console.error("Minuto inválido");
            throw new Error("Minuto inválido");
        }
    }

    public set segundo(novoSegundo: number){
        if (novoSegundo >= 0 && novoSegundo < 60){
            this._segundo = novoSegundo
        } else {
            console.error("Segundo inválido");
            
        }
    }

    public formatarTempo(): string{
        return `${this._hora.toString().padStart(2, "0")}:${this._minuto.toString().padStart(2, "0")}:${this._segundo.toString().padStart(2, "0")}`
    }
}

const tempo = new Tempo(-10, 0, 0);
tempo.hora = 22
tempo.minuto = -10
tempo.segundo = 34
console.log(tempo.formatarTempo());
