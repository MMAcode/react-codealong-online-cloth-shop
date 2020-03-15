import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDxu-Ne2NmT3JT40naCb4wsa7lxflkZze4",
  authDomain: "clothshop-c8b66.firebaseapp.com",
  databaseURL: "https://clothshop-c8b66.firebaseio.com",
  projectId: "clothshop-c8b66",
  storageBucket: "clothshop-c8b66.appspot.com",
  messagingSenderId: "511411964643",
  appId: "1:511411964643:web:9b7ee97f0cc27b11d653d6",
  measurementId: "G-XD1XN4DRB0"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);





export const createUserProfileDocumentIfItDoesntExist = async (userInfoFromAuth, ourExtraUserInfo) => {
  if (!userInfoFromAuth) return null;

  let userInfoFromFirestoreDBref = firestore.doc(`users/${userInfoFromAuth.email}`);
  let userInfoFromFirestoreDB = await userInfoFromFirestoreDBref.get();


  if (!userInfoFromFirestoreDB.exists) {
    // console.log("time to create user's profile...")
    const { email, displayName, uid: userAUTHuid } = userInfoFromAuth;
    const created = new Date();
    const createdInMS = created.getTime();

    userInfoFromFirestoreDB = {
      displayName,
      email,
      userAUTHuid,
      created,
      createdInMS,
      ...ourExtraUserInfo
    }
    await userInfoFromFirestoreDBref.set(userInfoFromFirestoreDB)
  } else {
    userInfoFromFirestoreDB = userInfoFromFirestoreDB.data();
  }

  // console.log("user info from DB:")
  // console.log(userInfoFromFirestoreDB)
  return userInfoFromFirestoreDB;
}