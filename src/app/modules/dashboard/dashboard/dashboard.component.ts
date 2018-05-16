import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../../base.component';
import {SocketService} from '../../../services/socket.service';
import {GameInvitation} from '../interfaces/game-invitation';
import {Router} from '@angular/router';
import {GameStarted} from '../interfaces/game-started';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit {

    constructor(
        private socketService: SocketService,
        private router: Router
    ) {
        super();
    }

    ngOnInit() {
        this.subscriptions.push(
            this.socketService.socket$.subscribe(val => {
                switch (val.name){
                    case 'game-started': this.gameStarted(val.message); break;
                }
            })
        )
    }
    
    private gameStarted(val: GameStarted): void {
        this.router.navigate([`/game/${val.game.id}`]);
    }
}
