import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../../../base.component';
import {GameService} from '../services/game.service';
import {Game} from '../../models';
import {ActivatedRoute, Router} from '@angular/router';
import {GameEnded} from '../interfaces/game-ended';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent extends BaseComponent implements OnInit {
    public answerIds: number[] = [];
    public loading: boolean = true;
    public gameInterval: any;
    public game: any;
    public endProcess: boolean = false;
    public points: number = 0;
    private gameId: number;
    public gameEndData: GameEnded;
    public modals = {
        ended: 0,
    };
    
    constructor(
        private gameService: GameService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        super();
    }
    
    ngOnInit() {
        this.gameId = this.activatedRoute.snapshot.params['id'];
        this.getGame()
    }
    
    private getGame(): void {
        this.gameService.getGameById(this.gameId)
            .then((res: Game) => {
                this.game = res;
                this.loading = false;
                this.decrementTime();
            })
            .catch((e: string) => {
                console.log(e);
            });
    }
    
    public decrementTime(): void {
        this.gameInterval = setInterval(() => {
            this.game.time--;
            if(this.game.time == 0){
                this.submit();
                clearInterval(this.gameInterval);
            }
        }, 60000);
    }
    
    public submit(): void{
        clearInterval(this.gameInterval);
        this.endProcess = true;
        this.openModal('ended');
        this.endGame();
    }
    
    public endGame(): void {
        this.gameService.endGame(this.game.id, this.answerIds)
            .then((res: GameEnded) => {
                this.endProcess = false;
                this.points = Number(res.points);
                this.gameEndData = res;
            })
            .catch((e: string) => {
                console.log(e);
            })
    }
    
    public getAnswerIdsLength(): number {
        return this.game ? this.game.questions.length - Object.keys(this.answerIds).length : 0;
    }
    
    public modalClosed(): void {
        this.router.navigate(['/']);
    }
    
}
