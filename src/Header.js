import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';
import './style/Header.css'
import Navitem from './Navitem';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { logout} from './Redux/currentUser';
import {useDispatch} from 'react-redux'
import { auth } from './firebase';


function Header() {
    const dispatch = useDispatch()

    function logoutofapp() {
       dispatch(logout())
       auth.signOut()
        
    }
    return (
        <header>
            
            <div className="logo-container">
                <LinkedInIcon className="logo" sx={{color:"#0a66c2", fontSize:"3rem"}}/>
                <div>
                    <SearchIcon/>
                    <input type="text" placeholder="search..."/>
                </div>
            </div>
            <nav>
                <Navitem Icon={<HomeIcon/>} title="Home"/>
                <Navitem Icon={<PeopleIcon/>} title="My Network"/>
                <Navitem Icon={<WorkIcon/>} title="Jobs"/>
                <Navitem Icon={<ChatIcon/>} title="Messaging"/>
                <Navitem Icon={<NotificationsIcon/>} title="Notifications"/>
                <Navitem title="logout" onclick={logoutofapp} avatar={true}/>
            </nav>
            <div className="mobile-nav">
                <Navitem title="logout" onclick={logoutofapp} avatar={true}/>
            </div>
        </header>
    )
}

export default Header
