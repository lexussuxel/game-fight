import {   Unit} from "./interfaces";
import skeleton from "../assets/skeleton.png"
import mageskeleton from "../assets/skeletonmage.png"
import centaur from "../assets/centaur.png"
import bandit from "../assets/bandit.png"
import elfarcher from "../assets/elfarcher.png"
import archimage from "../assets/archimage.png"
import monk from "../assets/monk.png"
import bishop from "../assets/bishop.png"
import sirena from "../assets/sirena.png"

export const UNITS:Array<Omit<Unit, "action">> = [
    {
        HP: 100,
        initiative: 50,
        name: "Skeleton",
        img: skeleton,
    },
    {
        HP: 150,
        initiative: 50,
        name: "Centaur",
        img: centaur,
    },
    {
        HP: 75,
        initiative: 60,
        name: "Bandit",
        img: bandit,
    },
    {
        HP: 90,
        initiative: 60,
        name: "Elf Archer",
        img: elfarcher,
    },
    {
        HP: 50,
        initiative: 40,
        name: "Skeleton Mage",
        img: mageskeleton,

    },
    {
        HP: 90,
        initiative: 40,
        name: "Archimage",
        img: archimage,
    },
    {
        HP: 90,
        initiative: 20,
        name: "Monk",
        img: monk,
    },
    {
        HP: 130,
        initiative: 20,
        name: "Bishop",
        img: bishop,
    },
    {
        HP: 80,
        initiative: 20,
        name: "Sirena",
        img: sirena,
    }
]