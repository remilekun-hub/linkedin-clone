import React from 'react'
import './style/Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import Inputoptions from './Inputoptions';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './firebase.js'
import { useState, useEffect } from 'react'
import firebase from 'firebase/compat/app';
import { useSelector} from 'react-redux';


function Feed() {
    const user = useSelector(state => state.userreducer.user)
    const [input, setInput] = useState('')
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => (
            setPosts(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        ))
    }, [])

    const sendpost = (e)=> {
        e.preventDefault();

        db.collection("posts").add({
            name: user.name,
            description: user.email,
            message: input, 
            photourl: user.photourl,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput("")
       
    }
    return (
        <div className="feed">
            <div className="feed-input-container">
                <div className="feed-input">
                    <CreateIcon/>
                    <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}/>
                    <button type="submit" onClick={sendpost}>Send</button>
                </div>
                <div className="input-options">
                   <Inputoptions Icon={<InsertPhotoIcon/>} title="Photo" color="#70b5f9"/>
                   <Inputoptions Icon={<VideoCameraBackIcon/>} title="Video" color="#e7a33e"/>
                   <Inputoptions Icon={<EventNoteIcon/>} title="Event" color="#c0cbcd"/>
                   <Inputoptions Icon={<CalendarViewDayIcon/>} title="Write Article" color="#7fc15e"/>
                </div>
            </div>
            {posts.map(({id, data: {name, description, message, photourl}}) => (
                <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photourl}
                />
            ))}
            
        </div>
    )
}

export default Feed
