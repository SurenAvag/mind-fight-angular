import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../../base.component';
import {SubjectService} from '../subject/services/subject.service';
import {Subject, SubjectItems} from '../subject/models/subject';
import {Router} from '@angular/router';
import {AuthService} from '../../../services';
import {User} from '../../../models';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent extends BaseComponent implements OnInit {
    public authUser: User;
    public modals = {
        about: 0,
        subjects: 0,
    };
    constructor(
        private authService: AuthService
    ) {
      super();
    }

    ngOnInit() {
        this.authUser = this.authService.getUser();
    }
}
