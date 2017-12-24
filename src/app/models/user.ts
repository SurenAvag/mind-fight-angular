import {BaseModel} from "./base-model";

export class User extends BaseModel {
    id: number;
	email: string;
    firstname: string;
    lastname: string;
    typeName: string;
    point: string;
    type: number;
    apiToken: string;

	public static readonly TYPES = {
        student   : 1,
    	lecturer  : 2
	};

    constructor(data: any) {
        super();
	    this.id = data.id;
	    this.email = data.email;
	    this.firstname = data.firstName;
	    this.lastname = data.lastName;
	    this.point = data.point;
	    this.type = data.type;
	    this.apiToken = data.apiToken;
	    this.typeName = this.getTypeName(this.type);
    }
	
    public static transform(data: any) : User {
	    return new User(data);
    }

    public getTypeName(type: number): string {
        switch (type){
            case User.TYPES.lecturer: return 'դասախոս';
            case User.TYPES.student: return 'ուսանող';
        }
    }
}

export interface UserItems {
    items: User[];
    count: number
}

