import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
  } from "firebase/auth";
  
  import { ToastContainer, toast, Bounce } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { createContext, useEffect, useState } from "react";
import { auth } from './../firebase.init';

  export const AuthContext = createContext();
  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    const notify = (a = 'Success!') => toast.success(a, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  
    const notifyError = (a = 'Error!') => toast.error(a, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  
    const createNewUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password)
        .then(() => notify())
        .finally(() => setLoading(false));
    };
  
    const userLogin = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
        .then( )
        .finally(() => setLoading(false));
    };
  
    const logOut = () => {
      if (!user) {
        return ;
      }
      setLoading(true);
      return signOut(auth)
        .then(() => notifyError('Loged out'))
        .finally(() => setLoading(false));
    };
  
  
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
      setLoading(true);
      signInWithPopup(auth, googleProvider)
        .then(result => {
          // console.log(result.user);
          setUser(result.user);
          notify();
        })
        .catch(error => {
          // console.log('ERROR', error);
          notifyError('Google sign-in failed');
          setUser(null);
        })
        .finally(() => setLoading(false));
    }

    const updateUserProfile = (profile) => {
       setLoading(true); 
       return updateProfile(auth.currentUser, profile) 
       .then(() => notify('Profile updated successfully!')) 
       .catch(error => { notifyError(error.message); }) 
       .finally(() => setLoading(false)); 
      };

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if(currentUser?.email){
          const user ={email:currentUser.email}
          fetch('http://localhost:3000/JWT',{
            method: 'POST',
            headers:{
              'content-type': 'application/json'
            },
            body :JSON.stringify(user),
            credentials: 'include',
          }
        ).then(res => res.json())
        .then(data => console.log('login token', data));
        }
        else{
          fetch('http://localhost:3000/logout',{
            method: 'POST',
            headers:{
              'content-type': 'application/json'
            },
            credentials: 'include',
          }).then(res => res.json())
          .then(data=>console.log("Logout : ",data))
        }
        setUser(currentUser);
        setLoading(false);
      });
      return () => unsubscribe();
    }, []);
  
    const authInfo = {
      user,
      setUser,
      createNewUser,
      logOut,
      userLogin,
      loading,
      handleGoogleSignIn,
      notify,
      notifyError,
      updateUserProfile
    };
  
    return (
      <AuthContext.Provider value={authInfo}>
        {children}
        <ToastContainer />
      </AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  