import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../services';
import {Graph} from '../models';
import {graphStyles} from './constants';
import {Subject, SubjectItems} from '../../subject/models';
import {SubjectService} from '../../subject/services/subject.service';

declare let cytoscape: any;
@Component({
  selector: 'app-user֊analytics',
  templateUrl: './user֊analytics.component.html',
  styleUrls: ['./user֊analytics.component.scss']
})
export class UserAnalyticsComponent implements OnInit {
    @ViewChild('cytoscape') public cytoscape: ElementRef;
    public graph: Graph;
    public types: any[] = [
        {name: 'Յուրացված', value: 1},
        {name: 'Չյուրացված', value: 2},
        {name: 'Բոլոր', value: 3},
    ];
    public selectedType: any = {name: 'Յուրացված', value: 1};
    public loaded: boolean;
    public graphData: any[] = [];
    public selectedSubject: Subject;
    public subjects: Subject[] = [];
    public fullAnswered: boolean;
    
    constructor(
        private userService: UserService,
        private subjectService: SubjectService
    ) {
    }
    
    ngOnInit() {
        this.getSubjects();
    }
    
    public typeChanged(event): void {
        this.selectedType = event.value;
        this.getUserGraph();
    }
    
    private getSubjects(): void {
        this.subjectService.getSubjects('?withoutPagination=1')
            .then((res: SubjectItems) => {
                this.subjects = res.items;
            })
            .catch((e: string[]) => {
                console.log(e);
            });
    }
    
    public subjectChanged(event): void {
        this.selectedSubject = event.value;
        this.getUserGraph();
    }
    
    private getUserGraph(): void {
        this.loaded = false;
        this.userService.getUserKeyWordsGraph(this.selectedSubject.id, this.selectedType.value)
            .then((res) => {
                this.fullAnswered = res.fullAnswered;
                this.graph = Graph.transform(res.graph);
                this.initGraphFromData();
            })
            .catch((e: string[]) => {
                
                console.log(e);
            });
    }
    
    private setGraphData(): void {
        this.graphData = [];
        for(let node of this.graph.nodes) {
            this.graphData.push(node.data);
        }
        for(let lines of this.graph.lines) {
            this.graphData.push(lines.data);
        }
    }
    
    private initGraphFromData(): void {
        this.setGraphData();
        this.initCytoscapeGraph();
    }
    
    private initCytoscapeGraph(): void {
        this.loaded = true;
        let cy = cytoscape({
            container: this.cytoscape.nativeElement,
            elements: this.graphData,
            boxSelectionEnabled: false,
            autounselectify: true,
            layout: {
                name: 'spread',
                minDist: 40
            },
            style: graphStyles
        
        });
        cy.$('');
    }
    
}
