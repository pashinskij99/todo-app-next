import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAsGKPygosQnqySC1eOfLlmjNgz5-5FIOc",
  authDomain: "todo-app-4e8f4.firebaseapp.com",
  projectId: "todo-app-4e8f4",
  storageBucket: "todo-app-4e8f4.appspot.com",
  messagingSenderId: "1004238753585",
  appId: "1:1004238753585:web:6e96e850cb1e9ccfd9aa10",
  measurementId: "G-X7EDZ7GSMC"
};

export const app = initializeApp(firebaseConfig);
