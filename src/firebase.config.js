import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD1gPfr8hlqgTw8W50QWpAS-U11LZTj20I",
    authDomain: "foodhub-16981.firebaseapp.com",
    databaseURL: "https://foodhub-16981-default-rtdb.firebaseio.com",
    projectId: "foodhub-16981",
    storageBucket: "foodhub-16981.appspot.com",
    messagingSenderId: "771184722377",
    appId: "1:771184722377:web:bb998501f2d8fd7d34a818"
  };

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };