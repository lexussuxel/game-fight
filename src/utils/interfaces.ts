

export interface Unit {
    HP: number;
    initiative: number;
    name: string;
    img: string;
    action: Action;
}

export type Action = (player: Unit, players: Array<Unit>, targetId: number)=>void;




