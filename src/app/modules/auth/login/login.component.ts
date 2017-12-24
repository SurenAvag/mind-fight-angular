import { Component, OnInit } from '@angular/core';
import {BaseComponent} from '../../../base.component';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService, ValidationService} from '../../../services';
import {Router} from '@angular/router';
import {User} from '../../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {
    public loginForm : FormGroup;
    public submitted: boolean;
    public error: string;
    public loading: boolean = false;

    constructor(
        private _formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
    ) {
        super();
        this.loginForm = this._formBuilder.group({
            'email': ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
            'password': ['', Validators.compose([Validators.required])],
        });
    }

    ngOnInit() {}

    public login() : void {
        this.submitted = true;
        if(this.loginForm.valid) {
            this.loading = true;
            this.authService.login(this.loginForm.value)
                .then((user: User) => {
                    this.router.navigate(['/'])
                })
                .catch((error: string) => {
                    this.loading = false;
                    this.error = error;
                    setTimeout(() => {
                        this.error = '';
                    }, 2000)
                });
        }

    }


}
