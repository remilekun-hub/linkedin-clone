import React from 'react'
import Header from './Header'
import Feed from './Feed'
import Widget from './Widget'
import './style/Home.css'
import Sidebar from './Sidebar'

function Home() {
    return (
        <div className="home">
            <Header/>
            <div className="home-body">
                <Sidebar/>
                <Feed/>
                <Widget/>
            </div>
        </div>
    )
}

export default Home
