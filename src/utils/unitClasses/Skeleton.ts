import { Melee } from "../typeClasses";
import { UNITS } from "../constants";


export class Skeleton extends Melee{
    constructor(id: number){
        super(UNITS[0], 25, id)
    }
}