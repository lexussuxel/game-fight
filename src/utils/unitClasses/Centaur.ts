import { Melee } from "../typeClasses";
import { UNITS } from "../constants";


export class Centaur extends Melee{
    constructor(id: number){
        super(UNITS[1], 50, id)
    }
}