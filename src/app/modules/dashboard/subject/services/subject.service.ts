import { Injectable } from '@angular/core';
import {CommonService} from '../../../../services/common.service';
import {HttpClientService} from '../../../../services/http-client.service';
import {Response} from '@angular/http';
import {Subject, SubjectItems} from '../models/subject';

@Injectable()
export class SubjectService extends CommonService {
    constructor(private http: HttpClientService) {
        super();
    }
    
    public
    getSubjects(query: string = ''): Promise<SubjectItems> {
        return this.http.get(`subject${query}`)
            .toPromise()
            .then((res: Response) => {
                return this.extractData(res, 'Subject', true);
            })
            .catch(this.handleError);
    }
}
