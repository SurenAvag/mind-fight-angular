import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../../base.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit {

    constructor() {
        super();
    }

    ngOnInit() {
    }

}
