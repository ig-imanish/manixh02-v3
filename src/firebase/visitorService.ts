import { db } from './config';
import { doc, getDoc, setDoc, updateDoc, increment } from 'firebase/firestore';

// Function to get current visitor count
export const getVisitorCount = async (): Promise<number> => {
    try {
        const visitorDocRef = doc(db, 'analytics', 'visitors');
        const visitorDoc = await getDoc(visitorDocRef);

        if (visitorDoc.exists()) {
            return visitorDoc.data().count || 0;
        } else {
            // If document doesn't exist, create it with count 0
            await setDoc(visitorDocRef, { count: 0 });
            return 0;
        }
    } catch (error) {
        console.error('Error getting visitor count:', error);
        return 0;
    }
};

// Function to increment visitor count
export const incrementVisitorCount = async (): Promise<number> => {
    try {
        const visitorDocRef = doc(db, 'analytics', 'visitors');

        // Increment the count by 1
        await updateDoc(visitorDocRef, {
            count: increment(1),
            lastVisit: new Date().toISOString()
        });

        // Get and return the updated count
        const updatedDoc = await getDoc(visitorDocRef);
        return updatedDoc.data()?.count || 0;
    } catch (error) {
        console.error('Error incrementing visitor count:', error);
        // If document doesn't exist, create it
        try {
            await setDoc(doc(db, 'analytics', 'visitors'), {
                count: 1,
                lastVisit: new Date().toISOString()
            });
            return 1;
        } catch (createError) {
            console.error('Error creating visitor document:', createError);
            return 0;
        }
    }
};

// Function to track unique visitors (using sessionStorage to avoid multiple counts per session)
export const trackVisitor = async (): Promise<number> => {
    const hasVisited = sessionStorage.getItem('hasVisited');

    if (!hasVisited) {
        sessionStorage.setItem('hasVisited', 'true');
        return await incrementVisitorCount();
    } else {
        return await getVisitorCount();
    }
};