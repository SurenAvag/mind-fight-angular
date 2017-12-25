import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GameComponent} from './game';
import {MainComponent} from './main';


const GameRoutes: Routes = [
    {
        path: '',
        component: GameComponent,
        children: [
            {
                path: '',
                component: MainComponent
            },
            // {
            //     path: ':id',
            //     component: QuestionSingleComponent,
            //     resolve: {
            //         question: QuestionResolve
            //     }
            // }
        ],
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(GameRoutes),
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class GameRoutingModule { }
