import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../../../base.component';
import {GameService} from '../services/game.service';
import {Game} from '../../models';
import {ActivatedRoute, Router} from '@angular/router';

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
    public modals = {
        ended: 0,
    };
    constructor(
        private gameService: GameService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        super();
        this.subscriptions.push(this.activatedRoute.queryParams.subscribe((params) => {
            this.getGame(params['subjectId'], params['secondPlayerId']);
    
        }));
    }
    
    ngOnInit() {
    }
    
    private getGame(subjectId: number, secondPlayerId: number = null): void {
        this.gameService.getGame(`?forTwoPlayer=${secondPlayerId ? 1 : 0}&subjectId=${subjectId}&secondPlayerId=${secondPlayerId}`)
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
            .then((res) => {
                this.endProcess = false;
                this.points = Number(res.points);
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
