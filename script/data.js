import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import {
  collection,
  getDocs,
  getFirestore,
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyA3q-X6UPSGY63B6WHMDQ3NgppXZRSekhQ",
  authDomain: "feedbackform-ba51b.firebaseapp.com",
  projectId: "feedbackform-ba51b",
  storageBucket: "feedbackform-ba51b.appspot.com",
  messagingSenderId: "471799338538",
  appId: "1:471799338538:web:7319bdf20acc15855a9553",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

let studentData = document.getElementById("data");

const querySnapshot = await getDocs(collection(db, "StudentInfo"));
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  let info = doc.data();
  console.log(info);
  let time = new Date(info.entrytime).toDateString();
  studentData.innerHTML += `
  <tr>
      <td>${time}</td>
      <td>${info.name}</td>
      <td>${info.mobileNumber}</td>
      <td>${info.occupation}</td>
      <td>${info.address}</td>
      <td>${info.problems}</td>
      <td>${info.Solutions}</td>
      </tr>
    `;
});
