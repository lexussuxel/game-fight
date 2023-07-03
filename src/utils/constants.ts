import {  AllUnitsWOId, UnitTypes } from "./interfaces";
import skeleton from "../assets/skeleton.png"
import mageskeleton from "../assets/skeletonmage.png"
import centaur from "../assets/centaur.png"
import bandit from "../assets/bandit.png"
import elfarcher from "../assets/elfarcher.png"
import archimage from "../assets/archimage.png"
import monk from "../assets/monk.png"
import bishop from "../assets/bishop.png"
import sirena from "../assets/sirena.png"

export const UNITS:Array<AllUnitsWOId> = [
    {
        type: UnitTypes.Melee,
        HP: 100,
        damage: 25,
        initiative: 50,
        name: "Skeleton",
        img: skeleton,
    },
    {
        type: UnitTypes.Melee,
        HP: 150,
        damage: 50,
        initiative: 50,
        name: "Centaur",
        img: centaur,
    },
    {
        type: UnitTypes.Range,
        HP: 75,
        damage: 30,
        initiative: 60,
        name: "Bandit",
        img: bandit,
    },
    {
        type: UnitTypes.Range,
        HP: 90,
        damage: 45,
        initiative: 60,
        name: "Elf Archer",
        img: elfarcher,
    },
    {
        type: UnitTypes.Mage,
        HP: 50,
        damage: 20,
        initiative: 40,
        name: "Skeleton Mage",
        img: mageskeleton,

    },
    {
        type: UnitTypes.Mage,
        HP: 90,
        damage: 30,
        initiative: 40,
        name: "Archimage",
        img: archimage,
    },
    {
        type: UnitTypes.HealerSingle,
        HP: 90,
        heal: 25,
        initiative: 20,
        name: "Monk",
        img: monk,
    },
    {
        type: UnitTypes.HealerMass,
        HP: 130,
        heal: 25,
        initiative: 20,
        name: "Bishop",
        img: bishop,
    },
    {
        type: UnitTypes.Paralyzer,
        HP: 80,
        initiative: 20,
        name: "Sirena",
        img: sirena,
    }
]