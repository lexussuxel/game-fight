
import {  Action, Unit} from "./interfaces";



export interface Game {
    blueTeam: Array<Unit>,
    redTeam: Array<Unit>,
    redUnitAction:  Action| null
    blueUnitAction: Action| null
    round: number
    helperText: string
}

