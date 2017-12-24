import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../../base.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent extends BaseComponent implements OnInit {
    public modals = {
        about: 0,
    };
    constructor() {
      super();
    }

    ngOnInit() {
    }

}
