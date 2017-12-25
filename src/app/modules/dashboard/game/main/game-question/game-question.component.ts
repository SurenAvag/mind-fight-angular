import {Component, Input, OnInit} from '@angular/core';
import {BaseComponent} from '../../../../../base.component';
import {Question} from '../../../question/models';

@Component({
  selector: 'app-game-question',
  templateUrl: './game-question.component.html',
  styleUrls: ['./game-question.component.scss']
})
export class GameQuestionComponent extends BaseComponent implements OnInit {
    @Input() public question: Question;
    @Input() public answerIds: Question;
    constructor() {
        super()
    }
    
    ngOnInit() {
    }
    
    public changeSelectedAnswer(id: number): void {
        this.answerIds[this.question.id] = id;
    }
    
}
