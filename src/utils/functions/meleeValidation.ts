import { Unit } from "../interfaces";

export function redTeamValidation(
  source: Unit,
  target: Unit,
  blueTeam: Array<Unit>
) {
  if (source.team === target.team) return false;
  switch (source.id) {
    case 0: {
      if (
        target.id === 3 ||
        target.id === 4 ||
        (blueTeam[3].HP === 0 && blueTeam[4].HP === 0 && target.id === 5)
      )
        return true;
      return false;
    }
    case 1: {
      if (target.id === 3 || target.id === 4 || target.id === 5) return true;
      return false;
    }
    case 2: {
      if (
        target.id === 5 ||
        target.id === 4 ||
        (blueTeam[4].HP === 0 && blueTeam[4].HP === 0 && target.id === 3)
      )
        return true;
      return false;
    }
    default: {
      return false;
    }
  }
}

export function blueTeamValidation(
  source: Unit,
  target: Unit,
  redTeam: Array<Unit>
) {
  if (source.team === target.team) return false;
  switch (source.id) {
    case 3: {
      if (
        target.id === 0 ||
        target.id === 1 ||
        (redTeam[0].HP === 0 && redTeam[1].HP === 0 && target.id === 2)
      )
        return true;
      return false;
    }
    case 4: {
      if (target.id === 1 || target.id === 0 || target.id === 2) return true;
      return false;
    }
    case 5: {
      if (
        target.id === 2 ||
        target.id === 1 ||
        (redTeam[1].HP === 0 && redTeam[2].HP === 0 && target.id === 0)
      )
        return true;
      return false;
    }
    default: {
      return false;
    }
  }
}
