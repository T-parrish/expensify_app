import * as firebase from 'firebase';

// Initialize Firebase
const config = {
    apiKey: "AIzaSyBj4DTlLGc8_qSvqRhnSs-ToHeAWrG5fTs",
    authDomain: "expensify-74a03.firebaseapp.com",
    databaseURL: "https://expensify-74a03.firebaseio.com",
    projectId: "expensify-74a03",
    storageBucket: "expensify-74a03.appspot.com",
    messagingSenderId: "316006140565"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

