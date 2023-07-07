

export interface IUnit {
    maxHP: number;
    initiative: number;
    name: string;
    img: string;
}

export abstract class Unit implements IUnit{
    readonly maxHP: number;
    HP: number;
    initiative: number;
    name: string;
    img: string;
    id: number;

    constructor(object: IUnit, id: number){
        this.maxHP = object.maxHP
        this.HP= object.maxHP
        this.initiative = object.initiative
        this.name = object.name
        this.img = object.img
        this.id = id
    }

    abstract action:Action
}

export type Action = (player: Unit, players: Array<Unit>, targetId: number)=>void;




