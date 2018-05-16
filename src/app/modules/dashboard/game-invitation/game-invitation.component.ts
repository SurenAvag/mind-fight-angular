import { Component, OnInit } from '@angular/core';
import {SocketService} from '../../../services/socket.service';
import {BaseComponent} from '../../../base.component';
import {GameInvitation} from '../interfaces/game-invitation';
import {v} from '@angular/core/src/render3';
import {GameDeleted} from '../interfaces/game-deleted';
import {GameService} from '../game/services/game.service';

@Component({
    selector: 'app-game-invitation',
    templateUrl: './game-invitation.component.html',
    styleUrls: ['./game-invitation.component.scss'],
    providers: [
        GameService
    ]
})
export class GameInvitationComponent extends BaseComponent implements OnInit {
    public invitationData: GameInvitation;
    public modals = {
        main: 0
    };
    
    constructor(
        private socketService: SocketService,
        private gameService: GameService
    ) {
        super();
    }
    
    ngOnInit() {
        this.subscriptions.push(
            this.socketService.socket$.subscribe(val => {
                switch (val.name){
                    case 'game-invitation': this.gameInvitationReceived(val.message); break;
                    case 'game-deleted': this.gameDeleted(val.message); break;
                }
            })
        );
    }
    
    public gameDeleted(data: GameDeleted): void {
        this.invitationData = null;
    }
    
    
    private gameInvitationReceived(data: GameInvitation): void {
        this.invitationData = data;
        this.openModal('main');
    }
    
    public submit(): void {
        this.gameService.startGame(this.invitationData.game)
            .then((res: string[]) => {
                this.leave();
            })
            .catch((e: string) => {
                console.log(e);
            })
    }
    
    public cancel(): void {
        if(!this.invitationData){
            return;
        }
        
        this.gameService.removeGame(this.invitationData.game)
            .then((res: string[]) => {
                this.leave();
            })
            .catch((e: string) => {
                console.log(e);
            })
    }
    
    public leave(): void {
        this.modals.main = 0;
    }
    
}
