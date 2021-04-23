import firebase from 'firebase/app'
import 'firebase/database'

// firebase init goes here
var firebaseConfig = {
  apiKey: "AIzaSyCjzRvMHVtutmP3bRUudz13LEGYr9o2CIY",
  authDomain: "fir-db-issue-vue.firebaseapp.com",
  databaseURL: "https://firebase-db-issue-vue-default-rtdb.firebaseio.com",
  projectId: "firebase-db-issue-vue",
  storageBucket: "firebase-db-issue-vue.appspot.com",
  messagingSenderId: "20764530385",
  appId: "1:20764530385:web:c93e511398b05be18497f0"
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()

localStorage.clear()

database.useEmulator(window.location.hostname, 9000)

export {
  database
}
