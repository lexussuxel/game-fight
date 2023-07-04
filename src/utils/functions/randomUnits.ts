import { Unit } from "../interfaces";
import { Archimage, Bandit, Bishop, Centaur, Elf, Monk, Sirena, Skeleton, SkeletonMage } from "../unitClasses";

export function randomSetPlayers():Array<Unit>{
    const players = []
    for(let i = 0; i < 12; i++){
      
        players.push(getRandomUnit(i))
    }
    return players;
}


function getRandomUnit(id: number):Unit{
    const number = getRandomNumber(0, 9)
    switch(number){
        case 0: {
          return new Skeleton(id)
        }
        case 1:{
          return new Centaur(id)

        }
        case 2:{
           return new Bandit(id)
        }
        case 3:{
            return new Elf(id)
        }
        case 4:{
            return new SkeletonMage(id)
        }
        case 5:{
            return new Archimage(id)
        }
        case 6:{
            return new Monk(id)
        }
        case 7:{
            return new Bishop(id)
        }
        default:{
            return new Sirena(id)
        }
    }
}

export function getRandomNumber(min:number, max:number):number{
    return  Math.floor(Math.random() * (max - min) + min)
}
