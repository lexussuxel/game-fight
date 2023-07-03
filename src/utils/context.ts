import { AllUnits, Attack } from "./interfaces";

export default class UnitContext{
    baseInfo: AllUnits;
    id: number;
    constructor(info: AllUnits, id: number){
        this.id = id;
        this.baseInfo = info;
    }
}