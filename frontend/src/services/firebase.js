import firebase from 'firebase/app';

require('firebase/auth');
require('firebase/database');

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

export const CheckUser=(setUser)=>{
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            setUser(user);
        }
    });

};

export const Logout=(setUser,setError,setNotification,set_team)=>{
    firebase.auth().signOut().then(()=>{
        set_team(null);
        setNotification('Logout successfully!');
        setUser({name:null,email:null,id:null});
    }).catch((error)=>{
        const errorMessage = error.message;
        setError(errorMessage);
    });
};

const db= firebase.database();
const usersDB = db.ref().child('users');


export const GetDB=(userID,setState)=>{
    usersDB.child(`${userID}`).on('value',(snap)=>{
        setState(snap.val());
    });
}

export const AddToDB=(userID,obj,set_errors,set_notifications)=>{
    try{
        usersDB.child(`${userID}`).push(obj);
        set_notifications('Analysis saved');
    }catch(e){
        set_errors('Can\'t save your analysis at this time');
    }
};

export const RemoveFromDB=()=>{

};

