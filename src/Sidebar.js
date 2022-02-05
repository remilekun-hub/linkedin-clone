import React from 'react'
import './style/Sidebar.css'
import Avatar from '@mui/material/Avatar';
import { useSelector} from 'react-redux';

function Sidebar() {
    const user = useSelector(state => state.userreducer.user)

    const recentitem = (topic) => (
        <div className="sidebarrecent">
            <span>#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className="sidebar">
            <div className="sidebar-top">
                <Avatar className="sidebar-avatar" src={user.photourl}>{user.email[0]}</Avatar>
                <h2>{user.name}</h2>
                <h4>{user.email}</h4>
            </div>
            <div className="sidebar-stats">
                <div className="sidebar-stat">
                    <p> Who viewed you</p>
                    <p className="stat-number">2500</p>
                </div>
                <div className="sidebar-stat">
                    <p>Views on post</p>
                    <p className="stat-number">2700</p>
                </div>
            </div>
            <div className="sidebar-bottom">
                <p>Recent</p>
                {recentitem("programming")}
                {recentitem("coding")}
                {recentitem("web development")}
                {recentitem("design")}
                {recentitem("application")}
            </div>
        </div>
    )
}

export default Sidebar
