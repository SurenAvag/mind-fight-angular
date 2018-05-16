import {User} from '../../../models';
import {Game} from '../models';

export interface GameStarted {
    game: Game,
    user: User
}