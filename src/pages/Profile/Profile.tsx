// import { useState, useEffect } from 'react';
// import { auth, firestore } from '../../services/firebase';
import { handleLogOut } from "../../hooks/useAuth"
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, firestore } from "../../services/firebase";
import { useParams } from 'react-router-dom';
import { getAuth } from "firebase/auth";





function Profile() {

  const auth = getAuth();
  const user = auth.currentUser;
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
  
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }

      return (
        <div>
          <h1>hola</h1>
          <h2>{user?.email}</h2>
          <form onSubmit={handleLogOut}>
            <button type="submit">Log Out</button>
          </form>
        </div>
      )
      // const [username, setUsername] = useState('');

      // useEffect(() => {
      //   const unsubscribe = auth.onAuthStateChanged(async user => {
      //       console.log(user)
      //     if (user) {
      //       const userDoc = await firestore.collection('users').doc(user.uid).get();
      //       setUsername(userDoc?.data()?.username);
      //     }
      //   });

      //   return unsubscribe;
      // }, []);

      // return (
      //   <div className="profile-container">
      //     <h1>Welcome, {username}</h1>
      //     {/* Add form elements for the user to add description and profile picture */}
      //   </div>
      // );
    }

    export default Profile;