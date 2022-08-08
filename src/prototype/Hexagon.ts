import IShape from "./interface/IShape";

export default class Hexagon implements IShape {
  public clone(): IShape {
    return new Hexagon();
  }
  public toString(): string {
    return "Forma Geométrica: Isto é um hexágono!";
  }
  public area(): void {
    console.log("Área do hexágono é é igual a 6 vezes a área do triângulo equilátero.");
  }
}