import React from 'react'
import './style/Navitem.css'
import Avatar from '@mui/material/Avatar';
import { useSelector} from 'react-redux';


function Navitem({Icon, title, avatar, onclick}) {
    const user = useSelector(state => state.userreducer.user)
    return (
        <div className="navitem" onClick={onclick}>
            <span>
                {Icon && Icon}
                {avatar && <Avatar className="nav-avatar" src={user.photourl}>{user.email[0]}</Avatar>}
            </span>
            <p>{title}</p>
        </div>
    )
}

export default Navitem
