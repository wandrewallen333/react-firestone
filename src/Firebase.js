import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyBAbr2ee3ucbPjZDjAuYsYNV_6QC25NNEE",
    authDomain: "firestore-156ed.firebaseapp.com",
    databaseURL: "https://firestore-156ed.firebaseio.com",
    projectId: "firestore-156ed",
    storageBucket: "firestore-156ed.appspot.com",
    messagingSenderId: "261077009039",
    appId: "1:261077009039:web:8e12e7e554caf4c48fe6fa",
    measurementId: "G-5LTDY8MGNB"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;