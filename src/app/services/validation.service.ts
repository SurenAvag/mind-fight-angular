import { Injectable } from '@angular/core';
import {AbstractControl} from "@angular/forms";
import {AuthService} from "./auth.service";
import {User} from "../models/user";

@Injectable()
export class ValidationService {

    constructor() {
    }

    public static getValidatorErrorMessage(code: string): string {
        let config = {
            'required': 'This field is required',
            'maxlength': 'The text entered exceeds the maximum length.',
            'minlength': 'Min 8 characters!',
            'domain': 'Invalid character(s)!',
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'terms': 'Please indicate that you have read and agree to the Terms and Conditions.',
            'invalidPasswordConfirmation': 'Passwords should match',
            'areEqual': 'Passwords should match',
            'numeric': 'Please input only numbers',
            'matchWithOrganization': 'The role must match with organization'
        };

        return config[code];
    }

    static terms(control) {
        if (control.value) {
            return null;
        } else {
            return {'terms': true};
        }
    }

    public static emailValidator(control: AbstractControl) {
        if (control.value && control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return {'invalidEmailAddress': true};
        }
    }
}
