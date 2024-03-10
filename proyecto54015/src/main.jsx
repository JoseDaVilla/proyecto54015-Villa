import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from "./App"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDMD0jI3CK2X8qVXWn4pOXWXIfnf4WalX0",
    authDomain: "proyecto54015-villa.firebaseapp.com",
    projectId: "proyecto54015-villa",
    storageBucket: "proyecto54015-villa.appspot.com",
    messagingSenderId: "208852005959",
    appId: "1:208852005959:web:c4a3c2f41f294d3218ad62"
};

// Initialize Firebase  
const app = initializeApp(firebaseConfig);

export const firebaseApp = app;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
