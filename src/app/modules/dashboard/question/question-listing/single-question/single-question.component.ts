import { Component, OnInit, Input } from '@angular/core';
import {BaseComponent} from '../../../../../base.component';
import {Question} from '../../models';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.scss']
})
export class SingleQuestionComponent extends BaseComponent implements OnInit {
    @Input() public question: Question;
    @Input() public color: string;
    constructor() {
        super();
    }

    ngOnInit() {
    }

}
