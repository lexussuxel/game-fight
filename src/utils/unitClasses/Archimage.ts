import { Mage, } from "../typeClasses";
import { UNITS } from "../constants";


export class Archimage extends Mage{
    constructor(id: number){
        super(UNITS[5], 30, id)
    }
}