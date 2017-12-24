import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuestionComponent} from './question';
import {QuestionListingComponent} from './question-listing';
import {QuestionSingleComponent} from './question-single';
import {QuestionResolve} from './resolvers/question.resolve';


const QuestionRoutes: Routes = [
    {
        path: '',
        component: QuestionComponent,
        children: [
            {
                path: '',
                component: QuestionListingComponent
            },
            {
                path: ':id',
                component: QuestionSingleComponent,
                resolve: {
                    question: QuestionResolve
                }
            }
        ],
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(QuestionRoutes),
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class QuestionRoutingModule { }
