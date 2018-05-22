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
    
    public getSubjects(query: string = ''): Promise<SubjectItems> {
        return this.http.get(`subject${query}`)
            .toPromise()
            .then((res: Response) => {
                return this.extractData(res, 'Subject', true);
            })
            .catch(this.handleError);
    }
    
    public getKeyWords(query: string = ''): Promise<any> {
        return this.http.get(`keyWord${query}`)
            .toPromise()
            .then((res: Response) => {
                return this.extractData(res);
            })
            .catch(this.handleError);
    }
    
    public getSubject(id: number): Promise<Subject> {
        return this.http.get(`subject/${id}`)
            .toPromise()
            .then((res: Response) => {
                return this.extractData(res, 'Subject');
            })
            .catch(this.handleError);
    }
    
    public createSubject(data): Promise<Subject> {
        return this.http.post(`subject`, data)
            .toPromise()
            .then((res: Response) => {
                return this.extractData(res, 'Subject');
            })
            .catch(this.handleError);
    }
    
    public updateSubject(subjectId: number, data): Promise<any> {
        return this.http.put(`subject/${subjectId}`, data)
            .toPromise()
            .then((res: Response) => {
                return this.extractData(res, 'Subject');
            })
            .catch(this.handleError);
    }
    
    public removeSubject(subjectId: number): Promise<any>
    {
        return this.http.delete(`subject/${subjectId}`)
            .toPromise()
            .then((res: Response) => {
                return this.extractData(res);
            })
            .catch(this.handleError);
    }
}
