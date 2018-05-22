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
import {FormModule} from '../../shared/form.module';
import {LoggedInModule} from '../../shared/logged-in.module';
import { CreateQuestionComponent } from './question-listing/create-question/create-question.component';
import {TopicService} from '../topic/services/topic.service';

@NgModule({
    imports: [
        CommonModule,
        QuestionRoutingModule,
        SharedModule,
        LoggedInModule
    ],
    declarations: [
        QuestionComponent,
        QuestionListingComponent,
        SingleQuestionComponent,
        QuestionSingleComponent,
        CreateQuestionComponent
    ],
    providers: [
        QuestionService,
        QuestionResolve,
        TopicService
        
    ],
    exports: [
        QuestionComponent,
        QuestionListingComponent,
        SingleQuestionComponent,
        QuestionSingleComponent
    ]
})
export class QuestionModule { }
