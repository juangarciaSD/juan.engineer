import firebase from 'firebase'

/***
 * @param Email Email Need email to find user account
 * @param Passowrd Needed to authenticate account
 */
export const login = async(email: string, password: string) => {
    const auth = await firebase.auth().signInWithEmailAndPassword(email, password)
    return auth
}

export const create = async(email: string, password: string) => {
    const auth = await firebase.auth().createUserWithEmailAndPassword(email, password);
    
    var userObject = {
        email: auth.user.email,
        files: []
    }

    firebase.firestore().collection('users').doc(userObject.email).set(userObject)

    return auth
}