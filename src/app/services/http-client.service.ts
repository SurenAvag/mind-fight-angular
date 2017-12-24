import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams, ResponseContentType } from '@angular/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpClientService {
	private restClientUrl: string;
	private token: string;
	private headers: Headers;
	private options: RequestOptions;
	
	constructor(private http: Http) {
		this.restClientUrl = environment.restClient;
		this.headers = new Headers();
		this.headers.append('Accept', 'application/json');
		this.headers.append('Accept', 'application/json');
        this.headers.append('Access-Control-Allow-Origin', '*');

		this.options = new RequestOptions({headers: this.headers});
	}
	
	public setAuth(token: string): void {
		this.removeAuth();
		let username = '';
		let password = token;
		token = btoa(username + ":" + password);
		this.headers.append('Authorization', `Basic ${token}`);
	}
	
	public removeAuth(): void {
		this.headers.delete('Authorization');
	}
	
	private appendBlobResponseType(): RequestOptions {
		return new RequestOptions(this.options.merge({
			responseType: ResponseContentType.Blob
		}));
	}
	
	public get(url: string, options: RequestOptions = this.options): Observable<Response> {
		return this.http.get(`${this.restClientUrl + url}`, options);
	}
	
	public getBlob(url: string, options: RequestOptions = this.appendBlobResponseType()): Observable<Response> {
		return this.http.get(`${this.restClientUrl + url}`, options);
	}
	
	public delete(url: string, options: RequestOptions = this.options): Observable<Response> {
		return this.http.delete(`${this.restClientUrl + url}`, options);
	}
	
	public put(url: string, data: any, options: RequestOptions = this.options): Observable<Response> {
		return this.http.put(`${this.restClientUrl + url}`, data, options);
	}
	
	public post(url: string, data: any = {}, options: RequestOptions = this.options): Observable<Response> {
		return this.http.post(`${this.restClientUrl + url}`, data, options);
	}
	
}
