import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {CommonService} from '../../../../services/common.service';
import {HttpClientService} from '../../../../services/http-client.service';

@Injectable()
export class UserService extends CommonService {
    constructor(
        private http: HttpClientService,
    ) {
        super();
    }

    public getUsers(query: string = ''): Promise<any>  {
        return this.http.get(`user?${query}`)
            .toPromise()
            .then((res: Response) => {
                return this.extractData(res, 'User', true);
            })
            .catch(this.handleError);
    }
    
    public getUser(id: number): Promise<any>  {
        return this.http.get(`user/${id}`)
            .toPromise()
            .then((res: Response) => {
                return this.extractData(res, 'User');
            })
            .catch(this.handleError);
    }
    
    public getUserKeyWordsGraph(subjectId) : Promise<any> {
        return this.http.get(`get-key-words-graph/${subjectId}`)
            .toPromise()
            .then((res: Response) => {
                return this.extractData(res, 'Graph');
            })
            .catch(this.handleError);
    }
}
