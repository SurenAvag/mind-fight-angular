import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../../base.component';
import {SubjectService} from '../subject/services/subject.service';
import {Subject, SubjectItems} from '../subject/models/subject';
import {Router} from '@angular/router';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent extends BaseComponent implements OnInit {
    public modals = {
        about: 0,
        subjects: 1,
    };
    constructor(
    
    ) {
      super();
    }

    ngOnInit() {
    }
}
