import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAYJTIjelWC9rElCc0rdi9l6WChziAN_-Q",
  authDomain: "react-lofi-radio-app.firebaseapp.com",
  projectId: "react-lofi-radio-app",
  storageBucket: "react-lofi-radio-app.appspot.com",
  messagingSenderId: "163393999203",
  appId: "1:163393999203:web:6e25a029044fdd7f2c4356"
};

export const app = initializeApp(firebaseConfig);