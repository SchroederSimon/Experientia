// import { useState, useEffect } from 'react';
// import { auth, firestore } from '../../services/firebase';

function Profile() {
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