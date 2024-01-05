import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "@firebase/firestore";
import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
import 'firebase/storage';
const firebaseConfig = {
  apiKey: "AIzaSyBwLN_paJ5nJKVs2xYvxe8IXTrTLSdUXew",
  authDomain: "home-service-f0322.firebaseapp.com",
  projectId: "home-service-f0322",
  storageBucket: "home-service-f0322.appspot.com",
  messagingSenderId: "75415761917",
  appId: "1:75415761917:web:8ca965d8e6197866f9df94",
  measurementId: "G-Q6SPZ7M8WH"
};
const app = initializeApp(firebaseConfig);
const fire = initializeApp(firebaseConfig);
const auth=getAuth();
firebase.initializeApp(firebaseConfig);
export const dataRef=firebase.database();
export default firebase;
export const db = getFirestore(app);
export { app,auth,fire};