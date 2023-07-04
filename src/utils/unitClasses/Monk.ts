import { HealerSingle } from "../typeClasses";
import { UNITS } from "../constants";


export class Monk extends HealerSingle{
    constructor(id: number){
        super(UNITS[6], 25, id)
    }
}