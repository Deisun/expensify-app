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

const database = firebase.database();

database.ref().set({
    name: "Rob Douma",
    age: 39,
    isSingle: false,
    location: {
        city: 'Atlanta',
        country: 'USA'
    }
}).then(() => {
    console.log('Data save successful.');
}).catch((e) => {
    console.log('Data save failed.', e);
})

database.ref('age').remove()
    .then(() => {
        console.log('Data remove successful.')
    })
    .catch((e) => {
        console.log('Data remove failed.', e)
    });

database.ref().update({
    name: 'Mike',
    age: 29,
    job: 'Software developer',
    isSingle: null,
    'location/city': 'Boston'
}).then(() => {
    console.log('Data update successful.')
}).catch((e) => {
    console.log('Data update failed.', e)
});