import {Component, Input, OnInit} from '@angular/core';
import {SubjectService} from '../../services/subject.service';
import {Subject} from '../../models';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.scss']
})
export class CreateSubjectComponent implements OnInit {
    @Input() public opened: boolean;
    public loading: boolean;
    public subjectName: string = '';
    constructor(
        private subjectService: SubjectService,
        private router: Router
    ) {
    }
    
    ngOnInit() {
    }
    
    public createSubject(): void {
        if(this.subjectName){
            this.loading = true;
            this.subjectService.createSubject({name: this.subjectName})
                .then((subject: Subject) => {
                    this.router.navigate([`subject/${subject.id}`]);
                    this.loading = false;
                })
                .catch(e => {
                    console.log(e);
                })
        }
    }
    
    
    
}
