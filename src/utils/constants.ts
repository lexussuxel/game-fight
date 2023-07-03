import { AllUnits, GameUnits, UnitTypes } from "./interfaces";
import skeleton from "../assets/skeleton.png"
import mageskeleton from "../assets/skeletonmage.png"
import centaur from "../assets/centaur.png"
import bandit from "../assets/bandit.png"
import elfarcher from "../assets/elfarcher.png"
import archimage from "../assets/archimage.png"
import monk from "../assets/monk.png"
import bishop from "../assets/bishop.png"
import sirena from "../assets/sirena.png"
import { MaleeAttack, RangeAttack, MageAttack, ParalyzerAttack, HealerMassAttack, HealerSingleAttack } from "./actionClasses";

export const UNITS:Array<AllUnits> = [
    {
        type: UnitTypes.Melee,
        HP: 100,
        damage: 25,
        initiative: 50,
        name: GameUnits.Skeleton,
        img: skeleton,
        action: new MaleeAttack()
    },
    {
        type: UnitTypes.Melee,
        HP: 150,
        damage: 50,
        initiative: 50,
        name: GameUnits.Centaur,
        img: centaur,
        action: new MaleeAttack()
    },
    {
        type: UnitTypes.Range,
        HP: 75,
        damage: 30,
        initiative: 60,
        name: GameUnits.Bandit,
        img: bandit,
        action: new RangeAttack()
    },
    {
        type: UnitTypes.Range,
        HP: 90,
        damage: 45,
        initiative: 60,
        name: GameUnits.ElfArcher,
        img: elfarcher,
        action: new RangeAttack()
    },
    {
        type: UnitTypes.Mage,
        HP: 50,
        damage: 20,
        initiative: 40,
        name: GameUnits.SkeletonMage,
        img: mageskeleton,
        action: new MageAttack()
    },
    {
        type: UnitTypes.Mage,
        HP: 90,
        damage: 30,
        initiative: 40,
        name: GameUnits.Archimage,
        img: archimage,
        action: new MageAttack()
    },
    {
        type: UnitTypes.HealerSingle,
        HP: 90,
        heal: 25,
        initiative: 20,
        name: GameUnits.Monk,
        img: monk,
        action: new HealerSingleAttack()
    },
    {
        type: UnitTypes.HealerMass,
        HP: 130,
        heal: 25,
        initiative: 20,
        name: GameUnits.Bishop,
        img: bishop,
        action: new HealerMassAttack()
    },
    {
        type: UnitTypes.Paralyzer,
        HP: 80,
        initiative: 20,
        name: GameUnits.Sirena,
        img: sirena,
        action: new ParalyzerAttack()
    }
]