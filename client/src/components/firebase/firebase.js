import app from 'firebase';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDz52dI4spVIgKdCVY0CjI9Y1liMhtJK94",
    authDomain: "orgtwebsite.firebaseapp.com",
    databaseURL: "https://orgtwebsite.firebaseio.com",
    projectId: "orgtwebsite",
    storageBucket: "",
    messagingSenderId: "189254518142",
    appId: "1:189254518142:web:ba3abd9ca179fd0a"
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }

    // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);
}


export default Firebase;
