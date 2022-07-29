import IShape from "../prototype/interface/IShape";

export default class Square implements IShape {
    clone(): IShape {
        return new Square();
    }
    toString(): string {
        return "Quadrado: Isto é um quadrado!";
    }

}