import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getDatabase, ref, set, onValue, push } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = {
   apiKey: "YOUR-API-KEY",
   authDomain: "YOUR-PROJECT.firebaseapp.com",
   databaseURL: "https://YOUR-PROJECT.firebaseio.com",
   projectId: "YOUR-PROJECT-ID",
   storageBucket: "YOUR-PROJECT.appspot.com",
   messagingSenderId: "SENDER-ID",
   appId: "APP-ID"
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

export { database, ref, set, onValue, push };
