export class User {

    private static usersList: User[] = []

    constructor(email: string, password: string) {
        this.email = email
        this.password = password

        User.usersList.push(this)
    }

    email: string
    password: string

}