import { doc, getDoc, getDocFromCache } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";


interface UserData {
  uid: string;
  email: string;
  age: number;
}

function Profile() {
  const [userData, setUserData] = useState<UserData>();

  const location = useLocation();
  const userId = location.pathname.split("/").pop();

  useEffect(() => {
    async function getUserData() {
      const docRef = doc(db, "users", userId ?? '');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data() as UserData);
      } else {
        console.log("No such document!");
      }
    }
    getUserData();
  }, [userId]);

  return (
    <div>
      {userData && (
        <div>
          <h1>{userData.email}</h1>
          <p>{userData.uid}</p>
          <p>{userData.age}</p>
        </div>
      )}
    </div>
  );
}

export default Profile;