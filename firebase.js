import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBr-3mqSS1P6RjeptqUTTkhUZ9JbbAsM1U",
  authDomain: "sc-carrot-market.firebaseapp.com",
  databaseURL: "https://sc-carrot-market-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sc-carrot-market",
  storageBucket: "sc-carrot-market.appspot.com",
  messagingSenderId: "145483233478",
  appId: "1:145483233478:web:aaa49d3c41e1fea4f1bfc7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const storage = getStorage(app);
const auth= getAuth(app);
