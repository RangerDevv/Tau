export class User {

    private static usersList: User[] = []
    
    public static currentUser: User | null = null

    constructor(email: string, name: string, password: string) {
        this.email = email
        this.password = password
        this.name = name
    }
    
    static register(email: string, name: string, password: string, confirmPassword: string): {
        successful: boolean, message: string
    } {
        if (password != confirmPassword) {
            return {successful: false, message: "Passwords do not match."}
        }
        
        if (User.usersList.find(x => x.email == email)) {
            return {successful: false, message: "A user with that email already exists."}
        }
        
        let registered = new User(email, name, password)
        
        User.usersList.push(
            registered
        )
        
        User.currentUser = registered
        
        return {successful: true, message: ""}
    }

    static login(email: string, password: string): {
        successful: boolean, message: string
    } {
        let successful = false
        let userExists = false
        let loggedIn: User | null = null
        for(let user of User.usersList) {
            if(user.email == email) {
                userExists = true
                if(user.password == password) {
                    successful = true
                    loggedIn = user
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
        
        User.currentUser = loggedIn!

        return {
            successful, message
        }
    }

    static logout() {
        //Do supabase logout here
        User.currentUser = null
    }

    email: string
    password: string
    name: string

}
