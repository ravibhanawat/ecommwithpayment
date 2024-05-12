// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

 

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGES_BUCKET,
  messagingSenderId: process.env.MESSAGEING_SENDER_ID,
  appId: process.env.APPID
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

