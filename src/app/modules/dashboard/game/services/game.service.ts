import { Injectable } from '@angular/core';
import {HttpClientService} from '../../../../services/http-client.service';
import {CommonService} from '../../../../services/common.service';
import {Response} from '@angular/http';

@Injectable()
export class GameService extends CommonService {
    constructor(private http: HttpClientService) {
        super();
    }
    
    public getGame(query: string = ''): Promise<any> {
        return this.http.get(`game${query}`)
            .toPromise()
            .then((res: Response) => {
                return this.extractData(res, 'Game');
            })
            .catch(this.handleError);
    }
    
    public endGame(id: number, answers: number[]): Promise<any> {
        return this.http.post(`game/${id}/end`, {answers: answers})
            .toPromise()
            .then((res: Response) => {
                return this.extractData(res);
            })
            .catch(this.handleError);
    }
}