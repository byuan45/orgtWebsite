import firebase from 'firebase';
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

const fire = firebase.initializeApp(config);


export default fire;
