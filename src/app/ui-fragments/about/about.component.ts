import { Component, OnInit, Input } from '@angular/core';
import {BaseComponent} from '../../base.component';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent extends BaseComponent implements OnInit {
    @Input() public opened: boolean;
    constructor() {
        super();
    }
    
    ngOnInit() {
    
    }
    
}
