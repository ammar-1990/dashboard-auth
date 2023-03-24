import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey:'AIzaSyA3n2Fnz-2hOW-G-epAjQo4J8W1ezFXvDQ',
  authDomain: "dashboard-tutorial-8f3b9.firebaseapp.com",
  projectId: "dashboard-tutorial-8f3b9",
  storageBucket: "dashboard-tutorial-8f3b9.appspot.com",
  messagingSenderId: "100230992347",
  appId: "1:100230992347:web:4e362ea20a6831a9c597fe"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth=getAuth()
export const storage = getStorage(app);