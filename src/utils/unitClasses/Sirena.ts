import { Paralyzer } from "../typeClasses";
import { UNITS } from "../constants";


export class Sirena extends Paralyzer{
    constructor(id: number){
        super(UNITS[8], id)
    }
}