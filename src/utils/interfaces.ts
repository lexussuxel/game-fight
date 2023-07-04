import { Game } from "./gameInterface";


export interface Unit {
    HP: number;
    initiative: number;
    name: string;
    img: string;
    action: Action;
}

export type Action = (player: AllUnits, game: Game, targetId: number)=>void;

export interface UnitDamage extends Unit{
    damage: number;
}

export interface UnitHeal extends Unit{
    heal: number;
}

export type AllUnits = UnitDamage | UnitHeal | Unit


