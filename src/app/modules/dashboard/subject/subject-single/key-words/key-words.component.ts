import {Component, Input, OnInit} from '@angular/core';
import {Subject} from '../../models';
import {BaseComponent} from '../../../../../base.component';
import {SubjectService} from '../../services/subject.service';

@Component({
  selector: 'app-key-words',
  templateUrl: './key-words.component.html',
  styleUrls: ['./key-words.component.scss']
})
export class KeyWordsComponent extends BaseComponent implements OnInit {
    @Input() public subject: Subject;
    public keyWords: any[] = [];
    
    constructor(
        private subjectService: SubjectService
    ) {
        super();
    }
    
    ngOnInit() {
        this.subjectService.getKeyWords(`?subject_id=${this.subject.id}`)
            .then(res => {
                this.keyWords = res.items;
                console.log(this.keyWords)
            })
            .catch(e => {
                console.log(e);
            })
    }
    
    public getColor(i: number) : string {
        return ['#F8F8F8', '#fdfdfd'][i % 2]
    }
    
}
