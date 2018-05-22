import { Component, OnInit } from '@angular/core';
import {Subject} from '../models';
import {BaseComponent} from '../../../../base.component';
import {ActivatedRoute} from '@angular/router';
import {SubjectService} from '../services/subject.service';

@Component({
  selector: 'app-subject-single',
  templateUrl: './subject-single.component.html',
  styleUrls: ['./subject-single.component.scss']
})
export class SubjectSingleComponent extends BaseComponent implements OnInit {
    public activeIndex: number = 0;
    public subject: Subject;
    public items = [
        {label: 'Հարցեր'},
        {label: 'Բանալիային բառեր'},
    ];
    constructor(
        private activatedRoute: ActivatedRoute,
        private subjectService: SubjectService
    ) {
        super();
    }
    
    ngOnInit() {
        this.subject = this.activatedRoute.snapshot.data['subject'];
    }
    
    public activeIndexChange(index): void {
        console.log(index, 1111);
        this.activeIndex = index;
    }
    
    public saveSubject(value: string, name: string): void {
        this.subjectService.updateSubject(this.subject.id, {[name]: value})
            .then(res => {
                console.log(res);
            })
            .catch(e => {
                console.log(e);
            })
    }
    
}
