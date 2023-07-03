export interface Attack{
    action():void;
}

export interface Unit{
    type: UnitTypes,
    HP: number;
    initiative: number;
    name: GameUnits;
    img: string;
    action: Attack;
}

export interface UnitDamage extends Unit{
    damage: number;
}

export interface UnitHeal extends Unit{
    heal: number;
}

export type AllUnits = UnitDamage | UnitHeal | Unit

export enum UnitTypes {
    Melee,
    Range,
    Mage,
    HealerSingle,
    HealerMass,
    Paralyzer
}

export enum GameUnits {
    Skeleton = "Skeleton",
    Centaur = "Centaur",
    Bandit = "Bandit",
    ElfArcher = "Elf Archer",
    SkeletonMage = "Skeleton Mage",
    Archimage = "Archimage",
    Monk = "Monk",
    Bishop = "Bishop",
    Sirena = "Sirena"
}