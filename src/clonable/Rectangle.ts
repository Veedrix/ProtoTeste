import IShape from "../prototype/interface/IShape";

export default class Rectangle implements IShape{
    clone(): IShape {
        return new Rectangle()
    }
    toString(): string {
        return "Retangulo: Isto é um retangulo!";
    }

}