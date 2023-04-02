export class LoggedUser {
    name: String;
    surname: String;
    isAdmin: Boolean;

    fullname() {
        return `${this.name} ${this.surname}`;
    }

    constructor (name: String, surnme: String, isAdmin:Boolean) {
        this.name = name;
        this.surname =surnme;
        this.isAdmin = isAdmin;
    }
}