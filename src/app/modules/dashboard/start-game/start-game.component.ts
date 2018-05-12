import {Component, Input, OnInit} from '@angular/core';
import {BaseComponent} from '../../../base.component';
import {Subject, SubjectItems} from '../subject/models/subject';
import {Router} from '@angular/router';
import {SubjectService} from '../subject/services/subject.service';
import {User} from '../../../models';

@Component({
    selector: 'app-start-game',
    templateUrl: './start-game.component.html',
    styleUrls: ['./start-game.component.scss'],
    providers: [SubjectService],
})
export class StartGameComponent extends BaseComponent implements OnInit {
    @Input() public opened: number;
    public selectedUser: User;
    public subjects: Subject[] = [];
    public selectedSubject: Subject;
    constructor(
        private subjectService: SubjectService,
        private router: Router
    ) {
        super();
    }
    
    ngOnInit() {
        this.getSubjects();
    }
    
    public selectSubject(subject: Subject): void {
        this.selectedSubject = subject;
    }
    
    public getSubjects(): void {
        this.subjectService.getSubjects('?withoutPagination=1')
            .then((res: SubjectItems) => {
                this.subjects = res.items;
            })
            .catch((e: string) => {
                console.log(e);
            });
    }
    
    public inviteToGame(): void {
        if(!this.selectedSubject || !this.selectedUser){
            return;
        }
        this.router.navigate(['game'], {queryParams: {subjectId: this.selectedSubject.id, secondPlayerId: this.selectedUser.id}});
    }
    
    public startGame() : void {
        if(!this.selectedSubject){
            return;
        }
        this.router.navigate(['game'], {queryParams: {subjectId: this.selectedSubject.id}});
    }
    
    public userSelected(user: User) : void {
        this.selectedUser = user;
    }
    
}
