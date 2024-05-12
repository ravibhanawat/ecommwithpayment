// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import env from "react-dotenv";
 console.log("daa",env)

const firebaseConfig = {
  apiKey: env.API_KEY,
  authDomain: env.AUTH_DOMIAN,
  projectId: env.PROJECT_ID,
  storageBucket: env.STORAGES_BUCKET,
  messagingSenderId: env.MESSAGEING_SENDER_ID,
  appId: env.APPID
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);

