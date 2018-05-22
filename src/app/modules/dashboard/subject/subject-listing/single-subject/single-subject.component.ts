import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from '../../../question/models';
import {BaseComponent} from '../../../../../base.component';
import {Subject} from '../../models';

@Component({
  selector: 'app-single-subject',
  templateUrl: './single-subject.component.html',
  styleUrls: ['./single-subject.component.scss']
})
export class SingleSubjectComponent extends BaseComponent implements OnInit {
    @Output() public removing: EventEmitter<Subject> = new EventEmitter<Subject>();
    @Input() public subject: Subject;
    @Input() public color: string;
    constructor() {
        super();
    }
    
    ngOnInit() {
    }
    
    public remove(): void {
        this.removing.emit(this.subject);
    }

}
