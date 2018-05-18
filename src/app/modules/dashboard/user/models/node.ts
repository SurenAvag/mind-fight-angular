import {BaseModel} from '../../../../models';

export class Node extends BaseModel {
    id: number;
	name: string;
	data: any = {};
    constructor(data: any) {
        super();
	    this.id = data.id;
	    this.name = data.name;
	    this.data = {
            selectable: false,
            data: {
	            name: this.name,
                id: this.id,
            }
        };
    }
	
    public static transform(data: any) : Node {
	    return new Node(data);
    }
}


