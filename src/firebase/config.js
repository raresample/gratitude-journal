import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBhuikOHQZgeNHrViFdzZxzCqLLQUpQVhs",
  authDomain: "vue-gratitude-journal.firebaseapp.com",
  projectId: "vue-gratitude-journal",
  storageBucket: "vue-gratitude-journal.appspot.com",
  messagingSenderId: "54924640179",
  appId: "1:54924640179:web:b731b5f77c2059186395c6"
};

// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()

export { db, auth }