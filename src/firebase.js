import firebase from "firebase/app";
import "firebase/messaging";

const config = {
  apiKey: "AIzaSyAxyupNReJlOwwTGFYKkQRxht2Hn1lgZWE",
  authDomain: "cloud-msg-6285f.firebaseapp.com",
  projectId: "cloud-msg-6285f",
  storageBucket: "cloud-msg-6285f.appspot.com",
  messagingSenderId: "279787390860",
  appId: "1:279787390860:web:bd833624fae55f4394b8a9",
};
firebase.initializeApp(config);
const jlkjasd = firebase.messaging();
export default jlkjasd;
