class Senha{
    private _senha: string = "";

    constructor(senha: string){
        this.senha = senha;
    }

    public set senha(novaSenha: string){
        const regexLetra = /[a-zA-Z]+/; // Tem letras
        const regexNum = /[0-9]+/; // Tem números 
        if (novaSenha.length >= 8 && regexNum.test(novaSenha) && regexLetra.test(novaSenha)){
            this._senha = novaSenha;
        } else {
            throw new Error("Senha com menos de oito caracteres e/ou não contém números e letras");
        }
    }

    public get senha(){
        return this._senha;
    }

    public validarSenha(novaSenha: string): boolean{
        return novaSenha === this._senha;
    }
}
let senha1: any;
let senha2: any; // passar
let senha3: any; // não passar
let senha4: any; // não passar

try {
    senha1 = new Senha("123goiaba"); // passar
    senha2 = new Senha("mariola123"); // passar
    senha3 = new Senha("123456789"); // não passar
    senha4 = new Senha("12345"); // não passar
    
} catch(error){
    console.error("Erro na validação da senha: " + error.message);
} finally{
    console.log("Sempre será executado")
   
}
console.log(senha1);
console.log(senha2);
console.log(senha3);
console.log(senha4);
console.log(senha1.validarSenha("123goiaba"));
console.log(senha1.validarSenha("124goiaba"));

