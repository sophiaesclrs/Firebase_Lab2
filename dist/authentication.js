// setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBIkt3YIelrICdaGwPJVLCXCmRTSdGJ0pI",
    authDomain: "gettingstartedwithfireba-3815b.firebaseapp.com",
    projectId: "gettingstartedwithfireba-3815b",
    storageBucket: "gettingstartedwithfireba-3815b.appspot.com",
    messagingSenderId: "23812251569",
    appId: "1:23812251569:web:20cdac7d0ec133eb952790",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// registration function
const register = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            alert("Successfully Registered!")
            console.log(result)
            window.location.href = "index.html";
            // ...
        })
        .catch((error) => {
            alert("Sorry. The email address is already in use by another user")
            console.log(error.code);
            console.log(error.message)
            window.location.reload();
            // ..
        });
}

// login function
const login = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in
            alert("Successfully Login!")
            console.log(result)
            window.location.href = "home.html";
        })
        .catch((error) => {
            alert("Email or Password is incorrect")
            console.log(error.code);
            console.log(error.message)
            window.location.reload();
        });
}