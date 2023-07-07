import {   IUnit} from "./interfaces";
import skeleton from "../assets/skeleton.png"
import mageskeleton from "../assets/skeletonmage.png"
import centaur from "../assets/centaur.png"
import bandit from "../assets/bandit.png"
import elfarcher from "../assets/elfarcher.png"
import archimage from "../assets/archimage.png"
import monk from "../assets/monk.png"
import bishop from "../assets/bishop.png"
import sirena from "../assets/sirena.png"

export const UNITS:Array<IUnit> = [
    {
        maxHP: 100,
        initiative: 50,
        name: "Skeleton",
        img: skeleton,
    },
    {
        maxHP: 150,
        initiative: 50,
        name: "Centaur",
        img: centaur,
    },
    {
        maxHP: 75,
        initiative: 60,
        name: "Bandit",
        img: bandit,
    },
    {
        maxHP: 90,
        initiative: 60,
        name: "Elf Archer",
        img: elfarcher,
    },
    {
        maxHP: 50,
        initiative: 40,
        name: "Skeleton Mage",
        img: mageskeleton,

    },
    {
        maxHP: 90,
        initiative: 40,
        name: "Archimage",
        img: archimage,
    },
    {
        maxHP: 90,
        initiative: 20,
        name: "Monk",
        img: monk,
    },
    {
        maxHP: 130,
        initiative: 20,
        name: "Bishop",
        img: bishop,
    },
    {
        maxHP: 80,
        initiative: 20,
        name: "Sirena",
        img: sirena,
    }
]