import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../../../base.component';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent extends BaseComponent implements OnInit {
    
    constructor() {
        super();
    }
    
    ngOnInit() {
        console.log('subjects')
    }
    
}
