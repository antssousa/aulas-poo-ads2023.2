class CalcArea{

    static areaCirculo(raio: number): number{
        return Math.PI * (raio ** 2);
    }
    static areaRetangulo(base: number, altura: number): number{
        return base * altura;
    }
    static areaQuadrado(lado: number): number{
        return lado * lado;
    }
}

console.log(`Área do circulo de raio 5: ${CalcArea.areaCirculo(5).toFixed(2)}`);
console.log(`Área do retângulo de base 5 e lado 7: ${CalcArea.areaRetangulo(5, 7).toFixed(2)}`);
console.log(`Área do quadrado de lado 7: ${CalcArea.areaQuadrado(7).toFixed(2)}`);