import React from 'react';
import { useState } from 'react';
import { login} from './Redux/currentUser';
import {useDispatch} from 'react-redux'
import { auth } from './firebase';
import store from '.';
import logo from './LinkedIn-Logo.wine.svg';
import "./style/Login.css"


function Login() {
    const [name, setname] = useState("")
    const [profileurl, setprofileurl] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const logintoapp = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
            const user = {
                email: userAuth.user.email,
                id: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL
            }
            dispatch(login(user.id, user.name, user.email, user.photoURL))

        })
        .catch((error) => alert(error))
        
    }

    const register = (e) => {
        if (!name || !email) {
            return alert("name and email can't be empty")
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profileurl
            })
            .then(()=> {
                const user = {
                    email: userAuth.user.email,
                    id: userAuth.user.uid,
                    displayName: name,
                    photoURL: profileurl
                }
               dispatch(login(user.id, user.displayName, user.email, user.photoURL))
               console.log(store.getState())
            })
        }).catch(error => alert(error.message))
        
    }
    return (    
        <div className="login-wrapper">
            <div className="login-header">
                <div className="logo">
                    <img src={logo} alt="linked logo" style={{width:"150px", height:"65px"}}/>
                    
                </div>
            </div>
            <div className="form-wrapper">
            <form>
                <div className="form-title">
                    <h2>Sign In</h2>
                    <small>stay updated on your professional world</small>
                </div>
                <input type="text" placeholder="name" value={name} onChange={(e) => setname(e.target.value)}/>
                <input type="text" placeholder="profile pic url (optional)" value={profileurl} onChange={(e) => setprofileurl(e.target.value)}/>
                <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button onClick={logintoapp}>Sign In</button>
            </form>
                <p>
                New to Linkedin? 
                <span style={{marginLeft: "5px", cursor:"pointer", color:"#0a66c2", fontWeight:"bold"}} onClick={register}>
                    Join Now
                </span>
                </p>
            </div>
        </div>
    )
}

export default Login
