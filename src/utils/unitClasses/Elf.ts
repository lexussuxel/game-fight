import { Range } from "../typeClasses";
import { UNITS } from "../constants";


export class Elf extends Range{
    constructor(id: number){
        super(UNITS[3], 45, id)
    }
}