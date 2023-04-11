import { useState, useEffect } from "react";
import { auth, db } from "../../services/firebase";
import { collection, doc, getDoc, getFirestore, onSnapshot } from "firebase/firestore";
import { useParams } from "react-router-dom";


interface UserData {
  uid: string;
  email: string;
  displayName: string;
  age: string;
  // Add any other user information you want to display here
}

function Profile() {
  const [userData, setUserData] = useState<UserData>({
    uid: '',
    email: '',
    displayName: '',
    age: '',
    // Initialize any other user information you want to display here
  });

  const { userId } = useParams<{ userId: string }>();

  useEffect(() => {
    const userId = auth.currentUser?.uid;
    if (!userId) return;
    
    const userDocRef = doc(db, 'users', userId);
    const unsub = onSnapshot(userDocRef, (doc) => {
      const userData = doc.data() as UserData;
      setUserData(userData);
    });
    return unsub;
  }, [userId]);

  return (
    <div>
      <h1>User Profile</h1>
      <p>Email: {auth.currentUser?.email}</p>
      <p>Display Name: {userData?.displayName}</p>
      <p>Age: {userData?.age}</p>
      {/* Add any other user information you want to display here */}
    </div>
  );
}

export default Profile;