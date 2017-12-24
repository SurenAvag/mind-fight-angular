import {BaseModel} from '../../../../models';

export class Question extends BaseModel {
    id: number;
    text: string;
    level: number;
    levelName: string;
    subject: any; //@Todo change to Subject model
    
    public static readonly LEVELS = {
        'easy': 1,
        'middle': 2,
        'high': 3
    };

    constructor(data: any) {
        super();
        this.id = data.id;
        this.text = data.text;
        this.level = data.level;
        this.subject = data.subject;
        this.levelName = this.getLevelName();
    }

    public static transform(data: any) : Question {
        return new Question(data);
    }
    
    public getLevelName(): string {
        switch (this.level){
            case Question.LEVELS.easy: return 'հեշտ';
            case Question.LEVELS.high: return 'բարդ';
            case Question.LEVELS.middle: return 'միջին';
        }
    }
}

export interface QuestionItems {
    items: Question[];
    count: number
}

