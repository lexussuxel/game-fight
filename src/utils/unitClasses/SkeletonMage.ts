import { Mage, } from "../typeClasses";
import { UNITS } from "../constants";


export class SkeletonMage extends Mage{
    constructor(id: number){
        super(UNITS[4], 20, id)
    }
}