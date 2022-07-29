import IShape from "../prototype/interface/IShape";

export default class Circle implements IShape {
    
    clone(): IShape {
        return new Circle();
    }

    toString(): string{
        return "Circulo: Este é um circulo!";
    }
}