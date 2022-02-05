import React from 'react'
import './style/Widget.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widget() {
    const Newsarticle = (heading, subtitle) => (
        <div className="widgets-article">
            <div className="widgets-articleleft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widgets-articleright">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widget">
            <div className="widget-header">
                <h3>Linkedin News</h3>
                <InfoIcon/>
            </div>
            {Newsarticle("Renod in town!", "top news - 999 readers")}
            {Newsarticle("Corona Virus in nigeria", "top news - 599 readers")}
            {Newsarticle("Nigeria defeats egypt( afcon 2022)", "top news - 599 readers")}
            {Newsarticle("Arsenal show interest in dusan Vlachovic", "top news - 799 readers")}
        </div>
    )
}

export default Widget
