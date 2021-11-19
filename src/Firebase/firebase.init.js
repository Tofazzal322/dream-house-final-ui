import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebasae.config";

const FirebaseInit = () => {
    initializeApp(firebaseConfig);
}

export default FirebaseInit;