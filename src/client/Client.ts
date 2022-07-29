import Circle from "../clonable/Circle";
import Rectangle from "../clonable/Rectangle";
import Square from "../clonable/Square";
import IShape from "../prototype/interface/IShape";

export default class Client{
    private prototypeMap: {[s: string]: IShape} = {};
    
    constructor(){
        this.prototypeMap['s1'] = new Circle();
        this.prototypeMap['s2'] = new Rectangle();
        this.prototypeMap['s3'] = new Square();
    }

    createOne(value: string): IShape{
        console.log(value);
        console.log(this.prototypeMap[value].toString());
        return this.prototypeMap[value].clone();
    }
}