import {User} from '../../../models';
import {Game} from '../models';

export interface GameDeleted {
    game: Game,
    deletedByUser: User
}