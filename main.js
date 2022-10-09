// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/9.11.0/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

let contact = document.querySelector(".contact");
let work = document.querySelector("#work");
let fullName = document.querySelector("#fullname");
let phoneNumber = document.querySelector("#number");
let workAdress = document.querySelector("#work-1");
let challenges = document.querySelector("#challenges");
let solutions = document.querySelector("#improve");
let submit = document.querySelector("#submit");
let reset = document.querySelector("#clear");
function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

function Validation() {
  if (
    isEmptyOrSpaces(work.value) ||
    isEmptyOrSpaces(fullName.value) ||
    isEmptyOrSpaces(phoneNumber.placeholder) ||
    isEmptyOrSpaces(workAdress.placeholder) ||
    isEmptyOrSpaces(challenges.placeholder) ||
    isEmptyOrSpaces(solutions.placeholder)
  ) {
    alert("you cannot leave any field empty");
    // location.reload();
    return false;
  }

  return true;
}

function submitForm() {
  //   btn.classList.toggle("button--loading");
  if (!Validation()) {
    return;
  }
  // const docRef = doc(db, "studentInfo");
  // const docSnap = getDoc(docRef);
  // let userid = docSnap.uid;
  let timeStamp = new Date();

  addDoc(collection(db, "StudentInfo"), {
    name: fullName.value,
    entrytime: timeStamp.getTime(),
    occupation: work.value,
    mobileNumber: phoneNumber.value,
    address: workAdress.value,
    problems: challenges.value,
    Solutions: solutions.value,
    hasAnswered: "yes",
  })
    .then(() => {
      alert("post added successfully");
      reset.click();
    })
    .catch((error) => {
      alert("error" + error);
    });
}

submit.addEventListener("click", () => submitForm());
contact.addEventListener("click", function revert() {
  window.location.replace("https://kinplusgroup.com/contact");
});
