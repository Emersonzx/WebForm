import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCx1--u7hGXa4uxt_BDzzJCwMiM5eb7cv0",
  authDomain: "reactform-74ad1.firebaseapp.com",
  projectId: "reactform-74ad1",
  storageBucket: "reactform-74ad1.appspot.com",
  messagingSenderId: "116229038869",
  appId: "1:116229038869:web:fe8b4a546613f8b8aa7f1c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);





