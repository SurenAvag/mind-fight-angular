import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectComponent } from './subject/subject.component';
import { SubjectListingComponent } from './subject-listing/subject-listing.component';
import { SubjectSingleComponent } from './subject-single/subject-single.component';
import {SubjectRoutingModule} from './subject-routing.module';
import {SingleSubjectComponent} from './subject-listing/single-subject/single-subject.component';
import {SubjectService} from './services/subject.service';
import {SubjectResolve} from './resolvers/subject.resolve';
import {SharedModule} from '../../shared';
import { CreateSubjectComponent } from './subject-listing/create-subject/create-subject.component';
import {TabViewModule} from 'primeng/tabview';
import {LoggedInModule} from '../../shared/logged-in.module';
import {QuestionModule} from '../question';
import { KeyWordsComponent } from './subject-single/key-words/key-words.component';

@NgModule({
    imports: [
        CommonModule,
        SubjectRoutingModule,
        LoggedInModule,
        SharedModule,
        TabViewModule,
        QuestionModule
    ],
    declarations: [
        SubjectComponent,
        SubjectListingComponent,
        SubjectSingleComponent,
        SingleSubjectComponent,
        CreateSubjectComponent,
        KeyWordsComponent
    ],
    providers: [
        SubjectService,
        SubjectResolve,
    ]
})
export class SubjectModule { }
