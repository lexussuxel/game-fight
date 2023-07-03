import { Game } from "./gameClass";
import { Unit, UnitAction, UnitDamage, UnitHeal, UnitTypes } from "./interfaces";

export class Melee implements UnitAction{
    type: UnitTypes;
    HP: number
    initiative:number
    name:string
    img:string
    damage: number
    id: number

    constructor(object: UnitDamage, id: number){
        this.id = id
        this.type = object.type
        this.HP = object.HP
        this.initiative = object.initiative
        this.name = object.name
        this.img = object.img
        this.damage = object.damage


    }  
    action(player: UnitAction, game: Game):void{
        
    }
}

export class Range implements UnitAction{
    type: UnitTypes;
    HP: number
    initiative:number
    name:string
    img:string
    damage: number
    id: number

    constructor(object: UnitDamage, id:number){
        this.id = id
        this.type = object.type
        this.HP = object.HP
        this.initiative = object.initiative
        this.name = object.name
        this.img = object.img
        this.damage = object.damage


    }  
    action(): void {
        
    }
}

export class Mage implements UnitAction{
    type: UnitTypes;
    HP: number
    initiative:number
    name:string
    img:string
    damage: number
    id: number

    constructor(object: UnitDamage, id:number){
        this.id = id
        this.type = object.type
        this.HP = object.HP
        this.initiative = object.initiative
        this.name = object.name
        this.img = object.img
        this.damage = object.damage


    }  
    action(): void {
        
    }
}
export class HealerSingle implements UnitAction{
    type: UnitTypes;
    HP: number
    initiative:number
    name:string
    img:string
    heal: number
    id: number

    constructor(object: UnitHeal, id:number){
        this.id = id
        this.type = object.type
        this.HP = object.HP
        this.initiative = object.initiative
        this.name = object.name
        this.img = object.img
        this.heal = object.heal


    }  

    action(): void {
        
    }
}
export class HealerMass implements UnitAction{
    type: UnitTypes;
    HP: number
    initiative:number
    name:string
    img:string
    heal: number
    id: number

    constructor(object: UnitHeal, id:number){
        this.id = id
        this.type = object.type
        this.HP = object.HP
        this.initiative = object.initiative
        this.name = object.name
        this.img = object.img
        this.heal = object.heal


    } 

    action(): void {
        
    }
}
export class Paralyzer implements UnitAction{
    type: UnitTypes;
    HP: number
    initiative:number
    name:string
    img:string
    id: number

    constructor(object: Unit, id:number){
        this.id = id
        this.type = object.type
        this.HP = object.HP
        this.initiative = object.initiative
        this.name = object.name
        this.img = object.img

    } 

    action(): void {
        
    }
}

