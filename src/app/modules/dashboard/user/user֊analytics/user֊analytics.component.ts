import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UserService} from '../services';
import {Graph} from '../models';

declare let cytoscape: any;
@Component({
  selector: 'app-user֊analytics',
  templateUrl: './user֊analytics.component.html',
  styleUrls: ['./user֊analytics.component.scss']
})
export class UserAnalyticsComponent implements OnInit {
    @ViewChild('cytoscape') public cytoscape: ElementRef;
    public graph: Graph;
    public loaded: boolean;
    
    constructor(
        private userService: UserService
    ) {
    }
    
    ngOnInit() {
        this.getUserGraph();
    }
    
    private getUserGraph(): void {
        this.userService.getUserKeyWordsGraph(1)
            .then((graph: Graph) => {
                this.loaded = true;
                this.graph = graph;
                this.initGraphFromData();
            })
            .catch((e: string[]) => {
                
                console.log(e);
            });
    }
    
    private initGraphFromData(): void {
        let graphData = [];
        for(let node of this.graph.nodes) {
            graphData.push(node.data);
        }
        for(let lines of this.graph.lines) {
            graphData.push(lines.data);
        }
       
        let cy = cytoscape({
            container: this.cytoscape.nativeElement,
            elements: graphData,
            style: [ // the stylesheet for the graph
                {
                    selector: 'node',
                    
                    style: {
                        'background-color': 'rgb(91,155,213)',
                        'label': 'data(name)'
                    }
                },
            
                {
                    selector: 'edge',
                    style: {
                        'width': 3,
                        'line-color': 'rgb(91,155,213)',
                        'target-arrow-color': 'rgb(91,155,213)',
                        'target-arrow-shape': 'triangle',
                        'curve-style': 'bezier'
                    }
                }
            ],
        
            layout: {
                name: 'grid',
                rows: 1
            }
        
        });
        cy.$('')
    }
    
}
