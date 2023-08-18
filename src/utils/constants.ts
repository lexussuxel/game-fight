import { HelperTextType, IUnit } from "./interfaces";
import skeleton from "../assets/skeleton.png";
import mageskeleton from "../assets/skeletonmage.png";
import centaur from "../assets/centaur.png";
import bandit from "../assets/bandit.png";
import elfarcher from "../assets/elfarcher.png";
import archimage from "../assets/archimage.png";
import monk from "../assets/monk.png";
import bishop from "../assets/bishop.png";
import sirena from "../assets/sirena.png";
import {
  HealerMass,
  HealerSingle,
  Melee,
  Paralyzer,
  Range,
} from "./typeClasses";

export const UNITS: Array<IUnit> = [
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
  },
];

export const HELPER_TEXT: HelperTextType = {
  Melee:
    "Attack a single target. Can attack the first line of enemies but only if the unit is positioned in the first line.",
  Paralyzer:
    "Paralyzes a single enemy unit. Can paralyze any unit regardless of positioning. Paralyzed units skip their turn (either it will be this round or the next).",
  Range:
    "Attacks a single target. Can attack any unit wherever the attacker or target is positioned.",
  Mage: "Attacks ALL of the enemy team (deals damage to all enemy units). Can attack any unit regardless of positioning.",
  HealerMass: "Heals all friendly units.",
  HealerSingle:
    " Heals a single target. Can heal any ally unit regardless of positioning",
};

export const TARGET_CLASSES = [Melee, Range, Paralyzer, HealerSingle];
export const HEAL_CLASSES = [HealerSingle, HealerMass];
