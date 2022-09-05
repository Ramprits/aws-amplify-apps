import { AuthenticationDetails, CognitoUser } from "amazon-cognito-identity-js"
import UserPool from "../UserPool"

export const loginUser = async (email, password) => {
    return await new Promise((resolve, reject) => {
        const user = new CognitoUser({
            Username: email,
            Pool: UserPool
        })
        const authDetails = new AuthenticationDetails(
            {
                Username: email,
                Password: password
            }
        )
        user.authenticateUser(authDetails, {
            onSuccess: (data) => {
                resolve(data)
            },
            onFailure: (err) => {
                reject("Incorrect username or password.")
            },
            newPasswordRequired: (data) => {
                resolve(data)
            }
        })
    })
}