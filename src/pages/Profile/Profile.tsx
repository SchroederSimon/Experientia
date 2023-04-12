import { doc, getDoc, getDocFromCache } from "firebase/firestore";
import { db } from "../../services/firebase";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
import '../../pages/Profile/Profile.css'


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
    <div className="profile-container">
      {userData && (
        <div className="left-profile-container">
          <div className="profile-interaction">
            <img src="/profile2.png" alt="" />
            <div className="profile-friend-message">
              <button>Send message</button>
              <button>Add friend</button>
            </div>
          </div>
          <h1>Juan carlos Messi</h1>
          <ul>
            <li>Age: {userData.age}</li>
            <li>Role: {userData.age}</li>
            <li>Interest: {userData.age}</li>
            <li>Degree: {userData.age}</li>
            <li>City: {userData.age}</li>
          </ul>
          <h1>{userData.email}</h1>
          <p>{userData.uid}</p>
        </div>
      )}
      <div className="right-profile-container">
        <h1>Courses</h1>
        <h2>Front-end developer</h2>
        <span>10/3/2022-10/3/2023</span>
        <p>Welcome to Introduction to Front-End Development, the first course in the Meta Front-End Developer program.
          This course is a good place to start if you want to become a web developer. You will learn about the day-to-day responsibilities of a web developer and get a general understanding of the core and underlying technologies that power the internet. You will learn how front-end developers create websites and applications that work well and are easy to maintain.</p>
      </div>
    </div>
  );
}

export default Profile;