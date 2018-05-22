import {Component, Input, OnInit} from '@angular/core';
import {ListingComponent} from '../../../../directives/listing';
import {ActivatedRoute} from '@angular/router';
import {QuestionService} from '../services';
import {Question, QuestionItems} from '../models';
import {BaseModelItems} from '../../../../models';
import {Subject} from '../../subject/models';

@Component({
  selector: 'app-question-listing',
  templateUrl: './question-listing.component.html',
  styleUrls: ['./question-listing.component.scss']
})
export class QuestionListingComponent extends ListingComponent implements OnInit {
    @Input() public subject: Subject;
    public modals = {
        createQuestion: 0
    };
    constructor(
        protected activatedRoute: ActivatedRoute,
        private questionService: QuestionService
    ) {
        super()
    }

    ngOnInit() {
        this.getItems();
    }

    public getItems(): void {
        super.getItems();
        this.questionService.getQuestions(`withoutPagination=1&subject_id=${this.subject.id}`)
            .then((res: BaseModelItems) => {
                this.persistResponse(res);
            })
    }
    
 
    public getColor(i: number) : string {
        return ['#F8F8F8', '#fdfdfd'][i % 2];
    }
    
    public remove(i: number): void {
        this.questionService.removeQuestion(this.items[i].id)
            .then(res => {
                this.items.splice(i, 1);
            })
            .catch(e => {
                console.log(e);
            })
    }
    
    public questionCreated(question: Question): void {
        // consople.
        console.log(question);
        this.items.unshift(question);
    }
    
}
