import {BaseModel, Subject} from '../../../models';
import {Question} from '../question/models';

export class Game extends BaseModel {
    id:number;
    name: string;
    questions: Question[];
    time: number;
    subject: Subject;
    
    constructor(data: any) {
        super();
        this.id = data.id;
        this.name = data.name;
        this.questions = Question.transformCollection(data.questions || []);
        this.time = data.time;
        this.subject = Subject.transform(data.subject || {});
    }
    
    public static transform(data: any) : Game {
        return new Game(data);
    }
}
