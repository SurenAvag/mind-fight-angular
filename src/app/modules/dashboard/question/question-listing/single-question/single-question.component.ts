import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {BaseComponent} from '../../../../../base.component';
import {Question} from '../../models';
import {Subject} from '../../../subject/models';

@Component({
  selector: 'app-single-question',
  templateUrl: './single-question.component.html',
  styleUrls: ['./single-question.component.scss']
})
export class SingleQuestionComponent extends BaseComponent implements OnInit {
    @Output() public removing: EventEmitter<Question> = new EventEmitter<Question>();
    @Input() public question: Question;
    @Input() public color: string;
    constructor() {
        super();
    }

    ngOnInit() {
    }
    
    public remove(): void {
        this.removing.emit(this.question);
    }

}
