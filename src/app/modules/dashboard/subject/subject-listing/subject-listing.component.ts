import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../../../base.component';
import {SubjectService} from '../services/subject.service';
import {Subject, SubjectItems} from '../models';

@Component({
  selector: 'app-subject-listing',
  templateUrl: './subject-listing.component.html',
  styleUrls: ['./subject-listing.component.scss']
})
export class SubjectListingComponent extends BaseComponent implements OnInit {
    public subjects: Subject[] = [];
    public modals = {
        createSubject: 0
    };
    constructor(
        private subjectService: SubjectService
    ) {
        super();
    }
    
    ngOnInit() {
        this.getSubjects();
    }
    
    private getSubjects(): void {
        this.subjectService.getSubjects('?withoutPagination=1')
            .then((res: SubjectItems) => {
                this.subjects = res.items;
            })
    }
    
    public getColor(i: number) : string {
        return ['#F8F8F8', '#fdfdfd'][i % 2];
    }
    
    public remove(i): void {
        this.subjectService.removeSubject(i)
            .then(res => {
                this.subjects.splice(i, 1);
            })
    }
    
    
    
}
