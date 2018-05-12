import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClientService } from './http-client.service';
import { CommonService } from './common.service';
// import { SocketService } from './socket.service';
import 'rxjs/add/operator/toPromise';
import { User } from '../models';
import { Subject }    from 'rxjs/Subject';
import {UserLogin} from '../interfaces';
import {SocketService} from './socket.service';

@Injectable()
export class AuthService extends CommonService {
    public isLoggedIn: boolean = false;
    public redirectUrl: string ;
	
	private user : User;
    private isLoggedState = new Subject<boolean>();
    public isLoggedState$ = this.isLoggedState.asObservable();

    constructor(
        private http: HttpClientService,
        private socketService: SocketService,
      ) {
            super();
    }
    
    public login(data: UserLogin): Promise<any>  {
        return this.http.post(`login`, data)
            .toPromise()
            .then((res: Response) => {
                this.user = this.extractData(res, 'User');
                this.socketService.disconnectFromSocket();
                this.socketService.initialize(this.user.apiToken);
                this.setToken(this.user);
                return this.user;
            })
            .catch(this.handleError);
    }
	
	public confirmResetToken(token: string): Promise<any>  {
		return this.http.get(`confirmResetPassword/${token}`)
			.toPromise()
			.then((res: Response) => {
				return this.extractData(res, 'User');
			})
			.catch(this.handleError);
	}

    public checkUser(): Promise<any>  {
        let token: string = localStorage.getItem('token');
        this.http.setAuth(token);
        this.socketService.initialize(token);
        return this.http.get(`me`)
            .toPromise()
            .then((res: Response) => {
	            this.user = this.extractData(res, `User`);
                this.setToken(this.user, false, false);
                return this.user;
            })
            .catch(this.handleError);
    }

    private setToken(user: User, setAuth: boolean = true, setToken: boolean = true): void {
        localStorage.setItem('user', JSON.stringify(user));
        setToken && localStorage.setItem('token', user.apiToken);
        setToken && this.socketService.initialize(user.apiToken);
        setAuth && this.http.setAuth(user.apiToken);
        this.setLoginState(true);
        this.isLoggedIn = true;
    }

    public logout(): Promise<any>   {
	    return this.http.post(`logout`, {})
		    .toPromise()
		    .then((res: Response) => {
			    localStorage.removeItem('token');
			    localStorage.removeItem('user');
			    this.setLoginState(false);
			    this.http.removeAuth();
			    this.isLoggedIn = false;
		    })
		    .catch(this.handleError);
    }

    public setLoginState(value: boolean): void {
        this.isLoggedState.next(value);
    }
    
    public getUser() : User {
    	return this.user;
    }

}
