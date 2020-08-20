import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBiIyQ3aXDXvSKgo1rIiYLCnIwrHfm3o4I",
    authDomain: "expensify-a45fc.firebaseapp.com",
    databaseURL: "https://expensify-a45fc.firebaseio.com",
    projectId: "expensify-a45fc",
    storageBucket: "expensify-a45fc.appspot.com",
    messagingSenderId: "308208000586",
    appId: "1:308208000586:web:6fa53fadfbe6918ab510b3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.database().ref().set({
    name: "Rob Douma",
    age: 39
})