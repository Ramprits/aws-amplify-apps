import { CognitoUserPool } from 'amazon-cognito-identity-js'
const userPool = {
    UserPoolId: process.env.REACT_APP_POOL_ID,
    ClientId: process.env.REACT_APP_CLIENT_ID
}
export default new CognitoUserPool(userPool)