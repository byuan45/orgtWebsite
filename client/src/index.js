import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';
import { createStore } from 'redux';
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'


const store = createStore(rootReducer);

// var firebaseConfig = {
//     apiKey: "AIzaSyDz52dI4spVIgKdCVY0CjI9Y1liMhtJK94",
//     authDomain: "orgtwebsite.firebaseapp.com",
//     databaseURL: "https://orgtwebsite.firebaseio.com",
//     projectId: "orgtwebsite",
//     storageBucket: "",
//     messagingSenderId: "189254518142",
//     appId: "1:189254518142:web:ba3abd9ca179fd0a"
// };
//firebase.initializeApp(config);

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
