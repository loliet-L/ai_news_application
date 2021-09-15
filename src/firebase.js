
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBylqgSYrcU6l-7VE8USnYlfm-hHjl_R80",
  authDomain: "auth-react-f4e5d.firebaseapp.com",
  projectId: "auth-react-f4e5d",
  storageBucket: "auth-react-f4e5d.appspot.com",
  messagingSenderId: "854432099294",
  appId: "1:854432099294:web:4f9694256d62694c52cb4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
export default app

export const auth = getAuth();

