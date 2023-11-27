const firebaseConfig = {
    apiKey: "AIzaSyCZygurMCea2gI9TW405m7C2980ehgkJnU",
    authDomain: "confessions-web.firebaseapp.com",
    projectId: "confessions-web",
    storageBucket: "confessions-web.appspot.com",
    messagingSenderId: "309409262475",
    appId: "1:309409262475:web:91a3cb43b9d07e28af1d8e"
  };
//const app = initializeApp(firebaseConfig);
//firebase. initializeApp(firebaseConfig);
//const txtDB = getFirestore(app)
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

// Import the functions you need from the SDKs you need


