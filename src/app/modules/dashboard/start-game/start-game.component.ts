import {Component, Input, OnInit} from '@angular/core';
import {BaseComponent} from '../../../base.component';
import {Subject, SubjectItems} from '../subject/models/subject';
import {Router} from '@angular/router';
import {SubjectService} from '../subject/services/subject.service';
import {User} from '../../../models';
import {Game} from '../models';
import {GameService} from '../game/services/game.service';
import {SocketService} from '../../../services/socket.service';
import {GameDeleted} from '../interfaces/game-deleted';

@Component({
    selector: 'app-start-game',
    templateUrl: './start-game.component.html',
    styleUrls: ['./start-game.component.scss'],
    providers: [SubjectService, GameService],
})
export class StartGameComponent extends BaseComponent implements OnInit {
    @Input() public opened: number;
    public modals = {
        waitForInvitation: 0
    };
    public selectedUser: User;
    public subjects: Subject[] = [];
    public selectedSubject: Subject;
    public game: Game;
    
    constructor(
        private gameService: GameService,
        private subjectService: SubjectService,
        private router: Router,
        private socketService: SocketService
    ) {
        super();
    }
    
    ngOnInit() {
        this.getSubjects();
        this.initSubscriptions();
    }
    
    private initSubscriptions(): void {
        this.subscriptions.push(
            this.socketService.socket$.subscribe(val => {
                switch (val.name){
                    case 'game-deleted': this.gameDeleted(val.message); break;
                }
            })
        );
    }
    
    private gameDeleted(data: GameDeleted): void {
        this.game = null;
    }
    
    public selectSubject(subject: Subject): void {
        this.selectedSubject = subject;
    }
    
    public getSubjects(): void {
        this.subjectService.getSubjects('?withoutPagination=1')
            .then((res: SubjectItems) => {
                this.subjects = res.items;
            })
            .catch((e: string) => {
                console.log(e);
            });
    }
    
    public inviteToGame(): void {
        if(!this.selectedSubject || !this.selectedUser){
            return;
        }
        this.getGame(this.selectedSubject.id, this.selectedUser.id);
    }
    
    private getGame(subjectId: number, secondPlayerId: number = null): void {
        this.gameService.getGame(`?forTwoPlayer=${secondPlayerId ? 1 : 0}&subjectId=${subjectId}&secondPlayerId=${secondPlayerId || ''}`)
            .then((game: Game) => {
                this.persistResponse(game);
            })
            .catch((e: string) => {
                console.log(e);
            });
    }
    
    private persistResponse(game: Game): void {
        if(game.forTwoPlayer){
            this.game = game;
            this.openModal('waitForInvitation');
        } else {
            this.router.navigate([`game/${game.id}`]);
        }
    
    }
    
    public startGame() : void {
        if(!this.selectedSubject){
            return;
        }
        this.getGame(this.selectedSubject.id);
    }
    
    public userSelected(user: User) : void {
        this.selectedUser = user;
    }
    
    public cancelInvite(): void {
        if(!this.game){
            return;
        }
        
        this.gameService.removeGame(this.game)
            .then((res: string[]) => {
                this.modals.waitForInvitation = 0;
                this.game = null;
            })
            .catch((e: string) => {
                console.log(e);
            })
    }
    
    public leaveWaitModal(): void {
        this.modals.waitForInvitation = 0;
    }
    
}
