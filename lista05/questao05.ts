interface ProcessadorPagamento{
    processar(valor: number, conta: string): number;
}

class PagamentoCartao implements ProcessadorPagamento{

    private _conta: string;
    private _saldo: number;

    constructor(conta: string, saldo: number){
        this._conta = conta;
        this._saldo = saldo;
    }
    processar(valor: number, conta: string): number{
        return valor * 1.10;
    }
}


class PagamentoBoleto implements ProcessadorPagamento{

    processar(valor: number, conta: string): number {
        return valor * 0.9;
    }
}


function processarPagamento(p: ProcessadorPagamento){
    console.log(`Pagamento processado: R$ ${p.processar(100, "Nubank")}`);
}

const p1 = new PagamentoBoleto();
const p2 = new PagamentoCartao("1111", 1200);

processarPagamento(p1);
processarPagamento(p2);
