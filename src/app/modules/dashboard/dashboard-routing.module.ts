import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard';
import {MainComponent} from './main';
import {AuthGuard} from '../../gurads';


const dashboardRoutes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        children: [
            {
                path: '',
                component: MainComponent
            },
            {
                path: 'question',
                loadChildren: './question/question.module#QuestionModule',
            },
            {
                path: 'user',
                loadChildren: './user/user.module#UserModule',
            },
            {
                path: 'game',
                loadChildren: './game/game.module#GameModule',
            },
            {
                path: 'subject',
                loadChildren: './subject/subject.module#SubjectModule',
            },
        ],
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(dashboardRoutes),
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class DashboardRoutingModule { }
