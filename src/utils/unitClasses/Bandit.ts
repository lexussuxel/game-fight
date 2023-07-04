import { Range } from "../typeClasses";
import { UNITS } from "../constants";


export class Bandit extends Range{
    constructor(id: number){
        super(UNITS[2], 30, id)
    }
}