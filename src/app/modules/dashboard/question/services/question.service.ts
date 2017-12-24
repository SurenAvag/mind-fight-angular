import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {CommonService} from '../../../../services/common.service';
import {HttpClientService} from '../../../../services/http-client.service';

@Injectable()
export class QuestionService extends CommonService {
    constructor(private http: HttpClientService,) {
        super();
    }
    
    public getQuestions(query: string = ''): Promise<any> {
        return this.http.get(`question?${query}`)
            .toPromise()
            .then((res: Response) => {
                return this.extractData(res, 'Question', true);
            })
            .catch(this.handleError);
    }
    
    public getQuestion(id: number): Promise<any> {
        return this.http.get(`question/${id}`)
            .toPromise()
            .then((res: Response) => {
                return this.extractData(res, 'Question');
            })
            .catch(this.handleError);
    }
}
