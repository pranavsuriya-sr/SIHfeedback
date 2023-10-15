import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getDatabase, ref, push, get } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyAlVGqXdpWGp5sSVv2rrMkDPK46rzghoP0",
    authDomain: "feedbacksih.firebaseapp.com",
    projectId: "feedbacksih",
    storageBucket: "feedbacksih.appspot.com",
    messagingSenderId: "944297112402",
    appId: "1:944297112402:web:f6a390512aced0f8ac008b",
    measurementId: "G-0FCVDEW5VL"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const form1 = document.getElementById("myform");
const name1Input = document.getElementById("fname");
const appnt1Input = document.getElementById("ema");
const unq1Input = document.getElementById("fdbck");


form1.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the default form submission
  
    // Get values from the form
    const name1 = name1Input.value;
    const appnt1 = appnt1Input.value;
    const unq1 = unq1Input.value;
  
    // Push the data to the Firebase Realtime Database
    const appointmentsRef = ref(database, 'feedback');
    push(appointmentsRef, {
      name: name1,
      mail: appnt1,
      feedback: unq1
    }).then(() => {
      // Data has been successfully pushed
      alert("Feedback data pushed to Firebase");
      // You can add any further actions or UI updates here
    }).catch((error) => {
      // Handle errors if data push fails
      alert("Error pushing error data: ", error);
    });
  
    // Clear the form fields
    name1Input.value = '';
    appnt1Input.value = '';
    unq1Input.value = '';
  });
  