import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared';
import {LoggedInModule} from '../../shared/logged-in.module';
import { GameComponent } from './game';
import { MainComponent } from './main';
import {GameRoutingModule} from './game-routing.module';
import {GameService} from './services/game.service';
import { GameQuestionComponent } from './main/game-question/game-question.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        LoggedInModule,
        GameRoutingModule
    ],
    declarations: [
        GameComponent,
        MainComponent,
        GameQuestionComponent
    ],
    providers: [
        GameService,
    ]
})
export class GameModule { }
