interface User {
    id: number;
    name: string;
    email: string;
}

export class UserModel implements User {
    id: number;
    name: string;
    email: string;

    constructor( id: number, name: string, email: string) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
}

//export { UserModel };