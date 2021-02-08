import firebase from 'firebase/app';

require('firebase/auth');

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();

export const Login = (setUser,setError,setNotification) =>{
    firebase.auth().signInWithPopup(provider).then((result)=>{
        setNotification('Login successfully!');
        const user = result.user;
        setUser(user);
    }).catch((error)=>{
        const errorMessage = error.message;
        setError(errorMessage);
    });

};

export const CheckUser=(setUser,setNotification)=>{
    firebase.auth().onAuthStateChanged((user)=>{
        setUser(user);
    });

};

export const Logout=(setUser,setError,setNotification)=>{
    firebase.auth().signOut().then(()=>{
        setNotification('Logout successfully!');
        setUser({name:null,email:null,id:null});
    }).catch((error)=>{
        const errorMessage = error.message;
        setError(errorMessage);
    });
};