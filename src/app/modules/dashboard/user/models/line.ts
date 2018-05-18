import {BaseModel} from '../../../../models';

export class Line extends BaseModel {
    id: string;
    target: number;
    source: number;
    data: any;
	
    constructor(data: any) {
        super();
	    this.target = data.parentId;
	    this.source = data.childId;
	    this.id = this.target + '*' + this.source;
	    this.data = {
            data: {id: this.id, source: this.source, target: this.target},
            'curve-style': 'bezier',
            'target-arrow-shape': 'triangle',
            shape: "TRIANGLE"
        };
    }
	
    public static transform(data: any) : Line {
	    return new Line(data);
    }
}


