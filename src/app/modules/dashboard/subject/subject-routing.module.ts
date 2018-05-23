import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubjectComponent} from './subject/subject.component';
import {SubjectListingComponent} from './subject-listing/subject-listing.component';
import {SubjectSingleComponent} from './subject-single/subject-single.component';
import {SubjectResolve} from './resolvers/subject.resolve';
import {MainComponent} from '../main';


const subjectRoutes: Routes = [
    {
        path: '',
        component: SubjectComponent,
        children: [
            {
                path: '',
                component: SubjectListingComponent
            },
            {
                path: ':id',
                component: SubjectSingleComponent,
                resolve: {
                    subject: SubjectResolve
                },
                children: [
                    {
                        path: 'question',
                        loadChildren: '../question/question.module#QuestionModule',
                    }
                ]
            }
        ],
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(subjectRoutes),
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class SubjectRoutingModule { }
