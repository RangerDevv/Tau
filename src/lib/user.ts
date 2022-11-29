export class User {

    private static usersList: User[] = []

    constructor(email: string, password: string) {
        this.email = email
        this.password = password
    }
    
    static register(email: string, password: string, confirmPassword: string): {
        successful: boolean, message: string
    } {
        if (password != confirmPassword) {
            return {successful: false, message: "Passwords do not match."}
        }
        
        if (User.usersList.find(x => x.email == email)) {
            return {successful: false, message: "A user with that email already exists."}
        }
        
        User.usersList.push(
            new User(email, password)
        )
        
        return {successful: true, message: ""}
    }

    static login(email: string, password: string): {
        successful: boolean, message: string
    } {
        let successful = false
        let userExists = false
        for(let user of User.usersList) {
            if(user.email == email) {
                userExists = true
                if(user.password == password) {
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

    static logout() {
        //Do supabase logout here
    }

    email: string
    password: string

}
