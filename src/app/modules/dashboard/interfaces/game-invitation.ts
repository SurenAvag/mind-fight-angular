import {Game} from '../models';
import {User} from '../../../models';

export interface GameInvitation {
    game: Game,
    user: User,
    invitedUser: User
}