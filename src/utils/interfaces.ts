import { Game } from "./gameInterface";


export interface Unit {
    type: UnitTypes;
    HP: number;
    initiative: number;
    name: string;
    img: string;
    id: number;
}

export type Action = (player: UnitAction, game: Game, targetId: number)=>void;

export interface UnitAction extends Unit{
    action:Action
} 



export interface UnitDamage extends Unit{
    damage: number;
}

export interface UnitHeal extends Unit{
    heal: number;
}

export type AllUnits = UnitDamage | UnitHeal | Unit
export type AllUnitsWOId = Omit<UnitDamage, "id"> | Omit<UnitHeal, "id">  | Omit<Unit, "id">

export enum UnitTypes {
    Melee,
    Range,
    Mage,
    HealerSingle,
    HealerMass,
    Paralyzer
}

