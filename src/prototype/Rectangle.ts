import IShape from "../prototype/interface/IShape";

export default class Rectangle implements IShape{
    public clone(): IShape {
        return new Rectangle()
    }
    public toString(): string {
        return "Forma Geométrica: Isto é um retângulo!";
    }
    public area(): void {
        console.log("Área do retângulo é Lado x Altura");
    }
}