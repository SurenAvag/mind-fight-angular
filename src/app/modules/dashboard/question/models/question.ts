import {BaseModel} from '../../../../models';

export class Question extends BaseModel {
    id: number;
    text: string;
    level: number;
    levelName: string;
    time: number;
    subject: any; //@Todo change to Subject model
    topic: any; //@Todo change to Subject model
    answers: any[]; //@Todo change to Subject model
    subject_id: number;
    topic_id: number;
    
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
        this.topic = data.topic;
        this.answers = data.answers;
        this.time = data.time;
        this.levelName = this.getLevelName();
    }

    public static transform(data: any) : Question {
        return new Question(data);
    }
    
    public static
    getLevels(): any[] {
        return [
            {name: 'հեշտ', value: Question.LEVELS.easy},
            {name: 'բարդ', value: Question.LEVELS.high},
            {name: 'միջին', value: Question.LEVELS.middle},
        ]
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

