importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
    apiKey: "AIzaSyDxKgL3GSJb6654s8CG259seF4RF1acvrI",
    authDomain: "ecovia-c741e.firebaseapp.com",
    projectId: "ecovia-c741e",
    storageBucket: "ecovia-c741e.appspot.com",
    messagingSenderId: "749174894848",
    appId: "1:749174894848:web:9ca4f80cfe96fb054c03e5",
    measurementId: "G-9MBDFH83LM"
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// Optional:
messaging.onBackgroundMessage((message) => {
    console.log("onBackgroundMessage", message);
});