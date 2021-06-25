import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAWR1IJ4D7FeOFmm3wIS8FyA_2WLf7X_70",
    authDomain: "attendance-37b9c.firebaseapp.com",
    databaseURL: "https://attendance-37b9c-default-rtdb.firebaseio.com",
    projectId: "attendance-37b9c",
    storageBucket: "attendance-37b9c.appspot.com",
    messagingSenderId: "630443691541",
    appId: "1:630443691541:web:03da71b5a49d800e2c481c"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database()