import {User} from '../../../../models';

export interface GameEnded {
    gameForTwoPlayer: boolean,
    gameIsFinished: boolean,
    isWin: boolean,
    points: number,
    loserUser: User,
    winnerUser: User,
    loserPoint: number,
    winnerPoint: number
}