import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../../../base.component';
import {ActivatedRoute} from '@angular/router';
import {Question} from '../models';

@Component({
  selector: 'app-question-single',
  templateUrl: './question-single.component.html',
  styleUrls: ['./question-single.component.scss']
})
export class QuestionSingleComponent extends BaseComponent implements OnInit {
    public question: Question;
    constructor(
        private activatedRoute: ActivatedRoute
    ) {
        super();
    }
    
    ngOnInit() {
        this.question = this.activatedRoute.snapshot.data['question'];
    }
    
}
