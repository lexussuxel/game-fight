
import {  Action, Unit} from "./interfaces";



export interface Game {
    players: Array<Unit>
    redUnitAction:  Action| null
    blueUnitAction: Action| null
    round: number
    helperText: string
}

