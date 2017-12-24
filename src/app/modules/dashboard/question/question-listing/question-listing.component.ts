import { Component, OnInit } from '@angular/core';
import {ListingComponent} from '../../../../directives/listing';
import {ActivatedRoute} from '@angular/router';
import {QuestionService} from '../services';
import {QuestionItems} from '../models';
import {BaseModelItems} from '../../../../models';

@Component({
  selector: 'app-question-listing',
  templateUrl: './question-listing.component.html',
  styleUrls: ['./question-listing.component.scss']
})
export class QuestionListingComponent extends ListingComponent implements OnInit {

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
        this.questionService.getQuestions()
            .then((res: BaseModelItems) => {
                this.persistResponse(res);
            })
    }
    
    public getColor(i: number) : string {
        return ['#F8F8F8', '#fdfdfd'][i % 2];
    }
    
}
