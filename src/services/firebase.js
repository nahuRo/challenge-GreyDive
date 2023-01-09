import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// const firebaseConfig = {
// 	apiKey: "AIzaSyAXEaAU8pt5a3dhpcXsRSgdBuqyutj6soo",
// 	authDomain: "challenge-greydive-5973d.firebaseapp.com",
// 	projectId: "challenge-greydive-5973d",
// 	storageBucket: "challenge-greydive-5973d.appspot.com",
// 	messagingSenderId: "667277746850",
// 	appId: "1:667277746850:web:997fda52a362c263bb6dfb",
// };

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const collRef = collection(db, "Forms");
