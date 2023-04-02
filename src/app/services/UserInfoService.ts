import { Injectable } from '@angular/core';
import { LoggedUser } from '../domain/LoggedUser';

@Injectable({
    providedIn: 'root'
})
export class UserInfoService {

    getLoggedUserData(): LoggedUser {
        //let user1 = new LoggedUser("Adam", "Nowak", true);
        let user2 = new LoggedUser("Anna", "Adamiak", false);
        return user2;
    }
    constructor() {
        
    }
}