import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionComponent } from './question';
import { QuestionListingComponent } from './question-listing';
import { SingleQuestionComponent } from './question-listing/single-question';
import {QuestionRoutingModule} from './question-routing.module';
import {QuestionService} from './services';
import { QuestionSingleComponent } from './question-single';
import {QuestionResolve} from './resolvers/question.resolve';
import {SharedModule} from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        QuestionRoutingModule,
        SharedModule
    ],
    declarations: [
        QuestionComponent,
        QuestionListingComponent,
        SingleQuestionComponent,
        QuestionSingleComponent
    ],
    providers: [
        QuestionService,
        QuestionResolve
    ]
})
export class QuestionModule { }
