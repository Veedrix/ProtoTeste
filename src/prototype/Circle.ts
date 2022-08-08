import IShape from "../prototype/interface/IShape";

export default class Circle implements IShape {
    
    public clone(): IShape {
        return new Circle();
    }
    public toString(): string{
        return "Forma Geométrica: Este é um circulo!";
    }
    public area(): void {
        console.log("Área do Circulo pi * Raio^2");
    }
}