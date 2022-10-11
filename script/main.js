// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.11.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDocs,
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
let errmsg = document.querySelector(".error");
function isEmptyOrSpaces(str) {
  return str === null || str.match(/^ *$/) !== null;
}

function Validation() {
  if (
    isEmptyOrSpaces(work.value) ||
    isEmptyOrSpaces(fullName.value) ||
    isEmptyOrSpaces(phoneNumber.value) ||
    isEmptyOrSpaces(workAdress.value) ||
    isEmptyOrSpaces(challenges.value) ||
    isEmptyOrSpaces(solutions.value)
  ) {
    errmsg.innerText = "you cannot leave any field empty";
    errmsg.style.display = 'block'
    setTimeout(() => {
    errmsg.style.display = 'none'
    }, "3000")
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
      // alert("post added successfully");
      // reset.click();
      // errmsg.innerText = "";
      errmsg.innerText = "Post Added Succesfully";
    errmsg.style.display = 'block'
    errmsg.style.backgroundColor = 'green'
    setTimeout(() => {
    errmsg.style.display = 'none'
    }, "3000")
    })
    .catch((error) => {
      alert("error" + error);
    });
}

submit.addEventListener("click", () => submitForm());
contact.addEventListener("click", function revert() {
  window.location.replace("https://kinplusgroup.com/contact");
});
