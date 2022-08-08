import IShape from "../prototype/interface/IShape";

export default class Square implements IShape {
    public clone(): IShape {
        return new Square();
    }
    public toString(): string {
        return "Forma Geométrica: Isto é um quadrado!";
    }
    public area(): void {
        console.log("Área do Quadrado é Lado x Lado");
    }
}