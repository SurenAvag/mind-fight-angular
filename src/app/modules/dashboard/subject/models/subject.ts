import {BaseModel} from '../../../../models';

export class Subject extends BaseModel {
    id:number;
    name: string;
    
    constructor(data: any) {
        super();
        this.id = data.id;
        this.name = data.name || data.firstName;
    }
    
    public static transform(data: any) : Subject {
        return new Subject(data);
    }
}

export interface SubjectItems {
    items: Subject[],
    total: number
}
