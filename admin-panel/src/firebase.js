// import firebase from "firebase/app";

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.APP_KEY,
  authDomain: "netflix-f6f5f.firebaseapp.com",
  projectId: "netflix-f6f5f",
  storageBucket: "netflix-f6f5f.appspot.com",
  messagingSenderId: "192736720408",
  appId: "1:192736720408:web:f61e337e5c27be91e6f56d",
  measurementId: "G-17FYME0KGP",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCzp3TF6tMr_KYiByXCa5M5hUpYss1ipos",
//   authDomain: "netflix-f6f5f.firebaseapp.com",
//   projectId: "netflix-f6f5f",
//   storageBucket: "netflix-f6f5f.appspot.com",
//   messagingSenderId: "192736720408",
//   appId: "1:192736720408:web:f61e337e5c27be91e6f56d",
//   measurementId: "G-17FYME0KGP"
// };
const firebaseApp = initializeApp(firebaseConfig);

// firebase.initializeApp(firebaseConfig);
// const storage = firebase.storage();
const storage = getStorage(firebaseApp);
export default storage;
