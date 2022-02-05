import React from 'react'
import Avatar from '@mui/material/Avatar';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatIcon from '@mui/icons-material/Chat';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import './style/Post.css'
import Inputoptions from './Inputoptions';

function Post({name, description, message, photoUrl}) {

    return (
        <div className="post">
            <div className="post-header">
                <Avatar src={photoUrl}/>
                <div className="post-info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post-body">
                <p>{message}</p>
            </div>
            <div className="post-buttons">
                <Inputoptions Icon={<ThumbUpOffAltIcon/>} title="Like" color="grey"/>
                <Inputoptions Icon={<ChatIcon/>} title="Comment" color="grey"/>
                <Inputoptions Icon={<ShareOutlinedIcon/>} title="Share" color="grey"/>
                <Inputoptions Icon={<SendOutlinedIcon/>} title="Send" color="grey"/>
            </div>
        </div>
    )
}

export default Post
