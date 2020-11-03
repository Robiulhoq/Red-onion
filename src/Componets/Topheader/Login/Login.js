import React, { useState } from 'react';
import firebaseConfig from './firebaseConfig';
import  firebase from "firebase/app";
import "firebase/auth";
import './login.css';

firebase.initializeApp(firebaseConfig);

const Login = () => {
const  googleProvider = new firebase.auth.GoogleAuthProvider();
const [user, setUser] = useState({
  isSingIN: false,
  name: '',
  email: '',
  error: '',
})
   const hendleGoogleSingIn = () =>{
    firebase.auth().signInWithPopup(googleProvider)
    .then(function(result) {
      const {displayName, email} = result.user;
      const succesfulySingIn ={
        isSingIN: true,
        name: displayName,
        email: email
      }
      setUser(succesfulySingIn);
        
        
      }).catch(function(error) {
        const errorCode = error.code;
        console.log(errorCode)
        const errorMessage = error.message;
        console.log(errorMessage);
        const hendleError = {...user, errorMessage}
        setUser(hendleError);
    
        
      });
   };
  //  email password sing in
   
   const [createUser, setCeeateUser] = useState({
     email:'',
     password:'',
     confirmPassword:''
     
   });
  //  console.log(createUser.password, createUser.confirmPassword);


   const hendleBlur = (e) =>{
    
    // console.log(inputValue)
     let isFromValid = true;
     const password = createUser.password;
     const confirmPassword = createUser.confirmPassword;
     
  
     if(e.target.name === 'email'){
       isFromValid =  e.target.value;
       
     }
     if(e.target.name === 'password'){
      isFromValid =  e.target.value;
  }
  if(e.target.name === 'confirmPassword'){
    isFromValid = e.target.value;
 }
     if(confirmPassword === password){
       console.log('password  match')
      
    }
    // if(password !== confirmPassword){
    //   console.log('password dont match')
    // }
    
     
    
     if(isFromValid){
       const newUserInfo = {...createUser}
       newUserInfo[e.target.name] = e.target.value;
       setCeeateUser(newUserInfo);
     }
    //  console.log(e.target.value);
    // const singIn = {
    //   email: e.target.value,
    //   password: e.target.value
    // }
    // setCeeateUser(singIn);
   }
const hendleSubmit = (e) =>{
  firebase.auth().createUserWithEmailAndPassword(createUser.email, createUser.password)
  .then(res => console.log(res))
  .catch(function(error) {

    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
  e.preventDefault();
}

    return (
        <div className="login-form">
            <button onClick={hendleGoogleSingIn}>Google Sing in</button>
                <h2>{user.name}</h2>
                <h2>{user.error}</h2>
            <form  onSubmit={hendleSubmit}>
                {/* <input placeholder="Name" name="name"   type="text"/> */}
                <br/>
                <input placeholder="Email" onBlur={hendleBlur} name="email"  required type="text"/>
                <br/>
                <input placeholder="Password" onBlur={hendleBlur} type="password" required name="password" />
                <br/>
                <input placeholder="Confirm password" onBlur={hendleBlur} type="password "  name="confirmPassword" />
                <div className="submit">
                    <input type="submit" value="Sing in"/>
                </div>
            </form>
            
        </div>
    );
};

export default Login;