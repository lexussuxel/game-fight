import {  Action,  UnitAction} from "./interfaces";

export interface Game {
    players: Array<UnitAction>
    redUnitAction:  Action| null
    blueUnitAction: Action| null
    round: number
    helperText: string
}

