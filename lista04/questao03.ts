class Logger{
    private static log: string[] = [];

    public static adicionarLog(msg: string): void{
        const data = new Date();
        Logger.log.push(msg + ' | ' + data.toLocaleDateString() + ',' + data.toLocaleTimeString() + ',' + data.getMilliseconds() );
    }

    public static getLogs(): string[]{
        return Logger.log;
    }

    public static getLogN(n: number): string[]{
        let length = Logger.log.length
        if (n > length){
            throw new Error('N maior que o tamanho do log');
        }
        return Logger.log.slice(length - n)
    }

    public static clear(): void{
        Logger.log = [];
    }
}

Logger.adicionarLog('Deu certo 1');
Logger.adicionarLog('Deu certo 2');
Logger.adicionarLog('Deu certo 3');
Logger.adicionarLog('Deu certo 4');
Logger.adicionarLog('Deu certo 5');

console.log(`${Logger.getLogs()}`);

console.log(`${Logger.getLogN(2)}`);
Logger.clear()
console.log(`${Logger.getLogs()}`);
