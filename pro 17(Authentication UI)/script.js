// -------------------------------
// YOUR FIREBASE API KEYS HERE
// -------------------------------
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// -------------------------------
// UI Switching
// -------------------------------
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

function switchToSignUp() {
    loginForm.classList.remove("active");
    signupForm.classList.add("active");
}

function switchToLogin() {
    signupForm.classList.remove("active");
    loginForm.classList.add("active");
}

// -------------------------------
// SIGN UP
// -------------------------------
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    auth.createUserWithEmailAndPassword(email, password)
    .then((userCred) => {
        return userCred.user.updateProfile({ displayName: name });
    })
    .then(() => {
        alert("Account Created Successfully!");
        switchToLogin();
    })
    .catch(err => alert(err.message));
});

// -------------------------------
// LOGIN
// -------------------------------
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    auth.signInWithEmailAndPassword(email, password)
    .then(() => {
        alert("Login Successful!");
    })
    .catch(err => alert(err.message));
});

// -------------------------------
// GOOGLE LOGIN
// -------------------------------
function googleLogin() {
    let provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
    .then(() => alert("Google Login Success"))
    .catch(err => alert(err.message));
}

// -------------------------------
// FACEBOOK LOGIN
// -------------------------------
function facebookLogin() {
    let provider = new firebase.auth.FacebookAuthProvider();

    auth.signInWithPopup(provider)
    .then(() => alert("Facebook Login Success"))
    .catch(err => alert(err.message));
}