export class User {

    private static usersList: User[] = []

    constructor(email: string, password: string) {
        this.email = email
        this.password = password

        User.usersList.push(this)
    }

    login(email: string, password: string): {
        successful: boolean, message: string
    } {
        let successful = false
        let userExists = false
        for(let user of User.usersList) {
            if(user.email == this.email) {
                userExists = true
                if(user.password == this.password) {
                    successful = true
                }
                break
            }
        }

        let message = ""
        if(userExists) {
            message = "Incorrect Password."
        } else {
            message = "That user does not exist."
        }

        return {
            successful, message
        }
    }

    logout() {
        //Do supabase logout here
    }

    email: string
    password: string

}