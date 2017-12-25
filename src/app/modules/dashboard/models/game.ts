import {BaseModel} from '../../../models';
import {Question} from '../question/models';

export class Game extends BaseModel {
    id:number;
    name: string;
    questions: Question[];
    time: number
    
    constructor(data: any) {
        super();
        this.id = data.id;
        this.name = data.name;
        this.questions = Question.transformCollection(data.questions);
        this.time = data.time
    }
    
    public static transform(data: any) : Game {
        return new Game(data);
    }
}
