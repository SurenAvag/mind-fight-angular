import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BaseComponent} from '../../../../../base.component';
import {Question} from '../../models';
import {TopicService} from '../../../topic/services/topic.service';
import {Topic} from '../../../topic/models';
import {Subject} from '../../../subject/models';
import {QuestionService} from '../../services';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss']
})
export class CreateQuestionComponent extends BaseComponent implements OnInit {
    @Output() public questionCreated: EventEmitter<Question> = new EventEmitter<Question>();
    @Input() public opened: boolean;
    @Input() public subject: Subject;
    public loading: boolean;
    public question: Question = new Question({
        time: 5,
        level: 1,
        
    });
    public topics: Topic[] = [];
    public items: any[] = [];
    constructor(
        private topicService: TopicService,
        private questionService: QuestionService
    ) {
        super();
        this.items = Question.getLevels();
        this.getTopics();
    }
    
    ngOnInit() {
    }
    
    public getTopics(): void {
        this.topicService.getTopics('withoutPagination=1')
            .then((res) => {
                this.topics = res.items;
                this.question.subject_id = this.subject.id;
                this.question.topic_id = this.topics[0] && this.topics[0].id;
            })
    }
    
    public createQuestion(): void {
        if(this.question.text && this.question.time && this.question.topic_id){
            this.loading = true;
            this.questionService.createQuestion(this.question)
                .then(res => {
                    this.loading = false;
                    this.opened = false;
                    this.questionCreated.emit(res);
                })
                .catch(e => {
                    console.log(e)
                })
        }
    }
    
    public saveItem(name: string, value: string) {
        console.log(name, value);
        this.question[name] = value;
    }
    
}
