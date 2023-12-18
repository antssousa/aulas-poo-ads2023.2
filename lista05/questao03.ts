abstract class Notificador{
    protected _mensagens: string[];

    constructor(){
        this._mensagens = [];
    }

    public abstract enviarMensagem(mensagem: string): void;
}

class NotificadorEmail extends Notificador{
    public enviarMensagem(mensagem: string): void {
        this._mensagens.push(mensagem);
        console.log(`Mensagem "${mensagem}" enviada por e-mail`);
    }

}

class NotificadorSMS extends Notificador{
    public enviarMensagem(mensagem: string): void {
        this._mensagens.push(mensagem);
        console.log(`Mensagem "${mensagem}" enviada por SMS`);
    }
}

// const not = new Notificador(); Não posso instanciar classes abstratas

const notEmail: Notificador = new NotificadorEmail();
const notSMS: Notificador = new NotificadorSMS();

notEmail.enviarMensagem("Oi, sumido!")
notSMS.enviarMensagem("Oi, sumida!")