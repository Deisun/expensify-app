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

database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
})

// Setup data sub -> Andrew is a Software Developer at Amazon.

// Change the data and make sure it reprints

// database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log('Error fetching data', e);
//   });

// database.ref().set({
//   name: 'Andrew Mead',
//   age: 26,
//   stressLevel: 6,
//   job: {
//     title: 'Software developer',
//     company: 'Google'
//   },
//   location: {
//     city: 'Philadelphia',
//     country: 'United States'
//   }
// }).then(() => {
//   console.log('Data is saved!');
// }).catch((e) => {
//   console.log('This failed.', e);
// });

// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Data was removed');
//   }).catch((e) => {
//     console.log('Did not remove data', e);
//   });
