import Circle from "../prototype/Circle";
import Rectangle from "../prototype/Rectangle";
import Square from "../prototype/Square";
import IShape from "../prototype/interface/IShape";
import Hexagon from "../prototype/Hexagon";

export default class Client{
    private prototypeMap: {[s: string]: IShape} = {};
    
    public constructor(){
        this.prototypeMap['s1'] = new Circle();
        this.prototypeMap['s2'] = new Rectangle();
        this.prototypeMap['s3'] = new Square();
        this.prototypeMap['s4'] = new Hexagon();
    }

    public createOne(value: string): IShape{
        console.log(value);
        this.prototypeMap[value].area();
        return this.prototypeMap[value].clone();
    }
}