// import firebase from 'firebase';
import firebase from 'firebase';

let config={
    apiKey: "AIzaSyAT4P7fiDyhRSAPpO7GkyXCCFpqTWJHdHc",
    authDomain: "myfyp-a7446.firebaseapp.com",
    databaseURL: "https://myfyp-a7446.firebaseio.com",
    projectId: "myfyp-a7446",
    storageBucket: "myfyp-a7446.appspot.com",
    messagingSenderId: "692172954318",
    appId: "1:692172954318:web:2bc04146edf797352d8e9f",
    measurementId: "G-GW9MPF16GR"
};

let app=firebase.initializeApp(config);
export const db = app.database();
export const auth = app.auth();