import { Unit } from "../interfaces";


export function meleeValidation(
  source: Unit,
  target: Unit,
  players: Array<Unit>
){
  switch(source.id){
    case 3:{
      if(target.id === 6 || target.id === 7 ||
        (target.id === 8 && players[6].HP === 0 && players[7].HP === 0) ||
        ((target.id === 9 || target.id === 10 || target.id === 11)&&(players[6].HP === 0 && players[7].HP === 0 && players[8].HP === 0))
        )
        return true
      return false
    }
    case 4:{
      if(target.id === 6 || target.id === 7 || target.id === 8 ||
        ((target.id === 9 || target.id === 10 || target.id === 11)&&(players[6].HP === 0 && players[7].HP === 0 && players[8].HP === 0))
        )
        return true
      return false
    }
    case 5:{
      if(target.id === 8 || target.id === 7 ||
        (target.id === 6 && players[8].HP === 0 && players[7].HP === 0) ||
        ((target.id === 9 || target.id === 10 || target.id === 11)&&(players[6].HP === 0 && players[7].HP === 0 && players[8].HP === 0))
        )
        return true
      return false
    }
    case 6:{
      if(target.id === 3 || target.id === 4 ||
        (target.id === 5 && players[3].HP === 0 && players[4].HP === 0) ||
        ((target.id === 0 || target.id === 1 || target.id === 2)&&(players[3].HP === 0 && players[4].HP === 0 && players[5].HP === 0))
        )
        return true
      return false
    }
    case 7:{
      if(target.id === 3 || target.id === 4 || target.id === 5 ||
        ((target.id === 0 || target.id === 1 || target.id === 2)&&(players[3].HP === 0 && players[4].HP === 0 && players[5].HP === 0))
        )
        return true
      return false
    }
    case 8:{
      if(target.id === 5 || target.id === 4 ||
        (target.id === 3 && players[5].HP === 0 && players[4].HP === 0) ||
        ((target.id === 0 || target.id === 1 || target.id === 2)&&(players[3].HP === 0 && players[4].HP === 0 && players[5].HP === 0))
        )
        return true
      return false
    }
  }
  return false
}


