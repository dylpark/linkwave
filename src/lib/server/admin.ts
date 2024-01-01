import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import {
    FB_CLIENT_EMAIL,
    FB_PRIVATE_KEY,
    FB_PROJECT_ID,
    // FB_SERVICE_ACCOUNT,
} from '$env/static/private';
import pkg from 'firebase-admin';

try {
    pkg.initializeApp({
        credential: pkg.credential.cert({
            projectId: FB_PROJECT_ID,
            clientEmail: FB_CLIENT_EMAIL,
            privateKey: FB_PRIVATE_KEY,
        }),
    });
} catch (err) {
    if (!/already exists/u.test((err as Error).message)) {
        console.error('Firebase Admin Error: ', (err as Error).stack);
    }
}

export const adminDB = getFirestore();
export const adminAuth = getAuth();
