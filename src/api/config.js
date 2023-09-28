import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
	
	apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
	authDomain: import.meta.env.VITE_APP_FIREBASE_DOMAIN,
	projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDERID,
	appId: import.meta.env.VITE_APP_FIREBASE_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();

