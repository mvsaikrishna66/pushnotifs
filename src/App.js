import "./App.css";
import firebase from "./firebase";
import { useEffect } from "react";
function App() {
  // let permission = Notification.permission;
  // if (permission === "granted") {
  //   showNotification();
  // } else if (permission === "default") {
  //   requestAndShowPermission();
  // } else {
  //   alert("Use normal alert");
  // }
  // function showNotification() {
  //   var title = "JavaScript Jeep";
  //   var body = "Message to be displayed";
  //   var notification = new Notification(title, { body });
  //   notification.onclick = () => {
  //     notification.close();
  //     window.parent.focus();
  //   };
  // }
  // function requestAndShowPermission() {
  //   Notification.requestPermission(function (permission) {
  //     if (permission === "granted") {
  //       showNotification();
  //     }
  //   });
  // }
  useEffect(() => {
    const messaging = firebase;
    messaging
      .requestPermission()
      .then(() => {
        return messaging.getToken();
      })
      .then((token) => {
        console.log("Token : ", token);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div className="App">Hello</div>;
}

export default App;
