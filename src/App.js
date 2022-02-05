import './App.css';
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Login from './Login';
import Home from './Home';
import { auth } from './firebase';
import { logout, login } from './Redux/currentUser'


function App() {
  
  const user = useSelector(state => state.userreducer.user)
  const dispatch = useDispatch()

  useEffect(() => {
      auth.onAuthStateChanged((userAuth) => {
        if (userAuth) {
          const user = {
            email: userAuth.email,
            id: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL
          }
          dispatch(login(user.id, user.displayName, user.email, user.photoURL))
        }
        else {
            dispatch(logout())
        }
      })
  }, [])


  return (
    <div className="App">
      {user ? <Home /> : <Login />} 
    </div>
  );
}

export default App;
