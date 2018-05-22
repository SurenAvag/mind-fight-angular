import {BaseModel} from '../../../../models';

export class Topic extends BaseModel {
    id:number;
    name: string;
    
    constructor(data: any) {
        super();
        this.id = data.id;
        this.name = data.name || data.firstName;
    }
    
    public static transform(data: any) : Topic {
        return new Topic(data);
    }
}

export interface SubjectItems {
    items: Topic[],
    total: number
}
