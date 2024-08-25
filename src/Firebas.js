import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import toast from 'react-hot-toast';
const portalBox=document.getElementById("portalBox")


const firebaseConfig = {
  apiKey: import.meta.env.VITE_MY_FIREKEY,
  authDomain: import.meta.env.VITE_MY_AUTHDOMAIN,
  projectId: import.meta.env.VITE_MY_PROJECTID,
  storageBucket: import.meta.env.VITE_MY_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MY_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_MY_APPID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export async function userRegister(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user = userCredential.user;
      console.log(user);
      toast.success("Registered. Please verify your Email-address")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error("Unable to Register! Please try again")

    });
}


export async function userLogin(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {

      const user = userCredential.user;
      console.log(user);
      toast.success("Logged in successfully")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error("The username or password is incorrect")

    });
}



export function userGoogle(){
  const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    toast.success("Signed in successfully")
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    toast.error("Unable to Sign In! Please try again")
    // ...
  });

}

//     apiKey: "AIzaSyABVCNbasbM6MkLzzAvrdvpMViPGzx2JgQ",
//     authDomain: "plugeek-7d3ad.firebaseapp.com",
//     projectId: "plugeek-7d3ad",
//     storageBucket: "plugeek-7d3ad.appspot.com",
//     messagingSenderId: "428530174301",
//     appId: "1:428530174301:web:a53818f20300caa42a80b4"


// portalBox.classList.remove('hidden')