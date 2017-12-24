import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import * as Models from '../models';

@Injectable()
export class CommonService {
    constructor(
    ) {}
    
    protected extractSingleData(data, className: string) : any {
    	if(Models[className]) {
    		return Models[className].transform(data);
		}
		return data;
    }
    
    protected extractColectionData(data, className) : any {
	    let object = {
	    	hasMorePages: data.hasMorePages,
	    };
	    if(!data.items){
	    	return object;
	    }
        if(Models[className]) {
            object['items'] = Models[className].transformCollection(data.items);
        } else {
            object['items'] = {};
        }

        return object;
    }

	protected extractData(res: Response, className: string = '', listing: boolean = false) : any {
		let object;
		if(typeof className == 'object'){
			object = this.extractCollectionsData(res.json(), className)
		}
		else if(listing){
			object = this.extractColectionData(res.json(), className);
		} else {
			object = this.extractSingleData(res.json(), className);
		}
		return object || { };
	}
	
	private extractCollectionsData(data, classNames: string = '') : any {
		let object = {}, iterationCount: number = 0;
		for(let i in data){
			if(classNames[iterationCount]) {
				object[i] = this.extractColectionData(data[i], classNames[iterationCount]);
			} else {
				// object[i] = this.extractSingleData(data[i]);
			}
			iterationCount++;
		}
		return object;
	}

	protected handleError (error: Response | Error) : Promise<any> {
		const validErrorCodes: number[] = [404, 403, 401, 422, 415];
		let err: string = '';
		if (error instanceof Response) {
			const body = error.json();
				if(body.errorMessage){
					if(validErrorCodes.indexOf(error.status) != -1) {
						err = body.errorMessage
					} else {
						err = 'sorry, something went wrong';
					}
				} else {
					for (let key in body) {
					    err = `${err} ${body[key]}`;
					}
				}
		}
	
		if (error instanceof Error) {
			console.log(error);
		    const errorString = error.toString();
		}
		
	
	    return Promise.reject(err);
	}
}
