import {BaseModel} from '../../../../models';
import {Line} from './line';
import {Node} from './node';

export class Graph extends BaseModel {
    nodes: Node[];
	lines: Line[];
	
    constructor(data: any) {
        super();
	    this.nodes = Node.transformCollection(data.nodes || []);
	    this.lines = Line.transformCollection(data.lines || []);
    }
	
    public static transform(data: any) : Graph {
	    return new Graph(data);
    }
}


